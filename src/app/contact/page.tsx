import { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "문의하기 | 마이멜로디",
  description: "마이멜로디에 문의사항을 남겨주세요.",
};

export default function ContactPage() {
  return (
    <div
      className="container"
      style={{ padding: "60px 20px", maxWidth: "600px" }}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">문의하기</h1>
      <div className="card" style={{ padding: "40px", textAlign: "center" }}>
        <p className="mb-8 text-lg">
          서비스 이용 중 불편한 점이나 제안하고 싶은 내용이 있으신가요?
          <br />
          아래 이메일로 편하게 연락주세요.
        </p>

        <div
          style={{
            background: "#f8f9fa",
            padding: "20px",
            borderRadius: "12px",
            display: "inline-block",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              fontWeight: "bold",
              fontSize: "1.2rem",
              color: "var(--primary)",
            }}
          >
            <Mail size={24} />
            <span>bugs99000@gmail.com</span>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          평일 기준 24시간 이내에 답변 드리도록 노력하겠습니다.
        </p>
      </div>
    </div>
  );
}
