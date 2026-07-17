export const metadata = { title: "Accessibility Statement — Tebatso Seshayi" };

export default function Accessibility() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20 max-w-2xl mx-auto">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
        Accessibility Statement
      </h1>
      <p className="text-sm text-[var(--color-text-faint)] mb-8">Last updated: 18 July 2026</p>

      <div className="space-y-6 text-sm text-[var(--color-text-muted)] leading-relaxed">
        <p>
          I want this website to be usable by as many people as possible, including people using
          assistive technology such as screen readers, keyboard-only navigation, or browser
          zoom/magnification.
        </p>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">What's in place</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Semantic HTML structure for navigation, headings, and landmarks</li>
            <li>A "skip to content" link for keyboard users</li>
            <li>Visible focus states on all interactive elements</li>
            <li>ARIA labels on icon-only buttons (menu toggle, zoom controls, back-to-top)</li>
            <li>Respect for your operating system's "reduce motion" setting</li>
            <li>Color contrast checked against WCAG AA guidelines</li>
          </ul>
        </div>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Known limitations</h2>
          <p>
            Some embedded third-party widgets (the Cal.com scheduler, the GitHub contribution graph)
            are built and maintained outside my control, and their accessibility depends on those
            providers.
          </p>
        </div>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Feedback</h2>
          <p>
            If you encounter an accessibility barrier anywhere on this site, please let me know via
            the contact form or at{" "}
            <a href="mailto:seshayit@gmail.com" className="underline">
              seshayit@gmail.com
            </a>{" "}
            — I'll do my best to fix it.
          </p>
        </div>
      </div>
    </main>
  );
}