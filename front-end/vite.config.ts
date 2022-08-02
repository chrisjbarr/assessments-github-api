import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      directoryAsNamespace: true,
    }),
    AutoImport({
      imports: ['vue'],
      dts: true,
      eslintrc: {
        enabled: true,
      },
      vueTemplate: true,
    }),
  ],
  base: '',
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
