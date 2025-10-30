import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceOverview = ({ services }) => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Hizmetlerimiz</h2>
      <div className="row">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            short_description={service.short_description}
            icon_name={service.icon_name || "code-slash"}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceOverview;
