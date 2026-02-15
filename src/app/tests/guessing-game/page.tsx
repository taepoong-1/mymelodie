"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Brain, Star, ChevronRight, User, Coffee, Zap } from "lucide-react";

export default function GuessingGamePage() {
  const router = useRouter();
  const [category, setCategory] = useState("random");
  const [difficulty, setDifficulty] = useState("normal");

  const categories = [
    { id: "random", name: "랜덤", icon: <Star size={20} /> },
    { id: "people", name: "인물", icon: <User size={20} /> },
    {
      id: "animal",
      name: "동물",
      icon: (
        <img src="/images/brain_cat.svg" width={20} height={20} alt="animal" />
      ),
    },
    { id: "food", name: "음식", icon: <Coffee size={20} /> },
    {
      id: "object",
      name: "사물",
      icon: <div style={{ fontSize: "20px" }}>📱</div>,
    },
    { id: "character", name: "캐릭터", icon: <Zap size={20} /> },
  ];

  const difficulties = [
    { id: "easy", name: "쉬움", questions: 15, desc: "초보자용" },
    { id: "normal", name: "보통", questions: 10, desc: "일반" },
    { id: "hard", name: "어려움", questions: 7, desc: "고수용" },
  ];

  const handleStart = () => {
    router.push(
      `/tests/guessing-game/play?category=${category}&difficulty=${difficulty}`,
    );
  };

  return (
    <div
      className="container animate-fade-in"
      style={{ padding: "40px 16px", maxWidth: "600px", margin: "0 auto" }}
    >
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "12px" }}>
          🕵️ AI 정체 맞추기
        </h1>
        <p style={{ color: "var(--text-sub)", lineHeight: 1.6 }}>
          AI가 생각하고 있는 정체를 맞춰보세요!
          <br />
          질문을 던지면 AI가{" "}
          <span style={{ fontWeight: 700, color: "var(--primary)" }}>
            "응", "아니", "애매해"
          </span>
          로 대답합니다.
        </p>
      </header>

      <div className="card" style={{ padding: "32px", marginBottom: "24px" }}>
        {/* Category Selection */}
        <div style={{ marginBottom: "32px" }}>
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            주제 선택
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                style={{
                  padding: "16px 8px",
                  borderRadius: "12px",
                  border: `2px solid ${category === cat.id ? "var(--primary)" : "var(--border)"}`,
                  background:
                    category === cat.id
                      ? "rgba(var(--primary-rgb), 0.05)"
                      : "var(--surface)",
                  color:
                    category === cat.id ? "var(--primary)" : "var(--text-sub)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    color: category === cat.id ? "var(--primary)" : "#ddd",
                  }}
                >
                  {cat.icon}
                </div>
                <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Selection */}
        <div style={{ marginBottom: "32px" }}>
          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            난이도 선택
          </h3>
          <div style={{ display: "flex", gap: "10px" }}>
            {difficulties.map((diff) => (
              <button
                key={diff.id}
                onClick={() => setDifficulty(diff.id)}
                style={{
                  flex: 1,
                  padding: "16px",
                  borderRadius: "12px",
                  border: `2px solid ${difficulty === diff.id ? "var(--primary)" : "var(--border)"}`,
                  background:
                    difficulty === diff.id
                      ? "rgba(var(--primary-rgb), 0.05)"
                      : "var(--surface)",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    color:
                      difficulty === diff.id
                        ? "var(--primary)"
                        : "var(--text-main)",
                    marginBottom: "4px",
                  }}
                >
                  {diff.name}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-sub)" }}>
                  질문 {diff.questions}회
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          className="btn btn-full btn-primary"
          onClick={handleStart}
          style={{ fontSize: "1.1rem", padding: "16px" }}
        >
          테스트 시작 <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
