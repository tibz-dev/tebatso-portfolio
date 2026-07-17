export type SkillCategory = {
  id: string;
  label: string;
  items: string[];
};

export const SKILLS: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["C#", "Java", "Python", "JavaScript", "TypeScript", "C++", "SQL", "HTML", "CSS"],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      "React", "Next.js", "Angular", "Tailwind CSS", "Bootstrap",
      "Shadcn UI", "Framer Motion", "Redux", "Axios",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      "ASP.NET Core", ".NET 8", "REST APIs", "Node.js", "Express.js",
      "Spring Boot", "Entity Framework Core", "JWT Auth", "Clean Architecture",
      "Repository Pattern", "CQRS", "MediatR", "AutoMapper", "Fluent Validation",
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: [".NET MAUI", "Android Development"],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    items: [
      "Microsoft Azure", "Oracle Cloud Infrastructure", "Docker", "Docker Compose",
      "CI/CD", "GitHub Actions", "Git", "GitHub", "Vercel", "Netlify", "Postman", "Swagger",
    ],
  },
  {
    id: "other",
    label: "Other Technologies",
    items: ["RabbitMQ", "Kafka", "SignalR", "Stripe", "Cloudinary", "Firebase", "Supabase", "Clerk", "OpenAI APIs"],
  },
];

export const SOFT_SKILLS = [
  "Leadership", "Communication", "Problem Solving", "Critical Thinking",
  "Team Collaboration", "Adaptability", "Continuous Learning", "Time Management", "Attention to Detail",
];