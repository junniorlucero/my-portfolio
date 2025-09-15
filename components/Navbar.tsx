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
        {/*left side */}
        <ThemeToggle />

        <div className="flex items-center gap-6">
          {/*right side */}
          <a
            href="#hero"
            className="font-semibold text-sm hover:opacity-80 text-neutral-900 dark:text-neutral-100 transition-transform duration-300 ease-out hover:-translate-y-1"
          >
            Home
          </a>
          <a
            href="#aboutMe"
            className="font-semibold text-sm hover:opacity-80 text-neutral-900 dark:text-neutral-100 transition-transform duration-300 ease-out hover:-translate-y-1"
          >
            About Me
          </a>
          <a
            href="#skills"
            className="font-semibold text-sm hover:opacity-80 text-neutral-900 dark:text-neutral-100 transition-transform duration-300 ease-out hover:-translate-y-1"
          >
            Skills
          </a>
          <a
            href="#experiences"
            className="font-semibold text-sm hover:opacity-80 text-neutral-900 dark:text-neutral-100 transition-transform duration-300 ease-out hover:-translate-y-1"
          >
            Experiences
          </a>
          <a
            href="https://www.linkedin.com/in/junniorlucero/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedin.png"
              alt={`linkedin logo`}
              className="h-10 w-10 hover:opacity-80 text-neutral-900 dark:text-neutral-100 transition-transform duration-300 ease-out hover:-translate-y-1"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
