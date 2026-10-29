import type { MCQ } from "@/lib/types";

/**
 * Practice bank shared by all Indian tests. Each exam pulls the subjects its pattern
 * lists (see `bankSubjectFor`). Questions are English; Hindi covers UI, names and syllabus.
 *
 * Hand-written items: `subject|topic|question|opt0|opt1|opt2|opt3|answerIndex|explanation`
 * Generated items: quantitative, reasoning and vocabulary drills with computed answers.
 */

const HAND = `
General Awareness|Constitution|When was the Constitution of India adopted?|26 January 1950|26 November 1949|15 August 1947|2 October 1948|1|Adopted on 26 Nov 1949; came into force on 26 Jan 1950.
General Awareness|Constitution|Who is known as the Father of the Indian Constitution?|Mahatma Gandhi|B. R. Ambedkar|Jawaharlal Nehru|Sardar Patel|1|Dr. B. R. Ambedkar chaired the Drafting Committee.
General Awareness|Banking|Headquarters of the Reserve Bank of India?|Mumbai|Delhi|Kolkata|Chennai|0|RBI is headquartered in Mumbai.
General Awareness|Geography|Which is the largest state in India by area?|Madhya Pradesh|Rajasthan|Uttar Pradesh|Maharashtra|1|Rajasthan is the largest state by area.
General Awareness|Symbols|Who wrote the national anthem Jana Gana Mana?|Bankim Chandra Chatterjee|Rabindranath Tagore|Sarojini Naidu|Subramania Bharati|1|Tagore wrote Jana Gana Mana (first sung in 1911).
General Awareness|Symbols|India's national animal is the?|Lion|Bengal Tiger|Elephant|Peacock|1|The Royal Bengal Tiger is the national animal.
General Awareness|Awards|Padma Vibhushan is India's?|Military honour|Second-highest civilian honour|Sports award|Literary award|1|It ranks below Bharat Ratna.
General Awareness|Sports|Who was the first Indian woman to win an individual Olympic medal?|PT Usha|Karnam Malleswari|Saina Nehwal|Mary Kom|1|Karnam Malleswari won bronze at Sydney 2000.
General Awareness|Days|National Voters' Day is observed on?|25 January|26 January|15 August|2 October|0|Celebrated on 25 January since 2011.
General Awareness|Days|World Environment Day is observed on?|5 June|22 April|5 September|1 December|0|UN observes World Environment Day on 5 June.
Indian Polity|Fundamental Rights|Article 17 of the Constitution deals with?|Abolition of untouchability|Right to education|Protection of life|Equality before law|0|Art 17 abolishes untouchability.
Indian Polity|Amendments|Fundamental Duties were added by which amendment?|42nd Amendment|44th Amendment|73rd Amendment|86th Amendment|0|Added by the 42nd Amendment (1976), Article 51A.
Indian Polity|Parliament|Minimum age to be a member of the Lok Sabha?|21 years|25 years|30 years|35 years|1|Lok Sabha: 25 years; Rajya Sabha: 30 years.
Indian Polity|President|The President of India is elected by?|Direct vote of citizens|Electoral college|Lok Sabha alone|State Assemblies alone|1|Electoral college of elected MPs and MLAs.
Indian Polity|Parliament|Who presides over the Rajya Sabha?|Speaker|Vice-President|Prime Minister|Chief Justice|1|The Vice-President is ex officio Chairman of Rajya Sabha.
Indian Polity|Writs|Habeas corpus is issued to?|Produce a detained person before a court|Transfer a case|Stop a trial|Review a verdict|0|Literally 'to have the body'.
Indian Polity|Election|Election Commission of India is established under Article?|324|280|352|368|0|Article 324 vests superintendence of elections in the ECI.
Indian Polity|Schedules|Which Schedule lists the official languages?|7th|8th|9th|10th|1|The Eighth Schedule lists 22 languages.
Indian Polity|Ordinance|An ordinance can be promulgated by?|Prime Minister|President|Speaker|Governor of any state only|1|Article 123 (President) and 213 (Governor of a state).
Indian Polity|Audit|CAG of India is appointed under Article?|148|124|76|72|0|Article 148 provides for the CAG.
Indian History|Ancient|Ashoka fought the Kalinga War around?|261 BCE|321 BCE|185 BCE|480 BCE|0|Kalinga War (about 261 BCE) led Ashoka to Buddhism.
Indian History|Mughals|Who founded the Mughal Empire in India?|Akbar|Babur|Humayun|Aurangzeb|1|Babur defeated Ibrahim Lodi at Panipat in 1526.
Indian History|Freedom|The first war of Indian Independence is dated to?|1857|1885|1905|1919|0|The Revolt of 1857.
Indian History|Freedom|Indian National Congress was founded in?|1885|1875|1906|1920|0|Founded in 1885 in Bombay.
Indian History|Freedom|The Quit India Movement was launched in?|1920|1930|1942|1947|2|Launched on 8 August 1942.
Indian History|Ancient|Arthashastra is attributed to?|Kautilya|Kalidasa|Banabhatta|Charaka|0|Kautilya (Chanakya) is traditionally credited.
Indian History|Cholas|Who built the Brihadeeswara Temple at Thanjavur?|Rajaraja I|Rajendra II|Kulottunga I|Parantaka I|0|Built by Rajaraja I (11th century).
Indian History|Freedom|Jallianwala Bagh massacre happened in?|1919|1921|1914|1930|0|13 April 1919 at Amritsar.
Indian History|Indus|Lothal, a Harappan site, is in which state?|Gujarat|Punjab|Haryana|Rajasthan|0|Lothal (Dholavira also Gujarat).
Geography|Deserts|The largest hot desert in India by area is?|Thar|Great Rann of Kutch|Ladakh|Deccan|0|The Thar Desert in Rajasthan.
Geography|Latitudes|The Tropic of Cancer passes through how many Indian states?|6|8|10|12|1|Passes through eight states, including Gujarat and Mizoram.
Geography|Mountains|Highest peak entirely within India?|K2|Kangchenjunga|Nanda Devi|Anamudi|1|Kangchenjunga (Sikkim-Nepal border).
Geography|Lakes|Largest freshwater lake in India?|Wular|Chilika|Sambhar|Loktak|0|Wular Lake in Jammu & Kashmir.
Geography|Straits|Strait separating India and Sri Lanka?|Palk Strait|Strait of Malacca|Bass Strait|Strait of Hormuz|0|Palk Strait lies between Tamil Nadu and Sri Lanka.
Geography|Rivers|The state known as the land of five rivers is?|Punjab|Haryana|Gujarat|Kerala|0|Punjab means land of five waters.
Geography|Soils|Best soil for cotton cultivation?|Alluvial|Black (regur)|Red|Laterite|1|Black soil retains moisture ideal for cotton.
Economy|RBI|Which body issues currency notes in India?|RBI|Ministry of Finance|SEBI|NITI Aayog|0|RBI issues banknotes (on behalf of govt of India).
Economy|Budget|The Union Budget is first presented in?|Rajya Sabha|Lok Sabha|Joint session|President's office|1|Money bills originate in the Lok Sabha.
Economy|Planning|The First Five-Year Plan began in?|1951|1947|1956|1961|0|The First Plan ran 1951–56.
Economy|Institutions|NITI Aayog replaced which body?|UGC|Planning Commission|National Development Council|FICCI|1|Set up in January 2015 to replace the Planning Commission.
Economy|Tax|GST was rolled out in India on?|1 April 2016|1 July 2017|15 August 2015|1 April 2018|1|GST came into effect on 1 July 2017.
Economy|Monetary|Repo rate is the rate at which?|RBI lends to commercial banks|Banks lend to public|Banks deposit with RBI|Government borrows abroad|0|Repo is the short-term lending rate by RBI.
Economy|Inflation|Which index measures retail inflation in India?|WPI|CPI|GDP deflator|Sensex|1|Consumer Price Index (CPI) measures retail inflation.
General Science|Units|SI unit of force?|Joule|Newton|Pascal|Watt|1|Force is measured in newtons.
General Science|Chemistry|Chemical formula of water?|H2O|CO2|NaCl|H2O2|0|Water is H2O.
General Science|Vitamins|Vitamin produced in human skin on sunlight exposure?|Vitamin A|Vitamin C|Vitamin D|Vitamin K|2|Sunlight converts 7-dehydrocholesterol into vitamin D3.
General Science|Light|Speed of light in vacuum is about?|3 × 10^8 m/s|3 × 10^6 m/s|3 × 10^5 m/s|3 × 10^10 m/s|0|About 3 × 10^8 metres per second.
General Science|Acids|pH of pure water at 25°C?|0|7|14|1|1|Neutral solution has pH 7.
General Science|Cell|Powerhouse of the cell?|Nucleus|Mitochondria|Ribosome|Golgi body|1|Mitochondria produce ATP.
General Science|Elements|Symbol Fe stands for?|Fluorine|Iron|Lead|Gold|1|Fe is from Latin ferrum.
General Science|Blood|Universal blood donor group?|A|B|AB|O|3|O-negative is the universal donor.
General Science|Minerals|Hardest natural substance?|Quartz|Diamond|Graphite|Ruby|1|Diamond scores 10 on Mohs scale.
General Science|Electricity|SI unit of electric current?|Volt|Ampere|Ohm|Watt|1|Current is measured in amperes.
Physics|Mechanics|Newton's second law states F = ?|ma|mv|m/a|ma²|0|Force equals mass times acceleration.
Physics|Dimensions|Dimensional formula of force?|MLT⁻²|ML²T⁻²|MLT⁻¹|ML²T⁻¹|0|F = ma, so MLT⁻².
Physics|Units|SI unit of power?|Joule|Watt|Newton|Pascal|1|Power = work/time, measured in watts.
Physics|Electricity|Ratio of voltage to current in a conductor gives?|Power|Resistance|Capacitance|Inductance|1|Ohm's law: V = IR.
Physics|Sound|Approximate speed of sound in air at room temperature?|340 m/s|3 × 10^8 m/s|1500 m/s|330 km/s|0|About 340 m/s.
Physics|Optics|Mirror used as rear-view mirror in vehicles?|Convex|Concave|Plane|Parabolic|0|Convex mirrors give a wider field of view.
Physics|Energy|Kinetic energy formula?|½mv²|mv|mgh|ma|0|KE = ½ mv².
Physics|Gravitation|Approx escape velocity from Earth?|11.2 km/s|7.9 km/s|3 km/s|25 km/s|0|About 11.2 km/s.
Physics|Atoms|Which particle has no charge?|Electron|Proton|Neutron|Positron|2|Neutrons are electrically neutral.
Physics|Magnetism|SI unit of magnetic flux?|Tesla|Weber|Henry|Gauss|1|Flux is measured in weber.
Chemistry|Atomic structure|Atomic number of carbon?|6|12|8|14|0|Carbon has 6 protons.
Chemistry|Elements|Symbol Ne stands for?|Neon|Nickel|Nitrogen|Sodium|0|Ne is neon.
Chemistry|Mole|Avogadro's number is?|6.022 × 10²³|3.14|9.8|1.6 × 10⁻¹⁹|0|Number of particles in one mole.
Chemistry|Acids|Acid present in lemon?|Citric acid|Acetic acid|Hydrochloric acid|Sulphuric acid|0|Lemons contain citric acid.
Chemistry|Periodic table|Most electronegative element?|Oxygen|Fluorine|Chlorine|Nitrogen|1|Fluorine has the highest electronegativity.
Chemistry|Compounds|Chemical name of common salt?|Sodium chloride|Potassium chloride|Calcium carbonate|Sodium hydroxide|0|Common salt is NaCl.
Chemistry|Oxidation|Oxidation state of oxygen in H2O2?|−1|−2|0|+1|0|Peroxide oxygen has −1.
Chemistry|Biomolecules|Monomer of proteins?|Nucleotide|Amino acid|Monosaccharide|Fatty acid|1|Proteins are polymers of amino acids.
Mathematics|Trigonometry|sin 30° equals?|1/2|√3/2|1|0|0|sin 30° = 1/2.
Mathematics|Arithmetic|Sum of the first 10 natural numbers?|55|45|50|60|0|n(n+1)/2 = 55.
Mathematics|Calculus|Derivative of x³?|3x²|x²|3x|x³/3|0|Power rule.
Mathematics|Calculus|∫2x dx equals?|x² + C|2x² + C|x + C|2 + C|0|Integral of 2x is x² plus constant.
Mathematics|Logarithms|log₁₀(1000) equals?|2|3|4|10|1|1000 = 10³.
Mathematics|Algebra|If x + y = 10 and x − y = 2, then x equals?|6|4|8|5|0|Adding: 2x = 12, x = 6.
Mathematics|Probability|Probability of head in one fair coin toss?|1/2|1/4|1|1/3|0|Two equally likely outcomes.
Mathematics|Geometry|Sum of angles in a triangle?|180°|360°|90°|270°|0|Interior angles total 180°.
Mathematics|Number theory|HCF of 12 and 18?|6|3|12|36|0|Common factors 1, 2, 3, 6.
Biology|Photosynthesis|Site of photosynthesis in a plant cell?|Mitochondria|Chloroplast|Nucleus|Ribosome|1|Chloroplasts contain chlorophyll.
Botany|Plant pigments|Main pigment absorbing light for photosynthesis?|Chlorophyll-a|Haemoglobin|Melanin|Keratin|0|Chlorophyll-a is the primary photosynthetic pigment.
Botany|Kingdoms|Mushrooms belong to which kingdom?|Plantae|Fungi|Protista|Monera|1|Fungi are heterotrophic eukaryotes.
Botany|Genetics|Father of genetics?|Darwin|Mendel|Lamarck|Watson|1|Gregor Mendel's pea experiments.
Botany|Anatomy|Stomata are found mainly on?|Upper leaf surface|Lower leaf surface|Stem only|Roots only|1|Most stomata lie on the lower epidermis.
Botany|Hormones|Hormone that promotes stem elongation?|Ethylene|Gibberellin|Abscisic acid|Cytokinin|1|Gibberellins promote stem growth.
Zoology|Glands|Largest gland in the human body?|Liver|Pancreas|Thyroid|Adrenal|0|The liver is the largest internal gland.
Zoology|Hormones|Hormone that lowers blood glucose?|Insulin|Thyroxine|Adrenaline|Oxytocin|0|Produced by beta cells of islets of Langerhans.
Zoology|Heart|Number of chambers in the human heart?|4|3|2|5|0|Two atria and two ventricles.
Zoology|Genetics|Basic unit of heredity?|Gene|Chromosome|Cell|Protein|0|Genes carry hereditary information.
Zoology|Vitamins|Night blindness is caused by deficiency of?|Vitamin A|Vitamin C|Vitamin B12|Vitamin K|0|Vitamin A is needed for rhodopsin.
Zoology|Circulation|Animal with three hearts?|Octopus|Shark|Frog|Earthworm|0|Octopuses have three hearts.
English|Grammar|Correct spelling?|Accomodate|Accommodate|Acommodate|Acomodate|1|Accommodate has double c and double m.
English|Grammar|She ___ to school every day.|goes|go|going|gone|0|Simple present with third-person singular.
English|Vocabulary|Antonym of 'ancient'?|Old|Modern|Antique|Historic|1|Modern is the opposite of ancient.
English|Vocabulary|Synonym of 'abundant'?|Scarce|Plentiful|Rare|Empty|1|Abundant means plentiful.
English|Idioms|'Bite the bullet' means?|To eat quickly|To endure a painful situation|To shoot|To be angry|1|Accept something unpleasant with courage.
English|Voice|Passive voice of 'They built a house.'|A house was built by them|A house is built by them|A house has been built|A house built by them|0|Past simple passive: was/were + past participle.
English|Error spotting|Find the error: 'Neither of the boys are present.'|Neither|of the boys|are|present|2|Use 'is' with 'neither of'.
English|One word|A person who knows many languages?|Monolingual|Polyglot|Linguist|Bilingual|1|A polyglot speaks several languages.
English|Articles|Choose the article: ___ honest man.|A|An|The|No article|1|'Honest' starts with a vowel sound.
English|Vocabulary|Synonym of 'diligent'?|Lazy|Hardworking|Careless|Dull|1|Diligent means hardworking.
Banking Awareness|RBI|The Reserve Bank of India was established in?|1935|1947|1950|1921|0|RBI began operations on 1 April 1935.
Banking Awareness|Ratios|CRR stands for?|Cash Reserve Ratio|Credit Rate Revision|Cash Repo Rate|Capital Risk Ratio|0|Share of deposits kept with RBI.
Banking Awareness|Ratios|SLR stands for?|Statutory Liquidity Ratio|Standard Lending Rate|Special Loan Ratio|Savings Limit Ratio|0|Share of deposits banks hold in liquid assets.
Banking Awareness|Payments|Which system settles transfers in batches on a net basis?|NEFT|RTGS|IMPS|SWIFT|0|NEFT settles in half-hourly batches.
Banking Awareness|Codes|An IFSC code has how many characters?|11|9|10|12|0|Four letters, a zero, then six characters.
Banking Awareness|Regulation|Basel III mainly relates to?|Capital adequacy|Currency design|Labour laws|Foreign trade|0|Basel III sets capital and liquidity standards.
Banking Awareness|History|Lead Bank Scheme was introduced in?|1969|1980|1991|1947|0|Introduced in 1969 for district-wise lead banks.
Legal Aptitude|Constitution|Article 21 guarantees?|Right to life and personal liberty|Right to equality|Right to freedom of religion|Right against exploitation|0|Life and personal liberty.
Legal Aptitude|Criminal law|Which Act replaced the Indian Penal Code from 1 July 2024?|Bharatiya Nyaya Sanhita|Bharatiya Sakshya Adhiniyam|CrPC|CPC|0|BNS came into force on 1 July 2024.
Legal Aptitude|Maxims|'Res judicata' means?|A matter already judged|Let the master answer|Public policy|Right of way|0|Issue already decided by a competent court.
Legal Aptitude|Judiciary|Who administers the oath to the President?|Chief Justice of India|Vice-President|Prime Minister|Speaker|0|Article 60 provides the oath.
Legal Aptitude|Consumer|Consumer Protection Act 2019 creates which district body?|District Consumer Disputes Redressal Commission|Lok Adalat|Tribunal|Lokpal|0|District Commissions hear consumer complaints.
Legal Aptitude|Information|RTI Act was enacted in?|2005|2002|1995|2010|0|RTI Act, 2005.
Legal Aptitude|Anti-corruption|Lokpal was established under which Act?|Lokpal and Lokayuktas Act, 2013|RTI Act|Consumer Protection Act|NGT Act|0|Enacted 2013.
Child Development & Pedagogy|Development|Piaget's formal operational stage begins around?|11 years and above|2 to 7 years|7 to 11 years|0 to 2 years|0|Formal operational begins about 11 years.
Child Development & Pedagogy|Theories|Zone of Proximal Development was proposed by?|Vygotsky|Piaget|Skinner|Bruner|0|Vygotsky's sociocultural theory.
Child Development & Pedagogy|Inclusion|Inclusive education aims to?|Include children with disabilities in regular classrooms|Segregate children|Teach only gifted students|Teach only in English|0|Inclusion in regular schools.
Child Development & Pedagogy|Taxonomy|Lowest level in Bloom's original taxonomy?|Evaluation|Knowledge|Synthesis|Analysis|1|Knowledge is the base level.
Child Development & Pedagogy|Evaluation|CCE was introduced under?|RTE Act, 2009|NEP 1986|NCF 1975|Kothari Commission 1964|0|RTE Act made CCE part of school evaluation.
Child Development & Pedagogy|Learning|Learning through reinforcement is explained by?|Behaviourism|Gestalt|Constructivism|Humanism|0|Skinner's operant conditioning.
Child Development & Pedagogy|Assessment|Main aim of formative assessment?|To improve learning during teaching|To rank students|To award final grade|To punish|0|Assessment for learning.
Child Development & Pedagogy|Learning disability|Dyslexia relates to?|Reading difficulty|Hearing loss|Vision loss|Motor impairment|0|Specific learning disability in reading.
Computer Knowledge|Hardware|Full form of CPU?|Central Processing Unit|Central Program Unit|Computer Processing Unit|Central Peripheral Unit|0|CPU executes instructions.
Computer Knowledge|OS|Which is not an operating system?|Linux|Windows|MS Word|macOS|2|MS Word is application software.
Computer Knowledge|Shortcuts|Windows shortcut for copy?|Ctrl+C|Ctrl+V|Ctrl+X|Ctrl+Z|0|Ctrl+C copies, Ctrl+V pastes.
Computer Knowledge|Memory|RAM is?|Volatile memory|Permanent memory|Secondary storage|Read-only memory|0|RAM loses data without power.
Computer Knowledge|Number system|Binary of decimal 5?|101|110|100|111|0|5 = 4 + 1.
Computer Knowledge|Internet|Protocol used for web pages?|HTTP|FTP|SMTP|SSH|0|HyperText Transfer Protocol.
Computer Knowledge|MS Office|Excel 2007 onward saves files as?|.xlsx|.doc|.ppt|.txt|0|Office Open XML format.
Computer Knowledge|Networks|Device connecting LAN to WAN?|Router|Hub|Repeater|Switch|0|Routers connect different networks.
`;

