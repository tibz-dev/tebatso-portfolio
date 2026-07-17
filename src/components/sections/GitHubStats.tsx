"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, Users, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ContributionGraph } from "./ContributionGraph";
import type { GitHubProfile } from "@/lib/github";

export function GitHubStats() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load");
        return res.json();
      })
      .then(setProfile)
      .catch(() => setError(true));
  }, []);

  return (
    <section id="github" className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-[family-name:var(--font-mono)] text-sm tracking-wide text-[var(--color-signal)]"
        >
          GitHub
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-12 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl"
        >
          Code, in the open.
        </motion.h2>

        {error && (
          <p className="text-sm text-[var(--color-text-faint)]">
            Couldn't load GitHub data right now — check back shortly.
          </p>
        )}

        {!profile && !error && (
          <p className="text-sm text-[var(--color-text-faint)]">
            Loading GitHub activity...
          </p>
        )}

        {profile && (
          <>
            {/* Stats */}
            <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                {
                  icon: Star,
                  label: "Total Stars",
                  value: profile.totalStars,
                },
                {
                  icon: FaGithub,
                  label: "Public Repos",
                  value: profile.publicRepos,
                },
                {
                  icon: Users,
                  label: "Followers",
                  value: profile.followers,
                },
                {
                  icon: GitFork,
                  label: "Contributions (1yr)",
                  value: profile.totalContributions,
                },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4">
                  <stat.icon
                    size={16}
                    className="mb-2 text-[var(--color-signal)]"
                  />

                  <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)]">
                    {stat.value.toLocaleString()}
                  </p>

                  <p className="mt-1 text-xs text-[var(--color-text-faint)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Contribution Graph */}
            <div className="glass mb-10 rounded-[var(--radius-glass)] p-6">
              <h3 className="mb-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-accent-soft)]">
                Last 12 Months
              </h3>

              <ContributionGraph days={profile.contributionDays} />
            </div>

            {/* Top Repositories */}
            <div className="grid gap-4 sm:grid-cols-2">
              {profile.repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group rounded-xl p-5 transition-colors hover:bg-white/[0.08]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--color-text-primary)]">
                      {repo.name}
                    </h4>

                    <ExternalLink
                      size={14}
                      className="shrink-0 text-[var(--color-text-faint)] transition-colors group-hover:text-[var(--color-signal)]"
                    />
                  </div>

                  {repo.description && (
                    <p className="mt-2 line-clamp-2 text-xs text-[var(--color-text-muted)]">
                      {repo.description}
                    </p>
                  )}

                  <div className="mt-4 flex items-center gap-4 text-xs text-[var(--color-text-faint)]">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                        {repo.language}
                      </span>
                    )}

                    <span className="flex items-center gap-1">
                      <Star size={11} />
                      {repo.stars}
                    </span>

                    <span className="flex items-center gap-1">
                      <GitFork size={11} />
                      {repo.forks}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Profile Button */}
            <div className="mt-10 flex justify-center">
              <a
                href={`https://github.com/${profile.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-2 rounded-[var(--radius-pill)] px-5 py-2.5 text-sm text-[var(--color-text-primary)] transition-colors hover:bg-white/10"
              >
                <FaGithub className="h-4 w-4" />
                View Full Profile on GitHub
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}