/**
 * @file CanvasRenderingContext2D Proxy
 */
import canvasSpec from './spec/canvas';
import Recorder from './Recorder';

class Context2DProxy {
    constructor(ctx) {
        const recorder = new Recorder(canvasSpec);

        Object.defineProperty(this, 'getRawContext', {
            enumerable: false,
            configurable: false,

            get() {
                return ctx;
            }
        });

        Object.defineProperty(this, 'getCommandRecorder', {
            enumerable: false,
            configurable: false,

            get() {
                return recorder;
            }
        });
    }
}

// canvasSpec.method.forEach(methodSpec => {
//     Context2DProxy.prototype[methodSpec.name] = function (...args) {
//         const ctx = this.getRawContext();
//         const recorder = this.getCommandRecorder();

//         recorder.addCommand(
//             methodSpec.name, args, methodSpec.args
//         );
//         const result = ctx[methodSpec.name].apply(ctx, args);

//         return result;
//     };
// });

export default Context2DProxy;