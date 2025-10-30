import React from "react";
import { Link } from "react-router-dom";

const LatestBlogPosts = ({ posts }) => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Son Blog Yazıları</h2>

        {posts.length > 0 ? (
          <div className="row">
            {posts.map((post) => (
              <div key={post.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text text-muted small">
                      Yazar: {post.author.name} | Tarih:{" "}
                      {new Date(post.published_date).toLocaleDateString()}
                    </p>

                    <p>{post.content.substring(0, 100)}...</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="btn btn-sm btn-link p-0"
                    >
                      Devamını Oku &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">
            Henüz yayınlanmış bir makale bulunmamaktadır.
          </p>
        )}
      </div>
    </section>
  );
};

export default LatestBlogPosts;
