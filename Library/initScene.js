function initScene(){
  // Get canvas
  canvas = document.getElementById("renderCanvas");

  // Create babylon engine
  engine = new BABYLON.Engine(canvas, true);

  // Create scene
  scene = new BABYLON.Scene(engine);

  //Create FreeCamera
  camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 4, -10), scene)
  camera.setTarget(new BABYLON.Vector3(0, 0, 0));
  camera.attachControl(canvas);

  //Create light
  var light = new BABYLON.HemisphericLight("hLight", new BABYLON.Vector3(0, 8, 0), scene);

}
