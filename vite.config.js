import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  server: {
    host: '0.0.0.0',       // 👈 makes Vite accessible on LAN
    port: 5173             // 👈 optional: default port
  },
  plugins: [react(), tailwindcss()],
})
