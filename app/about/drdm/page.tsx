"use client";

import React from 'react';
import FadeInSection from '@/app/components/scrollfadein';
import Header from '@/app/components/header';

export default function DrDMAboutPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-[#0099cc] selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0a0a0a] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <FadeInSection minHeight="auto">
          <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#0099cc]/30 bg-[#0099cc]/10 text-[#0099cc] text-sm font-medium tracking-wide">
              2026-1 Capstone Design Project Report
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400" style={{ fontFamily: 'paperozi' }}>
              Dr.DM
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-6xl leading-relaxed">
              인공지능을 활용한 당뇨 환자 맞춤형 건강관리 애플리케이션 서비스 기획 및 설계
            </p>
            <div className="h-16 w-[1px] bg-gradient-to-b from-[#0099cc] to-transparent animate-pulse"></div>
          </div>
        </FadeInSection>
      </section>

      {/* Introduction & Background */}
      <section className="py-24 px-6 relative max-w-6xl mx-auto">
        <FadeInSection minHeight="auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0099cc]" style={{ fontFamily: 'paperozi' }}>Project Overview</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                본 프로젝트의 목적은 혈당, 식단, 복약 이력 등 다양한 건강 데이터를 분석하여 사용자별 맞춤형 피드백을 제공하는 인공지능 기반 당뇨 건강관리 애플리케이션을 기획 및 설계하는 데 있습니다.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                ADA(미국당뇨병협회)에서 강조하는 환자 중심 치료 제공에 맞춰, 스스로 관리할 수 있는 능력을 극대화할 수 있는 의료 시스템을 구축하고자 합니다.
              </p>
            </div>
            <div className="bg-[#111] p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-[#0099cc]/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0099cc]/10 rounded-bl-full -z-10 group-hover:bg-[#0099cc]/20 transition-colors duration-500"></div>
              <h3 className="text-2xl font-semibold mb-6 text-white" style={{ fontFamily: 'paperozi' }}>핵심 목표</h3>
              <ul className="space-y-4">
                {[
                  "혈당 기록 및 변화 추이 시각화",
                  "식사, 운동, 복약 정보 입력 및 관리",
                  "인공지능 기반 혈당 패턴 분석",
                  "맞춤형 식단 및 운동 추천",
                  "이상 수치 발생 시 알림 및 행동 가이드 제공",
                  "의료진 상담 연계를 고려한 데이터 리포트 기능"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <svg className="w-6 h-6 text-[#0099cc] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Key Features */}
      <section className="py-24 px-6 bg-[#0c0c0c] relative">
        <FadeInSection minHeight="auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'paperozi' }}>Key Features</h2>
              <p className="text-xl text-gray-400">당뇨 관리를 위한 올인원 솔루션</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "메인 대시보드", desc: "혈당 변화량 요약 및 당일 기록 요약 제공, 빠른 기록 단축키 지원", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
                { title: "혈당 기록 & AI 예측", desc: "Dexcom 및 i-SENS 연속혈당측정기(CGM) 연결 지원 및 과거 데이터를 활용한 AI 기반 혈당 변화 예측", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { title: "개인 활동 기록", desc: "사진 기반 AI 식단 영양소 분석 및 운동량/가이드라인 기반 열량 소모량 계산", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" },
                { title: "통계 및 보고서", desc: "기간별 혈당 변화량 표시, 혈당 분포 및 시간대별 평균 시각화 기능, 리포트 생성", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                { title: "AI 건강 지도", desc: "인공지능이 환자의 생활패턴을 종합적으로 분석하여 적절한 식단 및 운동 가이드라인 방안 제시", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
                { title: "개인화 설정", desc: "환자 개인별 혈당 목표치 설정, 알림 설정 및 개인정보 관리를 위한 마이 페이지", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
              ].map((feature, i) => (
                <div key={i} className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-12 h-12 bg-[#0099cc]/10 rounded-xl flex items-center justify-center mb-6 text-[#0099cc]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} /></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Technical Architecture */}
      <section className="py-24 px-6 relative max-w-6xl mx-auto">
        <FadeInSection minHeight="auto">
          <div className="w-full flex flex-col">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#0099cc]" style={{ fontFamily: 'paperozi' }}>Technical Architecture</h2>
              <p className="text-xl text-gray-400">고도화된 헬스케어 인공지능 시스템</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#111] p-8 rounded-2xl border border-[#0099cc]/20 relative overflow-hidden group">
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#0099cc]/10 rounded-full blur-3xl group-hover:bg-[#0099cc]/20 transition-all duration-700"></div>
                <h3 className="text-2xl font-bold mb-2 text-white border-b border-white/10 pb-4">Mobile Application <span className="text-[#0099cc] text-sm font-normal ml-2">(Frontend)</span></h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <span className="text-white font-semibold block mb-2">언어 및 라이브러리</span>
                    <div className="flex flex-wrap gap-2">
                      {['TypeScript', 'React Native'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-[#0099cc]/10 border border-[#0099cc]/20 rounded-full text-xs text-[#0099cc] font-medium tracking-wide">{tech}</span>
                      ))}
                    </div>
                  </li>
                  <li><span className="text-white font-semibold block mb-1">핵심 기능</span> <span className="text-gray-400">로컬 스토리지 (SQLite) 기반 데이터 접근, 사진 저장소 접근, 푸시 알림</span></li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#111] p-8 rounded-2xl border border-[#0099cc]/20 relative overflow-hidden group">
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700"></div>
                <h3 className="text-2xl font-bold mb-2 text-white border-b border-white/10 pb-4">AWS Cloud <span className="text-purple-400 text-sm font-normal ml-2">(Backend)</span></h3>
                <ul className="mt-6 space-y-4">
                  <li>
                    <span className="text-white font-semibold block mb-2">언어 및 프레임워크</span>
                    <div className="flex flex-wrap gap-2">
                      {['TypeScript', 'NestJS', 'Python', 'FastAPI', 'PostgreSQL'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-400 font-medium tracking-wide">{tech}</span>
                      ))}
                    </div>
                  </li>
                  <li><span className="text-white font-semibold block mb-1">핵심 기능</span> <span className="text-gray-400">API 구성, 안전한 DB 접근, AI 서버 라우팅 및 결과 스트리밍</span></li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#111] p-8 rounded-2xl border border-[#0099cc]/20 relative overflow-hidden group lg:col-span-2">
                <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-[#0099cc]/5 rounded-full blur-3xl group-hover:bg-[#0099cc]/10 transition-all duration-700"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white border-b border-white/10 pb-4">Artificial Intelligence <span className="text-blue-400 text-sm font-normal ml-2">(LLM)</span></h3>
                    <ul className="mt-6 space-y-4">
                      <li>
                        <span className="text-white font-semibold block mb-2">적용 모델</span>
                        <div className="flex flex-wrap gap-2">
                          {['Gemini 2.5 Flash', 'Gemini 2.5 Flash-Light'].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 font-medium tracking-wide">{tech}</span>
                          ))}
                        </div>
                      </li>
                      <li><span className="text-white font-semibold block mb-1">핵심 기능</span> <span className="text-gray-400">혈당 변화 원인 감지 및 스파이크 예측, 식단 사진 이미지 피드백, 생활 패턴 기반 행동 추천</span></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white border-b border-white/10 pb-4">Medical Verification <span className="text-green-400 text-sm font-normal ml-2">(Guideline)</span></h3>
                    <ul className="mt-6 space-y-4">
                      <li><span className="text-white font-semibold block mb-1">의료 시스템 설계</span> <span className="text-gray-400">당뇨 환자에 적합한 운동 종류 및 시간별 열량 소모량 매핑, 표준 식단 제시</span></li>
                      <li><span className="text-white font-semibold block mb-1">Server-sent Events 응답</span> <span className="text-gray-400">AI가 검증 결과를 생성할 때 대기 지연을 방지하기 위해 실시간 타이핑 형태로 스트리밍 전송</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabbed Details Section */}
            <div className="mt-16 w-full">
              <ArchitectureTabs />
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-[#0c0c0c] relative">
        <FadeInSection minHeight="auto">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white" style={{ fontFamily: 'paperozi' }}>Team MedicalScript</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
              {[
                {
                  name: "오은택", role: "Leader", sub: "Div. of Computer Engineering, Major in Software", tasks: "AI / Backend / Frontend", email: "factory@etfactory.dev",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z", // Lightning bolt for Leader/AI
                  github: "etfactory"
                },
                {
                  name: "김준서", role: "Member", sub: "Div. of Computer Engineering, Major in Software", tasks: "Backend Architecture", email: "wnstj3927@naver.com",
                  icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01", // Server stack for Backend
                  github: "Joonseo123"
                },
                {
                  name: "이유경", role: "Member", sub: "Dept. of Software", tasks: "Mobile Frontend", email: "kyeong3948@gmail.com",
                  icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", // Mobile phone for Frontend
                  github: "dldbrud"
                },
                {
                  name: "김희서", role: "Member", sub: "Dept. of Medical Informatics", tasks: "Medical Guideline & Data", email: "heeseo530@gmail.com",
                  icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", // Heart for Medical
                  github: ""
                }
              ].map((member, i) => (
                <div key={i} className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:bg-[#222] transition-colors duration-300 relative group">
                  <div className="w-20 h-20 shrink-0 rounded-full bg-gradient-to-tr from-[#0099cc] to-purple-500 flex items-center justify-center text-white shadow-lg shadow-[#0099cc]/20">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={member.icon} /></svg>
                  </div>
                  <div className="flex-1 min-w-0 pr-8">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <span className="text-[11px] text-[#0099cc] font-medium px-2 py-0.5 bg-[#0099cc]/10 rounded-full tracking-wider uppercase">{member.role}</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{member.sub}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-[11px] sm:text-xs">
                      <div className="flex items-center gap-1.5 text-gray-300">
                        <svg className="w-3.5 h-3.5 text-[#0099cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                        <span className="truncate">{member.tasks}</span>
                      </div>
                      <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600"></div>
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <span className="truncate">{member.email}</span>
                      </div>
                    </div>
                  </div>

                  {/* GitHub Button */}
                  {member.github && (
                    <a
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-[#0099cc]/20 transition-all duration-300 opacity-50 hover:opacity-100"
                      title={`${member.name} GitHub`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Presentation Viewer Section */}
            <div className="mt-32 mb-16 max-w-5xl mx-auto w-full text-left">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'paperozi' }}>Presentation Material</h3>
                <p className="text-gray-400">Dr.DM 프로젝트 기획 및 설계 발표 자료</p>
              </div>
              {/* 16:9 Aspect Ratio Container */}
              <div className="w-full bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src="/pdf/drdm/presentation.pdf#view=FitH"
                  className="absolute top-0 left-0 w-full h-full border-none"
                  title="Dr.DM Presentation"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                만약 뷰어가 정상적으로 로드되지 않는다면 <a href="/pdf/drdm/presentation.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0099cc] hover:underline">여기</a>를 눌러 직접 확인하실 수 있습니다.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>
    </main>
  );
}

function ArchitectureTabs() {
  const [activeTab, setActiveTab] = React.useState<'frontend' | 'backend' | 'ai'>('frontend');

  const tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai', label: 'AI' },
  ];

  const content = {
    frontend: (
      <div className="animate-in fade-in duration-500">
        <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-5">
          <div className="p-3 bg-[#0099cc]/10 rounded-xl">
            <svg className="w-6 h-6 text-[#0099cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h4 className="text-2xl font-bold font-[paperozi] text-white tracking-tight">Frontend Architecture</h4>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 text-[#0099cc] text-xs font-semibold tracking-wide">TypeScript</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 text-[#0099cc] text-xs font-semibold tracking-wide">React Native</span>
            </div>
          </div>
        </div>
        <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
          <p><strong className="text-[#0099cc] font-semibold">선택 이유:</strong></p>
          <ul className="list-none pl-5 space-y-2 border-l-2 border-[#0099cc]/30 ml-2">
            <li className="pl-4">크로스 플랫폼(iOS, Android) 모바일 애플리케이션을 하나의 코드베이스로 빠르게 개발하고 유지보수하기 위해 React Native를 채택했습니다. 또한 정적 타입 검사를 통해 런타임 에러를 줄이고 코드 안정성을 높이기 위해 TypeScript를 함께 사용했습니다.</li>
          </ul>
          <p className="pt-2"><strong className="text-[#0099cc] font-semibold">구성 방식:</strong></p>
          <ul className="list-none pl-5 space-y-3 border-l-2 border-[#0099cc]/30 ml-2">
            <li className="pl-4"><strong className="text-white block mb-1">네이티브 기능 접근</strong> 식단 기록을 위한 스마트폰 카메라 및 갤러리 저장소 접근 기능을 네이티브 모듈과 연동하여 구현했습니다.</li>
            <li className="pl-4"><strong className="text-white block mb-1">푸시 알림</strong> 사용자의 규칙적인 식사, 운동, 복약 타이밍과 AI의 혈당 스파이크 예측 경고 알림을 네이티브 푸시로 실시간 전송합니다.</li>
            <li className="pl-4"><strong className="text-white block mb-1">로컬 데이터베이스</strong> 오프라인 상태에서도 빠른 데이터 로드와 임시 저장을 지원하며, 네트워크 통신 비용을 최소화하기 위해 기기 내부의 SQLite를 활용해 백엔드 클라우드 DB와 효율적으로 동기화(Sync)합니다.</li>
          </ul>
        </div>
      </div>
    ),
    backend: (
      <div className="animate-in fade-in duration-500">
        <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-5">
          <div className="p-3 bg-purple-500/10 rounded-xl">
            <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          </div>
          <div>
            <h4 className="text-2xl font-bold font-[paperozi] text-white tracking-tight">Backend Architecture</h4>
            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 text-purple-400 text-xs font-semibold tracking-wide">NestJS</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 text-purple-400 text-xs font-semibold tracking-wide">FastAPI</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 text-purple-400 text-xs font-semibold tracking-wide">PostgreSQL</span>
            </div>
          </div>
        </div>
        <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
          <p><strong className="text-purple-400 font-semibold">선택 이유:</strong></p>
          <ul className="list-none pl-5 space-y-2 border-l-2 border-purple-400/30 ml-2">
            <li className="pl-4">Main Server는 견고한 아키텍처와 타입 안정성을 제공하는 NestJS를 사용하여 안정적인 API를 구성하였습니다. 반면 AI Server는 데이터 분석과 기계 학습 모델 연동에 압도적인 장점이 있는 Python 기반의 FastAPI를 선택하여, 두 서버를 목적에 맞게 마이크로서비스 형태로 분리 구성했습니다.</li>
          </ul>
          <p className="pt-2"><strong className="text-purple-400 font-semibold">구성 방식:</strong></p>
          <ul className="list-none pl-5 space-y-3 border-l-2 border-purple-400/30 ml-2">
            <li className="pl-4"><strong className="text-white block mb-1">Main Server (NestJS)</strong> 사용자 인증, 데이터베이스(PostgreSQL) 접근 및 CRUD 로직, 모바일 앱과의 메인 통신을 담당합니다. AWS Cloud 환경에 배포되어 높은 가용성을 보장합니다.</li>
            <li className="pl-4"><strong className="text-white block mb-1">AI Server (FastAPI)</strong> Main Server로부터 분석 요청을 받아, LLM(Gemini) 모델로 프롬프트를 전송하고 추론 결과값을 반환합니다. 파이썬의 풍부한 데이터 전처리 라이브러리를 적극 활용하여 입력 데이터를 정제합니다.</li>
            <li className="pl-4"><strong className="text-white block mb-1">응답 속도 최적화 (Server-sent Events)</strong> AI가 생성하는 의료 가이드라인의 긴 답변을 모바일 앱이 한 번에 기다리지 않도록, Server-sent Events(SSE) 방식을 채택했습니다. 텍스트가 실시간 타이핑 형태로 스트리밍 전송되어 사용자의 체감 응답 대기 시간을 최소화했습니다.</li>
          </ul>
        </div>
      </div>
    ),
    ai: (
      <div className="animate-in fade-in duration-500">
        <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-5">
          <div className="p-3 bg-blue-500/10 rounded-xl">
            <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <div>
            <h4 className="text-2xl font-bold font-[paperozi] text-white tracking-tight">Artificial Intelligence</h4>
            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 text-blue-400 text-xs font-semibold tracking-wide">Gemini 2.5 Flash</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/5 text-blue-400 text-xs font-semibold tracking-wide">Gemini 2.5 Flash-Light</span>
            </div>
          </div>
        </div>
        <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
          <p><strong className="text-blue-400 font-semibold">선택 이유:</strong></p>
          <ul className="list-none pl-5 space-y-2 border-l-2 border-blue-400/30 ml-2">
            <li className="pl-4">멀티모달(Multi-modal) 이미지 인식 성능이 뛰어나면서도 응답 속도가 매우 빠른 Gemini 2.5 Flash 모델 라인업을 채택했습니다. 의료 및 헬스케어 데이터를 다룸에 있어 즉각적인 피드백과 높은 추론 능력이 동시에 필요하기 때문입니다.</li>
          </ul>
          <p className="pt-2"><strong className="text-blue-400 font-semibold">구성 방식:</strong></p>
          <ul className="list-none pl-5 space-y-3 border-l-2 border-blue-400/30 ml-2">
            <li className="pl-4"><strong className="text-white block mb-1">혈당 변화 예측 및 원인 감지</strong> 사용자의 과거 1~2일 혈당 기록, 공복 상태, 이전 혈당 스파이크 내역 등을 종합적인 컨텍스트(Context) 데이터로 제공하여 향후 변화를 정밀하게 예측합니다.</li>
            <li className="pl-4"><strong className="text-white block mb-1">이미지 기반 식단 피드백</strong> 사용자가 업로드한 식단 사진을 멀티모달 비전(Vision) 기능으로 분석하여 영양소(열량, 탄수화물 등)를 추출하고, 당뇨 환자에게 적합한지 평가 의견을 생성합니다.</li>
            <li className="pl-4"><strong className="text-white block mb-1">의료 검증 및 맞춤형 가이드라인 매핑</strong> 단순한 범용 LLM의 생성 능력을 넘어, 사전에 정의된 '당뇨 환자 표준 운동/식단 가이드라인' 데이터베이스를 기반으로 환자의 생활 패턴에 맞는 가장 적절한 행동 지도를 안전하고 정확하게 출력하도록 프롬프트 파이프라인을 설계했습니다.</li>
          </ul>
        </div>
      </div>
    ),
  };

  return (
    <div className="bg-[#111]/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      <div className="flex border-b border-white/10 overflow-x-auto hide-scrollbar">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 py-4 px-6 text-sm md:text-base font-[paperozi] font-semibold whitespace-nowrap border-b-2 transition-all duration-300 ${activeTab === tab.id
              ? tab.id === 'frontend' ? 'text-[#0099cc] border-[#0099cc] bg-[#0099cc]/10'
                : tab.id === 'backend' ? 'text-purple-400 border-purple-400 bg-purple-500/10'
                  : 'text-blue-400 border-blue-400 bg-blue-500/10'
              : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-8 md:p-10 min-h-[300px]">
        {content[activeTab]}
      </div>
    </div>
  );
}
