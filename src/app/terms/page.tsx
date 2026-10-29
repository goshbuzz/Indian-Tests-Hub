import type { Metadata } from "next";
import { PageFaq } from "@/components/PageFaq";
import { PAGE_FAQS } from "@/data/pageFaqs";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Terms of Use — Indian Tests Hub" },
  description: `${SITE_NAME} is unofficial practice material. Rules, dates and fees are authoritative only on official conducting-body sites.`,
  alternates: { canonical: `${SITE_URL}/terms` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/terms`,
    title: `Terms — ${SITE_NAME}`,
    description: "Unofficial study material. Check every date, fee and rule on the official site.",
    images: [OG_IMAGE],
  },
};

export default function TermsPage() {
  return (
    <article className="max-w-2xl space-y-4 text-sm leading-relaxed">
      <h1 className="text-2xl font-semibold">Terms of Use</h1>
      <p>
        Indian Tests Hub is an independent study project. It is not an official exam portal and is not affiliated with any exam body.
        Its material is unofficial practice content.
      </p>
      <p>
        Exam rules, patterns, fees, dates and eligibility are authoritative only on the official sites of the conducting bodies. Where
        a pattern is marked approximate, check the official notice before you prepare or apply.
      </p>
      <p>
        Practice scores and mock results are not official results and have no bearing on any selection. Do not use this site to submit
        applications; the hub never takes them.
      </p>
      <p>
        Content is provided as-is, without warranty. The hub shows no advertisements in this build.
      </p>
      <PageFaq items={PAGE_FAQS.terms} title="Terms — quick answers" idPrefix="terms-faq" />
    </article>
  );
}
