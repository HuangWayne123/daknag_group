import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Target, Heart, Globe2 } from 'lucide-react';
import aboutContent from '../data/about.json';
import { resolveAssetPath } from '../utils/assets';

type AboutFaqItem = {
  q: string;
  a: string;
};

type CultureItem = {
  iconKey: 'target' | 'globe' | 'heart';
  title: string;
  desc: string;
};

export default function About() {
  const content = aboutContent as {
    hero: { title: string; description: string };
    profile: { title: string; image: string; imageAlt: string; paragraphs: string[] };
    culture: { title: string; items: CultureItem[] };
    faq: { title: string; description: string; items: AboutFaqItem[] };
  };
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const iconMap = {
    target: <Target className="w-8 h-8 text-gold" />,
    globe: <Globe2 className="w-8 h-8 text-gold" />,
    heart: <Heart className="w-8 h-8 text-gold" />
  };

  return (
    <div className="w-full pb-24">
      <section className="pt-20 pb-16 bg-sage border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-ink mb-6"
          >
            {content.hero.title}
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
            {content.hero.description}
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img
                src={resolveAssetPath(content.profile.image)}
                alt={content.profile.imageAlt}
                className="rounded-3xl border border-line shadow-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-ink mb-6">{content.profile.title}</h2>
              <div className="space-y-6 text-ink-muted text-lg leading-relaxed">
                {content.profile.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-sage border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ink mb-4">{content.culture.title}</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.culture.items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-light rounded-2xl p-10 border border-line text-center hover:border-gold/30 transition-colors shadow-sm"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-sage flex items-center justify-center mb-6">
                  {iconMap[item.iconKey]}
                </div>
                <h3 className="text-2xl font-bold text-ink mb-4">{item.title}</h3>
                <p className="text-ink-muted leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-ink mb-4">{content.faq.title}</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-6" />
            <p className="text-ink-muted">{content.faq.description}</p>
          </div>

          <div className="space-y-4">
            {content.faq.items.map((faq, idx) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-light border border-line rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="text-lg font-medium text-ink">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-ink-muted leading-relaxed border-t border-line pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
