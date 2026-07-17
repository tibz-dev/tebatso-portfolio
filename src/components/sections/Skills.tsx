"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { SKILLS, SOFT_SKILLS } from "@/lib/data/skills";
import { SKILL_ICONS } from "@/lib/data/skill-icons";

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-signal)] tracking-wide mb-4"
        >
          Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] mb-16"
        >
          The stack behind the systems.
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-[var(--radius-glass)] p-6 hover:bg-white/[0.08] transition-colors"
            >
              <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-accent-soft)] mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => {
                  const Icon = SKILL_ICONS[item] ?? Code2;
                  return (
                    <span
                      key={item}
                      className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] bg-white/[0.04] rounded-md px-2.5 py-1"
                    >
                      <Icon size={13} className="text-[var(--color-text-faint)] shrink-0" />
                      {item}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 pt-8 border-t border-[var(--color-glass-border)]"
        >
          <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-text-faint)] mb-4">
            Also brings to the table
          </h3>
          <div className="flex flex-wrap gap-2">
            {SOFT_SKILLS.map((skill) => (
              <span
                key={skill}
                className="text-xs text-[var(--color-text-faint)] px-3 py-1 rounded-full border border-[var(--color-glass-border)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}