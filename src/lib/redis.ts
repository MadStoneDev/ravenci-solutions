// Shared Valkey (Redis-compatible) client. Valkey is self-hosted on the same
// server and reached over Coolify's internal network via VALKEY_URL.
//
// - One client per process, kept on globalThis so `next dev` hot reloads reuse
//   it instead of leaking a new connection on every edit.
// - lazyConnect: nothing connects at import time, so `next build` never tries
//   to reach Valkey. The first command opens the connection.
// - Short timeouts and a single retry per command keep callers fast when
//   Valkey is down. Callers that are cache-like (rate limiting) must catch
//   errors and fail open.
// - Every key is namespaced with "ravenci:" so several projects can share one
//   Valkey instance. ioredis adds the prefix automatically; pass bare keys.

import Redis from "ioredis";

export const REDIS_KEY_PREFIX = "ravenci:";

const TIMEOUT_MS = 1500;
const ERROR_LOG_INTERVAL_MS = 30_000;

type RedisGlobal = typeof globalThis & {
  __ravenciRedis?: Redis;
};

const g = globalThis as RedisGlobal;

function createClient(url: string): Redis {
  const client = new Redis(url, {
    keyPrefix: REDIS_KEY_PREFIX,
    lazyConnect: true,
    connectTimeout: TIMEOUT_MS,
    commandTimeout: TIMEOUT_MS,
    maxRetriesPerRequest: 1,
    // Reconnect with linear backoff capped at 5s. Never give up: Valkey may
    // be restarted by Coolify and should be picked up again automatically.
    retryStrategy: (times) => Math.min(times * 200, 5000),
  });

  // Without a listener, ioredis connection errors become unhandled "error"
  // events. Log them, throttled so a down Valkey doesn't flood the logs.
  let lastLoggedAt = 0;
  client.on("error", (err) => {
    const now = Date.now();
    if (now - lastLoggedAt < ERROR_LOG_INTERVAL_MS) return;
    lastLoggedAt = now;
    console.error("[valkey] connection error:", err.message);
  });

  return client;
}

/**
 * Returns the shared Valkey client, or null when VALKEY_URL isn't set
 * (e.g. local dev without Valkey). Callers must handle null.
 */
export function getRedis(): Redis | null {
  if (g.__ravenciRedis) return g.__ravenciRedis;
  const url = process.env.VALKEY_URL;
  if (!url) return null;
  g.__ravenciRedis = createClient(url);
  return g.__ravenciRedis;
}
