import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base is './' so the production build also works when opened from a static
// sub-folder or directly, without server rewrite rules.
export default defineConfig({
  plugins: [react()],
  base: './',
  server: { port: 5173, open: true },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ['framer-motion'],
          router: ['react-router-dom'],
        },
      },
    },
  },
})
