import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "quotesnap",
    category: "enterprise-system",
    title: "QuoteSnap — Quotes & Invoicing SaaS",
    tagline:
      "A full-stack business management SaaS for creating quotes, issuing invoices, recording payments, and managing customers.",
    status: "Live",
    coverImage: "/images/quotesnap.png",
    overview:
      "QuoteSnap is a full-stack SaaS platform that helps small businesses manage their sales-to-payment workflow in one place. It brings together business profiles, customers, service and catalogue items, quotations, invoices, receipts, payment tracking, subscription plans, and email delivery. The product combines a React web application with an ASP.NET Core 8 API.",
    problem:
      "Small businesses often rely on spreadsheets, Word templates, and disconnected apps to prepare quotes, issue invoices, record deposits, and follow up on payments. This makes customer history, consistent document numbering, and financial visibility harder to maintain as the business grows.",
    solution:
      "Built a full-stack product with a React/Vite web application and an ASP.NET Core 8 API. It supports customer and catalogue management, quote-to-invoice workflows, PDF documents, payment records, receipts, subscription plans, and email workflows, including Google/Gmail connection for invoice delivery.",
    architecture:
      "The QuoteSnap.Web React/Vite frontend communicates with an ASP.NET Core 8 API. The backend uses Entity Framework Core and SQL Server, with JWT authentication, Paystack subscription checkout and webhooks, Gmail OAuth for invoice delivery, and Brevo for system emails. The frontend and API are deployed as separate services.",
    technologies: [
      "C#",
      "ASP.NET Core 8",
      "React",
      "Vite",
      "TypeScript",
      "Entity Framework Core",
      "SQL Server",
      "JWT",
      "Paystack",
      "Gmail OAuth",
      "Brevo",
    ],
    features: [
      "Business profiles and company settings",
      "Customer and service/catalogue management",
      "Quotation creation and quote-to-invoice workflows",
      "Sequential invoice numbering",
      "PDF quotes, invoices, and receipts",
      "Payment recording and invoice status tracking",
      "Subscription plans and Paystack billing workflows",
      "Google/Gmail connection for invoice delivery",
      "System email workflows through Brevo",
    ],
    gallery: [],
    liveUrl: "https://www.qoutesnap.co.za/",
    githubUrl: "https://github.com/tibz-dev/QuoteSnap",
    futureImprovements: [
      "Expand automated end-to-end coverage for billing and document workflows",
      "Add richer financial analytics and business reporting",
      "Continue improving onboarding and multi-branch business support",
    ],
  },
  {
    id: "payrail",
    category: "enterprise-system",
    title: "PayRail — Payments API",
    tagline:
      "An API-first payments orchestration MVP built with Java 21, Spring Boot, and PostgreSQL.",
    status: "Deployed API · simulated payments",
    overview:
      "PayRail is an API-first payment orchestration platform for South African merchants. It provides merchant onboarding, API credentials, payment requests, hosted checkout sessions, transaction tracking, basic ledger visibility, and webhook notifications. Its current payment provider is simulated, so it demonstrates the payment lifecycle without moving real money.",
    problem:
      "Merchants need a dependable way to create payment requests, host checkout experiences, track transaction states, and receive payment events. Building and maintaining these workflows independently can create fragmented integrations and inconsistent transaction handling.",
    solution:
      "Built a Java 21 and Spring Boot API with PostgreSQL persistence and a simulated payment-provider workflow. The MVP supports merchant registration, API credentials, payment requests, hosted checkout sessions, transaction status updates, webhook delivery, and basic ledger visibility.",
    architecture:
      "Spring Boot application on Java 21 with PostgreSQL persistence and a layered backend structure. A simulated payment provider drives the MVP transaction lifecycle, while Swagger/OpenAPI documents the API contract. The deployment uses environment-based configuration for the hosted database and service.",
    technologies: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "REST APIs",
      "Swagger/OpenAPI",
      "Render",
    ],
    features: [
      "Merchant registration and API credentials",
      "Payment request creation",
      "Hosted checkout sessions",
      "Simulated payment outcomes and status tracking",
      "Webhook notifications",
      "Transaction history and basic payment ledger",
      "Swagger/OpenAPI endpoint documentation",
    ],
    gallery: [],
    githubUrl: "https://github.com/tibz-dev/payrail-api",
    futureImprovements: [
      "Integrate a real payment provider",
      "Introduce idempotency and robust webhook retry handling",
      "Add automated integration tests and observability",
    ],
  },
  {
    id: "branchguard",
    category: "enterprise-system",
    title: "BranchGuard — Git Branch Cleaner",
    tagline:
      "A cross-platform .NET 8 desktop tool for safely identifying stale and merged local Git branches.",
    status: "MVP",
    overview:
      "BranchGuard is a developer desktop utility that analyses local Git branches against remote repository state and explains which branches are safe to delete, need review, or should be kept. It focuses on making branch cleanup safer and more transparent instead of relying on repeated command-line checks.",
    problem:
      "Long-running repositories accumulate merged, stale, and forgotten local branches. Manual cleanup is repetitive, and deleting a branch based on one signal can remove work that still matters.",
    solution:
      "Built an Avalonia desktop application using MVVM, dependency injection, EF Core with SQLite, LibGit2Sharp, and GitHub integration. It scans local branches, compares remote and pull-request state, assigns explainable safety recommendations, and supports dry-run review before deletion.",
    architecture:
      "Cross-platform .NET 8 desktop application using Avalonia UI and MVVM. The solution separates Domain, Application, Infrastructure, Desktop, and Tests projects. LibGit2Sharp handles local Git operations, Octokit supports GitHub synchronization, and EF Core with SQLite stores repositories, scan history, and deleted-branch records.",
    technologies: [
      "C#",
      ".NET 8",
      "Avalonia UI",
      "MVVM",
      "Entity Framework Core",
      "SQLite",
      "LibGit2Sharp",
      "Octokit",
      "GitHub REST API",
    ],
    features: [
      "Local Git branch scanning",
      "Remote branch and pull-request status checks",
      "Explainable 0–100 branch safety scoring",
      "Protected branch name and wildcard patterns",
      "Safe deletion using non-force Git semantics by default",
      "Dry-run preview before cleanup",
      "Deletion history for recovery context",
      "Local SQLite persistence",
    ],
    gallery: [],
    githubUrl: "https://github.com/tibz-dev/BranchGuard",
    futureImprovements: [
      "Add GitLab integration",
      "Add a branch recovery interface",
      "Expand scan history and cleanup reporting",
    ],
  },
  {
    id: "ai-job-reviewer",
    category: "web-app",
    title: "AI Job Reviewer — CV Matching Prototype",
    tagline:
      "A CV-to-job matching prototype with document parsing, scoring UI, Q&A, and cover-letter flows.",
    status: "Prototype",
    overview:
      "A frontend-led prototype exploring how a candidate could upload a CV, compare it with a job description, review a compatibility result, generate application guidance, and create interview Q&A from one workflow.",
    problem:
      "Job seekers repeatedly compare the same CV against different role requirements and often lack a structured way to identify gaps before applying.",
    solution:
      "Built the upload, PDF-reading, progress, results, cover-letter, strengths/weaknesses, recommendation, and Q&A experience. The current analysis flow uses simulated results while the production AI backend is still to be integrated.",
    architecture:
      "React + Vite + TypeScript frontend with pdfjs-dist for PDF handling. Analysis is currently provided through a simulateAnalysis mock, with an Express backend placeholder prepared for future API integration.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "pdfjs-dist",
      "Express.js",
      "Document Parsing",
    ],
    features: [
      "CV/PDF upload and document reading",
      "Job description comparison workflow",
      "Match-result presentation",
      "Strengths, weaknesses, and recommendation views",
      "Cover-letter output",
      "Interview Q&A generation UI with copy/download actions",
    ],
    gallery: [],
    githubUrl: "https://github.com/tibz-dev/ai-jobreviewer",
    futureImprovements: [
      "Replace simulated analysis with a production AI service",
      "Add persisted analysis history",
      "Support DOCX and additional CV formats",
    ],
  },
  {
    id: "kariba-world-jobs",
    category: "web-app",
    title: "KaribaWorld — Career Platform",
    tagline:
      "A multi-service career platform combining opportunities, CV support, mentorship, and job-search tools.",
    status: "Live",
    overview:
      "A career platform combining job-search tools, CV support, scholarship listings, interview resources, mentorship booking, and adjacent digital services for an international audience.",
    problem:
      "Job seekers often move between separate services for opportunities, CV help, interview preparation, scholarships, and mentorship.",
    solution:
      "Contributed to a platform that brings those services into a single customer journey, with dedicated areas for opportunities, CV support, resources, mentorship, and commercial services.",
    architecture:
      "Multi-section web application with authenticated and content-driven user journeys, external service integrations, and separate commercial service areas. Portfolio details intentionally focus on the parts of the product that can be shown publicly.",
    technologies: ["Web Development", "API Development", "AI Integration", "E-commerce"],
    features: [
      "Job-search and application support flows",
      "CV analysis and CV revamp services",
      "Scholarship and mentorship listings",
      "Interview-preparation resources",
      "Integrated commercial service areas",
    ],
    coverImage: "/images/karibaworld.png",
    gallery: [],
    liveUrl: "https://karibaworldjobs.com/",
    futureImprovements: [],
  },
  {
    id: "eazy-link",
    category: "web-app",
    title: "Eazy Link — Career Mentorship & Job Portal",
    tagline:
      "Connecting students, graduates, and professionals to career support and opportunities.",
    status: "Live",
    overview:
      "A two-part career platform: a marketing and mentorship experience offering CV building, mentorship, and application support, connected to a dedicated job board and client portal.",
    problem:
      "Students and early-career professionals often lack structured mentorship, application support, and a reliable place to discover relevant opportunities.",
    solution:
      "Built a service platform with audience-specific career support packages and a connected job-listing experience for browsing opportunities and accessing account features.",
    architecture:
      "React/TypeScript web experience backed by Node.js/Express services, Clerk authentication, Cloudinary-managed media, and responsive Tailwind CSS interfaces.",
    technologies: [
      "Node.js",
      "Clerk",
      "Tailwind CSS",
      "React",
      "Cloudinary",
      "TypeScript",
      "Express.js",
      "Responsive Design",
    ],
    features: [
      "Tiered career-support packages",
      "Mentorship and consultation flows",
      "Application-support services",
      "Dedicated job-listings portal",
      "Authenticated account access",
    ],
    coverImage: "/images/eazylinkjobs.png",
    gallery: [],
    liveUrl: "https://eazylink.co.za",
    githubUrl: "https://github.com/tibz-dev/Eazy-Link",
    futureImprovements: [],
  },
  {
    id: "dev-solutions-store",
    category: "web-app",
    title: "Dev Solutions — E-commerce Store",
    tagline: "A responsive electronics storefront built with the MERN stack.",
    status: "Live",
    overview:
      "An e-commerce storefront for technology products such as headphones, gaming consoles, laptops, and accessories, with promotional and featured-product experiences.",
    problem:
      "A technology retailer needs a fast storefront that can highlight promotions and product categories without overwhelming customers.",
    solution:
      "Built a responsive storefront with promotional sections, featured products, category navigation, and lightweight enquiry/newsletter touchpoints.",
    architecture:
      "React frontend with Node.js and Express backend services and MongoDB persistence, structured around product browsing and storefront content.",
    technologies: [
      "Node.js",
      "React",
      "Express.js",
      "MongoDB",
      "Responsive Design",
    ],
    features: [
      "Promotional hero carousel",
      "Featured product sections",
      "Shop and product-category browsing",
      "Responsive storefront layout",
      "Contact and newsletter capture",
    ],
    coverImage: "/images/devsolutionsshop.png",
    gallery: [],
    liveUrl: "https://www.devsolutionsza.shop/",
    futureImprovements: [],
  },
  {
    id: "makh-safety",
    category: "website",
    title: "MAKH Safety Solutions",
    tagline: "Practical occupational health and safety systems for South African workplaces.",
    status: "Live",
    overview:
      "A redesigned business website for MAKH Safety Solutions, presenting occupational health and safety consulting through compliance documentation, on-site support, and practical safety systems for South African workplaces.",
    problem:
      "Businesses need to meet workplace safety obligations and compliance requirements while keeping documentation practical and site teams supported.",
    solution:
      "Built a responsive marketing website that explains the consulting services, compliance focus, on-site support, and consultation enquiry journey.",
    architecture:
      "Responsive React/Next.js marketing site with reusable content sections, optimized static assets, and production deployment for a lightweight client-facing experience.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
    features: [
      "Occupational Health and Safety Act support",
      "Construction Regulations compliance support",
      "ISO 45001-aligned safety systems",
      "Site-based compliance support",
      "Consultation enquiry path",
    ],
    coverImage: "/images/makhsafety.png",
    gallery: [],
    liveUrl: "https://www.makhsafety.co.za/",
    futureImprovements: [],
  },
  {
    id: "nolly-m-wayleave",
    category: "website",
    title: "Nolly M Wayleave Services",
    tagline:
      "Wayleave consulting and authority coordination for telecommunications and utility infrastructure.",
    status: "Live",
    overview:
      "A redesigned website for Nolly M Wayleave Services, explaining a wayleave workflow from project briefing and authority liaison through site coordination for telecommunications and utility infrastructure.",
    problem:
      "Infrastructure projects can stall when wayleave applications, permissions, authority coordination, and site access are not clearly managed.",
    solution:
      "Built a responsive company website that explains the wayleave consulting process, organizes service information, and gives infrastructure clients a direct route to discuss a project.",
    architecture:
      "Responsive React/Next.js marketing site composed from reusable sections and optimized for straightforward service discovery and contact conversion.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
    features: [
      "Wayleave application support",
      "Authority liaison",
      "Site coordination",
      "Telecommunications and utility infrastructure focus",
      "FAQs and project enquiry path",
    ],
    coverImage: "/images/nollymwayleave.png",
    gallery: [],
    liveUrl: "https://www.nollymwayleave.co.za/",
    futureImprovements: [],
  },
  {
    id: "all-things-hygiene",
    category: "website",
    title: "All Things Hygiene",
    tagline:
      "Bulk tissue and sanitary product supply for homes and businesses.",
    status: "Live",
    overview:
      "A redesigned business website for All Things Hygiene, a South African supplier of toilet tissue, serviettes, kitchen towels, and bulk hygiene products for homes, offices, and businesses. The site presents product ranges, company information, pricing, gallery content, and clear quotation enquiry paths.",
    problem:
      "Customers need a clear way to understand the available hygiene products and request supply quotations, while the business needs a professional online presence for both retail and bulk enquiries.",
    solution:
      "Built a modern multi-page website that organizes the company's product ranges, services, pricing, gallery, referrals, careers, and contact information into a clearer customer journey with quotation enquiry paths.",
    architecture:
      "Responsive multi-page website built with HTML, CSS, and JavaScript, supported by a lightweight PHP contact handler and structured static assets. Dedicated pages keep product discovery, company information, and enquiries easy to navigate.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Responsive Design"],
    features: [
      "Toilet tissue, serviettes, kitchen towel, and bulk hygiene product presentation",
      "Dedicated products, services, and pricing pages",
      "Company gallery and referral information",
      "Careers and contact pages",
      "Quotation enquiry paths",
      "Privacy, terms, delivery, returns, and cookie information",
    ],
    coverImage: "/images/allthingshygiene.png",
    gallery: [],
    liveUrl: "https://www.allthingshygiene.co.za/",
    futureImprovements: [],
  },
];
