# Indian Tests Hub

A free, independent self-study hub for Indian competitive and entrance exams: NEET, JEE, CUET, GATE, CAT, UPSC, SSC, RRB, IBPS, SBI, state PSCs, police, teaching, judicial and armed forces. Coverage varies: exam patterns may be approximate, and practice material or mocks may be incomplete or unavailable. Check the conducting body's official notice.

This project is not an official exam portal and is not affiliated with any exam body. Apply only on the official site of the conducting body.

It is a fork of Pakistan Tests Hub, rebuilt for India.

## What is in the app

- **Explore** (`/explore`): every test, filterable by category and career stage.
- **Test page** (`/tests/[id]`): pattern, syllabus, MCQ practice, mock access, prep pack, jobs, alerts and the official apply link.
- **Timed mock** (`/mock/[id]`): a paper built from the exam's section pattern and the practice bank. Shorter papers say so.
- **Jobs** (`/jobs`) and **alerts** (`/alerts`): notices with official links.
- **Profile** and offline-capable PWA (installable, cached brand assets).
- **Language:** English and Hindi (हिंदी). The toggle covers the app screens, test names, exam patterns and syllabus topics. Practice MCQ questions stay in English.

## Data

| File | What it holds |
| --- | --- |
| `src/data/catalog.ts` | One exam per line: id, English name, Hindi name, category, stage, conducting body, official URL, pattern family. |
| `src/data/families.ts` | Exam-pattern families (sections, marks, minutes, negative marking), Hindi subject names, and English:Hindi syllabus topics. |
| `src/data/mcqBank.ts` | Practice MCQs per subject, and the mapping from pattern section to bank subject. |
| `src/data/tests.ts` | Parses the catalogue into tests and provides category metadata and the `tName()` helper. |
| `src/data/coverage.ts`, `mockShape.ts`, `sections.ts` | Mock paper construction and syllabus lookup. |

Each test's pattern, mock shape and default eligibility come from its family. Syllabus comes from the subject name. Hindi names come from `SUBJECT_HI`. See [the coverage benchmark](docs/coverage-benchmark.md) for reproducible counts and competitor comparison.

### Honest coverage

- The catalogue lists **230 exam entries** (see `src/data/catalog.ts`). **8 entries** have patterns marked verified with a linked official notice; the remaining 222 are labelled approximate or have no representative exam pattern. Unsourced older verified flags are treated as unverified until checked. Verification is cycle-specific, not a guarantee about future exams.
- **Verified** patterns require both a verified family flag and a linked official source. Approximate patterns should be checked against the current official notice. New entries may be included with an approximate label while their patterns await verification.
- Practice coverage varies by exam and section. Some subject-specific banks are small or unavailable; mock papers can be shorter than the listed pattern, and unavailable sections are not filled with unrelated general-awareness questions.
- Practice MCQs do not reproduce written, speaking, listening or other non-MCQ tasks. Check `npx tsx scripts/verify-banks.mts` for current section shortfalls; the script exits nonzero while issues remain.
- Checked pattern sources and cycles are linked on the affected exam pages. Official past-paper links are included only where checked, and point to the conducting body's own files. Jobs and alerts are manually curated, not automatically synced; always confirm current details on the official notice.

## Scripts

Use Node 20.9 or newer (see `package.json` for the precise supported ranges). Next.js 16 currently warns that React 18 support is deprecated; a future React 19 migration is still needed.

```bash
npm ci
npm run lint
npm run dev        # local development
npm run build      # production build
npx tsc --noEmit -p .
npx tsx scripts/verify-banks.mts   # MCQ subject leaks, empty mock slots, thin papers
npx tsx scripts/check-official-data.mts # audited patterns, paper links and API
npx tsx scripts/coverage-report.mts # unique questions vs shared per-exam instances
npx tsx scripts/check-seo.mts      # run after `npm run build`; checks prerendered HTML
```

## Configuration

- `NEXT_PUBLIC_SITE_URL`: the public site URL (used for canonicals, sitemap and Open Graph). The default in `src/lib/site.ts` is a placeholder and must be set to the real domain before launch.
- Ads and analytics are off (`src/lib/ads.ts`). No ad or analytics IDs are included.

## Brand assets

- `public/logo.png` (1024×1024) is the single brand file. The header, PWA icons and install prompt use it.
- `src/lib/brand.ts` sets `LOGO_SRC` with a `?v=` cache-buster. When the artwork changes, bump it together with `CACHE` in `public/sw.js`, or returning visitors keep the old logo.
- `public/og-cover.png` (1424×752) is the social share image.
