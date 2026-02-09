import { NextResponse } from "next/server";
import { Recipient, EmailParams, Sender, MailerSend } from "mailersend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, businessName, websiteUrl } = body;

    if (!name || !email || !businessName || !websiteUrl) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 },
      );
    }

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY || "",
    });

    const recipients = [
      new Recipient(
        process.env.MAILERSEND_RAVENCI_EMAIL || "",
        process.env.MAILERSEND_RAVENCI_NAME || "",
      ),
    ];

    const sentFrom = new Sender(
      process.env.MAILERSEND_RAVENCI_EMAIL || "",
      process.env.MAILERSEND_RAVENCI_NAME || "",
    );

    const noReply = new Sender(
      `no-reply@ravenci.solutions`,
      `RAVENCI Solutions`,
    );

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(noReply)
      .setSubject(`Visibility Check Request: ${businessName}`)
      .setHtml(
        `<h2>New Visibility Check Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business:</strong> ${businessName}</p>
        <p><strong>Website:</strong> <a href="${websiteUrl}">${websiteUrl}</a></p>`,
      )
      .setText(
        `New Visibility Check Request\n\nName: ${name}\nEmail: ${email}\nBusiness: ${businessName}\nWebsite: ${websiteUrl}`,
      );

    await mailerSend.email.send(emailParams);

    return NextResponse.json({ message: "Request submitted successfully" });
  } catch (error) {
    console.error("Error sending visibility check email:", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "Error sending request",
      },
      { status: 500 },
    );
  }
}
