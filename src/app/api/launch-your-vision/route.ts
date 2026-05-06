import { NextResponse } from "next/server";
import { Recipient, EmailParams, Sender, MailerSend } from "mailersend";
import { checkRateLimit, verifyRecaptcha } from "@/lib/api-guards";
import { upsertSubscriber } from "@/lib/mailerlite";

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
    const {
      name,
      email,
      message,
      budget,
      phone,
      businessName,
      websiteUrl,
      projectType,
      recaptchaToken,
    } = body;

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

    // Add to MailerLite (best-effort)
    const mlGroup = process.env.MAILERLITE_GROUP_LAUNCH_YOUR_VISION;
    const mlResult = await upsertSubscriber({
      email,
      name,
      fields: {
        business_name: businessName,
        website_url: websiteUrl,
        phone,
        budget: budget || "Not specified",
        project_type: projectType,
        lead_source: "launch-your-vision",
      },
      groups: mlGroup ? [mlGroup] : undefined,
    });
    if (!mlResult.ok) {
      console.error("MailerLite upsert failed (launch-your-vision):", mlResult.reason);
    }

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 },
    );
  }
}
