import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Account — Tadabbur",
  description:
    "How to delete your Tadabbur account and associated data.",
};

export default function DeleteAccountPage() {
  return (
    <main className="section-padding">
      <div className="mx-auto max-w-2xl px-6 pt-24">
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
        <header className="mb-12">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
            Account
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Delete your account
          </h1>
          <p className="text-text-secondary text-lg">
            You can delete your Tadabbur account and all associated data at
            any time.
          </p>
        </header>

        {/* In-app instructions */}
        <section className="card-sacred p-8 mb-8">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Delete from inside the app
          </h2>
          <ol className="list-decimal pl-6 space-y-3 text-text-secondary">
            <li>Open the Tadabbur app on your device</li>
            <li>
              Go to the <strong className="text-text-primary">Settings</strong>{" "}
              tab (bottom right)
            </li>
            <li>
              Scroll down to{" "}
              <strong className="text-text-primary">Account</strong>
            </li>
            <li>
              Tap{" "}
              <strong className="text-text-primary">Delete Account</strong>
            </li>
            <li>Confirm the action</li>
          </ol>
          <p className="text-text-muted text-sm mt-6">
            This permanently removes your account, reflections, bookmarks,
            progress, and all cloud-synced data.
          </p>
        </section>

        {/* Email request */}
        <section className="card-sacred p-8 mb-8">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Request deletion by email
          </h2>
          <p className="text-text-secondary mb-4">
            If you can&rsquo;t access the app, send us an email requesting
            account deletion:
          </p>
          <a
            href="mailto:thetadabburapp@gmail.com?subject=Account%20Deletion%20Request"
            className="btn-primary inline-flex"
          >
            Email us to delete your account
          </a>
          <p className="text-text-muted text-sm mt-6">
            Include the email address linked to your Tadabbur account. We will
            process the request within 7 days.
          </p>
        </section>

        {/* What gets deleted */}
        <section className="card-sacred p-8 mb-8">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            What gets deleted
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-text-secondary">
            <li>Your account (name, email, profile)</li>
            <li>All reflections and journal entries</li>
            <li>All bookmarked verses</li>
            <li>Reading progress and streak history</li>
            <li>App preferences and settings</li>
            <li>Authentication tokens</li>
          </ul>
          <p className="text-text-muted text-sm mt-6">
            Anonymized analytics and crash reports may be retained for up to
            90 days for security and debugging purposes, then permanently
            deleted.
          </p>
        </section>

        {/* Footer */}
        <div className="geometric-divider my-12" />
        <div className="text-center">
          <Link
            href="/privacy"
            className="text-text-secondary hover:text-gold transition-colors text-sm"
          >
            Read our Privacy Policy →
          </Link>
        </div>
      </div>
    </main>
  );
}
