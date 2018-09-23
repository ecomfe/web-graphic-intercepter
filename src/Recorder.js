/**
 * @file Record all commands in buffer
 */

import DataPacker from './DataPacker';
import {getNativeObjectTypeInfo, getNativeObjectTypeInfoOfName} from './nativeObjectTypeInfo';

const COMMAND_BUFFER_SIZE = 1e5;

const packTypeToJSType = {
    'float': 'Number',
    'int': 'Number',
    'uint': 'Number',
    'short': 'Number',
    'ushort': 'Number',
    'byte': 'Number',
    'ubyte': 'Number',
    'bool': 'Boolean',
    'string': 'String',
    // PENDING
    // 'float[]': 'Array',
    // 'int[]': 'Array',
    'color': 'String'
};

function compareArgTypes(argsSpec, args) {
    for (let i = 0; i < argsSpec.length; i++) {
        const argSpec = argsSpec[i];
        const arg = args[i];
        if (arg == null) {
            if (argSpec.nullable) {
                continue;
            }
            return false;
        }
        const argTypeInfo = getNativeObjectTypeInfo(arg);
        if (!argTypeInfo) {
            throw new Error('Unkown argument type, ', argsSpec.name, arg);
        }
        if (argTypeInfo.name === argSpec.jsType) {
            continue;
        }
        // Compare base calss
        if (argTypeInfo.base) {
            const baseTypeInfo = getNativeObjectTypeInfoOfName(argTypeInfo.base);
            if (baseTypeInfo.name === argSpec.jsType) {
                continue;
            }
            return false;
        }
    }
    return true;
}

class Recorder {

    constructor() {

        this._commandsBuffers = [];
        this._currentBufferView = null;

        this._createPacker();

        this._recording = false;
    }

    // Init recorder in WebGLProxy or Context2DProxy.
    // DO NOT call it manually
    $init(spec) {
        if (this._specMethodsMap) {
            throw new Error('Recorder has been inited already.');
        }
        this._specMethodsMap = spec.methods.reduce((obj, methodSpec) => {
            if (!obj[methodSpec.name]) {
                obj[methodSpec.name] = [];
            }
            methodSpec.args.forEach(argSpec => {
                argSpec.jsType = (argSpec.packType && packTypeToJSType[argSpec.packType])
                    || argSpec.idlType;
            });
            obj[methodSpec.name].push(methodSpec);
            return obj;
        }, {});

    }

    /**
     * Start recording
     */
    start() {
        this._recording = true;
    }
    /**
     * Stop recording
     */
    stop() {
        this._recording = false;
    }

    /**
     * Add a command with command name and args
     * @param {string} commandName
     * @param {Array} args
     * @return byteOffset, -1 if buffer has no space.
     */
    addCommand(commandName, args) {
        if (!this._recording) {
            return;
        }
        const packer = this._cuurentDataPacker;

        const startByteOffset = packer.byteOffset;
        let endByteOffset = startByteOffset;

        const commandSpec = this._getCommandSpec(commandName, args);

        endByteOffset = packer.pack('short', commandSpec.id);
        endByteOffset = packer.pack('short', 0);

        for (let i = 0; i < args.length; i++) {
            const argSpec = commandSpec.args[i];
            const value = args[i];

            if (argSpec.packType) { // Pack type
                endByteOffset = packer.pack(argSpec.packType, value);
            }
            else {  // WebGL Object type.
                if (value == null) {
                    endByteOffset = packer.pack('int', -1);
                }
                else {
                    endByteOffset = packer.pack(
                        'int',
                        value.__wgiid__ == null ? -1 : value.__wgiid__
                    );
                }
            }
        }
        if (endByteOffset < -1) {
            this._cuurentDataPacker.end();
            this._createPacker();
            this.addCommand(commandName, args);
            return;
        }

        // Arg length.
        packer.dataView.setUint16(startByteOffset + 2, endByteOffset - startByteOffset - 4);
    }

    commit() {

    }

    addShot() {

    }

    _getCommandSpec(commandName, args) {
        const methodSpec = this._specMethodsMap[commandName];
        if (methodSpec.length === 1) {
            return methodSpec[0];
        }
        for (let i = 0; i < methodSpec.length; i++) {
            if (compareArgTypes(methodSpec[i].args, args)) {
                return methodSpec[i];
            }
        }
        for (let i = 0; i < methodSpec.length; i++) {
            compareArgTypes(methodSpec[i].args, args);
        }
    }

    _createPacker() {
        const buffer = new ArrayBuffer(COMMAND_BUFFER_SIZE);
        this._commandsBuffers.push(buffer);
        this._cuurentDataPacker = new DataPacker(buffer);

        this._byteOffset = 0;
    }
}


export default Recorder;
