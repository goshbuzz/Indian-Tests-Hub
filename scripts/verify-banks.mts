import { TESTS } from "../src/data/tests.ts";
import { mcqsFor, questionsForPaper, prepPackFor } from "../src/data/coverage.ts";
import { bankSubjectFor } from "../src/data/mcqBank.ts";
import { paperShape, slotCount } from "../src/data/mockShape.ts";
import { FAMILIES } from "../src/data/families.ts";
import { subjectsFor } from "../src/data/sections.ts";

function matchesSubject(subject: string, allowed: string[]): boolean {
  const s = subject.toLowerCase();
  return allowed.some((a) => a.toLowerCase() === s);
}
import { applyUrl } from "../src/data/applyUrls.ts";
import { patternFor } from "../src/data/patterns.ts";
import { guidesFor } from "../src/data/studyGuides.ts";

const ALL_MCQS = TESTS.flatMap((t) => mcqsFor(t.id));

const issues: string[] = [];

function add(msg: string) {
  issues.push(msg);
}

const FORBIDDEN: Record<string, string[]> = {
  International: ["pakistan studies", "islamiat", "biology", "banking gk", "gk"],
  Admissions: ["german", "ielts"],
};

for (const t of TESTS) {
  const allowed = subjectsFor(t.id, t.category).flatMap((x) => bankSubjectFor(x));
  const bank = ALL_MCQS.filter((m) => m.test_id === t.id);
  const leak = bank.filter((m) => !matchesSubject(m.subject, allowed));
  if (leak.length) add(`${t.id} LEAK ${leak[0].subject} :: ${leak[0].question_text.slice(0, 50)}`);

  const mcq = bank.filter((m) => (m.kind ?? "mcq") === "mcq");
  const badKey = mcq.filter((m) => m.correct_answer < 0 || m.correct_answer >= m.options.length || m.options.length < 2);
  if (badKey.length) add(`${t.id} BAD_KEY ${badKey[0].question_text.slice(0, 50)}`);

  const dup = new Map<string, number>();
  for (const m of bank) dup.set(m.question_text, (dup.get(m.question_text) ?? 0) + 1);
  const dups = [...dup.entries()].filter(([, n]) => n > 3);
  if (dups.length) add(`${t.id} HEAVY_DUP ${dups[0][0].slice(0, 40)}`);

  if (t.category === "International" && bank.some((m) => /pakistan studies|islamiat/i.test(m.subject))) {
    add(`${t.id} INTL_CIVICS`);
  }

  const shape = paperShape(t.id, t.category);
  const paper = questionsForPaper(t.id, 2025, 1, "verify");
  if (paper.length < Math.ceil(slotCount(shape) * 0.7)) {
    add(`${t.id} THIN_PAPER ${paper.length}/${slotCount(shape)}`);
  }
  const paperLeak = paper.filter((m) => !matchesSubject(m.subject, allowed));
  if (paperLeak.length) add(`${t.id} PAPER_LEAK ${paperLeak[0].subject}`);

  // A capped shape alone can conceal an incomplete official section. Report the
  // shortfall against the family pattern as well, including missing pools.
  const f = FAMILIES[t.family];
  for (const [subject, requested] of f?.sections ?? []) {
    if (requested <= 0) continue;
    const allowedForSection = bankSubjectFor(subject);
    const available = new Set(bank.filter((m) => matchesSubject(m.subject, allowedForSection)).map((m) => m.question_text)).size;
    if (available < requested) add(`${t.id} SHORT_SECTION ${subject} ${available}/${requested}`);
  }

  for (const sl of shape.slots) {
    if (sl.kind !== "mcq" || !sl.subject) continue;
    const n = paper.filter((p) => (p.kind ?? "mcq") === "mcq" && matchesSubject(p.subject, bankSubjectFor(sl.subject!))).length;
    if (n === 0) add(`${t.id} EMPTY_SLOT ${sl.subject}`);
  }

  if (!applyUrl(t.id, TESTS.find((x) => x.id === t.id)!.official_url ?? "")) add(`${t.id} NO_APPLY_URL`);
  if (!patternFor(t.id)) add(`${t.id} NO_PATTERN`);
  if (!prepPackFor(t.id)) add(`${t.id} NO_PACK`);
  if (bank.length < 8) add(`${t.id} SMALL_BANK ${bank.length}`);
}

const missingGuide = TESTS.filter((t) => t.priority && guidesFor(t.id).length === 0);
for (const t of missingGuide) add(`${t.id} PRIORITY_NO_GUIDE`);

console.log("tests", TESTS.length, "mcqs", ALL_MCQS.length);
console.log("ISSUES", issues.length);
console.log(issues.join("\n") || "none");
if (issues.length) process.exitCode = 1;
