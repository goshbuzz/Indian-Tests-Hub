# Indian Tests Hub

A free, independent self-study hub for Indian competitive and entrance exams: NEET, JEE, CUET, GATE, CAT, UPSC, SSC, RRB, IBPS, SBI, state PSCs, police, teaching, judicial and armed forces. Each exam has its official pattern, a syllabus checklist, practice MCQs (English), timed mocks, job and alert pages, and a link to the conducting body's official site.

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

Each test's pattern, mock shape and default eligibility come from its family. Syllabus comes from the subject name. Hindi names come from `SUBJECT_HI`.

### Honest coverage

- The catalogue lists **230 exams** (see `src/data/catalog.ts`), below the earlier target of 300+. Of these, **31 exam entries** have patterns marked verified against an official notice; the remaining 199 are labelled approximate.
- **Verified** patterns are marked `verified: true` on their family. Approximate patterns should be checked against the current official notice. New entries may be included with an approximate label while their patterns await verification.
- Practice coverage varies by exam and section. Some subject-specific banks are small or unavailable; mock papers can be shorter than the listed pattern, and unavailable sections are not filled with unrelated general-awareness questions.
- Practice MCQs do not reproduce written, speaking, listening or other non-MCQ tasks. Check `npx tsx scripts/verify-banks.mts` for current section shortfalls; the script exits nonzero while issues remain.
- Official apply links point only to the conducting body's site. Past-paper links are not constructed where they could not be verified.

## Scripts

```bash
npm install
npm run dev        # local development
npm run build      # production build
npx tsc --noEmit -p .
npx tsx scripts/verify-banks.mts   # MCQ subject leaks, empty mock slots, thin papers
npx tsx scripts/check-seo.mts      # run after `npm run build`; checks prerendered HTML
```

## Configuration

- `NEXT_PUBLIC_SITE_URL`: the public site URL (used for canonicals, sitemap and Open Graph). The default in `src/lib/site.ts` is a placeholder and must be set to the real domain before launch.
- Ads and analytics are off (`src/lib/ads.ts`). No ad or analytics IDs are included.

## Brand assets

- `public/logo.png` (1024×1024) is the single brand file. The header, PWA icons and install prompt use it.
- `src/lib/brand.ts` sets `LOGO_SRC` with a `?v=` cache-buster. When the artwork changes, bump it together with `CACHE` in `public/sw.js`, or returning visitors keep the old logo.
- `public/og-cover.png` (1424×752) is the social share image.
