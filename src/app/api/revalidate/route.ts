import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";

import { ARTICLES_TAG } from "@/lib/pocketbase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * On-demand revalidation for articles. Called by PocketBase hooks (and the admin
 * server actions) after a publish/edit/schedule so the public pages update
 * without a redeploy.
 *
 * Auth: a shared secret in the `x-revalidate-secret` header (or `?secret=`),
 * compared in constant time. Mirrors the token check in
 * src/app/api/admin/send-audit-report/route.ts.
 */
function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { message: "Revalidation not configured" },
      { status: 503 },
    );
  }

  const url = new URL(request.url);
  const provided =
    request.headers.get("x-revalidate-secret") ??
    url.searchParams.get("secret") ??
    "";

  if (!safeEqual(provided, secret)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // Optional body: { slug?: string }
  let slug: string | undefined;
  try {
    const body = await request.json();
    if (body && typeof body.slug === "string") slug = body.slug;
  } catch {
    // no/invalid body is fine
  }

  revalidateTag(ARTICLES_TAG, "max");
  revalidatePath("/articles");
  if (slug) revalidatePath(`/articles/${slug}`);

  return NextResponse.json({ revalidated: true, tag: ARTICLES_TAG, slug });
}
