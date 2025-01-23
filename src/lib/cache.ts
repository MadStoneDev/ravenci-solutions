import axios from "axios";

let articlesCache: { slug: string; documentId: string }[] | null = null;
let cacheExpiry = 0;

export async function getArticles() {
  const now = Date.now();

  if (!articlesCache || now > cacheExpiry) {
    const response = await axios.get(
      `https://strapi.ravenci.solutions/api/articles`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
      },
    );
    articlesCache = response.data.data;
    cacheExpiry = now + 5 * 60 * 1000;
  }

  return articlesCache;
}

export async function getArticleMapping(slug: string) {
  const now = Date.now();

  if (!articlesCache || now > cacheExpiry) {
    const articles = await getArticles();
    articlesCache = articles.map((article) => ({
      slug: article.slug,
      documentId: article.documentId,
    }));

    cacheExpiry = now + 5 * 60 * 1000;
  }

  return articlesCache.find((article) => article.slug === slug)?.documentId;
}
