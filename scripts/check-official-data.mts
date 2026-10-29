import assert from "node:assert/strict";
import { FAMILIES } from "../src/data/families.ts";
import { TESTS, TEST_BY_ID } from "../src/data/tests.ts";
import { MCQ_BANK } from "../src/data/mcqBank.ts";
import { alertsFor, mcqsFor, papersFor, syllabusFor } from "../src/data/coverage.ts";
import { alertDateLabel } from "../src/data/alertDates.ts";
import { filterPractice } from "../src/data/practiceSearch.ts";
import { verifiedMockRules } from "../src/data/mockRules.ts";
import { GET } from "../src/app/api/tests/[id]/route.ts";

assert.equal(TESTS.length, 230);
assert.equal(TESTS.filter((test) => test.verified).length, 8);
assert.ok(TESTS.filter((test) => test.verified).every((test) => FAMILIES[test.family].source));
assert.equal(TEST_BY_ID.rpmt.verified, false);
assert.equal(mcqsFor("rpmt").length, 0);
assert.match(TEST_BY_ID.rpmt.format_description, /counselling/i);
assert.equal(TEST_BY_ID.cat.verified, false);
assert.match(TEST_BY_ID.cat.format_description, /not been confirmed/);
assert.equal(FAMILIES.mat.minutes, 120);
assert.equal(FAMILIES.mat.source?.cycle, "December 2026");
assert.deepEqual(FAMILIES.mat.sections, [["Language Comprehension", 30, 0], ["Intelligence & Critical Reasoning", 30, 0], ["Mathematical Skills", 30, 0], ["Data Analysis & Sufficiency", 30, 0], ["Economic & Business Environment", 30, 0]]);
assert.doesNotMatch(TEST_BY_ID.mat.format_description, /150 marks/);
assert.deepEqual(FAMILIES["jee-main-1"].sections, [["Mathematics", 25, 100], ["Physics", 25, 100], ["Chemistry", 25, 100]]);
assert.equal(FAMILIES["jee-main-1"].source?.cycle, "2027");
assert.match(TEST_BY_ID["jee-main"].format_description, /negative|−1/i);
assert.match(TEST_BY_ID["jee-main"].format_description, /numerical/i);
assert.deepEqual(FAMILIES["cuet-ug"].sections, [["General Aptitude Test", 50, 250]]);
assert.equal(FAMILIES["cuet-ug"].source?.cycle, "2026");
assert.deepEqual(FAMILIES.neet.sections, [["Physics", 45, 180], ["Chemistry", 45, 180], ["Biology", 90, 360]]);
assert.equal(TEST_BY_ID["upsc-ies"].family, "upsc-ies-iss");
assert.equal(mcqsFor("upsc-ies").length, 0);
assert.deepEqual(verifiedMockRules("jee-main-1"), { correct: 4, wrong: 1, sectionSeconds: 0 });
assert.deepEqual(verifiedMockRules("cuet-ug"), { correct: 5, wrong: 1, sectionSeconds: 0 });
assert.deepEqual(verifiedMockRules("neet"), { correct: 4, wrong: 1, sectionSeconds: 0 });
assert.equal(papersFor("upsc-ies").length, 10);
assert.equal(papersFor("upsc-cse").length, 2);
assert.equal(papersFor("neet-ug").length, 0);
const matAlert = alertsFor("mat")[0];
assert.ok(matAlert && !matAlert.published_at);
assert.equal(alertDateLabel(matAlert), "Checked 2026-10-30");
assert.equal(alertDateLabel(alertsFor("jee-main")[0]), "Published 2026-10-24");
assert.equal(new Set(MCQ_BANK.map((q) => q.question_text.trim().toLowerCase())).size, MCQ_BANK.length);
for (const q of MCQ_BANK) {
  assert.ok(q.options.every((option) => option.trim()));
  assert.equal(new Set(q.options.map((option) => option.trim().toLowerCase())).size, q.options.length);
  if (q.subject === "Reasoning" && q.topic === "Direction sense") {
    const match = q.question_text.match(/walks (\d+) km north, then (\d+) km east/);
    assert.ok(match);
    const squared = Number(match[1]) ** 2 + Number(match[2]) ** 2;
    const root = Math.sqrt(squared);
    const expected = `${Number.isInteger(root) ? root : `√${squared}`} km`;
    assert.equal(q.options[q.correct_answer], expected);
  }
}
for (const id of ["upsc-ies", "upsc-ese", "nda", "cds", "upsc-cse", "upsc-ifos"]) {
  for (const paper of papersFor(id)) {
    assert.equal(paper.test_id, id);
    assert.ok(paper.verified && paper.file_url.startsWith("https://www.upsc.gov.in/sites/default/files/"));
  }
}
for (const subject of ["Physics", "Chemistry", "Botany", "Zoology"]) {
  const questions = MCQ_BANK.filter((m) => m.subject === subject);
  assert.ok(questions.length >= 15, `${subject} bank expanded`);
  assert.equal(new Set(questions.map((q) => q.question_text)).size, questions.length, `${subject} texts unique`);
  for (const q of questions) {
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options).size, 4);
    assert.ok(q.correct_answer >= 0 && q.correct_answer < 4);
  }
}
const bank = mcqsFor("jee-main");
const later = bank[bank.length - 1];
assert.ok(bank.length > 40);
assert.ok(filterPractice(bank, `  ${later.question_text.toUpperCase()}  `).some((q) => q.id === later.id));
assert.equal(filterPractice(bank, "").length, bank.length);
const resp = await GET(new Request("https://example.org/api/tests/jee-main"), { params: Promise.resolve({ id: "jee-main" }) });
const data = await resp.json();
assert.equal(resp.status, 200);
assert.equal(data.pattern_source.cycle, "2027");
assert.equal(data.pattern_source.url, FAMILIES["jee-main-1"].source?.url);
assert.equal(data.mcqs.length, mcqsFor("jee-main").length);
assert.equal(data.syllabus.length, syllabusFor("jee-main").length);
assert.equal(data.mock.test_id, "jee-main");
const missing = await GET(new Request("https://example.org/api/tests/unknown"), { params: Promise.resolve({ id: "unknown" }) });
assert.equal(missing.status, 404);
console.log("Official data, practice search and API checks passed.");
