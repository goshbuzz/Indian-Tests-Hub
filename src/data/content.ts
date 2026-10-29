import type { Alert, MCQ, MockConfig, PastPaper, SyllabusItem } from "@/lib/types";
import { MCQ_BANK } from "./mcqBank";

/** Notices checked against the conducting body's published documents. */
export const ALERTS: Alert[] = [
  {
    id: "al-jee-main-2027-session-1",
    test_id: "jee-main",
    type: "announcement",
    title: "JEE Main 2027 Session 1 — applications open until 22 November",
    body: "NTA's notice lists the regular application deadline as 22 November 2026 at 11:50 PM IST, with a late-fee window on 23–26 November. Check NTA for any updates before applying.",
    source_url: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/10/20261024390682350.pdf",
    published_at: "2026-10-24T00:00:00Z",
    checked_at: "2026-10-30",
  },
  {
    id: "al-mat-december-2026",
    test_id: "mat",
    type: "announcement",
    title: "MAT December 2026 — registration deadlines",
    body: "AIMA lists 14 December 2026 as the paper-based test registration deadline and 21 December for the computer-based test. Test dates are 20 and 27 December respectively. Confirm any updates with AIMA before applying.",
    source_url: "https://www.aima.in/content/testing-and-assessment/mat/mat",
    checked_at: "2026-10-30",
  },
];

/** Practice MCQs (all subjects) — kept for API compatibility; per-test lists come from coverage.ts. */
export const MCQS: MCQ[] = MCQ_BANK;

export const MOCKS: MockConfig[] = [];
export const PAST_PAPERS: PastPaper[] = [];
export const SYLLABUS: SyllabusItem[] = [];
