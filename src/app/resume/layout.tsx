import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    ".NET Software Engineer resume — experience, education, skills, and certifications.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
