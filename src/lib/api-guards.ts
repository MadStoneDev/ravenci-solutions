// Shared guards for public-facing API routes: reCAPTCHA + per-IP rate limit.
// Rate limit is backed by Upstash Redis so it works correctly across multiple
// app instances. If Upstash isn't configured we fall back to a per-instance
// in-memory limiter rather than allowing everything through, this still
// throttles a flooding IP and, crucially, doesn't silently disable the limiter
// in production if the env vars go missing on a deploy.

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const upstashUrl = process.env.UPSTASH_URL;
const upstashToken = process.env.UPSTASH_API_TOKEN;

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;

const ratelimit =
  upstashUrl && upstashToken
    ? new Ratelimit({
        redis: new Redis({ url: upstashUrl, token: upstashToken }),
        limiter: Ratelimit.slidingWindow(RATE_LIMIT_MAX, "1 m"),
        analytics: false,
        prefix: "ravenci:ratelimit",
      })
    : null;

// Per-instance fallback limiter. Not shared across instances, but a reasonable
// safety net when Upstash is unavailable. Timestamps are pruned on access.
const memoryHits = new Map<string, number[]>();
let warnedNoUpstash = false;

function memoryRateLimit(key: string): { ok: boolean; retryAfter?: number } {
  const now = Date.now();
  const recent = (memoryHits.get(key) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    memoryHits.set(key, recent);
    const retryAfter = Math.max(
      1,
      Math.ceil((RATE_LIMIT_WINDOW_MS - (now - recent[0])) / 1000),
    );
    return { ok: false, retryAfter };
  }

  recent.push(now);
  memoryHits.set(key, recent);
  return { ok: true };
}

function getClientIp(req: Request): string {
  // Assumes the app sits behind a proxy (Coolify/Cloudflare) that sets a
  // trustworthy x-forwarded-for. If the app were ever exposed directly this
  // header would be client-spoofable and the limit could be bypassed per-IP.
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function checkRateLimit(
  req: Request,
  scope = "default",
): Promise<{ ok: boolean; retryAfter?: number }> {
  const key = `${scope}:${getClientIp(req)}`;

  if (!ratelimit) {
    if (process.env.NODE_ENV === "production" && !warnedNoUpstash) {
      warnedNoUpstash = true;
      console.error(
        "Rate limiting: Upstash not configured in production, using per-instance in-memory fallback.",
      );
    }
    return memoryRateLimit(key);
  }

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
        signal: AbortSignal.timeout(5000),
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
