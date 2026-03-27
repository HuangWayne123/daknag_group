import { motion } from 'motion/react';
import { Globe2, TrendingUp, Zap, Shield, Target, Layers } from 'lucide-react';

export default function Capabilities() {
  const capabilities = [
    {
      title: "产业整合能力",
      subtitle: "全链路资源协同",
      desc: "达康控股拥有强大的产业上下游整合能力。我们不仅打通了从农产品种植、食品加工到终端销售的全链路，更通过资本运作与战略合作，将优质资源汇聚于达康生态内，实现产业链的高效协同与价值最大化，构建坚不可摧的产业护城河。",
      icon: <Globe2 className="w-8 h-8 text-gold" />,
      points: ["跨领域资源并购与重组", "上下游企业战略联盟", "全产业链标准化体系建设"]
    },
    {
      title: "资源配置能力",
      subtitle: "全球化视野布局",
      desc: "在全球化视野下，达康控股展现出卓越的资源配置能力。我们精准把握宏观经济脉搏与行业周期，确保资金、技术、人才与物资在集团内部及生态伙伴间的最优流转。通过科学的投资决策与风险控制，实现资产的稳健增值。",
      icon: <TrendingUp className="w-8 h-8 text-gold" />,
      points: ["全球优质产地直采网络", "多元化产业基金运作", "高层次复合型人才梯队"]
    },
    {
      title: "技术赋能能力",
      subtitle: "数字化转型引擎",
      desc: "依托“认知黑洞”的前沿AI技术与大数据分析能力，达康控股为传统食品与供应链产业安装了强大的数字化引擎。从智能排产、精准营销到智慧物流，技术赋能贯穿业务全场景，大幅提升运营效率，引领行业向智能化迈进。",
      icon: <Zap className="w-8 h-8 text-gold" />,
      points: ["产业级AI大模型应用", "全链路数据可视化中台", "物联网(IoT)智能设备接入"]
    },
    {
      title: "品质管控能力",
      subtitle: "严苛的安全标准",
      desc: "食品安全是达康控股的生命线。我们建立了国际领先的全面质量管理体系（TQM），引入区块链溯源技术，实现产品“来源可查、去向可追、责任可究”。从源头到终端，层层把关，确保每一份交付的产品都符合最严苛的安全标准。",
      icon: <Shield className="w-8 h-8 text-gold" />,
      points: ["CNAS认证国家级实验室", "全流程区块链防伪溯源", "国际ISO质量体系认证"]
    },
    {
      title: "战略洞察能力",
      subtitle: "前瞻性市场布局",
      desc: "面对瞬息万变的市场环境，达康控股设立了专业的产业研究院。通过深度的数据挖掘与行业研究，我们能够敏锐捕捉消费趋势变化与技术演进方向，提前布局高增长赛道，确保集团始终处于行业发展的最前沿。",
      icon: <Target className="w-8 h-8 text-gold" />,
      points: ["宏观经济与产业政策研究", "消费者行为深度洞察", "前沿科技商业化落地评估"]
    },
    {
      title: "生态共建能力",
      subtitle: "开放共赢的平台",
      desc: "达康控股致力于打造开放、包容、共赢的产业生态圈。我们向合作伙伴开放供应链、渠道与技术能力，赋能中小企业成长。通过构建“达康产业生态联盟”，与各界伙伴共生共荣，共同推动中国食品产业的高质量发展。",
      icon: <Layers className="w-8 h-8 text-gold" />,
      points: ["中小企业供应链赋能计划", "产学研一体化创新平台", "行业标准制定与推广"]
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
            集团核心能力
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
            达康控股不仅是资产的管理者，更是产业价值的创造者。六大核心能力构筑了我们坚不可摧的竞争壁垒。
          </motion.p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-light rounded-2xl p-8 border border-white/5 hover:border-gold/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {cap.icon}
              </div>
              <div className="text-sm text-gold font-medium mb-2">{cap.subtitle}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{cap.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6 h-32 overflow-hidden">
                {cap.desc}
              </p>
              <ul className="space-y-2 border-t border-white/5 pt-6 mt-auto">
                {cap.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2 text-sm text-gray-300">
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
