import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import type Mail from "nodemailer/lib/mailer";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const { name, subject, message } = await request.json();

    // Validate required fields
    if (!name || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST ?? "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT ?? 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM ?? smtpUser;

    if (!smtpUser || !smtpPass) {
      console.warn("SMTP credentials are not set.");
      return NextResponse.json(
        {
          error:
            "Email service is not configured (missing SMTP_USER/SMTP_PASS)",
        },
        { status: 500 }
      );
    }

    const transporter =
      nodemailer.createTransport<SMTPTransport.SentMessageInfo>({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      } as SMTPTransport.Options);

    const info = await transporter.sendMail({
      from: `Portfolio Contact <${smtpFrom}>`,
      to: "KasparasBalys@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong><br/>${message.replace(
        /\n/g,
        "<br/>"
      )}</p>`,
    });

    // Log SMTP response to help diagnose delivery issues
    console.log("SMTP sendMail result:", {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });

    const acceptedList: Array<string | Mail.Address> = Array.isArray(
      info.accepted
    )
      ? (info.accepted as Array<string | Mail.Address>)
      : [];
    const wasRecipientAccepted = acceptedList
      .map((recipient) =>
        typeof recipient === "string"
          ? recipient.toLowerCase()
          : (recipient.address ?? "").toLowerCase()
      )
      .includes("kasparasbalys@gmail.com");

    if (!info.messageId || !wasRecipientAccepted) {
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to send message",
      },
      { status: 500 }
    );
  }
}
