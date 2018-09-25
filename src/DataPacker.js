/**
 * @file Pack command data in a binary buffer.
 */
import FastDataView from 'fast-dataview';
// import {TextEncoder} from 'text-encoding';
import {TextEncoder} from 'text-encoding-utf-8';
import {parse as parseColor} from './util/color';

const textEncoder = new TextEncoder();

const COMMAND_END = -1;

export default class DataPacker {
    constructor(buffer) {
        this._view = new FastDataView(buffer);
        this._buffer = buffer;
        this._byteOffset = 0;
    }

    pack(type, value) {
        const view = this._view;
        let byteOffset = this._byteOffset;

        switch (type) {
            case 'float':
                view.setFloat32(byteOffset, value);
                byteOffset += 4;
                break;
            case 'int':
                // 32 or 64
                view.setInt32(byteOffset, value);
                byteOffset += 4;
                break;
            case 'uint':
                view.setUint32(byteOffset, value);
                byteOffset += 4;
                break;
            case 'short':
                view.setInt16(byteOffset, value);
                byteOffset += 2;
                break;
            case 'ushort':
                view.setUint16(byteOffset, value);
                byteOffset += 2;
                break;
            case 'byte':
                view.setInt8(byteOffset, value);
                byteOffset += 1;
                break;
            case 'ubyte':
                view.setUint8(byteOffset, value);
                byteOffset += 1;
                break;
            case 'bool':
                view.setUint8(byteOffset, value);
                byteOffset += 1;
                break;
            case 'float[]':
                view.setUint32(byteOffset, value.length * 4);
                byteOffset += 4;
                for (let i = 0; i < value.length; i++) {
                    view.setFloat32(byteOffset, value[i]);
                    byteOffset += 4;
                }
                break;
            case 'int[]':
                view.setUint32(byteOffset, value.length * 4);
                byteOffset += 4;
                for (let i = 0; i < value.length; i++) {
                    view.setInt(byteOffset, value[i]);
                    byteOffset += 4;
                }
                break;
            case 'string':
                const stringBytes = textEncoder.encode(value);
                // Pack length
                view.setUint32(byteOffset, stringBytes.byteLength);
                byteOffset += 4;
                for (let i = 0; i < stringBytes.length; i++) {
                    view.setUint8(byteOffset++, stringBytes[i]);
                }
                break;
            case 'color':
                const colorArr = parseColor(value);
                view.setUint8(byteOffset++, colorArr[0]);
                view.setUint8(byteOffset++, colorArr[1]);
                view.setUint8(byteOffset++, colorArr[2]);
                view.setUint8(byteOffset++, colorArr[3]);
                break;
            default:
                throw new Error('Unkown type ' + type);
        }

        // Not enough space.
        if (byteOffset >= this._buffer.byteLength) {
            return -1;
        }

        this._byteOffset = byteOffset;

        return byteOffset;
    }

    get buffer() {
        return this._buffer;
    }

    get dataView() {
        return this._view;
    }

    set byteOffset(val) {
        this._byteOffset = val;
    }

    get byteOffset() {
        return this._byteOffset;
    }

    get byteLength() {
        // Use byteOffset
        return this._byteOffset;
    }
}
