import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      className="container text-center py-5"
      style={{ minHeight: "calc(100vh - 200px)" }}
    >
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="mb-4">Sayfa Bulunamadı</h2>
      <p className="lead mb-4">
        Üzgünüz, aradığınız sayfayı bulamıyoruz. Belki başka bir şeye bakmak
        istersiniz?
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        Anasayfaya Dön
      </Link>
    </div>
  );
};

export default NotFoundPage;
