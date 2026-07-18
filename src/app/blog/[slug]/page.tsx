import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.frontmatter.title} — Tebatso Seshayi`,
    description: post.frontmatter.description,
  };
}

const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--color-text-primary)] mt-10 mb-4" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--color-text-primary)] mt-8 mb-3" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="text-[var(--color-text-muted)] leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="list-disc pl-5 space-y-2 mb-4 text-[var(--color-text-muted)]" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a className="text-[var(--color-accent-soft)] hover:text-[var(--color-signal)] underline transition-colors" {...props} />
  ),
  code: (props: React.ComponentProps<"code">) => (
    <code className="font-[family-name:var(--font-mono)] text-sm bg-white/[0.06] rounded px-1.5 py-0.5" {...props} />
  ),
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen px-6 pt-32 pb-20">
      <article className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors mb-8"
        >
          <ArrowLeft size={16} /> All posts
        </Link>

        <span className="inline-block mb-4 text-xs font-[family-name:var(--font-mono)] text-[var(--color-signal)] bg-[var(--color-signal)]/10 rounded-full px-2.5 py-1">
          {post.frontmatter.topic}
        </span>

        <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] mb-4">
          {post.frontmatter.title}
        </h1>

        <div className="flex items-center gap-3 text-sm text-[var(--color-text-faint)] mb-10">
          <time dateTime={post.frontmatter.date}>
            {new Date(post.frontmatter.date).toLocaleDateString("en-ZA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.frontmatter.readingTime && <span>· {post.frontmatter.readingTime}</span>}
        </div>

        <div className="prose-custom">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </main>
  );
}