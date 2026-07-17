import { Section } from "./Section";
import { SKILLS } from "@/lib/data/skills";

export function ResumeSkills() {
  return (
    <Section title="Skills">
      <div className="space-y-2.5">
        {SKILLS.map((category) => (
          <div key={category.id} className="flex gap-3 text-sm">
            <span className="w-32 shrink-0 text-[var(--color-text-faint)] print:text-gray-500">
              {category.label}
            </span>
            <span className="text-[var(--color-text-muted)] print:text-gray-700">
              {category.items.join(", ")}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}