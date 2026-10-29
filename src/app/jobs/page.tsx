"use client";

import Link from "next/link";
import { Fragment } from "react";
import { JOBS } from "@/data/jobs";
import { TESTS, tName } from "@/data/tests";
import { dict } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { PageFaq } from "@/components/PageFaq";
import { PAGE_FAQS } from "@/data/pageFaqs";

export default function JobsPage() {
  const { lang, saved, jobFollow } = useStore();
  const t = dict[lang];
  const prefs = new Set([...saved, ...jobFollow]);
  const mine = JOBS.filter((j) => prefs.size === 0 || prefs.has(j.test_id));
  const list = mine.length ? mine : JOBS;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">{t.jobs}</h1>
          <p className="text-sm text-stone-500">
            Manually curated notices; this list is not automatically synced. Always check the official notice.
          </p>
        </div>
      </div>
      <p className="mt-2 text-xs text-stone-500">
        Showing {prefs.size ? "followed / saved tests where available" : "all checked listings"}. Save a test or tap Follow on its Jobs tab.
      </p>
      {list.length === 0 && <p className="mt-4 text-sm text-stone-600">No verified recruitment listings are available yet. Check the conducting body’s official site for current notices.</p>}
      <ul className="mt-4 space-y-3">
        {list.map((j, i) => {
          const test = TESTS.find((x) => x.id === j.test_id);
          return (
            <Fragment key={j.id}>
            {i === 2 && (
              <li className="list-none">
                
              </li>
            )}
            <li className="rounded-2xl border bg-white p-4">
              <Link href={`/tests/${j.test_id}`} className="text-xs text-emerald-800">
                {tName(test, lang === "hi")}
              </Link>
              <div className="font-medium">{j.title}</div>
              <p className="text-sm text-stone-600">
                {j.organization} · {j.location}
              </p>
              <p className="text-xs text-stone-500">
                Close: {j.last_date} · {j.fee}
              </p>
              <a href={j.apply_url} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm font-semibold text-emerald-800">
                {t.applyNow} →
              </a>
            </li>
            </Fragment>
          );
        })}
      </ul>
      <PageFaq items={PAGE_FAQS.jobs} title="Jobs & apply — quick answers" idPrefix="jobs-faq" />
    </div>
  );
}
