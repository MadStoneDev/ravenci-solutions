import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// Serves the repo's /design working folder (redesign brief, decisions,
// baseline, proposed token files, and the reference artboards) over HTTP for
// review. It sits outside /public on purpose — these are internal working docs,
// not site assets — so this handler is the only way to reach them, and it:
//   - confines every read to the design/ directory (no path traversal)
//   - renders .dc.html artboards as pages, everything else as readable source
//   - lists directories as a simple link index
//   - marks all responses noindex
//   - is SECURE BY DEFAULT in production: disabled unless DESIGN_ACCESS_TOKEN is
//     set, and then requires it (?key=… once, then a cookie). These are internal
//     strategy docs — they must never be world-readable on the live domain.
//     In development it's open so local review is frictionless.
//
// fs is read at request time, so force the Node runtime and dynamic rendering.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DESIGN_ROOT = path.join(process.cwd(), "design");
const ACCESS_TOKEN = process.env.DESIGN_ACCESS_TOKEN;
const COOKIE = "design_access";

// Extension -> Content-Type. .html renders; source files display as text so the
// browser shows them instead of interpreting or downloading them.
const TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".htm": "text/html; charset=utf-8",
  ".css": "text/plain; charset=utf-8",
  ".ts": "text/plain; charset=utf-8",
  ".tsx": "text/plain; charset=utf-8",
  ".js": "text/plain; charset=utf-8",
  ".md": "text/plain; charset=utf-8",
  ".json": "text/plain; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

const NOINDEX = {
  "X-Robots-Tag": "noindex, nofollow",
  "Cache-Control": "no-store",
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> },
) {
  // --- access gate ---------------------------------------------------------
  // Development: open. Production: disabled unless a token is configured, and
  // then required. Internal docs never go public on the live domain by default.
  if (process.env.NODE_ENV === "production") {
    if (!ACCESS_TOKEN) {
      return new NextResponse("Not found", { status: 404, headers: NOINDEX });
    }
    const key = request.nextUrl.searchParams.get("key");
    const cookie = request.cookies.get(COOKIE)?.value;
    const authed = key === ACCESS_TOKEN || cookie === ACCESS_TOKEN;
    if (!authed) {
      return new NextResponse("Unauthorised. Append ?key=… to view.", {
        status: 401,
        headers: NOINDEX,
      });
    }
    // On a valid ?key, drop a cookie so the rest of the folder browses freely.
    if (key === ACCESS_TOKEN) {
      const res = await serve(params);
      res.cookies.set(COOKIE, ACCESS_TOKEN, {
        httpOnly: true,
        sameSite: "lax",
        secure: true,
        path: "/design",
        maxAge: 60 * 60 * 24 * 7,
      });
      return res;
    }
  }
  return serve(params);
}

async function serve(
  params: Promise<{ path?: string[] }>,
): Promise<NextResponse> {
  const { path: segments } = await params;
  const rel = (segments ?? []).join("/");

  // Resolve and confine to DESIGN_ROOT — reject any traversal.
  const target = path.resolve(DESIGN_ROOT, rel);
  if (target !== DESIGN_ROOT && !target.startsWith(DESIGN_ROOT + path.sep)) {
    return new NextResponse("Forbidden", { status: 403, headers: NOINDEX });
  }

  let stat;
  try {
    stat = await fs.stat(target);
  } catch {
    return new NextResponse("Not found", { status: 404, headers: NOINDEX });
  }

  if (stat.isDirectory()) {
    return directoryIndex(target, rel);
  }

  const ext = path.extname(target).toLowerCase();
  const contentType = TYPES[ext] ?? "text/plain; charset=utf-8";
  const body = await fs.readFile(target);
  return new NextResponse(new Uint8Array(body), {
    status: 200,
    headers: { ...NOINDEX, "Content-Type": contentType },
  });
}

async function directoryIndex(
  dir: string,
  rel: string,
): Promise<NextResponse> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  entries.sort((a, b) => {
    if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  const base = "/design" + (rel ? `/${rel}` : "");
  const up = rel
    ? `<li><a href="/design${rel.includes("/") ? "/" + rel.split("/").slice(0, -1).join("/") : ""}">../</a></li>`
    : "";
  const items = entries
    .map((e) => {
      const name = e.name + (e.isDirectory() ? "/" : "");
      return `<li><a href="${base}/${encodeURIComponent(e.name)}">${escapeHtml(name)}</a></li>`;
    })
    .join("\n");

  const html = `<!doctype html><meta charset="utf-8">
<meta name="robots" content="noindex, nofollow">
<title>design/${escapeHtml(rel)}</title>
<style>
  body{font:15px/1.6 ui-monospace,SFMono-Regular,Menlo,monospace;max-width:44rem;margin:3rem auto;padding:0 1.25rem;color:#0F0F12;background:#F6F5F2}
  h1{font-size:1rem;letter-spacing:.02em;color:#5A5A64;font-weight:600}
  ul{list-style:none;padding:0}
  li{padding:.15rem 0;border-bottom:1px solid #E0DDD6}
  a{color:#8E1A80;text-decoration:none}
  a:hover{text-decoration:underline}
  @media (prefers-color-scheme:dark){body{background:#0F0F12;color:#F6F5F2}h1{color:#9A9AA4}li{border-color:#2F2F38}a{color:#D57ACA}}
</style>
<h1>design/${escapeHtml(rel)}</h1>
<ul>${up}${items}</ul>`;

  return new NextResponse(html, {
    status: 200,
    headers: { ...NOINDEX, "Content-Type": "text/html; charset=utf-8" },
  });
}
