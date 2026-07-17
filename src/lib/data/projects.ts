import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "ai-job-reviewer",
    category: "web-app",
    title: "AI Job Reviewer",
    tagline: "AI that reads your CV the way an ATS does — and tells you what to fix.",
    overview:
      "An AI-powered application that closes the gap between a candidate's CV and a specific job description — scoring compatibility, surfacing gaps, and generating a tailored cover letter, all in one flow.",
    problem:
      // DRAFT
      "Most job seekers have no visibility into how their CV performs against Applicant Tracking Systems, and tailoring a CV and cover letter to every application is time-consuming to do well.",
    solution:
      // DRAFT
      "Built an application that parses a CV, compares it directly against a target job description, calculates an ATS compatibility score, and uses OpenAI's API to generate specific improvement suggestions and a personalized cover letter.",
    architecture:
      "A full-stack application with a document-parsing pipeline for CV ingestion, a comparison engine that scores CV content against job description keywords and requirements, and an OpenAI integration layer that generates structured suggestions and cover letter drafts from the comparison output.",
    technologies: ["OpenAI API", "TypeScript", "Full Stack", "Document Parsing", "REST APIs"],
    features: [
      "CV parsing and structured extraction",
      "Job description comparison engine",
      "ATS compatibility scoring",
      "AI-generated improvement suggestions",
      "Personalized cover letter generation",
    ],
    coverImage: undefined,
    gallery: [],
    githubUrl: undefined,
    liveUrl: undefined,
    futureImprovements: [
      "Support for multiple CV formats (LinkedIn export, PDF, DOCX)",
      "Historical tracking of ATS score improvements over time",
      "Browser extension for one-click job description import",
    ],
  },
  {
    id: "kariba-world-jobs",
    category: "web-app",
    title: "KaribaWorld — Automated Job Application Platform",
    tagline: "AI-powered job matching, instant applications, and CV optimization at scale.",
    overview:
      "A career platform automating the international job search — combining AI-driven job matching, instant applications, a free CV analyzer, scholarship listings, and mentorship booking into one product, operating out of Cape Town and Dubai.",
    problem:
      "International job seekers face a fragmented search process — manually finding roles, tailoring CVs per application, and researching scholarships or mentorship separately, with no single trusted platform to manage it end to end.",
    solution:
      "Built and contributed to a platform unifying AI-powered job matching and auto-apply flows, a free CV analyzer with a paid CV revamp service, scholarship listings, interview Q&A resources, and mentorship booking — plus an e-commerce store and web design service as adjacent revenue lines.",
    architecture:"Web platform architecture supporting authenticated user accounts, job matching/auto-apply workflows, a CV analysis engine, content sections (news, scholarships, interview prep), and integrated e-commerce — specific technical architecture to be detailed.",
    technologies: ["Web Development", "API Development", "AI Integration", "E-commerce"],
    features: [
      "AI-powered job matching and auto-apply flow",
      "Free CV analyzer and paid CV revamp service",
      "Scholarship and mentorship listings",
      "Integrated store and web design service line",
      "Multi-region operation (Cape Town & Dubai)",
    ],
    coverImage: undefined,
    gallery: [],
    githubUrl: undefined,
    liveUrl: "https://karibaworldjobs.com/",
    futureImprovements: [],
  },
  {
    id: "eazy-link",
    category: "web-app",
    title: "Eazy Link — Career Mentorship & Job Portal",
    tagline: "Connecting students, graduates, and professionals to verified opportunities.",
    overview:
      "A two-part career platform: a marketing and mentorship site (Eazy Link Group) offering CV building, mentorship, and application support, connected to a dedicated job board and client portal (Eazy Link Jobs) for listings and account access.",
    problem:
      "Students and early-career professionals often lack access to verified job opportunities, structured mentorship, and application support — leaving them to navigate CVs, interviews, and job searches without expert guidance.",
    solution:
      "Built a service platform offering tiered packages (Matriculant, New Graduate, Professional, Corporate) covering CV writing, mentorship, application submissions on the client's behalf, and academic/career advisory — backed by a separate job listings portal for browsing verified roles.",
    architecture:
      "Marketing site with service package tiers and a request/consultation form, linked to a dedicated job board application for listings and account login — specific technical architecture to be detailed.",
    technologies: ["Web Development", "Job Board", "Client Portal"],
    features: [
      "Tiered service packages by audience (student, graduate, professional, corporate)",
      "Mentor-matching by career field",
      "Application submission support on the client's behalf",
      "Dedicated job listings portal with account login",
    ],
    coverImage: undefined,
    gallery: [],
    githubUrl: undefined,
    liveUrl: "https://eazylink.co.za",
    futureImprovements: [],
  },
  {
    id: "dev-solutions-store",
    category: "web-app",
    title: "Dev Solutions — E-commerce Store",
    tagline: "A tech and electronics storefront built on Next.js.",
    overview:
      "A Next.js e-commerce storefront for tech products — headphones, gaming consoles, laptops, and accessories — built with a product carousel, featured collections, and a contact/newsletter flow.",
    problem:
      // DRAFT
      "Tech retailers need a fast, modern storefront that can showcase promotions and featured products without the overhead of a heavyweight e-commerce platform.",
    solution:
      "Built a Next.js-based storefront with server-rendered product pages, an image-optimized product carousel, featured product sections, and a lightweight contact/newsletter capture flow.",
    architecture:
      // DRAFT — confirm exact stack (Next.js confirmed from build output; cart/checkout/payment stack to be detailed)
      "Next.js frontend with the App Router and Next/Image for optimized product imagery — backend/checkout implementation details to be added.",
    technologies: ["Next.js", "React", "E-commerce", "Responsive Design"],
    features: [
      "Promotional hero carousel with featured deals",
      "Featured product sections with image optimization",
      "Shop and product category pages",
      "Contact and newsletter capture",
    ],
    coverImage: undefined,
    gallery: [],
    githubUrl: undefined,
    liveUrl: "https://www.devsolutionsza.shop/",
    futureImprovements: [],
  },
  {
    id: "makh-safety",
    category: "website",
    title: "MAKH Safety Solutions",
    tagline: "Occupational health & safety consulting, online.",
    // NOTE: this site renders client-side, so I only had the meta description to work from —
    // confirm/expand this copy once you can share more detail
    overview:
      "A business site for MAKH Safety Solutions, an occupational health and safety (OHS) consulting practice serving South African businesses — covering workplace safety and compliance services.",
    problem:
      "Businesses need a clear, trustworthy digital presence to communicate their safety and compliance services to potential clients.",
    solution:
      "Built a business website presenting MAKH Safety's OHS consulting services and compliance offering.",
    architecture: "Details to be added.",
    technologies: ["Web Development"],
    features: [
      "Service overview for OHS consulting",
      "Compliance-focused business presentation",
    ],
    coverImage: undefined,
    gallery: [],
    githubUrl: undefined,
    liveUrl: "https://www.makhsafety.co.za/",
    futureImprovements: [],
  },
  {
    id: "nolly-m-wayleave",
    category: "website",
    title: "Nolly M Wayleave Services",
    tagline: "Wayleave approvals and construction project services across South Africa.",
    // NOTE: client-side rendered site — copy drafted from meta description only, confirm details
    overview:
      "A business site for Nolly M Wayleave Services, offering wayleave, construction, and project execution services across South Africa, with an emphasis on fast approvals and compliance.",
    problem:
      "Construction and infrastructure clients need reliable wayleave approval processes and compliant project execution, communicated clearly to prospective clients online.",
    solution:
      "Built a business website presenting Nolly M Wayleave's service offering — wayleave processing, construction, and project services.",
    architecture: "Details to be added.",
    technologies: ["Web Development"],
    features: [
      "Service overview for wayleave and construction",
      "Compliance and fast-approval positioning",
    ],
    coverImage: undefined,
    gallery: [],
    githubUrl: undefined,
    liveUrl: "https://www.nollymwayleave.co.za/",
    futureImprovements: [],
  },
  {
    id: "all-things-hygiene",
    category: "website",
    title: "All Things Hygiene",
    tagline: "Bulk tissue and sanitary product supply, built for homes and businesses.",
    overview:
      "An e-commerce-style business site for All Things Hygiene, a Pretoria-based supplier of tissue and sanitary products, offering tiered packages (Starter, Business, Bulk Supply) with WhatsApp-driven ordering for homes, offices, and hospitality clients.",
    problem:
      "A new hygiene products supplier needed a professional storefront to present bulk/wholesale packages and route orders through WhatsApp without the overhead of a full checkout system.",
    solution:
      "Built a package-tiered business site (Starter Pack, Business Pack, Bulk Supply) with a clear 4-step ordering process — place order, confirm & invoice, pack & dispatch, deliver — and WhatsApp-based order requests instead of a traditional cart.",
    architecture:
      "Multi-page business site with tiered pricing packages and WhatsApp deep-link ordering in place of a traditional checkout flow — technical stack details to be added.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Tiered product packages (Starter, Business, Bulk Supply)",
      "WhatsApp-based ordering flow",
      "4-step process explainer (order → invoice → dispatch → delivery)",
      "About, pricing, and contact pages",
    ],
    coverImage: undefined,
    gallery: [],
    githubUrl: undefined,
    liveUrl: "https://www.allthingshygiene.com/",
    futureImprovements: [],
  },
];