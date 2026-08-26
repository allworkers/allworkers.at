import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// When SINGLE_FILE=1 we inline everything into one self-contained index.html
// (used for the instant browser preview / artifact). The normal build keeps
// assets split for best real-world performance.
const single = process.env.SINGLE_FILE === '1'

export default defineConfig({
  base: './',
  plugins: [react(), ...(single ? [viteSingleFile()] : [])],
  build: {
    assetsInlineLimit: single ? 100000000 : 4096,
    chunkSizeWarningLimit: 4000,
  },
})
