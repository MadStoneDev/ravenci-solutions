import { requireUser } from "@/lib/admin-auth";
import { fetchCategories } from "@/lib/admin-categories";
import { ArticleEditor } from "@/components/admin/editor/article-editor";

export const dynamic = "force-dynamic";

export default async function NewArticlePage() {
  const { pb } = await requireUser();
  const cats = await fetchCategories(pb);
  return <ArticleEditor categorySuggestions={cats.map((c) => c.name)} />;
}
