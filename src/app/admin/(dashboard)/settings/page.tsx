import { requireUser } from "@/lib/admin-auth";
import { ComingSoon } from "@/components/admin/coming-soon";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  await requireUser();
  return (
    <ComingSoon
      title="Settings"
      blurb="Admin preferences will live here. Account and email settings are managed in PocketBase for now."
    />
  );
}
