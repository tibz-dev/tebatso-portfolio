export type ContactLink = {
  label: string;
  value: string;
  href?: string;
};

export type ResumeSummary = {
  name: string;
  title: string;
  location: string;
  summary: string;
  contacts: ContactLink[];
};