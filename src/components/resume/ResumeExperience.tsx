import { Section } from "./Section";
import { EXPERIENCE } from "@/lib/data/experience";

export function ResumeExperience() {
  return (
    <Section title="Experience">
      <div className="space-y-5">
        {EXPERIENCE.map((entry) => (
          <div key={entry.id} className="print:break-inside-avoid">
            <div className="flex items-baseline justify-between flex-wrap gap-x-3">
              <h3 className="font-medium text-[var(--color-text-primary)] print:text-black">{entry.role}</h3>
              <span className="text-xs text-[var(--color-text-faint)] print:text-gray-500">{entry.period}</span>
            </div>
            <p className="text-sm text-[var(--color-accent-soft)] print:text-gray-700">{entry.organization}</p>
            <p className="text-sm text-[var(--color-text-muted)] print:text-gray-600 mt-1 leading-relaxed">
              {entry.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}