import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all addresses including LAN and public
    port: 5174,
    strictPort: false,
    allowedHosts: [
      'localhost',
      'resolved-prude-planner.ngrok-free.dev', // Your specific ngrok hostname
      '.ngrok-free.app',
      '.ngrok-free.dev', // Added to support your current ngrok domain
      '.ngrok.io',
      '.ngrok.app',
    ],
  },
})
