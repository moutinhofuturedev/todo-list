import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Usar o path diretamente sem "node:" para resolver o alias corretamente

export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
