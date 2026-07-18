import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, BlogFrontmatter } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const fullPath = path.join(BLOG_DIR, filename);
    const { data } = matter(fs.readFileSync(fullPath, "utf-8"));

    return { ...(data as BlogFrontmatter), slug };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): { frontmatter: BlogFrontmatter; content: string } | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const { data, content } = matter(fs.readFileSync(fullPath, "utf-8"));
  return { frontmatter: data as BlogFrontmatter, content };
}