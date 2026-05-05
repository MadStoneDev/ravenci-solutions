import { NextResponse } from "next/server";
import { Recipient, EmailParams, Sender, MailerSend } from "mailersend";
import { checkRateLimit, verifyRecaptcha } from "@/lib/api-guards";

export async function POST(request: Request) {
  try {
    const limit = await checkRateLimit(request, "launch-your-vision");
    if (!limit.ok) {
      return NextResponse.json(
        { message: "Too many requests. Please try again shortly." },
        {
          status: 429,
          headers: limit.retryAfter
            ? { "Retry-After": String(limit.retryAfter) }
            : undefined,
        },
      );
    }

    const body = await request.json();
    const { name, email, message, budget, recaptchaToken } = body;

    const recaptcha = await verifyRecaptcha(recaptchaToken);
    if (!recaptcha.ok) {
      return NextResponse.json(
        { message: recaptcha.reason ?? "reCAPTCHA verification failed" },
        { status: 400 },
      );
    }

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
      .setSubject(`New Lead: ${name} (${budget || "Budget not specified"})`)
      .setTemplateId("zr6ke4nrkn3lon12")
      .setPersonalization(personalization);

    await mailerSend.email.send(emailParams);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 },
    );
  }
}
