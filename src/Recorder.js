/**
 * @file Record all commands in buffer
 */

import DataPacker from './DataPacker';
import {getNativeObjectTypeInfo, getNativeObjectTypeInfoOfName} from './nativeObjectTypeInfo';
import FastDataView from 'fast-dataview';
// import {MASK_BITS} from './spec/mask';

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

function downsamplePixels(pixels, width, height) {
    const downsampledWidth = 100;
    const downsampledScale = width / downsampledWidth;
    const downsampledHeight = Math.round(height / downsampledScale);
    const downsampledPixels = new pixels.constructor(downsampledWidth * downsampledHeight * 4);
    let off = 0;
    for (let y = 0; y < downsampledHeight; y++) {
        for (let x = 0; x < downsampledWidth; x++) {
            // Nearest sampling
            const idx2 = (Math.floor(y * downsampledScale) * width
                + Math.floor(x * downsampledScale)) * 4;

            downsampledPixels[off++] = pixels[idx2];
            downsampledPixels[off++] = pixels[idx2 + 1];
            downsampledPixels[off++] = pixels[idx2 + 2];
            downsampledPixels[off++] = pixels[idx2 + 3];
        }
    }

    return {
        pixels: downsampledPixels,
        width: downsampledWidth,
        height: downsampledHeight
    };
}

class Recorder {

    constructor() {

        this._commandPackers = [];
        this._snapshots = [];

        this._createPacker();

        this._recording = false;
        this._snapshotByteOffset = 0;
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
    start({
        snapshot
    }) {
        if (this._recording) {
            return;
        }

        this._snapshot = snapshot || false;

        this._recording = true;
        // PENDING Performance implementation?
        this._startTime = performance.now();
    }

    /**
     * If take snapshot
     */
    shouldTakeSnapshot() {
        return this._snapshot && this._recording;
    }
    /**
     * Stop recording and commit
     */
    stop() {
        this._recording = false;
        return this.commit();
    }

    /**
     * Add a command with command name and args
     * @param {string} commandName
     * @param {Array} args
     * @return byteOffset, -1 if buffer has no space.
     */
    addCommand(commandName, args, execTime, snapshot) {
        if (!this._recording) {
            return;
        }
        const packer = this._currentPacker;

        const startByteOffset = packer.byteOffset;
        let endByteOffset = startByteOffset;

        const commandSpec = this._getCommandSpec(commandName, args);
        // |-int16-|-int16-|---float---|---float---|
        // |  id   | bytes | timestamp | time cost |
        endByteOffset = packer.pack('short', commandSpec.id);
        endByteOffset = packer.pack('short', 0);
        endByteOffset = packer.pack('float', performance.now() - this._startTime);
        endByteOffset = packer.pack('float', execTime);

        for (let i = 0; i < args.length; i++) {
            const argSpec = commandSpec.args[i];
            const value = args[i];

            if (argSpec.packType) {
                // Data can be packed into buffer
                // Like number, string, color, TypedArray
                endByteOffset = packer.pack(argSpec.packType, value);
            }
            else {  // Otherwise, WebGL/Context2D Object type.
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

        const argBytes = endByteOffset - startByteOffset - 12;
        if (snapshot) {
            snapshot = downsamplePixels(snapshot.pixels, snapshot.width, snapshot.height);
            endByteOffset = packer.pack('uint', this._snapshotByteOffset);
            endByteOffset = packer.pack('uint', snapshot.pixels.byteLength);
            endByteOffset = packer.pack('ushort', snapshot.width);
            endByteOffset = packer.pack('ushort', snapshot.height);
        }

        if (endByteOffset < -1) {   // Not enough space. Create a new buffer and repack the command.
            packer.byteOffset = startByteOffset;    // Rollback
            this._createPacker();
            this.addCommand(commandName, args, execTime, snapshot);
            return;
        }

        if (snapshot) {
            this._snapshotByteOffset += snapshot.pixels.byteLength;
            this._snapshots.push(snapshot);
        }
        // Arg bytes.
        // PENDING shader string too long?
        packer.dataView.setUint16(startByteOffset + 2, argBytes);
    }

    commit() {
        let commandsBytes = 0;
        let snapshotsBytes = 0;
        let vertexDataBytes = 0;
        let imageBytes = 0;
        this._commandPackers.forEach(packer => {
            commandsBytes += packer.byteLength;
        });
        this._snapshots.forEach(snapshot => {
            snapshotsBytes += snapshot.pixels.byteLength;
        });
        const ret = new Uint8Array(
            36 + commandsBytes + snapshotsBytes + vertexDataBytes + imageBytes
        );
        let dataView = new FastDataView(ret.buffer);
        // Header(36 bytes):
        // masks(4 bytes)
        // commands(8 bytes)
        dataView.setUint32(4, 36);
        dataView.setUint32(8, commandsBytes);
        // snapshots(8 bytes)
        dataView.setUint32(12, 36 + commandsBytes);
        dataView.setUint32(16, snapshotsBytes);
        // vertex data(8 bytes)
        dataView.setUint32(20, 36 + commandsBytes + snapshotsBytes);
        dataView.setUint32(24, vertexDataBytes);
        // Image(8 bytes)
        dataView.setUint32(28, 36 + commandsBytes + snapshotsBytes + vertexDataBytes);
        dataView.setUint32(32, imageBytes);

        let byteOffset = 36;
        for (let p = 0; p < this._commandPackers.length; p++) {
            const packer = this._commandPackers[p];
            const arr = new Uint8Array(packer.buffer);
            // Not use arr.length because it's not full.
            const byteLength = packer.byteLength;
            for (let i = 0; i < byteLength; i++) {
                ret[byteOffset++] = arr[i];
            }
        }

        for (let p = 0; p < this._snapshots.length; p++) {
            const snapshot = this._snapshots[p];
            const arr = new Uint8Array(snapshot.pixels);
            for (let i = 0; i < arr.length; i++) {
                ret[byteOffset++] = arr[i];
            }
        }

        this._commandPackers = [];
        this._createPacker();
        this._snapshotByteOffset = 0;
        this._snapshots = [];

        return ret.buffer;
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
        // for (let i = 0; i < methodSpec.length; i++) {
        //     compareArgTypes(methodSpec[i].args, args);
        // }
    }

    _createPacker() {
        const buffer = new ArrayBuffer(COMMAND_BUFFER_SIZE);
        this._currentPacker = new DataPacker(buffer);
        this._commandPackers.push(this._currentPacker);
    }
}


export default Recorder;
