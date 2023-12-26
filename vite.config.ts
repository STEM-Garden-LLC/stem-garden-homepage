import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@types', replacement: fileURLToPath(new URL('./src/@types', import.meta.url)) },
      { find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
      { find: '@data', replacement: fileURLToPath(new URL('./src/data', import.meta.url)) },
      { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: '@typography', replacement: fileURLToPath(new URL('./src/components/typography', import.meta.url)) },
    ],
  },
  plugins: [react()],
})


// // https://vitejs.dev/config/
// export default defineConfig({
//   resolve: {
//     alias: {
//       '@src': path.resolve(__dirname, './src'),
//       '@types': path.resolve(__dirname, './src/@types'),
//       '@pages': path.resolve(__dirname, './src/pages'),
//       '@data': path.resolve(__dirname, './src/data'),
//       '@assets': path.resolve(__dirname, './src/assets'),
//       '@components': path.resolve(__dirname, './src/components'),
//       '@typography': path.resolve(__dirname, './src/components/typography'),
//     },
//   },
//   plugins: [react()],
// })
