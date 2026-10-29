import type { Metadata } from "next";
import { PageFaq } from "@/components/PageFaq";
import { PAGE_FAQS } from "@/data/pageFaqs";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact — Corrections & Suggestions" },
  description: `Report a wrong pattern, syllabus topic or dead link on ${SITE_NAME}, or suggest a new exam.`,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/contact`,
    title: `Contact ${SITE_NAME}`,
    description: "Content corrections and suggestions for new exams.",
    images: [OG_IMAGE],
  },
};

export default function ContactPage() {
  return (
    <article className="max-w-2xl space-y-4 text-sm">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p>For a correction or a new exam suggestion, use one of these routes:</p>
      <ul className="list-disc pl-5">
        <li>The “Suggest an update” box on any test page. Suggestions are saved on your device for review.</li>
        <li>For dates, fees, eligibility or applications, contact the conducting body directly. Only its official site is authoritative.</li>
      </ul>
      <p className="text-stone-600">
        Please include the test name, the page link and the official notice that shows the correct detail.
      </p>
      <PageFaq items={PAGE_FAQS.contact} title="Before you write — quick answers" idPrefix="contact-faq" />
    </article>
  );
}
