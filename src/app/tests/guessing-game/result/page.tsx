"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Share2, RefreshCw, Home, Award } from "lucide-react";
import { Suspense } from "react";

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const success = searchParams?.get("success") === "true";
  const score = parseInt(searchParams?.get("score") || "0");
  const answer = searchParams?.get("answer") || "";
  const turnsUsed = parseInt(searchParams?.get("turns") || "0"); // Actually turns REMAINING was passed, let's fix in logic or interpret here
  // Wait, in play page I passed `turns=10-turnsLeft`. So this is turns USED. Correct.
  const hintsUsed = parseInt(searchParams?.get("hints") || "0");

  let resultType = "";
  let resultTitle = "";
  let resultDesc = "";

  if (!success) {
    resultTitle = "🔍 미제 사건으로 남음...";
    resultDesc = `정답은 "${answer}"였습니다! 아쉽게도 검거에 실패했네요.`;
  } else if (score >= 90) {
    resultTitle = "🕵️ 천재적인 명탐정";
    resultDesc =
      "단 몇 번의 질문만으로 정체를 꿰뚫어보셨군요! 소름 돋는 직감의 소유자입니다.";
  } else if (score >= 70) {
    resultTitle = "👮 베테랑 수사관";
    resultDesc =
      "날카로운 추리력으로 범인을 찾아냈습니다. 훌륭한 수사 능력입니다!";
  } else if (score >= 40) {
    resultTitle = "📝 꼼꼼한 기록관";
    resultDesc =
      "신중하게 단서를 모아 정답에 도달했네요. 끈기 있는 탐정입니다.";
  } else {
    resultTitle = "🐣 새내기 탐정";
    resultDesc =
      "우여곡절 끝에 정답을 맞췄습니다! 경험이 더 쌓이면 명탐정이 될 수 있어요.";
  }

  const handleShare = async () => {
    const text = success
      ? `[AI 정체 맞추기] 나는 ${score}점으로 "${answer}" 검거 완료! 당신의 추리력은?`
      : `[AI 정체 맞추기] "${answer}"... 이걸 못 맞췄네. 도전해볼래?`;

    if (navigator.share) {
      await navigator.share({
        title: "AI 정체 맞추기 테스트",
        text: text,
        url: window.location.href.split("?")[0].replace("/result", ""), // Share the intro page
      });
    } else {
      await navigator.clipboard.writeText(
        window.location.href.split("?")[0].replace("/result", ""),
      );
      alert("링크가 복사되었습니다!");
    }
  };

  return (
    <div
      className="container animate-fade-in"
      style={{
        padding: "40px 16px",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <div className="card" style={{ padding: "40px 20px" }}>
        <div style={{ fontSize: "4rem", marginBottom: "16px" }}>
          {success ? "🎉" : "😱"}
        </div>

        <h1
          style={{
            fontSize: "1.8rem",
            fontWeight: 800,
            marginBottom: "8px",
            color: success ? "var(--primary)" : "var(--text-sub)",
          }}
        >
          {resultTitle}
        </h1>

        <p
          style={{
            color: "var(--text-sub)",
            marginBottom: "32px",
            fontSize: "1.1rem",
          }}
        >
          {resultDesc}
        </p>

        {success && (
          <div
            style={{
              background: "#f8f9fa",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                fontSize: "0.9rem",
                color: "var(--text-sub)",
                marginBottom: "4px",
              }}
            >
              최종 점수
            </div>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: 900,
                color: "var(--primary)",
              }}
            >
              {score}점
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
                marginTop: "16px",
              }}
            >
              <div style={{ fontSize: "0.9rem" }}>질문 {turnsUsed}회</div>
              <div style={{ fontSize: "0.9rem" }}>힌트 {hintsUsed}개</div>
            </div>
          </div>
        )}

        {!success && (
          <div
            style={{
              background: "#fff0f0",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "32px",
              border: "1px solid #ffc9c9",
            }}
          >
            <div
              style={{
                fontSize: "0.9rem",
                color: "#e03131",
                marginBottom: "4px",
              }}
            >
              정답 공개
            </div>
            <div
              style={{ fontSize: "2rem", fontWeight: 800, color: "#e03131" }}
            >
              {answer}
            </div>
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button
            onClick={handleShare}
            className="btn btn-primary btn-full"
            style={{ background: "#FAE100", color: "#3B1E1E" }}
          >
            <Share2 size={20} style={{ marginRight: "8px" }} /> 결과 공유하기
          </button>

          <Link
            href="/tests/guessing-game"
            className="btn btn-full"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <RefreshCw size={20} style={{ marginRight: "8px" }} /> 다시 도전하기
          </Link>

          <Link
            href="/"
            className="btn btn-full"
            style={{
              marginTop: "12px",
              border: "none",
              color: "var(--text-sub)",
            }}
          >
            <Home size={18} style={{ marginRight: "8px" }} /> 홈으로 이동
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function GuessingGameResult() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <ResultContent />
    </Suspense>
  );
}
