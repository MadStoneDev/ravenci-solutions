import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import PocketBase from "pocketbase";

import { POCKETBASE_URL } from "@/lib/pocketbase";

/**
 * Admin session handling for the articles CMS.
 *
 * The PocketBase auth token + record are kept in an httpOnly, secure,
 * SameSite=Lax cookie (mirrors the gate in src/app/design/[[...path]]/route.ts).
 * Server components read it to build a per-request authed PocketBase client; the
 * login/logout server actions write/clear it. Real authorisation is enforced by
 * PocketBase collection rules on every call — the cookie is the session carrier.
 */

export const AUTH_COOKIE = "pb_auth";
const MAX_AGE = 60 * 60 * 24 * 14; // 14 days

interface StoredAuth {
  token: string;
  record: Record<string, unknown>;
}

/** Persist the authenticated PocketBase session into the cookie. */
export async function setAuthCookie(pb: PocketBase): Promise<void> {
  const payload: StoredAuth = {
    token: pb.authStore.token,
    record: pb.authStore.record as unknown as Record<string, unknown>,
  };
  const store = await cookies();
  store.set(AUTH_COOKIE, JSON.stringify(payload), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function clearAuthCookie(): Promise<void> {
  const store = await cookies();
  store.delete(AUTH_COOKIE);
}

/**
 * Build a per-request PocketBase client from the session cookie. Returns a client
 * whose authStore may be invalid/empty — callers check `pb.authStore.isValid`.
 */
export async function getServerPb(): Promise<PocketBase> {
  const pb = new PocketBase(POCKETBASE_URL);
  pb.autoCancellation(false);

  const store = await cookies();
  const raw = store.get(AUTH_COOKIE)?.value;
  if (raw) {
    try {
      const { token, record } = JSON.parse(raw) as StoredAuth;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      pb.authStore.save(token, record as any);
    } catch {
      pb.authStore.clear();
    }
  }
  return pb;
}

export interface AdminSession {
  pb: PocketBase;
  user: { id: string; email: string; name?: string };
}

/**
 * Require a valid admin session. Redirects to /admin/login when absent/expired.
 * Use in admin server components and server actions.
 */
export async function requireUser(): Promise<AdminSession> {
  const pb = await getServerPb();
  if (!pb.authStore.isValid || pb.authStore.record?.collectionName !== "users") {
    redirect("/admin/login");
  }
  const rec = pb.authStore.record as unknown as {
    id: string;
    email: string;
    name?: string;
  };
  return { pb, user: { id: rec.id, email: rec.email, name: rec.name } };
}
