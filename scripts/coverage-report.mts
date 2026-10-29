import { TESTS } from "../src/data/tests.ts";
import { FAMILIES } from "../src/data/families.ts";
import { MCQ_BANK } from "../src/data/mcqBank.ts";
import { mcqsFor, papersFor } from "../src/data/coverage.ts";

const allPapers = TESTS.flatMap((test) => papersFor(test.id));
console.log(JSON.stringify({
  examEntries: TESTS.length,
  markedVerifiedEntries: TESTS.filter((test) => test.verified).length,
  entriesWithLinkedPatternSources: TESTS.filter((test) => Boolean(FAMILIES[test.family].source)).length,
  bankItems: MCQ_BANK.length,
  uniqueQuestionTexts: new Set(MCQ_BANK.map((item) => item.question_text.trim().toLowerCase())).size,
  perExamQuestionInstances: TESTS.reduce((sum, test) => sum + mcqsFor(test.id).length, 0),
  distinctOfficialPaperLinks: new Set(allPapers.map((paper) => paper.file_url)).size,
  entriesWithOfficialPaperLinks: TESTS.filter((test) => papersFor(test.id).length > 0).length,
}, null, 2));
