function setupModel(data) {
    const model = data.children[0];
    return model;
}


function setupMaterial(data) {
    const material = data.children[0].material;
    return material;
}

export { setupModel, setupMaterial };