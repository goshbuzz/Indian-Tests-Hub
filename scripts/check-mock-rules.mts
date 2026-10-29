import assert from "node:assert/strict";
import { MCQ_BANK, bankSubjectFor } from "../src/data/mcqBank.ts";
import { mcqsFor, paperShape, questionsForPaper } from "../src/data/coverage.ts";
import { paperSections, scoreMock, timerPosition, verifiedMockRules } from "../src/data/mockRules.ts";

for (const id of ["ssc-selection-matric", "ssc-selection-higher-secondary", "ssc-selection-graduate"]) {
  const questions = questionsForPaper(id, 2026, 1, "test");
  const sections = paperSections(questions);
  assert.equal(questions.length, 100, `${id} length`);
  assert.deepEqual(sections.map(({ start, end }) => end - start + 1), [25, 25, 25, 25]);
  assert.deepEqual(sections.map(({ slot }) => slot), [0, 1, 2, 3]);
  assert.equal(new Set(questions.map((q) => q.question_text)).size, 100);
  const answers = { [questions[0].id]: questions[0].correct_answer, [questions[1].id]: (questions[1].correct_answer + 1) % questions[1].options.length };
  assert.deepEqual(scoreMock(questions, answers, 2, 0.5), { score: 1.5, total: 200, correctCount: 1, questionCount: 100 });
  assert.deepEqual(scoreMock(questions, { [questions[1].id]: answers[questions[1].id] }, 2, 0.5).score, -0.5);
}

const jipmat = questionsForPaper("jipmat", 2026, 1, "test");
assert.deepEqual(paperSections(jipmat).map(({ start, end }) => end - start + 1), [33, 33, 34]);
assert.equal(new Set(jipmat.map((q) => q.question_text)).size, 100);
assert.deepEqual(scoreMock(jipmat, { [jipmat[0].id]: jipmat[0].correct_answer, [jipmat[1].id]: (jipmat[1].correct_answer + 1) % jipmat[1].options.length }, 4, 1), { score: 3, total: 400, correctCount: 1, questionCount: 100 });
assert.deepEqual(verifiedMockRules("ssc-selection-post"), { correct: 2, wrong: 0.5, sectionSeconds: 900 });
assert.deepEqual(verifiedMockRules("jipmat"), { correct: 4, wrong: 1, sectionSeconds: 0 });
assert.equal(verifiedMockRules("gate"), undefined);
assert.deepEqual(timerPosition(0, 900, 4), { section: 0, secondsLeft: 900, finished: false });
assert.deepEqual(timerPosition(899, 900, 4), { section: 0, secondsLeft: 1, finished: false });
assert.deepEqual(timerPosition(900, 900, 4), { section: 1, secondsLeft: 900, finished: false });
assert.deepEqual(timerPosition(2701, 900, 4), { section: 3, secondsLeft: 899, finished: false });
assert.deepEqual(timerPosition(3600, 900, 4), { section: 3, secondsLeft: 0, finished: true });
assert.deepEqual(timerPosition(5000, 900, 4), { section: 3, secondsLeft: 0, finished: true });

assert.deepEqual(bankSubjectFor("Engineering Subject"), []);
assert.deepEqual(bankSubjectFor("Part B & C (Subject)"), []);
for (const s of ["Listening", "Reading", "Writing", "Speaking"]) assert.deepEqual(bankSubjectFor(s), []);
assert.deepEqual(bankSubjectFor("General Studies Paper II (CSAT)"), ["Quantitative Aptitude", "Reasoning", "English"]);
assert.equal(mcqsFor("ielts").length, 0);
assert.equal(paperShape("ielts").short, true);
assert.equal(paperShape("gate").short, true);
assert.equal(paperShape("ssc-selection-matric").short, false);
for (const subject of ["Accounting", "Cost Accounting", "Taxation", "Auditing", "Business Law", "Data Interpretation", "Legal Aptitude"]) {
  const rows = MCQ_BANK.filter((q) => q.subject === subject);
  assert.ok(rows.length >= 8, `${subject} has practice material`);
  assert.equal(new Set(rows.map((q) => q.question_text)).size, rows.length, `${subject} duplicate text`);
  for (const q of rows) {
    assert.equal(q.options.length, 4, `${q.question_text}: four options`);
    assert.equal(new Set(q.options).size, 4, `${q.question_text}: distinct options`);
    assert.ok(q.correct_answer >= 0 && q.correct_answer < q.options.length, `${q.question_text}: valid answer`);
  }
}
console.log("Mock rules and targeted bank checks passed.");
