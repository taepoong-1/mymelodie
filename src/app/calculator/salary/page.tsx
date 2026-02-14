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
    </div>
  );
}
