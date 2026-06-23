export function resolveAssetPath(path: string) {
  if (!path.startsWith('/')) {
    return path;
  }

  const meta = import.meta as ImportMeta & { env?: { BASE_URL?: string } };
  const base = (meta.env?.BASE_URL && meta.env.BASE_URL !== '/' ? meta.env.BASE_URL : '/group/').replace(/\/+$/, '');
  return `${base}${path}`;
}
