import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    slave: {},
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  esbuild: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  targets: {
    chrome: 79,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
});
