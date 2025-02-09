import Link from "next/link";

import Accordion from "@/components/accordion";
import LogosPanel from "@/components/logo-panel";
import TestimonialsSingle from "@/components/testimonials-single";

import { CLIENT_LOGOS } from "@/lib/our-clients";

import Image from "next/image";
import { Route } from "next";
import ServicesShowcase from "@/components/services-showcase";

export default function Home() {
  return (
    <main className={`flex flex-col`}>
      <section
        className={`content-section py-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 gap-6 justify-center min-h-[750px] bg-ravenci-dark`}
      >
        <article
          className={`col-span-12 lg:col-span-8 pb-16 lg:pb-0 flex flex-col justify-center`}
        >
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
            <Link
              href={`/launch-your-vision`}
              className={`group relative px-6 py-3 grid place-content-center bg-white rounded-full text-ravenci-dark hover:text-white transition-all duration-300 ease-in-out`}
            >
              <span className={`z-20`}>Launch Your Vision</span>

              <div
                className={`absolute top-0 bottom-full group-hover:bottom-0 left-0 right-0 bg-ravenci-dark z-0 transition-all duration-500 ease-in-out`}
              ></div>

              {/* Border */}
              <div
                className={`absolute top-0 bottom-0 left-0 right-0 rounded-full border-2 border-white z-10`}
              ></div>
            </Link>

            {/*<button*/}
            {/*  className={`group relative px-6 py-3 rounded-full text-white transition-all duration-300 ease-in-out`}*/}
            {/*>*/}
            {/*  <span className={`z-20`}>Work</span>*/}

            {/*  /!* Border *!/*/}
            {/*  <div*/}
            {/*    className={`absolute top-0 bottom-0 left-0 right-0 rounded-full border-2 border-transparent group-hover:border-white z-10 transition-all duration-500 ease-in-out`}*/}
            {/*  ></div>*/}
            {/*</button>*/}
          </div>
        </article>

        <ServicesShowcase />
      </section>

      {/* Video */}
      <section
        className={`content-section video-container relative h-[750px] bg-white overflow-hidden`}
        style={{
          backgroundColor: `rgba(255,255,255,0)`,
        }}
      >
        <article className={`fixed inset-0 w-full h-[750px] -z-10`}>
          <video
            className={`absolute object-cover w-full h-screen`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={`ravenci-promo.mp4`} type="video/mp4" />
          </video>
        </article>

        <article className={`relative z-10 h-[750px]`}></article>
      </section>

      {/* Client Logos */}
      <LogosPanel
        logos={CLIENT_LOGOS}
        heading={`Some of Our Clients`}
        headingColour={`text-white`}
        headingSide={`bottom`}
        speed={`slow`}
      />

      {/* Services Section */}
      <section
        className={`content-section relative py-32 px-5 sm:px-20 xl:px-36 grid grid-cols-12 min-h-[750px] bg-ravenci-dark text-white`}
      >
        <Image
          className={`absolute -top-[52px] md:-top-[60px] lg:-top-[70px] right-2 md:right-12 scale-50 sm:scale-75 lg:scale-100 z-20`}
          src={`/standing-raven.svg`}
          alt={``}
          width={74}
          height={88}
        />

        <article className={`col-span-12 lg:col-span-6 mb-16 lg:mb-0`}>
          <h3
            className={`max-w-[500px] text-5xl font-light`}
            style={{ lineHeight: "3.75rem" }}
          >
            Empowering growth through stability, scalability, and reliability.
          </h3>

          <div className={`mt-16 mb-24 flex flex-col gap-8 max-w-[500px]`}>
            <p>
              We don't just build websites and apps - we create digital
              foundations that brands can truly rely on. Your success isn't just
              about the initial launch. It's about establishing a presence that
              thrives over time.
            </p>

            <p>
              That's why RAVENCI handles everything from design and development
              to maintenance and hosting, ensuring your website remains robust
              at every stage of its journey.
            </p>
          </div>

          <div className={`mt-16 flex gap-6`}>
            <Link
              href={`/launch-your-vision` as Route}
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
            </Link>
          </div>
        </article>

        <article className={`lg:col-start-8 col-span-12 lg:col-span-5`}>
          <Accordion
            items={[
              {
                title: `Development`,
                content: `<p class="mb-4 text-neutral-100">Strategic Digital Development: Engineering Solutions Built to Last</p>

<p class="text-neutral-100">CMS Development</p>
<p class="mb-4 text-neutral-400/90">Leveraging powerful content management systems like WordPress, Prismic and Strapi, we build flexible platforms that you can easily manage. These solutions combine robust functionality with user-friendly administration, perfect for content-driven websites.</p>

<p class="text-neutral-100">Custom Stack Development</p>
<p class="mb-4 text-neutral-400/90">When projects demand unique solutions, we craft custom applications using modern technologies like React, Node, Laravel and Python. These tailor-made platforms are built to handle your specific business requirements while ensuring scalability.</p>

<p class="text-neutral-100">E-commerce Development</p>
<p class="mb-4 text-neutral-400/90">That's right, we even build e-commerce stores and platforms. From product catalogs to secure payment processing, our e-commerce solutions focus drive sales. Whether it's Shopify, BigCommerce, or even custom platforms, your online store will be optimized for both customers and staff.</p>

<p class="text-neutral-100">API Integration & Development</p>
<p class="mb-4 text-neutral-400/90">Connect your platform with third-party services or create custom APIs to power your applications. We ensure smooth data flow between systems while maintaining security and performance standards.</p>
`,
              },
              {
                title: `Design`,
                content: `<p class="mb-4 text-neutral-100">A Strategic Approach to Digital Development: Building Stable, Scalable, and Reliable Solutions</p><p class="text-neutral-100">Wireframing</p>
<p class="mb-4 text-neutral-400/90">Wireframing is the structural blueprint which shapes how users will interact with your digital platform. This planning stage ensures we build interfaces that serve your needs while delivering intuitive user experiences.</p>
<p class="text-neutral-100">UI Design (User Interface)</p>
<p class="mb-4 text-neutral-400/90">Bringing your wireframes to life is what UI Design is all about. Through carefully crafted visual elements, everything from button styles and color schemes to typography and spacing, our design for your product works together to create a cohesive, engaging interface.</p>
<p class="text-neutral-100">UX Design (User Experience)</p>
<p class="mb-4 text-neutral-400/90">Accompanying UI Design, the UX design focuses on how users navigate and interact with your platform. By mapping user journeys and optimizing flows, we create experiences that feel natural and keep users engaged, leading to better conversion rates and user satisfaction.</p>`,
              },
              // {
              //   title: `Branding`,
              //   content: `Your brand is more than just a logo. It's the complete digital identity that tells your story. I help shape memorable brand experiences that resonate with your audience and stand out in today's crowded digital landscape.`,
              // },
              {
                title: `Maintenance`,
                content: `<p class="mb-4 text-neutral-400/90">Digital platforms need consistent care to stay secure and perform at their best. Our proactive maintenance approach prevents issues before they arise, keeping your digital presence stable and up-to-date.</p><p class="mb-4 text-neutral-400/90">Please note: <span class="text-neutral-100">As of October, 2024</span>, we no longer host websites that are not signed up to reliable ongoing maintenance. This does <span class="font-bold">not</span> have to be through RAVENCI, but it must be from a reputable provider.</p> `,
              },
              {
                title: `Hosting`,
                content: `<p class="mb-4 text-neutral-400/90">Reliable hosting is the foundation of your digital success. It protects your site, serves your customers and contributes to better performance on search engines. This is why we have moved to hosting all of our client's products on secure and scalable cloud hosting.</p><p class="mb-4 text-neutral-400/90">Please note: <span class="text-neutral-100">As of October, 2024</span>, we no longer host websites that are not signed up to reliable ongoing maintenance. This does <span class="font-bold">not</span> have to be through RAVENCI, but it must be from a reputable provider.</p>`,
              },
            ]}
          />
        </article>
      </section>

      {/* Client Logos */}
      <LogosPanel headingColour={`text-white`} speed={`slow`} />

      {/* Scroll Lock Section */}
      <TestimonialsSingle
        testimonial={{
          content:
            "I could not recommend Richard more highly. His knowledge is remarkable, his professionalism exceptional, and the way he completely sorted my issues, quickly, effortlessly was simply brilliant. Champion bloke, brilliant at what he does.",
          author: "Geoff Beisler",
          image: null,
        }}
        extraClassNames={`content-section bg-ravenci-primary`}
      />

      {/* From the Founder */}
      <section
        className={`content-section pt-32 pb-32 px-5 sm:px-20 xl:px-36 flex flex-col justify-center min-h-[750px] bg-white`}
      >
        <blockquote
          className={`flex flex-col gap-10 max-w-[1100px] text-2xl md:text-3xl lg:text-4xl font-normal`}
          style={{
            lineHeight: "3.5rem",
          }}
        >
          <p>
            Throughout 20+ years in digital development, I've mastered more than
            just the skill of building websites and apps.
          </p>

          <p>
            My experience has taught me how to ensure your digital presence
            remains stable, scalable, and reliable well beyond launch day.
          </p>
          <footer className={`border-t border-ravenci-dark`}>
            <cite
              className={`text-base md:text-lg lg:text-xl font-light`}
              style={{
                fontStyle: "normal",
              }}
            >
              - Richard (Founder)
            </cite>
          </footer>
        </blockquote>
      </section>

      <section
        className={`content-section pt-40 pb-48 px-5 sm:px-20 xl:px-36 grid grid-cols-12 bg-neutral-100 text-ravenci-dark`}
      >
        <article className={`mb-16 lg:mb-0 col-span-12 lg:col-span-6`}>
          <h3
            className={`max-w-[500px] text-5xl font-light`}
            style={{ lineHeight: "3.75rem" }}
          >
            Proudly serving clients since 2018.
          </h3>

          <div className={`mt-10 flex flex-col gap-8 max-w-[450px]`}>
            <p>
              It is always a pleasure to serve such a diverse clientele who,
              through the products we build for them, go on to serve others as
              well.
            </p>
          </div>
        </article>

        <article className={`col-span-12 lg:col-span-6 md:px-10`}>
          <section
            className={`flex flex-row flex-wrap border-t border-l border-neutral-200`}
          >
            {(() => {
              const shuffled = [...CLIENT_LOGOS];

              for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
              }

              return shuffled.slice(0, 9);
            })().map(({ title, logo, href }, index) => {
              return (
                <div
                  key={`icon-${title}-${index}`}
                  title={title}
                  className={`px-4 flex justify-center items-center w-1/2 sm:w-1/3 h-24 hover:bg-neutral-200/40 border-b border-r border-neutral-200 transition-all duration-300 ease-in-out`}
                >
                  <img src={logo} alt={title} className={`w-full h-full`} />
                </div>
              );
            })}
          </section>
        </article>
      </section>

      <footer className={`bg-ravenci-dark`}></footer>
    </main>
  );
}
