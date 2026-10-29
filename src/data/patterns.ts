import { TEST_BY_ID } from "./tests";

/** One-line official pattern for a test (English). */
export function patternFor(testId: string): string {
  return TEST_BY_ID[testId]?.format_description ?? "";
}
