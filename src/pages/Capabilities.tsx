import { motion } from 'motion/react';
import { Globe2, TrendingUp, Zap, Shield, Target, Layers } from 'lucide-react';
import capabilitiesContent from '../data/capabilities.json';

type CapabilityItem = {
  title: string;
  subtitle: string;
  desc: string;
  iconKey: 'globe' | 'trendingUp' | 'zap' | 'shield' | 'target' | 'layers';
  points: string[];
};

export default function Capabilities() {
  const { hero, items } = capabilitiesContent as {
    hero: { title: string; description: string };
    items: CapabilityItem[];
  };
  const iconMap = {
    globe: <Globe2 className="w-8 h-8 text-gold" />,
    trendingUp: <TrendingUp className="w-8 h-8 text-gold" />,
    zap: <Zap className="w-8 h-8 text-gold" />,
    shield: <Shield className="w-8 h-8 text-gold" />,
    target: <Target className="w-8 h-8 text-gold" />,
    layers: <Layers className="w-8 h-8 text-gold" />
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-light rounded-2xl p-8 border border-line hover:border-gold/30 transition-all group shadow-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-sage flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {iconMap[cap.iconKey]}
              </div>
              <div className="text-sm text-gold font-medium mb-2">{cap.subtitle}</div>
              <h3 className="text-2xl font-bold text-ink mb-4">{cap.title}</h3>
              <p className="text-ink-muted leading-relaxed mb-6 h-32 overflow-hidden">
                {cap.desc}
              </p>
              <ul className="space-y-2 border-t border-line pt-6 mt-auto">
                {cap.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-ink-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
