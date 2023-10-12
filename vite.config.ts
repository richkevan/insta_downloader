import { defineConfig } from 'vite'
import {resolve} from 'path'
import react from '@vitejs/plugin-react-swc'
import svgr from '@svgr/rollup'

const src = resolve(__dirname, './src')

// https://vitejs.dev/config/
export default defineConfig({
  root: src,
  base: './insta_downloader',
  publicDir: resolve(__dirname, './public'),

  plugins: [react(), svgr()],
  build:
    {
      outDir: resolve(__dirname, 'dist'),
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(src, 'index.html'),
        }
      }
    }
})
