import { redis } from "@/lib/redis";

const CACHE_TIME = 7 * 24 * 60 * 60; // 1 week

export async function getArticleBySlug(slug: string) {
  const cacheKey = `article:${slug}`;

  try {
    const cached = await redis.get(cacheKey);
    if (cached) return cached;

    const response = await fetch(
      `https://strapi.ravenci.solutions/api/articles?filters[Slug][$eq]=${slug}&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) return false;

    const json = await response.json();
    const article = json.data ? json.data[0] : false;

    if (article) {
      await redis.set(cacheKey, article, { ex: CACHE_TIME });
    }

    return article;
  } catch (error) {
    console.error(error);
    return false;
  }
}
