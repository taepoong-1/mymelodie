"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MBTI_TYPES, MBTI_DESCRIPTIONS, MBTIType } from "@/lib/mbti";
import { Heart } from "lucide-react";

export default function GungHapPage() {
  const router = useRouter();
  const [myType, setMyType] = useState<MBTIType | "">("");
  const [partnerType, setPartnerType] = useState<MBTIType | "">("");

  const handleAnalyze = () => {
    if (!myType || !partnerType) {
      alert("두 MBTI를 모두 선택해주세요!");
      return;
    }
    router.push(`/gung-hap/result?me=${myType}&you=${partnerType}`);
  };

  return (
    <div
      className="container animate-fade-in"
      style={{ padding: "40px 16px", maxWidth: "600px" }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "12px" }}>
          <span style={{ color: "var(--primary)" }}>MBTI</span> 궁합 계산기
        </h1>
        <p style={{ color: "var(--text-sub)" }}>
          우리는 천생연분일까? 재미로 보는 MBTI 궁합
        </p>
      </div>

      <div className="card" style={{ padding: "32px" }}>
        <div style={{ marginBottom: "32px" }}>
          <label
            style={{ display: "block", fontWeight: 700, marginBottom: "12px" }}
          >
            나의 MBTI
          </label>
          <select
            className="select-input"
            value={myType}
            onChange={(e) => setMyType(e.target.value as MBTIType)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              fontSize: "1rem",
            }}
          >
            <option value="">선택하세요</option>
            {MBTI_TYPES.map((t) => (
              <option key={t} value={t}>
                {t} ({MBTI_DESCRIPTIONS[t]})
              </option>
            ))}
          </select>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "2px",
              height: "40px",
              background: "var(--border)",
            }}
          ></div>
        </div>

        <div style={{ marginBottom: "40px" }}>
          <label
            style={{ display: "block", fontWeight: 700, marginBottom: "12px" }}
          >
            상대방의 MBTI
          </label>
          <select
            className="select-input"
            value={partnerType}
            onChange={(e) => setPartnerType(e.target.value as MBTIType)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
              fontSize: "1rem",
            }}
          >
            <option value="">선택하세요</option>
            {MBTI_TYPES.map((t) => (
              <option key={t} value={t}>
                {t} ({MBTI_DESCRIPTIONS[t]})
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleAnalyze}
          className="btn btn-full btn-primary"
          style={{ height: "56px", fontSize: "1.1rem" }}
        >
          <Heart size={20} style={{ marginRight: "8px" }} fill="white" /> 궁합
          확인하기
        </button>
      </div>
    </div>
  );
}
