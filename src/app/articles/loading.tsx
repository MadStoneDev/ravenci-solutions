export default function ArticlesLoading() {
  return (
    <main className="flex flex-col">
      <section className="content-section py-32 px-5 sm:px-20 xl:px-36 bg-white">
        <div className="mb-12">
          <div className="h-10 w-64 bg-neutral-200 rounded animate-pulse" />
          <div className="mt-4 h-6 w-96 max-w-full bg-neutral-100 rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div
                className="w-full bg-neutral-200 rounded animate-pulse"
                style={{ aspectRatio: "5/6" }}
              />
              <div className="h-4 w-20 bg-neutral-100 rounded animate-pulse" />
              <div className="h-5 w-full bg-neutral-200 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
