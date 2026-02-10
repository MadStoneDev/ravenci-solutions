"use client";

import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <main className={`flex flex-col`}>
      <section
        className={`content-section py-32 px-5 sm:px-20 xl:px-36 grid gap-6 justify-center min-h-[500px] bg-white`}
      >
        <article
          className={`pb-16 lg:pb-0 flex flex-col justify-center items-center max-w-sm`}
        >
          <h1
            className={`max-w-[500px] lg:max-w-[660px] text-4xl md:text-5xl lg:text-h1 text-center font-medium text-ravenci-dark`}
          >
            404
          </h1>
          <h2 className={`text-2xl text-center`}>Ok, that's embarrassing.</h2>
          <p className={`mt-10 text-lg text-center`}>
            We have no idea how you got here but let's get you back to where you
            were last!
          </p>
          <button
            type="button"
            className={`group relative mt-10 pl-2 pr-3 py-1 inline-flex items-center gap-2 w-fit hover:text-white transition-all duration-300 rounded-full`}
            onClick={() => window.history.back()}
          >
            <IconArrowLeft size={18} className={`z-10`} />
            <span className={`z-10`}>Go Back</span>

            <div
              className={`absolute top-0 right-0 bottom-0 left-full group-hover:left-0 bg-ravenci-primary transition-all duration-300 ease-in-out`}
            />
          </button>
        </article>
      </section>
    </main>
  );
}
