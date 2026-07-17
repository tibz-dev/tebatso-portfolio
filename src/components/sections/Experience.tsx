"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-signal)] tracking-wide mb-4"
        >
          Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] mb-16"
        >
          What I've built, and where.
        </motion.h2>

        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-[3px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-glass-border)] to-transparent" />

          <div className="space-y-14">
            {EXPERIENCE.map((entry, i) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Timeline dot */}
                <span className="absolute -left-8 top-1.5 w-2 h-2 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-base)]" />

                <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-faint)] tracking-wide mb-2">
                  {entry.period}
                </p>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
                  {entry.role}
                </h3>
                <p className="text-sm text-[var(--color-accent-soft)] mb-3">
                  {entry.organization}
                </p>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                  {entry.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass rounded-full px-3 py-1 text-xs font-[family-name:var(--font-mono)] text-[var(--color-text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}