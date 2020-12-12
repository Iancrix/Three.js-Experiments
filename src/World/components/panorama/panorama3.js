import {
    Mesh,
    PlaneBufferGeometry,
    SphereBufferGeometry,
    MeshBasicMaterial,
    TextureLoader,
    FrontSide,
    DoubleSide,
    BackSide,
    LinearFilter
} from 'three';

import { ScrollListener } from '../../systems/ScrollListener.js';

function createMaterial() {
    const textureLoader = new TextureLoader();

    const texture = textureLoader.load(
        '/assets/panoramas/prueba.jpg',
    );

    texture.minFilter = LinearFilter;

    const material = new MeshBasicMaterial({
        map: texture,
        side: FrontSide
    });

    return material;
}

function createPanorama3(scroller) {
    const geometry = new PlaneBufferGeometry(38, 38);
    const material = createMaterial();

    const panorama = new Mesh(geometry, material);
    panorama.position.set(0, 0, -6.5);

    const unitsPerSecond_UP = 7.5;
    const unitsPerSecond_DOWN = 5;

    const maxpositionY = 0;
    const minPositionY = -4;

    let scrollPanorama = new ScrollListener();
    scroller.scrollListeners.push(scrollPanorama);

    panorama.tick = (delta) => {
        let direction = scrollPanorama.direction;

        if (direction > 0) {
            let newYPos = panorama.position.y + (unitsPerSecond_UP * delta * direction);
            if (newYPos < maxpositionY && newYPos > minPositionY) {
                panorama.position.y = newYPos;
            }
            scrollPanorama.resetDirection();
        } else if (direction < 0) {
            let newYPos = panorama.position.y + (unitsPerSecond_DOWN * delta * direction);
            if (newYPos < maxpositionY && newYPos > minPositionY) {
                panorama.position.y = newYPos;
            }
            scrollPanorama.resetDirection();
        }

    }


    return panorama;
}

export { createPanorama3 };