import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);

    // damping and auto rotation require
    // the controls to be updated each frame

    // this.controls.autoRotate = true;

    // to disable zoom
    //controls.enableZoom = false;

    // to disable rotation
    //controls.enableRotate = false;

    // to disable pan
    //controls.enablePan = false;

    controls.enableDamping = true;

    controls.tick = () => controls.update();

    return controls;
}

export { createControls };