import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.links}>
          <Link href="/about">소개</Link>
          <Link href="/privacy">개인정보처리방침</Link>
          <Link href="/terms">이용약관</Link>
          <Link href="/contact">문의하기</Link>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} 심테랜드. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
