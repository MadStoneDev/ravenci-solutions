// Shared guards for public-facing API routes: Turnstile + per-IP rate limit.
// Rate limit is a fixed-window counter in Valkey (INCR + EXPIRE NX) so it works
// across multiple app instances. If Valkey isn't configured, or is unreachable,
// we fail open to a per-instance in-memory limiter rather than erroring or
// allowing everything through: requests never hang or 500 because of Valkey,
// a flooding IP is still throttled, and the limiter isn't silently disabled in
// production if the env var goes missing on a deploy.

import { getRedis } from "@/lib/redis";

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_WINDOW_S = RATE_LIMIT_WINDOW_MS / 1000;

// Per-instance fallback limiter. Not shared across instances, but a reasonable
// safety net when Valkey is unavailable. Timestamps are pruned on access.
const memoryHits = new Map<string, number[]>();
let warnedNoValkey = false;
let lastValkeyErrorLogAt = 0;

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

  const redis = getRedis();
  if (!redis) {
    if (process.env.NODE_ENV === "production" && !warnedNoValkey) {
      warnedNoValkey = true;
      console.error(
        "Rate limiting: VALKEY_URL not configured in production, using per-instance in-memory fallback.",
      );
    }
    return memoryRateLimit(key);
  }

  try {
    return await valkeyRateLimit(redis, `ratelimit:${key}`);
  } catch (err) {
    // Valkey down or slow: fail open to the in-memory limiter. The client's
    // connect/command timeouts bound this to ~1.5s. Log at most every 30s.
    const now = Date.now();
    if (now - lastValkeyErrorLogAt > 30_000) {
      lastValkeyErrorLogAt = now;
      console.error(
        "Rate limiting: Valkey unavailable, using in-memory fallback:",
        err instanceof Error ? err.message : err,
      );
    }
    return memoryRateLimit(key);
  }
}

// Fixed window: the first hit in a window creates the counter and sets its
// TTL (EXPIRE NX only sets it once), later hits just increment. The key
// expires at the end of the window, which resets the count.
async function valkeyRateLimit(
  redis: NonNullable<ReturnType<typeof getRedis>>,
  key: string,
): Promise<{ ok: boolean; retryAfter?: number }> {
  const results = await redis
    .multi()
    .incr(key)
    .expire(key, RATE_LIMIT_WINDOW_S, "NX")
    .pttl(key)
    .exec();

  // exec() resolves to [err, result] tuples (or null if the transaction was
  // aborted). Any per-command error is treated like Valkey being down.
  if (!results) throw new Error("rate limit transaction aborted");
  for (const [err] of results) if (err) throw err;

  const count = Number(results[0][1]);
  const pttl = Number(results[2][1]);

  if (count > RATE_LIMIT_MAX) {
    const retryAfter =
      pttl > 0 ? Math.max(1, Math.ceil(pttl / 1000)) : RATE_LIMIT_WINDOW_S;
    return { ok: false, retryAfter };
  }
  return { ok: true };
}

export async function verifyTurnstile(
  token: string | undefined,
  remoteIp?: string,
): Promise<{ ok: boolean; reason?: string }> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  // Fail closed in production. In dev with no secret configured, allow
  // through so local form testing still works.
  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      return { ok: false, reason: "Turnstile not configured" };
    }
    return { ok: true };
  }

  if (!token) {
    return { ok: false, reason: "Missing Turnstile token" };
  }

  try {
    const params = new URLSearchParams({ secret, response: token });
    if (remoteIp) params.set("remoteip", remoteIp);
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
        signal: AbortSignal.timeout(5000),
      },
    );
    const data = (await res.json()) as { success: boolean };
    if (!data.success) {
      return { ok: false, reason: "Turnstile verification failed" };
    }
    return { ok: true };
  } catch {
    return { ok: false, reason: "Turnstile verification error" };
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
