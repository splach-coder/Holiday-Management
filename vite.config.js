import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // Ensure relative paths for production
  build: {
    outDir: "build" // Set the output directory for Azure
  },
  server: {
    port: 8080,
    host: '0.0.0.0'
  }
})