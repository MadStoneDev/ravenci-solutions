import type { NextApiRequest, NextApiResponse } from "next";
import { Recipient, EmailParams, Sender, MailerSend } from "mailersend";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, message, budget } = req.body;

    const mailerSend = new MailerSend({
      apiKey: process.env.MAILERSEND_API_KEY || "",
    });

    const recipients = [
      new Recipient(
        process.env.MAILERSEND_FROM_EMAIL || "",
        process.env.MAILERSEND_FROM_NAME || "",
      ),
    ];

    const sentFrom = new Sender(
      process.env.MAILERSEND_FROM_EMAIL || "",
      process.env.MAILERSEND_FROM_NAME || "",
    );

    const noReply = new Sender(
      `no-reply@ravenci.solutions`,
      `RAVENCI Solutions`,
    );

    const personalization = [
      {
        email: "recipient@email.com",
        data: {
          elements: [
            {
              name,
              email,
              budget,
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
      .setSubject("Subject")
      .setTemplateId("zr6ke4nrkn3lon12")
      .setPersonalization(personalization);

    await mailerSend.email.send(emailParams);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
}
