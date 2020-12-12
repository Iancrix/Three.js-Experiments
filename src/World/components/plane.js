import {
    PlaneBufferGeometry,
    Mesh,
    MeshBasicMaterial,
    DoubleSide,
    MeshStandardMaterial,
    TextureLoader,
    MathUtils,
    MeshToonMaterial
} from 'three';

function createMaterial() {
    // create a texture loader.
    const textureLoader = new TextureLoader();

    // load a texture
    const texture = textureLoader.load(
        '/assets/textures/Superforest_Logo.png',
    );

    // create a "standard" material using
    // the texture we just loaded as a color map
    const material = new MeshStandardMaterial({
        map: texture,
        transparent: true,
        side: DoubleSide
    });

    return material;
}

function createPlane() {
    const geometry = new PlaneBufferGeometry(45, 20, 8);

    const material = new MeshStandardMaterial({
        color: "blue"
    });

    const plane = new Mesh(geometry, material);

    plane.position.set(0, -4, 0);
    plane.rotation.x = MathUtils.degToRad(-70);
    //const radiansPerSecond = MathUtils.degToRad(60);

    /*
    plane.tick = (delta) => {
        plane.rotation.y += radiansPerSecond * delta;
    };
    */

    return plane;
}

export { createPlane };