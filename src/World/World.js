import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';

import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { Scroller } from './systems/Scroller.js';

import { loadLogo } from './components/logo/logo3D';
import { createPanorama } from './components/panorama/panorama.js';
import { createPanorama2 } from './components/panorama/panorama2.js';
import { createPanorama3 } from './components/panorama/panorama3.js';

import { loadPanorama } from './components/panorama/panorama4.js';
import { loadForest } from './components/Forest/Forest.js';

let camera;
let controls;
let renderer;
let scene;
let loop;
let scroller;

class World {
    constructor(container) {
        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();

        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        scroller = new Scroller(container, 0);

        //controls = createControls(camera, renderer.domElement);

        const { ambientLight, mainLight } = createLights();
        const panorama = createPanorama3(scroller);

        //loop.updatables.push(controls);
        loop.updatables.push(panorama);
        scene.add(panorama);
        scene.add(ambientLight, mainLight);

        const resizer = new Resizer(container, camera, renderer);
    }

    init = async () => {

        const { logo } = await loadLogo(scroller);
        loop.updatables.push(logo);
        scene.add(logo);

        //const { groupForest } = await loadForest();
        //scene.add(groupForest);

        // move the target to the center of something
        //controls.target.copy(parrot.position);

        /*
        const { panorama } = await loadPanorama();
        scene.add(panorama);*/
    }

    render() {
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }
}

export { World };