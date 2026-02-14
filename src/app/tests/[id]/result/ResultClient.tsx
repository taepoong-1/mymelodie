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

  const test = getTestById(testId);
  const result = test?.results.find((r) => r.id === resultType);

  if (!test || !result) {
    return <div>결과를 찾을 수 없습니다.</div>;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: result.title,
        text: result.description,
        url: window.location.href,
      });
    } else {
      alert("공유하기 기능이 지원되지 않는 브라우저입니다.");
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("링크가 복사되었습니다!");
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
          {result.description}
        </p>
        <div
          style={{
            width: "100%",
            height: "200px",
            background: "#f1f3f5",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          이미지 영역 (추후 추가)
        </div>
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
          <Share2 size={20} style={{ marginRight: "8px" }} /> 카카오톡 공유
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
