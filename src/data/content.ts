import type { Alert, MCQ, MockConfig, PastPaper, SyllabusItem } from "@/lib/types";
import { MCQ_BANK } from "./mcqBank";

/** Curated notices (verified from listings dated 29 Oct 2026). Add more as they are checked. */
export const ALERTS: Alert[] = [
  {
    id: "al-ntpc-grad-2026",
    test_id: "ntpc",
    type: "announcement",
    title: "RRB NTPC Graduate Recruitment 2026 — apply by 6 Nov 2026",
    body: "About 3,548 posts reported in October 2026 listings. Confirm the exact notice and last date on the RRB site.",
    source_url: "https://www.rrbcdg.gov.in",
    published_at: "2026-10-08T08:00:00Z",
  },
  {
    id: "al-tnpsc-g4-2026",
    test_id: "tnpsc-g4",
    type: "new_date",
    title: "TNPSC Group IV 2026 — exam on 10 Jan 2027",
    body: "About 6,574 posts; online applications close 5 Nov 2026, 11:59 PM, per October 2026 listings.",
    source_url: "https://www.tnpsc.gov.in",
    published_at: "2026-10-06T08:00:00Z",
  },
  {
    id: "al-mp-police-driver-2026",
    test_id: "mp-police",
    type: "announcement",
    title: "MP Police Constable (Driver) 2026 — last date 29 Oct 2026",
    body: "About 1,000 posts; written test, physical test and trade test as per the notice. Apply on the MPESB site today.",
    source_url: "https://esb.mp.gov.in",
    published_at: "2026-10-15T08:00:00Z",
  },
];

/** Practice MCQs (all subjects) — kept for API compatibility; per-test lists come from coverage.ts. */
export const MCQS: MCQ[] = MCQ_BANK;

export const MOCKS: MockConfig[] = [];
export const PAST_PAPERS: PastPaper[] = [];
export const SYLLABUS: SyllabusItem[] = [];
