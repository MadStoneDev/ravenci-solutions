import { NextResponse } from "next/server";
import { Recipient, EmailParams, Sender, MailerSend } from "mailersend";
import { checkRateLimit, verifyRecaptcha, escapeHtml } from "@/lib/api-guards";
import { upsertSubscriber } from "@/lib/mailerlite";

export async function POST(request: Request) {
  try {
    const limit = await checkRateLimit(request, "audit-report-request");
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
    const { name, email, recaptchaToken } = body;

    const recaptcha = await verifyRecaptcha(recaptchaToken);
    if (!recaptcha.ok) {
      return NextResponse.json(
        { message: recaptcha.reason ?? "reCAPTCHA verification failed" },
        { status: 400 },
      );
    }

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required" },
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

    const adminEmail =
      process.env.MAILERSEND_RAVENCI_EMAIL || "hello@ravenci.solutions";
    const adminName = process.env.MAILERSEND_RAVENCI_NAME || "RAVENCI Solutions";

    const noReply = new Sender(
      "no-reply@ravenci.solutions",
      "RAVENCI Solutions",
    );

    // 1. Notify Richard of the new lead
    try {
      const adminParams = new EmailParams()
        .setFrom(noReply)
        .setTo([new Recipient(adminEmail, adminName)])
        .setReplyTo(new Sender(email, name))
        .setSubject(`Audit Report Lead: ${name}`)
        .setText(
          `New Brisbane Audit Report request:\n\nName: ${name}\nEmail: ${email}\n\nReport URL: https://ravenci.solutions/brisbane-website-audit/report`,
        );
      await mailerSend.email.send(adminParams);
    } catch (adminError) {
      console.error("Failed to notify admin:", adminError);
      // Don't fail the user request if admin notification fails — they
      // can still access the report.
    }

    // 2. Send the lead the report link
    try {
      const firstName = name.split(" ")[0];
      const safeFirstName = escapeHtml(firstName);
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL ?? "https://ravenci.solutions";
      const reportUrl = `${baseUrl}/brisbane-website-audit/report`;
      const visibilityCheckUrl = `${baseUrl}/free-audit`;

      const html = `
        <p>Hi ${safeFirstName},</p>
        <p>Here's the full Brisbane Business Website Audit 2026:</p>
        <p>
          <a href="${reportUrl}"
             style="display:inline-block;padding:12px 20px;background:#7f1670;color:#fff;border-radius:9999px;text-decoration:none;font-weight:500;">
            Open the full report
          </a>
        </p>
        <p>Save it, share it, print to PDF. It's yours.</p>
        <p><strong>Curious how your own site stacks up?</strong></p>
        <p>We do free Visibility Checks across the same five categories.</p>
        <p>
          <a href="${visibilityCheckUrl}"
             style="display:inline-block;padding:12px 20px;background:#1b1b1b;color:#fff;border-radius:9999px;text-decoration:none;font-weight:500;">
            Get a free Visibility Check
          </a>
        </p>
        <p>Cheers,<br/>Richard<br/>RAVENCI Solutions</p>
      `;

      const text =
        `Hi ${firstName},\n\n` +
        `Here's the full Brisbane Business Website Audit 2026:\n` +
        `${reportUrl}\n\n` +
        `Save it, share it, print to PDF. It's yours.\n\n` +
        `Curious how your own site stacks up?\n` +
        `We do free Visibility Checks across the same five categories.\n` +
        `${visibilityCheckUrl}\n\n` +
        `Cheers,\nRichard\nRAVENCI Solutions`;

      const userParams = new EmailParams()
        .setFrom(noReply)
        .setTo([new Recipient(email, name)])
        .setSubject("Your Brisbane Business Website Audit 2026")
        .setHtml(html)
        .setText(text);
      await mailerSend.email.send(userParams);
    } catch (userError) {
      console.error("Failed to send report email to user:", userError);
    }

    // Add to MailerLite (best-effort)
    const mlGroup = process.env.MAILERLITE_GROUP_AUDIT_REPORT;
    const mlResult = await upsertSubscriber({
      email,
      name,
      fields: { lead_source: "brisbane-audit-report" },
      groups: mlGroup ? [mlGroup] : undefined,
    });
    if (!mlResult.ok) {
      console.error("MailerLite upsert failed (audit-report-request):", mlResult.reason);
    }

    return NextResponse.json({ message: "Report request received" });
  } catch (error) {
    console.error("Audit report request error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
