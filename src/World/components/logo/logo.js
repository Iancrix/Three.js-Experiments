import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import {
    PlaneBufferGeometry,
    Mesh,
    DoubleSide,
    MeshStandardMaterial,
    TextureLoader,
    MathUtils
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

function createLogo(scroller) {
    const geometry = new PlaneBufferGeometry(5, 6, 8);
    const material = createMaterial();
    const logo = new Mesh(geometry, material);

    logo.position.set(0, 0, 0);

    const radiansPerSecond = MathUtils.degToRad(250); //50

    const maxRotation = MathUtils.degToRad(30); // 0
    const minRotation = MathUtils.degToRad(-30); // -30

    logo.tick = (delta) => {
        let direction = scroller.direction;
        if (Math.abs(direction) > 0) {
            let newRotation = logo.rotation.y + (radiansPerSecond * delta * direction);
            if (newRotation < maxRotation && newRotation > minRotation) {
                logo.rotation.y = newRotation;
            }
            scroller.resetDirection();
        }
    };

    return logo;
}

export { createLogo };