import type { Metadata } from "next";
import { PageFaq } from "@/components/PageFaq";
import { PAGE_FAQS } from "@/data/pageFaqs";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "About Indian Tests Hub — free exam prep for India" },
  description:
    "Why this hub exists: free, honest prep for 200+ Indian exams — official exam patterns, original MCQs, timed mocks and official apply links, in English and Hindi.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    type: "profile",
    url: `${SITE_URL}/about`,
    title: `About ${SITE_NAME}`,
    description: "Why a free, honest, official-links-only exam prep hub exists for Indian students and job seekers.",
    images: [OG_IMAGE],
  },
};

export default function AboutPage() {
  return (
    <article className="max-w-2xl space-y-4 text-sm leading-relaxed">
      <h1 className="text-2xl font-semibold">About Indian Tests Hub</h1>
      <p>
        Indian Tests Hub is an independent, free self-study site. It is not affiliated with any exam body and is not an official
        government website.
      </p>
      <p>
        It helps students and job seekers prepare for NEET, JEE, CUET, GATE, CAT, UPSC, SSC, RRB, IBPS, SBI, state PSCs, police,
        teaching and armed forces exams without paying an academy. Each test shows its exam pattern, a syllabus checklist, practice
        MCQs, timed mocks and a link to the conducting body’s official site. Pattern text is available in English and Hindi.
      </p>
      <p>
        We do not host leaked papers. Practice items are original, and patterns are checked against official notices. Where a pattern
        is still unconfirmed, the test page says so. You always apply on the official site.
      </p>
      <PageFaq items={PAGE_FAQS.about} title="About this project — quick answers" idPrefix="about-faq" />
    </article>
  );
}
