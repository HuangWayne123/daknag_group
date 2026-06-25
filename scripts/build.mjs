import fs from 'node:fs/promises';
import path from 'node:path';
import { build } from 'vite';
import { siteConfig } from './seo.config.mjs';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const newsDataPath = path.join(rootDir, 'src/data/news.json');
const faqDataPath = path.join(rootDir, 'src/data/faq.json');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function routeToDistFile(route) {
  if (route === '/') {
    return path.join(distDir, 'index.html');
  }
  return path.join(distDir, route.replace(/^\//, ''), 'index.html');
}

function canonicalFor(route) {
  if (route === '/') {
    return `${siteConfig.siteUrl}/`;
  }
  return `${siteConfig.siteUrl}${route}/`;
}

function buildBreadcrumbs(route, title) {
  const segments = route.split('/').filter(Boolean);
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: '首页',
      item: `${siteConfig.siteUrl}/`,
    },
  ];

  if (!segments.length) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    };
  }

  items.push({
    '@type': 'ListItem',
    position: 2,
    name: title,
    item: canonicalFor(route),
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

function buildMetaTags(meta) {
  const tags = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="keywords" content="${escapeHtml(meta.keywords)}" />`,
    `<meta name="robots" content="index,follow,max-image-preview:large" />`,
    `<link rel="canonical" href="${escapeHtml(meta.canonical)}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:type" content="${escapeHtml(meta.ogType || siteConfig.defaultOgType)}" />`,
    `<meta property="og:url" content="${escapeHtml(meta.canonical)}" />`,
    `<meta property="og:locale" content="zh_CN" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteConfig.siteName)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ];

  for (const schema of meta.schemas) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`);
  }

  return tags.join('\n    ');
}

function injectHead(html, meta) {
  const tags = buildMetaTags(meta);
  return html
    .replace('<html lang="en">', '<html lang="zh-CN">')
    .replace(
      /<title>[\s\S]*?<\/title>\s*/,
      `${tags}\n    `,
    );
}

function buildFaqSchema(faqContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqContent.categories.flatMap((category) =>
      category.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    ),
  };
}

async function loadSeoEntries() {
  const [newsRaw, faqRaw] = await Promise.all([
    fs.readFile(newsDataPath, 'utf8'),
    fs.readFile(faqDataPath, 'utf8'),
  ]);

  const news = JSON.parse(newsRaw);
  const faq = JSON.parse(faqRaw);

  const staticEntries = {
    '/': {
      title: '达康控股集团 | 食品产业链、食材供应链与产业 AI 协同平台',
      description: '达康控股集团统筹食品制造、生鲜食材供应链与产业 AI，服务政企团餐、学校、医院和连锁餐饮等高标准客户。',
      keywords: '达康控股,食品产业链,食材供应链,生鲜配送,冷链仓配,政企食堂,学校配餐,食品AI',
      schemas: [siteConfig.organization, siteConfig.website],
    },
    '/industries': {
      title: '产业布局 | 达康控股集团',
      description: '查看达康控股在食品制造、生鲜食材供应链、冷链物流与产业 AI 的协同布局，了解集团如何服务食材供应链升级。',
      keywords: '达康控股产业布局,食品产业链集团,食材供应链企业,冷链物流,产业AI',
    },
    '/capabilities': {
      title: '集团能力 | 达康控股集团',
      description: '达康控股集团能力覆盖食品生产、冷链仓配、追溯合规、AI 预测与产业协同，适用于政企团餐、学校和医院等复杂供给场景。',
      keywords: '达康控股集团能力,食材供应链能力,冷链仓配,食安追溯,AI预测',
    },
    '/news': {
      title: '新闻动态 | 达康控股集团',
      description: '关注达康控股在食品产业链、食材供应链、冷链物流和产业 AI 方面的最新动态、案例和战略进展。',
      keywords: '达康控股新闻,食品供应链新闻,冷链物流动态,食材供应链案例',
    },
    '/about': {
      title: '关于我们 | 达康控股集团',
      description: '了解达康控股集团的定位、服务对象、食材供应链战略和产业协同能力，查看集团如何服务高标准食品供给场景。',
      keywords: '关于达康控股,食品集团介绍,食材供应链集团,生鲜供应链',
    },
    '/faq': {
      title: '常见问题 | 达康控股集团',
      description: '查看达康控股关于食品产业链、食材供应链、政企食堂配送、食安追溯和产业 AI 的常见问题解答。',
      keywords: '达康控股FAQ,食材供应链问题,政企食堂配送,食安追溯,食品AI',
      schemas: [buildFaqSchema(faq)],
    },
  };

  const entries = new Map(
    Object.entries(staticEntries).map(([route, meta]) => [
      route,
      {
        ...meta,
        canonical: canonicalFor(route),
        ogType: 'website',
        schemas: [...(meta.schemas || []), buildBreadcrumbs(route, meta.title.split(' | ')[0])],
      },
    ]),
  );

  for (const item of news.items) {
    const route = `/news/${item.id}`;
    entries.set(route, {
      title: `${item.title} | 达康控股集团新闻`,
      description: item.desc,
      keywords: `达康控股新闻,${item.category},食品产业链,食材供应链,${item.title}`,
      canonical: canonicalFor(route),
      ogType: 'article',
      schemas: [
        buildBreadcrumbs(route, item.title),
        {
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: item.title,
          datePublished: item.date,
          dateModified: item.date,
          description: item.desc,
          author: {
            '@type': 'Organization',
            name: '达康控股集团',
          },
          publisher: {
            '@type': 'Organization',
            name: '达康控股集团',
            url: `${siteConfig.siteUrl}/`,
          },
          mainEntityOfPage: canonicalFor(route),
        },
      ],
    });
  }

  return entries;
}

async function writeRobotsAndSitemap(entries) {
  const routes = Array.from(entries.keys());
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => `  <url>\n    <loc>${canonicalFor(route)}</loc>\n  </url>`)
  .join('\n')}
</urlset>
`;

  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteConfig.siteUrl}/sitemap.xml\n`;

  await Promise.all([
    fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8'),
    fs.writeFile(path.join(distDir, 'robots.txt'), robots, 'utf8'),
  ]);
}

async function postProcess() {
  const entries = await loadSeoEntries();

  for (const [route, meta] of entries.entries()) {
    const filePath = routeToDistFile(route);
    const html = await fs.readFile(filePath, 'utf8');
    await fs.writeFile(filePath, injectHead(html, meta), 'utf8');
  }

  await writeRobotsAndSitemap(entries);
}

try {
  await build();
  await postProcess();
} catch (error) {
  console.error(error);
  process.exit(1);
}

setImmediate(() => process.exit(0));
