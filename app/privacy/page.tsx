import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Tadabbur",
  description:
    "Privacy policy for the Tadabbur app — a daily Quranic contemplation app.",
};

export default function PrivacyPage() {
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
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-text-muted text-sm">
            Last updated: April 8, 2026
          </p>
        </header>

        {/* Content */}
        <article className="prose prose-invert max-w-none space-y-10 text-text-secondary leading-relaxed">
          <section>
            <p className="text-lg">
              Tadabbur (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;)
              is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, and safeguard information when you
              use the Tadabbur mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">
              Account Information
            </h3>
            <p>
              When you sign in with Google, Apple, or Quran.com, we receive your
              name, email address, and profile image as provided by the
              identity provider. You may also use Tadabbur as a guest without
              creating an account.
            </p>

            <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">
              Reflections and Bookmarks
            </h3>
            <p>
              Reflections you write and verses you bookmark are stored locally
              on your device. If you are signed in, they are also synced to our
              secure cloud (Google Firestore) so you can access them across
              devices.
            </p>

            <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">
              Analytics and Crash Reports
            </h3>
            <p>
              We use Firebase Analytics and Firebase Crashlytics to understand
              how the app is used and to diagnose crashes. This includes device
              type, operating system version, app version, language, and
              anonymized usage events (e.g. &ldquo;ayah completed&rdquo;,
              &ldquo;reflection added&rdquo;). We do not collect the content of
              your reflections for analytics.
            </p>

            <h3 className="text-lg font-semibold text-text-primary mt-6 mb-2">
              Preferences
            </h3>
            <p>
              Your language, reciter, font size, and notification time are
              stored locally on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To deliver daily ayah content, translations, and audio</li>
              <li>To save and sync your reflections, bookmarks, and progress</li>
              <li>To send daily reflection reminders (with your permission)</li>
              <li>To improve the app through anonymized analytics</li>
              <li>To diagnose and fix crashes</li>
            </ul>
            <p className="mt-4">
              We do not sell, rent, or share your personal information with
              third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              3. Third-Party Services
            </h2>
            <p>Tadabbur uses the following trusted third-party services:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong className="text-text-primary">Firebase</strong> (Google)
                — authentication, cloud storage, analytics, crash reporting
              </li>
              <li>
                <strong className="text-text-primary">Quran Foundation API</strong>{" "}
                — Quran text, translations, tafsir, and audio recitation
              </li>
              <li>
                <strong className="text-text-primary">Google Sign-In</strong> and{" "}
                <strong className="text-text-primary">Sign in with Apple</strong>{" "}
                — optional authentication
              </li>
            </ul>
            <p className="mt-4">
              Each service has its own privacy policy. We encourage you to
              review them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              4. Data Security
            </h2>
            <p>
              Authentication tokens are encrypted and stored securely on your
              device using platform-native secure storage. All network
              communication is encrypted via HTTPS. Cloud data is stored in
              Google Firestore with access controls that restrict reads and
              writes to the authenticated user only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              5. Offline Use
            </h2>
            <p>
              Tadabbur is designed to work offline. Your reflections, bookmarks,
              and progress are always saved locally first, then synced to the
              cloud when you reconnect. You can use the entire app as a guest
              without any data leaving your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              6. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Access the personal information we hold about you</li>
              <li>
                Delete your account and all associated data at any time from
                within the app settings
              </li>
              <li>Opt out of analytics and crash reporting</li>
              <li>Export your reflections as text</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              7. Children&rsquo;s Privacy
            </h2>
            <p>
              Tadabbur is suitable for users of all ages and does not
              knowingly collect personal information from children under 13
              beyond what is necessary to provide the service. Parents and
              guardians who believe we may have collected information about a
              child should contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of significant changes through the app or by updating
              the &ldquo;Last updated&rdquo; date above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">
              9. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or your data,
              please contact us at:
            </p>
            <p className="mt-4">
              <a
                href="mailto:taukheermohammed@gmail.com"
                className="text-gold hover:underline"
              >
                taukheermohammed@gmail.com
              </a>
            </p>
          </section>
        </article>

        {/* Footer link */}
        <div className="geometric-divider my-16" />
        <div className="text-center">
          <Link
            href="/"
            className="text-text-secondary hover:text-gold transition-colors text-sm"
          >
            ← Return to Tadabbur
          </Link>
        </div>
      </div>
    </main>
  );
}
