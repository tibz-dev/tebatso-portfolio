export const metadata = { title: "Disclaimer — Tebatso Seshayi" };

export default function Disclaimer() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20 max-w-2xl mx-auto">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
        Disclaimer
      </h1>
      <p className="text-sm text-[var(--color-text-faint)] mb-8">Last updated: 18 July 2026</p>

      <div className="space-y-6 text-sm text-[var(--color-text-muted)] leading-relaxed">
        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Project representation</h2>
          <p>
            Projects shown on this site — including client work such as KaribaWorld, Eazy Link, Dev
            Solutions, MAKH Safety Solutions, Nolly M Wayleave Services, and All Things Hygiene —
            are presented in good faith to the best of my knowledge at time of publishing. These
            are live third-party businesses; their websites, branding, and content may change
            independently of this portfolio and without my involvement going forward.
          </p>
        </div>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">No professional advice</h2>
          <p>
            Nothing on this site constitutes legal, financial, or professional advice. Content is
            provided for informational purposes related to my work and experience only.
          </p>
        </div>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Certifications and credentials</h2>
          <p>
            Certifications listed are self-reported based on credentials issued by the named
            providers (Oracle, Cisco, HackerRank, AWS, IBM, and others). Verification links are
            provided where available; I don't control the uptime or accuracy of third-party
            verification pages.
          </p>
        </div>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">No liability</h2>
          <p>
            While I take reasonable care to keep this site accurate, I make no warranties about
            completeness, reliability, or accuracy of the information presented, and I'm not liable
            for any loss arising from reliance on this site's content.
          </p>
        </div>
      </div>
    </main>
  );
}