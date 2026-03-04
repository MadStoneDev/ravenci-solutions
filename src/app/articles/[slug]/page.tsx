import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getArticleBySlug, getAllSlugs } from "@/lib/articles";
import { mdxComponents } from "@/lib/mdx-components";
import Breadcrumbs from "@/components/breadcrumbs";

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
    title: `${article.title} | RAVENCI Solutions`,
    description: article.seo?.metaDescription || "",
    keywords: article.seo?.metaKeywords,
    openGraph: {
      title: article.seo?.metaTitle || article.title,
      description: article.seo?.metaDescription || article.excerpt,
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

  if (!article) {
    notFound();
  }

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ravenci.solutions",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Articles",
        item: "https://ravenci.solutions/articles",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://ravenci.solutions/articles/${slug}`,
      },
    ],
  };

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seo?.metaDescription || article.excerpt || "",
    image: article.featuredImage
      ? `https://ravenci.solutions${article.featuredImage.src}`
      : undefined,
    author: {
      "@type": "Person",
      name: article.author || "RAVENCI Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "RAVENCI Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://ravenci.solutions/ravenci-logo.svg",
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ravenci.solutions/articles/${slug}`,
    },
  };

  return (
    <main className={`flex flex-col`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <section
        className={`content-section py-32 px-5 sm:px-20 xl:px-36 grid justify-center min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col max-w-3xl z-10`}>
          <Breadcrumbs
            items={[
              { label: "Articles", href: "/articles" },
              { label: article.title },
            ]}
          />
          <h1 className="mt-4 text-4xl font-bold">{article.title}</h1>
          <section
            className={`mt-4 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-sm`}
          >
            <article className={`text-neutral-400`}>
              <h3>Written by {article.author}</h3>
            </article>

            <article
              className={`mb-2 group px-2 py-1 relative flex w-fit hover:scale-105 transition-all duration-300 ease-in-out`}
            >
              <p
                className={`text-neutral-400 group-hover:text-white z-10 transition-all duration-300 ease-in-out`}
              >
                {article.categories.length > 0
                  ? article.categories[0]
                  : ` `}
              </p>
              <div
                className={`absolute top-0 left-0 right-full group-hover:right-0 bottom-0 bg-ravenci-primary transition-all duration-300 ease-in-out`}
              ></div>
            </article>
          </section>

          {/* Featured Image */}
          {article.featuredImage && (
            <section className="relative my-6 w-full h-[350px] overflow-hidden">
              <Image
                src={article.featuredImage.src}
                alt={article.featuredImage.alt || article.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover object-center"
                priority
              />
            </section>
          )}

          <div className="prose lg:prose-xl">
            <MDXRemote source={article.content} components={mdxComponents} />
          </div>
        </article>
      </section>
    </main>
  );
}
