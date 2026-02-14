"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getTestById } from "@/lib/tests";
import { ChevronRight, RefreshCw } from "lucide-react";

export default function TestRunner() {
  const params = useParams();
  const router = useRouter();
  const testId = params?.id as string;
  const test = getTestById(testId);

  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isAnimating, setIsAnimating] = useState(false);

  if (!test) {
    return (
      <div
        className="container"
        style={{ textAlign: "center", padding: "100px 0" }}
      >
        테스트를 찾을 수 없습니다.
      </div>
    );
  }

  const handleAnswer = (scoreChange: Record<string, number>) => {
    setIsAnimating(true);

    // Accumulate scores
    const newScores = { ...scores };
    Object.entries(scoreChange).forEach(([key, value]) => {
      newScores[key] = (newScores[key] || 0) + value;
    });
    setScores(newScores);

    setTimeout(() => {
      if (currentStep < test.questions.length - 1) {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
      } else {
        // Test Finished - Calculate Result
        const resultType = calculateResult(newScores, test.results);
        router.push(`/tests/${testId}/result?type=${resultType}`);
      }
    }, 300);
  };

  const calculateResult = (
    finalScores: Record<string, number>,
    results: any[],
  ) => {
    // Simple logic: Find the key with the highest score
    // In a real app, this logic would be more complex for things like MBTI
    // For Fruit test: compare E vs I scores.

    // Demo Logic based on first key found
    let maxKey = "";
    let maxVal = -1;

    // Aggregation for MBTI types usually involves pairs (E vs I, S vs N...)
    // For simplicity of this demo, we assume the result 'type' matches one of the score keys
    // OR we just pick the result that matches the dominant score.

    // Let's assume results have a 'type' field that corresponds to keys in scores (e.g. 'E', 'I')
    // Find the score key with highest value
    for (const [key, val] of Object.entries(finalScores)) {
      if (val > maxVal) {
        maxVal = val;
        maxKey = key;
      }
    }

    // Find matching result
    const matchedResult = results.find((r) => r.type === maxKey);
    return matchedResult ? matchedResult.id : results[0].id;
  };

  const progress = ((currentStep + 1) / test.questions.length) * 100;

  return (
    <div
      className="container"
      style={{ maxWidth: "600px", padding: "40px 16px" }}
    >
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            fontSize: "0.9rem",
            color: "var(--primary)",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          Q{currentStep + 1}.
        </div>
        <div
          style={{
            height: "6px",
            background: "#eee",
            borderRadius: "3px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background: "var(--primary)",
              transition: "width 0.3s ease",
            }}
          />
        </div>
      </div>

      <div
        className={`card ${isAnimating ? "animate-fade-out" : "animate-fade-in"}`}
        style={{
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          padding: "32px",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            marginBottom: "32px",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          {test.questions[currentStep].text}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {test.questions[currentStep].answers.map((answer, idx) => (
            <button
              key={idx}
              className="btn"
              onClick={() => handleAnswer(answer.score)}
              style={{
                background: "var(--background)",
                border: "1px solid var(--border)",
                justifyContent: "space-between",
                padding: "20px",
                textAlign: "left",
              }}
            >
              {answer.text}
              <ChevronRight size={20} color="var(--text-sub)" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
