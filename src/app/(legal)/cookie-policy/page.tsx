export const metadata = { title: "Cookie Policy — Tebatso Seshayi" };

export default function CookiePolicy() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20 max-w-2xl mx-auto">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
        Cookie Policy
      </h1>
      <p className="text-sm text-[var(--color-text-faint)] mb-8">Last updated: 18 July 2026</p>

      <div className="space-y-6 text-sm text-[var(--color-text-muted)] leading-relaxed">
        <p>
          This site does not set its own tracking or advertising cookies. It uses local browser
          memory only where needed for functionality (e.g. remembering your place while browsing) —
          nothing that identifies you or tracks you across other websites.
        </p>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Third-party cookies</h2>
          <p>
            Two embedded services on this site may set their own cookies when used, governed by
            their own policies rather than mine:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Cal.com</strong> (used in the "Book a Call" widget) — see their{" "}
              <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
                privacy policy
              </a>
            </li>
            <li>
              <strong>Hosting/analytics</strong>, if enabled in future (e.g. Vercel Analytics) — this
              page will be updated if and when that changes
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Managing cookies</h2>
          <p>
            You can control or delete cookies through your browser settings at any time. Blocking
            cookies from the Cal.com embed may prevent the booking widget from working correctly.
          </p>
        </div>
      </div>
    </main>
  );
}