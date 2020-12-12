import {
    BoxBufferGeometry,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    TextureLoader,
} from 'three';

function createMaterial() {
    // create a texture loader.
    const textureLoader = new TextureLoader();

    // load a texture
    const texture = textureLoader.load(
        '/assets/textures/uv-test-bw.png',
    );

    // create a "standard" material using
    // the texture we just loaded as a color map
    const material = new MeshStandardMaterial({
        map: texture,
    });

    return material;
}

function createCube() {
    const geometry = new BoxBufferGeometry(2, 2, 2);
    const material = createMaterial();

    const cube = new Mesh(geometry, material);

    cube.position.set(0, 0, -5);
    cube.rotation.set(-0.5, -0.1, 0.8);

    const radiansPerSecond = MathUtils.degToRad(30);

    // this method will be called once per frame
    cube.tick = (delta) => {
        // increase the cube's rotation each frame
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    };

    return cube;
}

export { createCube };