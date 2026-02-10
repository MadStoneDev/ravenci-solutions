import LaunchYourVisionForm from "@/components/launch-your-vision-form";

export const metadata = {
  title: "Launch Your Vision - RAVENCI Solutions",
  description:
    "Start your project with RAVENCI Solutions in Brisbane. Tell us about your website, app, or branding vision and receive a tailored proposal.",
};

export default function ContactPage() {
  return (
    <main className={`flex flex-col`}>
      <section
        className={`content-section py-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 justify-center min-h-[750px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col justify-center`}>
          <h1
            className={`max-w-[500px] lg:max-w-[660px] text-4xl md:text-5xl lg:text-h1 font-medium`}
          >
            Launch Your Vision
          </h1>
          <h2 className={`text-2xl md:text-3xl lg:text-h2 font-light`}>
            Tell us a little about your awesome idea
          </h2>

          <LaunchYourVisionForm />
        </article>
      </section>
    </main>
  );
}
