export type ExperienceEntry = {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "restec",
    role: "Software Engineer",
    organization: "Restec Pty Ltd.",
    period: "2025 – Present",
    description: `Contributing to the development and maintenance of enterprise-grade applications using ASP.NET Core (.NET 8), Angular, C#, Entity Framework Core, and SQL Server.

• Develop and maintain RESTful APIs and backend services using ASP.NET Core and C#
• Build full-stack functionality using Angular and .NET technologies
• Implement CQRS patterns with MediatR to support scalable and maintainable solutions
• Design and develop business modules following Clean Architecture principles
• Configure Entity Framework Core entities, relationships, and database migrations
• Implement object mapping using AutoMapper
• Work with SQL Server databases to support application requirements and data integrity
• Contribute to modular application development through SDK-based integrations and service abstractions
• Participate in Agile development processes including sprint planning, code reviews, testing, debugging, and Azure DevOps workflows
• Collaborate with senior engineers to deliver secure, scalable, and maintainable software solutions`,
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