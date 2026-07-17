export type ProjectCategory = "web-app" | "website" | "mobile-app" | "enterprise-system";

export const PROJECT_CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "enterprise-system", label: "Enterprise Systems" },
  { id: "web-app", label: "Web Applications" },
  { id: "website", label: "Websites" },
  { id: "mobile-app", label: "Mobile Apps" },
];

export type Project = {
  id: string;
  category: ProjectCategory;
  title: string;
  tagline: string;
  coverImage?: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  features: string[];
  gallery?: string[];
  githubUrl?: string;
  liveUrl?: string;
  futureImprovements: string[];
};