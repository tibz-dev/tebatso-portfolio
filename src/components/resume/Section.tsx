export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8 print:mb-6 print:break-inside-avoid">
      <h2 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-accent-soft)] print:text-black print:font-semibold mb-3 pb-2 border-b border-[var(--color-glass-border)] print:border-gray-300">
        {title}
      </h2>
      {children}
    </section>
  );
}