// ───── seeded PRNG for reproducible generated items ─────
function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Raw = { subject: string; topic: string; q: string; opts: string[]; ans: number; expl: string; diff: MCQ["difficulty"] };

function shuffleOpts(r: () => number, correct: string, distractors: string[]): { opts: string[]; ans: number } {
  const all = [correct, ...distractors.slice(0, 3)];
  const order = all.map((v, i) => ({ v, k: r(), i })).sort((a, b) => a.k - b.k);
  const opts = order.map((o) => o.v);
  return { opts, ans: order.findIndex((o) => o.i === 0) };
}

function quantItems(): Raw[] {
  const r = rng(20261029);
  const out: Raw[] = [];
  const Q = "Quantitative Aptitude";
  for (let i = 0; i < 8; i++) {
    const pct = 5 * (1 + Math.floor(r() * 9));
    const base = 200 + 20 * Math.floor(r() * 40);
    const ans = (pct * base) / 100;
    const s = shuffleOpts(r, String(ans), [String(ans + 10), String(ans - 5), String(ans + 25)]);
    out.push({ subject: Q, topic: "Percentage", q: `What is ${pct}% of ${base}?`, opts: s.opts, ans: s.ans, expl: `${pct}% × ${base} = ${ans}.`, diff: "easy" });
  }
  for (let i = 0; i < 8; i++) {
    const cp = 100 * (1 + Math.floor(r() * 9));
    const profit = 10 * (1 + Math.floor(r() * 5));
    const sp = (cp * (100 + profit)) / 100;
    const s = shuffleOpts(r, `${profit}%`, [`${profit + 5}%`, `${Math.max(5, profit - 5)}%`, `${profit * 2}%`]);
    out.push({ subject: Q, topic: "Profit & loss", q: `An article bought for ₹${cp} is sold for ₹${sp}. Find the profit percentage.`, opts: s.opts, ans: s.ans, expl: `Profit = ₹${sp - cp}; profit% = ${profit}%.`, diff: "easy" });
  }
  for (let i = 0; i < 8; i++) {
    const P = 1000 * (1 + Math.floor(r() * 5));
    const R = 5 * (1 + Math.floor(r() * 3));
    const T = 2 + Math.floor(r() * 4);
    const si = (P * R * T) / 100;
    const s = shuffleOpts(r, `₹${si}`, [`₹${si + P / 10}`, `₹${si / 2}`, `₹${si + R * 10}`]);
    out.push({ subject: Q, topic: "Simple interest", q: `Find the simple interest on ₹${P} at ${R}% per annum for ${T} years.`, opts: s.opts, ans: s.ans, expl: `SI = P × R × T / 100 = ₹${si}.`, diff: "easy" });
  }
  const tw: [number, number][] = [[6, 12], [4, 12], [10, 15], [12, 24], [8, 24], [20, 30], [15, 30], [6, 3]];
  for (const [a, b] of tw) {
    const ans = (a * b) / (a + b);
    const dayStr = (n: number) => `${n} ${n === 1 ? "day" : "days"}`;
    const cands = [a, b, ans + 1, ans + 2, ans + 3, Math.max(1, ans - 1)].filter((v, i, arr) => v !== ans && arr.indexOf(v) === i);
    const s = shuffleOpts(r, dayStr(ans), cands.slice(0, 3).map(dayStr));
    out.push({ subject: Q, topic: "Time & work", q: `A can finish a work in ${a} days and B in ${b} days. Working together, in how many days will they finish it?`, opts: s.opts, ans: s.ans, expl: `Together: ${a}·${b}/(${a}+${b}) = ${ans} days.`, diff: "medium" });
  }
  for (let i = 0; i < 6; i++) {
    const S = [30, 40, 50, 60, 70, 80][Math.floor(r() * 6)];
    const T = 2 + Math.floor(r() * 5);
    const D = S * T;
    const s = shuffleOpts(r, `${T} hours`, [`${T + 1} hours`, T - 1 === 1 ? "1 hour" : `${T - 1} hours`, `${T * 2} hours`]);
    out.push({ subject: Q, topic: "Time, speed & distance", q: `A car covers ${D} km at a steady ${S} km/h. How long does the journey take?`, opts: s.opts, ans: s.ans, expl: `Time = Distance / Speed = ${D}/${S} = ${T} hours.`, diff: "easy" });
  }
  for (const [P, pct] of [[1000, 10], [2000, 10], [5000, 10], [1000, 20], [2500, 20]] as [number, number][]) {
    const f = pct === 10 ? 1.21 : 1.44;
    const ans = Math.round(P * f);
    const s = shuffleOpts(r, `₹${ans}`, [`₹${P + 2 * (P * pct) / 100}`, `₹${Math.round(P * (1 + pct / 100 * 3))}`, `₹${ans + 100}`]);
    out.push({ subject: Q, topic: "Compound interest", q: `Find the amount on ₹${P} at ${pct}% per annum compounded annually for 2 years.`, opts: s.opts, ans: s.ans, expl: `A = P(1 + r/100)² = ₹${ans}.`, diff: "medium" });
  }
  for (const [a, b] of [[12, 18], [8, 20], [15, 25], [9, 12], [14, 21], [16, 24]] as [number, number][]) {
    const gcd = (x: number, y: number): number => (y ? gcd(y, x % y) : x);
    const lcm = (a * b) / gcd(a, b);
    const s = shuffleOpts(r, String(lcm), [String(lcm * 2), String(a * b), String(lcm + a)]);
    out.push({ subject: Q, topic: "LCM", q: `Find the LCM of ${a} and ${b}.`, opts: s.opts, ans: s.ans, expl: `LCM(${a}, ${b}) = ${lcm}.`, diff: "easy" });
  }
  for (let i = 0; i < 6; i++) {
    const nums = Array.from({ length: 5 }, () => 10 + Math.floor(r() * 40));
    const sum = nums.reduce((x, y) => x + y, 0);
    const avg = sum / 5;
    const s = shuffleOpts(r, String(avg), [String(avg + 3), String(avg - 2), String(avg + 6)]);
    out.push({ subject: Q, topic: "Average", q: `The average of five numbers ${nums.join(", ")} is?`, opts: s.opts, ans: s.ans, expl: `Sum = ${sum}; average = ${avg}.`, diff: "easy" });
  }
  return out;
}

