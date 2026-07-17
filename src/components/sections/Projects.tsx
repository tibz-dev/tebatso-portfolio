"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data/projects";
import { PROJECT_CATEGORIES } from "@/types";
import type { Project, ProjectCategory } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

type FilterValue = ProjectCategory | "all";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [filter, setFilter] = useState<FilterValue>("all");

  // Only show filter tabs for categories that actually have a project —
  // no point offering "Mobile Apps" as a tab if nothing lives there yet.
  const availableCategories = useMemo(
    () => PROJECT_CATEGORIES.filter((cat) => PROJECTS.some((p) => p.category === cat.id)),
    []
  );

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-signal)] tracking-wide mb-4"
        >
          Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] mb-10"
        >
          Selected work.
        </motion.h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-[var(--radius-pill)] px-4 py-2 text-sm transition-colors ${
              filter === "all"
                ? "bg-[var(--color-accent)] text-white"
                : "glass text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            All ({PROJECTS.length})
          </button>
          {availableCategories.map((cat) => {
            const count = PROJECTS.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`rounded-[var(--radius-pill)] px-4 py-2 text-sm transition-colors ${
                  filter === cat.id
                    ? "bg-[var(--color-accent)] text-white"
                    : "glass text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={() => setActive(project)} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-sm text-[var(--color-text-faint)] py-16">
            Nothing in this category yet.
          </p>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}