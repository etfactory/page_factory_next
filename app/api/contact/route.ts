// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const serviceId = process.env.EMAIL_SERVICE;
    const templateId = process.env.EMAIL_TEMPLATE;
    const publicKey = process.env.EMAIL_PUBLIC_KEY;
    const privateKey = process.env.EMAIL_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey || !privateKey) {
        return NextResponse.json({ error: 'Email configuration is incomplete' }, { status: 500 });
    }

    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
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