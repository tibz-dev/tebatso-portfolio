import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tebatso Seshayi — Software Engineer",
  description:
    "Software Engineer & Full Stack Developer building enterprise-grade systems, cloud platforms, and AI-powered software.",
  metadataBase: new URL("https://tebatso.dev"), // update once your domain is live
  openGraph: {
    title: "Tebatso Seshayi — Software Engineer",
    description:
      "Enterprise systems, cloud architecture, and AI-powered software — built with precision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${inter.variable}`}>
      <body>
        <FloatingNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

