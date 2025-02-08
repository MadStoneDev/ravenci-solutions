import Link from "next/link";

import { IconArrowLeft } from "@tabler/icons-react";

import { getArticleBySlug } from "@/lib/article";
import { ContentBlock } from "@/lib/markdown-parse";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found | RAVENCI Solutions",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${article.Title} | RAVENCI Solutions`,
    description: article.seo?.Meta_Description || ``,
    keywords: article.seo?.Meta_Keywords,
    openGraph: {
      title: article.seo?.Meta_Title || article.Title,
      description: article.seo?.Meta_Description || article.Excerpt,
      images: article.Featured_Image
        ? [
            {
              url: `https://strapi.ravenci.solutions${article.Featured_Image.url}`,
              width: article.Featured_Image.width,
              height: article.Featured_Image.height,
              alt: article.Featured_Image.alternativeText || article.Title,
            },
          ]
        : [],
      type: "article",
      authors: article.author?.Name ? [article.author.Name] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.seo?.metaTitle || article.Title,
      description: article.seo?.metaDescription || article.Excerpt,
      images: article.Featured_Image
        ? [`https://strapi.ravenci.solutions${article.Featured_Image.url}`]
        : [],
    },
  };
}

function formatContent(content: any[]) {
  return content
    .map((block, index) => <ContentBlock key={index} block={block} />)
    .filter(Boolean);
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <main className={`flex flex-col`}>
      <section
        className={`content-section py-32 px-5 sm:px-20 xl:px-36 grid justify-center min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col max-w-3xl z-10`}>
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
          <h1 className="text-4xl font-bold">{article.Title}</h1>
          <section
            className={`mt-4 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-sm`}
          >
            <article className={`text-neutral-400`}>
              <h3>Written by {article.author.Name}</h3>
            </article>

            <article
              className={`mb-2 group px-2 py-1 relative flex w-fit hover:scale-105 transition-all duration-300 ease-in-out`}
            >
              <p
                className={`text-neutral-400 group-hover:text-white z-10 transition-all duration-300 ease-in-out`}
              >
                {article.categories.length > 0
                  ? article.categories[0].Name
                  : ` `}
              </p>
              <div
                className={`absolute top-0 left-0 right-full group-hover:right-0 bottom-0 bg-ravenci-primary transition-all duration-300 ease-in-out`}
              ></div>
            </article>
          </section>

          {/* Featured Image */}
          {article.Featured_Image && (
            <section className={`my-6 w-full h-[350px] overflow-hidden`}>
              <img
                src={`https://strapi.ravenci.solutions${article.Featured_Image.url}`}
                alt={article.Title}
                className={`object-cover object-center w-full h-full`}
              />
            </section>
          )}

          <div className="prose lg:prose-xl">
            {formatContent(article.Content)}
          </div>
        </article>
      </section>
    </main>
  );
}
