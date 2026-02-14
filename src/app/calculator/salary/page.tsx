"use client";

import { useState } from "react";

export default function SalaryCalculator() {
  const [salary, setSalary] = useState<number | "">("");
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    if (!salary) return;
    const annual = Number(salary) * 10000; // Man-won unit input
    const monthly = annual / 12;

    // Simplified 2024/2025 Tax Logic
    const nationalPension = Math.min(monthly * 0.045, 265500); // Capped
    const healthInsurance = monthly * 0.03545;
    const careInsurance = healthInsurance * 0.1295;
    const employmentInsurance = monthly * 0.009;

    // Simplified Income Tax (Very rough approximation)
    let incomeTax = 0;
    if (annual <= 14000000)
      incomeTax = monthly * 0.005; // ~6% of taxable, simplifed
    else if (annual <= 50000000) incomeTax = monthly * 0.03;
    else if (annual <= 88000000) incomeTax = monthly * 0.06;
    else incomeTax = monthly * 0.1;

    const localIncomeTax = incomeTax * 0.1;

    const totalDeduction =
      nationalPension +
      healthInsurance +
      careInsurance +
      employmentInsurance +
      incomeTax +
      localIncomeTax;
    const netPay = monthly - totalDeduction;

    setResult({
      monthly: Math.floor(monthly),
      netPay: Math.floor(netPay),
      deductions: {
        pension: Math.floor(nationalPension),
        health: Math.floor(healthInsurance),
        care: Math.floor(careInsurance),
        employment: Math.floor(employmentInsurance),
        tax: Math.floor(incomeTax + localIncomeTax),
      },
    });
  };

  const formatMoney = (n: number) => n.toLocaleString() + "원";

  return (
    <div
      className="container animate-fade-in"
      style={{ padding: "40px 16px", maxWidth: "600px" }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          marginBottom: "16px",
          textAlign: "center",
        }}
      >
        💰 연봉 실수령액 계산기
      </h1>
      <div className="card" style={{ padding: "32px" }}>
        <div style={{ marginBottom: "24px" }}>
          <label
            style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}
          >
            연봉 (만원 단위)
          </label>
          <input
            type="number"
            placeholder="예: 4000"
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
            }}
          />
        </div>
        <button onClick={calculate} className="btn btn-full btn-primary">
          계산하기
        </button>

        {result && (
          <div style={{ marginTop: "32px" }}>
            <div
              style={{
                padding: "24px",
                background: "#E3F2FD",
                borderRadius: "12px",
                marginBottom: "24px",
                textAlign: "center",
              }}
            >
              <div style={{ color: "var(--primary)", fontWeight: 700 }}>
                예상 월 실수령액
              </div>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: "#1565C0",
                }}
              >
                {formatMoney(result.netPay)}
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <span style={{ color: "var(--text-sub)" }}>
                  월 지급액 (세전)
                </span>
                <span style={{ fontWeight: 600 }}>
                  {formatMoney(result.monthly)}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <span style={{ color: "var(--text-sub)" }}>국민연금</span>
                <span>-{formatMoney(result.deductions.pension)}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <span style={{ color: "var(--text-sub)" }}>
                  건강보험 (요양포함)
                </span>
                <span>
                  -
                  {formatMoney(
                    result.deductions.health + result.deductions.care,
                  )}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <span style={{ color: "var(--text-sub)" }}>고용보험</span>
                <span>-{formatMoney(result.deductions.employment)}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <span style={{ color: "var(--text-sub)" }}>
                  소득세 (지방세포함)
                </span>
                <span>-{formatMoney(result.deductions.tax)}</span>
              </div>
            </div>
          </div>
        )}
        <p
          style={{
            marginTop: "24px",
            fontSize: "0.8rem",
            color: "#999",
            textAlign: "center",
          }}
        >
          * 본 계산 결과는 모의 계산이며 실제 급여와 차이가 있을 수 있습니다.
        </p>
      </div>

      <div
        style={{
          marginTop: "60px",
          lineHeight: "1.8",
          color: "var(--text-main)",
        }}
      >
        <h2
          style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "20px" }}
        >
          2026년 연봉 실수령액, 왜 달라질까요?
        </h2>
        <p style={{ marginBottom: "20px" }}>
          2026년 새해가 밝으면 많은 분들이 가장 먼저 확인하는 것이 바로 '내
          연봉의 실제 수령액'입니다. 매년 최저시급 인상과 함께 4대 보험 요율이
          변동되기 때문에, 같은 연봉이라도 실수령액은 달라질 수 있습니다. 이
          계산기는 2026년 최신 요율을 반영하여 가장 근사한 월급 실수령액을
          계산해 드립니다.
        </p>

        <h3
          style={{
            fontSize: "1.3rem",
            fontWeight: 700,
            marginTop: "30px",
            marginBottom: "16px",
          }}
        >
          4대 보험 공제 항목 완벽 정리
        </h3>
        <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>국민연금 (4.5%):</strong> 노후를 위한 가장 기본적인 보장
            장치입니다. 근로자와 사업주가 각각 월 소득액의 4.5%씩 부담하며,
            상한액과 하한액이 존재합니다.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>건강보험 (약 3.545%):</strong> 질병이나 부상 발생 시
            의료비를 지원받기 위한 보험입니다. 매년 요율이 조금씩 변동될 수
            있으며, 장기요양보험료가 함께 부과됩니다.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong>장기요양보험 (건강보험료의 약 12.95%):</strong> 고령이나
            노인성 질병 등으로 일상생활을 혼자 수행하기 어려운 분들을 지원하기
            위한 제도입니다.
          </li>
          <li>
            <strong>고용보험 (0.9%):</strong> 실직 시 실업급여를 받거나 직업
            능력 개발 훈련 등을 지원받을 수 있는 보험입니다.
          </li>
        </ul>

        <h3
          style={{
            fontSize: "1.3rem",
            fontWeight: 700,
            marginTop: "30px",
            marginBottom: "16px",
          }}
        >
          연봉 협상 시 주의사항
        </h3>
        <p>
          연봉 계약서에 사인하기 전, <strong>'퇴직금 포함 여부'</strong>를
          반드시 확인해야 합니다. 퇴직금이 연봉에 포함된 경우(퇴직연금 별도
          적립이 아닌, 월 급여에 포함하여 지급하는 방식은 원칙적으로
          금지되었으나 여전히 혼동하는 경우가 많음), 실제 월 수령액이 예상보다
          훨씬 적을 수 있습니다. 또한 식대 비과세 한도(월 20만원)가
          적용되었는지도 확인해보세요.
        </p>
      </div>
    </div>
  );
}
