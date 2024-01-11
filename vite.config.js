import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: '', // uses relative paths
  build: {
    rollupOptions: {
      input: ['index.html', 'index2.html', 'index3.html'].map(f => resolve(__dirname, f))
    }
  }
})