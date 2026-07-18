markdown# Tebatso Seshayi — Portfolio

A personal portfolio and virtual CV built to showcase enterprise-grade software engineering skills, real client project work, and career trajectory toward AI Engineering and Cloud Architecture.

**Live site:** [tebatso.dev](https://tebatso.dev) <!-- TODO: update once your domain is live, or replace with your Vercel URL -->

---

## Overview

This site is a single-scroll portfolio with a floating glass navigation, built in the style of Apple/Vercel/Linear-inspired product design — dark theme, glassmorphism, motion-driven storytelling — rather than a generic template.

### Sections

- **Hero** — animated live "architecture graph" showing the systems patterns behind the work (CQRS, gateways, caching, AI services)
- **About** — background and career objectives
- **Experience** — timeline of real work, including client engagements
- **Skills** — categorized tech stack with brand icons, sourced from real project work
- **Credentials** — education and 15 verified certifications (Oracle, Cisco, HackerRank, AWS, IBM, and more), each linking to its real issuer verification page
- **Projects** — filterable by category (Enterprise Systems / Web Applications / Websites), each with a full case-study modal (Overview, Problem, Solution, Architecture, Features, Future Improvements)
- **GitHub** — live repository stats, stars, languages, and a contribution heatmap pulled from the GitHub API at request time
- **Testimonials** — social proof, with a public submission form (moderated before publishing)
- **Contact** — Cal.com scheduling embed + a validated contact form that emails directly via Resend
- **Resume** (`/resume`) — a single-page, print-to-PDF resume generated from the same data as the rest of the site
- **Blog** (`/blog`) — Markdown/MDX-powered writing section
---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| Email | Resend |
| Scheduling | Cal.com embed |
| AI | Claude API (Anthropic) |
| Content | MDX (blog), gray-matter |
| Icons | Lucide React, react-icons (Simple Icons) |
| Deployment | Vercel |

---

## Project Structure
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage (assembles all sections)
│   ├── resume/              # Print-styled resume page
│   ├── blog/                 # Blog index + [slug] dynamic post pages
│   ├── testimonials/submit/  # Public testimonial submission form
│   ├── (legal)/              # Privacy, Terms, Cookies, Accessibility, Disclaimer
│   └── api/                  # Route handlers: contact, github, testimonial, ask
├── components/
│   ├── layout/               # FloatingNav, Footer
│   ├── sections/             # One component per homepage section
│   ├── resume/                # Resume-specific components
│   └── ui/                    # Shared primitives (Avatar, StarRating)
├── lib/
│   ├── data/                  # Single source of truth for all content
│   ├── validation/            # Zod schemas
│   ├── github.ts               # GitHub API integration
│   └── ai-context.ts            # System prompt for the Ask-AI widget
├── types/                     # Shared TypeScript types
content/
└── blog/                      # MDX blog posts

---

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables (see below)
cp .env.example .env.local

# Run the dev server
npm run dev
```

Visit `http://localhost:3000`.

### Environment Variables

Create `.env.local` with:
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_USERNAME=your_github_username
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
ANTHROPIC_API_KEY=your_anthropic_api_key

- **GitHub token:** [github.com/settings/tokens](https://github.com/settings/tokens) — no scopes required, just raises the rate limit for public data
- **Resend key:** [resend.com](https://resend.com) — powers the contact form
- **Anthropic key:** [console.anthropic.com](https://console.anthropic.com) — powers the Ask-AI widget

### Adding a CV

Drop your resume content into `src/lib/data/resume.ts` — the `/resume` page renders it as a styled, print-to-PDF single-page CV, so there's no separate PDF file to keep in sync.

### Adding a Blog Post

Add a new `.mdx` file to `content/blog/` with frontmatter:

```yaml
---
title: "Post Title"
description: "One-line summary"
date: "2026-07-25"
topic: "Software Engineering"
readingTime: "4 min read"
---
```

No code changes needed — it's picked up automatically.

---

## Deployment

Deployed on [Vercel](https://vercel.com). Every push to `master` triggers an automatic production deploy.

```bash
npm run build   # production build
npm run start   # serve the production build locally
```

---

## Author

**Tebatso Seshayi**
Software Engineer · Full Stack Developer · South Africa
[seshayit@gmail.com](mailto:seshayit@gmail.com