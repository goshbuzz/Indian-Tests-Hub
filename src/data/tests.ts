import { Category, CareerStage, Test } from "@/lib/types";
import { CATALOG_RAW } from "./catalog";
import { FAMILIES, Family, SUBJECT_HI } from "./families";

const CAT: Record<string, Category> = {
  A: "Admissions",
  G: "Admissions-Grad",
  R: "Recruitment",
  B: "Banking",
  P: "PSC",
  PO: "Police",
  J: "Judicial",
  T: "Teaching",
  AF: "Armed Forces",
  PR: "Professional",
  IN: "International",
};

const STAGE: Record<string, CareerStage> = {
  M: "Matric",
  I: "Intermediate",
  G: "Graduate",
  J: "Job Seeker",
  P: "Professional",
  A: "Abroad",
};

/** Tests the hub highlights on the home and explore pages. */
const PRIORITY = new Set([
  "neet-ug", "jee-main", "jee-adv", "cuet-ug", "gate", "cat", "clat-ug", "bitsat",
  "ssc-cgl", "ssc-chsl", "ssc-gd", "ntpc", "rrb-gd", "ibps-clerk", "ibps-po", "sbi-po", "sbi-clerk",
  "upsc-cse", "uppsc-pcs", "bpsc-cce", "mpsc-state", "ctet", "up-police", "nda", "cds", "afcat",
  "ca-foundation", "ugc-net-p2", "tnpsc-g4",
]);

function patternLine(f: Family, hi: boolean): string {
  const totalQ = f.sections.reduce((a, s) => a + s[1], 0);
  const totalM = f.sections.reduce((a, s) => a + s[2], 0);
  if (totalQ === 0) {
    return hi
      ? "साक्षात्कार आधारित चयन (कोई लिखित MCQ पेपर नहीं)"
      : "Interview-based selection (no written MCQ paper)";
  }
  const label = (s: string) => (hi ? SUBJECT_HI[s] ?? s : s);
  const head = hi
    ? [`${totalQ} प्रश्न`, totalM ? `${totalM} अंक` : "", f.minutes ? `${f.minutes} मिनट` : "", f.neg_hi]
    : [`${totalQ} questions`, totalM ? `${totalM} marks` : "", f.minutes ? `${f.minutes} min` : "", f.neg];
  const sections = f.sections
    .map(([s, q, m]) => (hi ? `${label(s)}: ${q} प्र.${m ? ` / ${m} अं.` : ""}` : `${s}: ${q} Q${m ? ` / ${m} M` : ""}`))
    .join(" · ");
  const sectionWord = hi ? "खंड" : "Sections";
  const note = f.note ? ` ${f.note}` : "";
  const approx = f.verified
    ? ""
    : hi
      ? " (अनुमानित पैटर्न — आधिकारिक सूचना देखें।)"
      : " (Approximate pattern — confirm on the official notice.)";
  return `${head.filter(Boolean).join(" · ")}. ${sectionWord}: ${sections}.${note}${approx}`;
}

function parse(): Test[] {
  return CATALOG_RAW.trim()
    .split("\n")
    .filter((l) => l.trim())
    .map((line) => {
      const [id, name, name_hi, cat, stage, body, url, family] = line.split("|");
      const f = FAMILIES[family];
      if (!f) throw new Error(`Unknown pattern family "${family}" for ${id}`);
      return {
        id,
        name,
        name_hi,
        category: CAT[cat],
        career_stage: STAGE[stage],
        conducting_body: body,
        official_url: url,
        eligibility: f.elig,
        format_description: patternLine(f, false),
        format_hi: patternLine(f, true),
        fee_info: f.fee,
        last_updated: "2026-10-29",
        family,
        verified: f.verified,
        priority: PRIORITY.has(id) || undefined,
      };
    });
}

export const TESTS: Test[] = parse();

export const TEST_BY_ID: Record<string, Test> = Object.fromEntries(TESTS.map((t) => [t.id, t]));

export const CATEGORY_META: { key: Category; label: string; hi: string; icon: string; color: string }[] = [
  { key: "Admissions", label: "Admissions (UG)", hi: "प्रवेश परीक्षा (यूजी)", icon: "🎓", color: "bg-emerald-100 text-emerald-800" },
  { key: "Admissions-Grad", label: "Post-Graduate & Research", hi: "स्नातकोत्तर व शोध", icon: "📘", color: "bg-teal-100 text-teal-800" },
  { key: "Recruitment", label: "Central & State Recruitment", hi: "केंद्रीय व राज्य भर्ती", icon: "📋", color: "bg-amber-100 text-amber-900" },
  { key: "PSC", label: "Civil Services & PSC", hi: "सिविल सेवा व लोक सेवा आयोग", icon: "⚖️", color: "bg-lime-100 text-lime-900" },
  { key: "Banking", label: "Banking & Insurance", hi: "बैंकिंग व बीमा", icon: "🏦", color: "bg-green-100 text-green-900" },
  { key: "Police", label: "Police & CAPF", hi: "पुलिस व केंद्रीय सशस्त्र पुलिस", icon: "🛡️", color: "bg-yellow-100 text-yellow-900" },
  { key: "Judicial", label: "Judicial Services", hi: "न्यायिक सेवा", icon: "👨‍⚖️", color: "bg-stone-100 text-stone-800" },
  { key: "Teaching", label: "Teaching (TET / CTET / DSC)", hi: "शिक्षक पात्रता (टीईटी / सीटीईटी)", icon: "🍎", color: "bg-orange-100 text-orange-900" },
  { key: "Armed Forces", label: "Armed Forces", hi: "सशस्त्र बल", icon: "⭐", color: "bg-emerald-200 text-emerald-950" },
  { key: "Professional", label: "Professional & Licensing", hi: "व्यावसायिक व लाइसेंसिंग", icon: "💼", color: "bg-cyan-100 text-cyan-900" },
  { key: "International", label: "Study Abroad (taken in India)", hi: "विदेश अध्ययन (भारत में परीक्षा)", icon: "✈️", color: "bg-sky-100 text-sky-900" },
];

export const STAGES = ["Matric", "Intermediate", "Graduate", "Job Seeker", "Professional", "Abroad"] as const;

export const STAGE_HI: Record<string, string> = {
  Matric: "मैट्रिक (कक्षा 10)",
  Intermediate: "इंटरमीडिएट (कक्षा 12)",
  Graduate: "स्नातक",
  "Job Seeker": "नौकरी चाहने वाले",
  Professional: "व्यावसायिक",
  Abroad: "विदेश",
};

/** Display name for the active language. */
export function tName(t: Test | undefined, hi: boolean): string {
  if (!t) return "";
  return hi ? t.name_hi : t.name;
}
