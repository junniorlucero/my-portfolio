import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Theme from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Junnior Lucero",
  description: "MIS & CS student, aspiring Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased !bg-gradient-to-b from-slate-100 via-slate-200 to-white dark:from-slate-800 dark:via-slate-900 dark:to-black`}
      >
        <Theme>
          <Navbar />
          <main className="pt-14">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
