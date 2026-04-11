# Tech Stack

- You are building a 3D application/game with Three.js and TypeScript.
- Use the `three` npm package with ES module imports.
- Use Vite as the build tool.
- Always put source code in the src/ folder.
- Put scenes into src/scenes/
- Put game objects/entities into src/entities/ (create when needed)
- Put utility functions into src/utils/ (create when needed)
- The entry point is src/main.ts which creates the Renderer and starts the animation loop.

# Architecture

- Use a `<canvas id="renderCanvas">` element in index.html. The WebGLRenderer attaches to this canvas.
- Create the renderer with `new WebGLRenderer({ canvas, antialias: true })`.
- Set `renderer.setPixelRatio(window.devicePixelRatio)` and `renderer.setSize(width, height)`.
- Scene factory functions return `{ scene, camera, update }` so main.ts can drive the render loop.
- The render loop uses `requestAnimationFrame` and calls `renderer.render(scene, camera)`.
- Handle window resize by updating `camera.aspect`, calling `camera.updateProjectionMatrix()`, and `renderer.setSize()`.
- Use OrbitControls for orbital camera, PointerLockControls for first-person, or custom controls as needed.
- Use AmbientLight for fill lighting, DirectionalLight for sun-like lighting, PointLight for local sources.

# Code Style

- Do NOT use React, HTML DOM elements, or CSS for 3D rendering. Everything renders on the Three.js canvas.
- Do NOT install or use shadcn/ui, Tailwind CSS, or any UI component library.
- Import from `three` using named imports:
  - `import { Scene, PerspectiveCamera, WebGLRenderer } from "three";`
  - `import { OrbitControls } from "three/addons/controls/OrbitControls.js";`
  - `import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";`
- Import only what you need from `three` for tree-shaking.
- Use TypeScript interfaces for game data structures.
- For 2D UI overlays (HUD, menus), use HTML/CSS overlays positioned absolutely over the canvas, or use a library like troika-three-text for in-scene text.

# Common Patterns

- Create meshes by combining a Geometry (BoxGeometry, SphereGeometry, PlaneGeometry, CylinderGeometry, etc.) with a Material (MeshStandardMaterial, MeshPhongMaterial, MeshBasicMaterial, etc.) into a Mesh.
- Load 3D models with GLTFLoader from `three/addons/loaders/GLTFLoader.js`.
- Use `scene.add(object)` to add objects to the scene graph.
- Group related objects with `new Group()`.
- Physics: integrate with rapier3d or cannon-es if physics are needed.
- Shadows: set `renderer.shadowMap.enabled = true`, configure light's shadow properties, and set `castShadow`/`receiveShadow` on meshes.
- Post-processing: use EffectComposer from `three/addons/postprocessing/EffectComposer.js`.
- Animations: use THREE.Clock for delta time, or AnimationMixer for model animations.
- Raycasting: use Raycaster for mouse picking and interaction.
