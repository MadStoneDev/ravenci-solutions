import axios from "axios";
import { redis } from "@/lib/redis";

const CACHE_TIME = 5 * 60 * 1000; // 5 minutes

export async function getArticleBySlug(slug: string) {
  const cacheKey = `article:${slug}`;
  const cached = await redis.get<string>(cacheKey);

  if (cached) return cached;

  const response = await axios.get(
    `https://strapi.ravenci.solutions/api/articles?filters[Slug][$eq]=${slug}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
      },
    },
  );

  const article = response.data.data ? response.data.data[0] : false;
  await redis.setex(`article:${slug}`, CACHE_TIME, JSON.stringify(article));
  return article;
}
