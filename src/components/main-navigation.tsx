"use client";

import { useState, useRef, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { IconMenu, IconX } from "@tabler/icons-react";
import { checkOverlappingElements } from "@/lib/general-utils";

export default function MainNavigation() {
  // States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoOnDark, setIsLogoOnDark] = useState(false);
  const [isMenuOnDark, setIsMenuOnDark] = useState(false);
  const [isAtTop, setIsAtTop] = useState(false);

  // Refs
  const logoRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Effects
  useEffect(() => {
    const handleScroll = () => {
      const results = checkOverlappingElements(
        [logoRef, menuButtonRef],
        `content-section`,
        [`bg-ravenci-dark`, `bg-ravenci-primary`],
      );

      setIsLogoOnDark(results[0]);
      setIsMenuOnDark(results[1]);

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsAtTop(scrollTop <= 100);
    };

    handleScroll();
    window.addEventListener(`scroll`, handleScroll);
    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  }, []);

  return (
    <nav
      id={`menu`}
      className={`pl-3 pr-5 md:px-12 ${
        isAtTop ? "py-8" : "py-4"
      } fixed top-0 flex justify-between items-center w-full z-50 transition-all duration-300 ease-in-out`}
    >
      {/* Logo */}
      <Link ref={logoRef} href={`/`} className={`flex items-center gap-1 z-10`}>
        <Image
          src={
            isAtTop
              ? isLogoOnDark
                ? `ravenci-logo.svg`
                : `ravenci-logo-dark.svg`
              : isLogoOnDark
                ? `ravenci-symbol.svg`
                : `ravenci-symbol-dark.svg`
          }
          alt={`Welcome to RAVENCI`}
          width={125}
          height={25}
          priority
        />
      </Link>

      <button
        ref={menuButtonRef}
        type={`button`}
        aria-label={`Open menu`}
        aria-expanded={isMenuOpen}
        aria-controls={`menu`}
        className={`relative w-7 h-7 transition-all duration-300 ease-in-out`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <IconMenu
          className={`absolute top-1/2 -translate-y-1/2 right-0 ${
            isMenuOpen ? `opacity-0` : `opacity-100`
          } ${
            isMenuOnDark ? `text-white` : `text-ravenci-dark`
          } transition-all duration-500 ease-in-out`}
        />

        <IconX
          className={`absolute top-1/2 -translate-y-1/2 right-0 ${
            isMenuOpen ? `opacity-100` : `opacity-0`
          } ${
            isMenuOnDark ? `text-white` : `text-ravenci-dark`
          } transition-all duration-500 ease-in-out`}
        />
      </button>
    </nav>
  );
}
