# India build: Indian Tests Hub

Base: `main` · Compare: `india-build`

## What this changes
- 226-exam catalogue with official-pattern families. 27 of the 226 tests have verified exam patterns; the rest are labelled as unverified in the app.
- English and Hindi toggle covering the UI, test names, exam patterns and syllabus. Practice MCQs stay in English.
- Timed mocks, MCQ practice, syllabus, jobs and alerts carried over from the app.
- India home, FAQ and policy copy. No ad networks or analytics enabled.
- New logo, icons, social cover and manifest. Service-worker cache renamed to `ith-in-v1`.
- README rewritten for this project.

## Checks
- `tsc --noEmit`: clean
- `npm run build`: passes
- `scripts/check-seo.mts`: passes
- `scripts/verify-banks.mts`: no MCQ subject leaks and no empty mock slots. 36 state and central papers are shorter than their official pattern, and the app says so on the paper. AIBE has a small bank (7 MCQs).

## Before merging
- Set `NEXT_PUBLIC_SITE_URL` to the real domain. The default in `src/lib/site.ts` is a placeholder.
- Review the generated logo and social cover.
- Many official URLs (state PSCs, SBI, RBI, NABARD and others) are unverified.
