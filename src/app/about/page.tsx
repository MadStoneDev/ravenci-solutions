import Link from "next/link";
import {
  IconCircleCheckFilled,
  IconUser,
} from "@tabler/icons-react";

export const metadata = {
  title: "About - RAVENCI Solutions",
  description:
    "Meet the team behind RAVENCI Solutions. 20+ years of digital experience, an engineering mindset, and a commitment to transparency — building websites that perform for Australian businesses.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Transparency",
      description:
        "No jargon, no hidden fees. We explain everything in plain English and keep you informed at every stage of the process.",
    },
    {
      title: "Client Ownership",
      description:
        "You own what you pay for — your website, your content, your domain. No lock-in contracts, no proprietary traps.",
    },
    {
      title: "Education",
      description:
        "Every project comes with tailored video tutorials and full access post-launch, so you're never left guessing how to manage your own site.",
    },
    {
      title: "Integrity",
      description:
        "Honest timelines, honest pricing. If something isn't right for your business, we'll tell you — even if it means recommending a different approach.",
    },
  ];

  return (
    <main className={`flex flex-col`}>
      {/* Section 1: Hero */}
      <section
        className={`content-section pt-32 pb-24 md:pb-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[250px] bg-white`}
      >
        <article className={`col-span-12 flex flex-col`}>
          <h1 className={`text-4xl md:text-5xl lg:text-h1 font-medium`}>
            Built by an Engineer. Designed to Perform.
          </h1>
          <h2
            className={`max-w-4xl text-2xl md:text-3xl lg:text-h2 font-light`}
          >
            A different approach to web development — where structure meets
            creativity
          </h2>
        </article>
      </section>

      {/* Section 2: Stats Bar */}
      <section
        className={`content-section py-12 px-5 sm:px-20 xl:px-36 bg-ravenci-primary text-white`}
      >
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center`}
        >
          <div>
            <p className={`text-4xl md:text-5xl font-bold`}>20+</p>
            <p className={`mt-2 text-sm text-white/80 font-light`}>
              Years in Digital
            </p>
          </div>
          <div>
            <p className={`text-4xl md:text-5xl font-bold`}>25+</p>
            <p className={`mt-2 text-sm text-white/80 font-light`}>
              Australian Businesses Served
            </p>
          </div>
          <div>
            <p className={`text-4xl md:text-5xl font-bold`}>18+</p>
            <p className={`mt-2 text-sm text-white/80 font-light`}>
              Years with WordPress
            </p>
          </div>
          <div>
            <p className={`text-4xl md:text-5xl font-bold`}>85+</p>
            <p className={`mt-2 text-sm text-white/80 font-light`}>
              PageSpeed Guaranteed
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The Story — Two Column */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 bg-white`}>
        {/* Left: Photo Placeholder */}
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 flex items-center justify-center bg-neutral-200/50`}
        >
          <div
            className={`w-full max-w-sm aspect-[3/4] bg-neutral-300/50 rounded-lg flex flex-col items-center justify-center gap-4`}
          >
            <IconUser size={64} className={`text-neutral-400/60`} />
            <p className={`text-sm text-neutral-400/80 font-light`}>
              Richard Stone
            </p>
            <p className={`text-xs text-neutral-400/60 font-light`}>
              Founder, RAVENCI Solutions
            </p>
          </div>
        </section>

        {/* Right: The Story */}
        <section
          className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-white`}
        >
          <article className={`max-w-lg`}>
            <h3 className={`mb-8 font-serif text-h3 font-bold`}>
              The Story Behind RAVENCI
            </h3>
            <div className={`space-y-4 text-neutral-500/80`}>
              <p>
                RAVENCI was founded by Richard Stone — a structural engineer
                turned web developer with a multicultural upbringing that
                spans South Africa, Israel, and Australia.
              </p>
              <p>
                With a degree in Structural Engineering and a diploma in
                Graphic Design, Richard brings a rare combination of
                analytical precision and creative thinking to every project.
                That engineering mindset — where every element must serve a
                purpose and nothing is left to chance — shapes how we approach
                web development.
              </p>
              <p>
                After more than two decades in the digital space, Richard
                founded RAVENCI in Brisbane to offer Australian businesses
                something different: websites built with the rigour of
                engineering and the polish of professional design.
              </p>
              <p>
                Today, RAVENCI operates as a founder-led studio backed by a
                network of specialist collaborators. This means you get the
                accountability and personal attention of working directly with
                the founder, combined with access to specialist expertise when
                your project requires it.
              </p>
            </div>
          </article>
        </section>
      </div>

      {/* Section 4: What Makes Us Different */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-ravenci-dark`}
      >
        <article className={`max-w-3xl mx-auto`}>
          <h3
            className={`mb-8 font-serif text-h3 font-bold text-white`}
          >
            What Makes Us Different
          </h3>
          <div className={`space-y-6 text-neutral-400/90`}>
            <p>
              Most web developers come from a purely technical or creative
              background. Richard's structural engineering career taught him
              something that translates directly to web development: every
              decision must be intentional, every structure must be sound, and
              the final product must perform under real-world conditions.
            </p>
            <p>
              That's why RAVENCI websites aren't just attractive — they're
              built to a standard. We guarantee 85+ Google PageSpeed scores
              because we believe performance isn't optional. We build on
              proven platforms and follow best practices because we've seen
              what happens when shortcuts are taken.
            </p>

            <h4 className={`mt-10 mb-4 font-serif text-lg font-bold text-white`}>
              The Qualifications Behind the Work
            </h4>
            <ul className={`flex flex-col gap-3`}>
              <li className={`flex items-start gap-2`}>
                <IconCircleCheckFilled
                  className="text-ravenci-primary flex-shrink-0 mt-0.5"
                  size={20}
                />
                <span>
                  <span className={`font-bold text-white`}>
                    Structural Engineering Degree
                  </span>{" "}
                  — analytical thinking and precision built into every project
                </span>
              </li>
              <li className={`flex items-start gap-2`}>
                <IconCircleCheckFilled
                  className="text-ravenci-primary flex-shrink-0 mt-0.5"
                  size={20}
                />
                <span>
                  <span className={`font-bold text-white`}>
                    Graphic Design Diploma
                  </span>{" "}
                  — professional visual design, not just functional layouts
                </span>
              </li>
              <li className={`flex items-start gap-2`}>
                <IconCircleCheckFilled
                  className="text-ravenci-primary flex-shrink-0 mt-0.5"
                  size={20}
                />
                <span>
                  <span className={`font-bold text-white`}>
                    20+ Years Digital Experience
                  </span>{" "}
                  — across construction, trades, medical, legal, and retail
                  industries
                </span>
              </li>
            </ul>

            <h4 className={`mt-10 mb-4 font-serif text-lg font-bold text-white`}>
              You Own Everything
            </h4>
            <p>
              When we build your website, it's yours. Your code, your
              content, your domain — no lock-in contracts, no proprietary
              systems that hold your business hostage. If you ever want to
              move on, you take everything with you.
            </p>

            <h4 className={`mt-10 mb-4 font-serif text-lg font-bold text-white`}>
              We Teach You, Too
            </h4>
            <p>
              Every project includes tailored video tutorials showing you
              exactly how to manage your website. We don't believe in
              creating dependency — we want you to feel confident making
              updates, adding content, and running your site on your own
              terms.
            </p>

            <h4 className={`mt-10 mb-4 font-serif text-lg font-bold text-white`}>
              Specialist Network
            </h4>
            <p>
              As a founder-led studio, we keep things lean — but never at
              the cost of quality. When your project needs specialist
              photography, copywriting, or advanced functionality, we bring
              in trusted collaborators who meet our standards.
            </p>
          </div>
        </article>
      </section>

      {/* Section 5: Values */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 bg-neutral-200/50`}
      >
        <h3
          className={`mb-12 font-serif text-h3 font-bold text-center`}
        >
          What We Stand For
        </h3>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto`}
        >
          {values.map((value, index) => (
            <div
              key={index}
              className={`p-6 bg-white rounded-lg`}
            >
              <div className={`flex items-center gap-2 mb-3`}>
                <IconCircleCheckFilled
                  className="text-ravenci-primary flex-shrink-0"
                  size={24}
                />
                <h4 className={`font-bold text-ravenci-dark text-lg`}>
                  {value.title}
                </h4>
              </div>
              <p className={`text-neutral-500/80`}>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: CTA */}
      <section
        className={`content-section py-16 px-5 sm:px-20 xl:px-36 flex flex-col items-center gap-6 bg-ravenci-primary text-white text-center`}
      >
        <h3 className={`font-serif text-2xl md:text-3xl font-bold`}>
          Ready to Work With Us?
        </h3>
        <p className={`max-w-lg text-white/80 font-light`}>
          Whether you're starting from scratch or need a website that
          actually performs, we'd love to hear about your project.
        </p>
        <Link
          href={`/launch-your-vision`}
          className={`group relative px-8 py-3 grid place-content-center bg-white rounded-full text-ravenci-dark hover:text-white transition-all duration-300 ease-in-out`}
        >
          <span className={`z-20 font-medium`}>Launch Your Vision</span>
          <div
            className={`absolute top-0 bottom-full group-hover:bottom-0 left-0 right-0 bg-ravenci-dark z-0 transition-all duration-500 ease-in-out`}
          ></div>
          <div
            className={`absolute top-0 bottom-0 left-0 right-0 rounded-full border-2 border-white z-10`}
          ></div>
        </Link>
      </section>

      {/* Section 7: Spacer */}
      <section
        className={`content-section py-20 px-5 sm:px-20 xl:px-36 grid grid-cols-5 gap-10 min-h-[150px] bg-white`}
      ></section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About RAVENCI Solutions",
            description:
              "Meet the team behind RAVENCI Solutions. 20+ years of digital experience, an engineering mindset, and a commitment to transparency.",
            mainEntity: {
              "@type": "Organization",
              name: "RAVENCI Solutions",
              founder: {
                "@type": "Person",
                name: "Richard Stone",
                jobTitle: "Founder",
              },
              foundingLocation: {
                "@type": "Place",
                name: "Brisbane, Australia",
              },
              areaServed: "Australia",
              description:
                "A founder-led web development studio building high-performance websites for Australian businesses.",
            },
          }),
        }}
      />
    </main>
  );
}
