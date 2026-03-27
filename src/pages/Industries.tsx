import { motion } from 'motion/react';
import { Leaf, Network, Cpu, CheckCircle2 } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      id: "food",
      title: "达康食品股份",
      subtitle: "食品产业核心",
      desc: "达康食品股份是集团的基石业务，专注于高品质食品的研发、生产与销售。我们坚持“从田间到餐桌”的全链路质量管控，以严苛的标准守护国民健康餐桌。目前已形成涵盖绿色农产品、深加工食品、健康代餐等多个领域的全品类食品矩阵。",
      icon: <Leaf className="w-10 h-10 text-gold" />,
      image: "https://picsum.photos/seed/agriculture/800/600?blur=2",
      features: [
        "绿色有机农产品种植基地",
        "现代化食品深加工产业园",
        "国家级食品安全检测中心",
        "健康营养代餐研发实验室"
      ]
    },
    {
      id: "supply",
      title: "达康供应链集团",
      subtitle: "现代供应链服务",
      desc: "达康供应链集团致力于构建高效、透明、智能的现代化冷链与物流网络。通过整合全国仓储与运力资源，我们为食品产业链上下游企业提供端到端的综合供应链解决方案，大幅降低流通成本，保障食品新鲜与安全。",
      icon: <Network className="w-10 h-10 text-gold" />,
      image: "https://picsum.photos/seed/logistics/800/600?blur=2",
      features: [
        "全国百城智慧冷链骨干网",
        "B2B/B2C 仓配一体化服务",
        "全球生鲜跨境贸易直采",
        "供应链金融与保理服务"
      ],
      reverse: true
    },
    {
      id: "ai",
      title: "认知黑洞",
      subtitle: "前沿AI科技",
      desc: "“认知黑洞”是达康控股旗下的前沿科技引擎，专注于以人工智能赋能传统实体产业。我们自主研发了针对食品与供应链行业的垂直大模型，通过数据驱动与智能决策，推动整个产业链的全面数字化与智能化转型。",
      icon: <Cpu className="w-10 h-10 text-gold" />,
      image: "https://picsum.photos/seed/technology/800/600?blur=2",
      features: [
        "食品产业链智慧大模型",
        "智能仓储与路径规划算法",
        "基于区块链的食品溯源系统",
        "消费趋势预测与大数据分析"
      ]
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
            核心产业布局
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
            三大核心板块相互赋能，形成“实业+供应链+科技”的铁三角阵型，共同驱动集团的跨越式发展。
          </motion.p>
        </div>
      </section>

      {/* Industry Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-32">
        {industries.map((industry, idx) => (
          <section key={industry.id} className={`flex flex-col ${industry.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: industry.reverse ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-brand/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: industry.reverse ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-brand-light border border-white/5 flex items-center justify-center">
                  {industry.icon}
                </div>
                <div>
                  <div className="text-gold font-medium mb-1">{industry.subtitle}</div>
                  <h2 className="text-3xl font-bold text-white">{industry.title}</h2>
                </div>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {industry.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industry.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
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
