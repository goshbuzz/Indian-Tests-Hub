import type { Metadata } from "next";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "India Exam Alerts — Admit Cards, Results & Dates" },
  description:
    "Exam dates, admit cards, results and deadline notices for NEET, SSC, RRB, UPSC, state exams and other Indian tests, from official sources.",
  alternates: { canonical: `${SITE_URL}/alerts` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/alerts`,
    title: "India exam & job alerts — dates, admit cards, results",
    description: "A focused feed of conducting-body notices for the tests you follow.",
    images: [OG_IMAGE],
  },
};

export default function AlertsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
