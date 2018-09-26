import DataUnpacker from './DataUnpacker';
import FastDataView from 'fast-dataview';

class Replay {
    constructor(spec) {
        this._specMethodsMap = spec.methods.reduce((obj, methodSpec) => {
            obj[methodSpec.id] = methodSpec;
            return obj;
        }, {});

        this._enumsMap = {};
        for (let key in spec.enums) {
            this._enumsMap[spec.enums[key]] = key;
        }
    }

    setBuffer(buffer) {
        this._buffer = buffer;

        const dataView = new FastDataView(buffer);
        const commandsBuffer = buffer.slice(
            dataView.getUint32(4), dataView.getUint32(4) + dataView.getUint32(8)
        );
        // const vertexDataBuffer = buffer.slice(
        //     dataView.getUint32(20), dataView.getUint32(20) + dataView.getUint32(24)
        // );
        // const imageDataBuffer = buffer.slice(
        //     dataView.getUint32(28), dataView.getUint32(28) + dataView.getUint32(32)
        // );

        this._snapshotByteOffset = dataView.getUint32(12);
        this._snapshotByteLength = dataView.getUint32(16);

        this._commandUnpacker = new DataUnpacker(commandsBuffer);
    }

    readCommand(convertToString = false) {
        const unpacker = this._commandUnpacker;
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
                const val = unpacker.unpack(argSpec.packType);
                args[i] = {
                    value: val,
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
            if (convertToString) {
                if (args[i].value != null) {
                    const val = args[i].value;
                    if (argSpec.idlType === 'GLenum') {
                        args[i].string = this._enumsMap[val];
                    }
                    else {
                        if (argSpec.packType) {
                            args[i].string = val.toString();
                        }
                        else {
                            // WebGL/Context2D Object type
                            args[i].string = argSpec.idlType + '<' + val + '>';
                        }
                    }
                }
                else {
                    args[i].string = 'null';
                }
            }
        }
        // Avoid inconsistent in args parsing
        unpacker.byteOffset = startByteOffset + argBytes + 12;

        let snapshot;
        // Has snapshot
        if (this._snapshotByteLength > 0 && commandSpec.drawCall) {
            const byteOffset = unpacker.unpack('uint') + this._snapshotByteOffset;
            const byteLength = unpacker.unpack('uint');
            snapshot = {
                width: unpacker.unpack('ushort'),
                height: unpacker.unpack('ushort'),
                pixels: new Uint8Array(this._buffer.slice(
                    byteOffset, byteOffset + byteLength
                ))
            };
        }

        return {
            name: commandSpec.name,
            timestamp,
            cost,
            args,
            snapshot
        };
    }
}

export default Replay;