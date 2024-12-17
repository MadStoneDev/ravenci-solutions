import Image from "next/image";

export default function Home() {
  return (
    <main className={`flex flex-col`}>
      <section
        className={`px-10 sm:px-20 xl:px-36 flex flex-col justify-center min-h-[750px]`}
      >
        <article>
          <h1
            className={`max-w-[500px] lg:max-w-[660px] text-4xl md:text-5xl lg:text-h1 font-medium text-white`}
          >
            Digital Development that simply works.
          </h1>
          <h2
            className={`mt-16 text-2xl md:text-3xl lg:text-h2 font-light text-white`}
          >
            Stable. Scalable. Reliable.
          </h2>

          <div className={`mt-16 flex gap-6`}>
            <button
              className={`group relative px-6 py-3 grid place-content-center bg-white rounded-full text-ravenci-dark hover:text-white transition-all duration-300 ease-in-out`}
            >
              <span className={`z-20`}>Start Creating</span>

              <div
                className={`absolute top-0 bottom-full group-hover:bottom-0 left-0 right-0 bg-ravenci-dark z-0 transition-all duration-500 ease-in-out`}
              ></div>

              {/* Border */}
              <div
                className={`absolute top-0 bottom-0 left-0 right-0 rounded-full border-2 border-white z-10`}
              ></div>
            </button>

            <button
              className={`group relative px-6 py-3 rounded-full text-white transition-all duration-300 ease-in-out`}
            >
              <span className={`z-20`}>Work</span>

              {/* Border */}
              <div
                className={`absolute top-0 bottom-0 left-0 right-0 rounded-full border-2 border-transparent group-hover:border-white z-10 transition-all duration-500 ease-in-out`}
              ></div>
            </button>
          </div>
        </article>
        <article></article>
      </section>
      <section className={`min-h-[750px] bg-white`}>Hero</section>
    </main>
  );
}
