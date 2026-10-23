import { requireUser } from "@/lib/admin-auth";
import { fetchMedia } from "@/lib/admin-media";
import { MediaLibrary } from "@/components/admin/media-library";

export const dynamic = "force-dynamic";

export default async function MediaPage() {
  const { pb } = await requireUser();
  const items = await fetchMedia(pb);

  return (
    <div className="flex flex-col gap-7 p-6 md:p-10">
      <header className="flex flex-col gap-1">
        <span className="font-mono text-label text-muted-foreground">
          Library
        </span>
        <h1 className="text-display-m text-foreground">Media</h1>
        <p className="text-small text-muted-foreground">
          Reusable images. Upload here, then insert them into articles from the
          editor.
        </p>
      </header>
      <MediaLibrary initialItems={items} />
    </div>
  );
}
