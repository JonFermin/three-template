import {
  Scene,
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  BoxGeometry,
  PlaneGeometry,
  MeshStandardMaterial,
  Mesh,
  Color,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export function createMainScene(renderer: WebGLRenderer) {
  const scene = new Scene();
  scene.background = new Color(0x1a1a2e);

  // Camera
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  camera.position.set(3, 4, 5);

  // Orbit controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  // Lights
  const ambientLight = new AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const dirLight = new DirectionalLight(0xffffff, 1);
  dirLight.position.set(5, 10, 5);
  scene.add(dirLight);

  // Ground
  const groundGeom = new PlaneGeometry(6, 6);
  const groundMat = new MeshStandardMaterial({ color: 0x33334d });
  const ground = new Mesh(groundGeom, groundMat);
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  // Rotating box
  const boxGeom = new BoxGeometry(1, 1, 1);
  const boxMat = new MeshStandardMaterial({ color: 0x6b63ff });
  const box = new Mesh(boxGeom, boxMat);
  box.position.y = 1;
  scene.add(box);

  function update() {
    box.rotation.y += 0.01;
    box.rotation.x += 0.005;
    controls.update();
  }

  return { scene, camera, update };
}
