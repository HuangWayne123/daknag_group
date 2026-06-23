import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircleQuestion } from 'lucide-react';
import faqContent from '../data/faq.json';

type FaqCategory = {
  title: string;
  items: Array<{
    q: string;
    a: string;
  }>;
};

export default function FAQ() {
  const content = faqContent as {
    hero: { title: string; description: string };
    categories: FaqCategory[];
    contact: { title: string; description: string; buttonText: string };
  };

  const [openState, setOpenState] = useState<Record<string, boolean>>({
    '0-0': true
  });

  const toggleFaq = (catIdx: number, itemIdx: number) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenState((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="w-full pb-24">
      <section className="pt-20 pb-16 bg-sage border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <MessageCircleQuestion className="w-8 h-8 text-gold" />
          </motion.div>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {content.categories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <HelpCircle className="w-6 h-6 text-gold" />
                  <h2 className="text-2xl font-bold text-ink">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.items.map((faq, itemIdx) => {
                    const isOpen = openState[`${catIdx}-${itemIdx}`];
                    return (
                      <div
                        key={faq.q}
                        className="bg-brand-light border border-line rounded-2xl overflow-hidden transition-colors hover:border-gold/30 shadow-sm"
                      >
                        <button
                          onClick={() => toggleFaq(catIdx, itemIdx)}
                          className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                        >
                          <span className="text-lg font-medium text-ink pr-8">{faq.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
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
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-brand-light to-sage border border-gold/20 text-center shadow-sm"
          >
            <h3 className="text-2xl font-bold text-ink mb-4">{content.contact.title}</h3>
            <p className="text-ink-muted mb-8 max-w-2xl mx-auto">
              {content.contact.description}
            </p>
            <button className="px-8 py-4 rounded-full bg-gold text-white font-bold hover:bg-gold-hover transition-all">
              {content.contact.buttonText}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
