export default function Loading() {
  return (
    <main className="flex flex-col">
      <section className="content-section pt-32 pb-24 px-5 sm:px-20 xl:px-36 min-h-[60vh] flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-ravenci-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-neutral-400">Loading...</p>
        </div>
      </section>
    </main>
  );
}
