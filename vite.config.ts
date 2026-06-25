import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';

const prerenderRoutes = [
  '/',
  '/industries',
  '/capabilities',
  '/news',
  '/news/1',
  '/news/2',
  '/news/3',
  '/news/4',
  '/news/5',
  '/news/6',
  '/news/7',
  '/news/8',
  '/news/9',
  '/news/10',
  '/about',
  '/faq'
];

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/group/',
    plugins: [
      react(),
      tailwindcss(),
      vitePrerenderPlugin({
        renderTarget: '#root',
        prerenderScript: path.resolve(__dirname, 'src/prerender.tsx'),
        additionalPrerenderRoutes: prerenderRoutes
      })
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        'react-router-dom/server': 'react-router',
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      proxy: {
        "/ops": {
          target: env.VITE_OPS_PROXY_TARGET || "http://127.0.0.1:3200",
          changeOrigin: true,
          rewrite: (requestPath) => requestPath.replace(/^\/ops/, ""),
        },
      },
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
