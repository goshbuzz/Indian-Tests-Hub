export type Faq = { q: string; a: string };

export const GLOBAL_FAQS: Faq[] = [
  {
    q: "What is Indian Tests Hub?",
    a: "Indian Tests Hub is a free self-study website for Indian competitive and entrance exams. Coverage includes central, state and university exams. Patterns may be approximate and practice material or mocks may be incomplete or unavailable; consult the official notice. Interface and syllabus topics are available in English and Hindi; practice questions are in English.",
  },
  {
    q: "Does Indian Tests Hub sell coaching or leaked papers?",
    a: "No. It is a study aid built from public syllabi and official notices. It does not host leaked question papers, and it does not sell coaching. Apply and pay only on the official website of the conducting body.",
  },
  {
    q: "Can I switch the site to Hindi?",
    a: "Yes. Use the language switch in Profile (भाषा). The interface, test names, exam patterns and syllabus topics then show in Hindi. Practice questions stay in English, as in most official papers.",
  },
  {
    q: "How accurate are the exam patterns?",
    a: "Some patterns are marked verified, while others are approximate. A linked source and cycle are shown where recorded; verification is not a guarantee for future cycles. Always compare details with the official notification for your exam year.",
  },
  {
    q: "Is it free and do I need an account?",
    a: "The hub is free. You can browse and practise as a guest. An account is only needed to save progress, streaks and notifications on your device.",
  },
  {
    q: "Where are my practice scores stored?",
    a: "Attempts, syllabus ticks and settings are stored in your browser's local database (IndexedDB), so they stay on this device.",
  },
];

/** Per-test FAQ block (used for SEO on /tests/[id]). */
export function faqsForTest(name: string, body: string, format: string): Faq[] {
  return [
    {
      q: `How do I prepare for ${name} in India?`,
      a: `${name} is conducted by ${body}. Pattern: ${format} Available practice and mock coverage varies and may be incomplete. Check the official notice for the current year.`,
    },
    {
      q: `Where do I apply for ${name}?`,
      a: `Apply only on the official site of ${body}. Open the Apply tab on the ${name} page to reach it. Keep Aadhaar, photographs, certificates and the fee receipt ready.`,
    },
    {
      q: `Is there negative marking in ${name}?`,
      a: `Negative marking and section timing depend on the examination and question type. Consult the current official notice for ${name}.`,
    },
  ];
}
