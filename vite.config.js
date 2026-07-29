import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the build works whether it's served from
  // https://<user>.github.io/marly-gf-day/ or a custom domain root
  // once you point one at GitHub Pages (add a public/CNAME file then).
  base: './',
})
