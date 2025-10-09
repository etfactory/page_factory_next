/* Header component is now integrated into layout.tsx as Navigator function */
"use client"; // 클라이언트 컴포넌트로 선언

import Link from "next/link";
import "./styles/header.css";

export default function Navigator() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault(); // 기본 동작 방지
        console.log(`Scrolling to: ${targetId}`); // 디버깅용 로그

        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" }); // 부드러운 스크롤
            } else {
            console.error(`Element with ID "${targetId}" not found.`);
            }
        }, 0); // DOM 렌더링 이후 실행
    };

  return (
    <nav className="nav">
      <Link href="/" className="nav-left">
        <img src="/logo/page factory black.svg" alt="pageFactory Logo" style={{ height: "20px" }} />
      </Link>
      <div className="nav-right">
        <a href="#main_section" className="nav-link" onClick={(e) => handleScroll(e, "main_section")}>Home</a>
        <a href="#profile_section" className="nav-link" onClick={(e) => handleScroll(e, "profile_section")}>Profile</a>
        <a href="#portfolio_section" className="nav-link" onClick={(e) => handleScroll(e, "portfolio_section")}>Portfolio</a>
      </div>
    </nav>
  );
}