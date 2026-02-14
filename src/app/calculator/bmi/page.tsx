"use client";

import { useState } from "react";

export default function BMICalculator() {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [result, setResult] = useState<{
    bmi: string;
    status: string;
    color: string;
  } | null>(null);

  const calculate = () => {
    if (!height || !weight) return;
    const h = Number(height) / 100; // cm to m
    const w = Number(weight);
    const bmi = w / (h * h);
    const bmiFixed = bmi.toFixed(2);

    let status = "";
    let color = "";

    if (bmi < 18.5) {
      status = "저체중";
      color = "#3498db";
    } else if (bmi < 23) {
      status = "정상";
      color = "#2ecc71";
    } else if (bmi < 25) {
      status = "과체중";
      color = "#f1c40f";
    } else if (bmi < 30) {
      status = "비만";
      color = "#e67e22";
    } else {
      status = "고도비만";
      color = "#e74c3c";
    }

    setResult({ bmi: bmiFixed, status, color });
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
        💪 BMI 비만도 측정
      </h1>
      <div className="card" style={{ padding: "32px" }}>
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}
          >
            신장 (cm)
          </label>
          <input
            type="number"
            placeholder="예: 175"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
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
            체중 (kg)
          </label>
          <input
            type="number"
            placeholder="예: 70"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
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
                나의 체질량 지수
              </div>
              <div
                style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: result.color,
                }}
              >
                {result.bmi}
              </div>
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  marginTop: "8px",
                  color: result.color,
                }}
              >
                {result.status}
              </div>
            </div>
            <div
              style={{
                marginTop: "24px",
                height: "10px",
                background: "#eee",
                borderRadius: "5px",
                overflow: "hidden",
                display: "flex",
              }}
            >
              <div style={{ flex: 18.5, background: "#3498db" }}></div>
              <div style={{ flex: 4.5, background: "#2ecc71" }}></div>
              <div style={{ flex: 2, background: "#f1c40f" }}></div>
              <div style={{ flex: 5, background: "#e67e22" }}></div>
              <div style={{ flex: 5, background: "#e74c3c" }}></div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.7rem",
                color: "#999",
                marginTop: "4px",
              }}
            >
              <span>저체중</span>
              <span>정상</span>
              <span>과체중</span>
              <span>비만</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
