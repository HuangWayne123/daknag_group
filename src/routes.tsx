import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Industries from './pages/Industries';
import Capabilities from './pages/Capabilities';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import About from './pages/About';
import FAQ from './pages/FAQ';

export const groupRoutes = ['/', '/industries', '/capabilities', '/news', '/about', '/faq'];

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="industries" element={<Industries />} />
        <Route path="capabilities" element={<Capabilities />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsDetail />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
      </Route>
    </Routes>
  );
}
