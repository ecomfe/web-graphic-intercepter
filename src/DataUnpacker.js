/**
 * @file Unpack command data from a binary buffer.
 */
import FastDataView from 'fast-dataview';
import {TextDecoder} from 'text-encoding-utf-8';
import {parse as parseColor, stringify} from './util/color';

const textDecoder = new TextDecoder();

export default class DataUnpacker {
    constructor(buffer) {
        this._view = new FastDataView(buffer);
        this._buffer = buffer;
        this._byteOffset = 0;
    }

    unpack(type) {
        const view = this._view;
        let byteOffset = this._byteOffset;
        if (byteOffset >= this._buffer.length) {
            return;
        }

        let val;
        let bytes;
        switch (type) {
            case 'float':
                val = view.getFloat32(byteOffset);
                byteOffset += 4;
                break;
            case 'int':
                // 32 or 64
                val = view.getInt32(byteOffset);
                byteOffset += 4;
                break;
            case 'uint':
                val = view.getUint32(byteOffset);
                byteOffset += 4;
                break;
            case 'short':
                val = view.getInt16(byteOffset);
                byteOffset += 2;
                break;
            case 'ushort':
                val = view.getUint16(byteOffset);
                byteOffset += 2;
                break;
            case 'byte':
                val = view.getInt8(byteOffset);
                byteOffset += 1;
                break;
            case 'ubyte':
                val = view.getUint8(byteOffset);
                byteOffset += 1;
                break;
            case 'bool':
                val = view.getUint8(byteOffset);
                byteOffset += 1;
                break;
            case 'float[]':
                const len = view.getUint32(byteOffset.length);
                val = new Float32Array(len / 4);
                byteOffset += 4;
                for (let i = 0; i < len / 4; i++) {
                    val[i] = view.getFloat32(byteOffset);
                    byteOffset += 4;
                }
                break;
            case 'int[]':
                bytes = view.getUint32(byteOffset);
                val = new Float32Array(bytes / 4);
                byteOffset += 4;
                for (let i = 0; i < bytes / 4; i++) {
                    val[i] = view.getFloat32(byteOffset);
                    byteOffset += 4;
                }
                break;
            case 'string':
                bytes = view.getUint32(byteOffset);
                byteOffset += 4;
                const arr = new Uint8Array(bytes);
                for (let i = 0; i < bytes; i++) {
                    arr[i] = view.getUint8(byteOffset++);
                }
                val = textDecoder.decode(arr);
                break;
            case 'color':
                const r = view.getUint8(byteOffset++);
                const g = view.getUint8(byteOffset++);
                const b = view.getUint8(byteOffset++);
                const a = view.getUint8(byteOffset++);
                val = stringify([r, g, b, a], 'rgba');
                break;
        }

        this._byteOffset = byteOffset;
        return val;
    }

    get dataView() {
        return this._view;
    }

    get byteOffset() {
        return this._byteOffset;
    }

    set byteOffset(val) {
        this._byteOffset = val;
    }
}
