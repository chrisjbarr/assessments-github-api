/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      directoryAsNamespace: true
    }),
    AutoImport({
      imports: ['vue', 'vitest'],
      dts: true,
      eslintrc: {
        enabled: true
      },
      vueTemplate: true
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['test/**/*.test.ts']
  },
  base: '',
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  }
});
