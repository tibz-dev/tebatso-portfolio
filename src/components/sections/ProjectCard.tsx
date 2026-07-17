"use client";

import { motion } from "framer-motion";
import {ExternalLink, ArrowUpRight } from "lucide-react";
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

export function ProjectCard({
  project,
  index,
  onOpen,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.1,
        ease: "easeOut",
      }}
      className="glass group cursor-pointer overflow-hidden rounded-[var(--radius-glass)]"
      onClick={onOpen}
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-signal)]/10">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-faint)]">
            Cover image pending
          </span>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-base)]/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <div className="p-6">
        <span className="inline-block mb-3 text-xs font-[family-name:var(--font-mono)] text-[var(--color-signal)] bg-[var(--color-signal)]/10 rounded-full px-2.5 py-1">
          {CATEGORY_LABELS[project.category]}
        </span>
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
          <div className="mt-5 flex items-center gap-4 border-t border-[var(--color-glass-border)] pt-5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
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
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)]"
              >
                <ExternalLink size={14} />
                Live
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}