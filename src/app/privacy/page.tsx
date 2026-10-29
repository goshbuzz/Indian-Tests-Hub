import type { Metadata } from "next";
import { PageFaq } from "@/components/PageFaq";
import { PAGE_FAQS } from "@/data/pageFaqs";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy — Indian Tests Hub" },
  description: `How ${SITE_NAME} handles data: progress and settings stay in your browser, with no ads or analytics.`,
  alternates: { canonical: `${SITE_URL}/privacy` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/privacy`,
    title: `Privacy — ${SITE_NAME}`,
    description: "Practice data stays on your device. No ads, no analytics.",
    images: [OG_IMAGE],
  },
};

export default function PrivacyPage() {
  return (
    <article className="max-w-2xl space-y-4 text-sm leading-relaxed">
      <h1 className="text-2xl font-semibold">Privacy Policy</h1>
      <p>
        Indian Tests Hub is an independent, free self-study site for exam preparation in India. Logins, mock scores, syllabus
        progress and settings are stored in your browser (IndexedDB and local storage) on the device you use.
      </p>
      <p>
        This build shows no advertisements and uses no analytics or tracking tags. We do not sell personal data.
      </p>
      <p>
        If you enable notifications, alerts are shown by your browser on that device. You can switch them off in your browser or in
        Profile. Clearing the site’s data removes everything stored locally.
      </p>
      <p>
        When you open an official apply page from this site, you leave this site and that official site’s own privacy policy applies.
      </p>
      <PageFaq items={PAGE_FAQS.privacy} title="Privacy — quick answers" idPrefix="privacy-faq" />
    </article>
  );
}