function reasoningItems(): Raw[] {
  const r = rng(77);
  const out: Raw[] = [];
  const R = "Reasoning";
  for (let i = 0; i < 8; i++) {
    const s0 = 2 + Math.floor(r() * 10);
    const d = 2 + Math.floor(r() * 6);
    const seq = [0, 1, 2, 3, 4].map((k) => s0 + k * d);
    const ans = s0 + 5 * d;
    const sh = shuffleOpts(r, String(ans), [String(ans + d), String(ans - 1), String(ans + 2 * d)]);
    out.push({ subject: R, topic: "Number series", q: `Find the next number: ${seq.join(", ")}, ?`, opts: sh.opts, ans: sh.ans, expl: `Each term increases by ${d}.`, diff: "easy" });
  }
  for (let i = 0; i < 6; i++) {
    const s0 = 2 + Math.floor(r() * 3);
    const m = 2 + Math.floor(r() * 2);
    const seq = [0, 1, 2, 3].map((k) => s0 * m ** k);
    const ans = s0 * m ** 4;
    const sh = shuffleOpts(r, String(ans), [String(ans + m), String(ans - s0), String(ans * 2)]);
    out.push({ subject: R, topic: "Geometric series", q: `Find the next term: ${seq.join(", ")}, ?`, opts: sh.opts, ans: sh.ans, expl: `Each term is multiplied by ${m}.`, diff: "medium" });
  }
  for (let i = 0; i < 6; i++) {
    const n = 2 + Math.floor(r() * 6);
    const seq = [0, 1, 2, 3].map((k) => (n + k) ** 2);
    const ans = (n + 4) ** 2;
    const sh = shuffleOpts(r, String(ans), [String(ans - 1), String(ans + 2), String((n + 4) * 2)]);
    out.push({ subject: R, topic: "Square series", q: `Find the next number: ${seq.join(", ")}, ?`, opts: sh.opts, ans: sh.ans, expl: `Consecutive squares starting at ${n}²; next is ${n + 4}².`, diff: "medium" });
  }
  const words = ["DOG", "SUN", "CAR", "BAT", "RAIN", "MAP", "TEA", "GEM"];
  for (let i = 0; i < 8; i++) {
    const w = words[i % words.length];
    const k = 1 + Math.floor(r() * 3);
    const enc = Array.from(w).map((c) => String.fromCharCode(c.charCodeAt(0) + k)).join("");
    const wrong1 = Array.from(w).map((c) => String.fromCharCode(c.charCodeAt(0) - k)).join("");
    const wrong2 = Array.from(w).map((c) => String.fromCharCode(c.charCodeAt(0) + k + 1)).join("");
    const wrong3 = Array.from(w).reverse().join("");
    const sh = shuffleOpts(r, enc, [wrong1, wrong2, wrong3]);
    out.push({ subject: R, topic: "Coding-decoding", q: `If each letter of ${w} is shifted forward by ${k} in the alphabet, what is the code?`, opts: sh.opts, ans: sh.ans, expl: `Shift each letter +${k}: ${w} → ${enc}.`, diff: "medium" });
  }
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 6; i++) {
    const st = Math.floor(r() * 10);
    const step = 2;
    const seq = [0, 1, 2, 3].map((k) => alpha[st + k * step]);
    const ans = alpha[st + 4 * step];
    const sh = shuffleOpts(r, ans, [alpha[st + 4 * step - 1], alpha[st + 4 * step + 1], alpha[st + 3 * step]]);
    out.push({ subject: R, topic: "Alphabet series", q: `Find the next letter: ${seq.join(", ")}, ?`, opts: sh.opts, ans: sh.ans, expl: `Letters advance by ${step} positions each time.`, diff: "easy" });
  }
  for (let i = 0; i < 6; i++) {
    const a = 3 * (1 + Math.floor(r() * 4));
    const b = 4 * (1 + Math.floor(r() * 3));
    const dist = Math.hypot(a, b);
    const sh = shuffleOpts(r, `${dist} km`, [`${a + b} km`, `${Math.abs(b - a)} km`, `${a * b} km`]);
    out.push({ subject: R, topic: "Direction sense", q: `A man walks ${a} km north, then ${b} km east. How far is he from the starting point?`, opts: sh.opts, ans: sh.ans, expl: `Right-angle distance: √(${a}² + ${b}²) = ${dist} km.`, diff: "medium" });
  }
  const odd: [string[], string][] = [
    [["4", "9", "16", "20"], "20"], [["2", "3", "5", "9"], "9"], [["8", "27", "64", "100"], "100"],
    [["Dog", "Cat", "Cow", "Table"], "Table"], [["Pen", "Pencil", "Eraser", "Book"], "Book"],
  ];
  for (const [items, ans] of odd) {
    const rest = items.filter((x) => x !== ans);
    const sh = shuffleOpts(r, ans, rest);
    out.push({ subject: R, topic: "Odd one out", q: `Find the odd one out: ${items.join(", ")}.`, opts: sh.opts, ans: sh.ans, expl: `${ans} does not follow the common pattern of the others.`, diff: "easy" });
  }
  return out;
}

