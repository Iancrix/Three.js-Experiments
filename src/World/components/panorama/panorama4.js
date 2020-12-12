import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import {
    TextureLoader,
    DoubleSide,
    MeshBasicMaterial,
    MathUtils
} from 'three';
import { setupModel } from './setupModel.js';

const createMaterial = () => {
    const textureLoader = new TextureLoader();

    const texture = textureLoader.load(
        '/assets/panoramas/prueba.jpg',
    );

    const material = new MeshBasicMaterial({
        map: texture,
        side: DoubleSide
    });

    return material;
}

const loadPanorama = async (scroller) => {
    const loader = new FBXLoader();

    const [panoramaData] = await Promise.all([
        loader.loadAsync('/assets/models/SM_Background.fbx'),
    ]);

    console.log(panoramaData);
    const panorama = setupModel(panoramaData);
    panorama.position.set(0, -4, 0);

    panorama.material = createMaterial();//new MeshBasicMaterial({ color: "black" });
    panorama.rotation.x = - Math.PI / 2;

    panorama.scale.multiplyScalar(0.008);

    return { panorama };
}

export { loadPanorama }