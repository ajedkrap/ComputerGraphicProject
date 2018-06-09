function createMat(scene){
  var mat = new BABYLON.StandardMaterial("material", scene);
  //diffuse:  basic color or texture  -> under light
  //specular: highlight               -> under light
  //emissive: color or texture as if self lit
  //ambient:  color or texture lit by environmental background lighting
  //          - requires ambient color of scene to be set
  //scene.ambientColor = new BABYLON.Color3(1, 1, 1);
  mat.diffuseColor = new BABYLON.Color3(1, 0, 0);
  mat.specularColor = new BABYLON.Color3(0, 1, 0);
  mat.specularPower = 25
  //mat.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.2);
  mat.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);
  //transparency
  mat.alpha = 1;
  return mat;
};
