import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0b0b0b; color: #e5e7eb; border-radius: 12px;">
          <h2 style="color: #a855f7; margin-bottom: 20px; border-bottom: 2px solid #a855f7; padding-bottom: 10px;">
            New Contact Form Message
          </h2>
          <div style="margin-bottom: 16px;">
            <p style="color: #9ca3af; font-size: 12px; text-transform: uppercase; margin-bottom: 4px;">Name</p>
            <p style="color: #ffffff; font-size: 16px; margin: 0;">${name}</p>
          </div>
          <div style="margin-bottom: 16px;">
            <p style="color: #9ca3af; font-size: 12px; text-transform: uppercase; margin-bottom: 4px;">Email</p>
            <p style="color: #ffffff; font-size: 16px; margin: 0;">${email}</p>
          </div>
          <div style="margin-bottom: 16px;">
            <p style="color: #9ca3af; font-size: 12px; text-transform: uppercase; margin-bottom: 4px;">Subject</p>
            <p style="color: #ffffff; font-size: 16px; margin: 0;">${subject}</p>
          </div>
          <div style="margin-bottom: 16px;">
            <p style="color: #9ca3af; font-size: 12px; text-transform: uppercase; margin-bottom: 4px;">Message</p>
            <p style="color: #ffffff; font-size: 16px; margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1); color: #6b7280; font-size: 12px;">
            Sent from Sneha Koshta Portfolio Contact Form
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
