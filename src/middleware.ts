import { NextRequest, NextResponse } from "next/server";

import { AUTH_COOKIE } from "@/lib/admin-auth";

/**
 * Gate for the articles admin. This is the first (UX) gate; the real
 * authorisation is enforced by PocketBase collection rules on every call.
 *
 * - /admin/*      (except /admin/login): no valid session cookie -> redirect to login
 * - /api/admin/*  : no valid session cookie -> 401 JSON
 * All admin responses are marked noindex.
 */

function cookieLooksValid(raw: string | undefined): boolean {
  if (!raw) return false;
  try {
    const { token } = JSON.parse(raw) as { token?: string };
    if (!token) return false;
    const payload = token.split(".")[1];
    if (!payload) return false;
    const json = JSON.parse(
      atob(payload.replace(/-/g, "+").replace(/_/g, "/")),
    ) as { exp?: number };
    if (!json.exp) return true; // can't tell; let the server verify
    return json.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const raw = request.cookies.get(AUTH_COOKIE)?.value;
  const authed = cookieLooksValid(raw);

  // API: JSON 401 when unauthenticated.
  if (pathname.startsWith("/api/admin")) {
    if (!authed) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.next();
  }

  // Admin pages: login is public; everything else needs a session.
  const isLogin = pathname === "/admin/login";
  if (!isLogin && !authed) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    url.search = "";
    const res = NextResponse.redirect(url);
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    return res;
  }

  const res = NextResponse.next();
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
