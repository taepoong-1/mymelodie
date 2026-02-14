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

      <div
        style={{
          marginTop: "60px",
          lineHeight: "1.8",
          color: "var(--text-main)",
        }}
      >
        <h2
          style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "20px" }}
        >
          오늘의 운세를 확인해야 하는 이유
        </h2>
        <p style={{ marginBottom: "20px" }}>
          하루를 시작하기 전, 오늘의 운세를 확인하는 것은 단순한 호기심 그
          이상의 의미가 있습니다. 그날의 기운을 미리 파악하고, 조심해야 할 점과
          적극적으로 활용해야 할 행운의 요소를 아는 것만으로도 하루를 대하는
          태도가 달라질 수 있습니다. 심테랜드의 운세 서비스는 동양의 띠별 운세와
          서양의 별자리 운세를 모두 제공하여, 다각도로 당신의 하루를 조명합니다.
        </p>

        <h3
          style={{
            fontSize: "1.3rem",
            fontWeight: 700,
            marginTop: "30px",
            marginBottom: "16px",
          }}
        >
          띠별 운세와 별자리 운세의 차이점
        </h3>
        <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>띠별 운세:</strong> 태어난 해의 동물(12지신)을 기준으로
            하며, 그 해의 기운과 개인의 조화를 봅니다. 동양 철학에 근거하여
            전반적인 하루의 흐름과 대인 관계, 재물운 등을 포괄적으로 다룹니다.
          </li>
          <li>
            <strong>별자리 운세:</strong> 태어난 날짜에 해당하는 별자리의 위치
            이동을 바탕으로 점칩니다. 서양 점성술에 기반하며, 개인의 심리 상태나
            감정 변화, 애정운 등을 좀 더 디테일하게 파악하는 데 도움을 줍니다.
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.3rem",
            fontWeight: 700,
            marginTop: "30px",
            marginBottom: "16px",
          }}
        >
          행운의 색과 시간 활용법
        </h3>
        <p>
          운세 결과에 나오는 '행운의 색'을 코디나 소품에 활용해보세요. 심리적인
          안정감을 주고 자신감을 높여줄 수 있습니다. 또한 '행운의 시간'에는
          중요한 미팅을 잡거나 결정을 내리는 등, 그 시간대의 좋은 에너지를
          적극적으로 활용하는 것이 좋습니다.
        </p>
      </div>
    </div>
  );
}
