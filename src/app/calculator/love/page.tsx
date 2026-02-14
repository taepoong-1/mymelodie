"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export default function LoveCalculator() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [score, setScore] = useState<number | null>(null);

  const calculate = () => {
    if (!name1 || !name2) return;

    // Simple deterministic hash
    const str = name1 < name2 ? name1 + name2 : name2 + name1;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    const result = Math.abs(hash) % 101; // 0 to 100
    setScore(result);
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
        💘 사랑의 확인
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "var(--text-sub)",
          marginBottom: "32px",
        }}
      >
        이름으로 확인하는 우리의 애정도는 몇 점?
      </p>

      <div className="card" style={{ padding: "32px" }}>
        <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
          <div style={{ flex: 1 }}>
            <label
              style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}
            >
              내 이름
            </label>
            <input
              type="text"
              placeholder="예: 김철수"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label
              style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}
            >
              상대방 이름
            </label>
            <input
              type="text"
              placeholder="예: 이영희"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid var(--border)",
              }}
            />
          </div>
        </div>

        <button
          onClick={calculate}
          className="btn btn-full"
          style={{ background: "#FF6B6B", color: "white" }}
        >
          <Heart size={20} style={{ marginRight: "8px" }} fill="white" />{" "}
          확인하기
        </button>

        {score !== null && (
          <div
            className="animate-fade-in"
            style={{ marginTop: "32px", textAlign: "center" }}
          >
            <div
              style={{
                fontSize: "1.2rem",
                color: "var(--text-sub)",
                marginBottom: "16px",
              }}
            >
              두 분의 애정도는...
            </div>
            <div style={{ position: "relative", display: "inline-block" }}>
              <Heart
                size={120}
                color="#FF6B6B"
                fill="#FF6B6B"
                style={{ opacity: 0.1 }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "#FF6B6B",
                }}
              >
                {score}%
              </div>
            </div>
            <p
              style={{ marginTop: "16px", fontSize: "1.1rem", fontWeight: 600 }}
            >
              {score >= 90
                ? "운명적인 사랑입니다! 💖"
                : score >= 70
                  ? "아주 좋은 인연이네요 😊"
                  : score >= 50
                    ? "노력하면 좋아질 거예요 💪"
                    : "친구로 지내는 게 어떨까요? 😂"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
