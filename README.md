# Tebatso Seshayi — Portfolio

Personal portfolio and virtual CV for Tebatso Seshayi, a South African .NET Software Engineer and Full-Stack Developer.

**Live site:** [tebatsoseshayi.co.za](https://tebatsoseshayi.co.za)

## Overview

The portfolio is built with Next.js, TypeScript, and Tailwind CSS. It presents professional experience, technical skills, verified credentials, client work, engineering projects, GitHub activity, a printable résumé, a blog, testimonials, and contact options.

The goal is to make the site useful to both recruiters and engineers: visitors can quickly understand the stack, then open project case studies for deeper technical context.

### Sections

- **Hero** — focused positioning around .NET, backend APIs, enterprise systems, and full-stack development
- **About** — background, engineering approach, and career direction
- **Experience** — professional experience with scannable responsibilities and technologies
- **Skills** — primary stack, backend architecture, frontend, databases, cloud/delivery, and project exposure
- **Credentials** — formal education and verified certifications
- **Projects** — engineering projects and client work with Problem, Solution, Architecture, Features, and Future Improvements
- **GitHub** — live public repository and contribution data
- **Testimonials** — moderated testimonial display and submission flow
- **Contact** — Cal.com scheduling and a validated email contact form
- **Resume** (`/resume`) — print-friendly résumé generated from shared portfolio data
- **Blog** (`/blog`) — MDX-powered technical writing

## Featured Engineering Work

The portfolio prioritizes software engineering projects that demonstrate backend and application architecture:

- **QuoteSnap** — .NET 8 SaaS for quotes, invoices, customers, services, payments, and email workflows
- **PayRail** — Java 21 / Spring Boot payments API backed by PostgreSQL and deployed on Render
- **BranchGuard** — .NET/Avalonia desktop tool for managing local Git branches using MVVM, EF Core, and SQLite
- **AI Job Reviewer** — CV/job matching prototype with document-processing UI and simulated analysis while the production AI backend is developed

Client websites and commercial web applications are also included as evidence of shipped work.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Forms | React Hook Form |
| Email | Resend |
| Scheduling | Cal.com |
| Content | MDX + gray-matter |
| GitHub data | Octokit |
| Deployment | Vercel |

## Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── resume/
│   ├── blog/
│   ├── testimonials/submit/
│   ├── (legal)/
│   └── api/
├── components/
│   ├── layout/
│   ├── sections/
│   ├── resume/
│   └── ui/
├── lib/
│   ├── data/
│   ├── validation/
│   ├── github.ts
│   └── utils.ts
└── types/

content/
└── blog/
```

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

### Environment Variables

Create `.env.local`:

```env
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_USERNAME=tibz-dev
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=Portfolio <portfolio@your-verified-domain.com>
CONTACT_EMAIL=your_email@example.com
```

`RESEND_FROM_EMAIL` should use a sender/domain verified in Resend for production. During local testing, Resend's onboarding sender can be used where the account allows it.

## Blog Posts

Add an `.mdx` file to `content/blog/`:

```yaml
---
title: "Post Title"
description: "One-line summary"
date: "2026-07-25"
topic: "Software Engineering"
readingTime: "4 min read"
---
```

Posts are picked up automatically.

## Deployment

Production is intended for **Vercel**, because the application uses Next.js server route handlers for contact, testimonial, and GitHub data endpoints.

Every production deployment should provide the environment variables listed above.

```bash
npm run build
npm run start
```

## Author

**Tebatso Seshayi**  
.NET Software Engineer · Full-Stack Developer · South Africa  
[seshayit@gmail.com](mailto:seshayit@gmail.com)
