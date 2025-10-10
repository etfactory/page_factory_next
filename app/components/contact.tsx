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
            })
            .catch((error) => {
                console.log(error.text);
            });
        }
    };

    return (
        <FadeInSection id="contact_section" delay={200}>
            <div className="main-content" style={{ width: "90vw" }}>
                <h1 className="section-title">Contact Me</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" required />
                    <label>Email</label>
                    <input type="email" name="user_email" required />
                    <label>Message</label>
                    <textarea name="message" required />
                    <input type="submit" value="Send" />
                </form>
            </div>
        </FadeInSection>
    );
};

export default ContactSection;