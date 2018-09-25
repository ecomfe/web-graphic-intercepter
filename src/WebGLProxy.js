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

    const isDrawCall = !!methodSpec.drawCall;

    WebGLProxy.prototype[methodSpec.name] = function (...args) {
        const ctx = this._$rawContext;
        const recorder = this._$recorder;

        const start = performance.now();
        const ret = ctx[methodSpec.name].apply(ctx, args);
        // TODO performance now is not so high resolution
        let execTime = performance.now() - start;

        let snapshot = null;
        if (isDrawCall && recorder.shouldTakeSnapshot()) {
            // TODO Float Render Target?
            const pixels = new Uint8Array(ctx.canvas.width * ctx.canvas.height * 4);
            ctx.readPixels(0, 0, ctx.canvas.width, ctx.canvas.height, ctx.RGBA, ctx.UNSIGNED_BYTE, pixels);
            snapshot = pixels;
        }

        // Ignore getter commands
        if (!isGetter) {
            recorder.addCommand(methodSpec.name, args, execTime, snapshot ? {
                width: ctx.canvas.width,
                height: ctx.canvas.height,
                pixels: snapshot
            } : null);
        }

        if (retObjectType) {
            if (ret) {
                ensureNativeObjectTypeInfo(ret, retObjectType.name);
                ret.__wgiid__ = retObjectType.count++;
            }
        }

        return ret;
    };
});

for (let en in webglSpec.enums) {
    WebGLProxy.prototype[en] = webglSpec.enums[en];
}

export default WebGLProxy;