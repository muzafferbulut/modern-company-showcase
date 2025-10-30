import React from "react";
import { useParams, Link } from "react-router-dom";
import { BlogService } from "../api/dataService";
import useFetch from "../hooks/useFetch";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const {
    data: post,
    loading,
    error,
  } = useFetch(() => BlogService.getPostBySlug(slug), [slug]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p>Makale Yükleniyor...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container py-5">
        <h2 className="text-danger">404 | Makale Bulunamadı</h2>
        <p>
          Aradığınız makaleye ulaşılamıyor veya böyle bir makale mevcut değil.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {post.title}
          </li>
        </ol>
      </nav>

      <h1 className="mb-4 display-3 fw-bold">{post.title}</h1>

      <div className="d-flex align-items-center mb-4 text-muted">
        <div>
          <p className="mb-0">
            Yazar: <span className="fw-bold">{post.author.name}</span>
          </p>
          <small className="text-muted">Pozisyon: {post.author.role}</small>
          <p className="mb-0">
            <small>
              Yayın Tarihi: {new Date(post.published_date).toLocaleDateString()}
            </small>
          </p>
        </div>
      </div>

      <hr className="mb-4" />

      <div className="blog-content" style={{ lineHeight: "1.8" }}>
        <p style={{ whiteSpace: "pre-wrap" }}>{post.content}</p>
      </div>

      <div className="mt-5 pt-3 border-top text-center">
        <Link to="/blog" className="btn btn-outline-secondary">
          &larr; Tüm Makalelere Geri Dön
        </Link>
      </div>
    </div>
  );
};

export default BlogDetailPage;
