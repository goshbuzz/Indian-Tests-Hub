import type { Metadata } from "next";
import Link from "next/link";
import { ALL_ALERTS } from "@/data/coverage";
import { JOBS } from "@/data/jobs";
import { CATEGORY_META, TESTS } from "@/data/tests";
import { JsonLd } from "@/components/JsonLd";
import { Logo } from "@/components/Logo";
import { CookieBar } from "@/components/CookieBar";
import { InstallPrompt } from "@/components/InstallPrompt";
import { OG_IMAGE, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

/**
 * Marketing homepage: fully server-rendered, no app state, so search engines and
 * answer engines get complete content on the first byte. The interactive hub lives
 * at /start (reached from the CTAs below), and the hub has the Hindi toggle.
 */

export const metadata: Metadata = {
  title: { absolute: "Indian Tests Hub — Free NEET, SSC, RRB, UPSC & 200+ Exam Prep" },
  description:
    "Free prep for 200+ Indian exams: NEET, JEE, CUET, SSC, RRB, IBPS, UPSC and state PSCs. Official patterns, syllabus, MCQs, mocks and apply links.",
  keywords: [
    "Indian Tests Hub",
    "free mock tests India",
    "NEET preparation 2026",
    "SSC CGL exam pattern",
    "RRB NTPC mock test",
    "UPSC prelims pattern",
    "government jobs India",
    "exam prep in Hindi",
  ],
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/`,
    title: "Indian Tests Hub — free prep for 200+ Indian exams",
    description: SITE_TAGLINE,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Tests Hub — free prep for Indian exams",
    description: SITE_TAGLINE,
  },
};

/** Home-page FAQ copy. Different wording from /faq so the two pages do not compete. */
const HOME_FAQS: { q: string; a: string }[] = [
  {
    q: "What is Indian Tests Hub?",
    a: "A free study website for Indian students and job seekers. It covers entrance, recruitment, PSC, banking, police, teaching, armed forces and professional exams in one hub, with each exam's pattern, a syllabus checklist, practice MCQs, timed mocks and the official apply link.",
  },
  {
    q: "Is it really free, or is there a hidden fee?",
    a: "Everything on the site is free: no academy charge, no subscription and no paid unlock. The only money you pay is the real application fee, on the official site of the conducting body.",
  },
  {
    q: "Do you host leaked papers or answer keys?",
    a: "No. Practice items are original MCQs, and mocks follow each exam's published pattern. Where a real past paper is public, we link to the conducting body's page rather than copying it.",
  },
  {
    q: "Can I use the hub in Hindi?",
    a: "Yes. Switch the language in Profile to हिंदी. The interface, test names, exam patterns and syllabus topics then appear in Hindi. Practice questions stay in English, as in most official papers.",
  },
  {
    q: "Do I need an account to practise?",
    a: "No. You can open the hub as a guest. Saved tests, streaks, points and mock scores stay on your own device, in your browser.",
  },
  {
    q: "Where do I submit my application?",
    a: "Only on the official site of the conducting body. Every test and job card on Indian Tests Hub links straight to that page. The hub never takes applications.",
  },
];

const STATS = [
  { value: `${TESTS.length}`, label: "exams covered" },
  { value: `${CATEGORY_META.length}`, label: "exam categories" },
  { value: "10", label: "timed mocks per test" },
  { value: "₹0", label: "forever — no academy fee" },
];

const FEATURES = [
  {
    icon: "📚",
    title: "Syllabus checklists, per exam",
    text: "Each test page starts with its syllabus broken into tickable topics. Track exactly what you have and have not revised.",
  },
  {
    icon: "📐",
    title: "Official exam patterns",
    text: "Questions, marks, time, negative marking and section split as published by the conducting body. Approximate patterns are labelled.",
  },
  {
    icon: "⏱️",
    title: "Timed mocks in the real mix",
    text: "Mini-papers built from each exam's section pattern, with a countdown and score at the end.",
  },
  {
    icon: "🌐",
    title: "English and Hindi",
    text: "The interface, test names, patterns and syllabus are available in Hindi. Practice questions stay in English.",
  },
  {
    icon: "💼",
    title: "Job listings with official links",
    text: "Current recruitment notices with posts, last date and a direct link to the official apply page.",
  },
  {
    icon: "📱",
    title: "Installable and offline-friendly",
    text: "Add it to your home screen. Progress lives on your device, so it keeps working when the network does not.",
  },
];

export default function HomePage() {
  const popular = TESTS.filter((t) => t.priority).slice(0, 6);
  const latestAlerts = [...ALL_ALERTS].sort((a, b) => b.published_at.localeCompare(a.published_at)).slice(0, 3);
  const latestJobs = JOBS.slice(0, 3);

  const homeLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: `${SITE_NAME} — free India exam prep hub`,
      description: SITE_TAGLINE,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@type": "Thing", name: "Exam preparation and government jobs in India" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: HOME_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Popular exams on Indian Tests Hub",
      itemListElement: popular.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Course",
          name: `${t.name} preparation`,
          url: `${SITE_URL}/tests/${t.id}`,
          description: t.format_description,
          provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f3e9] text-stone-900">
      <JsonLd data={homeLd} />

      <header className="tricolor-header sticky top-0 z-50 border-b border-emerald-900/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE_NAME} home`}>
            <Logo size={38} />
            <span className="leading-tight">
              <span className="block text-[15px] font-bold tracking-tight text-[#01411C]">Indian Tests Hub</span>
              <span className="block text-[10px] font-medium uppercase tracking-widest text-stone-500">free exam prep</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-stone-600 md:flex" aria-label="Main">
            <Link href="/explore" className="hover:text-[#01411C]">All exams</Link>
            <Link href="/jobs" className="hover:text-[#01411C]">Govt jobs</Link>
            <Link href="/alerts" className="hover:text-[#01411C]">Alerts</Link>
            <Link href="/faq" className="hover:text-[#01411C]">FAQ</Link>
          </nav>
          <Link
            href="/start"
            className="rounded-full bg-[#01411C] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#046a32]"
          >
            Open the hub
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#01411C] via-[#046a32] to-[#0a7a3e] text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, rgba(197,164,78,.55) 0, transparent 30%), radial-gradient(circle at 85% 75%, rgba(255,255,255,.35) 0, transparent 35%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.15fr_.85fr] lg:pb-24">
            <div className="hero-rise">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-emerald-50 ring-1 ring-white/20">
                🇮🇳 For students, graduates &amp; job seekers across India
              </p>
              <h1 className="mt-4 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Every major India exam. <span className="text-[#ffd97a]">One free hub.</span>
              </h1>
              <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-emerald-50/95 sm:text-lg">
                NEET, JEE, CUET, GATE, CAT, SSC, RRB, IBPS, UPSC and state exams. Official patterns, syllabus checklists,
                practice MCQs and timed mocks, each with the official apply link. In English and हिंदी. No academy fee.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/start"
                  className="group rounded-full bg-[#FF9933] px-6 py-3 text-base font-bold text-[#01411C] shadow-lg shadow-black/20 transition hover:bg-[#ffb866]"
                >
                  Open the free test hub{" "}
                  <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
                <Link
                  href="/explore"
                  className="rounded-full border border-white/35 px-6 py-3 text-base font-semibold text-white/95 transition hover:bg-white/10"
                >
                  Browse {TESTS.length} exams
                </Link>
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-emerald-50/90">
                <li>✔ Guest mode — no sign-up needed</li>
                <li>✔ Hindi and English</li>
                <li>✔ Apply only via official sites</li>
              </ul>
            </div>

            {/* Static preview card: website décor, no app state */}
            <div className="hero-rise-side relative mx-auto w-full max-w-sm" aria-hidden>
              <div className="absolute -inset-4 rounded-[2.5rem] bg-white/10 blur-2xl" />
              <div className="relative rounded-3xl border border-white/20 bg-white p-4 text-stone-900 shadow-2xl">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                  <span>Today on the hub</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-800">Free</span>
                </div>
                <div className="mt-3 rounded-2xl bg-gradient-to-br from-[#01411C] to-[#0a7a3e] p-4 text-white">
                  <p className="text-xs text-emerald-100">Mock in progress · SSC CGL Tier 1</p>
                  <p className="mt-1 text-2xl font-bold">Q 42 / 100</p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/25">
                    <div className="h-full w-[42%] rounded-full bg-[#FF9933]" />
                  </div>
                  <p className="mt-2 text-[11px] text-emerald-50">⏱ 0:34:12 left · streak day 12 🔥</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-center justify-between rounded-xl border border-stone-200 px-3 py-2">
                    <span className="font-medium">RRB NTPC — General Awareness</span>
                    <span className="text-xs text-emerald-700">practice →</span>
                  </li>
                  <li className="flex items-center justify-between rounded-xl border border-stone-200 px-3 py-2">
                    <span className="font-medium">NEET UG — Biology syllabus</span>
                    <span className="text-xs text-emerald-700">tick topics →</span>
                  </li>
                  <li className="flex items-center justify-between rounded-xl border border-stone-200 px-3 py-2">
                    <span className="font-medium">CTET Paper I — Mock 03</span>
                    <span className="text-xs text-emerald-700">150 min →</span>
                  </li>
                </ul>
                <p className="mt-3 text-center text-[11px] text-stone-400">Preview of what opens at “Open the hub”.</p>
              </div>
            </div>
          </div>

          <div className="relative border-t border-white/15 bg-black/10">
            <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-4 px-4 py-6 text-center sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="order-2 text-xs font-medium uppercase tracking-wide text-emerald-100/80">{s.label}</dt>
                  <dd className="text-2xl font-bold text-white sm:text-3xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-4 py-14 sm:py-16" aria-labelledby="features-h">
          <h2 id="features-h" className="text-center text-balance text-3xl font-bold tracking-tight text-[#01411C]">
            Everything you need, in one place
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="text-2xl">{f.icon}</div>
                <h3 className="mt-2 font-semibold text-stone-900">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-6xl px-4 pb-14 sm:pb-16" aria-labelledby="cats-h">
          <h2 id="cats-h" className="text-center text-balance text-3xl font-bold tracking-tight text-[#01411C]">
            Pick your lane — {CATEGORY_META.length} categories, {TESTS.length} exams
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-stone-600">
            From undergraduate entrance to one-paper recruitment, PSC, police, teaching and armed forces. Each opens a full prep page:
            pattern, syllabus, MCQs, mocks, jobs, alerts and the official apply link.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {CATEGORY_META.map((c) => {
              const n = TESTS.filter((x) => x.category === c.key).length;
              return (
                <Link
                  key={c.key}
                  href={`/explore?cat=${encodeURIComponent(c.key)}`}
                  className="group rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-700/40 hover:shadow-md"
                >
                  <div className="text-2xl">{c.icon}</div>
                  <div className="mt-2 font-semibold text-stone-900 group-hover:text-[#01411C]">{c.label}</div>
                  <div className="mt-0.5 text-xs text-stone-500">{n} exams · free</div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Popular exams */}
        <section className="mx-auto max-w-6xl px-4 pb-14 sm:pb-16" aria-labelledby="popular-h">
          <h2 id="popular-h" className="text-center text-balance text-3xl font-bold tracking-tight text-[#01411C]">
            Popular exams
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((test) => (
              <li key={test.id}>
                <Link
                  href={`/tests/${test.id}`}
                  className="group block h-full rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-emerald-700/40 hover:shadow-md"
                >
                  <div className="text-xs font-medium uppercase tracking-wide text-emerald-800">{test.category}</div>
                  <h3 className="mt-2 text-lg font-semibold text-stone-900 group-hover:text-[#01411C]">{test.name}</h3>
                  <p className="mt-1 text-xs text-stone-500">{test.conducting_body}</p>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-stone-600">{test.format_description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Jobs and alerts */}
        <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-14 sm:pb-16 lg:grid-cols-2">
          <div className="rounded-3xl border border-stone-200 bg-white p-6">
            <h2 className="text-xl font-bold text-[#01411C]">Open recruitment</h2>
            <ul className="mt-4 space-y-3">
              {latestJobs.map((j) => (
                <li key={j.id} className="rounded-xl border border-stone-200 p-3">
                  <div className="font-medium text-stone-900">{j.title}</div>
                  <div className="text-xs text-stone-500">
                    {j.organization} · last date {j.last_date}
                  </div>
                  <a href={j.apply_url} target="_blank" rel="noreferrer" className="mt-1 inline-block text-xs font-medium text-emerald-800 underline">
                    Official site →
                  </a>
                </li>
              ))}
            </ul>
            <Link href="/jobs" className="mt-4 inline-block text-sm font-semibold text-emerald-800">
              All jobs →
            </Link>
          </div>
          <div className="rounded-3xl border border-stone-200 bg-white p-6">
            <h2 className="text-xl font-bold text-[#01411C]">Latest alerts</h2>
            <ul className="mt-4 space-y-3">
              {latestAlerts.map((a) => (
                <li key={a.id} className="rounded-xl border border-stone-200 p-3">
                  <div className="font-medium text-stone-900">{a.title}</div>
                  <div className="mt-0.5 text-xs text-stone-500">{a.published_at.slice(0, 10)}</div>
                </li>
              ))}
            </ul>
            <Link href="/alerts" className="mt-4 inline-block text-sm font-semibold text-emerald-800">
              All alerts →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-4 pb-14 sm:pb-16" aria-labelledby="home-faq-h">
          <h2 id="home-faq-h" className="text-center text-balance text-3xl font-bold tracking-tight text-[#01411C]">
            Quick answers
          </h2>
          <div className="mt-8 space-y-3">
            {HOME_FAQS.map((f) => (
              <details key={f.q} className="rounded-2xl border border-stone-200 bg-white p-4">
                <summary className="cursor-pointer font-semibold text-stone-900">{f.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-14">
          <div className="rounded-3xl bg-gradient-to-br from-[#01411C] to-[#0a7a3e] p-8 text-center text-white sm:p-12">
            <h2 className="text-balance text-3xl font-bold tracking-tight">Your next exam starts today.</h2>
            <p className="mx-auto mt-3 max-w-xl text-emerald-50/90">
              Open the free hub, pick your exam and tick your first syllabus topic. Guest mode is included, and nothing is for sale.
            </p>
            <Link
              href="/start"
              className="mt-6 inline-block rounded-full bg-[#FF9933] px-6 py-3 text-base font-bold text-[#01411C] shadow-lg transition hover:bg-[#ffb866]"
            >
              Open the hub →
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center text-sm text-stone-600">
          <Logo size={34} />
          <p>
            © {new Date().getFullYear()} {SITE_NAME} · Independent study project · not affiliated with any exam body
          </p>
          <nav className="flex flex-wrap justify-center gap-4" aria-label="Footer">
            <Link href="/explore" className="hover:text-[#01411C]">All exams</Link>
            <Link href="/jobs" className="hover:text-[#01411C]">Jobs</Link>
            <Link href="/faq" className="hover:text-[#01411C]">FAQ</Link>
            <Link href="/about" className="hover:text-[#01411C]">About</Link>
            <Link href="/contact" className="hover:text-[#01411C]">Contact</Link>
            <Link href="/privacy" className="hover:text-[#01411C]">Privacy</Link>
            <Link href="/terms" className="hover:text-[#01411C]">Terms</Link>
          </nav>
        </div>
      </footer>

      <InstallPrompt />
      <CookieBar />
    </div>
  );
}
