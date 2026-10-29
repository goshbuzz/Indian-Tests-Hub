import type { MCQ } from "@/lib/types";

/** Only schemes verified for this mock are overridden. Other mocks retain their existing scoring. */
export function verifiedMockRules(family: string | undefined) {
  if (family === "ssc-selection-post" || family === "cgl") return { correct: 2, wrong: 0.5, sectionSeconds: 15 * 60 };
  if (["jipmat", "jee-main-1", "neet", "iiser-iat", "nchm-jee", "cmat", "cuet-pg"].includes(family ?? "")) return { correct: 4, wrong: 1, sectionSeconds: 0 };
  if (family === "ugc-net-p1" || family === "ugc-net-p2") return { correct: 2, wrong: 0, sectionSeconds: 0 };
  if (family === "cuet-ug") return { correct: 5, wrong: 1, sectionSeconds: 0 };
  return undefined;
}

export function scoreMock(questions: MCQ[], answers: Record<string, number>, correct: number, wrong: number) {
  const mcqs = questions.filter((q) => (q.kind ?? "mcq") === "mcq");
  let score = 0;
  let correctCount = 0;
  for (const q of mcqs) {
    const answer = answers[q.id];
    if (answer === q.correct_answer) {
      score += correct;
      correctCount++;
    } else if (answer !== undefined) {
      score -= wrong;
    }
  }
  return { score, total: mcqs.length * correct, correctCount, questionCount: mcqs.length };
}

/** Timer position from wall-clock elapsed time; a suspended tab cannot gain time. */
export function timerPosition(elapsedSeconds: number, sectionSeconds: number, count: number) {
  const elapsed = Math.max(0, Math.floor(elapsedSeconds));
  const finished = elapsed >= sectionSeconds * count;
  return {
    section: finished ? count - 1 : Math.floor(elapsed / sectionSeconds),
    secondsLeft: finished ? 0 : sectionSeconds - (elapsed % sectionSeconds),
    finished,
  };
}

/** Contiguous ranges are created by questionsForPaper in slot order. */
export function paperSections(questions: MCQ[]) {
  const sections: { slot: number; start: number; end: number }[] = [];
  questions.forEach((q, index) => {
    const slot = q.paper_section ?? 0;
    const current = sections[sections.length - 1];
    if (!current || current.slot !== slot) sections.push({ slot, start: index, end: index });
    else current.end = index;
  });
  return sections;
}
