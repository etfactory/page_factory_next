"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./contact.module.css";
// email.tsx 에서 설정한 값을 가져옵니다. Git에는 공유하지 않음.

// FadeInSection 컴포넌트를 가져옵니다.
import FadeInSection from "./scrollfadein";
import SectionAssembly from "./section-assembly";

export const ContactSection = () => {
    const form = useRef<HTMLFormElement>(null);
    const [formEntered, setFormEntered] = useState(false);

    useEffect(() => {
        const element = form.current;
        if (!element || typeof IntersectionObserver === "undefined") return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setFormEntered(true);
                observer.disconnect();
            }
        }, { threshold: 0.15 });
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    // 이메일 전송 함수
    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        // FormData를 객체로 변환
        const formData = new FormData(form.current);
        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert("메일이 성공적으로 전송되었습니다!");
                form.current.reset();
            } else {
                alert("전송에 실패했습니다.");
            }
        } catch (error) {
            console.error(error);
            alert("오류가 발생했습니다.");
        }
    };

    return (
        <FadeInSection id="contact_section" delay={200}>
            <div className="pf-contact-copy pf-container pf-content-container pf-section">
                <p className="pf-eyebrow">03 · Contact</p>
                <SectionAssembly label="connect" accent="coral">
                <form ref={form} onSubmit={sendEmail} data-build={formEntered || undefined} className={`w-full border-t border-[var(--pf-border-subtle)] pt-8 ${styles.form}`}>
                    <div className="grid gap-x-6 md:grid-cols-2">
                        <div className={styles.field}>
                            <FieldMark label="name" />
                            <label className="mb-2 block text-sm font-bold" htmlFor="contact-name">Name</label>
                            <input id="contact-name" type="text" placeholder="Robert Oh" name="name" required className="mb-6 h-12 w-full rounded-lg border border-[var(--pf-border-subtle)] bg-[var(--pf-bg-surface)] px-4 font-sans text-base outline-none transition-colors focus:border-[var(--pf-border-strong)]" />
                        </div>
                        <div className={`${styles.field} ${styles.emailField}`}>
                            <FieldMark label="email" />
                            <label className="mb-2 block text-sm font-bold" htmlFor="contact-email">Email</label>
                            <input id="contact-email" type="email" placeholder="factory@etfactory.dev" name="email" required className="mb-6 h-12 w-full rounded-lg border border-[var(--pf-border-subtle)] bg-[var(--pf-bg-surface)] px-4 font-sans text-base outline-none transition-colors focus:border-[var(--pf-border-strong)]" />
                        </div>
                    </div>
                    <div className={`${styles.field} ${styles.messageField}`}>
                        <FieldMark label="message" />
                        <label className="mb-2 block text-sm font-bold" htmlFor="contact-message">Message</label>
                        <textarea id="contact-message" name="message" required className="mb-6 min-h-36 w-full resize-y rounded-lg border border-[var(--pf-border-subtle)] bg-[var(--pf-bg-surface)] px-4 py-3 font-sans text-base outline-none transition-colors focus:border-[var(--pf-border-strong)]" />
                    </div>
                    <span className={styles.buttonWrap}>
                        <FieldMark label="send" />
                        <input type="submit" value="Send" className="action-button" />
                    </span>
                </form>
                </SectionAssembly>
            </div>
        </FadeInSection>
    );
};

function FieldMark({ label }: { label: string }) {
    return (
        <span className={styles.mark} aria-hidden="true">
            <span className={styles.frame} />
            <span className={styles.cursor}>
                <svg viewBox="0 0 20 24" width="16" height="19" fill="none">
                    <path d="M2 2v16.5l4.6-4.3 3.4 7.4 3-1.4-3.4-7.3 6.2-.7L2 2Z" fill="currentColor" stroke="var(--pf-bg-canvas)" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                <span>{label}</span>
            </span>
        </span>
    );
}

export default ContactSection;
