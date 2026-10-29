import type { Faq } from "./faqs";

/**
 * Page-level FAQ blocks (AEO/GEO): each indexable page answers its own visitors'
 * questions, and no two pages share the same Q&A.
 */
export const PAGE_FAQS: Record<string, Faq[]> = {
  explore: [
    { q: "How do I find the right exam for me?", a: "Filter by category (UG entrance, PG and research, central and state recruitment, PSC, banking, police, teaching, armed forces, professional) and by career stage (Matric, Intermediate, Graduate, Job Seeker, Professional)." },
    { q: "Which exams are covered?", a: "The hub covers central, state and university-level exams conducted in India, from NEET and JEE to SSC, RRB, IBPS, UPSC and state PSCs. Each test page shows its conducting body and official site." },
    { q: "Can I read the page in Hindi?", a: "Yes. Switch the language in Profile to Hindi (हिंदी) and category, test names and patterns switch with it." },
  ],
  jobs: [
    { q: "Where does the job list come from?", a: "Listings are curated manually and are not automatically synced. Confirm each opening, deadline and eligibility in the conducting body's official notice before applying." },
    { q: "Do you charge for applications?", a: "No. Application fees are paid only to the official body. Indian Tests Hub never takes money for an application." },
    { q: "Why is a listing missing?", a: "Listings are added after checking the official notice. A missing post usually means it has not been verified yet." },
  ],
  alerts: [
    { q: "What do alerts cover?", a: "Alerts cover new notifications, exam date announcements and results for the tests you follow. Each alert links to its official source." },
    { q: "Do alerts update automatically?", a: "No. Alerts are manually curated with links to their sources. Visit the conducting body's official site for the latest notices." },
  ],
  about: [
    { q: "Who runs Indian Tests Hub?", a: "It is an independent study project. It is not affiliated with any exam body, and it is not an official government website." },
    { q: "How often is content updated?", a: "The exam patterns and syllabus are reviewed against new official notices. The last update date is shown on each test page." },
  ],
  contact: [
    { q: "How do I report a wrong fact or pattern?", a: "Send the test name, the page link and the official notice that shows the correct detail. Corrections are checked against the official source." },
    { q: "Can I request a new exam?", a: "Yes. Send the exam name, conducting body and official site. Listings are added once the official site is confirmed." },
  ],
  privacy: [
    { q: "What data is stored?", a: "Your progress, attempts and settings are stored on your device in the browser's local database. The site does not sell personal data." },
    { q: "Can I delete my data?", a: "Yes. Clearing the site's data in your browser removes all locally stored progress and settings." },
  ],
  terms: [
    { q: "Is this site an official exam portal?", a: "No. It is a study aid. Register, apply and pay only on the official site of the conducting body." },
    { q: "Are the mock tests the real exam?", a: "No. Mocks are practice papers that follow the published pattern. Real papers, dates and cut-offs are set by the conducting body." },
  ],
};

export type PageFaqKey = keyof typeof PAGE_FAQS;
