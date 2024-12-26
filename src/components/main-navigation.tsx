"use client";

import { useState, useRef, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import { IconHome, IconMail, IconMenu, IconX } from "@tabler/icons-react";
import { checkOverlappingElements } from "@/lib/general-utils";
import { usePathname } from "next/navigation";

export default function MainNavigation() {
  // Hooks
  const pathname = usePathname();

  // States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isLogoOnDark, setIsLogoOnDark] = useState(false);
  const [isMenuOnDark, setIsMenuOnDark] = useState(false);
  const [isAtTop, setIsAtTop] = useState(false);

  // Refs
  const logoRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Functions
  const handleMenuClick = (status: boolean) => {
    if (status) {
      setIsMenuOpen(status);
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        setShowMenu(status);
      }, 100);
    } else {
      setShowMenu(status);
      document.body.style.overflow = "auto";

      setTimeout(() => {
        setIsMenuOpen(status);
      }, 150);
    }
  };

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

  // Effects
  useEffect(() => {
    handleScroll();

    window.addEventListener(`scroll`, handleScroll);
    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  }, [pathname]);

  return (
    <>
      {isMenuOpen && (
        <section
          className={`fixed top-0 ${showMenu ? "right-0 pl-10 md:pl-24" : "right-full pl-0"} left-0 min-h-dvh flex flex-col justify-center items-start gap-y-6 bg-white z-40 transition-all duration-300 ease-in-out`}
        >
          <Link
            href={`/`}
            className={`group relative px-3 py-2 flex flex-row items-center gap-2 rounded-full ${showMenu ? "opacity-100" : "opacity-0"} overflow-hidden transition-all duration-500 ease-in-out`}
            onClick={() => {
              handleMenuClick(false);
            }}
          >
            <div
              className={`absolute top-0 left-0 right-0 bottom-full group-hover:bottom-0 bg-ravenci-dark -z-10 transition-all duration-500 ease-in-out`}
            ></div>
            <IconHome
              className={`min-w-[24px] text-ravenci-dark group-hover:text-white transition-all duration-300 ease-in-out`}
            />
            <span
              className={`px-3 py-1 text-xl group-hover:text-white transition-all duration-300 ease-in-out`}
            >
              Home
            </span>
          </Link>

          <Link
            href={`/launch-your-vision`}
            className={`group relative px-3 py-2 flex flex-row items-center gap-2 rounded-full ${showMenu ? "opacity-100" : "opacity-0"} overflow-hidden transition-all duration-500 ease-in-out`}
            onClick={() => {
              handleMenuClick(false);
            }}
          >
            <div
              className={`absolute top-0 left-0 right-0 bottom-full group-hover:bottom-0 bg-ravenci-dark -z-10 transition-all duration-500 ease-in-out`}
            ></div>
            <IconMail
              className={`min-w-[24px] text-ravenci-dark group-hover:text-white transition-all duration-300 ease-in-out`}
            />
            <span
              className={`px-3 py-1 text-xl group-hover:text-white transition-all duration-300 ease-in-out`}
            >
              Launch Your Vision
            </span>
          </Link>
        </section>
      )}

      <nav
        id={`menu`}
        className={`pointer-events-none pl-3 pr-5 md:px-12 ${
          isAtTop ? "py-8" : "py-4"
        } fixed top-0 flex justify-between items-center w-full z-50 transition-all duration-300 ease-in-out`}
      >
        {/* Logo */}
        <Link
          ref={logoRef}
          href={`/`}
          className={`pointer-events-auto flex items-center gap-1 z-10`}
        >
          <Image
            src={
              isMenuOpen
                ? `ravenci-logo-dark.svg`
                : isAtTop
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
          className={`pointer-events-auto relative w-7 h-7 transition-all duration-300 ease-in-out`}
          onClick={() => handleMenuClick(!isMenuOpen)}
        >
          <IconMenu
            className={`absolute top-1/2 -translate-y-1/2 right-0 ${
              isMenuOpen ? `opacity-0` : `opacity-100`
            } ${
              isMenuOnDark
                ? isMenuOpen
                  ? `text-ravenci-dark`
                  : `text-white`
                : `text-ravenci-dark`
            } transition-all duration-500 ease-in-out`}
          />

          <IconX
            className={`absolute top-1/2 -translate-y-1/2 right-0 ${
              isMenuOpen ? `opacity-100` : `opacity-0`
            } ${
              isMenuOnDark
                ? isMenuOpen
                  ? `text-ravenci-dark`
                  : `text-white`
                : `text-ravenci-dark`
            } transition-all duration-500 ease-in-out`}
          />
        </button>
      </nav>
    </>
  );
}
