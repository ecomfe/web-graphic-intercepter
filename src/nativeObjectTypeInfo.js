/**
 * @file All native object types. Object toString maybe different in different platforms.
 *  So we use WeakMap to map the object constructor and type.
 */

let nativeObjectsInfoMap = new WeakMap();
let nativeObjectsInfoNameMap = {};

let uid = 0;
var shortChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

export function ensureNativeObjectTypeInfo(obj, name, base) {
    let info = nativeObjectsInfoMap.get(obj.constructor);
    if (!info) {
        info = {
            // At most 64
            short: shortChars[uid],
            id: uid++,
            name: name,
            base: base || ''
        };
        nativeObjectsInfoMap.set(obj.constructor, info);
        nativeObjectsInfoNameMap[name] = info;

        // At most one inherits
        if (base && !nativeObjectsInfoNameMap[base]) {
            nativeObjectsInfoNameMap[base] = {
                short: shortChars[uid],
                id: uid++,
                name: base,
                base: ''
            };
        }
    }
    return info;
}
ensureNativeObjectTypeInfo(new Float64Array(), 'Float64Array', 'ArrayBufferView');
ensureNativeObjectTypeInfo(new Float32Array(), 'Float32Array', 'ArrayBufferView');
ensureNativeObjectTypeInfo(new Int32Array(), 'Int32Array', 'ArrayBufferView');
ensureNativeObjectTypeInfo(new Uint32Array(), 'Uint32Array', 'ArrayBufferView');
ensureNativeObjectTypeInfo(new Int16Array(), 'Int16Array', 'ArrayBufferView');
ensureNativeObjectTypeInfo(new Uint16Array(), 'Uint16Array', 'ArrayBufferView');
ensureNativeObjectTypeInfo(new Int8Array(), 'Int8Array', 'ArrayBufferView');;
ensureNativeObjectTypeInfo(new Uint8Array(), 'Uint8Array', 'ArrayBufferView');
ensureNativeObjectTypeInfo(new ArrayBuffer(), 'ArrayBuffer');

ensureNativeObjectTypeInfo(new Array(), 'Array');
ensureNativeObjectTypeInfo(1, 'Number');
ensureNativeObjectTypeInfo('', 'String');
ensureNativeObjectTypeInfo(true, 'Boolean');


// export function initGL(gl) {
//     const webglBuffer = gl.createBuffer();
//     const webglFramebuffer = gl.createFramebuffer();
//     const webglProgram = gl.createProgram();
//     const webglRenderbuffer = gl.createRenderbuffer();
//     const webglShader = gl.createShader();
//     const webglTexture = gl.createTexture();

//     [
//         [webglBuffer, 'WebGLBuffer'],
//         [webglFramebuffer, 'WebGLFrameBuffer'],
//         [webglProgram, 'WebGLProgram'],
//         [webglRenderbuffer, 'WebGLRenderbuffer'],
//         [webglShader, 'WebGLShader'],
//         [webglTexture, 'WebGLTexture']
//     ].forEach(([obj, name]) => {
//         ensureNativeObjectTypeInfo(obj, name);
//     });

//     gl.deleteBuffer(webglBuffer);
//     gl.deleteFramebuffer(webglFramebuffer);
//     gl.deleteProgram(webglProgram);
//     gl.deleteRenderbuffer(webglRenderbuffer);
//     gl.deleteShader(webglShader);
//     gl.deleteTexture(webglTexture);

//     // TODO WebGLUniformLocation
// }

export function getNativeObjectTypeInfo(object) {
    return nativeObjectsInfoMap.get(object.constructor);
}

export function getNativeObjectTypeInfoOfName(name) {
    return nativeObjectsInfoNameMap[name];
}
