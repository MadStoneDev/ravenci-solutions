import { notFound } from "next/navigation";

import { requireUser } from "@/lib/admin-auth";
import { getAdminArticleBySlug } from "@/lib/admin-articles";
import { fetchCategories } from "@/lib/admin-categories";
import { ArticleEditor } from "@/components/admin/editor/article-editor";

export const dynamic = "force-dynamic";

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { pb } = await requireUser();
  const [article, cats] = await Promise.all([
    getAdminArticleBySlug(pb, slug),
    fetchCategories(pb),
  ]);
  if (!article) notFound();
  return (
    <ArticleEditor
      initial={article}
      categorySuggestions={cats.map((c) => c.name)}
    />
  );
}
