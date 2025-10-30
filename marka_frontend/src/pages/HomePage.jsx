import React, { useState, useEffect } from "react";
import { ServiceService, BlogService } from "../api/dataService";
import HeroSection from "../components/HeroSection";
import ServiceOverview from "../components/ServiceOverview";
import LatestBlogPosts from "../components/LatestBlogPosts";

const HomePage = () => {
  const [data, setData] = useState({ services: [], posts: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      ServiceService.getFeaturedServices(),
      BlogService.getLatestPosts(3),
    ])
      .then(([servicesResponse, postsResponse]) => {
        setData({
          services: servicesResponse.data,
          posts: postsResponse.data,
        });
      })
      .catch((err) => {
        console.error("Anasayfa verisi çekilirken hata oluştu:", err);
        setError("Veri yüklenemedi.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Yükleniyor...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-5 text-danger">Hata: {error}</div>;
  }

  return (
    <div>
      <HeroSection />
      <ServiceOverview services={data.services} />
      <LatestBlogPosts posts={data.posts} />
    </div>
  );
};

export default HomePage;
