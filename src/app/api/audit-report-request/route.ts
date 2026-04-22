import { NextResponse } from "next/server";
import { Recipient, EmailParams, Sender, MailerSend } from "mailersend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

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
      // can still access the report. Worst case we lose the lead in the
      // logs, which is recoverable.
    }

    // 2. Send the lead the report link
    try {
      const userParams = new EmailParams()
        .setFrom(noReply)
        .setTo([new Recipient(email, name)])
        .setSubject(
          "Your Brisbane Business Website Audit 2026 — Full Report",
        )
        .setText(
          `Hi ${name.split(" ")[0]},\n\n` +
            `Thanks for requesting the Brisbane Business Website Audit 2026 report.\n\n` +
            `Open the full report here:\n` +
            `https://ravenci.solutions/brisbane-website-audit/report\n\n` +
            `From there you can print it or save it as a PDF directly from your browser.\n\n` +
            `If you'd like a free Visibility Check on your own website, just reply to this email or visit https://ravenci.solutions.\n\n` +
            `Cheers,\n` +
            `Richard at RAVENCI Solutions\n` +
            `https://ravenci.solutions`,
        );
      await mailerSend.email.send(userParams);
    } catch (userError) {
      console.error("Failed to send report email to user:", userError);
      // Don't fail — user still sees the report URL in the success state
    }

    return NextResponse.json({ message: "Report request received" });
  } catch (error) {
    console.error("Audit report request error:", error);
    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "Server error",
      },
      { status: 500 },
    );
  }
}
