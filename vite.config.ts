import fs from 'node:fs';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';

function loadNewsPrerenderRoutes() {
  const newsDataPath = path.resolve(__dirname, 'src/data/news.json');

  try {
    const raw = fs.readFileSync(newsDataPath, 'utf8');
    const news = JSON.parse(raw);
    const items = Array.isArray(news?.items) ? news.items : [];

    return items
      .map((item) => Number(item?.id))
      .filter((id) => Number.isInteger(id) && id > 0)
      .map((id) => `/news/${id}`);
  } catch (error) {
    console.warn('[vite] failed to load news prerender routes from src/data/news.json', error);
    return [];
  }
}

const staticPrerenderRoutes = [
  '/',
  '/industries',
  '/capabilities',
  '/news',
  '/about',
  '/faq'
];

const prerenderRoutes = [...new Set([...staticPrerenderRoutes, ...loadNewsPrerenderRoutes()])];

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
