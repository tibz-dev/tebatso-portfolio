"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const OBJECTIVES = [
  "Build software that solves real problems",
  "Ship reliable enterprise-grade applications",
  "Deepen my expertise in cloud architecture",
  "Grow into AI engineering through production projects",
  "Build sustainable software products of my own",
  "Contribute meaningfully to open source",
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-signal)] tracking-wide mb-4">
            About
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] leading-tight">
            I care about software that is maintainable behind the UI and useful
            in front of it.
          </h2>

          <div className="mt-8 space-y-5 text-[var(--color-text-muted)] leading-relaxed">
            <p>
              I'm a South African software engineer and full-stack developer,
              currently completing a BSc in Information Technology at
              North-West University. My strongest day-to-day stack is C#,
              ASP.NET Core, Angular, TypeScript, Entity Framework Core, and SQL
              Server.
            </p>
            <p>
              I enjoy backend and application architecture: REST APIs, Clean
              Architecture, CQRS with MediatR, data modelling, migrations,
              service abstractions, and the practical work needed to make
              full-stack features reliable in production.
            </p>
            <p>
              I also build independent products and client applications across
              .NET, Java/Spring Boot, React/Next.js, and desktop development.
              Cloud and AI are areas I'm deliberately growing into through
              projects rather than treating them as titles I've already earned.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-[var(--radius-glass)] p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={16} className="text-[var(--color-accent-soft)]" />
            <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-[var(--color-text-primary)]">
              Where I'm headed
            </h3>
          </div>

          <ul className="space-y-4">
            {OBJECTIVES.map((objective, i) => (
              <motion.li
                key={objective}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]"
              >
                <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-signal)] shrink-0" />
                {objective}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
