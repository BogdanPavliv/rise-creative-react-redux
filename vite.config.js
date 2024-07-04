import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  base: '/rise-creative-react-redux', // встановлює відносний шлях
  build: {
    outDir: 'dist', // вихідна директорія
    assetsDir: 'assets', // директорія для активів (CSS, JS)
  }
});
