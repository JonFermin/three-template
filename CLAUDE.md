# three-template

Three.js 3D application template using TypeScript and Vite.

## Quick Reference

See [AI_RULES.md](./AI_RULES.md) for all coding conventions, architecture rules, and common patterns. Always follow them.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — typecheck + production build
- `npm run build:dev` — production build (skip typecheck)
- `npm run preview` — preview production build

## Project Structure

- `src/main.ts` — entry point, creates WebGLRenderer and starts animation loop
- `src/scenes/` — scene factory functions returning `{ scene, camera, update }`
- `src/entities/` — game objects/entities (create when needed)
- `src/utils/` — utility functions (create when needed)

## Key Rules

- Renderer attaches to `<canvas id="renderCanvas">` in index.html
- Scene factories return `{ scene, camera, update }` so main.ts drives the render loop
- Use named imports from `three` — never `import * as THREE`
- No React, no HTML DOM rendering, no CSS UI libraries
