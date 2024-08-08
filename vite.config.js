import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/client" : "/",
  server: { host: "0.0.0.0", port: 3000 },
  build: {
    outDir: "dist", // Ensure the build output directory is 'dist'
  },
});
