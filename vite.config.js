import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion', 'gsap'],
          // We removed the react-tsparticles line from here!
          three: ['three', '@react-three/fiber', '@react-three/drei'] // I noticed you have Three.js, so we can split that instead!
        }
      }
    }
  }
})