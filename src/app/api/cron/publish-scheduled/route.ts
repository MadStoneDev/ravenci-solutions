import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import PocketBase from "pocketbase";

import {
  ARTICLES_TAG,
  POCKETBASE_URL,
  isPocketBaseEnabled,
} from "@/lib/pocketbase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Cron endpoint: publishes any scheduled article whose time has arrived.
 *
 * The public reads require `status = "published"`, so a "scheduled" article
 * stays hidden until something flips it. Run this every ~15 min: it finds
 * `status = "scheduled" && scheduleDate <= @now`, flips each to "published"
 * (setting publishedAt), then revalidates the public surfaces.
 *
 * Auth: shared secret via `Authorization: Bearer <CRON_SECRET>`, the
 * `x-cron-secret` header, or `?secret=` — constant-time compared. Mirrors
 * src/app/api/revalidate/route.ts.
 *
 * PocketBase writes use a service login (POCKETBASE_CRON_EMAIL/PASSWORD); that
 * account needs update rights on the articles collection (e.g. the owner
 * account, or a dedicated writer with the same rule).
 */
function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

async function handle(request: Request): Promise<NextResponse> {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "Cron not configured" }, { status: 503 });
  }

  const url = new URL(request.url);
  const bearer = request.headers
    .get("authorization")
    ?.replace(/^Bearer\s+/i, "");
  const provided =
    bearer ??
    request.headers.get("x-cron-secret") ??
    url.searchParams.get("secret") ??
    "";

  if (!safeEqual(provided, secret)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  if (!isPocketBaseEnabled()) {
    return NextResponse.json({ published: 0, note: "PocketBase disabled" });
  }

  const email = process.env.POCKETBASE_CRON_EMAIL;
  const password = process.env.POCKETBASE_CRON_PASSWORD;
  if (!email || !password) {
    return NextResponse.json(
      { message: "Cron PocketBase credentials not configured" },
      { status: 503 },
    );
  }

  const pb = new PocketBase(POCKETBASE_URL);
  try {
    await pb.collection("users").authWithPassword(email, password);
  } catch {
    return NextResponse.json(
      { message: "Cron PocketBase auth failed" },
      { status: 500 },
    );
  }

  let due: { id: string; slug?: string; scheduleDate?: string }[];
  try {
    due = await pb.collection("articles").getFullList({
      filter: 'status = "scheduled" && scheduleDate <= @now',
      fields: "id,slug,scheduleDate",
    });
  } catch {
    return NextResponse.json(
      { message: "Failed to read scheduled articles" },
      { status: 500 },
    );
  }

  const published: string[] = [];
  for (const rec of due) {
    try {
      await pb.collection("articles").update(rec.id, {
        status: "published",
        publishedAt: rec.scheduleDate || new Date().toISOString(),
      });
      published.push(rec.slug ?? rec.id);
    } catch {
      // Leave it for the next run rather than failing the whole batch.
    }
  }

  if (published.length > 0) {
    // Next 16: revalidateTag takes a cacheLife profile as the 2nd arg.
    revalidateTag(ARTICLES_TAG, "max");
    revalidatePath("/articles");
    for (const slug of published) revalidatePath(`/articles/${slug}`);
    revalidatePath("/admin/articles");
  }

  return NextResponse.json({ published: published.length, slugs: published });
}

// Accept GET and POST so it works with either style of cron caller.
export async function GET(request: Request) {
  return handle(request);
}
export async function POST(request: Request) {
  return handle(request);
}
