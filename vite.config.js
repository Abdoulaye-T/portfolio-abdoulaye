import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Sépare React du reste
          'vendor-react': ['react', 'react-dom'],
          // Sépare framer-motion (gros bundle)
          'vendor-framer': ['framer-motion'],
          // Sépare les bibliothèques d'icônes
          'vendor-icons': ['lucide-react', 'react-icons'],
          // Sépare EmailJS
          'vendor-emailjs': ['@emailjs/browser'],
        },
      },
    },
    // Avertissement au-delà de 500KB par chunk
    chunkSizeWarningLimit: 500,
  },
})
