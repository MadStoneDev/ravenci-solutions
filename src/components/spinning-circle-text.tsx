﻿import Link from "next/link";

export default function SpinningCircleText() {
  const size = 112;
  const padding = 10;
  const radius = (size - padding * 2) / 2;
  const center = size / 2;

  const pathD = `
    M ${center},${padding}
    A ${radius},${radius} 0 1 1 ${center},${size - padding}
    A ${radius},${radius} 0 1 1 ${center},${padding}`;

  return (
    <Link
      className={`cursor-pointer fixed bottom-10 right-10 w-32 h-32 rounded-full hover:scale-110 z-50 transition-transform duration-300 ease-in-out`}
      href={`https://calendly.com/ravenci`}
      target="_blank"
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[70%] h-[70%] rounded-full z-10">
        <img
          src={`/ravenci-symbol-avatar.svg`}
          alt="Ravenci Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className={` w-full h-full rounded-full`}>
        <svg
          className={`absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]`}
          viewBox={`0 0 ${size} ${size}`}
        >
          <defs>
            <path id="circle" d={pathD} fill="transparent" />
          </defs>
          <text className="fill-neutral-400 text-[8px] uppercase">
            <textPath
              href="#circle"
              startOffset="0%"
              textLength={Math.floor(Math.PI * radius * 2)}
            >
              Book Now · Free Consultation·&nbsp;
            </textPath>
          </text>
        </svg>
      </div>
    </Link>
  );
}
