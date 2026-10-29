"use client";

import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { ALL_MOCKS, paperShape, questionsForPaper } from "@/data/coverage";
import { TESTS } from "@/data/tests";
import { SUBJECT_HI } from "@/data/families";
import { paperSections, scoreMock, timerPosition, verifiedMockRules } from "@/data/mockRules";
import { useStore } from "@/lib/store";
import { dict } from "@/lib/i18n";

function MockInner() {
  const { id } = useParams<{ id: string }>();
  const sp = useSearchParams();
  const year = sp.get("year") ? Number(sp.get("year")) : 2026;
  const n = sp.get("n") ? Number(sp.get("n")) : 1;
  const test = TESTS.find((x) => x.id === id);
  const cfg = ALL_MOCKS.find((x) => x.test_id === id);
  const r = sp.get("r") ?? "";
  const questions = useMemo(() => questionsForPaper(id, year, n, r), [id, year, n, r]);
  const shape = paperShape(id, test?.category ?? "Recruitment");
  const rules = verifiedMockRules(test?.family);
  const sectionSeconds = rules?.sectionSeconds ?? 0;
  const sections = useMemo(() => paperSections(questions), [questions]);
  const { addAttempt, lang } = useStore();
  const t = dict[lang];
  const hi = lang === "hi";
  const router = useRouter();
  const [i, setI] = useState(0);
  const [ans, setAns] = useState<Record<string, number>>({});
  const [written, setWritten] = useState<Record<string, string>>({});
  const [showModel, setShowModel] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(0);
  const currentSection = useRef(0);
  const [left, setLeft] = useState(sectionSeconds || (cfg?.time_limit_minutes ?? 10) * 60);
  const [done, setDone] = useState(false);
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    // Reset the active attempt when the draw or exam changes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setI(0);
    setSectionIndex(0);
    setAns({});
    setWritten({});
    setDone(false);
    setShowAd(false);
    setShowModel(false);
    setLeft(sectionSeconds || (cfg?.time_limit_minutes ?? shape.minutes) * 60);
  }, [id, year, n, r, cfg, shape.minutes, sectionSeconds]);

  useEffect(() => {
    if (done || questions.length === 0) return;
    const duration = sectionSeconds || (cfg?.time_limit_minutes ?? shape.minutes) * 60;
    const count = sectionSeconds ? sections.length : 1;
    const started = Date.now();
    currentSection.current = 0;
    // Keep the displayed clock in sync when a new draw starts.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLeft(duration);
    const tick = () => {
      const position = timerPosition((Date.now() - started) / 1000, duration, count);
      if (sectionSeconds && position.section !== currentSection.current) {
        currentSection.current = position.section;
        setSectionIndex(position.section);
        setI(sections[position.section].start);
      }
      setLeft(position.secondsLeft);
    };
    const tm = setInterval(tick, 1000);
    return () => clearInterval(tm);
  }, [done, id, year, n, r, cfg, shape.minutes, sectionSeconds, sections, questions.length]);

  function finish() {
    if (done) return;
    setDone(true);
    const result = scoreMock(questions, ans, rules?.correct ?? 1, rules?.wrong ?? (cfg?.negative_marking ? cfg.negative_value : 0));
    addAttempt({
      test_id: id,
      score: rules ? result.score : Math.max(0, result.score),
      total: result.total || questions.length,
      date: new Date().toISOString(),
      paper_year: year,
    });
    setShowAd(true);
  }

  // Finish from an effect rather than inside the interval callback: it sees the latest answers.
  useEffect(() => {
    // The timer must submit once using the latest answer state at expiry.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (left === 0 && !done && questions.length > 0) finish();
    // finish intentionally sees current answers whenever the timer reaches zero.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [left, done, questions.length]);

  if (!test || questions.length === 0) {
    return (
      <div className="p-8">
        <p>{t.mockUnavailable}</p>
        <Link href={`/tests/${id}`}>{t.back}</Link>
      </div>
    );
  }

  const q = questions[i];
  const mm = Math.floor(left / 60);
  const ss = String(left % 60).padStart(2, "0");
  const activeSection = sectionSeconds ? sections[sectionIndex] : undefined;
  const overlapShort = !shape.short && questions.length < shape.slots.reduce((sum, slot) => sum + slot.n, 0);

  if (showAd) {
    const result = scoreMock(questions, ans, rules?.correct ?? 1, rules?.wrong ?? (cfg?.negative_marking ? cfg.negative_value : 0));
    const writtenN = questions.length - result.questionCount;
    return (
      <div className="min-h-screen bg-[#01411C] p-6 text-white">
        <div className="mx-auto max-w-lg rounded-2xl bg-white p-6 text-stone-900">
          <p className="text-xs uppercase text-amber-700">{t.resultLabel}</p>
          <h2 className="text-xl font-semibold">{t.resultTitle}</h2>
          <p className="mt-4 text-lg font-semibold">
            {t.scoreMcq}: {rules ? result.score : result.correctCount} / {rules ? result.total : result.questionCount}
          </p>
          {rules && <p className="text-sm text-stone-600">{hi ? "सही उत्तर" : "Correct answers"}: {result.correctCount} / {result.questionCount}</p>}
          {writtenN > 0 && (
            <p className="text-sm text-stone-600">{writtenN} {t.writtenCompare}</p>
          )}
          
          <button className="mt-4 w-full rounded-full bg-emerald-800 py-2 text-white" onClick={() => router.push(`/tests/${id}`)}>
            {t.skip}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f1e8] p-4">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between rounded-2xl bg-[#01411C] px-4 py-3 text-white">
          <div>
            <div className="text-xs opacity-80">
              {hi ? test.name_hi : test.name} · {t.mockFor} {n} · {year} · {t.timedPaper}
            </div>
            <div className="font-semibold">
              {hi ? "प्रश्न" : "Q"} {i + 1} / {questions.length}
              {activeSection && <span className="ml-2 text-xs font-normal">{hi ? "खंड" : "Section"} {sectionIndex + 1} / {sections.length}</span>}
            </div>
          </div>
          <div className="rounded-full bg-[#FF9933] px-3 py-1 font-mono text-[#01411C]">
            {mm}:{ss}
          </div>
        </div>
        <p className="mt-2 rounded-xl bg-white/80 px-3 py-2 text-[11px] text-stone-600">{hi ? test.format_hi : shape.note}
          {hi && (shape.short || overlapShort) && " कुछ खंडों के अभ्यास प्रश्न अभी तैयार हो रहे हैं, इसलिए यह मॉक आधिकारिक पैटर्न से छोटा है।"}
          {!hi && overlapShort && " Some sections share questions, so this paper is shorter than the pattern."}
          {activeSection && (hi ? " प्रत्येक खंड के लिए 15 मिनट हैं; समय समाप्त होने पर अगला खंड खुलेगा और पिछला खंड बंद हो जाएगा।" : " Each section has 15 minutes. The next section opens automatically when time expires; earlier sections are locked.")}
        </p>
        <div className="mt-4 rounded-2xl border bg-white p-5">
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-800">
            {(q.kind ?? "mcq") === "mcq" ? t.mcqSection : q.kind === "long" ? t.writtenSection : t.shortSection}
            {" · "}
            {hi ? SUBJECT_HI[q.subject] ?? q.subject : q.subject}
          </p>
          <p className="text-xs text-stone-500">
            {q.topic}
          </p>
          <h2 className="mt-2 text-lg font-medium">{q.question_text}</h2>
          {(q.kind ?? "mcq") === "mcq" ? (
            <div className="mt-4 space-y-2">
              {q.options.map((o, idx) => (
                <button
                  key={idx}
                  onClick={() => setAns({ ...ans, [q.id]: idx })}
                  className={`block w-full rounded-xl border px-4 py-3 text-left ${
                    ans[q.id] === idx ? "border-emerald-800 bg-emerald-50" : "hover:bg-stone-50"
                  }`}
                >
                  {o}
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-4">
              <textarea
                className="w-full rounded-xl border p-3 text-sm"
                rows={q.kind === "long" ? 8 : 4}
                placeholder={t.writePlaceholder}
                value={written[q.id] ?? ""}
                onChange={(e) => setWritten({ ...written, [q.id]: e.target.value })}
              />
              <button type="button" className="mt-2 text-sm text-emerald-800" onClick={() => setShowModel(!showModel)}>
                {showModel ? t.hideModel : t.showModel}
              </button>
              {showModel && <p className="mt-2 text-sm text-emerald-900">{q.model_answer}</p>}
            </div>
          )}
          <div className="mt-6 flex justify-between gap-2">
            <button disabled={i === (activeSection?.start ?? 0)} onClick={() => setI(i - 1)} className="rounded-full border px-4 py-2 text-sm disabled:opacity-40">
              {t.prev}
            </button>
            <button
              type="button"
              className="rounded-full border px-3 py-2 text-xs"
              onClick={() => router.replace(`/mock/${id}?year=${year}&n=${n}&r=${Date.now()}`)}
            >
              {t.newDraw}
            </button>
            {i < (activeSection?.end ?? questions.length - 1) ? (
              <button onClick={() => setI(i + 1)} className="rounded-full bg-emerald-800 px-4 py-2 text-sm text-white">
                {t.next}
              </button>
            ) : activeSection && sectionIndex < sections.length - 1 ? (
              <span className="self-center text-xs text-stone-600">{hi ? "अगला खंड समय समाप्त होने पर खुलेगा" : "Next section opens when time expires"}</span>
            ) : (
              <button onClick={finish} className="rounded-full bg-[#FF9933] px-4 py-2 text-sm text-[#01411C]">
                {t.submit}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MockPage() {
  return (
    <Suspense>
      <MockInner />
    </Suspense>
  );
}
