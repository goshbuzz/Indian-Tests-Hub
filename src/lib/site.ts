export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://indiantestshub.vercel.app").replace(/\/$/, "");

export const SITE_NAME = "Indian Tests Hub";

export const SITE_TAGLINE =
  "Free NEET, JEE, CUET, GATE, CAT, UPSC, SSC, RRB, IBPS, SBI and 200+ Indian exams — official pattern, syllabus, MCQs, mocks and official apply links, in English and Hindi.";

/**
 * Brand Open Graph cover (public/og-cover.png, 1424×752 ≈ 1.9:1 as Google recommends).
 * Spread into every indexable page's openGraph — Next only merges OG top-level, so a
 * page that defines its own openGraph block must also set `images` or lose og:image.
 */
export const OG_IMAGE = {
  url: "/og-cover.png",
  width: 1424,
  height: 752,
  alt: "Indian Tests Hub — every major India test. One free hub.",
} as const;

export const DEFAULT_KEYWORDS = [
  "government jobs India",
  "NEET preparation",
  "JEE Main mock test",
  "SSC CGL preparation",
  "RRB NTPC mock test",
  "IBPS PO MCQs",
  "UPSC prelims practice",
  "GATE syllabus",
  "CUET UG mock test",
  "CAT preparation",
  "state PSC exam pattern",
  "CTET syllabus in Hindi",
  "free mock tests India",
  "exam pattern India",
  "sarkari exam in Hindi",
];
