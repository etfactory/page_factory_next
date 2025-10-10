import FadeInSection from "./components/scrollfadein";
import "./components/styles/main_style.css";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FadeInSection id="main_section" delay={200}>
        <div>
          <h1>안녕하세요!</h1>
          <h2>손가락으로 모두 해결할 수 있는 세상을 추구하는 모바일 어플리케이션 개발자 오은택입니다.</h2>
        </div>
      </FadeInSection>
      <FadeInSection id="profile_section" delay={200}>
        <h1>두 번째 섹션</h1>
      </FadeInSection>
      <FadeInSection id="portfolio_section" delay={200}>
        <h1>세 번째 섹션</h1>
      </FadeInSection>
    </main>
  );
}