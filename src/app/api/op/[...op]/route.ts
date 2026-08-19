import { createRouteHandler } from "@openpanel/nextjs/server";
import { NextResponse } from "next/server";

// Proxies OpenPanel event ingestion (/track) through our own domain so ad
// blockers can't block the openpanel.dev origin.
// apiUrl overrides the upstream events API only when self-hosting; the cloud
// default (https://api.openpanel.dev) is used otherwise.
const apiUrl = process.env.NEXT_PUBLIC_OPENPANEL_API_URL || undefined;
const opHandler = createRouteHandler(apiUrl ? { apiUrl } : undefined);

// The SDK proxy only serves the script at a path ending in "/op1.js", but ad
// blockers match that literal filename even first-party. So we serve the same
// upstream script from a neutral filename that isn't on any blocklist.
const SCRIPT_SRC = "https://openpanel.dev/op1.js";

async function proxyScript(request: Request) {
  const url = new URL(request.url);
  let src = SCRIPT_SRC;
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
