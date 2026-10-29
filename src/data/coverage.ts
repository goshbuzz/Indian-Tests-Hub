import { TESTS, TEST_BY_ID } from "./tests";
import { FAMILIES, SYLLABUS as TOPICS } from "./families";
import { ALERTS } from "./content";
import { MCQ_BANK, bankSubjectFor } from "./mcqBank";
import { familyOf, paperShape, slotCount, Slot } from "./mockShape";
import { applyUrl } from "./applyUrls";
import type { Alert, MCQ, MockConfig, PastPaper, PrepPack, SyllabusItem } from "@/lib/types";

export { paperShape } from "./mockShape";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Test lookup (client- and server-safe). */
export function testById(id: string) {
  return TEST_BY_ID[id];
}

/** Syllabus rows for a test, built from its pattern sections and the shared topic lists. */
export function syllabusFor(testId: string): SyllabusItem[] {
  const f = familyOf(testId);
  const t = TEST_BY_ID[testId];
  if (!f || !t) return [];
  const rows: SyllabusItem[] = [];
  for (const [subject, q] of f.sections) {
    const raw = TOPICS[subject] ?? "";
    const pairs = raw
      .split(";")
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => {
        const [a, b] = p.split(":");
        // Entries are "English:हिंदी" (some legacy entries are the reverse; detect by script).
        const isHi = (x: string) => /[\u0900-\u097F]/.test(x);
        return isHi(a ?? "") && !isHi(b ?? "") ? { en: b, hi: a } : { en: a, hi: b ?? a };
      });
    const topics = pairs.length ? pairs : [{ en: `${subject} — core topics`, hi: `${subject} — मुख्य विषय` }];
    const w = Math.max(1, Math.round(q / topics.length));
    topics.forEach((tp) => {
      rows.push({
        id: `${testId}-sy-${rows.length}`,
        test_id: testId,
        subject,
        topic: tp.en ?? "",
        subtopic: tp.hi ?? "",
        weightage: w,
      });
    });
  }
  return rows;
}

/** Practice MCQs for a test: bank questions for the subjects in its pattern. */
export function mcqsFor(testId: string): MCQ[] {
  const f = familyOf(testId);
  if (!f) return [];
  const keys = new Set(f.sections.flatMap(([s]) => bankSubjectFor(s)));
  return MCQ_BANK.filter((m) => keys.has(m.subject)).map((m) => ({ ...m, test_id: testId, id: `${testId}-${m.id}` }));
}

/** Papers: the official site is the only verified source, so that is what we link to. */
export function papersFor(testId: string): PastPaper[] {
  const t = TEST_BY_ID[testId];
  if (!t) return [];
  return [
    {
      id: `${testId}-official`,
      test_id: testId,
      year: 2026,
      conducting_body_variant: `${t.conducting_body} — previous-year papers, notices & syllabus`,
      file_url: applyUrl(testId, t.official_url),
      source: applyUrl(testId, t.official_url),
      verified: true,
    },
  ];
}

export const ALL_MOCKS: MockConfig[] = TESTS.map((t) => {
  const shape = paperShape(t.id, t.category);
  return {
    id: `mk-${t.id}`,
    test_id: t.id,
    time_limit_minutes: shape.minutes,
    negative_marking: shape.negative,
    negative_value: shape.negativeValue,
    question_count: slotCount(shape),
  };
});

export function alertsFor(testId: string): Alert[] {
  return ALERTS.filter((a) => a.test_id === testId);
}

/** Curated alerts across all tests (home and alerts page). */
export const ALL_ALERTS: Alert[] = ALERTS;

const DOCS_COMMON = [
  "Aadhaar card (original and photocopy)",
  "Passport-size photograph and signature as per the notice's specs",
  "Class 10 and Class 12 marksheets / certificates",
  "Category certificate (SC/ST/OBC/EWS) if claimed",
  "Domicile certificate (state exams) if required",
  "Payment receipt for the application fee",
];

export function prepPackFor(testId: string): PrepPack | undefined {
  const t = TEST_BY_ID[testId];
  if (!t) return undefined;
  const extra: string[] = [];
  if (t.category === "Police") extra.push("Physical standard test (height, chest, running) as per notice");
  if (t.category === "Armed Forces") extra.push("Medical fitness certificate and NOC if serving");
  if (t.category === "Professional") extra.push("Institute registration / enrolment number");
  if (t.category === "Teaching") extra.push("B.Ed. / D.El.Ed. / TET certificates as applicable");
  return {
    test_id: testId,
    documents: [...DOCS_COMMON, ...extra],
    challan: t.fee_info,
    apply_url: applyUrl(testId, t.official_url),
    apply_label: `Apply / register on ${t.conducting_body}`,
  };
}

export const MOCK_SLOTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

export function mockLevel(n: number): "easy" | "medium" | "hard" {
  if (n <= 3) return "easy";
  if (n <= 7) return "medium";
  return "hard";
}

function takeSubject(pool: MCQ[], subject: string | undefined, n: number): MCQ[] {
  const keys = subject ? bankSubjectFor(subject) : null;
  const rows = keys ? pool.filter((m) => keys.includes(m.subject)) : pool;
  const seen = new Set<string>();
  return shuffle(rows).filter((m) => {
    if (seen.has(m.question_text)) return false;
    seen.add(m.question_text);
    return true;
  }).slice(0, n);
}

/** Timed paper built from the test's own section pattern and the practice bank. */
export function questionsForPaper(testId: string, year?: number, mockN = 1, salt = ""): MCQ[] {
  const shape = paperShape(testId);
  const pool = mcqsFor(testId);
  const n = Math.min(10, Math.max(1, mockN));
  const lvl = mockLevel(n);
  const out: MCQ[] = [];
  const used = new Set<string>();
  shape.slots.forEach((slot: Slot, sectionIndex: number) => {
    const leftover = pool.filter((m) => !used.has(m.question_text));
    const got = takeSubject(leftover, slot.subject, slot.n);
    got.forEach((q) => {
      used.add(q.question_text);
      out.push({
        ...q,
        paper_section: sectionIndex,
        id: `${q.id}-m${n}-${salt || "x"}-${out.length}`,
        difficulty: lvl,
        topic: `${q.topic} · L${n} ${lvl} · ${year ?? 2026}`,
      });
    });
  });
  return out;
}

export { FAMILIES };
