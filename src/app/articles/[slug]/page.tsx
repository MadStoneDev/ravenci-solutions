import { getArticleBySlug } from "@/lib/article";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

function formatContent(content: any[]) {
  return content
    .map((block, index) => {
      const text = block.children[0].text;

      if (text.startsWith("###")) {
        return (
          <h3 key={index} className="text-xl font-bold mt-8 mb-4">
            {text.replace("###", "").trim()}
          </h3>
        );
      }

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
          <Link
            href={`/articles`}
            className={`group relative mb-4 pl-1 pr-2 py-0.5 inline-flex items-center gap-2 w-fit hover:scale-110 font-bold text-sm text-ravenci-primary hover:text-white transition-all duration-300 ease-in-out`}
          >
            <IconArrowLeft size={18} className={`z-10`} />
            <span className={`z-10`}>Back to Articles</span>

            <div
              className={`absolute top-0 left-full group-hover:left-0 right-0 bottom-0 bg-ravenci-primary transition-all duration-300 ease-in-out`}
            ></div>
          </Link>
          <h1 className="text-4xl font-bold mb-6">{article.Title}</h1>
          <div className="prose lg:prose-xl">
            {formatContent(article.Content)}
          </div>
        </article>
      </section>
    </main>
  );
}
