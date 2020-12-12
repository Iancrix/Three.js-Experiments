import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { setupModel } from './setupModel.js';

async function loadBirds() {
    const loader = new GLTFLoader();

    const [parrotData, flamingoData, storkData, leaflolData] = await Promise.all([
        loader.loadAsync('/assets/models/Parrot.glb'),
        loader.loadAsync('/assets/models/Flamingo.glb'),
        loader.loadAsync('/assets/models/Stork.glb'),
        loader.loadAsync('/assets/models/Leaflol.glb'),
    ]);

    //console.log('Squaaawk!', parrotData);
    //console.log('LeaflolDATA', leaflolData);

    const parrot = setupModel(parrotData);
    parrot.position.set(0, 1, - 2.5);
    parrot.scale.multiplyScalar(0.05);

    const flamingo = setupModel(flamingoData);
    flamingo.position.set(6.5, 1, -10);
    flamingo.scale.multiplyScalar(0.05);

    const stork = setupModel(storkData);
    stork.position.set(-6.5, -1.5, -10);
    stork.scale.multiplyScalar(0.05);

    const leaflol = leaflolData.scenes[0];
    stork.position.set(-6.5, 0, -10);
    stork.scale.multiplyScalar(1);

    return {
        parrot,
        flamingo,
        stork,
        leaflol
    };
}

export { loadBirds };