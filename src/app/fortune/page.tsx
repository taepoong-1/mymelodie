"use client";

import { useState } from "react";
import { ZODIACS, CONSTELLATIONS, getDailyFortune } from "@/lib/fortune";
import { RefreshCw } from "lucide-react";

export default function FortunePage() {
  const [activeTab, setActiveTab] = useState<"zodiac" | "star">("zodiac");
  const [selected, setSelected] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleSelect = (item: string) => {
    setSelected(item);
    setResult(getDailyFortune(activeTab, item));
  };

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
        🔮 오늘의 운세
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            background: "#eee",
            padding: "4px",
            borderRadius: "30px",
            display: "flex",
          }}
        >
          <button
            onClick={() => {
              setActiveTab("zodiac");
              setSelected("");
              setResult(null);
            }}
            style={{
              padding: "10px 24px",
              borderRadius: "24px",
              border: "none",
              background:
                activeTab === "zodiac" ? "var(--primary)" : "transparent",
              color: activeTab === "zodiac" ? "white" : "var(--text-sub)",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            띠별 운세
          </button>
          <button
            onClick={() => {
              setActiveTab("star");
              setSelected("");
              setResult(null);
            }}
            style={{
              padding: "10px 24px",
              borderRadius: "24px",
              border: "none",
              background:
                activeTab === "star" ? "var(--secondary)" : "transparent",
              color: activeTab === "star" ? "white" : "var(--text-sub)",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            별자리 운세
          </button>
        </div>
      </div>

      {!result ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
            gap: "16px",
          }}
        >
          {(activeTab === "zodiac" ? ZODIACS : CONSTELLATIONS).map((item) => (
            <button
              key={item}
              onClick={() => handleSelect(item)}
              className="card"
              style={{
                padding: "16px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div style={{ fontSize: "1.5rem" }}>✨</div>
              <div style={{ fontWeight: 600 }}>{item}</div>
            </button>
          ))}
        </div>
      ) : (
        <div className="animate-fade-in">
          <div
            className="card"
            style={{
              padding: "40px",
              maxWidth: "500px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "1.2rem",
                color: "var(--text-sub)",
                marginBottom: "16px",
              }}
            >
              오늘의{" "}
              <span style={{ fontWeight: 800, color: "var(--text-main)" }}>
                {selected}
              </span>{" "}
              운세
            </div>

            <div
              style={{
                fontSize: "4rem",
                fontWeight: 900,
                color:
                  result.score > 80 ? "var(--primary)" : "var(--secondary)",
                marginBottom: "24px",
              }}
            >
              {result.score}점
            </div>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.6,
                marginBottom: "32px",
              }}
            >
              {result.text}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                fontSize: "0.9rem",
              }}
            >
              <div
                style={{
                  background: "var(--background)",
                  padding: "16px",
                  borderRadius: "8px",
                }}
              >
                <div style={{ marginBottom: "4px", color: "var(--text-sub)" }}>
                  행운의 색
                </div>
                <div style={{ fontWeight: 700 }}>{result.luckyColor}</div>
              </div>
              <div
                style={{
                  background: "var(--background)",
                  padding: "16px",
                  borderRadius: "8px",
                }}
              >
                <div style={{ marginBottom: "4px", color: "var(--text-sub)" }}>
                  행운의 시간
                </div>
                <div style={{ fontWeight: 700 }}>{result.luckyTime}</div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <button
              onClick={() => setResult(null)}
              className="btn"
              style={{
                background: "transparent",
                border: "1px solid var(--border)",
              }}
            >
              <RefreshCw size={16} style={{ marginRight: "8px" }} /> 다른 운세
              보기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
