import Link from "next/link";
import { getAllTests } from "@/lib/tests";
import { Users, Heart, Briefcase } from "lucide-react";

export default function TestsPage() {
  const tests = getAllTests();

  return (
    <div className="container animate-fade-in" style={{ padding: "40px 16px" }}>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          marginBottom: "24px",
          textAlign: "center",
        }}
      >
        심리테스트 모음
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {tests.map((test) => (
          <Link
            key={test.id}
            href={`/tests/${test.id}`}
            className="card"
            style={{
              display: "block",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                height: "160px",
                background: "var(--border)",
                borderRadius: "8px",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                fontSize: "3rem",
              }}
            >
              {test.emoji
                ? test.emoji
                : test.category === "personality"
                  ? "🧩"
                  : test.category === "love"
                    ? "💘"
                    : "💼"}
            </div>
            <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
              <span
                style={{
                  fontSize: "0.8rem",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  background: "rgba(0,0,0,0.05)",
                  fontWeight: 600,
                }}
              >
                {test.category === "personality"
                  ? "성격"
                  : test.category === "love"
                    ? "연애"
                    : "직업"}
              </span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-sub)" }}>
                {test.viewCount.toLocaleString()}명 참여
              </span>
            </div>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              {test.title}
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-sub)",
                lineHeight: 1.4,
              }}
            >
              {test.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
