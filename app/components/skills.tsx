export default function Skills() {
  return (
    <div>
      <h1 className="section-title">Skills</h1>

      {/* --- Languages --- */}
      <h2 className="section-subtitle colored-text">Languages</h2>
      {/* 하나의 container에 모든 언어를 넣습니다 */}
      <div className="skills-container">
        <div className="skill-item">
          <h4 className="language-title">Java</h4>
        </div>
        <div className="skill-item">
          <h4 className="language-title">Kotlin</h4>
        </div>
        <div className="skill-item">
          <h4 className="language-title">Swift</h4>
        </div>
        <div className="skill-item">
          <h4 className="language-title">Dart</h4>
        </div>
        <div className="skill-item">
          <h4 className="language-title">JavaScript & TypeScript</h4>
        </div>
      </div>

      {/* --- Frameworks & Libraries --- */}
      <h2 className="section-subtitle colored-text">Frameworks & Libraries</h2>
      <div className="skills-container">
        <div className="skill-item">
          <h4 className="language-title">Flutter</h4>
        </div>
        <div className="skill-item">
          <h4 className="language-title">React Native</h4>
        </div>
        <div className="skill-item">
          <h4 className="language-title">Next.js</h4>
        </div>
        <div className="skill-item">
          <h4 className="language-title">Spring Boot</h4>
        </div>
        <div className="skill-item">
          <h4 className="language-title">Bootstrap</h4>
        </div>
      </div>

      {/* --- Databases --- */}
      <h2 className="section-subtitle colored-text">Databases</h2>
      <div className="skills-container">
        <div className="skill-item">
          <h4 className="language-title">MySQL</h4>
        </div>
        <div className="skill-item">
          <h4 className="language-title">SQLite</h4>
        </div>
      </div>

      {/* --- Tools & Platforms --- */}
      <h2 className="section-subtitle colored-text">Tools & Platforms</h2>
      <div className="skills-container">
        <div className="skill-item">
          <h4 className="language-title">Git & GitHub</h4>
        </div>
      </div>
    </div>
  );
}