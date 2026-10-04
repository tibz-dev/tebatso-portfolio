export type ExperienceEntry = {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "restec",
    role: "Software Engineer",
    organization: "Restec Pty Ltd.",
    period: "2025 – Present",
    description:
      "Contributing to enterprise application development across ASP.NET Core and Angular, with a focus on maintainable backend services, business modules, and full-stack delivery.",
    highlights: [
      "Develop and maintain RESTful APIs and backend services using ASP.NET Core, .NET 8, and C#.",
      "Build full-stack features using Angular, TypeScript, and .NET technologies.",
      "Apply CQRS with MediatR and Clean Architecture patterns to modular business functionality.",
      "Configure Entity Framework Core entities, relationships, migrations, and SQL Server persistence.",
      "Use AutoMapper, service abstractions, and SDK integrations to keep application modules maintainable.",
      "Participate in Agile delivery, code reviews, testing, debugging, and Azure DevOps workflows with senior engineers.",
    ],
    tags: [
      "ASP.NET Core",
      ".NET 8",
      "Angular",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "CQRS",
      "MediatR",
      "Clean Architecture",
      "Azure DevOps",
    ],
  },
];
