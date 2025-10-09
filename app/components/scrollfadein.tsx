"use client";

import React, { useRef, useState, useEffect } from 'react';
import './styles/scrollfadein.css';

interface FadeInSectionProps {
  children: React.ReactNode;
  minHeight?: string; // 기본 높이를 설정할 수 있는 props
  delay?: number; // 각 섹션의 애니메이션 지연 시간 (ms)
  id?: string; // 각 섹션의 고유 ID
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, minHeight = '100vh', delay = 0, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay); // 지연 시간 적용
          } else {
            setIsVisible(false); // 뷰포트에서 벗어나면 다시 숨김
          }
        });
      },
      { threshold: 0.2 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      id={id} // id를 DOM 요소에 전달
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
      style={{
        minHeight, // props로 전달된 높이 사용
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transitionDelay: `${isVisible ? delay : 0}ms`, // 애니메이션 지연 시간
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;