export type ExperienceEntry = {
  id: string;
  role: string;
  organization: string;
  period: string; // TODO: replace with real dates
  description: string;
  tags: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "kariba",
    role: "Software Engineer",
    organization: "KaribaWorld Platform",
    period: "TODO: add dates",
    description:
      "Contributed to enterprise software supporting recruitment and digital solutions — building scalable, web-based systems used in production.",
    tags: ["Enterprise Software", "Web Development", "API Development"],
    },
];