import FadeInSection from "./components/scrollfadein";

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
        <h1>첫 번째 섹션</h1>
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