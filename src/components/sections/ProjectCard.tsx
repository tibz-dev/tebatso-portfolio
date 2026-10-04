"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { PROJECT_CATEGORIES } from "@/types";
import type { Project } from "@/types";

const CATEGORY_LABELS = Object.fromEntries(
  PROJECT_CATEGORIES.map((c) => [c.id, c.label])
) as Record<Project["category"], string>;

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: () => void;
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.1,
        ease: "easeOut",
      }}
      className="glass group relative overflow-hidden rounded-[var(--radius-glass)]"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View case study for ${project.title}`}
        className="absolute inset-0 z-10 rounded-[var(--radius-glass)] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--color-accent-soft)]"
      >
        <span className="sr-only">View case study for {project.title}</span>
      </button>

      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-signal)]/10">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div className="px-8 text-center">
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-signal)]">
              {CATEGORY_LABELS[project.category]}
            </p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text-primary)]">
              {project.title.split(" — ")[0]}
            </p>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-base)]/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <div className="p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="inline-block text-xs font-[family-name:var(--font-mono)] text-[var(--color-signal)] bg-[var(--color-signal)]/10 rounded-full px-2.5 py-1">
            {CATEGORY_LABELS[project.category]}
          </span>
          {project.status && (
            <span className="inline-block rounded-full border border-[var(--color-glass-border)] px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-faint)]">
              {project.status}
            </span>
          )}
        </div>

        <div className="flex items-start justify-between gap-4">
          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
            {project.title}
          </h3>

          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-[var(--color-text-faint)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-signal)]"
          />
        </div>

        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {project.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-white/[0.04] px-2 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-faint)]"
            >
              {tech}
            </span>
          ))}

          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs text-[var(--color-text-faint)]">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {(project.githubUrl || project.liveUrl) && (
          <div className="relative z-20 mt-5 flex items-center gap-4 border-t border-[var(--color-glass-border)] pt-5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
              >
                <FaGithub size={14} />
                Code
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
              >
                <ExternalLink size={14} />
                Live
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
