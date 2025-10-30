import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ id, title, short_description, icon_name }) => {
  return (
      <div className="card h-100 shadow-sm border-0 mb-3">
        <div className="card-body text-center">
          <div
            className="icon-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
            }}
          >
            <i className={`bi bi-${icon_name} fs-4`}></i>
          </div>
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">{short_description}</p>
          <Link
            to={`/services/${id}`}
            className="btn btn-sm btn-outline-primary mt-3"
          >
            Detaylar
          </Link>
        </div>
      </div>
  );
};

export default ServiceCard;
