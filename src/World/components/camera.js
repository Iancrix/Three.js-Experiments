import { PerspectiveCamera } from 'three';

function createCamera() {
    const camera = new PerspectiveCamera(
        50,//50, // fov = Field Of View
        1, // aspect ratio (dummy value)
        0.001, // near clipping plane
        500, // far clipping plane
    );

    // move the camera back so we can view the scene
    //camera.position.set(0, 0, 10);
    //camera.position.set(0, 0, -170);
    //camera.position.set(0.1, 0, 0);
    camera.position.set(0, 0, 10);
    return camera;
}

export { createCamera };