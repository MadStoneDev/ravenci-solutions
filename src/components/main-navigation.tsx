"use client";

import { useState, useRef, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import {
  IconCloudComputing,
  IconHammer,
  IconHome,
  IconMail,
  IconMenu,
  IconNews,
  IconPalette,
  IconTerminal2,
  IconX,
} from "@tabler/icons-react";
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

      setTimeout(() => {
        setShowMenu(status);
      }, 100);
    } else {
      setShowMenu(status);

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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen && (
        <section
          className={`fixed py-20 top-0 ${
            showMenu ? "right-0 px-10 md:px-24" : "right-full pl-0"
          } left-0 h-dvh bg-white z-40 overflow-y-auto transition-all duration-300 ease-in-out`}
        >
          <article
            className={`flex flex-col justify-center items-start gap-y-6 min-h-full`}
          >
            <Link
              href={`/`}
              className={`group relative px-3 py-2 flex flex-row items-center gap-2 rounded-full ${
                showMenu ? "opacity-100" : "opacity-0"
              } overflow-hidden transition-all duration-500 ease-in-out`}
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
              href={`/articles`}
              className={`group relative px-3 py-2 flex flex-row items-center gap-2 rounded-full ${
                showMenu ? "opacity-100" : "opacity-0"
              } overflow-hidden transition-all duration-500 ease-in-out`}
              onClick={() => {
                handleMenuClick(false);
              }}
            >
              <div
                className={`absolute top-0 left-0 right-0 bottom-full group-hover:bottom-0 bg-ravenci-dark -z-10 transition-all duration-500 ease-in-out`}
              ></div>
              <IconNews
                className={`min-w-[24px] text-ravenci-dark group-hover:text-white transition-all duration-300 ease-in-out`}
              />
              <span
                className={`px-3 py-1 text-xl group-hover:text-white transition-all duration-300 ease-in-out`}
              >
                Articles
              </span>
            </Link>

            <Link
              href={`/web-development`}
              className={`group relative px-3 py-2 flex flex-row items-center gap-2 rounded-full ${
                showMenu ? "opacity-100" : "opacity-0"
              } overflow-hidden transition-all duration-500 ease-in-out`}
              onClick={() => {
                handleMenuClick(false);
              }}
            >
              <div
                className={`absolute top-0 left-0 right-0 bottom-full group-hover:bottom-0 bg-ravenci-dark -z-10 transition-all duration-500 ease-in-out`}
              ></div>
              <IconTerminal2
                className={`min-w-[24px] text-ravenci-dark group-hover:text-white transition-all duration-300 ease-in-out`}
              />
              <span
                className={`px-3 py-1 text-xl group-hover:text-white transition-all duration-300 ease-in-out`}
              >
                Web Development
              </span>
            </Link>

            <Link
              href={`/business-design`}
              className={`group relative px-3 py-2 flex flex-row items-center gap-2 rounded-full ${
                showMenu ? "opacity-100" : "opacity-0"
              } overflow-hidden transition-all duration-500 ease-in-out`}
              onClick={() => {
                handleMenuClick(false);
              }}
            >
              <div
                className={`absolute top-0 left-0 right-0 bottom-full group-hover:bottom-0 bg-ravenci-dark -z-10 transition-all duration-500 ease-in-out`}
              ></div>
              <IconPalette
                className={`min-w-[24px] text-ravenci-dark group-hover:text-white transition-all duration-300 ease-in-out`}
              />
              <span
                className={`px-3 py-1 text-xl group-hover:text-white transition-all duration-300 ease-in-out`}
              >
                Business Design
              </span>
            </Link>

            <Link
              href={`/website-maintenance`}
              className={`group relative px-3 py-2 flex flex-row items-center gap-2 rounded-full ${
                showMenu ? "opacity-100" : "opacity-0"
              } overflow-hidden transition-all duration-500 ease-in-out`}
              onClick={() => {
                handleMenuClick(false);
              }}
            >
              <div
                className={`absolute top-0 left-0 right-0 bottom-full group-hover:bottom-0 bg-ravenci-dark -z-10 transition-all duration-500 ease-in-out`}
              ></div>
              <IconHammer
                className={`min-w-[24px] text-ravenci-dark group-hover:text-white transition-all duration-300 ease-in-out`}
              />
              <span
                className={`px-3 py-1 text-xl group-hover:text-white transition-all duration-300 ease-in-out`}
              >
                Website Maintenance
              </span>
            </Link>

            <Link
              href={`/web-hosting`}
              className={`group relative px-3 py-2 flex flex-row items-center gap-2 rounded-full ${
                showMenu ? "opacity-100" : "opacity-0"
              } overflow-hidden transition-all duration-500 ease-in-out`}
              onClick={() => {
                handleMenuClick(false);
              }}
            >
              <div
                className={`absolute top-0 left-0 right-0 bottom-full group-hover:bottom-0 bg-ravenci-dark -z-10 transition-all duration-500 ease-in-out`}
              ></div>
              <IconCloudComputing
                className={`min-w-[24px] text-ravenci-dark group-hover:text-white transition-all duration-300 ease-in-out`}
              />
              <span
                className={`px-3 py-1 text-xl group-hover:text-white transition-all duration-300 ease-in-out`}
              >
                Web Hosting
              </span>
            </Link>

            <Link
              href={`/launch-your-vision`}
              className={`group relative px-3 py-2 flex flex-row items-center gap-2 rounded-full ${
                showMenu ? "opacity-100" : "opacity-0"
              } overflow-hidden transition-all duration-500 ease-in-out`}
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
          </article>
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
                ? `/ravenci-logo-dark.svg`
                : isAtTop
                  ? isLogoOnDark
                    ? `/ravenci-logo.svg`
                    : `/ravenci-logo-dark.svg`
                  : isLogoOnDark
                    ? `/ravenci-symbol.svg`
                    : `/ravenci-symbol-dark.svg`
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
