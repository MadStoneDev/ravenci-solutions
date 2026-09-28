import { OG_DEFAULTS, TWITTER_DEFAULTS } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";

import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";
import { getAllArticles } from "@/lib/articles";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export const metadata = {
  title: "Articles & Insights | RAVENCI Solutions",
  description:
    "Expert perspectives on web development, digital strategy, and business growth from Brisbane's RAVENCI Solutions. Tips, guides, and industry insights.",
  openGraph: {
    ...OG_DEFAULTS,
    title: "Articles & Insights | RAVENCI Solutions",
    description:
      "Expert perspectives on web development, digital strategy, and business growth from Brisbane's RAVENCI Solutions. Tips, guides, and industry insights.",
    url: "/articles",
    type: "website" as const,
  },
  twitter: { ...TWITTER_DEFAULTS },
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className={`${SECTION} border-b border-border`}>
        <div className="flex max-w-3xl flex-col gap-4">
          <Breadcrumbs items={[{ label: "Articles" }]} />
          <SectionLabel label="Writing" tick />
          <h1 className="text-display-l text-foreground">Articles</h1>
          <p className="text-lead text-muted-foreground">
            Plain notes on web development, SEO, and running a site that lasts.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className={SECTION}>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors duration-fast hover:border-foreground/30"
            >
              {article.featuredImage && (
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-muted">
                  <Image
                    src={article.featuredImage.src}
                    alt={article.featuredImage.alt || article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-slow ease-standard group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                {article.categories.length > 0 && (
                  <span className="mb-2 font-mono text-label uppercase text-accent">
                    {article.categories[0]}
                  </span>
                )}
                <h2 className="text-heading-s text-foreground">{article.title}</h2>
                {article.publishedAt && (
                  <time
                    dateTime={new Date(article.publishedAt).toISOString()}
                    className="mt-2 text-small text-muted-foreground"
                  >
                    {new Date(article.publishedAt).toLocaleDateString("en-AU", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                )}
                <p className="mt-2 line-clamp-3 flex-1 text-small text-muted-foreground">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Articles & Insights | RAVENCI Solutions",
            description:
              "Expert perspectives on web development, digital strategy, and business growth from Brisbane's RAVENCI Solutions.",
            url: "https://ravenci.solutions/articles",
            publisher: {
              "@type": "Organization",
              name: "RAVENCI Solutions",
              url: "https://ravenci.solutions",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "RAVENCI Articles",
            itemListElement: articles.map((article, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://ravenci.solutions/articles/${article.slug}`,
              name: article.title,
            })),
          }),
        }}
      />
    </main>
  );
}
