import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { AppRoutes, groupRoutes } from './routes';

export function prerender({ url }: { url: string }) {
  const normalizedUrl = url === '/' ? '/group/' : `/group${url}`;
  const html = renderToString(
    <StaticRouter basename="/group" location={normalizedUrl}>
      <AppRoutes />
    </StaticRouter>
  );

  return {
    html,
    links: new Set(groupRoutes)
  };
}
