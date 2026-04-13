import type { Metadata } from "next";
import CallbackClient from "./CallbackClient";

export const metadata: Metadata = {
  title: "Signing you in — Tadabbur",
  description:
    "Completing your sign in and returning to the Tadabbur app.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OAuthCallbackPage() {
  return <CallbackClient />;
}
