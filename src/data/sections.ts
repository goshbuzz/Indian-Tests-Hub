import { familyOf } from "./mockShape";

/** Subjects a test's pattern covers (English names; the UI translates them). */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function subjectsFor(testId: string, _category?: string): string[] {
  const f = familyOf(testId);
  return f ? f.sections.map((s) => s[0]) : [];
}
