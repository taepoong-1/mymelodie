import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  const posts = getAllPosts();
  console.log(
    "Generating static params for blog posts:",
    posts.map((p) => p.slug),
  );
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div
      className="container animate-fade-in"
      style={{ padding: "40px 16px", maxWidth: "768px" }}
    >
      <Link
        href="/blog"
        className="btn"
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: "transparent",
          color: "var(--text-sub)",
          padding: "8px 0",
          marginBottom: "24px",
          border: "none",
        }}
      >
        <ArrowLeft size={20} style={{ marginRight: "8px" }} /> 목록으로 돌아가기
      </Link>

      <article>
        <header style={{ marginBottom: "32px" }}>
          <div
            style={{
              fontSize: "1rem",
              color: "var(--primary)",
              fontWeight: 700,
              marginBottom: "16px",
              textTransform: "uppercase",
            }}
          >
            {post.category}
          </div>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 900,
              lineHeight: 1.3,
              marginBottom: "16px",
            }}
          >
            {post.title}
          </h1>
          <div style={{ color: "var(--text-sub)", fontSize: "1rem" }}>
            {post.date}
          </div>
        </header>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "var(--text-main)",
          }}
        />
      </article>

      <div
        style={{
          marginTop: "64px",
          borderTop: "1px solid var(--border)",
          paddingTop: "32px",
        }}
      >
        <h3
          style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px" }}
        >
          더 많은 콘텐츠 보기
        </h3>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link
            href="/fortune"
            className="btn"
            style={{ flex: 1, minWidth: "200px", textAlign: "center" }}
          >
            🔮 오늘의 운세 확인하기
          </Link>
          <Link
            href="/"
            className="btn"
            style={{
              flex: 1,
              minWidth: "200px",
              textAlign: "center",
              background: "var(--secondary)",
            }}
          >
            🏠 홈으로 가기
          </Link>
        </div>
      </div>
    </div>
  );
}
