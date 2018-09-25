/**
 * @file entry file
 */
import WebGLProxy from './WebGLProxy';
import Context2DProxy from './Context2DProxy';
import {ensureNativeObjectTypeInfo} from './nativeObjectTypeInfo';
import Recorder from './Recorder';

import Replay from './Replay';
import webglSpec from './spec/webgl';
import canvasSpec from './spec/canvas';

export function intercept(canvas) {
    ensureNativeObjectTypeInfo(canvas, 'HTMLCanvasElement');

    const recorder = new Recorder();

    const nativeGetContext = canvas.getContext;
    canvas.getContext = function (...args) {
        args[1] = args[1] || {};
        if (args[0] === 'webgl' || args[0] === 'experimental-webgl') {
            args[1] = Object.assign({}, args[1]);
            // For snapshot
            args[1].preserveDrawingBuffer = true;
        }
        const ctx = nativeGetContext.apply(this, args);

        // is webgl
        if (ctx && ctx.texImage2D) {
            // Lazy init
            return new WebGLProxy(ctx, recorder);
        }
        else {
            ensureNativeObjectTypeInfo(
                ctx.createImageData(1, 1),
                'ImageData'
            );
            return new Context2DProxy(ctx, recorder);
        }
    };

    return {recorder};
}

let inited = false;
export function init({
    createImage,
    createVideo
}) {
    if (inited) { return; }
    inited = true;
    if (!createImage) {
        console.warn('Missing image constructor info.');
    }
    if (!createVideo) {
        console.warn('Missing video constructor info.');
    }
    createImage && ensureNativeObjectTypeInfo(createImage(), 'HTMLCanvasElement');
    createVideo && ensureNativeObjectTypeInfo(createVideo(), 'HTMLVideoElement');
}

export function createWebGLReplay() {
    return new Replay(webglSpec);
}

export function create2DReplay() {
    return new Replay(canvasSpec);
}

export function DEFAULT_CREATE_IMAGE() {
    return document.createElement('image');
}
export function DEFAULT_CREATE_VIDEO() {
    return document.createElement('video');
}
