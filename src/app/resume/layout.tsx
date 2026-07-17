import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Tebatso Seshayi",
  description: "Software Engineer resume — experience, education, skills, and certifications.",
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}