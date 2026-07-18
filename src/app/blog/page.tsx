import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Tebatso Seshayi",
  description: "Writing on software engineering, AI, cloud architecture, and career growth.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen px-6 pt-32 pb-20">
      <div className="max-w-3xl mx-auto">
        <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-signal)] tracking-wide mb-4">
          Blog
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] mb-12">
          Writing.
        </h1>

        {posts.length === 0 ? (
          <p className="text-sm text-[var(--color-text-faint)]">No posts yet — check back soon.</p>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass block rounded-[var(--radius-glass)] p-6 hover:bg-white/[0.08] transition-colors group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block mb-3 text-xs font-[family-name:var(--font-mono)] text-[var(--color-signal)] bg-[var(--color-signal)]/10 rounded-full px-2.5 py-1">
                      {post.topic}
                    </span>
                    <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-text-primary)]">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[var(--color-text-muted)] mt-2 leading-relaxed">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-3 mt-4 text-xs text-[var(--color-text-faint)]">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-ZA", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      {post.readingTime && <span>· {post.readingTime}</span>}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 mt-1 text-[var(--color-text-faint)] group-hover:text-[var(--color-signal)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}