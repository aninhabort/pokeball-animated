import * as THREE from 'three';
import { OrbitControls } from "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const geometryWhite = new THREE.SphereGeometry(1, 32, 16, 0, 3.11, 0, 2.95);
const geometryGray = new THREE.SphereGeometry(0.99, 32, 16);
const geometryRed = new THREE.SphereGeometry(1, 32, 16, 3.15, 3.11, 0, 2.95);

const geometryCylinder = new THREE.CylinderGeometry(0.1, 0.1, 0.04, 64);
const geometryCylinderDivider = new THREE.CylinderGeometry(0.1, 0.1, 0.04, 64, 1, true);
const geometryCylinderBig = new THREE.CylinderGeometry(0.15, 0.15, 0.04, 64, 1);

const material = new THREE.MeshBasicMaterial();
const materialRed = new THREE.MeshBasicMaterial({ color: "rgb(255, 0, 0)" });
const materialGray = new THREE.MeshBasicMaterial({ color: "rgb(85, 85, 87)" });

const halfCircleWhite = new THREE.Mesh(geometryWhite, material);
const halfCircleRed = new THREE.Mesh(geometryRed, materialRed);
const halfCircleGray = new THREE.Mesh(geometryGray, materialGray);

const cylinder = new THREE.Mesh(geometryCylinder, material);
const cylinderDivider = new THREE.Mesh(geometryCylinderDivider, materialGray);
const cylinderBig = new THREE.Mesh(geometryCylinderBig, material);

geometryWhite.translate(0, 0, 0.02);
geometryRed.translate(0, 0, -0.02);

const group = new THREE.Group()

group.add(halfCircleWhite, halfCircleRed, halfCircleGray, cylinder, cylinderBig, cylinderDivider)
scene.add(group);

camera.position.z = 3;
controls.update()

halfCircleWhite.rotation.x = 2;
halfCircleWhite.rotation.z = 3;

halfCircleGray.rotation.x = 2;
halfCircleGray.rotation.z = 3;

halfCircleRed.position.y = 0;
halfCircleRed.rotation.x = 2;
halfCircleRed.rotation.z = 3;

cylinder.position.z = 0.91;
cylinder.position.x = 0.14;
cylinder.position.y = -0.4;
cylinder.rotation.x = 5.19;
cylinder.rotation.z = 0.16;

cylinderDivider.position.z = 0.91;
cylinderDivider.position.x = 0.14;
cylinderDivider.position.y = -0.4;
cylinderDivider.rotation.x = 5.19;
cylinderDivider.rotation.z = 0.16;

cylinderBig.position.z = 0.88;
cylinderBig.position.x = 0.14;
cylinderBig.position.y = -0.4;
cylinderBig.rotation.x = 5.19;
cylinderBig.rotation.z = 0.16;


function animate() {
  group.rotation.y += 0.01;

  controls.update()
  renderer.render(scene, camera);
}