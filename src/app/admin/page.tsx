"use client";

import { useState } from "react";
import { BarChart, Users, FileText, Settings } from "lucide-react";
import { getAllTests } from "@/lib/tests";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const tests = getAllTests();

  return (
    <div
      className="container"
      style={{ padding: "40px 16px", display: "flex", gap: "24px" }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "200px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <button
          onClick={() => setActiveTab("dashboard")}
          className="btn"
          style={{
            justifyContent: "flex-start",
            background:
              activeTab === "dashboard" ? "var(--primary)" : "transparent",
            color: activeTab === "dashboard" ? "white" : "var(--text-main)",
          }}
        >
          <BarChart size={18} style={{ marginRight: "8px" }} /> 대시보드
        </button>
        <button
          onClick={() => setActiveTab("tests")}
          className="btn"
          style={{
            justifyContent: "flex-start",
            background:
              activeTab === "tests" ? "var(--primary)" : "transparent",
            color: activeTab === "tests" ? "white" : "var(--text-main)",
          }}
        >
          <FileText size={18} style={{ marginRight: "8px" }} /> 콘텐츠 관리
        </button>
        <button
          onClick={() => setActiveTab("users")}
          className="btn"
          style={{
            justifyContent: "flex-start",
            background:
              activeTab === "users" ? "var(--primary)" : "transparent",
            color: activeTab === "users" ? "white" : "var(--text-main)",
          }}
        >
          <Users size={18} style={{ marginRight: "8px" }} /> 방문자 통계
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className="btn"
          style={{
            justifyContent: "flex-start",
            background:
              activeTab === "settings" ? "var(--primary)" : "transparent",
            color: activeTab === "settings" ? "white" : "var(--text-main)",
          }}
        >
          <Settings size={18} style={{ marginRight: "8px" }} /> 설정
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {activeTab === "dashboard" && (
          <div className="animate-fade-in">
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                marginBottom: "24px",
              }}
            >
              어드민 대시보드
            </h1>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
                marginBottom: "32px",
              }}
            >
              <div className="card">
                <div style={{ fontSize: "0.9rem", color: "var(--text-sub)" }}>
                  총 방문자 수
                </div>
                <div style={{ fontSize: "2rem", fontWeight: 700 }}>12,543</div>
              </div>
              <div className="card">
                <div style={{ fontSize: "0.9rem", color: "var(--text-sub)" }}>
                  총 테스트 플레이
                </div>
                <div style={{ fontSize: "2rem", fontWeight: 700 }}>45,200</div>
              </div>
              <div className="card">
                <div style={{ fontSize: "0.9rem", color: "var(--text-sub)" }}>
                  전월 대비 성장률
                </div>
                <div
                  style={{ fontSize: "2rem", fontWeight: 700, color: "red" }}
                >
                  +24%
                </div>
              </div>
            </div>

            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              최근 인기 콘텐츠
            </h2>
            <div className="card">
              <table
                style={{
                  width: "100%",
                  textAlign: "left",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "1px solid #eee" }}>
                    <th style={{ padding: "12px" }}>콘텐츠명</th>
                    <th style={{ padding: "12px" }}>조회수</th>
                    <th style={{ padding: "12px" }}>카테고리</th>
                  </tr>
                </thead>
                <tbody>
                  {tests.map((test) => (
                    <tr
                      key={test.id}
                      style={{ borderBottom: "1px solid #eee" }}
                    >
                      <td style={{ padding: "12px" }}>{test.title}</td>
                      <td style={{ padding: "12px" }}>
                        {test.viewCount.toLocaleString()}
                      </td>
                      <td style={{ padding: "12px" }}>{test.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "tests" && (
          <div className="animate-fade-in">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                콘텐츠 관리
              </h1>
              <button className="btn btn-primary">+ 새 테스트 만들기</button>
            </div>
            <div
              className="card"
              style={{
                padding: "32px",
                textAlign: "center",
                color: "var(--text-sub)",
              }}
            >
              새로운 심리테스트를 추가하는 기능이 개발 중입니다. <br />
              (DB 연동 필요)
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
