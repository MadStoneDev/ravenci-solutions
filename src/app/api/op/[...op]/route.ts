import { createRouteHandler } from "@openpanel/nextjs/server";
import { NextResponse } from "next/server";

// Base URL of the (self-hosted) OpenPanel instance, e.g.
// https://analytics.ravenci.solutions. Falls back to OpenPanel Cloud origins
// when unset. Both the script and event ingestion are proxied through our own
// /api/op route so ad blockers can't block the OpenPanel origin.
const baseUrl = process.env.NEXT_PUBLIC_OPENPANEL_URL?.replace(/\/+$/, "");

// Events API upstream. Self-hosted exposes it at `${baseUrl}/api`; cloud uses
// https://api.openpanel.dev (the SDK's default when apiUrl is undefined).
const apiUrl = baseUrl ? `${baseUrl}/api` : undefined;
const opHandler = createRouteHandler(apiUrl ? { apiUrl } : undefined);

// The script upstream. Self-hosted serves it at `${baseUrl}/op1.js`; cloud at
// https://openpanel.dev/op1.js. We re-serve it under a neutral filename
// (/api/op/script.js) because ad blockers match the literal "op1.js" name even
// when it's served first-party.
const scriptSrc = baseUrl ? `${baseUrl}/op1.js` : "https://openpanel.dev/op1.js";

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
