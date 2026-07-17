export const metadata = { title: "Terms of Use — Tebatso Seshayi" };

export default function TermsOfUse() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20 max-w-2xl mx-auto">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
        Terms of Use
      </h1>
      <p className="text-sm text-[var(--color-text-faint)] mb-8">Last updated: 18 July 2026</p>

      <div className="space-y-6 text-sm text-[var(--color-text-muted)] leading-relaxed">
        <p>
          By accessing this website, you agree to the following terms. If you don't agree, please
          don't use this site.
        </p>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Intellectual property</h2>
          <p>
            The design, layout, original written content, and code architecture of this website are
            owned by Tebatso Seshayi unless otherwise noted. Project case studies describe work
            completed for or with third-party clients; trademarks, logos, and brand names belonging
            to those clients or to other companies remain the property of their respective owners.
          </p>
        </div>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Acceptable use</h2>
          <p>
            You may browse this site for personal, non-commercial purposes. You agree not to
            attempt to disrupt the site's operation, scrape content at scale, or use the contact
            form to send spam, unsolicited advertising, or unlawful content.
          </p>
        </div>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Accuracy of information</h2>
          <p>
            I make reasonable efforts to keep the content on this site — including project
            descriptions, skills, and experience — accurate and current. However, this site is
            provided "as is" without warranties of any kind, and I don't guarantee that all
            information is free of errors or omissions at all times.
          </p>
        </div>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Third-party links</h2>
          <p>
            This site links to external websites (client projects, GitHub repositories,
            certification issuers, social profiles). I'm not responsible for the content, policies,
            or availability of those third-party sites.
          </p>
        </div>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Limitation of liability</h2>
          <p>
            To the extent permitted by law, I'm not liable for any indirect, incidental, or
            consequential damages arising from your use of this site.
          </p>
        </div>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Governing law</h2>
          <p>These terms are governed by the laws of South Africa.</p>
        </div>

        <div>
          <h2 className="text-[var(--color-text-primary)] font-medium mb-2">Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href="mailto:seshayit@gmail.com" className="underline">
              seshayit@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}