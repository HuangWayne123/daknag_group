import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import newsContent from '../data/news.json';
import { resolveAssetPath } from '../utils/assets';

type NewsItem = {
  id: number;
  date: string;
  category: string;
  title: string;
  desc: string;
  image: string;
  content?: string[];
};

export default function NewsDetail() {
  const { id } = useParams();
  const { items } = newsContent as { items: NewsItem[] };
  const article = items.find((item) => String(item.id) === id);

  if (!article) {
    return (
      <div className="w-full pb-24">
        <section className="pt-20 pb-16 bg-sage border-b border-line">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6">文章不存在</h1>
            <p className="text-xl text-ink-muted mb-10">您访问的新闻内容可能已下线或地址有误。</p>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-white font-bold hover:bg-gold-hover transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              返回新闻动态
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const related = items.filter((item) => item.id !== article.id).slice(0, 3);

  return (
    <div className="w-full pb-24">
      <article>
        <section className="pt-12 pb-12 bg-sage border-b border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-ink-muted hover:text-gold transition-colors mb-10 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              返回新闻动态
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-brand-light border border-line text-gold text-sm font-medium inline-flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  {article.category}
                </span>
                <span className="text-ink-muted text-sm font-mono inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
                {article.title}
              </h1>
              <p className="text-xl text-ink-muted leading-relaxed">
                {article.desc}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={resolveAssetPath(article.image)}
              alt={article.title}
              className="w-full h-[260px] md:h-[520px] object-cover rounded-3xl border border-line shadow-sm mb-12"
              referrerPolicy="no-referrer"
            />
            <div className="max-w-3xl mx-auto space-y-7 text-lg leading-8 text-ink-muted">
              {(article.content?.length ? article.content : [article.desc]).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      </article>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="border-t border-line pt-10">
          <h2 className="text-2xl font-bold text-ink mb-6">更多动态</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="bg-brand-light rounded-2xl border border-line overflow-hidden shadow-sm hover:border-gold/30 transition-colors group"
              >
                <img
                  src={resolveAssetPath(item.image)}
                  alt={item.title}
                  className="w-full h-36 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-5">
                  <div className="text-sm text-gold font-medium mb-2">{item.category}</div>
                  <h3 className="font-bold text-ink leading-snug group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
