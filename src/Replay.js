import DataUnpacker from './DataUnpacker';

class Replay {
    constructor(spec) {
        this._specMethodsMap = spec.methods.reduce((obj, methodSpec) => {
            obj[methodSpec.id] = methodSpec;
            return obj;
        }, {});
    }

    setBuffers(buffers) {
        this._buffers = buffers;
        this._bufferIdx = -1;
        this._nextBuffer();
    }

    readCommand() {
        if (!this._currentUnpacker) {
            return;
        }

        const packer = this._currentUnpacker;
        const startByteOffset = packer.byteOffset;
        const commandId = packer.unpack('short');
        if (commandId == null || commandId <= 0) {  // ID starts from 1.
            this._nextBuffer();
            return this.readCommand();
        }
        const argBytes = packer.unpack('short');
        const timestamp = packer.unpack('float');
        const cost = packer.unpack('float');
        const commandSpec = this._specMethodsMap[commandId];

        const args = [];

        for (let i = 0; i < commandSpec.args.length; i++) {
            const argSpec = commandSpec.args[i];
            if (argSpec.packType) {
                args[i] = {
                    value: packer.unpack(argSpec.packType),
                    type: argSpec.idlType
                };
            }
            else {  // WebGL/Context2D Object type
                const val = packer.unpack('int');
                args[i] = {
                    value: val === -1 ? null : val,
                    type: argSpec.idlType
                };
            }
        }

        packer.byteOffset = startByteOffset + argBytes + 12;

        return {
            name: commandSpec.name,
            timestamp,
            cost,
            args
        };
    }

    _nextBuffer() {
        const buffers = this._buffers;
        this._bufferIdx++;
        if (buffers[this._bufferIdx]) {
            this._currentUnpacker = new DataUnpacker(buffers[this._bufferIdx]);
        }
        else {
            this._currentUnpacker = null;
        }
    }
}

export default Replay;