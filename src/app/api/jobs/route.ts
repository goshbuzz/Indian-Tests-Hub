import { NextResponse } from "next/server";
import { JOBS } from "@/data/jobs";

export async function GET() {
  return NextResponse.json({
    synced_at: null,
    jobs: JOBS,
    note: "Manually curated listings; this feed is not automatically synced. Confirm notices with the conducting body.",
  });
}
