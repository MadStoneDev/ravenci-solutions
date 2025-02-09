// app/api/test-redis/route.ts
import { testRedisConnection } from "@/lib/article";
import { NextResponse } from "next/server";

export async function GET() {
  const isConnected = await testRedisConnection();
  return NextResponse.json({ connected: isConnected });
}
