import axios from "axios";

const CACHE_TIME = 5 * 60 * 1000; // 5 minutes
const articleCache = new Map<string, { data: any; timestamp: number }>();

async function getArticleBySlug(slug: string) {
  const cached = articleCache.get(slug);

  if (cached && Date.now() - cached.timestamp < CACHE_TIME) {
    return cached.data;
  }

  const response = await axios.get(
    `https://strapi.ravenci.solutions/api/articles?filters[Slug][$eq]=${slug}`,
    {
      headers: { Authorization: `Bearer ${process.env.STRAPI_API_KEY}` },
    },
  );

  const article = response.data.data ? response.data.data[0] : false;
  articleCache.set(slug, { data: article, timestamp: Date.now() });
  return article;
}

function formatContent(content: any[]) {
  return content
    .map((block, index) => {
      const text = block.children[0].text;

      if (text.startsWith("##")) {
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
            {text.replace("##", "").trim()}
          </h2>
        );
      }

      return text ? (
        <p key={index} className="mb-4">
          {text}
        </p>
      ) : null;
    })
    .filter(Boolean);
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <main className={`flex flex-col`}>
      <section
        className={`content-section py-32 px-5 sm:px-20 xl:px-36 grid justify-center min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col max-w-3xl`}>
          <h1 className="text-4xl font-bold mb-6">{article.Title}</h1>
          <div className="prose lg:prose-xl">
            {formatContent(article.Content)}
          </div>
        </article>
      </section>
    </main>
  );
}
