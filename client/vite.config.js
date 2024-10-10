import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Adjust if serving from a subdirectory
  build: {
    outDir: "dist", // Ensure this matches your deployment directory
  },
});
