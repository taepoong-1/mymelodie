import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <div className="container animate-fade-in" style={{ padding: "40px 16px" }}>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          marginBottom: "32px",
          textAlign: "center",
        }}
      >
        📝 심테랜드 블로그
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}/`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              className="card"
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s",
                cursor: "pointer",
              }}
            >
              <div style={{ padding: "24px" }}>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--primary)",
                    fontWeight: 700,
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  {post.category}
                </div>
                <h2
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    marginBottom: "12px",
                    lineHeight: 1.4,
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--text-sub)",
                    lineHeight: 1.6,
                    marginBottom: "16px",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {post.excerpt}
                </p>
                <div
                  style={{
                    marginTop: "auto",
                    fontSize: "0.85rem",
                    color: "#999",
                  }}
                >
                  {post.date}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
