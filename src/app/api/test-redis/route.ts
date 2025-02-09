import { testRedisConnection } from "@/lib/article";

export default async function handler(req, res) {
  const isConnected = await testRedisConnection();
  res.status(200).json({ connected: isConnected });
}
