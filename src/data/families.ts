/**
 * Exam-pattern families. Every Indian test points at one family, which holds its
 * official section-wise pattern (questions, marks, time, negative marking), default
 * eligibility/fee text and the syllabus topics for each subject.
 *
 * A pattern is marked verified only when the catalogue flag is set and a specific
 * official source is recorded. Unsourced or approximate patterns are labelled accordingly.
 */

export type Section = [subject: string, questions: number, marks: number];

export type Family = {
  label: string;
  minutes: number;
  /** English + Hindi negative-marking text. */
  neg: string;
  neg_hi: string;
  sections: Section[];
  elig: string;
  fee: string;
  verified: boolean;
  /** Optional extra line (English) shown under the pattern. */
  note?: string;
  /** Specific official source and cycle for patterns checked against a notice. */
  source?: { title: string; url: string; cycle: string; checkedAt: string };
};

const N0 = { neg: "No negative marking", neg_hi: "कोई ऋणात्मक अंकन नहीं" };
const N1 = { neg: "−1 mark per wrong answer", neg_hi: "प्रत्येक गलत उत्तर पर −1 अंक" };
const N025 = { neg: "−0.25 mark per wrong answer", neg_hi: "प्रत्येक गलत उत्तर पर −0.25 अंक" };
const N033 = { neg: "−1/3 mark per wrong answer", neg_hi: "प्रत्येक गलत उत्तर पर −1/3 अंक" };
const N050 = { neg: "−0.50 mark per wrong answer", neg_hi: "प्रत्येक गलत उत्तर पर −0.50 अंक" };


function fam(
  key: string,
  label: string,
  minutes: number,
  n: { neg: string; neg_hi: string },
  sections: Section[],
  elig: string,
  fee: string,
  verified: boolean,
  note?: string,
  source?: Family["source"],
): [string, Family] {
  return [key, { label, minutes, neg: n.neg, neg_hi: n.neg_hi, sections, elig, fee, verified: verified && Boolean(source), note, source }];
}


