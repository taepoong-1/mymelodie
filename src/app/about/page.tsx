import { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 소개 | 마이멜로디",
  description: "마이멜로디에 대해 알아보세요.",
};

export default function AboutPage() {
  return (
    <div
      className="container"
      style={{ padding: "60px 20px", maxWidth: "800px" }}
    >
      <h1 className="text-3xl font-bold mb-8">서비스 소개</h1>
      <div className="card" style={{ padding: "40px" }}>
        <p className="mb-6 indent-0 text-lg">
          <strong>마이멜로디</strong>는 여러분의 일상에 즐거움과 유익함을
          더해주는 다양한 테스트와 계산기 서비스를 제공합니다.
        </p>
        <p className="mb-4">
          MBTI 기반의 성격 유형 테스트, 연애 심리 테스트 등 재미있는 콘텐츠부터
          연봉 계산기, BMI 계산기 등 실생활에 필요한 도구까지 한곳에서
          만나보세요.
        </p>
        <p>
          사용자 여러분의 피드백을 통해 더 발전하는 서비스가 되겠습니다.
          감사합니다.
        </p>
      </div>
    </div>
  );
}
