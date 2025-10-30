import React from "react";
import { Link } from "react-router-dom";
import { BlogService } from "../api/dataService";
import useFetch from "../hooks/useFetch";

const BlogListPage = () => {
  const { data: posts, loading, error } = useFetch(BlogService.getAllPosts);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p>Makaleler Yükleniyor...</p>
      </div>
    );
  }

  if (error) {
    return <div className="container py-5 text-danger">Hata: {error}</div>;
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="container py-5">
        <p className="text-center">
          Henüz yayınlanmış bir makale bulunmamaktadır.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4 display-4 text-center">Tüm Blog Yazıları</h1>

      <div className="row">
        {posts.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">{post.title}</h5>
                <p className="card-text text-muted small">
                  Yazar: {post.author.name} | Tarih:{" "}
                  {new Date(post.published_date).toLocaleDateString()}
                </p>
                <p>
                  {post.content.substring(0, 150)}
                  {post.content.length > 150 ? "..." : ""}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="btn btn-sm btn-outline-primary"
                >
                  Devamını Oku &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