export const FAMILIES: Record<string, Family> = Object.fromEntries([
  // ───── Undergraduate entrance ─────
  fam("neet", "NEET UG", 180, N1, [
    ["Physics", 45, 180], ["Chemistry", 45, 180], ["Biology", 90, 360],
  ], "Class 12 with Physics, Chemistry, Biology/Biotechnology; NTA age and aggregate rules apply.",
  "See the NTA bulletin for current category fees", true, "2026: 180 compulsory questions; Biology includes Botany and Zoology, without an official fixed 45/45 split. Correct +4 · wrong −1 · unattempted 0. Check the latest bulletin for future cycles.",
  { title: "NTA NEET (UG) 2026 information bulletin, examination pattern", url: "https://cdnbbsr.s3waas.gov.in/s37bc1ec1d9c3426357e69acd5bf320061/uploads/2026/02/202602081576322299.pdf", cycle: "2026", checkedAt: "2026-10-30" }),
  fam("rajasthan-medical-counselling", "Rajasthan NEET UG counselling", 0, N0, [],
  "See the Rajasthan counselling information bulletin for NEET eligibility, domicile and category requirements.",
  "See the current Rajasthan counselling notice", false, "Rajasthan's 2026 MBBS/BDS admissions notice concerns NEET UG counselling, not a separate mock examination. No representative mock is available here; use the NEET UG page for practice.",
  { title: "Rajasthan NEET UG Medical & Dental Counselling 2026 round-one notice", url: "https://jankalyanfile.rajasthan.gov.in/WebMyWayFiles/Advertisement/Achievements/2026/Aug/36644_ACH_3f989085-5991-4cf1-84e6-3b0f9fd678f2.pdf", cycle: "2026", checkedAt: "2026-10-30" }),
  fam("jee-main-1", "JEE Main Paper 1 (B.E./B.Tech)", 180, N1, [
    ["Mathematics", 25, 100], ["Physics", 25, 100], ["Chemistry", 25, 100],
  ], "Class 12 qualification and year-of-passing rules apply; check the NTA bulletin and institute requirements.",
  "See the NTA bulletin for category and session fees", true, "2027 Paper 1: each subject has 20 MCQs and 5 numerical questions; +4 for correct and −1 for incorrect answers in both sections. Practice mocks use MCQs only, not numerical entry.",
  { title: "NTA JEE (Main) 2027 information bulletin, sections 2.3–2.5", url: "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2026/10/202610241890224107.pdf", cycle: "2027", checkedAt: "2026-10-30" }),
  fam("jee-main-2", "JEE Main Paper 2 (B.Arch / B.Planning)", 180, N1, [
    ["Mathematics", 25, 100], ["Aptitude (Architecture)", 50, 200], ["Drawing", 2, 100],
  ], "Class 12 with Mathematics; B.Arch needs NATA/JEE-B.Arch eligibility as notified.",
  "₹1,000–2,000 (approx.)", false, "Drawing questions are assessed by the paper; confirm section counts in the bulletin."),
  fam("jee-adv", "JEE Advanced (per paper)", 180, { neg: "Varies by question type (partial and negative marks)", neg_hi: "प्रश्न के प्रकार के अनुसार (आंशिक व ऋणात्मक अंक)" }, [
    ["Mathematics", 18, 60], ["Physics", 18, 60], ["Chemistry", 18, 60],
  ], "Top 2.5 lakh JEE Main qualifiers plus age and category rules per IIT JAB.",
  "₹2,800 (general, per the IIT JAB notice)", false, "Two papers of 3 hours each, 180 marks per paper. Question counts per paper differ across sources (about 48–54); confirm in the IIT JAB brochure."),
  fam("cuet-ug", "CUET (UG) General Aptitude Test", 60, N1, [
    ["General Aptitude Test", 50, 250],
  ], "Class 12 passed or appearing; university and programme-specific requirements apply.",
  "See the NTA bulletin for category and subject-count fees", true, "2026: each selected subject is a separate 50-question paper lasting 60 minutes; +5 per correct answer and −1 per wrong answer. This practice paper covers the General Aptitude Test only, not language or domain papers. Check the latest bulletin for later cycles.",
  { title: "NTA CUET (UG) 2026 information bulletin, section 2.3", url: "https://cdnbbsr.s3waas.gov.in/s3d1a21da7bca4abff8b0b61b87597de73/uploads/2026/01/202601031633478370.pdf", cycle: "2026", checkedAt: "2026-10-30" }),
  fam("cuet-pg", "CUET (PG) per paper", 90, N1, [
    ["Domain Subject", 75, 300],
  ], "Bachelor's degree or appearing; university and programme-specific criteria apply.",
  "See the NTA bulletin for current fees", true, "2026: each selected paper has 75 MCQs in 90 minutes; +4 for correct and −1 for incorrect answers. Papers vary by subject; subject-specific practice is not yet available here.",
  { title: "NTA CUET (PG) 2026 information bulletin, examination scheme", url: "https://cdnbbsr.s3waas.gov.in/s388a839f2f6f1427879fc33ee4acf4f66/uploads/2025/12/202512161583029269.pdf", cycle: "2026", checkedAt: "2026-10-30" }),
  fam("eng-180", "State engineering CET (PCM, 180 Q)", 180, N0, [
    ["Physics", 60, 60], ["Chemistry", 60, 60], ["Mathematics", 60, 60],
  ], "Class 12 with PCM and the minimum aggregate notified by the state/university.",
  "Varies by state (approx. ₹500–1,500)", false, "Common CET pattern. Confirm exact question counts and marks in the state notice."),
  fam("mhtcet-pcm", "MHT CET (PCM)", 180, N0, [
    ["Physics", 50, 50], ["Chemistry", 50, 50], ["Mathematics", 50, 50],
  ], "HSC (Class 12) with PCM as per the CET Cell notice; domicile rules apply.",
  "₹800–1,000 (approx.)", false, "CET Cell pattern. Confirm the current year's notice."),
  fam("mhtcet-pcb", "MHT CET (PCB)", 180, N0, [
    ["Physics", 50, 50], ["Chemistry", 50, 50], ["Botany", 50, 50], ["Zoology", 50, 50],
  ], "HSC (Class 12) with PCB as per the CET Cell notice; domicile rules apply.",
  "₹800–1,000 (approx.)", false, "CET Cell pattern. Confirm the current year's notice."),
  fam("bitsat", "BITSAT", 180, N1, [
    ["Physics", 40, 120], ["Chemistry", 40, 120], ["Mathematics", 40, 120], ["English Proficiency", 15, 45], ["Logical Reasoning", 15, 45],
  ], "Class 12 with PCM (or PCB for Biology-pathway seats) and BITS admission criteria.",
  "₹3,400 (approx.)", false, "Correct +3 · wrong −1. 150 questions, 450 marks, 3 hours. Subject split varies across sources; confirm in the brochure."),
  fam("viteee", "VITEEE", 150, N0, [
    ["Physics", 40, 40], ["Chemistry", 35, 35], ["Mathematics", 35, 35], ["English", 5, 5], ["Aptitude", 10, 10],
  ], "Class 12 with PCM and VIT's aggregate for B.Tech programmes.",
  "₹1,250 (approx.)", false, "Confirm section counts in the VIT notice."),
  fam("srmjeee", "SRMJEEE", 150, N0, [
    ["Physics", 40, 40], ["Chemistry", 40, 40], ["Mathematics", 40, 40], ["Aptitude", 10, 10],
  ], "Class 12 with PCM and SRMIST's aggregate for B.Tech programmes.",
  "₹1,000–1,500 (approx.)", false, "Confirm section counts in the SRMIST notice."),
  fam("ipu-cet", "IPU CET (B.Tech, Delhi)", 150, N025, [
    ["Mathematics", 50, 50], ["Physics", 25, 25], ["Chemistry", 25, 25], ["English", 25, 25], ["Logical Reasoning", 25, 25],
  ], "Class 12 with PCM for B.Tech in GGSIPU and affiliated colleges.",
  "₹1,000 (approx.)", false, "Confirm section counts in the GGSIPU notice."),
  fam("aptitude-ug", "University aptitude test (UG)", 120, N025, [
    ["Logical Reasoning", 25, 25], ["Quantitative Aptitude", 25, 25], ["English", 25, 25], ["General Awareness", 25, 25],
  ], "Class 12 (or equivalent) with the university's aggregate.",
  "Per university notice", false, "Generic university aptitude pattern. Confirm the current notice."),
  fam("design-dat", "NID DAT / NIFT / UCEED (design aptitude)", 180, N0, [
    ["Design Aptitude", 50, 100], ["Drawing", 2, 100],
  ], "Class 12 (or appearing) as per the institute's notice; portfolio/studio stage applies.",
  "₹2,000–3,000 (approx.)", false, "Prelim written/CBT plus studio or situation test; confirm stages in the notice."),
  fam("nata", "NATA", 180, N0, [
    ["Mathematics", 20, 80], ["Aptitude (Architecture)", 40, 120], ["Drawing", 2, 100],
  ], "Class 12 with 50% (or as notified) in PCM/appearing; age rules as per COA.",
  "₹2,000 (approx.)", false, "Drawing test plus MCQ paper; confirm counts on nata.in."),
  fam("iiser-iat", "IISER Aptitude Test (IAT)", 180, N1, [
    ["Biology", 15, 60], ["Chemistry", 15, 60], ["Mathematics (IAT)", 15, 60], ["Physics", 15, 60],
  ], "Class 12 or eligible diploma, subject to passing-year, subject and programme requirements in the IISER brochure.",
  "See the IISER brochure for current category fees", true, "2026: 60 MCQs, 240 marks, 180 minutes; +4 for correct and −1 for incorrect answers. Shared practice questions are not official papers and may differ in difficulty.",
  { title: "IISER IAT 2026 information brochure, section 19", url: "https://www.iiseradmission.in/assets/pdfs/IB_IAT_2026_ENG.pdf", cycle: "2026", checkedAt: "2026-10-30" }),
  fam("nchm-jee", "NCHM JEE", 120, N1, [
    ["Numerical Ability and Analytical Aptitude", 15, 60], ["Reasoning and Logical Deduction", 15, 60], ["General Knowledge & Current Affairs", 15, 60], ["English Language", 45, 180], ["Aptitude for Service Sector", 30, 120],
  ], "Class 12 or equivalent with English, or appearing, subject to the NTA bulletin.",
  "See the NTA bulletin for current category fees", true, "2026: 120 MCQs in 120 minutes; +4 for correct and −1 for incorrect answers. Practice omits the service-sector section until suitable questions are available.",
  { title: "NTA NCHM JEE 2026 information bulletin, section 4", url: "https://cdnbbsr.s3waas.gov.in/s388a839f2f6f1427879fc33ee4acf4f66/uploads/2025/12/20260102470139941.pdf", cycle: "2026", checkedAt: "2026-10-30" }),
  fam("ipmat", "IPMAT (Integrated MBA)", 120, N025, [
    ["Quantitative Ability", 40, 40], ["Verbal Ability", 40, 40], ["Logical Reasoning", 40, 40],
  ], "Class 12 with the required percentage; IIM Indore/Rohtak notice applies.",
  "₹1,500–2,000 (approx.)", false, "Confirm section counts in the IIM notice."),
  // NTA JIPMAT 2026 information bulletin, sections 2.3–2.6:
  // https://cdnbbsr.s3waas.gov.in/s388a839f2f6f1427879fc33ee4acf4f66/uploads/2026/04/20260416666062493.pdf
  fam("jipmat", "JIPMAT", 150, N1, [
    ["Quantitative Aptitude", 33, 132], ["Logical Reasoning", 33, 132], ["Verbal Ability", 34, 136],
  ], "Class 12 or appearing; institute-specific eligibility applies. Check the NTA bulletin.",
  "See the current NTA bulletin", true, "2026: +4 per correct answer; −1 per incorrect answer. Logical reasoning includes data interpretation; verbal ability includes reading comprehension. Check the latest bulletin for future cycles.",
  { title: "NTA JIPMAT 2026 information bulletin, sections 2.3–2.6", url: "https://cdnbbsr.s3waas.gov.in/s388a839f2f6f1427879fc33ee4acf4f66/uploads/2026/04/20260416666062493.pdf", cycle: "2026", checkedAt: "2026-10-30" }),
  fam("clat-ug", "CLAT (UG 5-year LLB)", 120, N025, [
    ["English", 24, 24], ["General Knowledge & Current Affairs", 30, 30], ["Legal Reasoning", 30, 30], ["Logical Reasoning", 24, 24], ["Quantitative Techniques", 12, 12],
  ], "Class 12 with 45% (40% reserved) or as the Consortium notice states.",
  "₹4,000 (general, approx.)", false, "120 MCQs in 2 hours; section counts are approximate, confirm with the Consortium of NLUs notice."),
  fam("legal-aptitude", "Law entrance (legal aptitude)", 120, N025, [
    ["Legal Aptitude", 40, 40], ["Logical Reasoning", 30, 30], ["English", 30, 30], ["General Awareness", 20, 20],
  ], "Class 12 (or equivalent) as per the law university's notice.",
  "₹1,000–4,000 (approx.)", false, "Generic law-entrance pattern. Confirm the current notice."),
  fam("agri-ug", "ICAR AIEEA (UG)", 180, N0, [
    ["Physics", 30, 120], ["Chemistry", 30, 120], ["Biology", 60, 240], ["Mathematics", 30, 120],
  ], "Class 12 with PCB/PCM as per ICAR notice.",
  "₹1,000 (approx.)", false, "Confirm section counts in the NTA ICAR notice."),
  fam("matric-entrance", "School entrance / scholarship (Class 6–9)", 150, N0, [
    ["Mental Ability", 40, 40], ["Arithmetic", 40, 40], ["Language", 40, 40], ["General Knowledge", 30, 30],
  ], "Students of the relevant class as per the scheme notice.",
  "Usually free (confirm)", false, "Scholarship/school test. Confirm exact section counts in the official notice."),

  // ───── Postgraduate & research ─────
  fam("gate", "GATE (per paper)", 180, { neg: "−1/3 (1-mark) or −2/3 (2-mark) MCQ; no negative for NAT/MSQ", neg_hi: "1-अंक MCQ पर −1/3, 2-अंक MCQ पर −2/3; NAT/MSQ पर नहीं" }, [
    ["General Aptitude", 10, 15], ["Engineering Subject", 55, 85],
  ], "Bachelor's (BE/BTech) or Master's in the relevant subject; GATE notice for year-specific rules.",
  "₹1,800 general (approx.)", true, "65 questions, 100 marks, 3 hours. 1- and 2-mark questions; MCQ, MSQ and NAT types."),
  fam("cat", "CAT (IIM entrance)", 120, { neg: "−1 per wrong MCQ; no negative for TITA", neg_hi: "गलत MCQ पर −1; TITA पर कोई ऋणात्मक अंक नहीं" }, [
    ["Verbal Ability & Reading Comprehension", 24, 72], ["Data Interpretation & Logical Reasoning", 22, 66], ["Quantitative Aptitude", 22, 66],
  ], "Bachelor's degree (50% or as notified) for the IIM cycle.",
  "Check the current CAT notice for fees", false, "Illustrative counts based on recent papers; the 2026 section counts have not been confirmed from an official source. CAT includes non-MCQ questions. The current practice uses MCQs only and does not enforce sectional timing."),
  fam("xat", "XAT (XLRI)", 180, N025, [
    ["Verbal & Logical Ability", 30, 30], ["Decision Making", 30, 30], ["Quantitative Ability", 30, 30], ["General Knowledge", 30, 30],
  ], "Bachelor's degree as per XAT notice.",
  "₹2,200 (approx.)", false, "Confirm section counts in the XAT notice."),
  fam("mat", "MAT (AIMA)", 120, N025, [
    ["Language Comprehension", 30, 0], ["Intelligence & Critical Reasoning", 30, 0], ["Mathematical Skills", 30, 0], ["Data Analysis & Sufficiency", 30, 0], ["Economic & Business Environment", 30, 0],
  ], "Graduation in any discipline or final-year student, subject to institute admission requirements.",
  "See AIMA for current mode-specific fees", true, "AIMA's December 2026 page lists 150 MCQs across five sections of 30, in 120 minutes, with −0.25 for each incorrect answer. Practice reports correct answers, not an official scaled MAT score.",
  { title: "AIMA: information for MAT December 2026", url: "https://www.aima.in/content/testing-and-assessment/mat/mat", cycle: "December 2026", checkedAt: "2026-10-30" }),
  fam("cmat", "CMAT (AICTE)", 180, N1, [
    ["Quantitative Techniques & Data Interpretation", 20, 80], ["Logical Reasoning", 20, 80], ["Language Comprehension", 20, 80], ["General Awareness", 20, 80], ["Innovation & Entrepreneurship", 20, 80],
  ], "Bachelor's degree or appearing, subject to NTA and admitting-institution requirements.",
  "See the NTA bulletin for current category fees", true, "2026: 100 MCQs, 400 marks, 180 minutes. Five sections of 20 questions each; +4 per correct and −1 per wrong. Practice omits the Innovation & Entrepreneurship section until suitable questions are available.",
  { title: "NTA CMAT 2026 information bulletin, section 1.4", url: "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf", cycle: "2026", checkedAt: "2026-10-30" }),
  fam("snap", "SNAP (Symbiosis)", 120, N025, [
    ["Quantitative & Data Interpretation", 30, 30], ["Verbal & Reading Comprehension", 30, 30], ["Logical Reasoning", 30, 30], ["General Awareness", 30, 30],
  ], "Bachelor's degree for Symbiosis PGDM admissions.",
  "₹1,900 (approx.)", false, "Confirm section counts in the SNAP notice."),
  fam("nimcet", "NIMCET (MCA)", 120, N025, [
    ["Mathematics", 50, 200], ["Aptitude & Reasoning", 50, 200], ["Computer Knowledge", 30, 100],
  ], "BCA/BSc with mathematics as per NIT notice.",
  "₹1,000–2,000 (approx.)", false, "Confirm section counts in the NIMCET notice."),
  fam("ugc-net-p1", "UGC NET (Paper I)", 180, N0, [
    ["Teaching & Research Aptitude", 50, 100],
  ], "Qualification and JRF age rules vary by eligibility category; see the current NTA bulletin.",
  "See the NTA bulletin for current category fees", true, "December 2026: Paper I has 50 MCQs (100 marks); Papers I and II share one 180-minute session with no break. This is Paper I practice only, not a complete 180-minute exam. +2 correct; no negative marking.",
  { title: "NTA UGC-NET December 2026 FAQ, questions 29–31", url: "https://cdnbbsr.s3waas.gov.in/s301eee509ee2f68dc6014898c309e86bf/uploads/2026/10/20261019257579260.pdf", cycle: "December 2026", checkedAt: "2026-10-30" }),
  fam("ugc-net-p2", "UGC NET (Paper II subject)", 180, N0, [
    ["Subject Paper", 100, 200],
  ], "Qualification and subject-specific eligibility depend on the current NTA bulletin.",
  "See the NTA bulletin for current category fees", true, "December 2026: Paper II has 100 MCQs (200 marks); Papers I and II share one 180-minute session with no break. Subject-specific Paper II practice is not yet available. +2 correct; no negative marking.",
  { title: "NTA UGC-NET December 2026 FAQ, questions 29–31", url: "https://cdnbbsr.s3waas.gov.in/s301eee509ee2f68dc6014898c309e86bf/uploads/2026/10/20261019257579260.pdf", cycle: "December 2026", checkedAt: "2026-10-30" }),
  fam("csir-net", "CSIR UGC NET (Life/Physical/Maths sciences)", 180, N025, [
    ["Part A (General)", 20, 40], ["Part B & C (Subject)", 75, 150],
  ], "Master's degree (or appearing) with the aggregate notified by CSIR/NTA.",
  "₹1,000 general (approx.)", false, "Confirm counts in the NTA CSIR notice."),
  fam("jam", "IIT JAM", 180, N025, [
    ["General Aptitude", 10, 15], ["Subject Paper", 50, 85],
  ], "Bachelor's degree in the relevant subject (JAM notice applies).",
  "₹1,800 (approx.)", false, "Confirm section counts in the IIT JAM notice."),
  fam("gpat", "GPAT (Pharmacy)", 180, N025, [
    ["Pharmaceutical Sciences", 125, 500],
  ], "B.Pharm (or appearing) as per NTA GPAT notice.",
  "₹1,000 (approx.)", false, "Confirm counts in the GPAT notice."),
  fam("neet-pg", "NEET PG (MD/MS/PG Diploma)", 210, N1, [
    ["Medical Science", 200, 800],
  ], "MBBS and completion of internship by the notified date; NMC rules apply.",
  "₹3,500 general (approx.)", true, "200 MCQs, 800 marks, 3.5 hours. Correct +4 · wrong −1."),
  fam("neet-mds", "NEET MDS", 180, N1, [
    ["Dental Science", 240, 960],
  ], "BDS and completion of internship by the notified date.",
  "₹3,500 (approx.)", false, "Confirm counts in the NBEMS notice."),
  fam("ini-cet", "INI-CET / AIIMS PG (MD/MS)", 210, N1, [
    ["Medical Science", 300, 1200],
  ], "MBBS and internship as per the institute's notice.",
  "₹3,000 (approx.)", false, "Confirm counts in the NBEMS notice."),
  fam("aiapget", "AIAPGET (AYUSH PG)", 180, N1, [
    ["Ayush Science", 180, 720],
  ], "BAMS/BHMS/BUMS etc. as per NTA AIAPGET notice.",
  "₹1,000–1,500 (approx.)", false, "Confirm counts in the NTA AIAPGET notice."),
  fam("research-science", "Research science entrance (TIFR, JEST, NEST)", 180, N0, [
    ["Physics", 30, 90], ["Mathematics", 30, 90], ["General Science", 30, 90],
  ], "Bachelor's (or 3rd/4th year) in science; institute notice applies.",
  "Per notice", false, "Confirm section counts in the institute notice."),
  fam("aptitude-pg", "PG management aptitude (state/private)", 120, N025, [
    ["Quantitative Aptitude", 40, 40], ["Verbal Ability", 40, 40], ["Logical Reasoning", 40, 40], ["General Awareness", 40, 40],
  ], "Bachelor's degree (50%) as per the notice.",
  "₹1,000–2,500 (approx.)", false, "Generic PG management aptitude pattern. Confirm the current notice."),

  // ───── Central & state recruitment (SSC / RRB / state SSCs) ─────
  // Source: SSC Phase-XIV/2026 Selection Posts notice, sections 15.1–15.2.
  // https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_RHQ_2026_phase_xiv.pdf
  fam("ssc-selection-post", "SSC Selection Posts (CBE)", 60, N050, [
    ["General Intelligence & Reasoning", 25, 50], ["General Awareness", 25, 50], ["Quantitative Aptitude", 25, 50], ["English Language", 25, 50],
  ], "Eligibility varies by post and examination level; check the current SSC notice.",
  "See the current SSC notice", true, "2026 notice: four 15-minute sections; separate CBE levels for matriculation, higher secondary and graduation posts.",
  { title: "SSC Phase-XIV/2026 Selection Posts notice, sections 15.1–15.2", url: "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_RHQ_2026_phase_xiv.pdf", cycle: "2026", checkedAt: "2026-10-30" }),
  fam("cgl", "SSC CGL Tier I", 60, N050, [
    ["General Intelligence & Reasoning", 25, 50], ["General Awareness", 25, 50], ["Quantitative Aptitude", 25, 50], ["English Comprehension", 25, 50],
  ], "Qualifications, age limits and other rules vary by post; see the SSC notice.",
  "See the SSC notice for current fees and exemptions", true, "2026 Tier I: 100 MCQs, 200 marks; +2 per correct and −0.50 per wrong. Four 15-minute sections for standard timing; eligible candidates using a scribe have separate provisions. Tier II is not represented by this mock.",
  { title: "SSC Combined Graduate Level Examination 2026 notice, section 13.8", url: "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2025.pdf", cycle: "2026", checkedAt: "2026-10-30" }),
  fam("recruitment-generic", "General recruitment practice", 60, N050, [
    ["General Intelligence & Reasoning", 25, 50], ["General Awareness", 25, 50], ["Quantitative Aptitude", 25, 50], ["English Comprehension", 25, 50],
  ], "See the relevant conducting body's current notice for eligibility.",
  "See the conducting body's current notice", false, "Generic practice only; this is not a verified pattern for this recruitment. Check the applicable official notice."),
  fam("chsl", "SSC CHSL Tier 1", 60, N050, [
    ["English Language", 25, 50], ["General Intelligence & Reasoning", 25, 50], ["Quantitative Aptitude", 25, 50], ["General Awareness", 25, 50],
  ], "Class 12 pass (or appearing) as per post notice.",
  "₹100 (SC/ST/PwD/women exempt)", false, "Tier 1: 100 Q, 200 M, 60 min, −0.50 per wrong answer."),
  fam("mts", "SSC MTS (Tier 1)", 90, N025, [
    ["General Intelligence & Reasoning", 25, 25], ["Numerical Aptitude", 25, 25], ["English Language", 25, 25], ["General Awareness", 15, 15],
  ], "Class 10 pass as per SSC notice.",
  "₹100 (SC/ST/PwD/women exempt)", false, "Confirm the current SSC notice."),
  fam("ssc-gd", "SSC GD Constable (CBT)", 60, N025, [
    ["General Intelligence & Reasoning", 20, 40], ["General Knowledge & Awareness", 20, 40], ["Elementary Mathematics", 20, 40], ["English/Hindi", 20, 40],
  ], "Class 10 pass as per notice; age and physical standards apply.",
  "₹100 (SC/ST/PwD/women exempt)", true, "80 questions, 160 marks, 60 minutes."),
  fam("ssc-je", "SSC JE (Junior Engineer)", 120, N025, [
    ["General Intelligence & Reasoning", 50, 50], ["General Awareness", 50, 50], ["General Engineering (Civil/Mechanical/Electrical)", 100, 100],
  ], "Diploma or degree in the relevant engineering discipline.",
  "₹100 (SC/ST/PwD/women exempt)", false, "Paper I (CBT) pattern. Confirm the current SSC notice."),
  fam("ssc-steno", "SSC Stenographer (Grade C/D)", 60, N025, [
    ["General Intelligence & Reasoning", 50, 50], ["General Awareness", 50, 50], ["English Language & Comprehension", 100, 100],
  ], "Class 12 pass (or as per post notice); typing/stenography test applies.",
  "₹100 (SC/ST/PwD/women exempt)", false, "Confirm the current SSC notice; skill test follows CBT."),
  fam("ntpc", "RRB NTPC CBT 1 (Non-Technical Popular Categories)", 90, N033, [
    ["General Awareness", 40, 40], ["Mathematics", 30, 30], ["General Intelligence & Reasoning", 30, 30],
  ], "As per the RRB post notice (Class 12 / graduate, age rules, CBT).",
  "₹500 general (₹250 for certain categories)", true, "CBT 1: 100 Q, 100 M, 90 min, −1/3. CBT 2 is merit-deciding (120 Q, 120 M)."),
  fam("rrb-gd", "RRB Group D (Level 1)", 90, N033, [
    ["General Science", 25, 25], ["Mathematics", 25, 25], ["General Intelligence & Reasoning", 30, 30], ["General Awareness & Current Affairs", 20, 20],
  ], "Class 10 pass / ITI as per notice.",
  "₹500 general (₹250 for certain categories)", true, "100 Q, 100 M, 90 min, −1/3."),
  fam("rrb-alp", "RRB ALP (Assistant Loco Pilot) CBT 1", 60, N033, [
    ["Mathematics", 20, 20], ["General Intelligence & Reasoning", 20, 20], ["General Science", 20, 20], ["General Awareness & Current Affairs", 15, 15],
  ], "ITI / Diploma / Class 10 with ITI as per notice.",
  "₹500 general (₹250 for certain categories)", false, "Confirm the current RRB notice."),
  fam("rrb-tech", "RRB Technician (CBT 1)", 90, N033, [
    ["Mathematics", 20, 20], ["General Intelligence & Reasoning", 20, 20], ["General Science", 20, 20], ["General Awareness", 20, 20],
  ], "ITI / Diploma / Class 12 as per post notice.",
  "₹500 general (₹250 for certain categories)", false, "Confirm the current RRB notice."),
  fam("rrb-je", "RRB JE (CBT 1)", 90, N033, [
    ["Mathematics", 30, 30], ["General Intelligence & Reasoning", 30, 30], ["General Awareness", 15, 15], ["Physics & Chemistry", 15, 15], ["Engineering Subject", 10, 10],
  ], "B.E./B.Tech or Diploma in the relevant discipline as per notice.",
  "₹500 general (₹250 for certain categories)", false, "Confirm the current RRB notice."),
  fam("rrb-para", "RRB Paramedical (CBT 1)", 90, N033, [
    ["General Awareness", 40, 40], ["Mathematics", 30, 30], ["General Intelligence & Reasoning", 30, 30],
  ], "Relevant paramedical diploma/degree per notice.",
  "₹500 general (₹250 for certain categories)", false, "Confirm the current RRB notice."),
  fam("bank-clerk", "IBPS Clerk / RRB Clerk prelims", 60, N025, [
    ["English Language", 30, 30], ["Numerical Ability", 35, 35], ["Reasoning Ability", 35, 35],
  ], "Graduate in any discipline (or as per IBPS notice); computer proficiency.",
  "₹850 general (approx.); ₹175 SC/ST/PwD", true, "Prelims: 100 Q, 100 M, 60 min, 20 min per section, −0.25 per wrong answer."),
  fam("bank-po", "IBPS PO / SBI PO prelims", 60, N025, [
    ["English Language", 30, 30], ["Quantitative Aptitude", 35, 30], ["Reasoning Ability", 35, 40],
  ], "Graduate in any discipline (or as per bank notice); age and attempt limits apply.",
  "₹850 general (approx.); ₹175 SC/ST/PwD", false, "Prelims: 100 Q, 100 M, 60 min, 20 min per section. Quant/Reasoning marks follow the 2026 revised pattern (30/40); some sources list 35/35. Confirm in the notice."),
  fam("ibps-so", "IBPS SO (Specialist Officer) prelims", 60, N025, [
    ["English Language", 30, 25], ["Reasoning Ability", 35, 35], ["Quantitative Aptitude", 35, 40],
  ], "Graduate/post-graduate in the specialist stream as per IBPS notice.",
  "₹850 general (approx.)", false, "Confirm the current IBPS SO notice."),
  fam("sbi-so", "SBI SO (Specialist Officer)", 120, N025, [
    ["Professional Knowledge", 80, 160], ["Reasoning & English", 40, 40],
  ], "Graduate/post-graduate in the specialist stream as per SBI notice.",
  "₹750 general (approx.)", false, "Confirm the current SBI notice."),
  fam("rbi-b", "RBI Grade B (Phase I)", 120, N025, [
    ["General Awareness", 80, 80], ["English Language", 30, 30], ["Quantitative Aptitude", 30, 30], ["Reasoning Ability", 60, 60],
  ], "Graduate (60%+) or as per RBI notice; age rules apply.",
  "₹850 general (approx.)", false, "Confirm the current RBI notice."),
  fam("nabard-a", "NABARD Grade A (Phase I)", 120, N025, [
    ["English Language", 30, 30], ["Reasoning Ability", 35, 35], ["Quantitative Aptitude", 35, 35], ["General Awareness", 100, 100],
  ], "Graduate in any stream (60%) as per NABARD notice.",
  "₹850 general (approx.)", false, "Confirm the current NABARD notice."),
  fam("sebi-a", "SEBI Grade A (Phase I)", 120, N025, [
    ["General Awareness", 40, 40], ["English Language", 40, 40], ["Reasoning Ability", 40, 40], ["Quantitative Aptitude", 40, 40], ["Economics & Finance", 40, 40],
  ], "Graduate/post-graduate as per SEBI notice.",
  "₹1,000 (approx.)", false, "Confirm the current SEBI notice."),
  fam("lic-aao", "LIC AAO (Prelims)", 60, N025, [
    ["Reasoning & Computer Aptitude", 60, 60], ["English Language", 30, 30], ["Quantitative Aptitude", 35, 35], ["General Awareness", 40, 40],
  ], "Graduate in any stream (60%+) as per LIC notice.",
  "₹700 (approx.)", false, "Confirm the current LIC notice."),
  fam("nicl-ao", "NICL AO / GIC AO (Prelims)", 60, N025, [
    ["English Language", 30, 30], ["Reasoning Ability", 35, 35], ["Quantitative Aptitude", 35, 35],
  ], "Graduate (60%+) or as per NICL notice.",
  "₹1,000 (approx.)", false, "Prelims pattern. Mains and interview follow. Confirm the current NICL notice."),
  fam("dsssb", "DSSSB (Delhi) recruitment", 120, N025, [
    ["General Intelligence & Reasoning", 25, 25], ["General Awareness", 25, 25], ["Quantitative Aptitude", 25, 25], ["English Language", 25, 25],
  ], "Qualification as per DSSSB post notice.",
  "₹100–100 (approx.)", false, "Generic DSSSB pattern. Confirm the current notice."),
  fam("state-ssc", "State SSC (CGL/inter-level) prelims", 120, N025, [
    ["General Intelligence & Reasoning", 25, 25], ["General Awareness", 25, 25], ["Quantitative Aptitude", 25, 25], ["English/Hindi", 25, 25],
  ], "As per the state SSC post notice (Matric/Intermediate/Graduate).",
  "Varies by state (approx. ₹100–1,000)", false, "Generic state SSC pattern. Confirm the current notice."),
  fam("postal", "India Post / postal exam", 60, N025, [
    ["General Intelligence & Reasoning", 25, 25], ["General Awareness", 25, 25], ["Numerical Aptitude", 25, 25], ["English/Hindi", 25, 25],
  ], "Class 12 / graduate as per postal notice.",
  "₹100 (approx.)", false, "Generic pattern. Confirm the current notice."),
  fam("aai-je", "AAI Junior Executive (CBT)", 120, N025, [
    ["English Language", 40, 40], ["General Intelligence & Reasoning", 30, 30], ["Physics & Mathematics", 30, 30], ["General Awareness", 30, 30],
  ], "Degree in the relevant discipline per AAI notice.",
  "₹1,000 (approx.)", false, "Confirm the current AAI notice."),
  fam("fci", "FCI / food & supply staff exam", 90, N025, [
    ["General Intelligence & Reasoning", 25, 25], ["General Awareness", 25, 25], ["Quantitative Aptitude", 25, 25], ["English", 25, 25],
  ], "Graduate/Class 12 as per FCI notice.",
  "₹800 (approx.)", false, "Generic pattern. Confirm the current notice."),
  fam("aiims-cre", "AIIMS CRE / nursing recruitment", 120, N025, [
    ["Subject Knowledge", 100, 100], ["General Aptitude", 50, 50],
  ], "Relevant nursing/paramedical qualification per AIIMS notice.",
  "₹1,500 (approx.)", false, "Confirm the current AIIMS notice."),
  fam("barc", "BARC OCES / DGFS (Stipendiary Trainee)", 120, N025, [
    ["Subject Paper", 100, 100], ["General Aptitude", 50, 50],
  ], "BE/B.Tech or BSc/MSc as per BARC notice.",
  "₹500 (approx.)", false, "Confirm the current BARC notice."),
  fam("drdo-ceptam", "DRDO CEPTAM", 120, N025, [
    ["General Awareness", 30, 30], ["English", 30, 30], ["Reasoning", 30, 30], ["Mathematics", 30, 30],
  ], "Graduate/diploma as per DRDO notice.",
  "₹100 (approx.)", false, "Confirm the current DRDO notice."),

  // ───── Public service (PSC / Civil services) ─────
  // UPSC IES/ISS has separate, largely descriptive papers; it is not the Engineering Services exam.
  fam("upsc-ies-iss", "UPSC Indian Economic / Statistical Service", 0, N0, [],
  "IES requires a postgraduate degree in an eligible economics discipline; ISS requires an eligible statistics degree. See the UPSC notice for full criteria.",
  "See the UPSC notice", false, "2026: six written papers for each service (1,000 marks total), followed by a 200-mark interview. IES papers are descriptive; ISS includes objective and descriptive statistics papers. No representative mock is available yet.",
  { title: "UPSC IES/ISS 2026 notice, examination plan", url: "https://www.upsc.gov.in/sites/default/files/Exam_Notification_IES_ISS_Eng_11022026.pdf", cycle: "2026", checkedAt: "2026-10-30" }),
  fam("upsc-prelims", "UPSC Civil Services (Prelims)", 240, N033, [
    ["General Studies Paper I", 100, 200], ["CSAT Paper II", 80, 200],
  ], "Bachelor's degree (or appearing); age and attempt rules per UPSC notice.",
  "₹100 (women/SC/ST/PwD exempt)", true, "Two papers of 2 hours each. Paper II is qualifying (33%)."),
  fam("upsc-nda", "UPSC NDA & NA (written)", 300, N033, [
    ["Mathematics", 120, 300], ["General Ability Test", 150, 600],
  ], "Unmarried men (and women for NDA eligible branches) with Class 12 PCM as per UPSC notice.",
  "₹100 (women/SC/ST exempt)", false, "Maths 2.5 h (300 M); GAT 2.5 h (600 M)."),
  fam("upsc-cds", "UPSC CDS (Combined Defence Services)", 120, N033, [
    ["English", 120, 120], ["General Knowledge", 120, 120], ["Elementary Mathematics", 100, 100],
  ], "Graduate (or final-year) as per UPSC CDS notice; age and branch rules apply.",
  "₹200 (women/SC/ST exempt)", false, "Each paper 2 hours. OTA paper has its own pattern."),
  fam("upsc-capf", "UPSC CAPF (AC) — Assistant Commandant", 120, N033, [
    ["General Ability & Intelligence", 100, 200], ["General Studies & Essay", 100, 250], ["Essay", 1, 100],
  ], "Graduate as per UPSC CAPF notice; physical and medical standards apply.",
  "₹200 (women/SC/ST exempt)", false, "Approximate. Confirm the current UPSC CAPF notice."),
  fam("upsc-ese", "UPSC ESE (Engineering Services)", 120, N033, [
    ["Engineering Subject (Paper I)", 150, 300], ["Engineering Subject (Paper II)", 150, 300],
  ], "B.E./B.Tech (or equivalent) in the relevant discipline.",
  "₹200 (women/SC/ST exempt)", false, "Approximate. Confirm the current UPSC ESE notice."),
  fam("state-pcs", "State PCS / Administrative Service (Prelims)", 120, N033, [
    ["General Studies Paper I", 100, 200], ["General Studies Paper II (CSAT)", 80, 200],
  ], "Graduate (or as per state PSC notice); state domicile applies.",
  "Varies by state (approx. ₹100–1,000)", false, "Common state-PCS pattern. Confirm the current notice. Mains is descriptive."),
  fam("tnpsc-g1", "TNPSC Group I (Prelims)", 180, N025, [
    ["General Studies", 150, 150],
  ], "Graduate as per TNPSC notice; Tamil Language Eligibility Test applies.",
  "₹150 (approx.)", false, "Confirm the current TNPSC notice."),
  fam("tnpsc-g2", "TNPSC Group II / IIA (Prelims)", 180, N025, [
    ["General Studies", 100, 150], ["Aptitude & Mental Ability", 75, 75],
  ], "Graduate as per TNPSC notice.",
  "₹150 (approx.)", false, "Confirm the current TNPSC notice."),
  fam("tnpsc-g4", "TNPSC Group IV", 180, { neg: "No negative marking (per 2026 guides — confirm)", neg_hi: "कोई ऋणात्मक अंक नहीं (2026 गाइड के अनुसार — पुष्टि करें)" }, [
    ["Tamil Eligibility-cum-Scoring Test", 100, 150], ["General Studies & Aptitude", 100, 150],
  ], "Class 10 pass as per TNPSC notice.",
  "₹150 (approx.)", false, "Single objective paper: 200 questions, 300 marks, 3 hours (2026 guides). Sources differ on the section split, so confirm in the notification."),
  fam("kerala-psc", "Kerala PSC (LD Clerk / category)", 90, N025, [
    ["General Knowledge", 50, 50], ["Mental Ability", 25, 25], ["Language", 25, 25],
  ], "Class 10 / Class 12 / degree as per Kerala PSC notice.",
  "₹100 (approx.)", false, "Confirm the current Kerala PSC notice."),
  fam("judicial", "State judicial service (Prelims)", 120, N025, [
    ["Civil & Criminal Law", 100, 100], ["General Knowledge", 50, 50],
  ], "LLB with the requisite percentage and age as per the High Court / PSC notice.",
  "Varies by state (approx.)", false, "Generic judicial prelims pattern. Confirm the current notice."),
  fam("aibe", "All India Bar Exam (AIBE)", 180, N025, [
    ["Law (MCQ)", 100, 100],
  ], "LLB from a recognised university (or appearing in the final year) as per Bar Council of India.",
  "₹3,500 (approx.)", false, "100 MCQs, 100 marks, 2 hours (Bar Council of India)."),

  // ───── Police & CAPF ─────
  fam("police-const", "Police Constable (written)", 90, N025, [
    ["General Knowledge & Current Affairs", 25, 25], ["General Intelligence & Reasoning", 25, 25], ["Mathematics", 25, 25], ["Hindi/English", 25, 25],
  ], "Class 10/12 pass as per police notice; physical & medical standards.",
  "Varies by state (approx. ₹100–700)", false, "Common state-police written pattern. Confirm the current notice."),
  fam("police-si", "Police Sub-Inspector (written)", 120, N025, [
    ["General Knowledge & Current Affairs", 40, 40], ["General Intelligence & Reasoning", 40, 40], ["Mathematics", 40, 40], ["Hindi/English", 40, 40],
  ], "Graduate as per police notice; physical & medical standards.",
  "Varies by state (approx. ₹100–1,000)", false, "Common state-police SI pattern. Confirm the current notice."),
  fam("cpo-si", "SSC CPO Sub-Inspector (Paper I)", 120, N025, [
    ["General Intelligence & Reasoning", 50, 50], ["General Knowledge & General Awareness", 50, 50], ["Quantitative Aptitude", 50, 50], ["English Comprehension", 50, 50],
  ], "Graduate as per SSC CPO notice; age and physical standards.",
  "₹100 (SC/ST/PwD/women exempt)", false, "Confirm the current SSC CPO notice."),

  // ───── Teaching ─────
  fam("ctet", "CTET Paper I (Class I–V)", 150, N0, [
    ["Child Development & Pedagogy", 30, 30], ["Language I", 30, 30], ["Language II", 30, 30], ["Mathematics", 30, 30], ["Environmental Studies", 30, 30],
  ], "Class 12 with 50% + D.El.Ed/B.El.Ed (or as per CBSE notice).",
  "₹1,000 general (approx.)", true, "150 MCQs, 150 marks, 150 minutes. Paper II (Class VI–VIII) has its own subjects."),
  fam("tet", "State TET (Paper I, Class I–V)", 150, N0, [
    ["Child Development & Pedagogy", 30, 30], ["Language I", 30, 30], ["Language II", 30, 30], ["Mathematics", 30, 30], ["Environmental Studies", 30, 30],
  ], "Class 12 with D.El.Ed/B.El.Ed as per the state board notice.",
  "Varies by state (approx. ₹500–1,000)", false, "Common state TET pattern. Confirm the current notice."),
  fam("dsc", "State teacher recruitment (DSC/TRT)", 150, N025, [
    ["Subject Knowledge", 100, 100], ["Teaching Methodology", 30, 30], ["General Knowledge & Current Affairs", 20, 20],
  ], "Graduate/B.Ed. as per the state DSC notice.",
  "Varies by state (approx.)", false, "Generic state DSC pattern. Confirm the current notice."),
  fam("kvs", "KVS / NVS teacher (PRT/TGT/PGT)", 120, N025, [
    ["Subject Knowledge", 100, 100], ["Reasoning & General Awareness", 50, 50], ["English/Hindi", 50, 50],
  ], "Relevant degree/B.Ed. as per KVS/NVS notice.",
  "₹1,000 (approx.)", false, "Confirm the current KVS/NVS notice."),

  // ───── Armed forces ─────
  fam("afcat", "AFCAT (Air Force)", 120, N033, [
    ["Verbal Ability", 25, 75], ["Numerical Ability", 25, 75], ["Reasoning & Military Aptitude", 50, 150],
  ], "Graduate (or as per IAF notice); age rules apply.",
  "₹250 (approx.)", false, "Approximate. Confirm the current IAF notice."),
  fam("agniveer", "Agniveer CEE / Navy & Coast Guard", 90, N025, [
    ["General Knowledge & Current Affairs", 25, 25], ["Mathematics", 25, 25], ["General Science", 25, 25], ["Reasoning & English/Hindi", 25, 25],
  ], "Class 10/12 as per the Agnipath notice; physical & medical standards.",
  "₹250 (approx.)", false, "Approximate Agniveer CEE pattern. Confirm the current notice."),
  fam("tes", "Indian Army TES (Technical Entry Scheme)", 120, N033, [
    ["Mathematics", 50, 50], ["Physics", 50, 50], ["General Knowledge", 50, 50],
  ], "Class 12 PCM with 70% in Maths & Physics as per the Army notice.",
  "₹100 (approx.)", false, "Approximate. Confirm the current Indian Army notice."),
  fam("ssb", "SSB interview (service selection)", 0, N0, [
    ["Officer Intelligence Rating & Personality", 0, 0],
  ], "As per the Services Selection Board letter; medical clearance required.",
  "Free (travel costs borne by candidate)", false, "Interview-based selection (not an MCQ test). Scoring is by the SSB."),

  // ───── Professional & licensing ─────
  fam("ca", "CA (ICAI)", 180, N0, [
    ["Accounting", 100, 100], ["Taxation", 100, 100], ["Auditing", 100, 100], ["Business Law", 100, 100],
  ], "Class 12 (or equivalent) as per ICAI rules; Foundation/Inter/Final stages apply.",
  "₹9,000 approx. (Foundation)", false, "Subject-wise written papers. Confirm the current ICAI scheme."),
  fam("cs", "CS (ICSI)", 180, N0, [
    ["Business Environment & Law", 100, 100], ["Accounting & Auditing", 100, 100], ["Economics & Management", 100, 100],
  ], "Class 12 (or equivalent) as per ICSI rules; Foundation/Executive/Professional apply.",
  "₹4,000 (approx., Foundation)", false, "Subject-wise written papers. Confirm the current ICSI scheme."),
  fam("cma", "CMA (ICMAI)", 180, N0, [
    ["Fundamentals of Accounting", 100, 100], ["Cost & Management Accounting", 100, 100], ["Economics & Business", 100, 100],
  ], "Class 12 (or equivalent) as per ICMAI rules.",
  "₹4,000 approx.", false, "Subject-wise written papers. Confirm the current ICMAI scheme."),
  fam("fmge", "FMGE (foreign medical graduates)", 180, N1, [
    ["Medical Science", 300, 300],
  ], "MBBS from a recognised foreign university as per NMC rules.",
  "₹3,000 (approx.)", false, "Screening test for foreign medical graduates. Confirm the current NBEMS notice."),
  fam("cfa", "CFA (Level I, II, III)", 270, N0, [
    ["Ethics, Quant, Economics, Financial Reporting, Corp Finance, Equity, Fixed Income, Derivatives, Alternatives, Portfolio", 180, 180],
  ], "Bachelor's degree or final-year student / work experience as per CFA Institute rules.",
  "USD (per CFA Institute)", false, "Level I: 180 MCQs, 4 hours 30 min (from memory; confirm on CFA Institute). Level II/III have item-set and essay formats."),

  // ───── International (conducted in India) ─────
  fam("ielts", "IELTS (Academic / General)", 165, N0, [
    ["Listening", 40, 9], ["Reading", 40, 9], ["Writing", 2, 9], ["Speaking", 3, 9],
  ], "No formal eligibility; the receiving institution sets the required band.",
  "Per test centre (approx. ₹15,000–17,000)", false, "Four modules; band scores 0–9 (Listening/Reading/Writing/Speaking). Confirm the current format on the British Council / IDP site."),
  fam("toefl", "TOEFL iBT", 120, N0, [
    ["Reading", 3, 30], ["Listening", 3, 30], ["Speaking", 2, 30], ["Writing", 2, 30],
  ], "No formal eligibility; the receiving institution sets the required score.",
  "Per test centre (approx.)", false, "Score out of 120. Confirm module lengths on ETS."),
  fam("pte", "PTE Academic", 180, N0, [
    ["Speaking & Writing", 1, 90], ["Reading", 1, 90], ["Listening", 1, 90],
  ], "No formal eligibility; the receiving institution sets the required score.",
  "Per test centre (approx.)", false, "Computer-based. Confirm sections on Pearson."),
  fam("gre", "GRE General Test", 225, N0, [
    ["Verbal Reasoning", 2, 130], ["Quantitative Reasoning", 2, 130], ["Analytical Writing", 2, 6],
  ], "Bachelor's degree or appearing; programme-specific cut-offs apply.",
  "USD (per ETS; approx.)", false, "Score scales 130–170 (Verbal/Quant). Confirm on ETS."),
  fam("gmat", "GMAT Focus", 135, N0, [
    ["Quantitative Reasoning", 21, 60], ["Verbal Reasoning", 23, 60], ["Data Insights", 20, 60],
  ], "Bachelor's degree or appearing; business-school rules apply.",
  "USD (per GMAC)", false, "Confirm sections and timings on mba.com."),
  fam("sat", "SAT (College Board)", 180, N0, [
    ["Reading & Writing", 54, 800], ["Math", 44, 800],
  ], "No formal eligibility; US universities set the requirement.",
  "USD (per College Board)", false, "Digital adaptive test. Confirm on College Board."),
] as [string, Family][]);

