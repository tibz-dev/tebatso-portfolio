"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X,ExternalLink } from "lucide-react";
import { FaGithub} from "react-icons/fa";
import type { ReactNode } from "react";
import type { Project } from "@/types";

function ModalSection({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-accent-soft)]">
        {label}
      </h4>
      {children}
    </div>
  );
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="glass fixed inset-4 z-[70] overflow-y-auto rounded-[var(--radius-glass)] md:inset-x-[10%] md:inset-y-[6%]"
          >
            <div className="sticky top-0 z-10 flex justify-end bg-[var(--color-base)]/60 p-4 backdrop-blur-md">
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="glass rounded-full p-2 transition-colors hover:bg-white/10"
              >
                <X size={16} />
              </button>
            </div>

            <div className="-mt-8 mx-auto max-w-3xl space-y-10 px-6 pb-16 md:px-12">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text-primary)] md:text-3xl">
                  {project.title}
                </h2>

                <p className="mt-2 text-[var(--color-text-muted)]">
                  {project.tagline}
                </p>

                <div className="mt-5 flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-[var(--color-text-primary)] transition-colors hover:bg-white/10"
                    >
                      <FaGithub size={14} />
                      View Code
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-accent-soft)]"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <ModalSection label="Overview">
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {project.overview}
                </p>
              </ModalSection>

              <div className="grid gap-8 md:grid-cols-2">
                <ModalSection label="Problem">
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {project.problem}
                  </p>
                </ModalSection>

                <ModalSection label="Solution">
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {project.solution}
                  </p>
                </ModalSection>
              </div>

              <ModalSection label="Architecture">
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {project.architecture}
                </p>
              </ModalSection>

              <ModalSection label="Technologies">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/[0.04] px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </ModalSection>

              <ModalSection label="Key Features">
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-signal)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </ModalSection>

              {project.gallery && project.gallery.length > 0 && (
                <ModalSection label="Gallery">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.gallery.map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt={`${project.title} screenshot`}
                        className="w-full rounded-xl"
                      />
                    ))}
                  </div>
                </ModalSection>
              )}

              {project.futureImprovements.length > 0 && (
                <ModalSection label="Future Improvements">
                  <ul className="space-y-2">
                    {project.futureImprovements.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[var(--color-text-faint)]"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-faint)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </ModalSection>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}