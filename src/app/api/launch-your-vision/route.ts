import { NextResponse } from "next/server";
import { Recipient, EmailParams, Sender, MailerSend } from "mailersend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, budget } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
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

    const personalization = [
      {
        email: recipients[0].email,
        data: {
          elements: [
            {
              name,
              email,
              budget: budget || "Not specified",
              message,
            },
          ],
        },
      },
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(noReply)
      .setSubject(`New Lead: ${name} — ${budget || "Budget not specified"}`)
      .setTemplateId("zr6ke4nrkn3lon12")
      .setPersonalization(personalization);

    await mailerSend.email.send(emailParams);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "Error sending email",
      },
      { status: 500 },
    );
  }
}
