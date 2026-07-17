import { Section } from "./Section";
import { CERTIFICATIONS, LINKEDIN_CERTIFICATIONS_URL } from "@/lib/data/credentials";

const RESUME_CERT_LIMIT = 8;

export function ResumeCertifications() {
  const shown = CERTIFICATIONS.slice(0, RESUME_CERT_LIMIT);
  const remaining = CERTIFICATIONS.length - shown.length;

  return (
    <Section title="Certifications">
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
        {shown.map((cert) => (
          <li key={cert.id} className="text-[var(--color-text-muted)] print:text-gray-700">
            {cert.title}
            <span className="text-[var(--color-text-faint)] print:text-gray-500"> · {cert.issuer}</span>
          </li>
        ))}
      </ul>
      {remaining > 0 && (
        <p className="mt-3 text-xs text-[var(--color-text-faint)] print:text-gray-500">
          +{remaining} more —{" "}
          <a href={LINKEDIN_CERTIFICATIONS_URL} className="underline">
            full list on LinkedIn
          </a>
        </p>
      )}
    </Section>
  );
}