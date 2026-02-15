"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { guessingGameData, GuessingGameItem } from "@/lib/guessing-game-data";
import {
  Send,
  Lightbulb,
  AlertCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";

import { Suspense } from "react";

function PlayContent() {
  const params = useSearchParams();
  const router = useRouter();
  const category = params?.get("category") || "random";
  const difficulty = params?.get("difficulty") || "normal";

  const [target, setTarget] = useState<GuessingGameItem | null>(null);
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [turnsLeft, setTurnsLeft] = useState(10);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showAnswerInput, setShowAnswerInput] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Initialize Game
  useEffect(() => {
    let filtered = guessingGameData;
    if (category !== "random") {
      filtered = guessingGameData.filter((item) => item.category === category);
    }

    if (filtered.length === 0) {
      alert("해당 카테고리에 데이터가 없습니다.");
      router.push("/tests/guessing-game");
      return;
    }

    const randomItem = filtered[Math.floor(Math.random() * filtered.length)];
    setTarget(randomItem);

    // Set turns based on difficulty
    const turns = difficulty === "easy" ? 15 : difficulty === "hard" ? 7 : 10;
    setTurnsLeft(turns);

    setMessages([
      {
        role: "ai",
        text: "정체를 숨기고 있는 무언가를 생각했어. 궁금한 걸 물어봐! (단서를 찾아봐)",
      },
    ]);
  }, [category, difficulty, router]);

  // Scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim() || gameOver || turnsLeft <= 0) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setInput("");
    setTurnsLeft((prev) => prev - 1);

    // AI Logic
    setTimeout(() => {
      let aiResponse = "그건 좀 애매한데? 🤔";
      if (target) {
        // Keyword matching
        const isYes = target.keywords.some((kw) => userText.includes(kw));
        const isNo = false; // Hard to determine "No" without explicit negative keywords, so we default to Ambiguous or limited logic

        // Simple heuristic: If it contains words in 'keywords', say Yes.
        // If query is very specific and not in keywords, maybe say No?
        // For MVP, if it matches keyword -> Yes. Else -> Ambiguous/No based on probability or phrase.

        if (isYes) {
          aiResponse = "응, 맞아! ⭕";
        } else {
          // Randomize "No" variants
          const noResponses = ["아니 ❌", "전혀 아니야", "그건 아니야"];
          aiResponse =
            noResponses[Math.floor(Math.random() * noResponses.length)];
        }
      }

      setMessages((prev) => [...prev, { role: "ai", text: aiResponse }]);

      if (turnsLeft - 1 === 0) {
        setGameOver(true);
        setMessages((prev) => [
          ...prev,
          { role: "ai", text: "질문 기회가 다 끝났어! 정답을 맞춰봐." },
        ]);
        setShowAnswerInput(true);
      }
    }, 600);
  };

  const handleHint = () => {
    if (!target || gameOver) return;
    setHintsUsed((prev) => prev + 1);
    const hint = target.initialHints[hintsUsed % target.initialHints.length];
    setMessages((prev) => [...prev, { role: "ai", text: `💡 힌트: ${hint}` }]);
  };

  const submitAnswer = () => {
    if (!target) return;

    if (
      userAnswer.trim().replace(/\s/g, "") === target.answer.replace(/\s/g, "")
    ) {
      // Correct
      const score = 100 - (10 - turnsLeft) * 4 - hintsUsed * 12; // Adjust scoring formula as needed
      const finalScore = Math.max(0, score);
      router.push(
        `/tests/guessing-game/result?success=true&score=${finalScore}&answer=${target.answer}&turns=${10 - turnsLeft}&hints=${hintsUsed}`,
      );
    } else {
      // Wrong
      alert("틀렸어! 다시 생각해봐.");
      // Optional: End game or Penalty? For MVP, let's allow retry or end.
      // Let's end game on wrong guess for "Hardcore" feel or just deduct score?
      // User requested "Restricted Question Count". Let's assume answer guess doesn't consume count but ends game if wrong?
      // The prompt says "Answer Input Submission".
      // Let's allow strictly checking.
      if (turnsLeft <= 0) {
        router.push(
          `/tests/guessing-game/result?success=false&answer=${target.answer}`,
        );
      }
    }
  };

  return (
    <div
      className="container animate-fade-in"
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <div style={{ fontWeight: 700 }}>
          남은 질문:{" "}
          <span style={{ color: "var(--primary)" }}>{turnsLeft}</span>
        </div>
        <button
          onClick={handleHint}
          className="btn"
          style={{
            padding: "8px 12px",
            background: "#f8f9fa",
            fontSize: "0.9rem",
          }}
        >
          <Lightbulb size={16} style={{ marginRight: "4px" }} /> 힌트 (-12점)
        </button>
      </div>

      {/* Chat Area */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          background: "#f8f9fa",
          borderRadius: "12px",
          padding: "16px",
          marginBottom: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              maxWidth: "80%",
              background: msg.role === "user" ? "var(--primary)" : "white",
              color: msg.role === "user" ? "white" : "black",
              padding: "12px",
              borderRadius: "12px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      {!gameOver && !showAnswerInput ? (
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="단서를 물어보세요 (예: 사람이야?)"
            style={{
              flex: 1,
              padding: "16px",
              borderRadius: "12px",
              border: "1px solid var(--border)",
              outline: "none",
            }}
          />
          <button
            onClick={handleSendMessage}
            className="btn btn-primary"
            style={{ borderRadius: "12px", padding: "0 20px" }}
          >
            <Send size={20} />
          </button>
        </div>
      ) : (
        <div style={{ animation: "fade-in 0.3s" }}>
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="정답을 입력하세요"
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "12px",
              border: "2px solid var(--primary)",
              marginBottom: "8px",
              outline: "none",
              fontSize: "1.1rem",
              textAlign: "center",
            }}
          />
          <button
            onClick={submitAnswer}
            className="btn btn-full btn-primary"
            style={{ padding: "16px" }}
          >
            정답 확신하기
          </button>
        </div>
      )}

      {!showAnswerInput && (
        <button
          onClick={() => setShowAnswerInput(true)}
          className="btn"
          style={{
            marginTop: "12px",
            width: "100%",
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          정답을 알겠어요! (입력하기)
        </button>
      )}
    </div>
  );
}

export default function GuessingGamePlay() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <PlayContent />
    </Suspense>
  );
}
