import type { Job } from "@/lib/types";

/** Current openings, taken from October 2026 listings. Confirm each on the official site before applying. */
export const JOBS: Job[] = [
  {
    id: "job-ntpc-grad-2026",
    test_id: "ntpc",
    title: "RRB NTPC Graduate Recruitment 2026",
    organization: "Railway Recruitment Boards",
    location: "All India",
    last_date: "2026-11-06",
    apply_url: "https://www.rrbcdg.gov.in",
    source: "Listing (Oct 2026); verify on RRB site",
    posts: "About 3,548",
    fee: "Per RRB notice",
    synced_at: "2026-10-29T00:00:00Z",
  },
  {
    id: "job-tnpsc-g4-2026",
    test_id: "tnpsc-g4",
    title: "TNPSC Group IV Recruitment 2026",
    organization: "Tamil Nadu Public Service Commission",
    location: "Tamil Nadu",
    last_date: "2026-11-05",
    apply_url: "https://www.tnpsc.gov.in",
    source: "Listing (Oct 2026); verify on TNPSC site",
    posts: "About 6,574",
    fee: "Per TNPSC notice",
    synced_at: "2026-10-29T00:00:00Z",
  },
  {
    id: "job-mp-police-driver-2026",
    test_id: "mp-police",
    title: "MP Police Constable (Driver) Recruitment 2026",
    organization: "Madhya Pradesh Employees Selection Board",
    location: "Madhya Pradesh",
    last_date: "2026-10-29",
    apply_url: "https://esb.mp.gov.in",
    source: "Listing (Oct 2026); verify on MPESB site",
    posts: "About 1,000",
    fee: "Per MPESB notice",
    synced_at: "2026-10-29T00:00:00Z",
  },
];
