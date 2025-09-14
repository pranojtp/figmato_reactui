import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://audiorealities-be-lb-1021698519.eu-central-1.elb.amazonaws.com',
        changeOrigin: true,
      }
    }
  }
})
