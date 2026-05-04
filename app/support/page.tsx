import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — Tadabbur",
  description:
    "Get help with the Tadabbur app — contact us, browse FAQs, or submit feedback.",
};

export default function SupportPage() {
  return (
    <main className="section-padding">
      <div className="mx-auto max-w-3xl px-6 pt-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-gold transition-colors text-sm mb-12"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to home
        </Link>

        {/* Header */}
        <header className="mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
            Support
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            We&rsquo;re here to help
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            Questions, bugs, feature requests, content corrections — every
            message reaches us directly. We read each one.
          </p>
        </header>

        {/* Contact section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-text-primary mb-6">
            Two ways to reach us
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* In-app feedback */}
            <div className="rounded-2xl border border-text-secondary/10 p-6 bg-surface/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gold"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  From inside the app
                </h3>
              </div>
              <p className="text-text-secondary leading-relaxed mb-4">
                Open Tadabbur, go to <strong className="text-text-primary">Settings</strong> →
                <strong className="text-text-primary"> Send Feedback</strong>. Choose a
                category (General, Bug Report, Feature Request, Content Issue),
                type your message, and tap Send.
              </p>
              <p className="text-text-muted text-sm">
                Your account identity is included automatically so we can
                follow up.
              </p>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-text-secondary/10 p-6 bg-surface/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gold"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  Email us directly
                </h3>
              </div>
              <p className="text-text-secondary leading-relaxed mb-4">
                Prefer email? Write to us at:
              </p>
              <a
                href="mailto:thetadabburapp@gmail.com"
                className="inline-block text-gold hover:underline font-medium break-all"
              >
                thetadabburapp@gmail.com
              </a>
              <p className="text-text-muted text-sm mt-4">
                We typically respond within 24&ndash;48 hours.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-text-primary mb-8">
            Frequently asked questions
          </h2>

          <div className="space-y-8">
            <FaqItem question="How do I change my reciter?">
              Open <strong>Settings</strong> &rarr; <strong>Recitation</strong> and
              choose from seven world-renowned reciters: Mishari Rashid Al-Afasy,
              Mahmoud Khalil Al-Hussary, Abdul Rahman Al-Sudais, Saud Al-Shuraim,
              Maher Al-Muaiqly, Abdul Basit Abdul Samad, and Hani Ar-Rifai.
            </FaqItem>

            <FaqItem question="How do I change the translation language?">
              Open <strong>Settings</strong> &rarr; <strong>Language</strong>.
              Tadabbur supports 19 languages with full UI translation: English,
              Arabic, Urdu, French, Spanish, Turkish, Indonesian, Malay,
              Bengali, Hindi, German, Russian, Portuguese, Persian, Tamil,
              Swahili, Chinese, Japanese, and Korean.
            </FaqItem>

            <FaqItem question="What's the difference between the three reflection tiers?">
              <strong>Acknowledge</strong> is one tap on a hard day &mdash; the
              streak counts.{" "}
              <strong>Respond</strong> is a one-line response when something
              stirs.{" "}
              <strong>Reflect</strong> is a longer journal entry (eighty
              characters or more) when a verse genuinely lands. The
              all-or-nothing failure mode that kills habit apps doesn&rsquo;t
              exist here.
            </FaqItem>

            <FaqItem question="What is Quran Reflect and how does sharing work?">
              Quran Reflect (
              <a
                href="https://quran.com/reflect"
                className="text-gold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                quran.com/reflect
              </a>
              ) is a public reflection feed operated by the Quran Foundation.
              When you write a tier-3 reflection while signed in with Quran
              Foundation, you&rsquo;ll see an opt-in toggle to share that
              specific reflection publicly. Sharing is opt-in per reflection
              &mdash; the default is private. Reflections you don&rsquo;t
              toggle remain in your private journal.
            </FaqItem>

            <FaqItem question="How do streaks work?">
              Your streak counts the number of consecutive days you&rsquo;ve
              shown up &mdash; even one tap on Acknowledge counts. Tadabbur
              gives you three &ldquo;freezes&rdquo; per streak that absorb
              missed days without breaking the thread. Life happens; the
              practice continues.
            </FaqItem>

            <FaqItem question="Does Tadabbur work offline?">
              Yes. Daily ayat, Arabic text, transliteration, tafsir summaries
              (over 1,300 pre-bundled), and editorial content all work without
              an internet connection. Audio recitation requires connectivity
              the first time a verse is played; afterwards it&rsquo;s cached
              for offline replay.
            </FaqItem>

            <FaqItem question="How do I delete my account?">
              Open <strong>Settings</strong> &rarr; <strong>Account</strong>{" "}
              &rarr; <strong>Delete account</strong>. Or visit our{" "}
              <Link
                href="/delete-account"
                className="text-gold hover:underline"
              >
                account deletion page
              </Link>{" "}
              for the full process.
            </FaqItem>

            <FaqItem question="I found a translation or content error. What do I do?">
              Tap <strong>Settings</strong> &rarr; <strong>Send Feedback</strong>,
              choose <strong>Content Issue</strong>, and describe the verse and
              what looks wrong. We take Quran content accuracy seriously and
              will investigate every report. Quran text and translations are
              sourced from{" "}
              <a
                href="https://quran.com"
                className="text-gold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                quran.com
              </a>{" "}
              via the Quran Foundation API.
            </FaqItem>

            <FaqItem question="Why don't I see my journal entries on a new device after I sign in?">
              Reflections sync across devices when you&rsquo;re signed in with
              Google, Apple, or Quran Foundation. After signing in on a new
              device, give it a few seconds to pull entries from the cloud.
              If you stayed in Guest mode, your reflections are stored only on
              that specific device &mdash; sign in to enable cross-device
              sync going forward.
            </FaqItem>
          </div>
        </section>

        {/* Quick links */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-text-primary mb-6">
            More resources
          </h2>
          <div className="space-y-3">
            <Link
              href="/privacy"
              className="block text-gold hover:underline"
            >
              Privacy policy &rarr;
            </Link>
            <Link
              href="/delete-account"
              className="block text-gold hover:underline"
            >
              Delete your account &rarr;
            </Link>
          </div>
        </section>

        {/* Footer link */}
        <div className="geometric-divider my-16" />
        <div className="text-center">
          <Link
            href="/"
            className="text-text-secondary hover:text-gold transition-colors text-sm"
          >
            &larr; Return to Tadabbur
          </Link>
        </div>
      </div>
    </main>
  );
}

function FaqItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-text-secondary/10 pb-8 last:border-0">
      <h3 className="text-lg font-semibold text-text-primary mb-3">
        {question}
      </h3>
      <p className="text-text-secondary leading-relaxed">{children}</p>
    </div>
  );
}
