import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: './',
  base: '/', // Replace 'my-subdirectory' with your desired subdirectory name


})
