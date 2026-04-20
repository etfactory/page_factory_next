"use client";

import React, { useRef, useState } from "react";
// email.tsx 에서 설정한 값을 가져옵니다. Git에는 공유하지 않음.

// FadeInSection 컴포넌트를 가져옵니다.
import FadeInSection from "./scrollfadein";

export const ContactSection = () => {
    const form = useRef<HTMLFormElement>(null);

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
            <div className="main-content width-setting">
                <h1 className="section-title">Contact Me</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label className="colored-text" >Name</label>
                    <input type="text" placeholder="Robert Oh" name="name" required />
                    <label className="colored-text" >Email</label>
                    <input type="email" placeholder="factory@etfactory.dev" name="email" required />
                    <label className="colored-text" >Message</label>
                    <textarea name="message" required />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </FadeInSection>
    );
};

export default ContactSection;