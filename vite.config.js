// https://vitejs.dev/config/

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { terser } from 'rollup-plugin-terser';
import cssnano from 'cssnano';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

export default defineConfig({
  plugins: [
    react(),
    terser(), 
    cssnano(),
  ].filter(Boolean),
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        manualChunks: undefined,
      },
      plugins: [
        dynamicImportVars(),
      ].filter(Boolean),
    },
    chunkSizeWarningLimit: 1500,
    manifest: true, 
    minify: 'terser', 
    sourcemap: false, 
    brotliSize: false, 
  },
});
