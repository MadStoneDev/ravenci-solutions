"use client";

import { useRouter } from "next/navigation";

export default function PriceButton({
  mode = "dark",
  link = "/launch-your-vision",
  price = 29,
  includeFrom = true,
  fromText = "from",
  frequency = "mo.",
  callToAction = "Only pay for what you need",
  subCallToAction = "Get in touch for a tailored quote",
  className = "",
}: {
  mode?: "dark" | "light";
  link?: string;
  price: number;
  includeFrom?: boolean;
  fromText?: string;
  frequency: string;
  callToAction?: string;
  subCallToAction?: string;
  className?: string;
}) {
  // Hooks
  const router = useRouter();

  return (
    <article
      className={`group cursor-pointer mt-12 flex items-stretch max-w-lg border border-neutral-200/50 hover:border-white hover:bg-white hover:scale-105 rounded-xl overflow-hidden transition-all duration-300 ease-in-out ${className}`}
      onClick={() => router.push(link)}
    >
      <div
        className={`p-4 flex-shrink-0 flex flex-col justify-center bg-white`}
      >
        {includeFrom && (
          <p
            className={`text-xs text-neutral-500/80 transition-all duration-300 ease-in-out`}
          >
            {fromText || "from"}
          </p>
        )}
        <p className={`text-4xl font-bold text-ravenci-primary`}>
          ${price}
          <span
            className={`text-lg text-neutral-700 transition-all duration-300 ease-in-out`}
          >
            {frequency && "/"}
            {frequency}
          </span>
        </p>
      </div>

      <div
        className={`p-4 flex-grow flex flex-col items-center justify-center`}
      >
        <p
          className={`font-bold text-lg text-white group-hover:text-ravenci-dark text-center uppercase transition-all duration-300 ease-in-out`}
          style={{
            lineHeight: "1.2em",
          }}
        >
          {callToAction}
        </p>
        <p
          className={`text-sm text-white/60 group-hover:text-ravenci-dark/50 text-center transition-all duration-300 ease-in-out`}
        >
          {subCallToAction}
        </p>
      </div>
    </article>
  );
}
