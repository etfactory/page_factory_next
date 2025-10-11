import FadeInSection from "./scrollfadein";
import Skills from "./skills";
import LinkButton from "./linkbutton";
import "./styles/main_style.css";

export default function ProfileSection() {
  return (
    <FadeInSection id="profile_section" delay={200}>
      <div className="main-content width-setting">
        <h1 className="section-title">About Me</h1>
        <p className="section-text">
          안녕하세요! 모바일 어플리케이션 개발자 오은택입니다.</p>
        <br />
        <p className="section-text">
          Android와 iOS 네이티브 앱 개발 경험이 있으며,
        </p>
        <br />
        <p className="section-text">
          React Native와 Flutter를 활용한 크로스 플랫폼 앱 개발에도 능숙합니다.
        </p>
        <br />
        <h1 className="section-title">Education</h1>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "1.2rem", color: "var(--foreground)" }}>
          <li>
            Kongju National University
            <br />
            Division of Computer Engineering, Major in Software
          </li>
        </ul>
        <br />
        <h1 className="section-title">Links</h1>
        <LinkButton text="GitHub" href="https://github.com/etfactory" style={{ backgroundColor: "#000000" }} />
        <LinkButton text="Blog" href="https://blog.etfactory.dev" style={{ backgroundColor: "#000000" }} />
        <Skills />
      </div>
    </FadeInSection>
  );
}