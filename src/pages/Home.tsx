import { motion } from 'motion/react';
import { ArrowRight, Users, MapPin, TrendingUp, Building2, Leaf, Cpu, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const stats = [
    { value: "10,000+", label: "服务企业客户", icon: <Users className="w-5 h-5" /> },
    { value: "50+", label: "覆盖核心区域", icon: <MapPin className="w-5 h-5" /> },
    { value: "100亿+", label: "年产业规模", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  const cards = [
    {
      title: "达康食品股份",
      position: "食品产业核心",
      desc: "专注于高品质食品研发与生产，以严苛标准守护国民健康餐桌，打造全品类食品矩阵。",
      icon: <Leaf className="w-8 h-8 text-gold" />,
    },
    {
      title: "达康供应链集团",
      position: "现代供应链服务",
      desc: "构建高效、透明、智能的现代化冷链与物流网络，保障产业链上下游的高效流转。",
      icon: <Network className="w-8 h-8 text-gold" />,
    },
    {
      title: "认知黑洞",
      position: "前沿AI科技",
      desc: "以人工智能赋能传统产业，研发智慧供应链大模型，推动产业链全面数字化转型。",
      icon: <Cpu className="w-8 h-8 text-gold" />,
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-brand-lighter/20 blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light border border-gold/20 text-gold text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              食品产业链耕耘者
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
              食品产业链<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
                生态布局引领者
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              通过食品、供应链与AI技术，构建完整产业链体系，致力于为全球客户提供卓越的产业价值与创新服务。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/industries" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold text-brand font-bold hover:bg-gold-hover transition-all flex items-center justify-center gap-2 group">
                了解产业布局
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-light text-white border border-white/10 hover:border-gold/50 hover:text-gold transition-all flex items-center justify-center">
                关于达康
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5 bg-brand-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center py-8 md:py-0 text-center"
              >
                <div className="text-gold mb-4 p-3 rounded-full bg-gold/10">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Industries Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">核心产业布局</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">三大核心板块协同发展，构建从源头到终端的完整食品产业生态圈。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-brand-light rounded-2xl p-8 border border-white/5 hover:border-gold/30 transition-all group hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <div className="text-sm text-gold font-medium mb-2">{card.position}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {card.desc}
                </p>
                <Link to="/industries" className="flex items-center gap-2 text-white group-hover:text-gold transition-colors font-medium mt-auto w-fit">
                  深入了解 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
