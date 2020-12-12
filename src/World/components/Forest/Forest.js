import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import {
    TextureLoader,
    DoubleSide,
    MathUtils,
    MeshBasicMaterial,
    MeshStandardMaterial,
    MeshToonMaterial,
    MeshLambertMaterial,
    Group,
    SmoothShading
} from 'three';
import { setupModel } from './setupModel.js';

import { ScrollListener } from '../../systems/ScrollListener.js';

const loadForest = async (scroller) => {
    const groupForest = new Group();

    const loader = new FBXLoader();

    const [terrainData, tree1Data, tree2Data, tree3Data] = await Promise.all([
        loader.loadAsync('/assets/models/environment/Terrain_2.fbx'),
        loader.loadAsync('/assets/models/environment/Tree_1.fbx'),
        loader.loadAsync('/assets/models/environment/Tree_2.fbx'),
        loader.loadAsync('/assets/models/environment/Tree_3.fbx'),
    ]);

    // Terrain
    const terrain = setupModel(terrainData);
    terrain.position.set(10, -7.5, -5);
    terrain.rotation.y = MathUtils.degToRad(0);
    terrain.rotation.x = MathUtils.degToRad(10);
    terrain.scale.multiplyScalar(0.05);

    const matTerrain = new MeshStandardMaterial({ color: "#2B7424" });
    terrain.material = matTerrain;

    // Trees
    const tree1 = tree1Data;
    tree1.position.set(10, -5.5, -15);
    tree1.rotation.y = MathUtils.degToRad(45);
    tree1.scale.multiplyScalar(0.006);

    tree1Data.children[0].material = new MeshStandardMaterial({ color: "#8b5a2b" });

    tree1Data.children[1].children[0].material = new MeshStandardMaterial({ color: "#2B7424" });
    tree1Data.children[1].children[1].material = new MeshStandardMaterial({ color: "#2B7424" });
    tree1Data.children[1].children[2].material = new MeshStandardMaterial({ color: "#2B7424" });

    const tree2 = tree1.clone();
    tree2.position.set(15, -3.5, -16);
    tree2.rotation.y = MathUtils.degToRad(80);


    groupForest.add(terrain, tree1, tree2);

    return { groupForest };
}

export { loadForest };