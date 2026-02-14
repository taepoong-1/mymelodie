import { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 마이멜로디",
  description: "마이멜로디의 개인정보처리방침입니다.",
};

export default function PrivacyPage() {
  return (
    <div
      className="container"
      style={{ padding: "60px 20px", maxWidth: "800px" }}
    >
      <h1 className="text-3xl font-bold mb-8">개인정보처리방침</h1>
      <div className="card" style={{ padding: "40px", lineHeight: "1.8" }}>
        <p className="mb-4">
          마이멜로디(이하 "서비스")는 이용자의 개인정보를 소중히 다루며,
          "정보통신망 이용촉진 및 정보보호 등에 관한 법률"을 준수하고 있습니다.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">
          1. 수집하는 개인정보 항목
        </h3>
        <p className="mb-4">
          본 서비스는 별도의 회원가입 없이 이용 가능하며, 서비스 이용 과정에서
          IP 주소, 쿠키, 서비스 이용 기록 등이 자동으로 생성되어 수집될 수
          있습니다.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">
          2. 개인정보의 수집 및 이용 목적
        </h3>
        <p className="mb-4">
          수집된 정보는 서비스 제공, 접속 빈도 파악, 서비스 이용에 대한 통계 및
          광고 게재 목적으로만 사용됩니다.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">
          3. 개인정보의 보유 및 이용 기간
        </h3>
        <p className="mb-4">
          이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용 목적이 달성되면
          지체 없이 파기합니다.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">4. 쿠키의 운용 및 거부</h3>
        <p className="mb-4">
          이용자는 쿠키 설치에 대한 선택권을 가지고 있으며, 웹브라우저 옵션
          설정을 통해 이를 거부할 수 있습니다. 다만, 쿠키 설치를 거부할 경우
          일부 서비스 이용에 어려움이 있을 수 있습니다.
        </p>
      </div>
    </div>
  );
}
