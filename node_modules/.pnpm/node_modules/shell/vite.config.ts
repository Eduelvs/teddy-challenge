import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        clientes: 'http://localhost:5174/assets/remoteEntry.js', // porta do MF clientes
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5173, // shell
  },
})
