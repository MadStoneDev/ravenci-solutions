// Thin wrapper around MailerLite's Connect API for upserting subscribers.
// Used by the lead-capture API routes so submissions populate MailerLite as
// well as triggering the existing transactional emails.
//
// `phone` is a standard MailerLite field (no setup needed). Custom fields
// — business_name, website_url, lead_source, intent, budget, project_type —
// need to be created in the MailerLite UI before they capture data. Unknown
// fields are silently ignored by the API, so missing ones don't break the
// flow. Don't use `source` as a field key: it's reserved by MailerLite.

const MAILERLITE_API = "https://connect.mailerlite.com/api";

export interface UpsertSubscriberInput {
  email: string;
  name?: string;
  fields?: Record<string, string | number | undefined>;
  /** MailerLite group IDs to add the subscriber to. */
  groups?: string[];
}

export interface UpsertResult {
  ok: boolean;
  reason?: string;
}

export async function upsertSubscriber(
  input: UpsertSubscriberInput,
): Promise<UpsertResult> {
  const token = process.env.MAILERLITE_API_TOKEN;
  if (!token) {
    return { ok: false, reason: "MAILERLITE_API_TOKEN not configured" };
  }

  const fields: Record<string, string | number> = {};
  if (input.name) fields.name = input.name;
  if (input.fields) {
    for (const [key, value] of Object.entries(input.fields)) {
      if (value !== undefined && value !== "") fields[key] = value;
    }
  }

  const body: Record<string, unknown> = {
    email: input.email,
    status: "active",
  };
  if (Object.keys(fields).length > 0) body.fields = fields;
  if (input.groups && input.groups.length > 0) body.groups = input.groups;

  try {
    const res = await fetch(`${MAILERLITE_API}/subscribers`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      return {
        ok: false,
        reason: `MailerLite ${res.status}: ${errText.slice(0, 200)}`,
      };
    }

    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      reason: err instanceof Error ? err.message : "Network error",
    };
  }
}
