import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// v2 布局：源码 src/，产物 ui/assets/（手写 ui/panel.html 与 ui/fp.html 静态壳不动，不清目录）
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: 'ui',
    emptyOutDir: false,
    sourcemap: false,
    lib: {
      entry: path.resolve(__dirname, 'src', 'Panel.tsx'),
      formats: ['es'],
      fileName: () => 'assets/panel.js',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name && assetInfo.name.endsWith('.css') ? 'assets/panel.css' : 'assets/[name][extname]',
      },
    },
  },
});
