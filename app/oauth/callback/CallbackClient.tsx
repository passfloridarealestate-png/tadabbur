"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Status = "loading" | "redirecting" | "error";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.tadabbur.tadabbur";

export default function CallbackClient() {
  const [status, setStatus] = useState<Status>("loading");
  const [deepLink, setDeepLink] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");
    const errorDescription = params.get("error_description");
    const code = params.get("code");
    const state = params.get("state");

    if (error) {
      setErrorMessage(errorDescription ?? error);
      setStatus("error");
      return;
    }

    if (!code || !state) {
      setErrorMessage(
        "Missing authorization code or state. Please try signing in again."
      );
      setStatus("error");
      return;
    }

    const link = `com.tadabbur.tadabbur://oauth/callback?code=${encodeURIComponent(
      code
    )}&state=${encodeURIComponent(state)}`;
    setDeepLink(link);
    setStatus("redirecting");

    const timer = window.setTimeout(() => {
      window.location.href = link;
    }, 150);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="section-padding">
      <div className="mx-auto max-w-lg px-6 pt-24 text-center">
        <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-4 block">
          Tadabbur
        </span>

        {status === "loading" && (
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            One moment
          </h1>
        )}

        {status === "redirecting" && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Returning to Tadabbur
            </h1>
            <p className="text-text-secondary text-lg mb-12">
              Taking you back to the app to finish signing in.
            </p>

            <div className="card-sacred p-8 mb-8">
              <p className="text-text-secondary mb-6">
                Didn&rsquo;t get redirected automatically?
              </p>
              {deepLink && (
                <a href={deepLink} className="btn-primary inline-flex">
                  Open Tadabbur app
                </a>
              )}
            </div>

            <p className="text-sm text-text-muted">
              Don&rsquo;t have the app yet?{" "}
              <a
                href={PLAY_STORE_URL}
                className="text-gold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download from Google Play
              </a>
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Sign in failed
            </h1>
            <p className="text-text-secondary text-lg mb-12">
              We could not complete your sign in. Please try again from the
              Tadabbur app.
            </p>

            <div className="card-sacred p-8 mb-8 text-left">
              <p className="text-text-secondary text-sm mb-2 uppercase tracking-wider">
                Reason
              </p>
              <p className="text-text-primary font-mono text-sm break-words">
                {errorMessage}
              </p>
            </div>

            <Link href="/" className="text-gold hover:underline text-sm">
              Back to home
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
