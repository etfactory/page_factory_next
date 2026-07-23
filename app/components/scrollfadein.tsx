"use client";

import React, { useRef, useState, useEffect } from 'react';

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
    const element = domRef.current;
    let visibilityTimer: ReturnType<typeof setTimeout> | undefined;

    if (!element || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        observer.disconnect();
        visibilityTimer = setTimeout(() => setIsVisible(true), delay);
      },
      // 긴 모바일 섹션도 일부가 화면에 들어오는 즉시 표시한다.
      { threshold: 0.01 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (visibilityTimer) {
        clearTimeout(visibilityTimer);
      }
    };
  }, [delay]);

  return (
    <div
      id={id} // id를 DOM 요소에 전달
      className={`w-full opacity-0 translate-y-4 transition-[opacity,transform] duration-[420ms] ease-out ${isVisible ? '!opacity-100 !translate-y-0' : ''}`}
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
