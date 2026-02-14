import Link from "next/link";
import { getAllTests } from "@/lib/tests";
import { TrendingUp, Star } from "lucide-react";

export default function PopularPage() {
  const tests = getAllTests().sort((a, b) => b.viewCount - a.viewCount);

  return (
    <div className="container animate-fade-in" style={{ padding: "40px 16px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "12px" }}>
          🔥 실시간 인기 차트
        </h1>
        <p style={{ color: "var(--text-sub)" }}>
          지금 가장 핫한 테스트를 만나보세요
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {tests.map((test, index) => (
          <Link
            key={test.id}
            href={`/tests/${test.id}`}
            className="card"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              textDecoration: "none",
              color: "inherit",
              padding: "24px",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 900,
                color: index < 3 ? "var(--primary)" : "#ddd",
                width: "40px",
                textAlign: "center",
              }}
            >
              {index + 1}
            </div>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "12px",
                background: "#f1f3f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                flexShrink: 0,
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
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-sub)",
                  marginBottom: "4px",
                }}
              >
                {test.category === "personality"
                  ? "성격"
                  : test.category === "love"
                    ? "연애"
                    : "직업"}{" "}
                테스트
              </div>
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                {test.title}
              </h2>
              <div
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-sub)",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <TrendingUp size={14} /> {test.viewCount.toLocaleString()}명
                참여
              </div>
            </div>
            <div
              className="btn"
              style={{
                padding: "8px 16px",
                fontSize: "0.9rem",
                background: "#f8f9fa",
              }}
            >
              시작
            </div>
          </Link>
        ))}

        {/* Placeholder for calculators as they are also popular */}
        <Link
          href="/calculator/d-day"
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            textDecoration: "none",
            color: "inherit",
            padding: "24px",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              fontWeight: 900,
              color: "#ddd",
              width: "40px",
              textAlign: "center",
            }}
          >
            {tests.length + 1}
          </div>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "12px",
              background: "#f1f3f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.5rem",
              flexShrink: 0,
            }}
          >
            📅
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: "0.8rem",
                color: "var(--text-sub)",
                marginBottom: "4px",
              }}
            >
              유틸리티
            </div>
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                marginBottom: "4px",
              }}
            >
              D-day 계산기
            </h2>
            <div
              style={{
                fontSize: "0.9rem",
                color: "var(--text-sub)",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <TrendingUp size={14} /> 25,100명 사용
            </div>
          </div>
          <div
            className="btn"
            style={{
              padding: "8px 16px",
              fontSize: "0.9rem",
              background: "#f8f9fa",
            }}
          >
            사용
          </div>
        </Link>
      </div>
    </div>
  );
}
