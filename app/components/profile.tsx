import FadeInSection from "./scrollfadein";
import Skills from "./skills";
import LinkButton from "./linkbutton";
import "./styles/main_style.css";

export default function ProfileSection() {
  return (
    <FadeInSection id="profile_section" delay={200}>
      <div className="main-content width-setting">
        {/* --- About Me --- */}
        <h1 className="section-title">About Me</h1>
        <div className="about-content">
          <p className="section-text">
            안녕하세요! 모바일 어플리케이션 개발자 오은택입니다.
          </p>
          <p className="section-text">
            Android와 iOS 네이티브 앱 개발 경험이 있으며,<br className="pc-only" /> 
            React Native와 Flutter를 활용한 크로스 플랫폼 앱 개발에도 능숙합니다.
          </p>
        </div>

        {/* --- Education --- */}
        <h1 className="section-title">Education</h1>
        <ul className="education-list">
          <li>
            <span className="school-name">Kongju National University</span>
            <span className="major-name">Division of Computer Engineering, Major in Software</span>
          </li>
        </ul>

        {/* --- Links --- */}
        <h1 className="section-title">Links</h1>
        <div className="links-container">
          <LinkButton 
            text="GitHub" 
            href="https://github.com/etfactory" 
            style={{ backgroundColor: "#000000" }} 
          />
          <LinkButton 
            text="Blog" 
            href="https://blog.etfactory.dev" 
            style={{ backgroundColor: "#000000" }} 
          />
        </div>

        {/* --- Skills --- */}
        <Skills />
      </div>
    </FadeInSection>
  );
}