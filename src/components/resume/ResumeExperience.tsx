import { Section } from "./Section";
import { EXPERIENCE } from "@/lib/data/experience";

export function ResumeExperience() {
  return (
    <Section title="Experience">
      <div className="space-y-5">
        {EXPERIENCE.map((entry) => (
          <div key={entry.id} className="print:break-inside-avoid">
            <div className="flex items-baseline justify-between flex-wrap gap-x-3">
              <h3 className="font-medium text-[var(--color-text-primary)] print:text-black">
                {entry.role}
              </h3>
              <span className="text-xs text-[var(--color-text-faint)] print:text-gray-500">
                {entry.period}
              </span>
            </div>
            <p className="text-sm text-[var(--color-accent-soft)] print:text-gray-700">
              {entry.organization}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-muted)] print:text-gray-600">
              {entry.description}
            </p>
            <ul className="mt-2 space-y-1 pl-4 text-sm text-[var(--color-text-muted)] print:text-gray-600 list-disc">
              {entry.highlights.slice(0, 4).map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