const VOCAB: [string, string, string][] = [
  ["Abundant", "Plentiful", "Scarce"], ["Brave", "Courageous", "Cowardly"], ["Fragile", "Delicate", "Sturdy"],
  ["Benevolent", "Kind", "Malicious"], ["Candid", "Frank", "Deceitful"], ["Diligent", "Hardworking", "Lazy"],
  ["Eager", "Keen", "Reluctant"], ["Feeble", "Weak", "Strong"], ["Generous", "Liberal", "Stingy"],
  ["Honest", "Truthful", "Dishonest"], ["Intelligent", "Clever", "Dull"], ["Jubilant", "Joyful", "Sad"],
  ["Lucid", "Clear", "Obscure"], ["Meticulous", "Careful", "Careless"], ["Obstinate", "Stubborn", "Flexible"],
  ["Prudent", "Wise", "Reckless"], ["Rapid", "Swift", "Slow"], ["Verbose", "Wordy", "Concise"],
  ["Ancient", "Old", "Modern"], ["Scarce", "Rare", "Plentiful"],
];

function vocabItems(): Raw[] {
  const r = rng(999);
  const out: Raw[] = [];
  for (let i = 0; i < VOCAB.length; i++) {
    const [w, syn, ant] = VOCAB[i];
    const others = VOCAB.filter((_, j) => j !== i).map((v) => v[1]);
    const sh = shuffleOpts(r, syn, [others[i % others.length], others[(i + 3) % others.length], others[(i + 7) % others.length]]);
    out.push({ subject: "English", topic: "Synonyms", q: `Choose the synonym of '${w}'.`, opts: sh.opts, ans: sh.ans, expl: `${w} means ${syn.toLowerCase()}.`, diff: "easy" });
    const others2 = VOCAB.filter((_, j) => j !== i).map((v) => v[2]);
    const sh2 = shuffleOpts(r, ant, [others2[i % others2.length], others2[(i + 4) % others2.length], others2[(i + 9) % others2.length]]);
    out.push({ subject: "English", topic: "Antonyms", q: `Choose the antonym of '${w}'.`, opts: sh2.opts, ans: sh2.ans, expl: `${w} is the opposite of ${ant.toLowerCase()}.`, diff: "easy" });
  }
  return out;
}

