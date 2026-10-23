export function ComingSoon({
  title,
  blurb,
}: {
  title: string;
  blurb: string;
}) {
  return (
    <div className="flex flex-col gap-7 p-6 md:p-10">
      <header className="flex flex-col gap-1">
        <span className="font-mono text-label text-muted-foreground">Admin</span>
        <h1 className="text-display-m text-foreground">{title}</h1>
      </header>
      <div className="rounded-sm border border-dashed border-border bg-card p-10 text-center">
        <p className="text-body text-muted-foreground">{blurb}</p>
        <p className="mt-2 font-mono text-label-sm text-muted-foreground">
          Coming soon
        </p>
      </div>
    </div>
  );
}
