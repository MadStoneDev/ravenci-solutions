import LaunchYourVisionStepper from "@/components/launch-your-vision-stepper";

export const metadata = {
  title: "Launch Your Vision - RAVENCI Solutions",
  description:
    "Start your project with RAVENCI Solutions in Brisbane. Two minutes to tell us about your website, e-commerce store, app or branding project — we'll come back with a tailored proposal.",
  alternates: { canonical: "/launch-your-vision" },
};

export default function ContactPage() {
  return (
    <main className={`flex flex-col`}>
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 justify-center bg-white`}
      >
        <article className={`col-span-12 flex flex-col`}>
          <h1
            className={`max-w-[660px] text-4xl md:text-5xl lg:text-h1 font-medium`}
          >
            Launch Your Vision
          </h1>
          <h2
            className={`max-w-2xl text-2xl md:text-3xl lg:text-h2 font-light text-neutral-500`}
          >
            Two minutes. We&apos;ll come back with a tailored proposal.
          </h2>

          <LaunchYourVisionStepper />
        </article>
      </section>
    </main>
  );
}
