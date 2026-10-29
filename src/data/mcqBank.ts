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
Geography|Mountains|Which of these peaks lies entirely within India?|K2|Kangchenjunga|Nanda Devi|Mount Everest|2|Nanda Devi lies in Uttarakhand; Kangchenjunga is on the India–Nepal border.
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
General Science|Blood|Which blood group is generally considered the universal red-cell donor in emergencies?|A positive|B positive|AB positive|O negative|3|O-negative red cells lack A, B and Rh D antigens; compatibility testing remains important.
General Science|Minerals|Hardest natural substance?|Quartz|Diamond|Graphite|Ruby|1|Diamond scores 10 on Mohs scale.
General Science|Electricity|SI unit of electric current?|Volt|Ampere|Ohm|Watt|1|Current is measured in amperes.
Physics|Kinematics|A car travels 120 m in 10 s at constant speed. What is its speed?|12 m/s|10 m/s|1200 m/s|1.2 m/s|0|Speed equals distance divided by time: 120 ÷ 10 = 12 m/s.
Physics|Kinematics|A body starts from rest and accelerates uniformly at 2 m/s² for 5 s. What is its final speed?|10 m/s|2.5 m/s|7 m/s|25 m/s|0|Using v = u + at gives 0 + 2 × 5 = 10 m/s.
Physics|Mechanics|If the net force on a body is zero, its acceleration is?|Zero|Always increasing|Equal to its speed|Equal to its mass|0|Newton's second law gives acceleration zero when net force is zero.
Physics|Momentum|A 2 kg object moves at 3 m/s. What is its momentum?|6 kg m/s|1.5 kg m/s|5 kg m/s|9 kg m/s|0|Momentum is mass times velocity: 2 × 3 = 6 kg m/s.
Physics|Work|A constant 5 N force moves an object 4 m in the direction of the force. What work is done?|20 J|9 J|1.25 J|40 J|0|Work is force times displacement in its direction: 5 × 4 = 20 J.
Physics|Electricity|Two 6 Ω resistors are connected in series. What is their equivalent resistance?|12 Ω|3 Ω|6 Ω|36 Ω|0|Series resistances add: 6 + 6 = 12 Ω.
Physics|Electricity|Two 6 Ω resistors are connected in parallel. What is their equivalent resistance?|3 Ω|12 Ω|6 Ω|36 Ω|0|Two equal resistances in parallel have half the individual resistance.
Physics|Waves|A wave has frequency 5 Hz and wavelength 2 m. What is its speed?|10 m/s|2.5 m/s|7 m/s|0.4 m/s|0|Wave speed is frequency times wavelength: 5 × 2 = 10 m/s.
Physics|Optics|A light ray travelling from air into glass bends towards the normal because its speed?|Decreases|Increases|Becomes infinite|Remains unchanged|0|Light travels more slowly in glass than in air.
Physics|Heat|The SI unit of temperature is?|Kelvin|Celsius degree|Joule|Calorie|0|Kelvin is the SI base unit of thermodynamic temperature.
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
Chemistry|Atomic structure|An atom has 11 protons. What is its atomic number?|11|22|10|12|0|Atomic number equals the number of protons.
Chemistry|Mole|How many moles are in 18 g of water? Use molar mass 18 g/mol.|1 mol|2 mol|18 mol|0.5 mol|0|Amount in moles is mass divided by molar mass: 18 ÷ 18 = 1.
Chemistry|Bonding|What type of bond forms by transfer of electrons between atoms?|Ionic bond|Covalent bond|Hydrogen bond|Metallic bond|0|Electron transfer produces oppositely charged ions held by electrostatic attraction.
Chemistry|Bonding|A covalent bond primarily involves?|Sharing electron pairs|Transfer of neutrons|Sharing protons|Loss of the nucleus|0|A covalent bond involves one or more shared electron pairs.
Chemistry|Periodic table|Elements in the same group of the periodic table generally have the same number of?|Valence electrons|Neutrons|Electron shells|Nucleons|0|Main-group elements in a group generally have the same number of valence electrons.
Chemistry|Acids and bases|A solution with pH 3 at 25°C is?|Acidic|Neutral|Basic|Always a salt solution|0|At 25°C a pH below 7 indicates an acidic aqueous solution.
Chemistry|Redox|Reduction is defined as?|Gain of electrons|Loss of electrons|Gain of protons only|Loss of neutrons|0|Reduction is the gain of electrons.
Chemistry|States of matter|At constant temperature, if the volume of an ideal gas is halved, its pressure becomes?|Twice as large|Half as large|Four times as large|Unchanged|0|Boyle's law gives pressure inversely proportional to volume at constant temperature.
Chemistry|Solutions|A solution contains 5 g solute in 100 g solution. What is its mass percentage?|5%|10%|20%|95%|0|Mass percentage is 5 ÷ 100 × 100 = 5%.
Chemistry|Organic|What is the functional group of an alcohol?|Hydroxyl (−OH)|Carboxyl (−COOH)|Aldehyde (−CHO)|Amino (−NH2)|0|Alcohols contain a hydroxyl group bonded to carbon.
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
Botany|Transport|Which tissue transports water and mineral ions from roots towards leaves?|Xylem|Phloem|Epidermis|Cork|0|Xylem conducts water and dissolved minerals through the plant.
Botany|Transport|Which tissue transports sugars from source to sink in plants?|Phloem|Xylem|Cortex|Epidermis|0|Phloem carries organic nutrients such as sucrose.
Botany|Cells|The primary component of a plant cell wall is?|Cellulose|Chitin|Peptidoglycan|Glycogen|0|Cellulose is a major structural component of plant cell walls.
Botany|Photosynthesis|Which gas is released during oxygenic photosynthesis?|Oxygen|Nitrogen|Methane|Sulphur dioxide|0|Oxygen is released when water is split during the light reactions.
Botany|Photosynthesis|The Calvin cycle takes place in which part of the chloroplast?|Stroma|Thylakoid lumen|Outer membrane|Intermembrane space|0|The enzymes of the Calvin cycle are located in the stroma.
Botany|Reproduction|Which floral structure produces pollen grains?|Anther|Stigma|Ovary|Sepal|0|Pollen grains develop in the anther.
Botany|Reproduction|After fertilisation in a flowering plant, an ovule typically develops into a?|Seed|Fruit wall|Stamen|Petal|0|The fertilised ovule develops into a seed.
Botany|Plant physiology|Which plant hormone is associated with stomatal closure during water stress?|Abscisic acid|Auxin|Cytokinin|Gibberellin|0|Abscisic acid promotes stomatal closure under water stress.
Botany|Plant physiology|Loss of water vapour from aerial plant parts is called?|Transpiration|Translocation|Fertilisation|Germination|0|Transpiration is the loss of water as vapour from aerial parts.
Botany|Cells|Where are most chlorophyll molecules located within chloroplasts?|Thylakoid membranes|Stroma|Outer membrane|Cell wall|0|Photosynthetic pigments are embedded in thylakoid membranes.
Botany|Plant pigments|Main pigment absorbing light for photosynthesis?|Chlorophyll-a|Haemoglobin|Melanin|Keratin|0|Chlorophyll-a is the primary photosynthetic pigment.
Botany|Kingdoms|Mushrooms belong to which kingdom?|Plantae|Fungi|Protista|Monera|1|Fungi are heterotrophic eukaryotes.
Botany|Genetics|Father of genetics?|Darwin|Mendel|Lamarck|Watson|1|Gregor Mendel's pea experiments.
Botany|Anatomy|In a typical terrestrial dicot leaf, stomata are usually more numerous on which surface?|Upper leaf surface|Lower leaf surface|Stem only|Roots only|1|In many terrestrial dicot leaves, the lower epidermis has more stomata.
Botany|Hormones|Hormone that promotes stem elongation?|Ethylene|Gibberellin|Abscisic acid|Cytokinin|1|Gibberellins promote stem growth.
Zoology|Circulation|Which blood vessel carries oxygenated blood from the lungs to the heart?|Pulmonary vein|Pulmonary artery|Vena cava|Hepatic portal vein|0|Pulmonary veins return oxygenated blood to the left atrium.
Zoology|Circulation|Which chamber pumps blood into the systemic circulation?|Left ventricle|Right ventricle|Left atrium|Right atrium|0|The left ventricle pumps blood into the aorta.
Zoology|Respiration|Gas exchange in the human lungs occurs primarily in the?|Alveoli|Trachea|Bronchi|Larynx|0|Alveoli provide thin surfaces for oxygen and carbon dioxide exchange.
Zoology|Excretion|The functional unit of the human kidney is the?|Nephron|Neuron|Alveolus|Villus|0|Nephrons filter blood and form urine.
Zoology|Nervous system|The junction between two neurons is called a?|Synapse|Nephron|Sarcomere|Alveolus|0|A synapse is a junction where signals pass between neurons or to an effector.
Zoology|Digestion|Which enzyme in saliva begins starch digestion?|Salivary amylase|Pepsin|Trypsin|Lipase from the pancreas|0|Salivary amylase begins breaking down starch.
Zoology|Immunity|Antibodies are produced by which cells?|Plasma cells|Red blood cells|Platelets|Neurons|0|Plasma cells derived from B lymphocytes secrete antibodies.
Zoology|Genetics|Which molecule carries hereditary information in most organisms?|DNA|Starch|Cellulose|Triglyceride|0|DNA carries hereditary information in most organisms.
Zoology|Endocrine|Which gland secretes thyroxine?|Thyroid|Pituitary|Pancreas|Adrenal medulla|0|Thyroxine is a thyroid hormone.
Zoology|Cells|Which process produces two genetically similar daughter cells in ordinary somatic cell division?|Mitosis|Meiosis I|Fertilisation|Crossing over|0|Mitosis normally produces two genetically similar daughter cells.
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
Data Interpretation|Tables|A library lent 40 science, 30 history and 20 literature books. How many books were lent in total?|90|70|80|100|0|Add the three counts: 40 + 30 + 20 = 90.
Data Interpretation|Tables|A library lent 40 science, 30 history and 20 literature books. How many more science than literature books were lent?|20|10|30|40|0|Subtract literature from science: 40 − 20 = 20.
Data Interpretation|Tables|A library lent 40 science, 30 history and 20 literature books. What fraction were history books?|One-third|One-half|One-quarter|Two-thirds|0|History accounts for 30 out of 90 books, or one-third.
Data Interpretation|Percentages|A shop sold 50 notebooks in May and 60 in June. What was the percentage increase?|20%|10%|25%|50%|0|The increase is 10 on a base of 50, or 20%.
Data Interpretation|Ratios|A bus carried 24 adults and 16 children. What was the ratio of adults to children?|3:2|2:3|3:4|4:3|0|24:16 simplifies to 3:2.
Data Interpretation|Averages|A team scored 12, 18 and 15 points in three rounds. What was its average score?|15|12|18|45|0|The average is (12 + 18 + 15) ÷ 3 = 15.
Data Interpretation|Tables|A school planted 25 trees in July, 35 in August and 40 in September. How many were planted in August and September together?|75|60|65|100|0|35 + 40 = 75 trees.
Data Interpretation|Percentages|A survey has 200 respondents; 80 choose option A. What percentage chose A?|40%|20%|60%|80%|0|80 ÷ 200 × 100 = 40%.
English|Reading comprehension|Passage: The town library extended its evening hours after a survey showed that many workers could not visit during the day. Why were the hours extended?|To help workers visit after daytime hours|To reduce the number of books|To close the library on weekends|To replace the survey|0|The passage says many workers could not visit during the day.
English|Reading comprehension|Passage: Meera saved rainwater for her garden. During the dry month she used the stored water instead of the tap. What did Meera use in the dry month?|Stored rainwater|Only tap water|River water delivered daily|Water from a swimming pool|0|The passage states that she used stored rainwater instead of tap water.
English|Reading comprehension|Passage: A museum offers free entry on Mondays. On other days visitors must buy a ticket. When is entry free?|Monday|Tuesday|Saturday|Every day|0|The passage explicitly identifies Mondays as free-entry days.
English|Reading comprehension|Passage: The train was delayed by fog, so the meeting began later than planned. What caused the delay to the train?|Fog|A ticket sale|The meeting agenda|A clear sky|0|The passage directly attributes the train delay to fog.
Accounting|Principles|In double-entry bookkeeping every transaction has at least?|One debit and one credit|Two debits only|Two credits only|No effect on accounts|0|Every transaction has equal total debits and credits.
Accounting|Principles|Which equation expresses the basic accounting relationship?|Assets = liabilities + equity|Assets = income + expenses|Equity = assets + liabilities|Liabilities = assets + equity|0|Assets are financed by liabilities and equity.
Accounting|Journal|A business buys equipment for cash. Which account is debited?|Equipment|Cash|Capital|Sales|0|The asset equipment increases and cash decreases.
Accounting|Journal|A business receives cash from a debtor. What happens to the debtor balance?|It decreases|It increases|It becomes revenue again|It becomes an expense|0|Cash is received against an existing receivable.
Accounting|Trial balance|A trial balance primarily compares the totals of?|Ledger debit and credit balances|Assets and expenses only|Cash receipts and cash payments only|Sales and purchases only|0|A trial balance checks whether total debit and credit balances agree.
Accounting|Depreciation|The straight-line method allocates depreciable cost how?|Equally over the estimated useful life|Only in the year of purchase|According to sales revenue alone|Only on disposal|0|Straight-line depreciation allocates depreciable cost evenly over useful life.
Accounting|Inventory|Under FIFO which inventory costs are assumed to be issued first?|The earliest costs|The latest costs|The highest costs|The average costs only|0|FIFO means first in, first out.
Accounting|Accruals|An expense incurred but not yet paid is generally recorded as?|An accrued liability|Prepaid income|A capital receipt|Inventory|0|The expense belongs to the period and a liability remains payable.
Accounting|Prepayments|Insurance paid in advance for a future period is initially a?|Prepaid asset|Sales revenue|Long-term loan|Bad debt|0|The unused portion is a prepaid expense, an asset.
Accounting|Receivables|A credit sale initially increases which asset?|Trade receivables|Cash|Equipment|Prepaid insurance|0|The customer owes the business for the credit sale.
Accounting|Bank reconciliation|A cheque issued but not yet presented generally appears in?|The cash book but not yet the bank statement|The bank statement but not the cash book|Neither record|The sales journal only|0|The business has recorded the cheque, while the bank has not yet processed it.
Accounting|Financial statements|Which statement reports assets and liabilities at a date?|Balance sheet|Statement of profit and loss|Sales register|Cash receipt voucher|0|A balance sheet presents assets, liabilities and equity at a specified date.
Cost Accounting|Classification|Which is normally a variable cost per unit of output?|Direct material consumed per unit|Factory rent fixed for the period|Annual insurance premium|Fixed factory supervisor salary|0|Total direct material cost normally varies with output when consumption per unit is constant.
Cost Accounting|Classification|Which cost is normally fixed within a relevant range?|Factory rent for the period|Material per unit produced|Sales commission per unit|Packing per unit|0|Fixed rent does not vary with output within the relevant range.
Cost Accounting|Contribution|Selling price per unit is ₹100 and variable cost is ₹60. What is contribution per unit?|₹40|₹60|₹100|₹160|0|Contribution equals selling price less variable cost: ₹100 − ₹60 = ₹40.
Cost Accounting|Break-even|Fixed costs are ₹2,000 and contribution per unit is ₹40. What is break-even volume?|50 units|40 units|80 units|2,000 units|0|Break-even units equal fixed costs divided by contribution per unit.
Cost Accounting|Cost sheet|Prime cost comprises?|Direct material, direct labour and direct expenses|Only factory overhead|Only selling expenses|Fixed and variable profit|0|Prime cost is the sum of direct material, labour and expenses.
Cost Accounting|Overheads|Which is an indirect production cost?|Factory lighting|Wood in a wooden table|Wages of a worker making a specific unit|A component directly traced to a product|0|Factory lighting supports production but is not directly traceable to one unit.
Cost Accounting|Absorption|An overhead absorption rate is used to?|Allocate production overhead to cost units|Calculate the bank balance|Record a share issue|Eliminate direct material|0|An absorption rate assigns overhead to units using an appropriate basis.
Cost Accounting|Marginal costing|If contribution exceeds fixed costs, the difference is?|Profit|Variable cost|Sales volume|Direct material|0|Contribution less fixed costs gives profit, when contribution exceeds fixed costs.
Taxation|GST|GST is generally described as what kind of tax?|An indirect tax|A tax only on property ownership|A tax on court judgments|A tax on share capital only|0|GST is an indirect tax on supplies, subject to the applicable law.
Taxation|GST|What does input tax credit generally offset?|Eligible tax payable on outward supplies|Employee income tax in every case|The purchase price of all assets|Customs duty in every case|0|Eligible input tax credit can be used against output GST liability subject to legal conditions.
Taxation|GST|GST on an inter-State supply is generally charged as?|IGST|Only CGST|Only SGST|Stamp duty|0|Integrated GST generally applies to inter-State supplies, subject to the law.
Taxation|Income tax|The financial year in India normally runs from?|1 April to 31 March|1 January to 31 December|1 July to 30 June|1 October to 30 September|0|The financial year starts on 1 April and ends on 31 March.
Taxation|Income tax|In income-tax terminology the assessment year generally follows which period?|The previous year in which income is earned|The next assessment year|The company's first month only|The date of incorporation only|0|Income of a previous year is generally assessed in the following assessment year.
Taxation|GST|A GST tax invoice primarily documents?|Details of a taxable supply|A court appeal|An audit appointment|A bank loan sanction|0|A tax invoice records prescribed details of a taxable supply.
Taxation|Tax concepts|Who generally bears the economic burden of an indirect tax on a purchase?|The consumer, when the tax is passed on|Only the tax authority|Only the auditor|The company registrar|0|Indirect taxes can be passed on to consumers through prices.
Taxation|Tax concepts|Tax deducted at source is commonly abbreviated as?|TDS|FIFO|NAV|GDP|0|TDS means tax deducted at source.
Auditing|Evidence|The primary purpose of an audit of financial statements is to?|Express an independent opinion on the statements|Guarantee that every fraud has been found|Prepare every transaction for management|Set tax rates|0|The auditor seeks sufficient appropriate evidence to express an opinion.
Auditing|Evidence|Which evidence is generally more reliable, all else equal?|A direct external confirmation received by the auditor|An unsupported oral assertion by management|An unsigned internal note|A draft prepared without source documents|0|Evidence obtained directly from an independent external source is generally more reliable.
Auditing|Independence|Auditor independence supports?|An objective audit opinion|Management's control of the audit opinion|Guaranteed profitability|Automatic approval of every transaction|0|Independence supports objectivity in the auditor's work and opinion.
Auditing|Materiality|An omission is material if it could reasonably influence?|Users' decisions based on the financial statements|The colour of the annual report|The company's office address alone|The number of audit working papers alone|0|Materiality concerns the possible influence of misstatements on users' decisions.
Auditing|Assertions|Checking whether recorded inventory physically exists addresses which assertion?|Existence|Completeness only|Classification only|Presentation only|0|Physical inspection can provide evidence that recorded inventory exists.
Auditing|Assertions|Tracing goods received before year-end to the records can help test?|Completeness|Existence only|Valuation only|Ownership of all assets|0|Tracing source documents to records helps identify omissions.
Auditing|Evidence|Audit working papers are used to?|Document audit procedures, evidence and conclusions|Replace the financial statements|Fix statutory tax rates|Record only management salaries|0|Audit documentation records work performed and conclusions reached.
Auditing|Risk|Audit risk is the risk that the auditor expresses an inappropriate opinion when statements are?|Materially misstated|Perfectly accurate|Not printed in colour|Prepared in a spreadsheet|0|Audit risk concerns an inappropriate opinion on materially misstated financial statements.
Business Law|Contracts|Under the Indian Contract Act an agreement enforceable by law is a?|Contract|Proposal only|Gift in every case|Notice of meeting|0|Section 2(h) defines a contract as an agreement enforceable by law.
Business Law|Contracts|What does acceptance of a proposal form under the Indian Contract Act?|A promise|A completed sale in every case|A court decree|A guarantee in every case|0|Under section 2(b), a proposal when accepted becomes a promise.
Business Law|Contracts|Which is an essential element of a valid contract under section 10?|Free consent of competent parties|A written document in every case|Registration in every case|A government party in every case|0|Section 10 requires free consent of competent parties and other stated conditions.
Business Law|Contracts|Which factor can make consent not free under the Indian Contract Act?|Coercion|A lawful proposal|Competence to contract|A lawful object|0|Section 14 identifies coercion and other factors that can prevent consent from being free.
Business Law|Contracts|A contract to do an act which becomes impossible after formation can become?|Void when the act becomes impossible|Automatically criminal|Always enforceable regardless of impossibility|A share certificate|0|Section 56 addresses an act becoming impossible or unlawful after a contract is made.
Business Law|Contracts|Consideration under the Indian Contract Act may move from?|The promisee or any other person|Only a judge|Only a government officer|Only a stranger to the agreement|0|Section 2(d) describes consideration moving from the promisee or any other person at the promisor's desire.
Business Law|Agency|An agent acts on behalf of whom?|The principal|Only a court|Only a creditor of the agent|The tax authority in every case|0|An agent represents or acts for a principal in dealings with third persons.
Business Law|Contracts|A contingent contract depends on?|The happening or non-happening of a collateral event|A completed court judgment in every case|Payment in cash only|Registration of every promise|0|Section 31 defines a contingent contract by reference to a collateral event.
Legal Aptitude|Constitution|Article 21 guarantees?|Right to life and personal liberty|Right to equality|Right to freedom of religion|Right against exploitation|0|Life and personal liberty.
Legal Aptitude|Criminal law|Which Act replaced the Indian Penal Code from 1 July 2024?|Bharatiya Nyaya Sanhita|Bharatiya Sakshya Adhiniyam|CrPC|CPC|0|BNS came into force on 1 July 2024.
Legal Aptitude|Maxims|'Res judicata' means?|A matter already judged|Let the master answer|Public policy|Right of way|0|Issue already decided by a competent court.
Legal Aptitude|Judiciary|Who administers the oath to the President?|Chief Justice of India|Vice-President|Prime Minister|Speaker|0|Article 60 provides the oath.
Legal Aptitude|Consumer|Consumer Protection Act 2019 creates which district body?|District Consumer Disputes Redressal Commission|Lok Adalat|Tribunal|Lokpal|0|District Commissions hear consumer complaints.
Legal Aptitude|Information|RTI Act was enacted in?|2005|2002|1995|2010|0|RTI Act, 2005.
Legal Aptitude|Anti-corruption|Lokpal was established under which Act?|Lokpal and Lokayuktas Act, 2013|RTI Act|Consumer Protection Act|NGT Act|0|Enacted 2013.
Legal Aptitude|Constitution|Which article guarantees equality before the law?|Article 14|Article 17|Article 21|Article 32|0|Article 14 guarantees equality before the law and equal protection of the laws.
Legal Aptitude|Constitution|Which article abolishes untouchability?|Article 17|Article 19|Article 21|Article 25|0|Article 17 abolishes untouchability and forbids its practice in any form.
Legal Aptitude|Constitution|Which article protects freedom of speech and expression for citizens?|Article 19(1)(a)|Article 20(2)|Article 22(1)|Article 29(2)|0|Article 19(1)(a) protects freedom of speech and expression, subject to constitutional restrictions.
Legal Aptitude|Constitution|Which article provides protection against double jeopardy?|Article 20(2)|Article 14|Article 23|Article 44|0|Article 20(2) protects against being prosecuted and punished for the same offence more than once.
Legal Aptitude|Constitution|Which article provides the right to move the Supreme Court for enforcement of fundamental rights?|Article 32|Article 48|Article 123|Article 280|0|Article 32 provides remedies for enforcement of fundamental rights.
Legal Aptitude|Constitution|Which article empowers High Courts to issue writs?|Article 226|Article 110|Article 148|Article 356|0|Article 226 empowers High Courts to issue writs for fundamental rights and other purposes.
Legal Aptitude|Constitution|Under which article may the President promulgate an ordinance when Parliament is not in session?|Article 123|Article 72|Article 280|Article 324|0|Article 123 sets out the President's ordinance-making power and its conditions.
Legal Aptitude|Constitution|Which article describes Parliament's power to amend the Constitution?|Article 368|Article 110|Article 148|Article 262|0|Article 368 sets out the procedure and power to amend the Constitution.
Legal Aptitude|Constitution|Which article states that no person shall be deprived of property save by authority of law?|Article 300A|Article 17|Article 51A|Article 368|0|Article 300A protects against deprivation of property without authority of law.
Legal Aptitude|Constitution|Which article directs the State to provide free legal aid?|Article 39A|Article 20|Article 74|Article 110|0|Article 39A is a Directive Principle concerning equal justice and free legal aid.
Legal Aptitude|Constitution|Fundamental Duties are listed under which article?|Article 51A|Article 32|Article 76|Article 324|0|Article 51A lists the Fundamental Duties of citizens.
Legal Aptitude|Constitution|Which article defines a Money Bill?|Article 110|Article 124|Article 148|Article 226|0|Article 110 defines the matters that make a Bill a Money Bill.
Legal Aptitude|Constitution|Which article provides for the appointment of the Attorney General for India?|Article 76|Article 51A|Article 280|Article 300A|0|Article 76 provides for an Attorney General appointed by the President.
Legal Aptitude|Constitution|The Supreme Court's special leave jurisdiction is provided by which article?|Article 136|Article 17|Article 39A|Article 123|0|Article 136 provides the Supreme Court's discretionary special leave jurisdiction.
Legal Aptitude|Constitution|Which article prohibits trafficking in human beings and forced labour?|Article 23|Article 24|Article 29|Article 50|0|Article 23 prohibits trafficking, begar and similar forms of forced labour.
Legal Aptitude|Constitution|Which article protects freedom of conscience and the profession, practice and propagation of religion?|Article 25|Article 14|Article 32|Article 110|0|Article 25 protects that freedom subject to the conditions stated in the Constitution.
Legal Aptitude|Legal principles|What does the maxim audi alteram partem require?|Hear the other side|No one may appeal|Every contract must be written|A judge must make law|0|Audi alteram partem is the natural justice principle of giving the other side an opportunity to be heard.
Legal Aptitude|Legal principles|What does nemo judex in causa sua express?|No one should be a judge in their own cause|Every witness must be an expert|All contracts need registration|A court must always grant bail|0|The maxim expresses the rule against bias.
Legal Aptitude|Legal principles|What is the ratio decidendi of a judgment?|The legal principle necessary for the decision|Every statement made by counsel|The court's case number|A witness's address|0|Ratio decidendi is the legal reasoning necessary to the court's decision.
Legal Aptitude|Legal principles|What is an obiter dictum?|An observation not essential to the decision|The final sentence alone|A document filed with a claim|An order appointing a judge|0|An obiter dictum is an observation made in a judgment that is not essential to its decision.
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
    const squared = a * a + b * b;
    const dist = Math.sqrt(squared);
    const exact = Number.isInteger(dist) ? String(dist) : `√${squared}`;
    const sh = shuffleOpts(r, `${exact} km`, [`${a + b} km`, `${Math.abs(b - a)} km`, `${a * b} km`]);
    out.push({ subject: R, topic: "Direction sense", q: `A man walks ${a} km north, then ${b} km east. How far is he from the starting point?`, opts: sh.opts, ans: sh.ans, expl: `Right-angle distance: √(${a}² + ${b}²) = ${exact} km.`, diff: "medium" });
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
const seenQuestionTexts = new Set<string>();
export const MCQ_BANK: MCQ[] = ALL_RAW.map<MCQ>((x, i) => ({
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
})).filter((item) => {
  // Preserve the original ID of the first occurrence, so stored progress is stable.
  const key = item.question_text.trim().toLowerCase();
  if (seenQuestionTexts.has(key)) return false;
  seenQuestionTexts.add(key);
  return true;
});

