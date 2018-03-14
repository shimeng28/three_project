"use strict";

// function init() {
//   var scene = new THREE.Scene();
//   var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//   var renderer = new THREE.WebGLRenderer();


//   var geometry = new THREE.BoxGeometry(1, 1, 1);
//   var materail = new THREE.MeshBasicMaterial({
//     color: 0x00ff00
//   });
//   var cube = new THREE.Mesh(geometry, materail);
//   scene.add(cube);


//   camera.position.z = 5;

//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   function animation() {
//     requestAnimationFrame(animation);
//     renderer.render(scene, camera);
//     cube.rotation.x += 0.1;
//     cube.rotation.y += 0.1;
//   }

//   animation();
// }

function init() {
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  var camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 500);
  camera.position.set(0, 0, 100);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  var scene = new THREE.Scene();

  var material = new THREE.LineBasicMaterial({ color: 0x0000ff });

  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 10, 0));
  geometry.vertices.push(new THREE.Vector3(10, 0, 0));

  var line = new THREE.Line(geometry, material);

  camera.position.set(0, -10, 10);
  camera.lookAt(new THREE.Vector3(0, 10, 0));

  scene.add(line);
  renderer.render(scene, camera);
}