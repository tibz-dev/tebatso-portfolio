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

  const availableCategories = useMemo(
    () =>
      PROJECT_CATEGORIES.filter((cat) =>
        PROJECTS.some((project) => project.category === cat.id)
      ),
    []
  );

  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

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
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-text-primary)]"
        >
          Selected work.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 mb-10 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]"
        >
          Engineering systems come first, followed by web applications and
          shipped client work. Open any project for the problem, solution,
          architecture, stack, and next steps.
        </motion.p>

        <div className="flex flex-wrap gap-2 mb-10" aria-label="Project filters">
          <button
            type="button"
            onClick={() => setFilter("all")}
            aria-pressed={filter === "all"}
            className={`rounded-[var(--radius-pill)] px-4 py-2 text-sm transition-colors ${
              filter === "all"
                ? "bg-[var(--color-accent)] text-white"
                : "glass text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
            }`}
          >
            All ({PROJECTS.length})
          </button>

          {availableCategories.map((cat) => {
            const count = PROJECTS.filter(
              (project) => project.category === cat.id
            ).length;

            return (
              <button
                type="button"
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                aria-pressed={filter === cat.id}
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
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={() => setActive(project)}
            />
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
