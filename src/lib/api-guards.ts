// Shared guards for public-facing API routes: reCAPTCHA + per-IP rate limit.
// Rate limit is backed by Upstash Redis so it works correctly across multiple
// app instances. Falls back to allow-through if Upstash isn't configured (dev).

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const upstashUrl = process.env.UPSTASH_URL;
const upstashToken = process.env.UPSTASH_API_TOKEN;

const ratelimit =
  upstashUrl && upstashToken
    ? new Ratelimit({
        redis: new Redis({ url: upstashUrl, token: upstashToken }),
        limiter: Ratelimit.slidingWindow(5, "1 m"),
        analytics: false,
        prefix: "ravenci:ratelimit",
      })
    : null;

function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function checkRateLimit(
  req: Request,
  scope = "default",
): Promise<{ ok: boolean; retryAfter?: number }> {
  if (!ratelimit) return { ok: true };

  const key = `${scope}:${getClientIp(req)}`;
  const { success, reset } = await ratelimit.limit(key);

  if (!success) {
    return { ok: false, retryAfter: Math.max(1, Math.ceil((reset - Date.now()) / 1000)) };
  }
  return { ok: true };
}

export async function verifyRecaptcha(
  token: string | undefined,
  minScore = 0.5,
): Promise<{ ok: boolean; reason?: string }> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  // Fail closed in production. In dev with no secret configured, allow
  // through so local form testing still works.
  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      return { ok: false, reason: "reCAPTCHA not configured" };
    }
    return { ok: true };
  }

  if (!token) {
    return { ok: false, reason: "Missing reCAPTCHA token" };
  }

  try {
    const params = new URLSearchParams({ secret, response: token });
    const res = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      },
    );
    const data = (await res.json()) as { success: boolean; score?: number };
    if (!data.success || (data.score ?? 0) < minScore) {
      return { ok: false, reason: "reCAPTCHA verification failed" };
    }
    return { ok: true };
  } catch {
    return { ok: false, reason: "reCAPTCHA verification error" };
  }
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
