import { NextResponse } from "next/server";
import { Recipient, EmailParams, Sender, MailerSend } from "mailersend";
import {
  checkRateLimit,
  escapeHtml,
  verifyRecaptcha,
} from "@/lib/api-guards";

export async function POST(request: Request) {
  try {
    const limit = await checkRateLimit(request, "visibility-check");
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
    const { name, email, businessName, websiteUrl, recaptchaToken } = body;

    const recaptcha = await verifyRecaptcha(recaptchaToken);
    if (!recaptcha.ok) {
      return NextResponse.json(
        { message: recaptcha.reason ?? "reCAPTCHA verification failed" },
        { status: 400 },
      );
    }

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

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeBusiness = escapeHtml(businessName);
    const safeUrl = escapeHtml(websiteUrl);

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(noReply)
      .setSubject(`Visibility Check Request: ${businessName}`)
      .setHtml(
        `<h2>New Visibility Check Request</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Business:</strong> ${safeBusiness}</p>
        <p><strong>Website:</strong> ${safeUrl}</p>`,
      )
      .setText(
        `New Visibility Check Request\n\nName: ${name}\nEmail: ${email}\nBusiness: ${businessName}\nWebsite: ${websiteUrl}`,
      );

    await mailerSend.email.send(emailParams);

    return NextResponse.json({ message: "Request submitted successfully" });
  } catch (error) {
    console.error("Error sending visibility check email:", error);
    return NextResponse.json(
      { message: "Error sending request" },
      { status: 500 },
    );
  }
}
