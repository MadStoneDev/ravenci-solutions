import { requireUser } from "@/lib/admin-auth";
import { ComingSoon } from "@/components/admin/coming-soon";

export const dynamic = "force-dynamic";

export default async function MediaPage() {
  await requireUser();
  return (
    <ComingSoon
      title="Media"
      blurb="A library for images you reuse across articles. For now, add images directly in the editor's featured-image and body blocks."
    />
  );
}
