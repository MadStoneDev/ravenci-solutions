import { NextResponse } from "next/server";
import { Recipient, EmailParams, Sender, MailerSend } from "mailersend";
import { getAuditByToken } from "@/lib/audits";
import { escapeHtml } from "@/lib/api-guards";
import { upsertSubscriber } from "@/lib/mailerlite";

// Triggers the report-delivery email for a given audit token. Protected by
// ADMIN_API_TOKEN so it can't be hit by the public. The eventual admin UI
// calls this same endpoint; for now hit it manually:
//
//   curl -X POST -H "x-admin-token: $ADMIN_API_TOKEN" \
//        -H "Content-Type: application/json" \
//        -d '{"token":"example-acme-corp-d4f7g"}' \
//        https://ravenci.solutions/api/admin/send-audit-report

export async function POST(request: Request) {
  const adminToken = process.env.ADMIN_API_TOKEN;
  const presented = request.headers.get("x-admin-token");
  if (!adminToken || presented !== adminToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let body: { token?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  const auditToken = body.token;
  if (!auditToken) {
    return NextResponse.json(
      { message: "Missing audit token" },
      { status: 400 },
    );
  }

  const audit = getAuditByToken(auditToken);
  if (!audit) {
    return NextResponse.json({ message: "Audit not found" }, { status: 404 });
  }

  if (!audit.clientEmail) {
    return NextResponse.json(
      { message: "Audit is missing clientEmail" },
      { status: 400 },
    );
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://ravenci.solutions";
  const reportUrl = `${baseUrl}/audit/${audit.token}`;
  const firstName = audit.clientName.split(" ")[0];

  const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY ?? "",
  });

  const noReply = new Sender(
    "no-reply@ravenci.solutions",
    "RAVENCI Solutions",
  );
  const richardReplyTo = new Sender(
    process.env.MAILERSEND_RAVENCI_EMAIL ?? "hello@ravenci.solutions",
    process.env.MAILERSEND_RAVENCI_NAME ?? "RAVENCI Solutions",
  );

  const safeFirstName = escapeHtml(firstName);
  const safeBusiness = escapeHtml(audit.clientBusiness);
  const safeHeadline = escapeHtml(audit.headline);

  const calendlyUrl = "https://calendly.com/ravenci";

  const html = `
    <p>Hi ${safeFirstName},</p>
    <p>Your visibility audit for ${safeBusiness} is ready.</p>
    <p><strong>Headline:</strong> ${safeHeadline}</p>
    <p>
      <a href="${reportUrl}"
         style="display:inline-block;padding:12px 20px;background:#7f1670;color:#fff;border-radius:9999px;text-decoration:none;font-weight:500;">
        Open the full report
      </a>
    </p>
    <p>You can read it in the browser, save to PDF, or forward to your team. The link's private to you.</p>
    <p>
      If anything in there's worth fixing and you'd like a hand, reply to this
      email or <a href="${calendlyUrl}">book a quick call</a> and we'll talk
      through it. No pressure, no pitch deck.
    </p>
    <p>Cheers,<br/>Richard at RAVENCI Solutions<br/>${baseUrl}</p>
  `;

  const text =
    `Hi ${firstName},\n\n` +
    `Your visibility audit for ${audit.clientBusiness} is ready.\n\n` +
    `Headline: ${audit.headline}\n\n` +
    `Open the full report:\n${reportUrl}\n\n` +
    `You can read it in the browser, save to PDF, or forward to your team. The link's private to you.\n\n` +
    `If anything in there's worth fixing and you'd like a hand, reply to this email or book a quick call: ${calendlyUrl}\n\n` +
    `No pressure, no pitch deck.\n\n` +
    `Cheers,\nRichard at RAVENCI Solutions\n${baseUrl}`;

  const emailParams = new EmailParams()
    .setFrom(noReply)
    .setTo([new Recipient(audit.clientEmail, audit.clientName)])
    .setReplyTo(richardReplyTo)
    .setSubject(
      `Your visibility audit for ${audit.clientBusiness} is ready`,
    )
    .setHtml(html)
    .setText(text);

  try {
    await mailerSend.email.send(emailParams);
  } catch (error) {
    console.error("Audit report send failed:", error);
    return NextResponse.json(
      { message: "Failed to send audit report email" },
      { status: 500 },
    );
  }

  // Add to "Audit Sent" group so the MailerLite automation triggers
  const mlGroup = process.env.MAILERLITE_GROUP_AUDIT_SENT ?? "186762321208542657";
  const mlResult = await upsertSubscriber({
    email: audit.clientEmail,
    name: audit.clientName,
    fields: {
      business_name: audit.clientBusiness,
      website_url: audit.clientWebsite ?? "",
      lead_source: "visibility-check-audit",
    },
    groups: [mlGroup],
  });
  if (!mlResult.ok) {
    console.error("MailerLite upsert failed (send-audit-report):", mlResult.reason);
  }

  return NextResponse.json({
    message: "Audit report email sent",
    sentTo: audit.clientEmail,
    reportUrl,
  });
}
