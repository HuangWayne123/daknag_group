import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Building2, Target, Award, Heart, Globe2 } from 'lucide-react';

export default function About() {
  const faqs = [
    {
      q: "达康控股是什么公司？",
      a: "达康控股是一家深耕食品产业链的集团型企业，致力于通过食品、供应链与AI技术的深度融合，构建完整的产业生态体系。我们不仅是资产的管理者，更是产业价值的创造者与行业标准的引领者。"
    },
    {
      q: "集团旗下有哪些核心企业？",
      a: "集团核心业务板块主要包括三大子公司：专注于高品质食品研发与生产的“达康食品股份”、提供专业现代化物流与冷链服务的“达康供应链集团”，以及聚焦前沿人工智能科技赋能的“认知黑洞”。"
    },
    {
      q: "达康控股的战略愿景是什么？",
      a: "我们的愿景是成为全球领先的食品产业链生态构建者。通过持续的科技创新与资源整合，让食品更安全、让供应链更高效、让产业更智能。"
    },
    {
      q: "达康控股如何保证食品安全？",
      a: "食品安全是我们的生命线。达康控股建立了国际领先的全面质量管理体系（TQM），并引入了基于区块链的防伪溯源技术。从农产品种植、生产加工、冷链运输到终端销售，实现全链路透明化管理，确保每一份产品都符合最严苛的安全标准。"
    },
    {
      q: "达康控股在科技创新方面有哪些投入？",
      a: "集团高度重视科技创新，旗下“认知黑洞”科技公司专注于AI大模型在垂直产业的应用。我们每年将营收的显著比例投入研发，致力于打造智慧供应链大脑、智能排产系统以及消费趋势预测模型，以技术驱动产业升级。"
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const culture = [
    {
      icon: <Target className="w-8 h-8 text-gold" />,
      title: "企业使命",
      desc: "以科技赋能产业，以品质守护健康，致力于为全球消费者提供安全、优质的食品与高效的服务。"
    },
    {
      icon: <Globe2 className="w-8 h-8 text-gold" />, // Reusing Globe2 from lucide-react, wait, need to import it. Let's use Building2
      title: "企业愿景",
      desc: "成为全球领先的食品产业链生态构建者，打造具有国际竞争力的百年企业。"
    },
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: "核心价值观",
      desc: "诚信为本、创新驱动、协同共赢、追求卓越。我们坚持做难而正确的事。"
    }
  ];

  return (
    <div className="w-full pb-24">
      {/* Page Header */}
      <section className="pt-20 pb-16 bg-brand-light/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            关于达康
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
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            深耕食品产业链，以科技创新为翼，致力于构建安全、高效、智能的产业生态圈。
          </motion.p>
        </div>
      </section>

      {/* Company Profile */}
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
                src="https://picsum.photos/seed/building/800/600?blur=2" 
                alt="达康控股总部" 
                className="rounded-3xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-white mb-6">集团简介</h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  达康控股集团有限公司（简称“达康控股”）是一家立足中国、面向全球的大型综合性控股集团。自成立以来，集团始终坚守“食品产业链耕耘者”的定位，通过实业投资、供应链整合与科技赋能，构建了独具特色的产业生态体系。
                </p>
                <p>
                  目前，集团旗下拥有“达康食品股份”、“达康供应链集团”、“认知黑洞”三大核心业务板块，业务涵盖现代农业、食品深加工、智慧冷链物流、人工智能科技等多个领域。
                </p>
                <p>
                  面向未来，达康控股将继续秉持“诚信、创新、共赢”的理念，携手全球合作伙伴，共同推动食品产业的高质量、可持续发展。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Culture */}
      <section className="py-20 bg-brand-light/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">企业文化</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culture.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-light rounded-2xl p-10 border border-white/5 text-center hover:border-gold/30 transition-colors"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-brand flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (GEO) */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">常见问题 (FAQ)</h2>
            <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-6" />
            <p className="text-gray-400">了解更多关于达康控股的常见疑问与官方解答。</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-light border border-white/5 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-200">{faq.q}</span>
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
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
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
