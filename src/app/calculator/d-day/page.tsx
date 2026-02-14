"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";

export default function DDayCalculator() {
  const [targetDate, setTargetDate] = useState("");
  const [title, setTitle] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    if (!targetDate) return;

    const target = new Date(targetDate);
    const today = new Date();
    // Reset time to start of day for accurate day diff
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);

    const diffTime = target.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0) {
      setResult(`D-${diffDays}`);
    } else if (diffDays === 0) {
      setResult("D-Day");
    } else {
      setResult(`D+${Math.abs(diffDays)}`);
    }
  };

  return (
    <div
      className="container animate-fade-in"
      style={{ padding: "40px 16px", maxWidth: "600px" }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          marginBottom: "16px",
          textAlign: "center",
        }}
      >
        🎉 D-day 계산기
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "var(--text-sub)",
          marginBottom: "32px",
        }}
      >
        중요한 날까지 며칠 남았는지 확인해보세요!
      </p>

      <div className="card" style={{ padding: "32px" }}>
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}
          >
            이벤트 제목
          </label>
          <input
            type="text"
            placeholder="예: 수능, 전역일, 100일"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
            }}
          />
        </div>

        <div style={{ marginBottom: "32px" }}>
          <label
            style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}
          >
            날짜 선택
          </label>
          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
            }}
          />
        </div>

        <button
          onClick={calculate}
          className="btn btn-full btn-primary"
          style={{ marginBottom: "24px" }}
        >
          계산하기
        </button>

        {result && (
          <div
            style={{
              textAlign: "center",
              padding: "24px",
              background: "#f8f9fa",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                fontSize: "1.2rem",
                fontWeight: 600,
                color: "var(--text-sub)",
                marginBottom: "8px",
              }}
            >
              {title || "그 날"}까지
            </div>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: 900,
                color: "var(--primary)",
              }}
            >
              {result}
            </div>

            <button
              className="btn"
              style={{
                marginTop: "16px",
                background: "#FAE100",
                color: "#371D1E",
                padding: "8px 16px",
                fontSize: "0.9rem",
              }}
            >
              <Share2 size={16} style={{ marginRight: "8px" }} /> 공유하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
