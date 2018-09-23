/**
 * @file CanvasRenderingContext2D Proxy
 */
import webglSpec from './spec/webgl';
import {ensureNativeObjectTypeInfo} from './nativeObjectTypeInfo';

class WebGLProxy {
    constructor(ctx, recorder) {
        recorder.$init(webglSpec);

        Object.defineProperty(this, '_$rawContext', {
            enumerable: false,
            configurable: false,

            get() {
                return ctx;
            }
        });

        Object.defineProperty(this, '_$recorder', {
            enumerable: false,
            configurable: false,

            get() {
                return recorder;
            }
        });
    }

    get canvas() {
        return this._$rawContext.canvas;
    }
}

const webglObjectCreator = {
    'createBuffer': { name: 'WebGLBuffer', count: 0 },
    'createFramebuffer': { name: 'WebGLFramebuffer', count: 0 },
    'createProgram': { name: 'WebGLProgram', count: 0 },
    'createRenderbuffer': { name: 'WebGLRenderbuffer', count: 0 },
    'createShader': { name: 'WebGLShader', count: 0 },
    'createTexture': { name: 'WebGLTexture', count: 0 },
    'getUniformLocation': { name: 'WebGLUniformLocation', count: 0 }
};

webglSpec.methods.forEach(methodSpec => {

    const isGetter = methodSpec.name.startsWith('get')
            || methodSpec.name.startsWith('check');

    const retObjectType = webglObjectCreator[methodSpec.name] || null;

    WebGLProxy.prototype[methodSpec.name] = function (...args) {
        const ctx = this._$rawContext;

        const start = performance.now();
        const ret = ctx[methodSpec.name].apply(ctx, args);
        let execTime = performance.now() - start;

        // Ignore getter commands
        if (!isGetter) {
            const recorder = this._$recorder;
            recorder.addCommand(methodSpec.name, args, execTime);
        }

        if (retObjectType) {
            if (ret) {
                ensureNativeObjectTypeInfo(ret, retObjectType.name);
                ret.__wgiid__ = ret.count++;
            }
        }

        return ret;
    };
});

for (let en in webglSpec.enums) {
    WebGLProxy.prototype[en] = webglSpec.enums[en];
}

export default WebGLProxy;