/** Hindi display names for subjects. */
export const SUBJECT_HI: Record<string, string> = {
  "General Intelligence & Reasoning": "सामान्य बुद्धिमत्ता एवं तर्क",
  "Reasoning & English/Hindi": "तर्क एवं अंग्रेज़ी/हिंदी",
  "Reasoning & Computer Aptitude": "तर्क एवं कंप्यूटर योग्यता",
  "Reasoning Ability": "तर्क क्षमता",
  "Reasoning & Military Aptitude": "तर्क एवं सैन्य अभिरुचि",
  "Reasoning & General Awareness": "तर्क एवं सामान्य जागरूकता",
  "Reasoning": "तर्क",
  "Reasoning & English": "तर्क एवं अंग्रेज़ी",
  "Logical Reasoning": "तार्किक तर्क",
  "General Awareness": "सामान्य जागरूकता",
  "General Awareness & Current Affairs": "सामान्य जागरूकता व समसामयिकी",
  "General Awareness & Current Affairs (CA)": "सामान्य जागरूकता व समसामयिकी",
  "General Knowledge": "सामान्य ज्ञान",
  "General Knowledge & Awareness": "सामान्य ज्ञान व जागरूकता",
  "General Knowledge & Current Affairs": "सामान्य ज्ञान व समसामयिकी",
  "General Knowledge & General Awareness": "सामान्य ज्ञान व सामान्य जागरूकता",
  "General Science": "सामान्य विज्ञान",
  "General Studies": "सामान्य अध्ययन",
  "General Studies Paper I": "सामान्य अध्ययन प्रश्नपत्र I",
  "General Studies Paper II (CSAT)": "सामान्य अध्ययन प्रश्नपत्र II (सीसैट)",
  "CSAT Paper II": "सीसैट प्रश्नपत्र II",
  "General Studies & Essay": "सामान्य अध्ययन व निबंध",
  "Essay": "निबंध",
  "General Ability & Intelligence": "सामान्य योग्यता व बुद्धिमत्ता",
  "General Ability Test": "सामान्य योग्यता परीक्षा",
  "General Aptitude": "सामान्य अभियोग्यता",
  "General Aptitude Test": "सामान्य अभियोग्यता परीक्षा",
  "Teaching & Research Aptitude": "शिक्षण एवं अनुसंधान अभिरुचि",
  "Mathematics (IAT)": "गणित (आईएटी)",
  "Numerical Ability and Analytical Aptitude": "संख्यात्मक क्षमता एवं विश्लेषणात्मक अभिरुचि",
  "Reasoning and Logical Deduction": "तर्क और तार्किक निष्कर्ष",
  "Aptitude for Service Sector": "सेवा क्षेत्र के लिए अभिरुचि",
  "Aptitude & Mental Ability": "अभियोग्यता व मानसिक योग्यता",
  "Mental Ability": "मानसिक योग्यता",
  "Aptitude (Architecture)": "वास्तु अभिरुचि",
  "Aptitude": "अभिरुचि",
  "Numerical Ability": "संख्यात्मक योग्यता",
  "Numerical Aptitude": "संख्यात्मक अभियोग्यता",
  "Numerical Ability (Numerical)": "संख्यात्मक योग्यता",
  "Quantitative Aptitude": "परिमाणात्मक अभियोग्यता",
  "Quantitative Ability": "परिमाणात्मक योग्यता",
  "Quantitative Techniques": "परिमाणात्मक तकनीक",
  "Quantitative Ability & Verbal": "परिमाणात्मक व मौखिक योग्यता",
  "Quantitative & Data Interpretation": "परिमाणात्मक व डेटा विश्लेषण",
  "Data Interpretation & Logical Reasoning": "डेटा विश्लेषण व तार्किक तर्क",
  "Data Analysis & Sufficiency": "डेटा विश्लेषण व पर्याप्तता",
  "Data Insights": "डेटा अंतर्दृष्टि",
  "English": "अंग्रेज़ी",
  "English Language": "अंग्रेज़ी भाषा",
  "English Language & Comprehension": "अंग्रेज़ी भाषा व बोध",
  "English Comprehension": "अंग्रेज़ी बोध",
  "English Proficiency": "अंग्रेज़ी दक्षता",
  "English/Hindi": "अंग्रेज़ी/हिंदी",
  "Hindi/English": "हिंदी/अंग्रेज़ी",
  "Verbal Ability": "मौखिक योग्यता",
  "Verbal & Logical Ability": "मौखिक व तार्किक योग्यता",
  "Verbal & Reading Comprehension": "मौखिक व पठन-बोध",
  "Verbal Ability & Reading Comprehension": "मौखिक योग्यता व पठन-बोध",
  "Language Comprehension": "भाषा बोध",
  "Language": "भाषा",
  "Language I": "भाषा I",
  "Language II": "भाषा II",
  "Intelligence & Critical Reasoning": "बुद्धिमत्ता व आलोचनात्मक तर्क",
  "Indian & Global Environment": "भारतीय व वैश्विक परिवेश",
  "Economic & Business Environment": "आर्थिक एवं कारोबारी परिवेश",
  "Mathematics": "गणित",
  "Elementary Mathematics": "प्रारंभिक गणित",
  "Mathematics (MCQ)": "गणित (MCQ)",
  "Physics": "भौतिकी",
  "Chemistry": "रसायन विज्ञान",
  "Botany": "वनस्पति विज्ञान",
  "Zoology": "प्राणि विज्ञान",
  "Biology": "जीव विज्ञान",
  "Physics & Chemistry": "भौतिकी व रसायन विज्ञान",
  "Physics & Mathematics": "भौतिकी व गणित",
  "Engineering Subject": "इंजीनियरिंग विषय",
  "Engineering Subject (Paper I)": "इंजीनियरिंग विषय (प्रश्नपत्र I)",
  "Engineering Subject (Paper II)": "इंजीनियरिंग विषय (प्रश्नपत्र II)",
  "General Engineering (Civil/Mechanical/Electrical)": "सामान्य इंजीनियरिंग (सिविल/मैकेनिकल/इलेक्ट्रिकल)",
  "Drawing": "चित्रकला",
  "Design Aptitude": "डिज़ाइन अभिरुचि",
  "Subject Paper": "विषय प्रश्नपत्र",
  "Subject Knowledge": "विषय ज्ञान",
  "Subject Knowledge & Teaching": "विषय ज्ञान व शिक्षण",
  "Teaching Methodology": "शिक्षण पद्धति",
  "Child Development & Pedagogy": "बाल विकास व शिक्षणशास्त्र",
  "Environmental Studies": "पर्यावरण अध्ययन",
  "Civil & Criminal Law": "सिविल व आपराधिक कानून",
  "Legal Aptitude": "विधिक योग्यता",
  "Legal Reasoning": "विधिक तर्क",
  "Law (MCQ)": "कानून (MCQ)",
  "Economics & Finance": "अर्थशास्त्र व वित्त",
  "Professional Knowledge": "व्यावसायिक ज्ञान",
  "Medical Science": "चिकित्सा विज्ञान",
  "Dental Science": "दंत विज्ञान",
  "Ayush Science": "आयुष विज्ञान",
  "Pharmaceutical Sciences": "फार्मास्यूटिकल विज्ञान",
  "Research Aptitude": "शोध अभियोग्यता",
  "Accounting": "लेखाकर्म",
  "Taxation": "कराधान",
  "Auditing": "अंकेक्षण",
  "Business Law": "व्यावसायिक कानून",
  "Business Environment & Law": "व्यावसायिक वातावरण व कानून",
  "Accounting & Auditing": "लेखा व अंकेक्षण",
  "Economics & Management": "अर्थशास्त्र व प्रबंधन",
  "Fundamentals of Accounting": "लेखा के मूल सिद्धांत",
  "Cost & Management Accounting": "लागत व प्रबंधन लेखांकन",
  "Economics & Business": "अर्थशास्त्र व व्यवसाय",
  "Officer Intelligence Rating & Personality": "अधिकारी बुद्धिमत्ता व व्यक्तित्व",
  "Ethics, Quant, Economics, Financial Reporting, Corp Finance, Equity, Fixed Income, Derivatives, Alternatives, Portfolio": "नैतिकता, गणित, अर्थशास्त्र, वित्तीय रिपोर्टिंग, कॉर्प फाइनेंस, इक्विटी, फिक्स्ड इनकम, डेरिवेटिव, विकल्प, पोर्टफोलियो",
  "Listening": "सुनना",
  "Reading": "पढ़ना",
  "Writing": "लिखना",
  "Speaking": "बोलना",
  "Speaking & Writing": "बोलना व लिखना",
  "Reading & Writing": "पढ़ना व लिखना",
  "Math": "गणित",
  "Verbal Reasoning": "मौखिक तर्क",
  "Quantitative Reasoning": "परिमाणात्मक तर्क",
  "Analytical Writing": "विश्लेषणात्मक लेखन",
  "Dental Science (MCQ)": "दंत विज्ञान (MCQ)",
  "Engineering": "इंजीनियरिंग",
  "Plant Science": "पादप विज्ञान",
  "Mathematics & Logic": "गणित व तर्क",
  "Hindi": "हिंदी",
  "Computer Knowledge": "कंप्यूटर ज्ञान",
  "Computer": "कंप्यूटर",
  "Indian Polity": "भारतीय राजव्यवस्था",
  "Indian History": "भारतीय इतिहास",
  "Geography": "भूगोल",
  "Economy": "अर्थव्यवस्था",
  "Banking Awareness": "बैंकिंग जागरूकता",
  "Domain Subject": "विषय (डोमेन)",
  "Domain Subject (per paper)": "विषय (डोमेन)",
  "Core Subject": "मुख्य विषय",
  "General Test": "सामान्य परीक्षा",
  "Arithmetic": "अंकगणित",
  "Decision Making": "निर्णय क्षमता",
  "Mathematical Skills": "गणितीय कौशल",
  "Quantitative Techniques & Data Interpretation": "परिमाणात्मक तकनीक व डेटा विश्लेषण",
  "Innovation & Entrepreneurship": "नवाचार व उद्यमिता",
  "Aptitude & Reasoning": "अभिरुचि व तर्क",
  "Part A (General)": "भाग A (सामान्य)",
  "Part B & C (Subject)": "भाग B व C (विषय)",
  "Tamil Eligibility-cum-Scoring Test": "तमिल पात्रता-सह-स्कोरिंग परीक्षा",
  "General Studies & Aptitude": "सामान्य अध्ययन व अभिरुचि",
};

