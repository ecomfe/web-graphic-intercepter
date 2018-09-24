import DataUnpacker from './DataUnpacker';

class Replay {
    constructor(spec) {
        this._specMethodsMap = spec.methods.reduce((obj, methodSpec) => {
            obj[methodSpec.id] = methodSpec;
            return obj;
        }, {});
    }

    setBuffer(buffer) {
        this._buffer = buffer;
        this._unpacker = new DataUnpacker(buffer);
    }

    readCommand() {
        const unpacker = this._unpacker;
        const startByteOffset = unpacker.byteOffset;
        const commandId = unpacker.unpack('short');
        if (commandId == null || commandId <= 0) {  // ID starts from 1.
            return;
        }
        const argBytes = unpacker.unpack('short');
        const timestamp = unpacker.unpack('float');
        const cost = unpacker.unpack('float');
        const commandSpec = this._specMethodsMap[commandId];

        const args = [];

        for (let i = 0; i < commandSpec.args.length; i++) {
            const argSpec = commandSpec.args[i];
            if (argSpec.packType) {
                args[i] = {
                    value: unpacker.unpack(argSpec.packType),
                    type: argSpec.idlType
                };
            }
            else {  // WebGL/Context2D Object type
                const val = unpacker.unpack('int');
                args[i] = {
                    value: val === -1 ? null : val,
                    type: argSpec.idlType
                };
            }
        }

        unpacker.byteOffset = startByteOffset + argBytes + 12;

        return {
            name: commandSpec.name,
            timestamp,
            cost,
            args
        };
    }
}

export default Replay;