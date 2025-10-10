"use client";

import EmailJS from "@emailjs/browser";
import React, { useRef, useState } from "react";
// email.tsx 에서 설정한 값을 가져옵니다. Git에는 공유하지 않음.
import { GetServiceIdEmailJs, GetTemplateIdEmailJs, GetPublicKeyEmailJs } from "../api/email";

// FadeInSection 컴포넌트를 가져옵니다.
import FadeInSection from "./scrollfadein";
import "./styles/contact.css";

export const ContactSection = () => {
    const form = useRef<HTMLFormElement>(null);

    // 이메일 전송 함수
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            EmailJS.sendForm(
                GetServiceIdEmailJs(),
                GetTemplateIdEmailJs(),
                form.current,
                GetPublicKeyEmailJs()
            )
            .then((result) => {
                console.log(result.text);

                // 메일 전송 되었다는 확인 메시지 출력
                alert("메일이 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다!");
            })
            .catch((error) => {
                console.log(error.text);
            });

            form.current.reset(); // 폼 초기화
        }
    };

    return (
        <FadeInSection id="contact_section" delay={200}>
            <div className="main-content" style={{ width: "90vw" }}>
                <h1 className="section-title">Contact Me</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="name" required />
                    <label>Email</label>
                    <input type="email" name="email" required />
                    <label>Message</label>
                    <textarea name="message" required />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </FadeInSection>
    );
};

export default ContactSection;