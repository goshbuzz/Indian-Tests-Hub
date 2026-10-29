export type Faq = { q: string; a: string };

export const GLOBAL_FAQS: Faq[] = [
  {
    q: "What is Indian Tests Hub?",
    a: "Indian Tests Hub is a free self-study website for Indian competitive and entrance exams. It covers central, state and university exams — NEET, JEE, CUET, GATE, CAT, UPSC, SSC, RRB, IBPS, SBI, state PSCs, police, teaching and armed forces — with the official exam pattern, a syllabus checklist, practice MCQs, timed mocks and links to the official apply pages in English and Hindi.",
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
    a: "Patterns marked as verified come from the latest official notice we checked. Others are labelled as approximate on the test page. Always compare with the official notification for your exam year before you prepare.",
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
      a: `${name} is conducted by ${body}. Pattern: ${format} Use Indian Tests Hub for the syllabus checklist, practice MCQs in this exam's subjects and timed mocks that follow the pattern. Check the official notice for the current year.`,
    },
    {
      q: `Where do I apply for ${name}?`,
      a: `Apply only on the official site of ${body}. Open the Apply tab on the ${name} page to reach it. Keep Aadhaar, photographs, certificates and the fee receipt ready.`,
    },
    {
      q: `Is there negative marking in ${name}?`,
      a: `Check the pattern on this page. It states the penalty per wrong answer, if any, and the time per section.`,
    },
  ];
}
