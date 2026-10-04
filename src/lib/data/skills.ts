export type SkillCategory = {
  id: string;
  label: string;
  items: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    id: "primary",
    label: "Primary Stack",
    items: [
      "C#",
      "ASP.NET Core",
      ".NET 8",
      "Angular",
      "TypeScript",
      "SQL Server",
      "Entity Framework Core",
    ],
  },
  {
    id: "backend-architecture",
    label: "Backend & Architecture",
    items: [
      "REST APIs",
      "Clean Architecture",
      "CQRS",
      "MediatR",
      "AutoMapper",
      "JWT Auth",
      "Node.js",
      "Express.js",
      "Spring Boot",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    id: "cloud-delivery",
    label: "Cloud & Delivery",
    items: [
      "Microsoft Azure",
      "Oracle Cloud Infrastructure",
      "Docker",
      "GitHub Actions",
      "Azure DevOps",
      "Vercel",
      "Render",
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
    ],
  },
  {
    id: "project-exposure",
    label: "Project Exposure",
    items: [
      "Java",
      "Python",
      "C++",
      ".NET MAUI",
      "RabbitMQ",
      "Kafka",
      "SignalR",
      "Stripe",
      "Cloudinary",
      "Firebase",
      "Supabase",
      "Clerk",
      "OpenAI APIs",
    ],
  },
];

export const SOFT_SKILLS = [
  "Problem Solving",
  "Communication",
  "Team Collaboration",
  "Critical Thinking",
  "Adaptability",
  "Continuous Learning",
  "Attention to Detail",
];
