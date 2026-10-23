import { requireUser } from "@/lib/admin-auth";
import { ArticleEditor } from "@/components/admin/editor/article-editor";

export const dynamic = "force-dynamic";

export default async function NewArticlePage() {
  await requireUser();
  return <ArticleEditor />;
}
