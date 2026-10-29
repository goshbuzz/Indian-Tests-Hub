import type { PastPaper } from "@/lib/types";

// Direct links listed on UPSC's official previous-question-papers page, checked 2026-10-30.
// We link to the Commission's files; no question papers are copied into the app.
const ARCHIVE = "https://www.upsc.gov.in/examinations/previous-question-papers";
const rows: [string[], string, string][] = [
  [["upsc-cse", "upsc-ifos"], "Civil Services Preliminary 2026 — General Studies Paper I", "QP_CSP_2026_GENERAL_STUDIES_PAPER-I_25052026.pdf"],
  [["upsc-cse", "upsc-ifos"], "Civil Services Preliminary 2026 — General Studies Paper II (CSAT)", "QP_CSP_2026_GENERAL_STUDIES_PAPER-II_25052026.pdf"],
  [["upsc-ies"], "IES/ISS 2026 — General Studies", "QP-IES-ISS-26-220626-GENERAL-STUDIES.pdf"],
  [["upsc-ies"], "IES/ISS 2026 — General English", "QP-IES-ISS-26-220626-GENERAL-ENGLISH.pdf"],
  [["upsc-ies"], "IES 2026 — Indian Economics", "QP-IES-ISS-26-220626-INDIAN-ECONOMICS.pdf"],
  [["upsc-ies"], "IES 2026 — General Economics Paper I", "QP-IES-ISS-26-220626-GENERAL-ECONOMICS-PAPER-I.pdf"],
  [["upsc-ies"], "IES 2026 — General Economics Paper II", "QP-IES-ISS-26-220626-GENERAL-ECONOMICS-PAPER-II.pdf"],
  [["upsc-ies"], "IES 2026 — General Economics Paper III", "QP-IES-ISS-26-220626-GENERAL-ECONOMICS-PAPER-III.pdf"],
  [["upsc-ies"], "ISS 2026 — Statistics Paper I", "QP-IES-ISS-26-220626-STATISTICS-PAPER-I.pdf"],
  [["upsc-ies"], "ISS 2026 — Statistics Paper II", "QP-IES-ISS-26-220626-STATISTICS-PAPER-II.pdf"],
  [["upsc-ies"], "ISS 2026 — Statistics Paper III", "QP-IES-ISS-26-220626-STATISTICS-PAPER-III.pdf"],
  [["upsc-ies"], "ISS 2026 — Statistics Paper IV", "QP-IES-ISS-26-220626-STATISTICS-PAPER-IV.pdf"],
  [["upsc-ese"], "Engineering Services Preliminary 2026 — General Studies and Engineering Aptitude", "QP_ESPE26_GenStud_EnggAptit_I_09022026.pdf"],
  [["upsc-ese"], "Engineering Services Preliminary 2026 — Electrical Engineering", "QP_ESPE26_ElecEngg_II_09022026.pdf"],
  [["upsc-ese"], "Engineering Services Preliminary 2026 — Electronics and Telecommunication", "QP_ESPE26_ElecTelecomEngg_II_09022026.pdf"],
  [["upsc-ese"], "Engineering Services Preliminary 2026 — Mechanical Engineering", "QP_ESPE26_MechEngg_II_09022026.pdf"],
  [["upsc-ese"], "Engineering Services Preliminary 2026 — Civil Engineering", "QP_ESPE26_CivilEngg_II_09022026.pdf"],
  [["cds"], "CDS I 2026 — English", "QP-CDS-I-26-ENGLISH-130426.pdf"],
  [["cds"], "CDS I 2026 — General Knowledge", "QP-CDS-I-26-GENERAL-KNOWLEDGE-130426.pdf"],
  [["cds"], "CDS I 2026 — Elementary Mathematics", "QP-CDS-I-26-ELEMENTARY-MATHEMATICS-130426.pdf"],
  [["nda"], "NDA and NA I 2026 — Mathematics", "QP-NDA-NA-I-26-MATHEMATICS-130426.pdf"],
  [["nda"], "NDA and NA I 2026 — General Ability Test", "QP-NDA-NA-I-26-GENERAL-ABILITY-TEST-130426.pdf"],
];

export function officialPapersFor(testId: string): PastPaper[] {
  return rows.flatMap(([ids, title, filename], index) => ids.includes(testId) ? [{
    id: `${testId}-upsc-2026-${index}`,
    test_id: testId,
    year: 2026,
    conducting_body_variant: title,
    file_url: `https://www.upsc.gov.in/sites/default/files/${filename}`,
    source: ARCHIVE,
    verified: true,
  }] : []);
}
