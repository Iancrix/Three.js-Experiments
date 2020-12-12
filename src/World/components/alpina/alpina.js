import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader.js';
import {
    TextureLoader,
    MeshStandardMaterial,
    MeshPhongMaterial,
    DoubleSide,
    FrontSide,
    BackSide
} from 'three';
import { setupModel, setupMaterial } from './setupModel.js';

async function loadAlpina() {
    const loader = new FBXLoader();
    const textureLoader = new TextureLoader();

    const [chocoData] = await Promise.all([
        loader.loadAsync('/assets/models/alpina/CAJA.FBX'),
    ]);

    const [lado1] = await Promise.all([
        textureLoader.loadAsync('/assets/models/alpina/prueba.jpg',
            function (texture) {
                //...
            },
            function () { },  // onProgress function
            function (error) { console.log(error) } // onError function),
        )]);

    //const material = new MeshStandardMaterial({ map: lado1 });


    const material = new MeshStandardMaterial({ map: lado1, side: FrontSide });

    const chocoCaja = setupModel(chocoData);


    console.log(chocoCaja);
    chocoCaja.material = material;

    chocoCaja.position.set(0, 5, 0);
    chocoCaja.scale.multiplyScalar(0.1);


    return {
        chocoCaja
    }
}

export { loadAlpina };