/**
 * Map a pattern section subject onto a bank subject. The bank only holds
 * a few subjects, so related sections share the same questions.
 */
export function bankSubjectFor(section: string): string[] {
  const s = section.toLowerCase();
  // These sections require specialist or task-specific material, not generic GK.
  // An empty pool makes the missing material visible instead of inventing coverage.
  if (/^engineering subject/.test(s) || s === "subject paper" || s === "subject knowledge" || s === "part b & c (subject)") return [];
  if (["listening", "reading", "writing", "speaking", "speaking & writing"].includes(s)) return [];
  if (["general aptitude", "aptitude", "part a (general)", "general studies paper ii (csat)", "csat paper ii"].includes(s)) return ["Quantitative Aptitude", "Reasoning", "English"];
  if (s === "general aptitude test") return ["Quantitative Aptitude", "Reasoning", "Data Interpretation", "General Awareness", "Indian Polity", "Indian History", "Geography", "Economy", "General Science"];
  if (s === "general ability test" || s === "general test") return ["Quantitative Aptitude", "Reasoning", "English", "General Awareness", "Indian Polity", "Indian History", "Geography", "Economy", "General Science"];
  if (s === "indian & global environment") return ["General Awareness"];
  if (s === "economic & business environment") return ["Economy", "General Awareness"];
  if (s === "data analysis & sufficiency" || s === "data insights") return ["Data Interpretation", "Quantitative Aptitude", "Reasoning"];
  if (s === "logical reasoning" || s === "data interpretation & logical reasoning") return ["Reasoning", "Data Interpretation"];
  if (s === "physics & chemistry") return ["Physics", "Chemistry"];
  if (s === "reading & writing") return ["English"];
  if (s === "accounting & auditing") return ["Accounting", "Auditing"];
  if (s === "accounting" || s === "fundamentals of accounting") return ["Accounting"];
  if (s === "cost & management accounting") return ["Cost Accounting"];
  if (s === "taxation") return ["Taxation"];
  if (s === "auditing") return ["Auditing"];
  if (s === "business law") return ["Business Law"];
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
  return [];
}
