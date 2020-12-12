import {
    Mesh,
    CylinderBufferGeometry,
    SphereBufferGeometry,
    MeshBasicMaterial,
    TextureLoader,
    FrontSide,
    DoubleSide,
    BackSide,
    LinearFilter
} from 'three';

function createMaterial() {
    const textureLoader = new TextureLoader();

    const texture = textureLoader.load(
        '/assets/panoramas/prueba.jpg',
    );

    texture.minFilter = LinearFilter;

    const material = new MeshBasicMaterial({
        map: texture,
        side: BackSide
    });

    return material;
}

function createPanorama2() {
    const geometry = new CylinderBufferGeometry(25, 25, 60, 12, 4, true, 1.75, 2.8);
    const material = createMaterial()//new MeshBasicMaterial({ color: 0xffff00 });

    const panorama = new Mesh(geometry, material);
    panorama.position.set(0, 0, 0);

    return panorama;
}

export { createPanorama2 };