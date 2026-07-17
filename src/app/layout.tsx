import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tebatso Seshayi — Software Engineer",
  description:
    "Software Engineer & Full Stack Developer building enterprise-grade systems, cloud platforms, and AI-powered software.",
  metadataBase: new URL("https://tebatsoseshayi.co.za"),
  openGraph: {
    title: "Tebatso Seshayi — Software Engineer",
    description:
      "Enterprise systems, cloud architecture, and AI-powered software — built with precision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${inter.variable}`}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--color-accent)] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>

        <FloatingNav />

        <main id="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}