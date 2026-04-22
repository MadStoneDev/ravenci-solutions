import Image from "next/image";
import Link from "next/link";

interface Platform {
  name: string;
  category: string;
  logo?: string;
  href: string;
}

const PLATFORMS: Platform[] = [
  {
    name: "WordPress",
    category: "Content CMS",
    logo: "/tech/tech-logos-wordpress.svg",
    href: "/web-development",
  },
  {
    name: "Shopify",
    category: "E-commerce",
    logo: "/tech/tech-logos-shopify.svg",
    href: "/web-development",
  },
  {
    name: "Custom Next.js",
    category: "Custom Build",
    logo: "/tech/tech-logos-nextjs.svg",
    href: "/web-development",
  },
  {
    name: "Webflow",
    category: "Visual Site Builder",
    logo: "/tech/tech-logos-webflow.svg",
    href: "/web-development",
  },
  {
    name: "Framer",
    category: "Design-Led Sites",
    logo: "/tech/tech-logos-framer.svg",
    href: "/web-development",
  },
  {
    name: "Sanity",
    category: "Headless CMS",
    logo: "/tech/tech-logos-sanity.svg",
    href: "/web-development",
  },
];

export default function PlatformsSection() {
  return (
    <section className="content-section py-24 lg:py-32 px-5 sm:px-20 xl:px-36 bg-white">
      <div className="grid grid-cols-12 gap-8 mb-14 lg:mb-20">
        <article className="col-span-12 lg:col-span-7">
          <p className="mb-4 text-xs font-medium tracking-widest uppercase text-ravenci-primary">
            Platforms we build on
          </p>
          <h3
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-ravenci-dark"
            style={{ lineHeight: "1.05" }}
          >
            Right tool for the business,{" "}
            <span className="font-serif italic font-normal text-ravenci-primary">
              not the agency.
            </span>
          </h3>
        </article>
        <article className="col-span-12 lg:col-span-5 lg:pl-8 lg:pt-2">
          <p className="text-base md:text-lg text-neutral-500/80 leading-relaxed">
            We&apos;re not platform purists. After 20 years in the industry,
            we&apos;ve learned that the best platform is the one that fits your
            goals, your team, and your budget — then gets built well. We also
            build on BigCommerce, Strapi, Plasmic and Astro when the project
            calls for them.
          </p>
        </article>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-neutral-200/70 border border-neutral-200/70">
        {PLATFORMS.map((platform) => (
          <Link
            key={platform.name}
            href={platform.href}
            className="bg-white p-6 md:p-8 flex flex-col items-center justify-center gap-4 min-h-[180px] hover:bg-neutral-50 transition-colors duration-300 group"
          >
            <div className="h-14 flex items-center justify-center">
              {platform.logo ? (
                <Image
                  src={platform.logo}
                  alt={platform.name}
                  width={140}
                  height={56}
                  className="max-h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <span className="font-sans text-2xl font-bold tracking-tight text-ravenci-dark group-hover:text-ravenci-primary transition-colors duration-300">
                  {platform.name}
                </span>
              )}
            </div>
            <div className="text-center">
              {platform.logo && (
                <p className="font-medium text-sm text-ravenci-dark">
                  {platform.name}
                </p>
              )}
              <p className="text-xs text-neutral-500 mt-1 tracking-wide uppercase">
                {platform.category}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-neutral-500">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-ravenci-primary"></span>
          Shopify Partner
        </span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-ravenci-primary"></span>
          BigCommerce Partner
        </span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-ravenci-primary"></span>
          Synergy Wholesale Partner
        </span>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/launch-your-vision"
          className="inline-block text-sm text-ravenci-primary hover:underline"
        >
          Not sure which platform fits your business? Let&apos;s talk →
        </Link>
      </div>
    </section>
  );
}
