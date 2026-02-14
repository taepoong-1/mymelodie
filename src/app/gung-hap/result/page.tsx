"use client";

import { useSearchParams } from "next/navigation";
import { getCompatibilityResult, MBTIType } from "@/lib/mbti";
import Link from "next/link";
import { Share2, RefreshCw } from "lucide-react";
import { Suspense } from "react";

function GungHapResultContent() {
  const searchParams = useSearchParams();
  const me = searchParams?.get("me") as MBTIType;
  const you = searchParams?.get("you") as MBTIType;

  if (!me || !you) return <div>잘못된 접근입니다.</div>;

  const result = getCompatibilityResult(me, you);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("링크가 복사되었습니다!");
    } catch (err) {
      console.error("Failed to copy: ", err);
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        alert("링크가 복사되었습니다!");
      } catch (err) {
        alert("링크 복사에 실패했습니다.");
      }
      document.body.removeChild(textArea);
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `우리의 궁합 점수는 ${result.score}점!`,
          text: result.desc,
          url: window.location.href,
        });
      } else {
        handleCopyLink();
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div
      className="container animate-fade-in"
      style={{ padding: "40px 16px", maxWidth: "600px", textAlign: "center" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginBottom: "32px",
        }}
      >
        <div
          className="mbti-badge"
          style={{
            background: "var(--primary)",
            color: "white",
            padding: "12px 24px",
            borderRadius: "24px",
            fontWeight: 800,
            fontSize: "1.2rem",
          }}
        >
          {me}
        </div>
        <div style={{ fontSize: "1.5rem", color: "var(--text-sub)" }}>♥</div>
        <div
          className="mbti-badge"
          style={{
            background: "var(--secondary)",
            color: "white",
            padding: "12px 24px",
            borderRadius: "24px",
            fontWeight: 800,
            fontSize: "1.2rem",
          }}
        >
          {you}
        </div>
      </div>

      <div
        className="card"
        style={{ padding: "40px 24px", marginBottom: "32px" }}
      >
        <div
          style={{
            fontSize: "1rem",
            color: "var(--text-sub)",
            marginBottom: "8px",
          }}
        >
          우리의 궁합 점수는?
        </div>
        <div
          style={{
            fontSize: "4rem",
            fontWeight: 900,
            color: "var(--primary)",
            lineHeight: 1,
            marginBottom: "24px",
          }}
        >
          {result.score}
          <span style={{ fontSize: "2rem" }}>점</span>
        </div>

        <h2
          style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "16px" }}
        >
          {result.title}
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--text-main)",
            lineHeight: 1.6,
          }}
        >
          {result.desc}
        </p>
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <button
          onClick={handleShare}
          className="btn btn-full"
          style={{ background: "#FAE100", color: "#371D1E", width: "100%" }}
        >
          <Share2 size={20} style={{ marginRight: "8px" }} /> 결과 공유하기
        </button>
      </div>

      <div style={{ marginTop: "16px" }}>
        <Link
          href="/gung-hap"
          className="btn"
          style={{ background: "transparent", color: "var(--text-sub)" }}
        >
          <RefreshCw size={16} style={{ marginRight: "8px" }} /> 다시 하기
        </Link>
      </div>
    </div>
  );
}

export default function GungHapResult() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GungHapResultContent />
    </Suspense>
  );
}
