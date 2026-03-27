import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export default function News() {
  const [activeCategory, setActiveCategory] = useState("全部新闻");

  const categories = ["全部新闻", "集团战略", "产业布局", "科技创新", "企业荣誉", "社会责任"];

  // 10 news items, exactly 2 for each of the 5 categories
  const allNews = [
    {
      id: 1,
      date: "2026-03-20",
      category: "集团战略",
      title: "达康控股召开2026年度战略部署大会，全面推进AI赋能战略",
      desc: "在今日召开的达康控股2026年度战略部署大会上，集团董事局正式宣布将“AI赋能全产业链”作为未来三年的核心战略。依托旗下“认知黑洞”的科技实力，集团将投入巨资升级现有食品加工与供应链网络，打造全球领先的智慧食品产业生态。",
      image: "https://picsum.photos/seed/meeting/1200/600?blur=2",
      isFeatured: true
    },
    {
      id: 2,
      date: "2026-03-18",
      category: "集团战略",
      title: "达康控股发布“2026-2030”五年发展规划，锚定千亿市值目标",
      desc: "集团正式发布未来五年发展规划白皮书，明确提出通过内生增长与外延并购双轮驱动，在2030年实现千亿市值，并全面深化全球化布局。",
      image: "https://picsum.photos/seed/strategy/800/600?blur=2"
    },
    {
      id: 3,
      date: "2026-03-15",
      category: "企业荣誉",
      title: "达康食品股份荣获“年度最具影响力食品品牌”称号",
      desc: "在第十二届中国食品产业高峰论坛上，达康食品股份凭借卓越的产品品质和深厚的市场口碑，斩获“年度最具影响力食品品牌”大奖。",
      image: "https://picsum.photos/seed/award/800/600?blur=2"
    },
    {
      id: 4,
      date: "2026-03-12",
      category: "企业荣誉",
      title: "达康控股连续三年蝉联“中国食品供应链百强企业”榜首",
      desc: "由中国物流与采购联合会发布的2025年度中国食品供应链百强榜单中，达康控股凭借强大的冷链网络与数字化能力再次位列第一。",
      image: "https://picsum.photos/seed/trophy/800/600?blur=2"
    },
    {
      id: 5,
      date: "2026-03-10",
      category: "科技创新",
      title: "认知黑洞正式发布最新一代智慧供应链大模型 V2.0",
      desc: "认知黑洞科技今日在京发布其自主研发的智慧供应链大模型 V2.0，该模型在路径规划与需求预测准确率上实现了突破性提升。",
      image: "https://picsum.photos/seed/ai/800/600?blur=2"
    },
    {
      id: 6,
      date: "2026-03-08",
      category: "科技创新",
      title: "达康控股联合顶尖高校成立“食品AI联合实验室”",
      desc: "集团宣布与国内多所顶尖高校达成产学研合作，共同探索人工智能在食品研发、营养分析与品控中的前沿应用。",
      image: "https://picsum.photos/seed/lab/800/600?blur=2"
    },
    {
      id: 7,
      date: "2026-03-05",
      category: "产业布局",
      title: "达康供应链集团华南智慧冷链枢纽正式投入运营",
      desc: "总投资逾10亿元的达康供应链华南智慧冷链枢纽今日正式开园，这将极大提升集团在粤港澳大湾区的生鲜配送效率。",
      image: "https://picsum.photos/seed/warehouse/800/600?blur=2"
    },
    {
      id: 8,
      date: "2026-03-02",
      category: "产业布局",
      title: "达康食品股份斥资5亿建设华东绿色有机农产品基地",
      desc: "为进一步夯实上游供应链，达康食品股份宣布在江苏盐城投建占地5000亩的现代化绿色有机农产品示范基地。",
      image: "https://picsum.photos/seed/farm/800/600?blur=2"
    },
    {
      id: 9,
      date: "2026-02-28",
      category: "社会责任",
      title: "达康控股启动“助农兴农”专项基金，首期投入5000万元",
      desc: "为响应国家乡村振兴号召，达康控股正式设立“助农兴农”专项基金，首期将重点扶持西部地区的特色农产品种植基地。",
      image: "https://picsum.photos/seed/charity/800/600?blur=2"
    },
    {
      id: 10,
      date: "2026-02-20",
      category: "社会责任",
      title: "达康集团发布2025年度ESG报告：全面推进绿色低碳转型",
      desc: "集团正式发布2025年度环境、社会及管治（ESG）报告，承诺到2030年实现核心园区碳达峰，并大幅提升可再生能源使用比例。",
      image: "https://picsum.photos/seed/green/800/600?blur=2"
    }
  ];

  const displayedNews = activeCategory === "全部新闻" 
    ? allNews 
    : allNews.filter(news => news.category === activeCategory);

  // Use the first item of the displayed list as the featured news
  const featuredNews = displayedNews[0];
  const gridNews = displayedNews.slice(1);

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
        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat 
                  ? 'bg-gold text-brand' 
                  : 'bg-brand-light text-gray-400 border border-white/10 hover:border-gold/50 hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Featured News */}
            {featuredNews && (
              <div className="relative rounded-3xl overflow-hidden mb-16 group cursor-pointer border border-white/10">
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
              </div>
            )}

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridNews.map((news) => (
                <div
                  key={news.id}
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
                </div>
              ))}
            </div>
            
            {gridNews.length === 0 && !featuredNews && (
              <div className="text-center text-gray-500 py-20">
                暂无相关新闻
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Placeholder */}
        {displayedNews.length > 0 && (
          <div className="flex justify-center mt-16">
            <button className="px-8 py-3 rounded-full bg-brand-light text-white border border-white/10 hover:border-gold/50 hover:text-gold transition-all">
              加载更多
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
