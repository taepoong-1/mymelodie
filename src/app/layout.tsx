import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "심테랜드 - 심리테스트, MBTI, 필수 유틸리티 모음",
  description:
    "한국인을 위한 필수 유틸리티, 심리테스트, 궁합, 운세 서비스를 한곳에서 즐기세요. 매일 새로운 콘텐츠가 업데이트됩니다.",
  keywords:
    "심리테스트, MBTI, 궁합, 사주, 운세, 계산기, 한국 유틸리티, 월급 계산기, 기념일 계산기",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "심테랜드",
  },
  verification: {
    google: "DrTEIR3rVs8RSh6TaEjYoKlhHKjqS4uEZiEeM5yDWXg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1300449958251149"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main style={{ minHeight: "calc(100vh - 300px)" }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
