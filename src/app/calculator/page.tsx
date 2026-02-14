import Link from "next/link";
import { Calendar, User, DollarSign, Activity, Heart } from "lucide-react";

export default function CalculatorPage() {
  const calculators = [
    {
      title: "D-day 계산기",
      href: "/calculator/d-day",
      icon: <Calendar size={32} />,
      color: "#FF6B6B",
      desc: "기념일, 시험, 디데이 카운트다운",
    },
    {
      title: "만 나이 계산기",
      href: "/calculator/age",
      icon: <User size={32} />,
      color: "#4D96FF",
      desc: "내 만 나이와 띠, 별자리까지 확인",
    },
    {
      title: "연봉 실수령액",
      href: "/calculator/salary",
      icon: <DollarSign size={32} />,
      color: "#2ecc71",
      desc: "2026년 기준 4대보험 포함 실수령액",
    },
    {
      title: "BMI 비만도",
      href: "/calculator/bmi",
      icon: <Activity size={32} />,
      color: "#9b59b6",
      desc: "건강한 다이어트를 위한 체질량 지수",
    },
    {
      title: "사랑의 확률",
      href: "/calculator/love",
      icon: <Heart size={32} />,
      color: "#e74c3c",
      desc: "이름으로 보는 우리의 사랑 확률은?",
    },
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: "40px 16px" }}>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          marginBottom: "24px",
          textAlign: "center",
        }}
      >
        생활 필수 계산기
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {calculators.map((calc) => (
          <Link
            key={calc.href}
            href={calc.href}
            className="card"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "12px",
                background: `${calc.color}20`,
                color: calc.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {calc.icon}
            </div>
            <div>
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                {calc.title}
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--text-sub)" }}>
                {calc.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
