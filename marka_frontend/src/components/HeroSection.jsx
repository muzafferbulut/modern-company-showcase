import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-dark text-white py-5 mb-5">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-4">
              Dijital Dönüşüm Yolculuğunuzda Güvenilir Ortağınız
            </h1>
            <p className="lead mb-4">
              İşinizi geleceğe taşımak için yenilikçi çözümler sunuyoruz.
              Sürdürülebilir ve temiz kod yaklaşımlarımızla projelerinizi
              güvence altına alın.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg me-3">
              Çözümlerimizi Keşfedin
            </Link>
            <Link to="/services" className="btn btn-outline-light btn-lg">
              Hizmetlerimizi Görün
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
