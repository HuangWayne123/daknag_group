import { motion } from 'motion/react';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export default function News() {
  const featuredNews = {
    date: "2026-03-20",
    category: "集团战略",
    title: "达康控股召开2026年度战略部署大会，全面推进AI赋能战略",
    desc: "在今日召开的达康控股2026年度战略部署大会上，集团董事局正式宣布将“AI赋能全产业链”作为未来三年的核心战略。依托旗下“认知黑洞”的科技实力，集团将投入巨资升级现有食品加工与供应链网络，打造全球领先的智慧食品产业生态。",
    image: "https://picsum.photos/seed/meeting/1200/600?blur=2"
  };

  const newsList = [
    {
      date: "2026-03-15",
      category: "企业荣誉",
      title: "达康食品股份荣获“年度最具影响力食品品牌”称号",
      desc: "在第十二届中国食品产业高峰论坛上，达康食品股份凭借卓越的产品品质和深厚的市场口碑，斩获“年度最具影响力食品品牌”大奖。"
    },
    {
      date: "2026-03-10",
      category: "科技创新",
      title: "认知黑洞正式发布最新一代智慧供应链大模型 V2.0",
      desc: "认知黑洞科技今日在京发布其自主研发的智慧供应链大模型 V2.0，该模型在路径规划与需求预测准确率上实现了突破性提升。"
    },
    {
      date: "2026-03-05",
      category: "产业布局",
      title: "达康供应链集团华南智慧冷链枢纽正式投入运营",
      desc: "总投资逾10亿元的达康供应链华南智慧冷链枢纽今日正式开园，这将极大提升集团在粤港澳大湾区的生鲜配送效率。"
    },
    {
      date: "2026-02-28",
      category: "社会责任",
      title: "达康控股启动“助农兴农”专项基金，首期投入5000万元",
      desc: "为响应国家乡村振兴号召，达康控股正式设立“助农兴农”专项基金，首期将重点扶持西部地区的特色农产品种植基地。"
    },
    {
      date: "2026-02-15",
      category: "国际合作",
      title: "达康控股与欧洲顶级食品研究机构达成战略合作",
      desc: "集团代表团近日访问欧洲，并与多家顶级食品科学研究机构签署战略合作协议，共同推进健康代餐产品的研发。"
    },
    {
      date: "2026-01-20",
      category: "财务报告",
      title: "达康控股发布2025年财报：营收突破百亿，利润稳健增长",
      desc: "达康控股今日发布2025年度财务报告。报告显示，集团全年实现营业收入突破100亿元人民币，各项核心业务均保持稳健增长态势。"
    }
  ];

  const categories = ["全部新闻", "集团战略", "产业布局", "科技创新", "企业荣誉", "社会责任"];

  return (
    <div className="w-full pb-24">
      {/* Page Header */}
      <section className="pt-20 pb-12 bg-brand-light/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            新闻与动态
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
            关注达康控股最新资讯，了解我们在食品产业链、智慧供应链与前沿科技领域的最新突破与发展。
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                idx === 0 
                  ? 'bg-gold text-brand' 
                  : 'bg-brand-light text-gray-400 border border-white/10 hover:border-gold/50 hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured News */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden mb-16 group cursor-pointer border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/80 to-transparent z-10" />
          <img 
            src={featuredNews.image} 
            alt={featuredNews.title} 
            className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 rounded-full bg-gold text-brand text-xs font-bold">
                {featuredNews.category}
              </span>
              <span className="flex items-center gap-2 text-gray-300 text-sm font-mono">
                <Calendar className="w-4 h-4" /> {featuredNews.date}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
              {featuredNews.title}
            </h2>
            <p className="text-gray-300 max-w-3xl text-lg leading-relaxed hidden md:block">
              {featuredNews.desc}
            </p>
          </div>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((news, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-light rounded-2xl p-8 border border-white/5 hover:border-gold/30 transition-all group cursor-pointer flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-brand border border-white/10 text-gold text-xs font-medium flex items-center gap-1">
                  <Tag className="w-3 h-3" /> {news.category}
                </span>
                <span className="text-gray-500 font-mono text-sm">
                  {news.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-200 mb-4 group-hover:text-white transition-colors">
                {news.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {news.desc}
              </p>
              <div className="flex items-center gap-2 text-gold font-medium mt-auto group-hover:translate-x-2 transition-transform w-fit">
                阅读全文 <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="flex justify-center mt-16">
          <button className="px-8 py-3 rounded-full bg-brand-light text-white border border-white/10 hover:border-gold/50 hover:text-gold transition-all">
            加载更多
          </button>
        </div>
      </div>
    </div>
  );
}
