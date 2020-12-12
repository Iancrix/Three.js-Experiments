import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import {
    TextureLoader,
    MeshStandardMaterial,
    DoubleSide,
    MeshToonMaterial,
    MathUtils
} from 'three';
import { setupModel } from './setupModel.js';

async function loadBanyan() {
    const loader = new FBXLoader();

    const [stage1Data, stage2Data, stage3Data, stage4Data, stage5Data, leafData] = await Promise.all([
        loader.loadAsync('/assets/models/banyan/stage 1.fbx'),
        loader.loadAsync('/assets/models/banyan/stage 2.fbx'),
        loader.loadAsync('/assets/models/banyan/stage 3.fbx'),
        loader.loadAsync('/assets/models/banyan/stage 4.fbx'),
        loader.loadAsync('/assets/models/banyan/stage 5.fbx'),
        loader.loadAsync('/assets/models/banyan/Leaf.fbx'),
    ]);

    const textureLoader = new TextureLoader();
    const texture1 = textureLoader.load(
        '/assets/textures/tree_leaves_alpha3.png',
    );
    const texture2 = textureLoader.load(
        '/assets/textures/tree.png',
    );

    const material1 = new MeshToonMaterial({ map: texture1, alphaTest: 0.5, side: DoubleSide });
    const material2 = new MeshToonMaterial({ map: texture2 });
    var materialArray = [material1, material2];

    const stage1 = setupModel(stage1Data);
    stage1.position.set(-5, -1.8, 0);
    stage1.scale.multiplyScalar(0.001);
    stage1.material = materialArray;

    const stage2 = setupModel(stage2Data);
    stage2.position.set(-3, -1.2, 0);
    stage2.scale.multiplyScalar(0.001);
    stage2.material = materialArray;

    const stage3 = setupModel(stage3Data);
    stage3.position.set(0, 0, 0);
    stage3.scale.multiplyScalar(0.001);
    stage3.material = materialArray;

    const stage4 = setupModel(stage4Data);
    stage4.position.set(-5.5, 0, -2);
    stage4.scale.multiplyScalar(0.001);
    stage4.material = materialArray;

    const stage5 = setupModel(stage5Data);
    stage5.position.set(6.5, 0, 0);
    stage5.scale.multiplyScalar(0.001);
    stage5.material = materialArray;

    const leaf = setupModel(leafData);
    leaf.position.set(0, 0, 2);
    leaf.scale.multiplyScalar(1);


    return {
        stage1,
        stage2,
        stage3,
        stage4,
        stage5,
        leaf
    }
}


export { loadBanyan };