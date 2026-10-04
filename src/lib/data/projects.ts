import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "quotesnap",
    category: "enterprise-system",
    title: "QuoteSnap — Quotes & Invoicing SaaS",
    tagline:
      "A .NET 8 SaaS backend for customers, services, quotes, invoices, payments, and email workflows.",
    status: "In development",
    overview:
      "QuoteSnap is a SaaS product for small businesses that need a structured way to manage services, customers, quotations, invoices, and payments without relying on spreadsheets or disconnected tools.",
    problem:
      "Small businesses often create quotes and invoices manually, making numbering, customer history, payment tracking, and consistent business information difficult to manage as volume grows.",
    solution:
      "Built a modular ASP.NET Core API with authentication, business profiles, customer and service management, quote-to-invoice workflows, payment records, sequential invoice numbering, and email delivery when invoices are issued.",
    architecture:
      "ASP.NET Core on .NET 8 with Entity Framework Core and SQL Server Express. The solution separates API, application/domain concerns, and infrastructure services, uses EF Core migrations for schema changes, and integrates email through an external provider workflow.",
    technologies: [
      "C#",
      "ASP.NET Core",
      ".NET 8",
      "Entity Framework Core",
      "SQL Server Express",
      "REST APIs",
      "JWT",
      "Gmail OAuth",
    ],
    features: [
      "Business registration and authentication",
      "Customer and service management",
      "Quote creation and quote-to-invoice workflows",
      "Sequential invoice numbering",
      "Payment recording and invoice status tracking",
      "Invoice email delivery workflow",
      "Swagger/OpenAPI testing surface",
    ],
    gallery: [],
    futureImprovements: [
      "Complete subscription billing and plan enforcement",
      "Add production frontend and customer dashboard",
      "Add audit history and richer financial reporting",
    ],
  },
  {
    id: "payrail",
    category: "enterprise-system",
    title: "PayRail — Payments API",
    tagline:
      "A Java 21 and Spring Boot payments MVP backed by PostgreSQL and deployed on Render.",
    status: "Deployed API",
    overview:
      "PayRail is a backend-focused payments MVP built to practise production API design, persistence, deployment, and operational debugging using the Java/Spring ecosystem.",
    problem:
      "Payment-oriented products need a dependable API foundation that can validate requests, persist transaction data, expose clear API contracts, and run against a production database outside the developer machine.",
    solution:
      "Built and deployed a Spring Boot API using Java 21 and PostgreSQL, configured the production datasource on Render, and exposed the API through Swagger for testing and documentation.",
    architecture:
      "Spring Boot application on Java 21 with a PostgreSQL database hosted on Render. The API follows a layered backend structure and exposes documented endpoints through Swagger/OpenAPI.",
    technologies: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "REST APIs",
      "Swagger",
      "Render",
    ],
    features: [
      "RESTful payments-focused API",
      "PostgreSQL persistence",
      "Environment-based production database configuration",
      "Swagger/OpenAPI endpoint documentation",
      "Cloud deployment on Render",
    ],
    gallery: [],
    futureImprovements: [
      "Add payment-provider integration",
      "Introduce idempotency and webhook handling",
      "Add automated integration tests and observability",
    ],
  },
  {
    id: "branchguard",
    category: "enterprise-system",
    title: "BranchGuard — Git Branch Cleaner",
    tagline:
      "A local .NET desktop utility for reviewing and cleaning stale Git branches safely.",
    status: "MVP",
    overview:
      "BranchGuard is a desktop developer tool designed to make local Git branch cleanup clearer and safer by presenting repository branch information through a dedicated UI instead of repeated command-line checks.",
    problem:
      "Long-running repositories collect merged, stale, and forgotten local branches. Cleaning them manually is repetitive and creates a risk of deleting the wrong branch when context is unclear.",
    solution:
      "Built an Avalonia desktop application using MVVM, dependency injection, EF Core, and SQLite as the foundation for repository scanning, branch review, and local cleanup workflows.",
    architecture:
      "Cross-platform .NET desktop application using Avalonia UI and MVVM. Dependency injection keeps services separate from view models, while EF Core with SQLite provides lightweight local persistence.",
    technologies: [
      "C#",
      ".NET",
      "Avalonia",
      "MVVM",
      "Entity Framework Core",
      "SQLite",
      "Dependency Injection",
      "Git",
    ],
    features: [
      "Cross-platform desktop UI",
      "MVVM-based separation of views and logic",
      "Local SQLite persistence through EF Core",
      "Repository-oriented branch cleanup workflow",
      "Dependency-injected application services",
    ],
    gallery: [],
    futureImprovements: [
      "Add branch safety scoring before deletion",
      "Show merged and remote-tracking status",
      "Add configurable cleanup rules and undo-friendly workflows",
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
    tagline: "Occupational health and safety consulting, presented clearly online.",
    status: "Live",
    overview:
      "A business website for MAKH Safety Solutions, an occupational health and safety consulting practice serving South African businesses.",
    problem:
      "The business needed a credible digital presence that clearly communicates workplace safety and compliance services to prospective clients.",
    solution:
      "Built a responsive business website focused on service clarity, trust, and straightforward client enquiries.",
    architecture:
      "Responsive React/Next.js marketing site with reusable content sections, optimized static assets, and production deployment for a lightweight client-facing experience.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
    features: [
      "OHS consulting service presentation",
      "Compliance-focused business positioning",
      "Responsive mobile-first layout",
      "Clear enquiry paths",
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
      "Wayleave approvals and construction project services across South Africa.",
    status: "Live",
    overview:
      "A business website for Nolly M Wayleave Services, presenting wayleave, construction, and project execution services across South Africa.",
    problem:
      "Infrastructure clients need to understand a provider's wayleave and project capabilities quickly before beginning an enquiry.",
    solution:
      "Built a responsive company website that organizes services, positioning, and enquiry information into a clear customer journey.",
    architecture:
      "Responsive React/Next.js marketing site composed from reusable sections and optimized for straightforward service discovery and contact conversion.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
    features: [
      "Wayleave and construction service overview",
      "Compliance-oriented positioning",
      "Responsive layout",
      "Direct enquiry paths",
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
      "A business site for a Pretoria-based supplier of tissue and sanitary products, using package-based product presentation and WhatsApp-driven ordering.",
    problem:
      "The supplier needed a professional storefront for bulk and wholesale packages without introducing the operational complexity of a full online checkout.",
    solution:
      "Built a package-based business site with a simple ordering journey and WhatsApp deep links that move customers from browsing to direct order enquiries.",
    architecture:
      "Lightweight multi-page frontend built with HTML, CSS, and JavaScript, optimized for responsive browsing and direct WhatsApp ordering.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Starter, business, and bulk product packages",
      "WhatsApp-based ordering",
      "Four-step order process explainer",
      "About, pricing, and contact pages",
    ],
    coverImage: "/images/allthingshygiene.png",
    gallery: [],
    liveUrl: "https://www.allthingshygiene.com/",
    futureImprovements: [],
  },
];
