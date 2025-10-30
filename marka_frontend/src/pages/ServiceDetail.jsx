import React from "react";
import { useParams } from "react-router-dom";
import { ServiceService } from "../api/dataService";
import useFetch from "../hooks/useFetch";

const ServiceDetail = () => {
  const { id } = useParams();

  const {
    data: service,
    loading,
    error,
  } = useFetch(() => ServiceService.getServiceDetail(id), [id]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p>Hizmet Yükleniyor...</p>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="container py-5">
        <h2 className="text-danger">404 | Hizmet Bulunamadı</h2>
        <p>Aradığınız hizmete ulaşılamıyor veya bir hata oluştu: {error}</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/services">Hizmetler</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {service.title}
          </li>
        </ol>
      </nav>

      <h1 className="mb-4 display-4">{service.title}</h1>
      <h3 className="text-primary mb-4">{service.short_description}</h3>

      <hr />

      <p style={{ whiteSpace: "pre-wrap" }}>{service.description}</p>

      <div className="mt-5 text-center">
        <a href="/contact" className="btn btn-lg btn-primary">
          Hemen Teklif Alın
        </a>
      </div>
    </div>
  );
};

export default ServiceDetail;
