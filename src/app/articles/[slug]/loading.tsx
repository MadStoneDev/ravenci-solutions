export default function ArticleLoading() {
  return (
    <main className="flex flex-col">
      <section className="content-section py-32 px-5 sm:px-20 xl:px-36 flex justify-center bg-white">
        <article className="flex flex-col max-w-3xl w-full">
          <div className="h-4 w-32 bg-neutral-100 rounded animate-pulse" />
          <div className="mt-4 h-10 w-full bg-neutral-200 rounded animate-pulse" />
          <div className="mt-4 flex justify-between">
            <div className="h-4 w-40 bg-neutral-100 rounded animate-pulse" />
            <div className="h-4 w-24 bg-neutral-100 rounded animate-pulse" />
          </div>
          <div
            className="mt-6 w-full bg-neutral-200 rounded animate-pulse"
            style={{ height: 350 }}
          />
          <div className="mt-8 space-y-4">
            <div className="h-4 w-full bg-neutral-100 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-neutral-100 rounded animate-pulse" />
            <div className="h-4 w-4/6 bg-neutral-100 rounded animate-pulse" />
            <div className="h-4 w-full bg-neutral-100 rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-neutral-100 rounded animate-pulse" />
          </div>
        </article>
      </section>
    </main>
  );
}
