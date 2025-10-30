import React from 'react';
import { ServiceService } from '../api/dataService';
import useFetch from '../hooks/useFetch';
import ServiceCard from '../components/ServiceCard'; 

const ServicesPage = () => {
  const { data: services, loading, error } = useFetch(ServiceService.getAllServices);

  if (loading) {
    return <div className="text-center py-5"><div className="spinner-border text-primary" role="status"></div><p>Hizmetler Yükleniyor...</p></div>;
  }

  if (error) {
    return <div className="container py-5 text-danger">Hata: {error}</div>;
  }

  if (!services || services.length === 0) {
    return <div className="container py-5"><p className="text-center">Henüz yayınlanmış bir hizmet bulunmamaktadır.</p></div>;
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4 display-4 text-center">Tüm Hizmetlerimiz</h1>
      <p className="lead text-center mb-5">
        Dijital dönüşümünüzü hızlandırmak için sunduğumuz kapsamlı çözümlere göz atın.
      </p>
      
      <div className="row">
        {services.map(service => (

          <div key={service.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <ServiceCard 
              id={service.id}
              title={service.title}
              short_description={service.short_description}
              icon_name={service.icon_name || 'code-slash'}
            />
          </div>
        ))}
      </div>
      
      <div className="mt-5 text-center">
        <a href="/contact" className="btn btn-primary btn-lg">Projeniz İçin Teklif Alın</a>
      </div>
    </div>
  );
};

export default ServicesPage;