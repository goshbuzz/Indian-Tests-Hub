import type { MCQ } from "@/lib/types";

/** Search the full bank before applying any display limit. */
export function filterPractice(items: MCQ[], query: string): MCQ[] {
  const search = query.trim().toLowerCase();
  if (!search) return items;
  return items.filter((item) => [item.subject, item.topic, item.question_text].some((text) => text.toLowerCase().includes(search)));
}
