import { NextResponse } from "next/server";
import { TESTS } from "@/data/tests";
import { ALL_MOCKS, alertsFor, mcqsFor, papersFor, syllabusFor } from "@/data/coverage";
import { FAMILIES } from "@/data/families";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const test = TESTS.find((t) => t.id === id);
  if (!test) return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json({
    test,
    pattern_source: FAMILIES[test.family]?.source ?? null,
    syllabus: syllabusFor(id),
    papers: papersFor(id),
    mcqs: mcqsFor(id),
    mock: ALL_MOCKS.find((s) => s.test_id === id) ?? null,
    alerts: alertsFor(id),
  });
}
