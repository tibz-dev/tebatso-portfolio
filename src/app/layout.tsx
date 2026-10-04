import type { Metadata } from "next";
import { Toaster } from "sonner";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tebatso Seshayi — .NET Software Engineer",
    template: "%s — Tebatso Seshayi",
  },
  description:
    "South African .NET Software Engineer and Full-Stack Developer building ASP.NET Core APIs, enterprise systems, and modern web applications.",
  metadataBase: new URL("https://tebatsoseshayi.co.za"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tebatso Seshayi — .NET Software Engineer",
    description:
      "ASP.NET Core APIs, enterprise systems, and modern full-stack applications.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tebatso Seshayi — .NET Software Engineer",
    description:
      "ASP.NET Core APIs, enterprise systems, and modern full-stack applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