/** Syllabus topics per subject, English:Hindi pairs, `;` separated. */
export const SYLLABUS: Record<string, string> = {
  "General Intelligence & Reasoning": "Analogy:सादृश्यता;Series:श्रृंखला;Coding-decoding:कोडिंग-डिकोडिंग;Blood relations:रक्त संबंध;Direction sense:दिशा ज्ञान;Syllogism:न्यायवाक्य;Puzzles & seating:पहेली व बैठक व्यवस्था;Venn diagrams:वेन आरेख;Non-verbal reasoning:अशाब्दिक तर्क;Mathematical operations:गणितीय संक्रियाएँ",
  "Reasoning": "Analogy:सादृश्यता;Series:श्रृंखला;Coding-decoding:कोडिंग-डिकोडिंग;Syllogism:न्यायवाक्य;Puzzles:पहेली;Seating arrangement:बैठक व्यवस्था;Blood relations:रक्त संबंध;Direction sense:दिशा ज्ञान",
  "Reasoning Ability": "Puzzles & seating arrangement:पहेली व बैठक व्यवस्था;Inequality:असमानता;Syllogism:न्यायवाक्य;Data sufficiency:डेटा पर्याप्तता;Input-output:इनपुट-आउटपुट;Coding-decoding:कोडिंग-डिकोडिंग;Series:श्रृंखला",
  "Logical Reasoning": "Puzzles:पहेली;Syllogism:न्यायवाक्य;Series:श्रृंखला;Analytical reasoning:विश्लेषणात्मक तर्क;Critical reasoning:आलोचनात्मक तर्क",
  "Logical Reasoning & Analytical": "Puzzles:पहेली;Syllogism:न्यायवाक्य;Series:श्रृंखला;Critical reasoning:आलोचनात्मक तर्क",
  "Reasoning & Computer Aptitude": "Puzzles & seating:पहेली व बैठक व्यवस्था;Data sufficiency:डेटा पर्याप्तता;Computer basics:कंप्यूटर मूल बातें",
  "Reasoning & General Awareness": "Analogy:सादृश्यता;Series:श्रृंखला;Puzzles:पहेली;GK basics:सामान्य ज्ञान की मूल बातें",
  "Reasoning & Military Aptitude": "Analogy:सादृश्यता;Series:श्रृंखला;Military aptitude:सैन्य अभिरुचि",
  "Reasoning & English/Hindi": "Analogy:सादृश्यता;Series:श्रृंखला;English/Hindi grammar:अंग्रेज़ी/हिंदी व्याकरण",
  "Reasoning & English": "Analogy:सादृश्यता;Series:श्रृंखला;Grammar:व्याकरण;Comprehension:बोध",
  "Decision Making": "Case-based decision making:केस आधारित निर्णय क्षमता",
  "Quantitative Aptitude": "Number system:संख्या पद्धति;Percentage:प्रतिशत;Profit & loss:लाभ-हानि;Simple & compound interest:साधारण व चक्रवृद्धि ब्याज;Time & work:समय व कार्य;Time, speed & distance:समय, चाल व दूरी;Ratio & proportion:अनुपात व समानुपात;Averages:औसत;Mensuration:क्षेत्रमिति;Algebra:बीजगणित;Geometry:ज्यामिति;Trigonometry:त्रिकोणमिति;Data interpretation:डेटा विश्लेषण;Probability:प्रायिकता",
  "Quantitative Ability": "Number system:संख्या पद्धति;Percentage:प्रतिशत;Profit & loss:लाभ-हानि;Ratio & proportion:अनुपात व समानुपात;Time & work:समय व कार्य;Averages:औसत;Mensuration:क्षेत्रमिति;Data interpretation:डेटा विश्लेषण",
  "Quantitative Techniques": "Arithmetic:अंकगणित;Algebra:बीजगणित;Geometry:ज्यामिति;Data interpretation:डेटा विश्लेषण",
  "Quantitative & Data Interpretation": "Arithmetic:अंकगणित;Data interpretation:डेटा विश्लेषण;Caselets:केसलेट",
  "Numerical Ability": "Simplification:सरलीकरण;Percentage:प्रतिशत;Profit & loss:लाभ-हानि;Ratio:अनुपात;Data interpretation:डेटा विश्लेषण;Number series:संख्या श्रृंखला",
  "Numerical Aptitude": "Simplification:सरलीकरण;Percentage:प्रतिशत;Ratio & proportion:अनुपात व समानुपात;Mensuration:क्षेत्रमिति;Data interpretation:डेटा विश्लेषण",
  "Numerical Ability (Numerical)": "Simplification:सरलीकरण;Percentage:प्रतिशत;Data interpretation:डेटा विश्लेषण",
  "Mathematics": "Algebra:बीजगणित;Trigonometry:त्रिकोणमिति;Calculus:कैलकुलस;Coordinate geometry:निर्देशांक ज्यामिति;Probability:प्रायिकता;Vectors:सदिश;Matrices:आव्यूह",
  "Mathematics (IAT)": "Algebra:बीजगणित;Trigonometry:त्रिकोणमिति;Calculus:कैलकुलस;Coordinate geometry:निर्देशांक ज्यामिति;Probability:प्रायिकता;Vectors:सदिश;Matrices:आव्यूह",
  "Elementary Mathematics": "Number system:संख्या पद्धति;Arithmetic:अंकगणित;Geometry:ज्यामिति;Mensuration:क्षेत्रमिति;Algebra:बीजगणित",
  "Mathematics (MCQ)": "Algebra:बीजगणित;Trigonometry:त्रिकोणमिति;Calculus:कैलकुलस;Geometry:ज्यामिति",
  "Mathematics & Logic": "Algebra:बीजगणित;Logic:तर्क;Sets & functions:समुच्चय व फलन",
  "Engineering Mathematics": "Calculus:कैलकुलस;Linear algebra:रैखिक बीजगणित;Probability & statistics:प्रायिकता व सांख्यिकी;Differential equations:अवकल समीकरण",
  "Mathematics & Engineering": "Calculus:कैलकुलस;Linear algebra:रैखिक बीजगणित;Probability:प्रायिकता",
  "Physics": "Mechanics:यांत्रिकी;Thermodynamics:ऊष्मागतिकी;Electricity & magnetism:विद्युत व चुंबकत्व;Optics:प्रकाशिकी;Modern physics:आधुनिक भौतिकी;Waves:तरंग;Current electricity:धारा विद्युत;Units & measurements:मात्रक व मापन",
  "Physics & Chemistry": "Mechanics:यांत्रिकी;Electricity:विद्युत;Organic chemistry:कार्बनिक रसायन;Physical chemistry:भौतिक रसायन;Inorganic chemistry:अकार्बनिक रसायन",
  "Physics & Mathematics": "Mechanics:यांत्रिकी;Electricity:विद्युत;Calculus:कैलकुलस;Algebra:बीजगणित",
  "Chemistry": "Atomic structure:परमाणु संरचना;Chemical bonding:रासायनिक बंधन;Periodic table:आवर्त सारणी;Organic chemistry:कार्बनिक रसायन;Equilibrium:साम्यावस्था;Electrochemistry:विद्युत रसायन;Biomolecules:जैव अणु",
  "Botany": "Cell biology:कोशिका जीव विज्ञान;Genetics:आनुवंशिकी;Plant physiology:पादप शरीर क्रिया विज्ञान;Ecology:पारिस्थितिकी;Plant kingdom:पादप जगत;Morphology:आकारिकी",
  "Zoology": "Human physiology:मानव शरीर क्रिया विज्ञान;Genetics & evolution:आनुवंशिकी व विकास;Reproduction:प्रजनन;Animal kingdom:प्राणी जगत;Ecology:पारिस्थितिकी;Biotechnology:जैव प्रौद्योगिकी",
  "Biology": "Cell biology:कोशिका जीव विज्ञान;Genetics:आनुवंशिकी;Human physiology:मानव शरीर क्रिया विज्ञान;Ecology:पारिस्थितिकी;Biotechnology:जैव प्रौद्योगिकी",
  "Medical Science": "Anatomy:शरीर रचना;Physiology:शरीर क्रिया विज्ञान;Biochemistry:जैव रसायन;Pathology:रोगविज्ञान;Pharmacology:औषध विज्ञान;Microbiology:सूक्ष्म जीव विज्ञान;Medicine:चिकित्सा;Surgery:शल्य चिकित्सा;Pediatrics:बाल रोग;Obstetrics & Gynaecology:प्रसूति एवं स्त्री रोग;Community Medicine:समुदाय चिकित्सा",
  "Dental Science": "Oral pathology:मुख रोगविज्ञान;Periodontics:पेरियोडॉन्टिक्स;Prosthodontics:प्रोस्थोडॉन्टिक्स;Oral surgery:मुख शल्य;Dental materials:दंत सामग्री",
  "Dental Science (MCQ)": "Oral pathology:मुख रोगविज्ञान;Periodontics:पेरियोडॉन्टिक्स;Oral surgery:मुख शल्य",
  "Ayush Science": "Ayurveda basics:आयुर्वेद मूल बातें;Yoga & Naturopathy:योग व प्राकृतिक चिकित्सा;Pharmacology:औषध विज्ञान;Clinical practice:क्लिनिकल अभ्यास",
  "Pharmaceutical Sciences": "Pharmaceutics:फार्मास्यूटिक्स;Pharmacology:फार्माकोलॉजी;Pharmaceutical chemistry:फार्मास्यूटिकल रसायन;Pharmacognosy:फार्माकॉग्नॉसी;Pharmacy practice:फार्मेसी अभ्यास",
  "Engineering Subject": "Core engineering topics:मुख्य इंजीनियरिंग विषय;Applied mechanics:अनुप्रयुक्त यांत्रिकी;Basic electronics:मूल इलेक्ट्रॉनिक्स",
  "Engineering Subject (Paper I)": "Core engineering topics:मुख्य इंजीनियरिंग विषय;Applied mechanics:अनुप्रयुक्त यांत्रिकी",
  "Engineering Subject (Paper II)": "Core engineering topics:मुख्य इंजीनियरिंग विषय;Design:अभिकल्प",
  "General Engineering (Civil/Mechanical/Electrical)": "Strength of materials:पदार्थ सामर्थ्य;Surveying:सर्वेक्षण;Thermodynamics:ऊष्मागतिकी;Circuits:परिपथ;Machines:मशीनें",
  "English": "Grammar:व्याकरण;Vocabulary:शब्दावली;Synonyms & antonyms:पर्यायवाची व विलोम;Idioms & phrases:मुहावरे व लोकोक्तियाँ;Error spotting:त्रुटि पहचान;Sentence improvement:वाक्य सुधार;Fill in the blanks:रिक्त स्थान;Reading comprehension:पठन-बोध;Para jumbles:अनुच्छेद क्रम",
  "English Language": "Grammar:व्याकरण;Vocabulary:शब्दावली;Error spotting:त्रुटि पहचान;Fill in the blanks:रिक्त स्थान;Reading comprehension:पठन-बोध;Para jumbles:अनुच्छेद क्रम;Cloze test:क्लोज़ टेस्ट",
  "English Language & Comprehension": "Grammar:व्याकरण;Vocabulary:शब्दावली;Reading comprehension:पठन-बोध;Para jumbles:अनुच्छेद क्रम",
  "English Comprehension": "Reading comprehension:पठन-बोध;Para jumbles:अनुच्छेद क्रम;Grammar:व्याकरण",
  "English Proficiency": "Grammar:व्याकरण;Vocabulary:शब्दावली;Reading comprehension:पठन-बोध",
  "English/Hindi": "Grammar:व्याकरण;Vocabulary:शब्दावली;Comprehension:बोध",
  "Hindi/English": "Grammar:व्याकरण;Vocabulary:शब्दावली;Comprehension:बोध",
  "Verbal Ability": "Grammar:व्याकरण;Vocabulary:शब्दावली;Reading comprehension:पठन-बोध;Para jumbles:अनुच्छेद क्रम",
  "Verbal & Reading Comprehension": "Reading comprehension:पठन-बोध;Para jumbles:अनुच्छेद क्रम;Summary:सारांश",
  "Verbal Ability & Reading Comprehension": "Reading comprehension:पठन-बोध;Para jumbles:अनुच्छेद क्रम;Summary:सारांश",
  "Language Comprehension": "Reading comprehension:पठन-बोध;Grammar:व्याकरण;Vocabulary:शब्दावली",
  "Language": "Grammar:व्याकरण;Comprehension:बोध;Vocabulary:शब्दावली",
  "Language I": "Comprehension:बोध;Grammar:व्याकरण;Pedagogy of language:भाषा शिक्षणशास्त्र",
  "Language II": "Comprehension:बोध;Grammar:व्याकरण;Pedagogy of language:भाषा शिक्षणशास्त्र",
  "Hindi": "Grammar:व्याकरण;Comprehension:बोध",
  "General Awareness": "Indian history:भारतीय इतिहास;Indian polity:भारतीय राजव्यवस्था;Indian economy:भारतीय अर्थव्यवस्था;Geography:भूगोल;General science:सामान्य विज्ञान;Current affairs:समसामयिकी;Static GK:स्थैतिक जीके;Awards & books:पुरस्कार व पुस्तकें",
  "General Awareness & Current Affairs": "Current affairs:समसामयिकी;Static GK:स्थैतिक जीके;Indian polity:भारतीय राजव्यवस्था;Economy:अर्थव्यवस्था;Sports & awards:खेल व पुरस्कार",
  "General Awareness & Current Affairs (CA)": "Current affairs:समसामयिकी;Static GK:स्थैतिक जीके;Sports & awards:खेल व पुरस्कार",
  "General Knowledge": "Indian history:भारतीय इतिहास;Indian polity:भारतीय राजव्यवस्था;Geography:भूगोल;Economy:अर्थव्यवस्था;Science:विज्ञान;Current affairs:समसामयिकी",
  "General Knowledge & Current Affairs": "Indian history:भारतीय इतिहास;Indian polity:भारतीय राजव्यवस्था;Economy:अर्थव्यवस्था;Current affairs:समसामयिकी",
  "General Knowledge & Awareness": "Indian history:भारतीय इतिहास;Indian polity:भारतीय राजव्यवस्था;Geography:भूगोल;Science:विज्ञान;Current affairs:समसामयिकी",
  "General Knowledge & General Awareness": "Indian history:भारतीय इतिहास;Indian polity:भारतीय राजव्यवस्था;Geography:भूगोल;Current affairs:समसामयिकी",
  "General Science": "Physics basics:भौतिकी मूल बातें;Chemistry basics:रसायन मूल बातें;Biology basics:जीव विज्ञान मूल बातें;Everyday science:दैनिक विज्ञान",
  "General Studies": "History:इतिहास;Polity:राजव्यवस्था;Geography:भूगोल;Economy:अर्थव्यवस्था;Environment:पर्यावरण;Science & tech:विज्ञान व प्रौद्योगिकी;Ethics:नैतिकता",
  "General Studies Paper I": "History:इतिहास;Polity:राजव्यवस्था;Geography:भूगोल;Economy:अर्थव्यवस्था;Environment:पर्यावरण;Science & tech:विज्ञान व प्रौद्योगिकी;Current affairs:समसामयिकी",
  "General Studies Paper II (CSAT)": "Comprehension:बोध;Logical reasoning:तार्किक तर्क;Decision making:निर्णय क्षमता;Basic numeracy:मूल संख्यात्मकता;Data interpretation:डेटा विश्लेषण",
  "CSAT Paper II": "Comprehension:बोध;Logical reasoning:तार्किक तर्क;Decision making:निर्णय क्षमता;Basic numeracy:मूल संख्यात्मकता;Data interpretation:डेटा विश्लेषण",
  "General Studies & Essay": "History:इतिहास;Polity:राजव्यवस्था;Geography:भूगोल;Essay:निबंध",
  "General Ability & Intelligence": "Reasoning:तर्क;Numerical:संख्यात्मक;General awareness:सामान्य जागरूकता",
  "General Ability Test": "English:अंग्रेज़ी;General knowledge:सामान्य ज्ञान;Physics & Chemistry:भौतिकी व रसायन;Maths basics:गणित मूल बातें;Biology:जीव विज्ञान",
  "General Aptitude": "Logical reasoning:तार्किक तर्क;Numerical ability:संख्यात्मक योग्यता;Verbal reasoning:मौखिक तर्क;Data interpretation:डेटा विश्लेषण;Teaching & research aptitude:शिक्षण व शोध अभियोग्यता",
  "General Aptitude Test": "General knowledge and current affairs:सामान्य ज्ञान और समसामयिकी;General mental ability:सामान्य मानसिक योग्यता;Numerical ability:संख्यात्मक योग्यता;Quantitative reasoning:मात्रात्मक तर्क;Logical and analytical reasoning:तार्किक और विश्लेषणात्मक तर्क",
  "Mental Ability": "Reasoning:तर्क;Puzzles:पहेली;Series:श्रृंखला",
  "Aptitude & Mental Ability": "Reasoning:तर्क;Numerical:संख्यात्मक;Mental ability:मानसिक योग्यता",
  "Aptitude": "Logical reasoning:तार्किक तर्क;Numerical:संख्यात्मक;Verbal:मौखिक",
  "Aptitude (Architecture)": "Visual reasoning:दृश्य तर्क;Spatial ability:स्थानिक योग्यता;Architecture awareness:वास्तु जागरूकता",
  "Design Aptitude": "Visualisation:दृश्यीकरण;Colour & form:रंग व आकार;Design thinking:डिज़ाइन चिंतन",
  "Drawing": "Sketching:स्केचिंग;Perspective:परिप्रेक्ष्य;Composition:संरचना;Life drawing:जीवन चित्रण",
  "Arithmetic": "Number system:संख्या पद्धति;Percentage:प्रतिशत;Profit & loss:लाभ-हानि;Averages:औसत",
  "Mathematical Skills": "Number system:संख्या पद्धति;Percentage:प्रतिशत;Ratio:अनुपात;Algebra:बीजगणित;Geometry:ज्यामिति",
  "Data Analysis & Sufficiency": "Data interpretation:डेटा विश्लेषण;Data sufficiency:डेटा पर्याप्तता;Tables & charts:सारणी व चार्ट",
  "Data Interpretation & Logical Reasoning": "Data interpretation:डेटा विश्लेषण;Logical puzzles:तार्किक पहेली;Caselets:केसलेट",
  "Quantitative Ability & Verbal": "Quant basics:परिमाणात्मक मूल बातें;Verbal basics:मौखिक मूल बातें",
  "Verbal & Logical Ability": "Verbal reasoning:मौखिक तर्क;Sentence correction:वाक्य शुद्धि;Logical reasoning:तार्किक तर्क;Analogy & classification:सादृश्यता व वर्गीकरण;Reading comprehension:पठन बोध",
  "Civil & Criminal Law": "Constitutional law:संवैधानिक कानून;Criminal law (IPC/BNS):आपराधिक कानून;CPC & CrPC:सीपीसी व सीआरपीसी;Evidence Act:साक्ष्य अधिनियम",
  "Legal Aptitude": "Constitutional law:संवैधानिक कानून;Legal maxims:विधिक सूक्तियाँ;Current legal affairs:समसामयिक विधिक घटनाएँ",
  "Legal Reasoning": "Legal principles:विधिक सिद्धांत;Case application:केस अनुप्रयोग;Constitutional law:संवैधानिक कानून",
  "Law (MCQ)": "Constitutional law:संवैधानिक कानून;Criminal law:आपराधिक कानून;Contract law:संविदा कानून;Torts:अपकार (टॉर्ट्स)",
  "Child Development & Pedagogy": "Child development:बाल विकास;Learning & pedagogy:अधिगम व शिक्षणशास्त्र;Inclusive education:समावेशी शिक्षा;Evaluation:मूल्यांकन",
  "Teaching Methodology": "Teaching methods:शिक्षण विधियाँ;Lesson planning:पाठ योजना;Evaluation:मूल्यांकन",
  "Environmental Studies": "Environment:पर्यावरण;Family & community:परिवार व समुदाय;Food & shelter:भोजन व आवास;Plants & animals:पौधे व जानवर",
  "Subject Paper": "Core subject topics:मुख्य विषय;Previous-year pattern:पिछले वर्ष का पैटर्न",
  "Subject Knowledge": "Core subject topics:मुख्य विषय;Pedagogy:शिक्षणशास्त्र;Current developments:वर्तमान विकास",
  "Subject Knowledge & Teaching": "Core subject topics:मुख्य विषय;Pedagogy:शिक्षणशास्त्र",
  "Medical Science (MCQ)": "Anatomy:शरीर रचना;Physiology:शरीर क्रिया विज्ञान;Pathology:रोगविज्ञान;Medicine:चिकित्सा",
  "Professional Knowledge": "Core subject topics:मुख्य विषय;Banking & finance:बैंकिंग व वित्त;Current affairs:समसामयिकी",
  "Banking Awareness": "Banking basics:बैंकिंग मूल बातें;RBI functions:आरबीआई के कार्य;Financial inclusion:वित्तीय समावेशन;Banking terms:बैंकिंग शब्दावली",
  "Economics & Finance": "Indian economy:भारतीय अर्थव्यवस्था;Banking & finance:बैंकिंग व वित्त;Global economy:वैश्विक अर्थव्यवस्था;Budget:बजट",
  "Economy": "Indian economy:भारतीय अर्थव्यवस्था;Banking & finance:बैंकिंग व वित्त;Budget:बजट;Planning:योजना",
  "Indian Polity": "Constitution:संविधान;Fundamental rights:मौलिक अधिकार;Parliament:संसद;Judiciary:न्यायपालिका;Federalism:संघवाद;Election commission:चुनाव आयोग",
  "Indian History": "Ancient:प्राचीन इतिहास;Medieval:मध्यकालीन इतिहास;Modern (freedom struggle):आधुनिक इतिहास (स्वतंत्रता संग्राम)",
  "Geography": "Physical geography:भौतिक भूगोल;Indian geography:भारतीय भूगोल;Climate:जलवायु;Rivers & soils:नदियाँ व मृदा",
  "Computer Knowledge": "Computer basics:कंप्यूटर मूल बातें;MS Office:एमएस ऑफिस;Internet & networks:इंटरनेट व नेटवर्क;Operating systems:ऑपरेटिंग सिस्टम",
  "Computer": "Computer basics:कंप्यूटर मूल बातें;Operating systems:ऑपरेटिंग सिस्टम;Networks:नेटवर्क",
  "Research Aptitude": "Research methods:शोध पद्धति;Data analysis:डेटा विश्लेषण;Reasoning:तर्क;Comprehension:बोध",
  "Teaching & Research Aptitude": "Teaching aptitude:शिक्षण अभियोग्यता;Research aptitude:शोध अभियोग्यता",
  "Visual reasoning": "Visual reasoning:दृश्य तर्क",
  "Accounting": "Financial accounting:वित्तीय लेखा;Company accounts:कंपनी लेखा;Partnership accounts:साझेदारी लेखा",
  "Taxation": "Income tax:आयकर;GST:जीएसटी;Indirect tax:अप्रत्यक्ष कर",
  "Auditing": "Audit principles:अंकेक्षण सिद्धांत;Internal control:आंतरिक नियंत्रण;Audit reporting:अंकेक्षण प्रतिवेदन",
  "Business Law": "Contract law:संविदा कानून;Companies Act:कंपनी अधिनियम;Sale of goods:माल विक्रय",
  "Business Environment & Law": "Business environment:व्यावसायिक वातावरण;Company law:कंपनी कानून;Economic laws:आर्थिक कानून",
  "Accounting & Auditing": "Accounts:लेखे;Auditing:अंकेक्षण;Financial reporting:वित्तीय प्रतिवेदन",
  "Economics & Management": "Economics:अर्थशास्त्र;Management:प्रबंधन;Financial management:वित्तीय प्रबंधन",
  "Fundamentals of Accounting": "Accounting principles:लेखा सिद्धांत;Financial statements:वित्तीय विवरण",
  "Cost & Management Accounting": "Cost concepts:लागत अवधारणा;Budgeting:बजटिंग;Standard costing:मानक लागत",
  "Economics & Business": "Economics:अर्थशास्त्र;Business basics:व्यवसाय मूल बातें",
  "Listening": "Listening:सुनना",
  "Reading": "Reading:पढ़ना",
  "Writing": "Writing:लिखना",
  "Speaking": "Speaking:बोलना",
  "Speaking & Writing": "Speaking:बोलना;Writing:लिखना",
  "Reading & Writing": "Reading:पढ़ना;Writing:लिखना",
  "Math": "Maths:गणित",
  "Verbal Reasoning": "Verbal reasoning:मौखिक तर्क",
  "Quantitative Reasoning": "Quant:परिमाणात्मक",
  "Analytical Writing": "Essay:निबंध",
  "Officer Intelligence Rating & Personality": "Group tasks:समूह कार्य;Psychology tests:मनोवैज्ञानिक परीक्षण;Personal interview:व्यक्तिगत साक्षात्कार",
  "Ethics, Quant, Economics, Financial Reporting, Corp Finance, Equity, Fixed Income, Derivatives, Alternatives, Portfolio": "Ethics:नैतिकता;Quant:परिमाणात्मक;Economics:अर्थशास्त्र;Financial reporting:वित्तीय रिपोर्टिंग;Corporate finance:कॉर्पोरेट फाइनेंस;Equity:इक्विटी;Fixed income:फिक्स्ड इनकम;Derivatives:डेरिवेटिव;Portfolio:पोर्टफोलियो",
  "Domain Subject": "Core subject topics:मुख्य विषय;Previous-year pattern:पिछले वर्ष का पैटर्न",
  "Domain Subject (per paper)": "Core subject topics:मुख्य विषय;Previous-year pattern:पिछले वर्ष का पैटर्न",
  "Core Subject": "Core subject topics:मुख्य विषय",
  "Engineering": "Core engineering topics:मुख्य इंजीनियरिंग विषय",
  "Computer Knowledge (Paper)": "Computer basics:कंप्यूटर मूल बातें",
  "Data Insights": "Data interpretation:डेटा विश्लेषण;Graphs & tables:ग्राफ़ व सारणी",
  "Engineering Mathematics & Subject": "Core subject topics:मुख्य विषय;Engineering mathematics:इंजीनियरिंग गणित",
  "Dental Materials": "Dental materials:दंत सामग्री",
  "Pharmaceutical Chemistry": "Pharmaceutical chemistry:फार्मास्यूटिकल रसायन",
  "Engineering Physics": "Engineering physics:इंजीनियरिंग भौतिकी",
  "Verbal Ability (Paper)": "Verbal:मौखिक",
  "Biology (MCQ)": "Biology:जीव विज्ञान",
  "Plant Science": "Plant science:पादप विज्ञान",
  "Hindi (Paper)": "Grammar:व्याकरण",
  "General Test": "General knowledge:सामान्य ज्ञान;Reasoning:तर्क;Aptitude:अभियोग्यता",
  "Quantitative Techniques & Data Interpretation": "Arithmetic:अंकगणित;Algebra:बीजगणित;Data interpretation:आंकड़ा विश्लेषण;Geometry:ज्यामिति",
  "Innovation & Entrepreneurship": "Business awareness:व्यावसायिक जागरूकता;Innovation:नवाचार;Entrepreneurship:उद्यमिता;Startups & schemes:स्टार्टअप व योजनाएँ",
  "Aptitude & Reasoning": "Verbal reasoning:मौखिक तर्क;Non-verbal reasoning:अशाब्दिक तर्क;Quantitative aptitude:मात्रात्मक अभियोग्यता",
  "Part A (General)": "General studies:सामान्य अध्ययन;Language:भाषा",
  "Part B & C (Subject)": "Subject knowledge:विषय ज्ञान;Pedagogy:शिक्षण पद्धति",
  "Essay": "Essay writing:निबंध लेखन;Comprehension:बोध",
  "Intelligence & Critical Reasoning": "Logical reasoning:तार्किक तर्क;Analytical reasoning:विश्लेषणात्मक तर्क;Critical thinking:आलोचनात्मक चिंतन",
  "Indian & Global Environment": "Indian polity:भारतीय राजव्यवस्था;Economy:अर्थव्यवस्था;Environment:पर्यावरण;Current affairs:समसामयिकी;International relations:अंतरराष्ट्रीय संबंध",
  "Tamil Eligibility-cum-Scoring Test": "Tamil language:तमिल भाषा;Comprehension:बोध;Grammar:व्याकरण",
  "General Studies & Aptitude": "General studies:सामान्य अध्ययन;Aptitude & mental ability:अभियोग्यता व मानसिक क्षमता;Current affairs:समसामयिकी",
};
