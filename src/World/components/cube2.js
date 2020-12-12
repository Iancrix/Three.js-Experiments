import {
    BoxBufferGeometry,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
} from 'three';

function createCube2() {
    const geometry = new BoxBufferGeometry(2, 2, 2);
    const material = new MeshStandardMaterial({ color: 'green' });
    const cube = new Mesh(geometry, material);

    cube.position.set(5, 0, -10);
    cube.rotation.set(0, 0, 0);

    const radiansPerSecond = MathUtils.degToRad(90);

    var direction = -1;
    // this method will be called once per frame
    cube.tick = (delta) => {
        // increase the cube's rotation each frame
        //cube.rotation.z += radiansPerSecond * delta;
        //cube.rotation.x += radiansPerSecond * delta;
        if (cube.position.x <= -5) {
            direction = 1;
        } else if (cube.position.x >= 5) {
            direction = -1;
        }
        cube.position.x += 2 * delta * direction;
        cube.rotation.y += radiansPerSecond * delta;
    };

    return cube;
}

export { createCube2 };