"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {GraduationCap,ExternalLink,ChevronDown,} from "lucide-react";
import {EDUCATION,CERTIFICATIONS,LINKEDIN_CERTIFICATIONS_URL,} from "@/lib/data/credentials";

import { FaLinkedin } from "react-icons/fa";

const INITIAL_COUNT = 6;

export function Credentials() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll
    ? CERTIFICATIONS
    : CERTIFICATIONS.slice(0, INITIAL_COUNT);

  return (
    <section id="education" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        {/* Education */}

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-[family-name:var(--font-mono)] text-sm tracking-wide text-[var(--color-signal)]"
        >
          Education
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-8 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-3xl"
        >
          Formal foundations.
        </motion.h2>

        {EDUCATION.map((entry, i) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            className="glass mb-20 rounded-[var(--radius-glass)] p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/15">
                <GraduationCap
                  size={18}
                  className="text-[var(--color-accent-soft)]"
                />
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-[var(--color-text-primary)]">
                  {entry.degree}
                </h3>

                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {entry.institution} · {entry.location}
                </p>

                <span className="mt-3 inline-block rounded-full bg-[var(--color-signal)]/10 px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-signal)]">
                  {entry.status}
                </span>

                {entry.note && (
                  <p className="mt-3 text-sm text-[var(--color-text-faint)]">
                    {entry.note}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Certifications */}

        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 font-[family-name:var(--font-mono)] text-sm tracking-wide text-[var(--color-signal)]"
            >
              Certifications
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-3xl"
            >
              Always adding one more.
            </motion.h2>
          </div>

          <a
            href={LINKEDIN_CERTIFICATIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[var(--color-text-faint)] transition-colors hover:text-[var(--color-text-muted)]"
          >
            <FaLinkedin size={13} />
            View all on LinkedIn
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: (i % INITIAL_COUNT) * 0.06,
                ease: "easeOut",
              }}
              className="glass flex flex-col rounded-xl p-4"
            >
              <p className="line-clamp-2 text-sm leading-snug text-[var(--color-text-primary)]">
                {cert.title}
              </p>

              <p className="mt-2 text-xs text-[var(--color-text-faint)]">
                {cert.issuer} · {cert.issued}
                {cert.expires ? ` · Expires ${cert.expires}` : ""}
              </p>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--color-accent-soft)] transition-colors hover:text-[var(--color-signal)]"
                >
                  Verify
                  <ExternalLink size={11} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {CERTIFICATIONS.length > INITIAL_COUNT && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll((s) => !s)}
              className="glass flex items-center gap-2 rounded-[var(--radius-pill)] px-5 py-2.5 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              {showAll
                ? "Show fewer"
                : `Show all ${CERTIFICATIONS.length} certifications`}

              <motion.span
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={14} />
              </motion.span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}