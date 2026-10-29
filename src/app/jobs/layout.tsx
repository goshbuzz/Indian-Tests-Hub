import type { Metadata } from "next";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Govt Jobs India 2026 — Railways, Banks, SSC & State Recruitment" },
  description:
    "Current central and state recruitment notices with posts, last date and the official apply link on every listing.",
  alternates: { canonical: `${SITE_URL}/jobs` },
  keywords: ["India government jobs", "RRB NTPC 2026", "TNPSC Group 4 2026", "SSC jobs 2026", "bank jobs India", "police constable jobs"],
  openGraph: {
    type: "website",
    url: `${SITE_URL}/jobs`,
    title: "Government jobs India — current ads & official apply links",
    description: "Railway, bank, police, SSC and state PSC recruitment, each mapped to its free prep test page.",
    images: [OG_IMAGE],
  },
};

export default function JobsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
