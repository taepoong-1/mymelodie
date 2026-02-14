import { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | 마이멜로디",
  description: "마이멜로디 이용약관입니다.",
};

export default function TermsPage() {
  return (
    <div
      className="container"
      style={{ padding: "60px 20px", maxWidth: "800px" }}
    >
      <h1 className="text-3xl font-bold mb-8">이용약관</h1>
      <div className="card" style={{ padding: "40px", lineHeight: "1.8" }}>
        <h3 className="text-xl font-bold mb-4">제 1 조 (목적)</h3>
        <p className="mb-4">
          본 약관은 마이멜로디(이하 "회사")가 제공하는 인터넷 관련 서비스(이하
          "서비스")를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을
          규정함을 목적으로 합니다.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">제 2 조 (정의)</h3>
        <p className="mb-4">
          "이용자"란 "서비스"에 접속하여 본 약관에 따라 회사가 제공하는 서비스를
          받는 회원 및 비회원을 말합니다.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">
          제 3 조 (약관의 명시와 개정)
        </h3>
        <p className="mb-4">
          회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에
          게시합니다. 회사는 법률에 위배되지 않는 범위에서 본 약관을 개정할 수
          있으며, 약관이 개정된 경우 적용일자 및 개정사유를 명시하여 공지합니다.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4">제 4 조 (서비스의 제공)</h3>
        <p className="mb-4">
          회사는 이용자에게 다양한 심리 테스트 및 유틸리티 도구를 제공합니다.
          서비스 내용은 회사의 정책에 따라 변경되거나 종료될 수 있습니다.
        </p>
      </div>
    </div>
  );
}
