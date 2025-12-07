import FadeInSection from "./scrollfadein";
import "./styles/main_style.css";

export default function StartSection() {
  return (
    <FadeInSection id="main_section" delay={200} minHeight="100vh">
      <div className="main-content width-setting">
        {/* 인라인 스타일 제거 -> class 추가 */}
        <img src="/logo/2FD.svg" alt="etfactory logo" className="main-logo h-64" />
        
        <h1 className="first-section-title">안녕하세요!</h1>
        <h1 className="first-section-title">
          손가락으로 모두 해결할 수 있는 세상을 추구하는
        </h1>
        <h1 className="first-section-title">
          모바일 어플리케이션 개발자 <br className="mobile-break" /> {/* 모바일에서만 줄바꿈 하고 싶을 때 유용 */}
          오은택입니다.
        </h1>
      </div>
    </FadeInSection>
  );
}