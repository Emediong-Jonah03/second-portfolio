import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    netlify()
  ],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})