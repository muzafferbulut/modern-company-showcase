import React, { useState } from "react";
import { ContactService } from "../api/dataService";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    sender_name: "",
    sender_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await ContactService.submitContactForm(formData);
      setSuccessMessage(
        response.data.success || "Mesajınız başarıyla gönderildi!"
      );
      setFormData({
        sender_name: "",
        sender_email: "",
        message: "",
      });
    } catch (err) {
      console.error("İletişim formu gönderilirken hata oluştu:", err);
      setError(
        err.response?.data?.detail ||
          "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4 display-4 text-center">İletişim</h1>
      <p className="lead text-center mb-5">
        Sorularınız, görüşleriniz veya işbirliği teklifleriniz için bizimle
        iletişime geçmekten çekinmeyin.
      </p>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 p-4">
            <div className="card-body">
              {successMessage && (
                <div className="alert alert-success" role="alert">
                  {successMessage}
                </div>
              )}
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="sender_name" className="form-label">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="sender_name"
                    name="sender_name"
                    value={formData.sender_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="sender_email" className="form-label">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="sender_email"
                    name="sender_email"
                    value={formData.sender_email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Mesajınız
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Gönderiliyor...
                    </>
                  ) : (
                    "Mesajı Gönder"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
