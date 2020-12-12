import {
    Mesh,
    SphereBufferGeometry,
    MeshBasicMaterial,
    TextureLoader,
    BackSide,
    LinearFilter
} from 'three';

function createMaterial() {
    const textureLoader = new TextureLoader();

    const texture = textureLoader.load(
        '/assets/panoramas/photo.jpg',
    );

    texture.minFilter = LinearFilter;

    const material = new MeshBasicMaterial({
        map: texture,
        side: BackSide
    });

    return material;
}

function createPanorama() {
    const geometry = new SphereBufferGeometry(32, 32, 32);
    const material = createMaterial();

    const panorama = new Mesh(geometry, material);
    //panorama.position.set(0, 0, 10);
    panorama.position.set(0, 0, 0);
    return panorama;
}

export { createPanorama };