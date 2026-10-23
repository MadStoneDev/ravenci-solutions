import { notFound } from "next/navigation";

import { requireUser } from "@/lib/admin-auth";
import { getAdminArticleBySlug } from "@/lib/admin-articles";
import { ArticleEditor } from "@/components/admin/editor/article-editor";

export const dynamic = "force-dynamic";

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { pb } = await requireUser();
  const article = await getAdminArticleBySlug(pb, slug);
  if (!article) notFound();
  return <ArticleEditor initial={article} />;
}
