import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/Login": {
        target: "https://localhost:7073",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