function parseHand(): Raw[] {
  return HAND.trim()
    .split("\n")
    .filter((l) => l.trim())
    .map((line) => {
      const [subject, topic, q, o0, o1, o2, o3, ans, expl] = line.split("|");
      return { subject, topic, q, opts: [o0, o1, o2, o3], ans: Number(ans), expl, diff: "medium" as const };
    });
}

const ALL_RAW: Raw[] = [...parseHand(), ...quantItems(), ...reasoningItems(), ...vocabItems()];

/** Full bank, test-agnostic. Each item has test_id "bank" and is re-tagged per test in coverage.ts. */
export const MCQ_BANK: MCQ[] = ALL_RAW.map((x, i) => ({
  id: `bank-${i}`,
  test_id: "bank",
  subject: x.subject,
  topic: x.topic,
  question_text: x.q,
  options: x.opts,
  correct_answer: x.ans,
  explanation: x.expl,
  difficulty: x.diff,
  source: "ai_generated",
  kind: "mcq",
}));

/**
 * Map a pattern section subject onto a bank subject. The bank only holds
 * a few subjects, so related sections share the same questions.
 */
export function bankSubjectFor(section: string): string[] {
  const s = section.toLowerCase();
  if (s.includes("botany")) return ["Botany"];
  if (s.includes("zoology")) return ["Zoology"];
  if (s === "biology") return ["Botany", "Zoology", "Biology"];
  if (s.includes("physics") && !s.includes("chem")) return ["Physics"];
  if (s.includes("chemistry") && !s.includes("physics")) return ["Chemistry"];
  if (s.includes("mathematics") || s.includes("elementary mathematics") || s === "math") {
    if (s.includes("quant") || s.includes("numerical")) return ["Quantitative Aptitude", "Mathematics"];
    return ["Mathematics", "Quantitative Aptitude"];
  }
  if (s.includes("quant") || s.includes("numerical") || s.includes("mathematical skills") || s.includes("arithmetic")) return ["Quantitative Aptitude"];
  if (s.includes("reasoning") || s.includes("logical") || s.includes("intelligence") || s.includes("mental ability") || s.includes("verbal & logical") || s.includes("decision")) return ["Reasoning"];
  if (s.includes("english") || s.includes("verbal") || s.includes("language") || s.includes("comprehension") || s.includes("hindi")) return ["English"];
  if (s.includes("banking")) return ["Banking Awareness"];
  if (s.includes("legal") || s.includes("law")) return ["Legal Aptitude"];
  if (s.includes("pedagogy") || s.includes("teaching") || s.includes("child")) return ["Child Development & Pedagogy"];
  if (s.includes("computer")) return ["Computer Knowledge"];
  if (s.includes("economy") || s.includes("economics") || s.includes("finance")) return ["Economy", "General Awareness"];
  if (s.includes("general science") || s.includes("science")) return ["General Science"];
  if (s.includes("general awareness") || s.includes("general knowledge") || s.includes("general studies") || s.includes("current affairs")) return ["General Awareness", "Indian Polity", "Indian History", "Geography", "Economy", "General Science"];
  return ["General Awareness"];
}
