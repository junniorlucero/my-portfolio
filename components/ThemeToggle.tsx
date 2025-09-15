"use client";

import { useTheme } from "next-themes";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []); //here we run the setMounted function and set it to true, only after the first render.

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-black/10 dark:ring-white/10"
        aria-hidden="true"
        tabIndex={-1}
      >
        <span className="block h-5 w-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-black/10 transition 
            hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20 
            dark:ring-white/10 dark:hover:bg-white/5 dark:focus:ring-white/20
            transition-transform duration-300 ease-out hover:-translate-y-1"
    >
      {" "}
      {/* here we say that on the click of this button, we will set the theme to the opposite of what it is now*/}
      {isDark ? ( //moon portion
        <img
          src="/moon.png"
          alt={`moon logo`}
          className="h-8 w-8 object-contain"
        />
      ) : (
        //sun portion
        <img
          src="/sun.png"
          alt={`sun logo`}
          className="h-8 w-8 object-contain"
        />
      )}
    </button>
  );
}
