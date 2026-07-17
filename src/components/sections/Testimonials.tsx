"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, MessageSquarePlus } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data/testimonial";
import { StarRating } from "@/components/ui/StarRating";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-signal)] tracking-wide mb-4"
            >
              Testimonials
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-text-primary)]"
            >
              What people I've worked with say.
            </motion.h2>
          </div>

          <Link
            href="/testimonials/submit"
            className="glass flex items-center gap-2 rounded-[var(--radius-pill)] px-5 py-2.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors shrink-0"
          >
            <MessageSquarePlus size={15} />
            Leave a testimonial
          </Link>
        </div>

        {TESTIMONIALS.length === 0 ? (
          <div className="glass rounded-[var(--radius-glass)] p-12 text-center">
            <Quote
              size={22}
              className="mx-auto text-[var(--color-text-faint)] mb-4"
            />

            <p className="text-sm text-[var(--color-text-muted)]">
              No testimonials yet — if we've worked together, I'd genuinely
              appreciate a few words.
            </p>

            <Link
              href="/testimonials/submit"
              className="inline-flex items-center gap-2 mt-4 text-sm text-[var(--color-accent-soft)] hover:text-[var(--color-signal)] transition-colors"
            >
              Be the first
              <MessageSquarePlus size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass rounded-[var(--radius-glass)] p-6 flex flex-col"
              >
                <StarRating rating={t.rating} />

                <Quote
                  size={18}
                  className="text-[var(--color-text-faint)] mt-4 mb-2"
                />

                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-[var(--color-glass-border)]">
                  <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-xs font-medium text-[var(--color-accent-soft)] shrink-0">
                    {t.name
                      .split(" ")
                      .map((word) => word[0])
                      .slice(0, 2)
                      .join("")}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-[var(--color-text-primary)] truncate">
                      {t.name}
                    </p>

                    <p className="text-xs text-[var(--color-text-faint)] truncate">
                      {t.role}
                      {t.company ? ` · ${t.company}` : ""}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}