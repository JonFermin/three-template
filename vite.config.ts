import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
  },
  server: {
    host: "::",
    port: 8080,
  },
});
