// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    console.log("받은 데이터:", { name, email, message });
    
    console.log("Service ID:", process.env.EMAIL_SERVICE);
    console.log("Template ID:", process.env.EMAIL_TEMPLATE);
    console.log("Public Key:", process.env.EMAIL_PUBLIC_KEY);

    const data = {
        service_id: process.env.EMAIL_SERVICE,
        template_id: process.env.EMAIL_TEMPLATE,
        user_id: process.env.EMAIL_PUBLIC_KEY,
        accessToken: process.env.EMAIL_PRIVATE_KEY, // 보안을 위해 Private Key 사용 권장
        template_params: {
            name,
            email,
            message,
        },
    };

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            return NextResponse.json({ message: 'Success' }, { status: 200 });
        } else {
            const errorText = await response.text();
            return NextResponse.json({ error: errorText }, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}