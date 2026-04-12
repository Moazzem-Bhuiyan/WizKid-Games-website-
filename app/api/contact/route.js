import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // your Gmail address (used to send)
        pass: process.env.GMAIL_APP_PASS, // Gmail App Password (not your normal password)
      },
    });

    // Email to YOU (notification)
    await transporter.sendMail({
      from: `"WizKid Games Contact" <${process.env.GMAIL_USER}>`,
      to: 'tiyonbhuiyan.201@gmail.com',
      replyTo: email,
      subject: `[WizKid Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d0d0d; color: #c9a84c; padding: 32px; border: 1px solid rgba(201,168,76,0.2);">
          <h2 style="color: #c9a84c; border-bottom: 1px solid rgba(201,168,76,0.2); padding-bottom: 16px; margin-top: 0;">
            New Contact Form Submission
          </h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: rgba(168,180,192,0.6); width: 90px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #a8b4c0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: rgba(168,180,192,0.6); vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #a8b4c0;">
                <a href="mailto:${email}" style="color: #c9a84c;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: rgba(168,180,192,0.6); vertical-align: top;">Subject</td>
              <td style="padding: 10px 0; color: #a8b4c0;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: rgba(168,180,192,0.6); vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #a8b4c0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>

          <p style="margin-top: 24px; font-size: 12px; color: rgba(168,180,192,0.4);">
            Sent via WizKid Games contact form. Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"WizKid Games" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `We received your message — WizKid Games`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d0d0d; color: #c9a84c; padding: 32px; border: 1px solid rgba(201,168,76,0.2);">
          <h2 style="color: #c9a84c; margin-top: 0;">Thanks for reaching out, ${name}!</h2>
          <p style="color: #a8b4c0; line-height: 1.6;">
            We've received your message and will get back to you within 2–3 business days.
          </p>
          <div style="border: 1px solid rgba(201,168,76,0.15); padding: 16px; margin: 24px 0; background: rgba(255,255,255,0.02);">
            <p style="margin: 0 0 8px; color: rgba(168,180,192,0.6); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Your message</p>
            <p style="margin: 0; color: #a8b4c0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: rgba(168,180,192,0.5); font-size: 13px;">
            — The WizKid Games Team
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
