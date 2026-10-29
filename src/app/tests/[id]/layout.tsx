import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { FaqList } from "@/components/FaqList";
import { faqsForTest } from "@/data/faqs";
import { TESTS } from "@/data/tests";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return TESTS.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const test = TESTS.find((t) => t.id === id);
  if (!test) return { title: { absolute: "Test not found" }, robots: { index: false } };
  // SERP-friendly lengths (Phase 5): ~60 visible title chars incl. the template suffix,
  // ~160 description chars. Long exam names fall back to a shorter base form.
  const clamp = (s: string, n: number) => (s.length <= n ? s : `${s.slice(0, n - 1).trimEnd()}…`);
  const long = `${test.name} Prep India 2026 — Syllabus, MCQs, Mocks`;
  const title = long.length <= 58 ? long : `${test.name} Prep — Syllabus, MCQs & Mocks`;
  const description = clamp(
    `${test.name} by ${test.conducting_body}: ${test.format_description} Practice coverage varies; check the official notice.`,
    168
  );
  const url = `${SITE_URL}/tests/${test.id}`;
  return {
    title,
    description,
    keywords: [test.name, `${test.name} MCQs`, `${test.name} syllabus`, `${test.name} mock`, test.conducting_body, "India jobs"],
    alternates: { canonical: url },
    openGraph: { description, url, type: "article", images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function TestLayout({ children, params }: { children: React.ReactNode; params: Promise<{ id: string }> }) {
  const { id } = await params;
  const test = TESTS.find((t) => t.id === id);
  const faqs = test ? faqsForTest(test.name, test.conducting_body, test.format_description) : [];
  const ld = test
    ? [
        {
          "@context": "https://schema.org",
          "@type": "Course",
          name: `${test.name} self-study`,
          description: test.format_description,
          provider: {
            "@type": "EducationalOrganization",
            name: SITE_NAME,
            url: SITE_URL,
            publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          },
          educationalLevel: test.career_stage,
          inLanguage: ["en", "hi"],
          url: `${SITE_URL}/tests/${test.id}`,
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ]
    : [];

  return (
    <>
      {ld.length > 0 && <JsonLd data={ld} />}
      {children}
      {faqs.length > 0 && <FaqList items={faqs} title={`${test?.name} FAQ`} />}
    </>
  );
}
