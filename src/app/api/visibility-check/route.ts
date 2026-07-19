import { NextResponse } from "next/server";
import { Recipient, EmailParams, Sender, MailerSend } from "mailersend";
import {
  checkRateLimit,
  escapeHtml,
  verifyRecaptcha,
} from "@/lib/api-guards";
import { upsertSubscriber } from "@/lib/mailerlite";

const INTENT_LABELS: Record<string, string> = {
  rebuild: "Considering a rebuild",
  "fix-issues": "Wanting to fix specific issues",
  comparing: "Comparing agencies for a future project",
  exploring: "Just exploring how their site looks",
  "not-sure": "Not sure yet",
};

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
    const {
      name,
      email,
      businessName,
      websiteUrl,
      intent,
      recaptchaToken,
    } = body;

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

    const adminEmail =
      process.env.MAILERSEND_RAVENCI_EMAIL || "hello@ravenci.solutions";
    const adminName =
      process.env.MAILERSEND_RAVENCI_NAME || "RAVENCI Solutions";

    const noReply = new Sender(
      "no-reply@ravenci.solutions",
      "RAVENCI Solutions",
    );
    const richardSender = new Sender(adminEmail, adminName);

    const intentLabel =
      typeof intent === "string" && intent in INTENT_LABELS
        ? INTENT_LABELS[intent]
        : null;

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeBusiness = escapeHtml(businessName);
    const safeUrl = escapeHtml(websiteUrl);
    const safeIntent = intentLabel ? escapeHtml(intentLabel) : null;

    // 1. Notify Richard of the new lead
    try {
      const adminParams = new EmailParams()
        .setFrom(richardSender)
        .setTo([new Recipient(adminEmail, adminName)])
        .setReplyTo(noReply)
        .setSubject(`Visibility Check Request: ${businessName}`)
        .setHtml(
          `<h2>New Visibility Check Request</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Business:</strong> ${safeBusiness}</p>
          <p><strong>Website:</strong> ${safeUrl}</p>
          ${safeIntent ? `<p><strong>Intent:</strong> ${safeIntent}</p>` : ""}`,
        )
        .setText(
          `New Visibility Check Request\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Business: ${businessName}\n` +
            `Website: ${websiteUrl}\n` +
            (intentLabel ? `Intent: ${intentLabel}\n` : ""),
        );
      await mailerSend.email.send(adminParams);
    } catch (adminError) {
      console.error("Failed to notify admin of visibility check:", adminError);
      // Don't fail the user request — they can still get the report.
    }

    // 2. Send acknowledgement to the lead
    try {
      const firstName = name.split(" ")[0];
      const safeFirst = escapeHtml(firstName);
      const userParams = new EmailParams()
        .setFrom(noReply)
        .setTo([new Recipient(email, name)])
        .setReplyTo(richardSender)
        .setSubject(`Got your visibility check request, ${firstName}`)
        .setHtml(
          `<p>Hi ${safeFirst},</p>
          <p>Thanks for the visibility check request for <strong>${safeBusiness}</strong>. I&apos;ve got your details and I&apos;ll get to your audit within 2 to 3 business days.</p>
          <p>You&apos;ll receive a follow-up email with the full report (a private link plus the option to save as PDF) when it&apos;s ready.</p>
          <p>If anything comes up in the meantime or you want to add context I should know, just reply to this email.</p>
          <p>Cheers,<br/>Richard at RAVENCI Solutions<br/>https://ravenci.solutions</p>`,
        )
        .setText(
          `Hi ${firstName},\n\n` +
            `Thanks for the visibility check request for ${businessName}. I've got your details and I'll get to your audit within 2 to 3 business days.\n\n` +
            `You'll receive a follow-up email with the full report (a private link plus the option to save as PDF) when it's ready.\n\n` +
            `If anything comes up in the meantime or you want to add context I should know, just reply to this email.\n\n` +
            `Cheers,\nRichard at RAVENCI Solutions\nhttps://ravenci.solutions`,
        );
      await mailerSend.email.send(userParams);
    } catch (userError) {
      console.error(
        "Failed to send visibility check acknowledgement to user:",
        userError,
      );
      // Don't fail the request — Richard still has the lead in his inbox.
    }

    // 3. Add to MailerLite (best-effort; never block the response on this)
    const mlGroup = process.env.MAILERLITE_GROUP_VISIBILITY_CHECK;
    const mlResult = await upsertSubscriber({
      email,
      name,
      fields: {
        business_name: businessName,
        website_url: websiteUrl,
        lead_source: "visibility-check",
        intent: intentLabel ?? "",
      },
      groups: mlGroup ? [mlGroup] : undefined,
    });
    if (!mlResult.ok) {
      console.error("MailerLite upsert failed (visibility-check):", mlResult.reason);
    }

    return NextResponse.json({ message: "Request submitted successfully" });
  } catch (error) {
    console.error("Error handling visibility check:", error);
    return NextResponse.json(
      { message: "Error sending request" },
      { status: 500 },
    );
  }
}
