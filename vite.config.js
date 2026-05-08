import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split these heavy libraries into their own files
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion', 'gsap'],
          particles: ['react-tsparticles']
        }
      }
    }
  }
})