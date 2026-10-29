import { FAMILIES, Family } from "./families";
import { MCQ_BANK, bankSubjectFor } from "./mcqBank";
import { TEST_BY_ID } from "./tests";

/** Timed paper shape, taken from the exam's official section pattern. */
export type Slot = { kind: "mcq" | "short" | "long"; n: number; subject?: string };

export type PaperShape = {
  minutes: number;
  negative: boolean;
  negativeValue: number;
  slots: Slot[];
  note: string;
};

/** Parse the penalty per wrong answer out of the family's negative-marking text. */
export function negativeValueOf(f: Family): number {
  const t = f.neg;
  if (/1\/3/.test(t)) return 1 / 3;
  if (/0\.25/.test(t)) return 0.25;
  if (/0\.50/.test(t)) return 0.5;
  const m = t.match(/−\s?(\d+(?:\.\d+)?)/);
  return m ? Number(m[1]) : 0;
}

/** Bank questions available for a subject list (used to cap papers honestly). */
function bankCount(subjects: string[]): number {
  const keys = new Set(subjects.flatMap((s) => bankSubjectFor(s)));
  return MCQ_BANK.filter((m) => keys.has(m.subject)).length;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function paperShape(testId: string, _category?: string): PaperShape {
  const test = TEST_BY_ID[testId];
  const f = FAMILIES[test?.family ?? "neet"] ?? FAMILIES.neet;
  const sections = f.sections.filter((s) => s[1] > 0);
  const slots: Slot[] = sections.map(([subject, n]) => ({ kind: "mcq", n, subject }));
  const notes: string[] = [`${f.label}: ${f.sections.reduce((a, s) => a + s[1], 0)} questions, ${f.minutes} minutes.`];
  // Cap each slot to what the practice bank holds, and say so.
  let short = false;
  for (const slot of slots) {
    const have = bankCount([slot.subject ?? ""]);
    if (have < slot.n) {
      short = true;
      slot.n = Math.max(0, Math.min(slot.n, have));
    }
  }
  if (short) notes.push("Practice bank for some sections is still being built, so this paper is shorter than the official pattern.");
  return {
    minutes: f.minutes,
    negative: negativeValueOf(f) > 0,
    negativeValue: negativeValueOf(f),
    slots: slots.filter((s) => s.n > 0),
    note: notes.join(" "),
  };
}

export function slotCount(shape: PaperShape): number {
  return shape.slots.reduce((a, s) => a + s.n, 0);
}

export function familyOf(testId: string): Family | undefined {
  const t = TEST_BY_ID[testId];
  return t ? FAMILIES[t.family] : undefined;
}
