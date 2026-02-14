import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Calculator,
  Sparkles,
  UserCheck,
} from "lucide-react";
import AdSense from "@/components/ads/AdSense";

export default function Home() {
  return (
    <div className="container animate-fade-in">
      <section style={{ padding: "40px 0", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            marginBottom: "16px",
            color: "var(--text-main)",
          }}
        >
          당신에 대해 더 알아보세요
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "var(--text-sub)",
            marginBottom: "32px",
          }}
        >
          매일 업데이트되는 심리테스트, 운세, 그리고 필수 유틸리티
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/tests" className="btn btn-primary">
            인기 테스트 하러가기{" "}
            <ArrowRight size={18} style={{ marginLeft: "8px" }} />
          </Link>
          <Link
            href="/today"
            className="btn"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            오늘의 운세 보기
          </Link>
        </div>
      </section>

      {/* Categories Grid */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "16px",
          marginBottom: "40px",
        }}
      >
        <CategoryCard
          href="/tests"
          icon={<UserCheck size={24} />}
          title="심리테스트"
          color="#FF6B6B"
        />
        <CategoryCard
          href="/gung-hap"
          icon={<Heart size={24} />}
          title="궁합"
          color="#FF8787"
        />
        <CategoryCard
          href="/fortune"
          icon={<Sparkles size={24} />}
          title="운세"
          color="#FAB005"
        />
        <CategoryCard
          href="/calculator"
          icon={<Calculator size={24} />}
          title="계산기"
          color="#4D96FF"
        />
      </section>

      {/* Featured/Popular Section */}
      <section style={{ marginBottom: "40px" }}>
        <h2
          style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "20px" }}
        >
          🔥 지금 인기있는 콘텐츠
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          <FeatureCard
            title="나의 숨겨진 성격 유형은?"
            desc="소름돋는 정확도! 3분만에 알아보는 성격 분석"
            tag="성격"
            bg="linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)"
          />
          <FeatureCard
            title="2026년 대박 운세 확인하기"
            desc="올해 나의 재물운, 연애운은 어떨까?"
            tag="운세"
            bg="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
          />
          <FeatureCard
            title="연봉 실수령액 계산기"
            desc="세금 떼고 실제로 받는 돈은 얼마일까?"
            tag="계산기"
            bg="linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)"
          />
        </div>
      </section>

      <AdSense slot="1234567890" style={{ marginBottom: "40px" }} />
    </div>
  );
}

function CategoryCard({
  href,
  icon,
  title,
  color,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  color: string;
}) {
  return (
    <Link
      href={href}
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: `${color}20`,
          color: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
      <span style={{ fontWeight: 600 }}>{title}</span>
    </Link>
  );
}

function FeatureCard({
  title,
  desc,
  tag,
  bg,
}: {
  title: string;
  desc: string;
  tag: string;
  bg: string;
}) {
  return (
    <div
      className="card"
      style={{
        padding: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "120px",
          background: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: 800,
          fontSize: "1.2rem",
          padding: "16px",
          textShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        {tag}
      </div>
      <div style={{ padding: "20px", flex: 1 }}>
        <div
          style={{
            fontSize: "0.8rem",
            color: "var(--primary)",
            fontWeight: 700,
            marginBottom: "4px",
          }}
        >
          POPULAR
        </div>
        <h3
          style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}
        >
          {title}
        </h3>
        <p style={{ fontSize: "0.9rem", color: "var(--text-sub)" }}>{desc}</p>
        <div
          style={{
            marginTop: "16px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            className="btn"
            style={{
              padding: "8px 16px",
              fontSize: "0.8rem",
              background: "var(--background)",
            }}
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
