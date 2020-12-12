import {
    AmbientLight,
    DirectionalLight,
    HemisphereLight,
} from 'three';

function createLights() {
    // const ambientLight = new AmbientLight('white', 2);

    const ambientLight = new HemisphereLight(
        'white', // bright sky color
        'darkslategrey', // dim ground color
        1, // intensity // 2
    );

    const mainLight = new DirectionalLight('white', 5);
    //mainLight.position.set(-10, 30, -10);
    mainLight.position.set(3, 3, 3);

    return { ambientLight, mainLight };
}

export { createLights };