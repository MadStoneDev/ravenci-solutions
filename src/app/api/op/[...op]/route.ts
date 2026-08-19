import { createRouteHandler } from "@openpanel/nextjs/server";
import { NextResponse } from "next/server";

// Self-hosted OpenPanel splits into two origins, mirroring the cloud:
//  - NEXT_PUBLIC_OPENPANEL_URL      = dashboard domain, serves /op1.js
//    (cloud equivalent: https://openpanel.dev)
//  - NEXT_PUBLIC_OPENPANEL_API_URL  = API domain, receives /track
//    (cloud equivalent: https://api.openpanel.dev)
// Both are proxied through our own /api/op route so ad blockers can't block
// the OpenPanel origins. Each falls back to its cloud origin when unset.
const dashboardUrl = process.env.NEXT_PUBLIC_OPENPANEL_URL?.replace(/\/+$/, "");
const apiUrl =
  process.env.NEXT_PUBLIC_OPENPANEL_API_URL?.replace(/\/+$/, "") ||
  "https://api.openpanel.dev";

// Server-only client secret. When set, we authenticate /track requests with it
// (OpenPanel bypasses the CORS/origin check for secret-authenticated calls),
// which is the correct model for a server-side proxy. Must never reach the
// browser, so no NEXT_PUBLIC_ prefix. When unset we fall back to the SDK's
// default handler (origin/CORS-based auth).
const clientSecret = process.env.OPENPANEL_CLIENT_SECRET;
const opHandler = createRouteHandler(
  apiUrl !== "https://api.openpanel.dev" ? { apiUrl } : undefined,
);

// The script upstream, re-served under a neutral filename (/api/op/script.js)
// because ad blockers match the literal "op1.js" name even first-party.
const scriptSrc = dashboardUrl
  ? `${dashboardUrl}/op1.js`
  : "https://openpanel.dev/op1.js";

async function proxyScript(request: Request) {
  const url = new URL(request.url);
  let src = scriptSrc;
  if (url.searchParams.size > 0) src += `?${url.searchParams.toString()}`;

  try {
    const body = await (await fetch(src, { next: { revalidate: 86400 } })).text();
    return new NextResponse(body, {
      headers: {
        "Content-Type": "text/javascript",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch script",
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}

// Custom events proxy that adds the client secret. Mirrors the SDK's header
// forwarding (client id, origin, user agent, client ip) and appends the secret.
async function proxyEvents(request: Request) {
  const url = new URL(request.url);
  const idx = url.pathname.indexOf("/track");
  if (idx === -1) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  let path = url.pathname.slice(idx);
  if (url.searchParams.size > 0) path += `?${url.searchParams.toString()}`;

  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set(
    "openpanel-client-id",
    request.headers.get("openpanel-client-id") ?? "",
  );
  headers.set("openpanel-client-secret", clientSecret as string);
  headers.set(
    "origin",
    request.headers.get("origin") ?? `${url.protocol}//${url.host}`,
  );
  headers.set("User-Agent", request.headers.get("user-agent") ?? "");
  const ip =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0] ??
    request.headers.get("x-vercel-forwarded-for");
  if (ip) headers.set("openpanel-client-ip", ip);

  try {
    const res = await fetch(`${apiUrl}${path}`, {
      method: request.method,
      headers,
      body: request.method === "POST" ? JSON.stringify(await request.json()) : undefined,
    });
    const contentType = res.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      return NextResponse.json(await res.json(), { status: res.status });
    }
    return NextResponse.json(await res.text(), { status: res.status });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to proxy request",
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  if (new URL(request.url).pathname.endsWith("/script.js")) {
    return proxyScript(request);
  }
  if (clientSecret) return proxyEvents(request);
  return opHandler(request);
}

export function POST(request: Request) {
  if (clientSecret) return proxyEvents(request);
  return opHandler(request);
}
