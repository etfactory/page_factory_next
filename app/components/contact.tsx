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
            <div className="w-[92vw] md:w-[80vw] max-w-[1200px] mx-auto px-[10px] md:px-[20px] mt-[80px]">
                <h1 className="font-[paperozi] text-[2rem] md:text-[2.5rem] font-[800] mb-[20px] break-keep">Contact Me</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label className="font-[paperozi] block ml-[8px] mb-[8px] font-bold text-[var(--accent)]">Name</label>
                    <input type="text" placeholder="Robert Oh" name="name" required className="w-full p-[8px] pl-[16px] mb-[16px] border border-[var(--border)] bg-[var(--input)] rounded-[50px] text-[1rem] outline-none focus:border-[var(--accent)]" />
                    <label className="font-[paperozi] block ml-[8px] mb-[8px] font-bold text-[var(--accent)]">Email</label>
                    <input type="email" placeholder="factory@etfactory.dev" name="email" required className="w-full p-[8px] pl-[16px] mb-[16px] border border-[var(--border)] bg-[var(--input)] rounded-[50px] text-[1rem] outline-none focus:border-[var(--accent)]" />
                    <label className="font-[paperozi] block ml-[8px] mb-[8px] font-bold text-[var(--accent)]">Message</label>
                    <textarea name="message" required className="w-full p-[8px] pl-[16px] mb-[16px] border border-[var(--border)] bg-[var(--input)] rounded-[20px] text-[1rem] min-h-[100px] outline-none focus:border-[var(--accent)]" />
                    <input type="submit" value="Send" className="bg-[var(--accent)] text-white py-[10px] px-[20px] border-none rounded-[50px] cursor-pointer text-[1rem]" />
                </form>
            </div>
        </FadeInSection>
    );
};

export default ContactSection;
