"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { MOCK_SLOTS, alertsFor, mcqsFor, mockLevel, papersFor, prepPackFor, syllabusFor } from "@/data/coverage";
import { subjectsFor } from "@/data/sections";
import { filterPractice } from "@/data/practiceSearch";
import { alertDateLabel } from "@/data/alertDates";
import { JOBS } from "@/data/jobs";
import { TESTS } from "@/data/tests";
import { FAMILIES, SUBJECT_HI } from "@/data/families";
import { dict } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { guidesFor } from "@/data/studyGuides";
import { applyUrl } from "@/data/applyUrls";

const TABS = ["overview", "study", "syllabus", "papers", "mcq", "mock", "jobs", "apply", "alerts"] as const;

export default function TestPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const test = TESTS.find((x) => x.id === id);
  const { lang, user, saved, toggleSave, syllabusDone, toggleTopic, suggest, jobFollow, toggleJobFollow, docsDone, toggleDoc } =
    useStore();
  const t = dict[lang];
  const hi = lang === "hi";
  const [tab, setTab] = useState<(typeof TABS)[number]>("overview");
  const [note, setNote] = useState("");
  const [filter, setFilter] = useState("");
  const [shown, setShown] = useState(40);
  const [revealed, setRevealed] = useState<string | null>(null);

  const syl = useMemo(() => (test ? syllabusFor(test.id) : []), [test]);
  const papers = useMemo(() => (test ? papersFor(test.id) : []), [test]);
  const mcqs = useMemo(() => (test ? mcqsFor(test.id) : []), [test]);
  const alerts = useMemo(() => (test ? alertsFor(test.id) : []), [test]);
  const pack = test ? prepPackFor(test.id) : undefined;
  const jobs = JOBS.filter((j) => j.test_id === id);
  const done = syllabusDone[id] ?? [];
  const pct = syl.length ? Math.round((done.length / syl.length) * 100) : 0;
  const subjLabel = (s: string) => (hi ? SUBJECT_HI[s] ?? s : s);

  const grouped = useMemo(() => {
    const g: Record<string, typeof syl> = {};
    syl.forEach((s) => {
      (g[s.subject] ??= []).push(s);
    });
    return g;
  }, [syl]);

  const matchingMcq = filterPractice(mcqs, filter);
  const filteredMcq = matchingMcq.slice(0, shown);

  if (!test) return <p>{t.testNotFound}</p>;

  const name = hi ? test.name_hi : test.name;
  const pattern = hi ? test.format_hi : test.format_description;
  const verifiedNote = test.verified ? t.patternVerified : t.patternApprox;

  const labels: Record<(typeof TABS)[number], string> = {
    overview: t.overview,
    study: t.study,
    syllabus: t.syllabus,
    papers: t.papers,
    mcq: t.mcq,
    mock: t.mock,
    jobs: t.jobs,
    apply: t.apply,
    alerts: t.alertsTab,
  };

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-emerald-800">{test.category}</p>
          <h1 className="text-3xl font-semibold">{name}</h1>
          {hi && <p className="text-sm text-stone-500">{test.name}</p>}
          <p className="text-stone-600">{test.conducting_body}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-14">
            <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
              <path d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32" fill="none" stroke="#e7e5e4" strokeWidth="4" />
              <path
                d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
                fill="none"
                stroke="#01411C"
                strokeWidth="4"
                strokeDasharray={`${pct}, 100`}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold">{pct}%</span>
          </div>
          <button
            onClick={() => (user ? toggleSave(test.id) : router.push("/login"))}
            className={`rounded-full px-4 py-2 text-sm ${saved.includes(test.id) ? "bg-emerald-800 text-white" : "border bg-white"}`}
          >
            {saved.includes(test.id) ? t.savedBtn : t.save}
          </button>
        </div>
      </div>
      <div className="mt-2 flex gap-1 overflow-x-auto">
        {TABS.map((k) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm ${tab === k ? "bg-emerald-900 text-white" : "bg-white border"}`}
          >
            {labels[k]}
          </button>
        ))}
      </div>

      {tab === "overview" && (
        <div className="mt-4 space-y-4 rounded-2xl border bg-white p-5">
          <Row label={t.conducting} value={test.conducting_body} />
          <Row label={t.eligibility} value={test.eligibility} />
          <Row label={t.format} value={pattern} />
          <p className={`text-xs ${test.verified ? "text-emerald-800" : "text-amber-800"}`}>{verifiedNote}</p>
          {FAMILIES[test.family]?.source && (
            <p className="text-xs text-stone-600">
              {hi ? "आधिकारिक स्रोत" : "Official source"}: {" "}
              <a className="text-emerald-800 underline" href={FAMILIES[test.family].source!.url} target="_blank" rel="noreferrer">
                {FAMILIES[test.family].source!.title}
              </a>{" "}· {hi ? "जाँचा" : "checked"} {FAMILIES[test.family].source!.checkedAt}
            </p>
          )}
          <Row label={t.fee} value={test.fee_info} />
          <Row
            label={t.official}
            value={
              <a className="text-emerald-800 underline" href={test.official_url} target="_blank" rel="noreferrer">
                {test.official_url}
              </a>
            }
          />
          <p className="text-xs text-stone-400">
            {t.updated} {test.last_updated}
          </p>
          <form
            className="border-t pt-3"
            onSubmit={(e) => {
              e.preventDefault();
              if (note.trim()) {
                suggest(test.id, note);
                setNote("");
                alert(t.queued);
              }
            }}
          >
            <label className="text-sm font-medium">{t.suggest}</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="mt-1 w-full rounded-lg border p-2 text-sm"
              rows={2}
            />
            <button className="mt-2 rounded-lg bg-emerald-800 px-3 py-1.5 text-sm text-white">{t.send}</button>
          </form>
        </div>
      )}

      {tab === "study" && (
        <div className="mt-4 space-y-3">
          <p className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950">{t.studyNote}</p>
          {guidesFor(test.id).map((g) => (
            <article key={g.title} className="rounded-2xl border bg-white p-4">
              <h3 className="font-semibold text-[#01411C]">{g.title}</h3>
              <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-stone-700">{g.body}</p>
            </article>
          ))}
        </div>
      )}

      {tab === "syllabus" && (
        <div className="mt-4 space-y-3">
          {Object.keys(grouped).length === 0 && <p className="rounded-xl bg-white p-4 text-sm text-stone-600">{t.syllabusEmpty}</p>}
          {Object.entries(grouped).map(([sub, items]) => (
            <details key={sub} open className="rounded-xl border bg-white p-3">
              <summary className="cursor-pointer font-medium">
                {subjLabel(sub)}{" "}
                <span className="text-xs text-stone-500">
                  {items.reduce((a, b) => a + b.weightage, 0)}
                  {t.weightApprox}
                </span>
              </summary>
              <ul className="mt-2 space-y-1">
                {items.map((it) => (
                  <li key={it.id} className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={done.includes(it.id)} onChange={() => toggleTopic(test.id, it.id)} />
                    <span>{hi ? it.subtopic : it.topic}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      )}

      {tab === "papers" && (
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <p className="sm:col-span-2 text-xs text-stone-500">{t.papersNote}</p>
          {papers.length === 0 && <p className="sm:col-span-2 text-sm text-stone-600">{hi ? "इस परीक्षा के लिए जाँचा हुआ पेपर लिंक अभी उपलब्ध नहीं है।" : "No checked paper links are available for this exam yet."} <a className="text-emerald-800 underline" href={test.official_url} target="_blank" rel="noreferrer">{t.officialSource}</a></p>}
          {papers.map((p) => (
            <a key={p.id} href={p.file_url} target="_blank" rel="noreferrer" className="rounded-xl border bg-white p-4">
              <div className="font-medium">{t.officialSource}</div>
              <div className="text-xs text-stone-500">{p.conducting_body_variant}</div>
            </a>
          ))}
        </div>
      )}

      {tab === "mcq" && (
        <div className="mt-4 space-y-3">
          <input
            value={filter}
            onChange={(e) => { setFilter(e.target.value); setShown(40); }}
            placeholder={t.filterMcq}
            className="w-full rounded-xl border bg-white px-3 py-2 text-sm"
          />
          {filteredMcq.length === 0 && <p className="text-sm">{t.mcqEmpty}</p>}
          {matchingMcq.length > 0 && <p className="text-xs text-stone-600">{hi ? "दिखाए गए" : "Showing"} {filteredMcq.length} / {matchingMcq.length}</p>}
          {filteredMcq.map((m) => (
            <div key={m.id} className="rounded-xl border bg-white p-4">
              <div className="text-xs text-stone-500">
                MCQ · {m.subject} · {m.topic}
              </div>
              <p className="mt-1 font-medium">{m.question_text}</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm">
                {m.options.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ol>
              <button className="mt-2 text-sm text-emerald-800" onClick={() => setRevealed(revealed === m.id ? null : m.id)}>
                {revealed === m.id ? t.hideAnswer : t.showAnswer}
              </button>
              {revealed === m.id && (
                <p className="mt-1 text-sm text-emerald-900">
                  {m.options[m.correct_answer]} — {m.explanation}
                </p>
              )}
            </div>
          ))}
          {shown < matchingMcq.length && (
            <button type="button" className="rounded-full border border-emerald-800 bg-white px-4 py-2 text-sm font-medium text-emerald-900" onClick={() => setShown((n) => n + 40)}>
              {hi ? "और प्रश्न दिखाएँ" : "Show more questions"}
            </button>
          )}
        </div>
      )}

      {tab === "mock" && (
        <div className="mt-4 rounded-2xl border bg-white p-5">
          <p className="text-sm text-stone-600">
            {t.mockNote} {subjectsFor(test.id).map(subjLabel).join(", ")}.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
            {MOCK_SLOTS.map((n) => (
              <Link
                key={n}
                href={`/mock/${test.id}?n=${n}`}
                className="rounded-xl border bg-emerald-50 px-3 py-3 text-center text-sm font-medium text-emerald-900 hover:bg-emerald-100"
              >
                {t.mockN} {n}
                <div className="text-[10px] uppercase text-stone-500">{mockLevel(n)}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {tab === "jobs" && (
        <div className="mt-4 space-y-3">
          <button
            onClick={() => toggleJobFollow(test.id)}
            className={`rounded-full px-4 py-2 text-sm ${jobFollow.includes(test.id) ? "bg-emerald-800 text-white" : "border bg-white"}`}
          >
            {jobFollow.includes(test.id) ? t.following : t.followJobs}
          </button>
          {jobs.length === 0 && <p className="text-sm">{t.jobsEmpty}</p>}
          {jobs.map((j) => (
            <div key={j.id} className="rounded-xl border bg-white p-4">
              <div className="font-medium">{j.title}</div>
              <p className="text-sm text-stone-600">
                {j.organization} · {j.location} · {t.lastDate}: {j.last_date}
              </p>
              <p className="text-xs text-stone-500">
                {t.feeLabel}: {j.fee} · {j.source}
              </p>
              <a href={j.apply_url} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm font-medium text-emerald-800">
                {t.applyNow} →
              </a>
            </div>
          ))}
        </div>
      )}

      {tab === "apply" && (
        <div className="mt-4 space-y-4 rounded-2xl border bg-white p-5">
          {pack ? (
            <>
              <h3 className="font-semibold">{t.documents}</h3>
              <ul className="space-y-2">
                {pack.documents.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <input type="checkbox" checked={(docsDone[test.id] ?? []).includes(d)} onChange={() => toggleDoc(test.id, d)} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div>
                <div className="text-xs uppercase text-stone-500">{t.challan}</div>
                <p className="text-sm">{pack.challan}</p>
              </div>
              <a
                href={pack.apply_url}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-emerald-800 px-5 py-2 text-sm text-white"
              >
                {pack.apply_label}
              </a>
            </>
          ) : (
            <a
              href={applyUrl(test.id, test.official_url)}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-emerald-800 px-5 py-2 text-sm text-white"
            >
              {t.applyNow} →
            </a>
          )}
          <p className="text-xs text-stone-500">{t.noApply}</p>
        </div>
      )}

      {tab === "alerts" && (
        <ul className="mt-4 space-y-2">
          {alerts.length === 0 && <li className="text-sm text-stone-600">{t.alertsEmpty}</li>}
          {alerts.map((a) => (
            <li key={a.id} className="rounded-xl border bg-white p-3">
              <div className="text-xs text-stone-500">
                {a.type} · {alertDateLabel(a, hi)}
              </div>
              <div className="font-medium">{a.title}</div>
              <p className="text-sm">{a.body}</p>
              <a className="mt-1 inline-block text-sm text-emerald-800 underline" href={a.source_url} target="_blank" rel="noreferrer">{hi ? "आधिकारिक सूचना" : "Official notice"}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase text-stone-500">{label}</div>
      <div className="text-sm">{value}</div>
    </div>
  );
}
