"use client";

import { useState } from "react";

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState<{
    age: number;
    koreanAge: number;
    zodiac: string;
    constellation: string;
  } | null>(null);

  const getZodiac = (year: number) => {
    const animals = [
      "원숭이",
      "닭",
      "개",
      "돼지",
      "쥐",
      "소",
      "호랑이",
      "토끼",
      "용",
      "뱀",
      "말",
      "양",
    ];
    return animals[year % 12];
  };

  const getConstellation = (month: number, day: number) => {
    // Simplified logic
    const dates = [20, 19, 21, 20, 21, 22, 23, 23, 23, 23, 22, 22];
    const constellations = [
      "염소",
      "물병",
      "물고기",
      "양",
      "황소",
      "쌍둥이",
      "게",
      "사자",
      "처녀",
      "천칭",
      "전갈",
      "사수",
    ];
    let idx = month - 1;
    if (day < dates[idx]) {
      idx = idx - 1;
      if (idx < 0) idx = 11;
    }
    return constellations[idx];
  };

  const calculate = () => {
    if (!birthDate) return;
    const birth = new Date(birthDate);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    const koreanAge = today.getFullYear() - birth.getFullYear() + 1;

    setResult({
      age,
      koreanAge,
      zodiac: getZodiac(birth.getFullYear()),
      constellation:
        getConstellation(birth.getMonth() + 1, birth.getDate()) + "자리",
    });
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
        🎂 만 나이 계산기
      </h1>
      <div className="card" style={{ padding: "32px" }}>
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}
          >
            생년월일
          </label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
            }}
          />
        </div>
        <button onClick={calculate} className="btn btn-full btn-primary">
          계산하기
        </button>

        {result && (
          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <div
              style={{
                padding: "24px",
                background: "#f8f9fa",
                borderRadius: "12px",
                marginBottom: "16px",
              }}
            >
              <div style={{ color: "var(--text-sub)" }}>현재 만 나이</div>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "var(--primary)",
                }}
              >
                {result.age}세
              </div>
              <div style={{ color: "var(--text-sub)", marginTop: "8px" }}>
                (한국 나이: {result.koreanAge}세)
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              <div
                className="card"
                style={{
                  background: "#FFD93D",
                  color: "#371D1E",
                  padding: "16px",
                }}
              >
                <div style={{ fontSize: "0.8rem", fontWeight: 700 }}>띠</div>
                <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>
                  {result.zodiac}띠
                </div>
              </div>
              <div
                className="card"
                style={{
                  background: "#4D96FF",
                  color: "white",
                  padding: "16px",
                }}
              >
                <div style={{ fontSize: "0.8rem", fontWeight: 700 }}>
                  별자리
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: 800 }}>
                  {result.constellation}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
