"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50
                 border-b border-black/10 dark:border-white/10
                 bg-white/50 dark:bg-neutral-900/50 backdrop-blur"
    >
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        {/* left side */}
        <ThemeToggle />

        {/* right side */}
        <div className="flex items-center gap-3 md:gap-6T">
          {/* text links: hidden on small, flex from md+ */}

          <div className="flex items-center gap-3 md:gap-6">
            <a
              href="#hero"
              className="font-semibold text-xs md:text-sm text-neutral-900 dark:text-neutral-100
                         hover:opacity-80 transition-transform duration-300 ease-out md:hover:-translate-y-1"
            >
              Home
            </a>
            <a
              href="#aboutMe"
              className="font-semibold text-xs md:text-sm text-neutral-900 dark:text-neutral-100
                         hover:opacity-80 transition-transform duration-300 ease-out md:hover:-translate-y-1"
            >
              About Me
            </a>
            <a
              href="#skills"
              className="font-semibold text-xs md:text-sm text-neutral-900 dark:text-neutral-100
                         hover:opacity-80 transition-transform duration-300 ease-out md:hover:-translate-y-1"
            >
              Skills
            </a>
            <a
              href="#experiences"
              className="font-semibold text-xs md:text-sm text-neutral-900 dark:text-neutral-100
                         hover:opacity-80 transition-transform duration-300 ease-out md:hover:-translate-y-1"
            >
              Experiences
            </a>
          </div>

          <a
            href="https://www.linkedin.com/in/junniorlucero/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-1 -m-1"
          >
            <img
              src="/linkedin.png"
              alt="linkedin logo"
              className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 shrink-0
                         transition-transform duration-300 ease-out md:hover:-translate-y-1 hover:opacity-80"
            />
          </a>
          <a
            href="https://github.com/junniorlucero"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-1 -m-1"
          >
            <img
              src="/github.png"
              alt="github logo"
              className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 shrink-0
                         transition-transform duration-300 ease-out md:hover:-translate-y-1 hover:opacity-80"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
