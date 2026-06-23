import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import newsContent from '../data/news.json';
import { resolveAssetPath } from '../utils/assets';

type NewsItem = {
  id: number;
  date: string;
  category: string;
  title: string;
  desc: string;
  image: string;
  isFeatured?: boolean;
  content?: string[];
};

export default function News() {
  const { hero, items } = newsContent as {
    hero: { title: string; description: string };
    items: NewsItem[];
  };
  const [activeCategory, setActiveCategory] = useState('全部新闻');
  const categories = ['全部新闻', ...Array.from(new Set(items.map((item) => item.category)))];

  const displayedNews = activeCategory === '全部新闻'
    ? items
    : items.filter((news) => news.category === activeCategory);

  const featuredNews = displayedNews[0];
  const gridNews = displayedNews.slice(1);

  return (
    <div className="w-full pb-24">
      <section className="pt-20 pb-12 bg-sage border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-ink mb-6"
          >
            {hero.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-1 bg-gold mx-auto rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-ink-muted max-w-3xl mx-auto"
          >
            {hero.description}
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-gold text-white'
                  : 'bg-brand-light text-ink-muted border border-line hover:border-gold/50 hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {featuredNews && (
              <Link
                to={`/news/${featuredNews.id}`}
                className="relative block rounded-3xl overflow-hidden mb-16 group cursor-pointer border border-line shadow-sm"
                aria-label={`阅读文章：${featuredNews.title}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-transparent z-10" />
                <img
                  src={resolveAssetPath(featuredNews.image)}
                  alt={featuredNews.title}
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-gold text-white text-xs font-bold">
                      {featuredNews.category}
                    </span>
                    <span className="flex items-center gap-2 text-gray-300 text-sm font-mono">
                      <Calendar className="w-4 h-4" /> {featuredNews.date}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-gold-light transition-colors">
                    {featuredNews.title}
                  </h2>
                  <p className="text-gray-300 max-w-3xl text-lg leading-relaxed hidden md:block">
                    {featuredNews.desc}
                  </p>
                </div>
              </Link>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridNews.map((news) => (
                <Link
                  key={news.id}
                  to={`/news/${news.id}`}
                  className="bg-brand-light rounded-2xl p-8 border border-line hover:border-gold/30 transition-all group cursor-pointer flex flex-col h-full shadow-sm"
                  aria-label={`阅读文章：${news.title}`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-sage border border-line text-gold text-xs font-medium flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {news.category}
                    </span>
                    <span className="text-ink-muted/70 font-mono text-sm">
                      {news.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-4 group-hover:text-gold transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed mb-8 flex-grow">
                    {news.desc}
                  </p>
                  <div className="flex items-center gap-2 text-gold font-medium mt-auto group-hover:translate-x-2 transition-transform w-fit">
                    阅读全文 <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>

            {gridNews.length === 0 && !featuredNews && (
              <div className="text-center text-ink-muted py-20">
                暂无相关新闻
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {displayedNews.length > 0 && (
          <div className="flex justify-center mt-16">
            <button className="px-8 py-3 rounded-full bg-brand-light text-ink border border-line hover:border-gold/50 hover:text-gold transition-all">
              加载更多
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
