import { RESUME_SUMMARY } from "@/lib/data/resume";

export function ResumeHeader() {
  return (
    <div className="mb-8 print:mb-6">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] print:text-black">
        {RESUME_SUMMARY.name}
      </h1>
      <p className="text-[var(--color-signal)] print:text-gray-700 mt-1">{RESUME_SUMMARY.title}</p>

      <div className="flex flex-wrap gap-x-5 gap-y-1 mt-4 text-sm text-[var(--color-text-muted)] print:text-gray-600">
        {RESUME_SUMMARY.contacts.map((c) =>
          c.href ? (
            <a key={c.label} href={c.href} className="hover:text-[var(--color-text-primary)] print:text-gray-600">
              {c.value}
            </a>
          ) : (
            <span key={c.label}>{c.value}</span>
          )
        )}
      </div>
    </div>
  );
}