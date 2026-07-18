"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FOOTER_NAV, LEGAL_LINKS } from "@/lib/data/footer";
import { SOCIAL_LINKS } from "@/lib/data/contact";

export function Footer() {
  const year = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="relative border-t border-[var(--color-glass-border)] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
              Tebatso Seshayi
            </p>

            <p className="text-sm text-[var(--color-text-faint)] mt-2 max-w-xs">
              Software Engineer building enterprise systems, intelligent digital experiences, scalable cloud applications, and modern software solutions engineered for performance, reliability, and long-term impact.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-10">
            <div>
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-text-faint)] mb-3">
                Navigate
              </p>

              <ul className="space-y-2">
                {FOOTER_NAV.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            {SOCIAL_LINKS.length > 0 && (
              <div>
                <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-text-faint)] mb-3">
                  Connect
                </p>

                <ul className="space-y-2">
                  {SOCIAL_LINKS.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[var(--color-glass-border)]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center sm:justify-start text-xs text-[var(--color-text-faint)]">
            <span>© {year} Tebatso Seshayi. Built by Tebatso Seshayi.</span>

            <span className="hidden sm:inline">·</span>

            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[var(--color-text-muted)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Back to top"
            className="glass flex items-center gap-2 rounded-[var(--radius-pill)] px-4 py-2 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors shrink-0"
          >
            <ArrowUp size={13} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}