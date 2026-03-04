import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs";
import { getAllArticles } from "@/lib/articles";

export const metadata = {
  title: "Articles & Insights - RAVENCI Solutions",
  description:
    "Expert perspectives on web development, digital strategy, and business growth from Brisbane's RAVENCI Solutions. Tips, guides, and industry insights.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className={`flex flex-col`}>
      <section
        className={`content-section py-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col`}>
          <Breadcrumbs items={[{ label: "Articles" }]} />
          <h1 className={`mt-4 text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Code, Create, Transform
          </h1>
          <h2 className={`text-2xl md:text-3xl lg:text-h2 font-light`}>
            Expert perspectives on modern digital development
          </h2>
        </article>
      </section>

      <section
        className={`content-section py-32 px-5 sm:px-20 xl:px-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 min-h-[750px] bg-ravenci-dark`}
      >
        {articles.map((article) => (
          <article key={article.slug} className={`flex flex-col`}>
            <div
              className="relative mb-4 w-full overflow-hidden"
              style={{ aspectRatio: "5/6" }}
            >
              {article.featuredImage && (
                <Image
                  src={article.featuredImage.src}
                  alt={article.featuredImage.alt || article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  className="object-cover object-center"
                />
              )}
            </div>
            <div
              className={`mb-2 group px-2 py-1 relative flex w-fit hover:scale-105 transition-all duration-300 ease-in-out`}
            >
              <p
                className={`text-xs uppercase font-bold text-neutral-400 group-hover:text-white z-10 transition-all duration-300 ease-in-out`}
              >
                {article.categories.length > 0 ? article.categories[0] : ` `}
              </p>
              <div
                className={`absolute top-0 left-0 right-full group-hover:right-0 bottom-0 bg-ravenci-primary transition-all duration-300 ease-in-out`}
              ></div>
            </div>

            <Link
              href={`/articles/${article.slug}`}
              className={`mb-4 group relative px-1 py-0.5 flex hover:scale-105 transition-all duration-300 ease-in-out`}
            >
              <h3
                className={`font-serif text-xl text-white font-semibold`}
              >
                {article.title}
              </h3>
            </Link>

            <p
              className={`text-sm text-neutral-400 font-light`}
              style={{
                lineHeight: "1.6em",
              }}
            >
              {article.excerpt}
            </p>
          </article>
        ))}
      </section>
      <section
        className={`content-section py-32 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[250px] bg-white`}
      ></section>
    </main>
  );
}
