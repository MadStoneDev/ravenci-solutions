"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const TECH_LOGOS = [
  {
    title: "Next.Js",
    logo: "/tech/tech-logos-nextjs.svg",
    href: "https://nextjs.org/",
  },
  {
    title: "Supabase",
    logo: "/tech/tech-logos-supabase.svg",
    href: "https://supabase.com/",
  },
  {
    title: "Wordpress",
    logo: "/tech/tech-logos-wordpress.svg",
    href: "https://wordpress.org/",
  },
  {
    title: "Shopify",
    logo: "/tech/tech-logos-shopify.svg",
    href: "https://shopify.com",
  },
  {
    title: "BigCommerce",
    logo: "/tech/tech-logos-bigcommerce.svg",
    href: "https://bigcommerce.com/",
  },
  {
    title: "GitHub",
    logo: "/tech/tech-logos-github.svg",
    href: "https://github.com/",
  },
  {
    title: "Typescript",
    logo: "/tech/tech-logos-typescript.svg",
    href: "https://www.typescriptlang.org/",
  },
  {
    title: "Postman",
    logo: "/tech/tech-logos-postman.svg",
    href: "https://postman.com/",
  },
  {
    title: "NodeJS",
    logo: "/tech/tech-logos-nodejs.svg",
    href: "https://nodejs.org/",
  },
  {
    title: "Docker",
    logo: "/tech/tech-logos-docker.svg",
    href: "https://docker.com/",
  },
  {
    title: "Digital Ocean",
    logo: "/tech/tech-logos-digital-ocean.svg",
    href: "https://digitalocean.com/",
  },
  {
    title: "Vercel",
    logo: "/tech/tech-logos-vercel.svg",
    href: "https://vercel.com/",
  },
  {
    title: "Netlify",
    logo: "/tech/tech-logos-netlify.svg",
    href: "https://netlify.com/",
  },
  {
    title: "Go",
    logo: "/tech/tech-logos-go.svg",
    href: "https://go.dev/",
  },
  // {
  //   title: "Prisma",
  //   logo: "/tech/tech-logos-prisma.svg",
  //   href: "https://prisma.io/",
  // },
  // {
  //   title: "Laravel",
  //   logo: "/tech/tech-logos-laravel.svg",
  //   href: "https://laravel.com/",
  // },
  {
    title: "Python",
    logo: "/tech/tech-logos-python.svg",
    href: "https://python.org/",
  },
  // {
  //   title: "Flutter",
  //   logo: "/tech/tech-logos-flutter.svg",
  //   href: "https://flutter.dev/",
  // },
  // {
  //   title: "Kotlin",
  //   logo: "/tech/tech-logos-kotlin.svg",
  //   href: "https://kotlinlang.org/",
  // },
  {
    title: "Swift",
    logo: "/tech/tech-logos-swift.svg",
    href: "https://developer.apple.com/swift/",
  },
  {
    title: "Unreal Engine",
    logo: "/tech/tech-logos-unreal.svg",
    href: "https://www.unrealengine.com/",
  },
  {
    title: "Unity Engine",
    logo: "/tech/tech-logos-unity.svg",
    href: "https://unity.com/",
  },
  {
    title: "Godot Engine",
    logo: "/tech/tech-logos-godot.svg",
    href: "https://godotengine.org/",
  },
];

interface ClientLogosProps {
  logos: {
    title: string;
    logo: string;
    href: string;
  };
}

interface LogosPanelProps {
  logos?: ClientLogosProps[];
  heading?: string;
  headingColour?: string;
  theme?: string;
  headingSide?: "top" | "bottom";
  speed?: "slow" | "normal" | "fast";
  animated?: boolean;
  scrollable?: boolean;
  mainClassName?: string;
}

export default function LogosPanel({
  logos = TECH_LOGOS,
  heading = "Technologies We use",
  headingColour = "text-white",
  headingSide = "top",
  theme = "bg-ravenci-primary",
  speed = "normal",
  animated = true,
  scrollable = false,
  mainClassName = `content-section`,
}) {
  const [infiniteLogos, setInfiniteLogos] = useState([...logos, ...logos]);

  const speedLookup: { [key: string]: string } = {
    slow: "animate-infinite-scrolling-slow",
    normal: "animate-infinite-scrolling-normal",
    fast: "animate-infinite-scrolling-fast",
  };

  return (
    <section className={`${mainClassName} w-full bg-white z-10`}>
      {headingSide === "top" && (
        <article
          className={`relative -translate-y-1/2 grid place-content-center w-full`}
        >
          <h3
            className={`px-2 pt-2 pb-1 inline ${theme} font-poppins font-medium text-xs ${headingColour} capitalize z-10`}
          >
            {heading}
          </h3>
          <div
            className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[0.3rem] ${theme}`}
          ></div>
        </article>
      )}

      <article
        className={`${
          headingSide === "top" ? "pt-4 pb-8" : "pt-8 pb-4"
        } w-full overflow-hidden`}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, transparent)",
        }}
      >
        <div
          className={`w-max ${
            animated &&
            speedLookup[speed] +
              " [animation-play-state:running] hover:[animation-play-state:paused]"
          }`}
        >
          {infiniteLogos.map(({ title, logo, href }, index) => (
            <Link
              key={`icon-${title}-${index}`}
              href={href}
              title={title}
              target={"_blank"}
              rel={"noreferrer nofollow"}
              className={`inline-block`}
            >
              <img src={logo} alt={title} className={`mx-6 h-12`} />
            </Link>
          ))}
        </div>
      </article>

      {headingSide !== "top" && (
        <article
          className={`relative translate-y-1/2 grid place-content-center w-full`}
        >
          <h3
            className={`px-2 pt-2 pb-1 inline ${theme} font-poppins font-medium text-xs ${headingColour} capitalize z-10`}
          >
            {heading}
          </h3>
          <div
            className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[0.3rem] ${theme}`}
          ></div>
        </article>
      )}
    </section>
  );
}
