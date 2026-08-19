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
const apiUrl = process.env.NEXT_PUBLIC_OPENPANEL_API_URL?.replace(/\/+$/, "");

// Events API upstream. The SDK forwards `${apiUrl}/track`, so pass the bare
// origin (no /api suffix) — same shape as the https://api.openpanel.dev default.
const opHandler = createRouteHandler(apiUrl ? { apiUrl } : undefined);

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

export async function GET(request: Request) {
  if (new URL(request.url).pathname.endsWith("/script.js")) {
    return proxyScript(request);
  }
  return opHandler(request);
}

export function POST(request: Request) {
  return opHandler(request);
}
