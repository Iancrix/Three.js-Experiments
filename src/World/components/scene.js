import { Color, Scene } from 'three';

function createScene() {
    const scene = new Scene();

    scene.background = new Color('#00CBFE');

    return scene;
}

export { createScene };