import {
    SphereBufferGeometry,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
} from 'three';

function createSphere() {
    const geometry = new SphereBufferGeometry(.5, 32, 32);
    const material = new MeshStandardMaterial({ color: 'red' });
    const sphere = new Mesh(geometry, material);

    sphere.position.set(-2.5, 0, 3);
    //sphere.rotation.set(-0.5, -0.1, 0.8);

    var direction = 1;
    // this method will be called once per frame
    sphere.tick = (delta) => {
        // increase the sphere's rotation each frame
        if (sphere.scale.x <= 0.1) {
            direction = 1;
        } else if (sphere.scale.x >= 1) {
            direction = -1;
        }

        sphere.scale.z += 0.5 * delta * direction;
        sphere.scale.x += 0.5 * delta * direction;
        sphere.scale.y += 0.5 * delta * direction;
    };

    return sphere;
}

export { createSphere };