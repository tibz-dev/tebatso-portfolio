export const metadata = { title: "Privacy Policy — Tebatso Seshayi" };

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20 max-w-2xl mx-auto">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
        Privacy Policy
      </h1>
      <p className="text-sm text-[var(--color-text-faint)] mb-8">Last updated: 18 July 2026</p>

      <div className="space-y-6 text-sm text-[var(--color-text-muted)] leading-relaxed">
        <p>
          This Privacy Policy explains what information this website collects, how it's used, and
          the choices you have. This site is operated by Tebatso Seshayi ("I", "me").
        </p>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Information I collect</h2>
          <p className="mb-2">
            <strong>Contact form:</strong> When you submit the contact form, I collect your name,
            email address, subject, and message. This is sent directly to my email via a
            third-party service (Resend) and is used solely to respond to your enquiry.
          </p>
          <p className="mb-2">
            <strong>Scheduling:</strong> If you book a call through the embedded Cal.com scheduler,
            Cal.com processes that booking directly — see their{" "}
            <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">
              privacy policy
            </a>{" "}
            for details on what they collect.
          </p>
          <p>
            <strong>Automatic data:</strong> Standard hosting logs (IP address, browser type, pages
            visited) may be collected by the hosting provider for security and performance
            monitoring. This site does not use third-party advertising trackers.
          </p>
        </div>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">How I use it</h2>
          <p>
            Contact form submissions are used only to respond to you. I don't sell, rent, or share
            your personal information with third parties for marketing purposes.
          </p>
        </div>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Data retention</h2>
          <p>
            Contact form emails are retained in my inbox for as long as reasonably needed to
            respond to and follow up on your enquiry. You can request deletion at any time — see
            "Your rights" below.
          </p>
        </div>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Third-party services</h2>
          <p>This site relies on the following third parties, each with their own privacy practices:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Resend</strong> — delivers contact form emails
            </li>
            <li>
              <strong>Cal.com</strong> — powers the embedded call-booking widget
            </li>
            <li>
              <strong>GitHub API</strong> — pulls public repository data for display; no personal
              data about you is sent to GitHub
            </li>
            <li>
              <strong>Hosting provider</strong> (e.g. Vercel) — serves this website and may log
              standard request data
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Your rights</h2>
          <p>
            Under South Africa's Protection of Personal Information Act (POPIA), and applicable
            data protection laws if you're accessing this site from elsewhere, you have the right
            to access, correct, or request deletion of your personal information. To exercise these
            rights, contact me at{" "}
            <a href="mailto:seshayit@gmail.com" className="underline">
              seshayit@gmail.com
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Changes to this policy</h2>
          <p>
            This policy may be updated as the site evolves. Material changes will be reflected by
            updating the "Last updated" date above.
          </p>
        </div>
      </div>
    </main>
  );
}