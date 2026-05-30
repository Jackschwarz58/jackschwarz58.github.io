import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For username.github.io repos, base is '/'.
  // For project pages (username.github.io/repo-name), set base to '/repo-name/'.
  base: './',
})
