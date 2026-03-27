import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: '首页', path: '/' },
    { name: '产业布局', path: '/industries' },
    { name: '集团能力', path: '/capabilities' },
    { name: '新闻动态', path: '/news' },
    { name: '关于我们', path: '/about' },
    { name: '常见问题', path: '/faq' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center group-hover:bg-gold-light transition-colors">
              <Building2 className="text-brand w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-wider text-white">达康控股</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                return (
                  <Link 
                    key={item.name} 
                    to={item.path} 
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive ? 'text-gold' : 'text-gray-300 hover:text-gold'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-light border-b border-white/5 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
                return (
                  <Link 
                    key={item.name} 
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive ? 'text-gold bg-white/5' : 'text-gray-300 hover:text-gold hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brand pt-20 pb-10 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center">
                <Building2 className="text-brand w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-wider text-white">达康控股</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              食品产业链生态布局引领者。通过食品、供应链与AI技术，构建完整产业链体系。
            </p>
            <div className="text-sm text-gray-500">
              © 2026 达康控股集团有限公司. 保留所有权利.
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">快速链接</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/industries" className="hover:text-gold transition-colors">产业布局</Link></li>
              <li><Link to="/capabilities" className="hover:text-gold transition-colors">集团能力</Link></li>
              <li><Link to="/news" className="hover:text-gold transition-colors">新闻动态</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">关于我们</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">常见问题</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">联系我们</h4>
            <ul className="space-y-4 text-gray-400">
              <li>北京市朝阳区达康大厦</li>
              <li>contact@dakang-holdings.com</li>
              <li>400-888-8888</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = () => {
  return (
    <div className="min-h-screen bg-brand text-slate-200 font-sans selection:bg-gold selection:text-brand flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
