# Web Graphic Intercepter

Cross platforms graphic api intercepter. Works for WebGL/Canvas on PC / Mobile / Worker / NodeJS / Weapp

## Example usage

```js
const canvas = document.querySelector('canvas');
wgi.init({
    createImage: wgi.DEFAULT_CREATE_IMAGE,
    createVideo: wgi.DEFAULT_CREATE_VIDEO
});
////////////////// Recorder ///////////////////
const {recorder} = wgi.intercept(canvas);
recorder.start({
    snapshot: true
});

////////////////// Main App ///////////////////
clay.application.create(canvas, {
    init(app) {
        app.renderer.clearColor = [0, 0, 1, 1];
        this._camera = app.createCamera([0, 2, 5], [0, 0, 0]);
        this._cube = app.createCube({
            diffuseMap: './asset/crate.gif'
        });
        this._mainLight = app.createDirectionalLight([-1, -1, -1]);
    },
    loop(app) {
        this._cube.rotation.rotateY(app.frameTime / 1000);
    }
});

////////////////// Replay ///////////////////
const consoleEl = document.getElementById('console');
const replay = wgi.createWebGLReplay();

const snapshotCanvas = document.createElement('canvas');
snapshotCanvas.width = 100;
snapshotCanvas.height = 100;
const snapshotCtx = snapshotCanvas.getContext('2d');
function displayCommands() {
    // Replay commands each frame.
    const buffer = recorder.commit();
    replay.setBuffer(buffer);
    let command;
    let str = '';
    let snapshot;
    while (command = replay.readCommand()) {
        const argStr = command.args.map(arg => arg.value).join(',');
        str += `${command.name}(${argStr})<br />`

        snapshot = command.snapshot;
    }
    if (snapshot) {
        const imageData = snapshotCtx.createImageData(snapshot.width, snapshot.height);
        for (let i = 0; i < snapshot.pixels.length; i++) {
            imageData.data[i] = snapshot.pixels[i];
        }
        snapshotCtx.putImageData(imageData, 0, 0);
    }
    consoleEl.innerHTML = str;
    // Only display last snapshot
    consoleEl.appendChild(snapshotCanvas);

    requestAnimationFrame(displayCommands);
}
requestAnimationFrame(displayCommands);
```