import { motion } from 'motion/react';
import { Leaf, Network, Cpu, CheckCircle2 } from 'lucide-react';
import industriesContent from '../data/industries.json';
import { resolveAssetPath } from '../utils/assets';

type IndustryItem = {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  iconKey: 'leaf' | 'network' | 'cpu';
  image: string;
  features: string[];
  reverse?: boolean;
};

export default function Industries() {
  const { hero, items } = industriesContent as {
    hero: { title: string; description: string };
    items: IndustryItem[];
  };
  const iconMap = {
    leaf: <Leaf className="w-10 h-10 text-gold" />,
    network: <Network className="w-10 h-10 text-gold" />,
    cpu: <Cpu className="w-10 h-10 text-gold" />
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-32">
        {items.map((industry) => (
          <section key={industry.id} className={`flex flex-col ${industry.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
            <motion.div
              initial={{ opacity: 0, x: industry.reverse ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden border border-line group shadow-sm">
                <div className="absolute inset-0 bg-sage-deep/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={resolveAssetPath(industry.image)}
                  alt={industry.title}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: industry.reverse ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-brand-light border border-line flex items-center justify-center">
                  {iconMap[industry.iconKey]}
                </div>
                <div>
                  <div className="text-gold font-medium mb-1">{industry.subtitle}</div>
                  <h2 className="text-3xl font-bold text-ink">{industry.title}</h2>
                </div>
              </div>

              <p className="text-ink-muted text-lg leading-relaxed mb-8">
                {industry.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industry.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-ink-muted">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
}
