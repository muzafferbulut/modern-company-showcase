import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white-50 py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Marka Sitesi</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/services" className="text-white-50">Hizmetler</Link></li>
              <li><Link to="/blog" className="text-white-50">Blog</Link></li>
              <li><Link to="/about" className="text-white-50">Hakkımızda</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>İletişim</h5>
            <p className="mb-1">Email: info@marka.com</p>
            <p>Telefon: (555) 555-5555</p>
          </div>
        </div>
        <div className="text-center pt-3 border-top border-secondary">
          <small>&copy; {new Date().getFullYear()} Marka Sitesi. Tüm hakları saklıdır.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;