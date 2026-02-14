"use client";

import { useSearchParams, useParams } from "next/navigation";
import { getTestById } from "@/lib/tests";
import Link from "next/link";
import { Share2, Copy, RefreshCw, Home } from "lucide-react";
import AdSense from "@/components/ads/AdSense";
import { Suspense } from "react";

function ResultContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const testId = params?.id as string;
  const resultType = searchParams?.get("type");

  const humanScore = parseInt(searchParams?.get("human") || "0");
  const humanPercent = Math.round((humanScore / 30) * 100);

  const test = getTestById(testId);
  const result = test?.results.find((r) => r.id === resultType);

  if (!test || !result) {
    return <div>결과를 찾을 수 없습니다.</div>;
  }

  const handleShare = async () => {
    try {
      const shareTitle =
        testId === "human-brain"
          ? `나의 뇌는 인간 ${humanPercent}%! 나머지는 ${result.title.split(" ")[0]}?`
          : result.title;

      const shareText =
        testId === "human-brain"
          ? `당신은 ${humanPercent}% 인간입니다. ${result.description}`
          : result.description;

      if (navigator.share) {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: window.location.href,
        });
      } else {
        handleCopyLink();
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("링크가 복사되었습니다!");
    } catch (err) {
      console.error("Failed to copy: ", err);
      // Fallback for older browsers
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

  return (
    <div
      className="container animate-fade-in"
      style={{ padding: "40px 16px", maxWidth: "600px", textAlign: "center" }}
    >
      <div style={{ marginBottom: "16px", color: "var(--text-sub)" }}>
        {test.title} 결과
      </div>

      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          color: "var(--primary)",
          marginBottom: "16px",
        }}
      >
        {result.title}
      </h1>

      <div className="card" style={{ padding: "40px", marginBottom: "32px" }}>
        <p
          style={{ fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "24px" }}
        >
          {testId === "human-brain" && (
            <div
              className="animate-pulse"
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "var(--primary)",
                marginBottom: "16px",
              }}
            >
              당신의{" "}
              <span style={{ color: "var(--secondary)" }}>인간 지수</span>는{" "}
              {humanPercent}% 입니다!
            </div>
          )}
          {result.description}
        </p>
        {result.imageUrl ? (
          <div
            style={{
              width: "100%",
              marginBottom: "24px",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <img
              src={result.imageUrl}
              alt={result.title}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              height: "200px",
              background: "#f1f3f5",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "24px",
            }}
          >
            이미지 준비중
          </div>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginBottom: "16px",
        }}
      >
        <button
          onClick={handleShare}
          className="btn"
          style={{ background: "#FAE100", color: "#371D1E" }}
        >
          <Share2 size={20} style={{ marginRight: "8px" }} /> 결과 공유하기
        </button>
        <button
          onClick={handleCopyLink}
          className="btn"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--text-main)",
          }}
        >
          <Copy size={20} style={{ marginRight: "8px" }} /> 링크 복사
        </button>
      </div>

      <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
        <Link
          href={`/tests/${testId}`}
          className="btn btn-primary"
          style={{ flex: 1 }}
        >
          <RefreshCw size={20} style={{ marginRight: "8px" }} /> 다시하기
        </Link>
        <Link
          href="/"
          className="btn"
          style={{ background: "var(--secondary)", color: "white", flex: 1 }}
        >
          <Home size={20} style={{ marginRight: "8px" }} /> 메인으로
        </Link>
      </div>

      <AdSense slot="0987654321" style={{ marginTop: "40px" }} />
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
