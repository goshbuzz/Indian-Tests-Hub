import { TEST_BY_ID } from "./tests";
import { familyOf } from "./mockShape";

export type Guide = { test_id: string; title: string; body: string };

/** Generic, pattern-aware study plan for every test. */
export function guidesFor(testId: string): Guide[] {
  const t = TEST_BY_ID[testId];
  const f = familyOf(testId);
  if (!t || !f) return [];
  if (f.sections.length === 0) return [{
    test_id: testId,
    title: "Start with the official notice",
    body: "This entry has no representative mock in the current bank. Check the official notice for requirements, syllabus and any examination scheme.",
  }];
  const subjects = f.sections.map((s) => s[0]).join(", ");
  return [
    {
      test_id: testId,
      title: `How to prepare for ${t.name}`,
      body: `Start with the syllabus (${subjects}). Tick off each topic, then take the timed mock (${f.minutes} minutes). Review every wrong answer and note the topic.`,
    },
    {
      test_id: testId,
      title: "Use the pattern to plan time",
      body: f.neg.includes("−") ? `This exam has negative marking (${f.neg}). Attempt only questions you can answer with confidence.` : "This exam has no negative marking. Attempt every question, but manage time per section.",
    },
    {
      test_id: testId,
      title: "Always confirm on the official notice",
      body: `The pattern shown here is a study reference. Check the current notice on ${t.conducting_body} before you apply or prepare for the final syllabus.`,
    },
  ];
}
