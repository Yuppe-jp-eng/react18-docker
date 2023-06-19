import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 500,
      binaryInterval: 3000,
    },
    host: true,
    strictPort: true,
    port: 5173
  }
})
