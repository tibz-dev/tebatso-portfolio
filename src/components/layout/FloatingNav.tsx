"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "GitHub", href: "/#github" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4"
    >
      <nav
        className={cn(
          "glass mx-auto flex items-center justify-between rounded-[var(--radius-pill)] transition-all duration-500",
          scrolled ? "px-4 py-2" : "px-5 py-2.5"
        )}
      >
        {/* Logo */}
        <a
          href="/#home"
          className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-tight text-[var(--color-text-primary)] shrink-0 mr-2"
        >
          TS
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="whitespace-nowrap px-2.5 py-1.5 rounded-[var(--radius-pill)] text-[13px] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume"
          className="hidden lg:inline-flex items-center whitespace-nowrap rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-4 py-1.5 text-[13px] font-medium text-white hover:bg-[var(--color-accent-soft)] transition-colors ml-2 shrink-0"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden flex flex-col gap-1 p-2 ml-auto"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="w-4 h-px bg-[var(--color-text-primary)]" />
          <span className="w-4 h-px bg-[var(--color-text-primary)]" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass mt-2 rounded-2xl overflow-hidden lg:hidden"
          >
            <ul className="flex flex-col p-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="/resume"
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-[var(--color-accent-soft)]"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}