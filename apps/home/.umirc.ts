import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    master: {
      apps: [
        {
          name: 'dashboard',
          entry: '//localhost:3001',
        },
      ],
    },
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/login', component: '@/pages/login' },
    {
      path: '/admin',
      component: '@/layouts/basic',
      routes: [
        {
          path: '/admin/dashboard',
          microApp: 'dashboard',
          microAppProps: {
            autoSetLoading: true,
          },
        },
      ],
    },
  ],
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
