import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getArticleBySlug, getAllSlugs, getRelatedArticles } from "@/lib/articles";
import { mdxComponents } from "@/lib/mdx-components";
import Breadcrumbs from "@/components/breadcrumbs";
import SectionLabel from "@/components/section-label";
import { Button } from "@/components/ui/button";

const SECTION = "px-5 py-14 md:px-12 md:py-20 lg:px-20";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const article = getArticleBySlug((await params).slug);

  if (!article) {
    return {
      title: "Article Not Found | RAVENCI Solutions",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${article.seo?.metaTitle || article.title} | RAVENCI Solutions`,
    description: article.seo?.metaDescription || article.excerpt || "",
    keywords: article.seo?.metaKeywords,
    alternates: { canonical: `/articles/${(await params).slug}` },
    openGraph: {
      title: `${article.seo?.metaTitle || article.title} | RAVENCI Solutions`,
      description: article.seo?.metaDescription || article.excerpt,
      url: `/articles/${(await params).slug}`,
      images: article.featuredImage
        ? [
            {
              url: article.featuredImage.src,
              width: article.featuredImage.width,
              height: article.featuredImage.height,
              alt: article.featuredImage.alt || article.title,
            },
          ]
        : [],
      type: "article",
      authors: [article.author],
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: article.seo?.metaTitle || article.title,
      description: article.seo?.metaDescription || article.excerpt,
      images: article.featuredImage ? [article.featuredImage.src] : [],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const relatedArticles = getRelatedArticles(slug, 2);

  if (!article) {
    notFound();
  }

  const readMins = Math.max(1, Math.round(article.content.split(/\s+/).length / 200));
  const publishedLabel = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("en-AU", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ravenci.solutions" },
      { "@type": "ListItem", position: 2, name: "Articles", item: "https://ravenci.solutions/articles" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://ravenci.solutions/articles/${slug}` },
    ],
  };

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seo?.metaDescription || article.excerpt || "",
    image: article.featuredImage ? `https://ravenci.solutions${article.featuredImage.src}` : undefined,
    author: { "@type": "Person", name: article.author || "RAVENCI Solutions" },
    publisher: {
      "@type": "Organization",
      name: "RAVENCI Solutions",
      logo: { "@type": "ImageObject", url: "https://ravenci.solutions/ravenci-logo.svg" },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://ravenci.solutions/articles/${slug}` },
  };

  return (
    <main className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />

      <section className={SECTION}>
        <div className="mx-auto flex max-w-5xl flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Article */}
          <article className="min-w-0 max-w-prose flex-1">
            <Breadcrumbs items={[{ label: "Articles", href: "/articles" }, { label: article.title }]} />
            {article.categories.length > 0 && (
              <div className="mt-5">
                <SectionLabel label={article.categories[0]} />
              </div>
            )}
            <h1 className="mt-3 text-display-m text-foreground">{article.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-small text-muted-foreground">
              <span>By {article.author}</span>
              {publishedLabel && (
                <>
                  <span aria-hidden className="text-border">·</span>
                  <time dateTime={new Date(article.publishedAt).toISOString()}>{publishedLabel}</time>
                </>
              )}
              <span aria-hidden className="text-border">·</span>
              <span>{readMins} min read</span>
            </div>

            {article.featuredImage && (
              <div className="relative my-8 aspect-[16/9] w-full overflow-hidden rounded-sm border border-border">
                <Image
                  src={article.featuredImage.src}
                  alt={article.featuredImage.alt || article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 680px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            )}

            <div className="mt-8">
              <MDXRemote source={article.content} components={mdxComponents} />
            </div>

            {relatedArticles.length > 0 && (
              <aside className="mt-16 border-t border-border pt-10">
                <SectionLabel label="Related reading" />
                <ul className="mt-6 flex flex-col gap-5">
                  {relatedArticles.map((related) => (
                    <li key={related.slug}>
                      <Link href={`/articles/${related.slug}`} className="group flex flex-col">
                        <span className="text-heading-s text-foreground group-hover:text-accent">
                          {related.title}
                        </span>
                        {related.excerpt && (
                          <span className="mt-1 text-small text-muted-foreground">{related.excerpt}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </article>

          {/* Lead-magnet aside */}
          <aside className="lg:w-[280px] lg:shrink-0">
            <div className="rounded-sm border border-border bg-card p-6 lg:sticky lg:top-28">
              <SectionLabel label="Free check" />
              <h2 className="mt-3 text-heading-s text-foreground">See how you show up</h2>
              <p className="mt-2 text-small text-muted-foreground">
                A quick check of how search engines and AI assistants see your
                business. No cost, no obligation.
              </p>
              <Button asChild variant="accent" size="default" className="mt-4 w-full">
                <Link href="/#visibility-check">Free visibility check</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
