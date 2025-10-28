import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BlogListPage from './pages/BlogListPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

const BlogDetailPage = () => <div className="container py-5"><h1>Blog Detay Sayfası</h1></div>;


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          <Route path="*" element={<div className="container py-5"><h1>404 | Sayfa Bulunamadı</h1></div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;