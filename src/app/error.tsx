"use client";

import Link from "next/link";
import { IconArrowLeft, IconRefresh } from "@tabler/icons-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex flex-col">
      <section className="content-section py-32 px-5 sm:px-20 xl:px-36 flex justify-center min-h-[500px] bg-white">
        <article className="flex flex-col justify-center items-center max-w-sm">
          <h1 className="text-4xl md:text-5xl lg:text-h1 text-center font-medium text-ravenci-dark">
            Oops
          </h1>
          <h2 className="text-2xl text-center">Something went wrong.</h2>
          <p className="mt-10 text-lg text-center text-neutral-500">
            We hit an unexpected issue loading this page. You can try again or
            head back to safety.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <button
              type="button"
              onClick={reset}
              className="group relative pl-2 pr-3 py-1 inline-flex items-center gap-2 w-fit hover:text-white transition-all duration-300 rounded-full"
            >
              <IconRefresh size={18} className="z-10" />
              <span className="z-10">Try Again</span>
              <div className="absolute top-0 right-0 bottom-0 left-full group-hover:left-0 bg-ravenci-primary transition-all duration-300 ease-in-out" />
            </button>
            <Link
              href="/"
              className="group relative pl-2 pr-3 py-1 inline-flex items-center gap-2 w-fit hover:text-white transition-all duration-300 rounded-full"
            >
              <IconArrowLeft size={18} className="z-10" />
              <span className="z-10">Go Home</span>
              <div className="absolute top-0 right-0 bottom-0 left-full group-hover:left-0 bg-ravenci-dark transition-all duration-300 ease-in-out" />
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
