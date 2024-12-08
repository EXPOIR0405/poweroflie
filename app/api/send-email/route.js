import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { department, name, email, phone, message } = body;

    // OAuth2 없이 직접 SMTP 사용
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587, // 587 포트 사용
      secure: false, // TLS 사용
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
      }
    });

    console.log('Attempting to send with credentials:', {
      user: process.env.EMAIL_USER,
      passwordExists: !!process.env.EMAIL_PASSWORD
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `[국민의짐 문의] ${department} - ${name}`,
      html: `
        <h2>국민의짐 웹사이트 문의가 접수되었습니다</h2>
        <p><strong>소속:</strong> ${department}</p>
        <p><strong>성함:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>연락처:</strong> ${phone || '미입력'}</p>
        <p><strong>문의내용:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info);

    return NextResponse.json(
      { success: true, message: '이메일이 성공적으로 전송되었습니다.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email error:', {
      message: error.message,
      stack: error.stack,
    });
    
    return NextResponse.json(
      { 
        success: false, 
        error: '이메일 전송에 실패했습니다.',
        details: error.message,
        errorCode: error.code
      },
      { status: 500 }
    );
  }
}