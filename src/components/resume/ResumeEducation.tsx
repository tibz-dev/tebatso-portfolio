import { Section } from "./Section";
import { EDUCATION } from "@/lib/data/credentials";

export function ResumeEducation() {
  return (
    <Section title="Education">
      <div className="space-y-3">
        {EDUCATION.map((entry) => (
          <div key={entry.id}>
            <div className="flex items-baseline justify-between flex-wrap gap-x-3">
              <h3 className="font-medium text-[var(--color-text-primary)] print:text-black">{entry.degree}</h3>
              <span className="text-xs text-[var(--color-text-faint)] print:text-gray-500">{entry.status}</span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] print:text-gray-600">
              {entry.institution} · {entry.location}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}