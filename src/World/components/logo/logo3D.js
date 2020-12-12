import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import {
    TextureLoader,
    MeshStandardMaterial,
    DoubleSide,
    MathUtils,
    MeshToonMaterial,
    MeshBasicMaterial
} from 'three';
import { setupModel } from './setupModel.js';

import { ScrollListener } from '../../systems/ScrollListener.js';

const createMaterial = () => {
    const textureLoader = new TextureLoader();

    const texture = textureLoader.load(
        '/assets/textures/logo-texture.png',
    );

    const material = new MeshToonMaterial({
        map: texture,
        side: DoubleSide
    });

    return material;
}

const loadLogo = async (scroller) => {
    const loader = new FBXLoader();

    const [logoData/*, mountainsData*/] = await Promise.all([
        loader.loadAsync('/assets/models/logo/Logo_FINAL_16K.fbx'),
        /*loader.loadAsync('/assets/models/mountains.fbx'),*/
    ]);

    const logo = setupModel(logoData);
    logo.position.set(0, 0, -1);
    logo.scale.multiplyScalar(0.03);
    logo.rotation.z = - Math.PI / 2;

    const material = new MeshBasicMaterial({
        color: "#00CBFE"
    });
    const material2 = new MeshToonMaterial({
        color: "white"
    });
    const material3 = new MeshToonMaterial({
        color: "black"
    });

    //logo.material = createMaterial();
    logo.material = material2;

    const radiansPerSecond_UP = MathUtils.degToRad(100); //120
    const radiansPerSecond_DOWN = MathUtils.degToRad(40); //50

    const maxRotation = MathUtils.degToRad(-90); // 0 // -60
    const minRotation = MathUtils.degToRad(-120); // -30 // -120

    let scrollLogo = new ScrollListener();
    //let scrollMountains = new ScrollListener();
    scroller.scrollListeners.push(scrollLogo/*, scrollMountains*/);

    const unitsPerSecond_UP = 3;
    const unitsPerSecond_DOWN = 1.5;

    const maxpositionY = 0;
    const minPositionY = -1.5;

    logo.tick = (delta) => {
        let direction = scrollLogo.direction;

        if (direction > 0) {
            let newRotation = logo.rotation.z + (radiansPerSecond_UP * delta * direction);
            if (newRotation < maxRotation && newRotation > minRotation) {
                logo.rotation.z = newRotation;
            }

            let newYPos = logo.position.y + (unitsPerSecond_UP * delta * direction);
            if (newYPos < maxpositionY && newYPos > minPositionY) {
                logo.position.y = newYPos;
            }

            scrollLogo.resetDirection();
        } else if (direction < 0) {
            let newRotation = logo.rotation.z + (radiansPerSecond_DOWN * delta * direction);
            if (newRotation < maxRotation && newRotation > minRotation) {
                logo.rotation.z = newRotation;
            }

            let newYPos = logo.position.y + (unitsPerSecond_DOWN * delta * direction);
            if (newYPos < maxpositionY && newYPos > minPositionY) {
                logo.position.y = newYPos;
            }
            scrollLogo.resetDirection();
        }
    }

    /*
        const mountains = setupModel(mountainsData);
        mountains.position.set(-10, 0, 5);
        mountains.material = new MeshToonMaterial({ color: "#543b0e" })
    
        const unitsPerSecond_UP = 1.5;
        const unitsPerSecond_DOWN = 1;
    
        const maxpositionY = 0;
        const minPositionY = -5;
    
        mountains.tick = (delta) => {
            let direction = scrollMountains.direction;
    
            if (direction > 0) {
                let newYPos = mountains.position.y + (unitsPerSecond_UP * delta * direction);
                if (newYPos < maxpositionY && newYPos > minPositionY) {
                    mountains.position.y = newYPos;
                }
                scrollMountains.resetDirection();
            } else if (direction < 0) {
                let newYPos = mountains.position.y + (unitsPerSecond_DOWN * delta * direction);
                if (newYPos < maxpositionY && newYPos > minPositionY) {
                    mountains.position.y = newYPos;
                }
                scrollMountains.resetDirection();
            }
    
        }
    */
    return { logo/*, mountains*/ };
}

export { loadLogo };