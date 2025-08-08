import { NextRequest, NextResponse } from "next/server";

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

    // Here you would typically integrate with an email service
    // For now, we'll simulate a successful email send
    // You can integrate with services like:
    // - SendGrid
    // - Nodemailer with SMTP
    // - Resend
    // - EmailJS (client-side)

    // Example with a simple console log (replace with actual email service)
    console.log("Contact Form Submission:", {
      to: "kasparasbalys@gmail.com",
      from: name,
      subject: `Portfolio Contact: ${subject}`,
      message: `
Name: ${name}
Subject: ${subject}
Message: ${message}
      `,
    });

    // For production, you would use an email service like this:
    /*
    const emailData = {
      to: "kasparasbalys@gmail.com",
      from: "your-email-service@domain.com",
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Subject: ${subject}
Message: ${message}
      `,
    };

    // Send email using your preferred service
    await sendEmail(emailData);
    */

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
