import { requireUser } from "@/lib/admin-auth";
import { ComingSoon } from "@/components/admin/coming-soon";

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
  await requireUser();
  return (
    <ComingSoon
      title="Categories"
      blurb="Manage the list of article categories here. For now, categories are added per-article in the editor's side panel."
    />
  );
}
