import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircleQuestion } from 'lucide-react';

export default function FAQ() {
  const faqCategories = [
    {
      title: "关于集团",
      items: [
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
        }
      ]
    },
    {
      title: "业务与合作",
      items: [
        {
          q: "如何成为达康供应链的合作伙伴？",
          a: "我们欢迎各类优质供应商、物流服务商加入达康生态。您可以通过集团官网的“供应商入口”提交企业资质，我们的供应链管理团队会在3个工作日内与您取得联系并进行初步评估。"
        },
        {
          q: "达康食品股份的产品在哪里可以购买？",
          a: "我们的产品已全面覆盖全国一二线城市的线下大型商超（如沃尔玛、大润发、盒马鲜生等），同时在天猫、京东、抖音等主流电商平台均设有官方旗舰店，为您提供便捷的购买渠道。"
        },
        {
          q: "集团是否接受外部投资或提供产业孵化？",
          a: "达康控股设有专门的产业基金，重点关注食品科技、冷链物流、农业物联网等上下游创新型企业。如果您有优秀的项目，欢迎将商业计划书发送至投资部邮箱 investment@dakang-holdings.com。"
        }
      ]
    },
    {
      title: "科技与创新",
      items: [
        {
          q: "“认知黑洞”主要解决什么行业痛点？",
          a: "“认知黑洞”致力于通过AI大模型解决食品产业链中的需求预测不准、仓储物流效率低下、食品安全溯源难等痛点。我们的智慧供应链大脑能够将整体库存周转率提升30%以上。"
        },
        {
          q: "达康控股如何保证食品安全？",
          a: "食品安全是我们的生命线。达康控股建立了国际领先的全面质量管理体系（TQM），并引入了基于区块链的防伪溯源技术。从农产品种植、生产加工、冷链运输到终端销售，实现全链路透明化管理，确保每一份产品都符合最严苛的安全标准。"
        }
      ]
    }
  ];

  const [openState, setOpenState] = useState<Record<string, boolean>>({
    "0-0": true // Open the first FAQ by default
  });

  const toggleFaq = (catIdx: number, itemIdx: number) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenState(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="w-full pb-24">
      {/* Page Header */}
      <section className="pt-20 pb-16 bg-brand-light/30 border-b border-white/5">
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
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            常见问题 (FAQ)
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
            在这里，您可以找到关于达康控股的官方解答。如果您有更多疑问，欢迎随时联系我们。
          </motion.p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {faqCategories.map((category, catIdx) => (
              <motion.div 
                key={catIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <HelpCircle className="w-6 h-6 text-gold" />
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((faq, itemIdx) => {
                    const isOpen = openState[`${catIdx}-${itemIdx}`];
                    return (
                      <div 
                        key={itemIdx}
                        className="bg-brand-light border border-white/5 rounded-2xl overflow-hidden transition-colors hover:border-white/10"
                      >
                        <button
                          onClick={() => toggleFaq(catIdx, itemIdx)}
                          className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                        >
                          <span className="text-lg font-medium text-gray-200 pr-8">{faq.q}</span>
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
                              <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
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

          {/* Contact Support */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-brand-light to-brand border border-gold/20 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">没有找到您的问题？</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              我们的专业团队随时准备为您提供帮助。无论是业务咨询、媒体采访还是投资者关系，请随时与我们取得联系。
            </p>
            <button className="px-8 py-4 rounded-full bg-gold text-brand font-bold hover:bg-gold-hover transition-all">
              联系客服团队
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
