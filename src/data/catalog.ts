/**
 * India test catalogue. One line per exam:
 *   id | English name | Hindi name | category | stage | conducting body | official URL | pattern family
 *
 * Category codes: A = Admissions (UG), G = Post-graduate & research, R = Recruitment,
 *   B = Banking & insurance, P = Public service (PSC), PO = Police & CAPF, J = Judicial,
 *   T = Teaching, AF = Armed forces, PR = Professional & licensing, IN = Study abroad (taken in India).
 * Stage codes: M = Matric/Class 10, I = Intermediate/Class 12, G = Graduate, J = Job seeker, P = Professional, A = Abroad.
 *
 * Patterns come from `families.ts`; `verified` there decides whether the UI says "approximate".
 */
export const CATALOG_RAW = `
neet-ug|NEET (UG)|नीट (यूजी)|A|I|National Testing Agency (NTA)|https://neet.nta.nic.in|neet
jee-main|JEE Main (Paper 1 – B.E./B.Tech)|जेईई मेन (पेपर 1 – बी.ई./बी.टेक)|A|I|National Testing Agency (NTA)|https://jeemain.nta.nic.in|jee-main-1
jee-main-p2|JEE Main (Paper 2 – B.Arch / B.Planning)|जेईई मेन (पेपर 2 – बी.आर्क / बी.प्लानिंग)|A|I|National Testing Agency (NTA)|https://jeemain.nta.nic.in|jee-main-2
jee-adv|JEE Advanced|जेईई एडवांस्ड|A|I|IIT Joint Admission Board|https://jeeadv.ac.in|jee-adv
cuet-ug|CUET (UG)|सीयूईटी (यूजी)|A|I|National Testing Agency (NTA)|https://cuet.nta.ac.in|cuet-ug
bitsat|BITSAT|बिट्सैट|A|I|BITS Pilani|https://www.bitsadmission.com|bitsat
viteee|VITEEE|वीआईटीईईई|A|I|VIT Vellore|https://vit.ac.in|viteee
srmjeee|SRMJEEE|एसआरएमजेईईई|A|I|SRM Institute of Science & Technology|https://www.srmist.edu.in|srmjeee
comedk|COMEDK UGET|कॉमेडके यूजीईटी|A|I|COMEDK|https://www.comedk.org|eng-180
kcet|KCET (Karnataka CET)|केसीईटी (कर्नाटक सीईटी)|A|I|KEA Karnataka|https://cetonline.karnataka.gov.in/kea|eng-180
mhtcet-pcm|MHT CET (PCM)|एमएचटी सीईटी (पीसीएम)|A|I|State CET Cell Maharashtra|https://cetcell.mahacet.org|mhtcet-pcm
mhtcet-pcb|MHT CET (PCB)|एमएचटी सीईटी (पीसीबी)|A|I|State CET Cell Maharashtra|https://cetcell.mahacet.org|mhtcet-pcb
wbjee|WBJEE|डब्ल्यूबीजेईई|A|I|WB JEE Board|https://wbjeeb.nic.in|eng-180
keam|KEAM (Kerala)|केईएएम (केरल)|A|I|Commissioner for Entrance Examinations, Kerala|https://cee.kerala.gov.in|eng-180
ts-eapcet|TS EAPCET (TG EAPCET)|टीएस ईएपीसेट (टीजी ईएपीसेट)|A|I|JNTU Hyderabad|https://eapcet.tgche.ac.in|eng-180
ap-eapcet|AP EAPCET (EAMCET)|एपी ईएपीसेट (ईएमसेट)|A|I|JNTU Kakinada|https://cets.apsche.ap.gov.in|eng-180
ojee|OJEE (Odisha)|ओजेईई (ओडिशा)|A|I|CSVTU / BPUT Odisha|https://ojee.nic.in|eng-180
upsee|UPSEE (Uttar Pradesh)|यूपीएसईई (उत्तर प्रदेश)|A|I|AKTU Lucknow|https://www.aktu.ac.in|eng-180
bceceb|BCECE (Engineering, Bihar)|बीसीईसीई (इंजीनियरिंग, बिहार)|A|I|BCECE Board Bihar|https://bceceboard.bihar.gov.in|eng-180
gujcet|GUJCET (Gujarat)|गुजकेट (गुजरात)|A|I|GSEB Gujarat|https://gseb.org|eng-180
rpmt|Rajasthan NEET UG Counselling (RPMT legacy)|राजस्थान नीट यूजी काउंसलिंग (आरपीएमटी)|A|I|Rajasthan NEET UG Medical & Dental Admission/Counselling Board|https://medicaleducation.rajasthan.gov.in/me/#/home/dptHome|rajasthan-medical-counselling
kiitee|KIITEE|केआईआईटीईई|A|I|KIIT Bhubaneswar|https://kiit.ac.in|eng-180
ipu-cet|IPU CET (B.Tech, Delhi)|आईपीयू सीईटी (बी.टेक, दिल्ली)|A|I|GGSIPU Delhi|https://ipu.ac.in|ipu-cet
amity-aeee|Amity AEEE|अमिटी एईईई|A|I|Amity University|https://amity.edu|aptitude-ug
lpu-nest|LPU NEST|एलपीयू नेस्ट|A|I|Lovely Professional University|https://lpu.in|aptitude-ug
nid-dat|NID DAT|एनआईडी डीएटी|A|I|National Institute of Design|https://admissions.nid.edu|design-dat
uceed|UCEED|यूसीईईडी|A|I|IIT Bombay|https://www.uceed.iitb.ac.in|design-dat
nift|NIFT Entrance|एनआईएफटी प्रवेश परीक्षा|A|I|NIFT|https://nift.ac.in|design-dat
nata|NATA|नाटा|A|I|Council of Architecture|https://www.nata.in|nata
iiser-iat|IISER Aptitude Test (IAT)|आईआईएसईआर योग्यता परीक्षा (IAT)|A|I|IISERs|https://www.iiseradmission.in|iiser-iat
ipmat-indore|IPMAT (IIM Indore)|आईपीएमएटी (आईआईएम इंदौर)|A|I|IIM Indore|https://www.iimidr.ac.in|ipmat
ipmat-rohtak|IPMAT (IIM Rohtak)|आईपीएमएटी (आईआईएम रोहतक)|A|I|IIM Rohtak|https://www.iimrohtak.ac.in|ipmat
jipmat|JIPMAT (Integrated Management)|जिपमैट (एकीकृत प्रबंधन)|A|I|National Testing Agency (NTA)|https://exams.nta.nic.in/jipmat/|jipmat
set-sym|SET (Symbiosis UG)|सेट (सिम्बायोसिस यूजी)|A|I|Symbiosis International|https://www.set-test.org|aptitude-ug
nchm|NCHM JEE (Hotel Management)|एनसीएचएम जेईई (होटल प्रबंधन)|A|I|National Testing Agency (NTA)|https://exams.nta.ac.in/NCHM/|nchm-jee
aieea-ug|ICAR AIEEA (UG)|आईसीएआर एआईईईए (यूजी)|A|I|NTA / ICAR|https://icar.nta.ac.in|agri-ug
clat-ug|CLAT (UG – 5-year LLB)|सीएलएटी (यूजी – 5 वर्षीय एलएलबी)|A|I|Consortium of NLUs|https://consortiumofnlus.ac.in|clat-ug
ailet|AILET (NLU Delhi)|एआईएलईटी (एनएलयू दिल्ली)|A|I|NLU Delhi|https://nludelhi.ac.in|clat-ug
slat|SLAT (Symbiosis Law)|एसएलएटी (सिम्बायोसिस लॉ)|A|I|Symbiosis Law School|https://www.set-test.org|legal-aptitude
lsat-india|LSAT India|एलएसएटी इंडिया|A|I|Jindal Global Law School|https://lsatindia.in|legal-aptitude
mh-law-cet|MH CET Law (3-year LLB)|एमएच सीईटी लॉ (3 वर्षीय एलएलबी)|A|I|CET Cell Maharashtra|https://cetcell.mahacet.org|legal-aptitude
ap-ecet|AP ECET (Lateral Entry B.Tech)|एपी ईसीईटी (लेटरल एंट्री बी.टेक)|A|I|APSCHE|https://cets.apsche.ap.gov.in|eng-180
ts-ecet|TS ECET (Lateral Entry B.Tech)|टीएस ईसीईटी (लेटरल एंट्री बी.टेक)|A|I|JNTU Hyderabad|https://ecet.tgche.ac.in|eng-180
polycet|POLYCET (Diploma)|पॉलिसीईटी (डिप्लोमा)|A|M|SBTET Telangana|https://polycet.sbtet.telangana.gov.in|aptitude-ug
up-polytechnic|UP Polytechnic (JEECUP)|यूपी पॉलिटेक्निक (JEECUP)|A|M|AKTU / JEECUP|https://jeecup.admissions.nic.in|aptitude-ug
ntse|NTSE (Class 10 scholarship)|एनटीएसई (कक्षा 10 छात्रवृत्ति)|A|M|NCERT / SCERT|https://ncert.nic.in|matric-entrance
nmms|NMMS (Class 8 scholarship)|एनएमएमएस (कक्षा 8 छात्रवृत्ति)|A|M|State Education Departments|https://scholarships.gov.in|matric-entrance
jnvst|JNVST (Navodaya Class 6)|जेएनवीएसटी (नवोदय कक्षा 6)|A|M|Navodaya Vidyalaya Samiti|https://navodaya.gov.in|matric-entrance
aissee|AISSEE (Sainik School Class 6/9)|एआईएसएसईई (सैनिक स्कूल कक्षा 6/9)|A|M|NTA|https://aissee.nta.nic.in|matric-entrance
kvpy|KVPY (Science fellowship)|केवीपीवाई (विज्ञान फ़ेलोशिप)|A|I|IISc Bangalore|https://kvpy.iisc.ac.in|research-science
gate|GATE|गेट (GATE)|G|G|IISc / IITs (rotating)|https://gate2027.iisc.ac.in|gate
cat|CAT (IIM entrance)|कैट (आईआईएम प्रवेश)|G|G|IIMs|https://iimcat.ac.in|cat
xat|XAT|एक्सएटी|G|G|XLRI Jamshedpur|https://xatonline.in|xat
mat|MAT|एमएटी|G|G|AIMA|https://mat.aima.in|mat
cmat|CMAT|सीमैट|G|G|National Testing Agency (NTA)|https://cmat.nta.ac.in|cmat
snap|SNAP|स्नैप|G|G|Symbiosis International|https://www.set-test.org|snap
nimcet|NIMCET (MCA)|निम्सेट (एमसीए)|G|G|NIT Rourkela|https://nimcet.nita.ac.in|nimcet
iift|IIFT Entrance|आईआईएफटी प्रवेश|G|G|IIFT|https://iift.ac.in|aptitude-pg
tiss-net|TISS NET|टीआईएसएस नेट|G|G|TISS Mumbai|https://tiss.edu|aptitude-pg
npat|NPAT (NMIMS)|एनपीएटी (एनएमआईएमएस)|G|G|NMIMS|https://www.nmims.edu|aptitude-pg
mah-mba-cet|MAH MBA/MMS CET|एमएएच एमबीए/एमएमएस सीईटी|G|G|CET Cell Maharashtra|https://cetcell.mahacet.org|aptitude-pg
kmat|KMAT (Kerala)|केएमएटी (केरल)|G|G|KMAT Kerala|https://kmatkerala.in|aptitude-pg
atma|ATMA|एटीएमए|G|G|AIMS|https://www.aims-education.org|aptitude-pg
cuet-pg|CUET (PG)|सीयूईटी (पीजी)|G|G|National Testing Agency (NTA)|https://cuet.nta.ac.in|cuet-pg
ugc-net-p1|UGC NET (Paper I)|यूजीसी नेट (पेपर I)|G|G|National Testing Agency (NTA)|https://ugcnet.nta.ac.in|ugc-net-p1
ugc-net-p2|UGC NET (Paper II – Subject)|यूजीसी नेट (पेपर II – विषय)|G|G|National Testing Agency (NTA)|https://ugcnet.nta.ac.in|ugc-net-p2
csir-net|CSIR UGC NET|सीएसआईआर यूजीसी नेट|G|G|National Testing Agency (NTA)|https://csirnet.nta.ac.in|csir-net
jam|IIT JAM|आईआईटी जैम|G|G|IIT (rotating)|https://jam.iitg.ac.in|jam
gpat|GPAT (Pharmacy)|जीपीएटी (फ़ार्मेसी)|G|G|National Testing Agency (NTA)|https://gpat.nta.ac.in|gpat
niper-jee|NIPER JEE|निपर जेईई|G|G|NIPER|https://niper.ac.in|gpat
neet-pg|NEET PG|नीट पीजी|G|G|National Board of Examinations in Medical Sciences (NBEMS)|https://nbe.edu.in|neet-pg
neet-mds|NEET MDS|नीट एमडीएस|G|G|NBEMS|https://nbe.edu.in|neet-mds
ini-cet|INI-CET (AIIMS & INI PG)|आईएनआई-सीईटी|G|G|NBEMS|https://nbe.edu.in|ini-cet
aiapget|AIAPGET (AYUSH PG)|एआईएपीजीईटी (आयुष पीजी)|G|G|National Testing Agency (NTA)|https://aiapget.nta.ac.in|aiapget
clat-pg|CLAT PG (LLM)|सीएलएटी पीजी (एलएलएम)|G|G|Consortium of NLUs|https://consortiumofnlus.ac.in|legal-aptitude
tifr-gs|TIFR GS (Graduate School)|टीआईएफआर जीएस|G|G|TIFR Mumbai|https://gs.tifr.res.in|research-science
nest|NEST (NISER)|नेस्ट (NISER)|G|G|NISER Bhubaneswar|https://www.nestexam.in|research-science
jest|JEST (Physics research)|जेस्ट (भौतिकी शोध)|G|G|JEST Consortium|https://www.jest.org.in|research-science
icar-pg|ICAR AIEEA (PG) / ICAR JRF|आईसीएआर एआईईईए (पीजी)|G|G|NTA / ICAR|https://icar.nta.ac.in|agri-ug
cgl|SSC CGL (Combined Graduate Level)|एसएससी सीजीएल (कंबाइंड ग्रेजुएट लेवल)|R|G|Staff Selection Commission (SSC)|https://ssc.gov.in|cgl
ssc-selection-matric|SSC Selection Posts (Matriculation)|एसएससी चयन पद (मैट्रिक स्तर)|R|M|Staff Selection Commission (SSC)|https://ssc.gov.in|ssc-selection-post
ssc-selection-higher-secondary|SSC Selection Posts (Higher Secondary)|एसएससी चयन पद (उच्च माध्यमिक स्तर)|R|I|Staff Selection Commission (SSC)|https://ssc.gov.in|ssc-selection-post
ssc-selection-graduate|SSC Selection Posts (Graduate)|एसएससी चयन पद (स्नातक स्तर)|R|G|Staff Selection Commission (SSC)|https://ssc.gov.in|ssc-selection-post
chsl|SSC CHSL (10+2 Level)|एसएससी सीएचएसएल (10+2 स्तर)|R|I|Staff Selection Commission (SSC)|https://ssc.gov.in|chsl
mts|SSC MTS (Multi-Tasking Staff)|एसएससी एमटीएस (मल्टी-टास्किंग स्टाफ)|R|M|Staff Selection Commission (SSC)|https://ssc.gov.in|mts
ssc-gd|SSC GD Constable|एसएससी जीडी कॉन्स्टेबल|PO|M|Staff Selection Commission (SSC)|https://ssc.gov.in|ssc-gd
ssc-cpo|SSC CPO Sub-Inspector|एसएससी सीपीओ सब-इंस्पेक्टर|PO|G|Staff Selection Commission (SSC)|https://ssc.gov.in|cpo-si
ssc-je|SSC JE (Junior Engineer)|एसएससी जेई (जूनियर इंजीनियर)|R|G|Staff Selection Commission (SSC)|https://ssc.gov.in|ssc-je
ssc-steno|SSC Stenographer|एसएससी स्टेनोग्राफर|R|I|Staff Selection Commission (SSC)|https://ssc.gov.in|ssc-steno
ntpc|RRB NTPC (Graduate & Undergraduate posts)|आरआरबी एनटीपीसी (स्नातक व अंडरग्रेजुएट पद)|R|G|Railway Recruitment Boards (RRB)|https://www.rrbcdg.gov.in|ntpc
rrb-gd|RRB Group D|आरआरबी ग्रुप डी|R|M|Railway Recruitment Boards (RRB)|https://www.rrbcdg.gov.in|rrb-gd
rrb-alp|RRB ALP (Assistant Loco Pilot)|आरआरबी एएलपी (असिस्टेंट लोको पायलट)|R|M|Railway Recruitment Boards (RRB)|https://www.rrbcdg.gov.in|rrb-alp
rrb-je|RRB JE (Junior Engineer)|आरआरबी जेई (जूनियर इंजीनियर)|R|G|Railway Recruitment Boards (RRB)|https://www.rrbcdg.gov.in|rrb-je
rrb-tech|RRB Technician|आरआरबी टेक्नीशियन|R|I|Railway Recruitment Boards (RRB)|https://www.rrbcdg.gov.in|rrb-tech
rrb-para|RRB Paramedical Staff|आरआरबी पैरामेडिकल स्टाफ|R|G|Railway Recruitment Boards (RRB)|https://www.rrbcdg.gov.in|rrb-para
ibps-clerk|IBPS Clerk|आईबीपीएस क्लर्क|B|G|Institute of Banking Personnel Selection (IBPS)|https://www.ibps.in|bank-clerk
ibps-rrb|IBPS RRB (Officer / Office Assistant)|आईबीपीएस आरआरबी (अधिकारी / ऑफिस असिस्टेंट)|B|G|Institute of Banking Personnel Selection (IBPS)|https://www.ibps.in|bank-clerk
ibps-po|IBPS PO / MT|आईबीपीएस पीओ / एमटी|B|G|Institute of Banking Personnel Selection (IBPS)|https://www.ibps.in|bank-po
ibps-so|IBPS SO (Specialist Officer)|आईबीपीएस एसओ (स्पेशलिस्ट ऑफिसर)|B|G|Institute of Banking Personnel Selection (IBPS)|https://www.ibps.in|ibps-so
sbi-po|SBI PO|एसबीआई पीओ|B|G|State Bank of India|https://sbi.co.in/careers|bank-po
sbi-clerk|SBI Clerk (Junior Associate)|एसबीआई क्लर्क (जूनियर एसोसिएट)|B|G|State Bank of India|https://sbi.co.in/careers|bank-clerk
sbi-so|SBI SO (Specialist Officer)|एसबीआई एसओ (स्पेशलिस्ट ऑफिसर)|B|G|State Bank of India|https://sbi.co.in/careers|sbi-so
rbi-b|RBI Grade B|आरबीआई ग्रेड बी|B|G|Reserve Bank of India|https://opportunities.rbi.org.in|rbi-b
rbi-assist|RBI Assistant|आरबीआई असिस्टेंट|B|G|Reserve Bank of India|https://opportunities.rbi.org.in|bank-clerk
nabard-a|NABARD Grade A|नाबार्ड ग्रेड ए|B|G|NABARD|https://www.nabard.org|nabard-a
sebi-a|SEBI Grade A|सेबी ग्रेड ए|B|G|SEBI|https://www.sebi.gov.in|sebi-a
lic-aao|LIC AAO|एलआईसी एएओ|B|G|Life Insurance Corporation of India|https://licindia.in|lic-aao
lic-ado|LIC ADO (Apprentice Development Officer)|एलआईसी एडीओ|B|G|Life Insurance Corporation of India|https://licindia.in|lic-aao
nicl-ao|NICL AO (Administrative Officer)|एनआईसीएल एओ|B|G|New India Assurance (NICL)|https://nationalinsuranceindia.nic.in|nicl-ao
uiic-ao|UIIC AO|यूआईआईसी एओ|B|G|United India Insurance|https://uiic.co.in|nicl-ao
gic-ao|GIC Re Assistant / AO|जीआईसी री असिस्टेंट / एओ|B|G|General Insurance Corporation|https://www.gicre.in|nicl-ao
ecgc-po|ECGC PO|ईसीजीसी पीओ|B|G|ECGC|https://www.ecgc.in|nicl-ao
bob-po|Bank of Baroda PO / SO|बैंक ऑफ बड़ौदा पीओ / एसओ|B|G|Bank of Baroda|https://www.bankofbaroda.in/careers|bank-po
pnb-so|PNB SO / Clerk|पीएनबी एसओ / क्लर्क|B|G|Punjab National Bank|https://www.pnbindia.in/careers|bank-clerk
canara-po|Canara Bank PO|केनरा बैंक पीओ|B|G|Canara Bank|https://canarabank.com|bank-po
uco-so|UCO Bank SO|यूको बैंक एसओ|B|G|UCO Bank|https://www.ucobank.com|ibps-so
dsssb|DSSSB (Delhi Subordinate Services)|डीएसएसएसबी (दिल्ली अधीनस्थ सेवाएँ)|R|G|Delhi Subordinate Services Selection Board|https://dsssb.delhi.gov.in|dsssb
aai-je|AAI Junior Executive|एएआई जूनियर एग्जीक्यूटिव|R|G|Airports Authority of India|https://www.aai.aero|aai-je
fci|FCI Assistant / Manager|एफसीआई असिस्टेंट / मैनेजर|R|G|Food Corporation of India|https://fci.gov.in|fci
epfo-ssa|EPFO SSA / Stenographer|ईपीएफओ एसएसए|R|G|Employees' Provident Fund Organisation|https://www.epfindia.gov.in|recruitment-generic
esic|ESIC UDC / Stenographer|ईएसआईसी यूडीसी / स्टेनोग्राफर|R|G|Employees' State Insurance Corporation|https://www.esic.gov.in|recruitment-generic
postal-pa|India Post Postal / Sorting Assistant|इंडिया पोस्ट पोस्टल / सॉर्टिंग असिस्टेंट|R|I|Department of Posts|https://www.indiapost.gov.in|postal
aiims-cre|AIIMS Nursing Officer (CRE)|एम्स नर्सिंग ऑफिसर (सीआरई)|R|G|AIIMS|https://www.aiimsexams.ac.in|aiims-cre
barc-oces|BARC OCES / DGFS|बीएआरसी ओसीईएस / डीजीएफएस|R|G|Bhabha Atomic Research Centre|https://www.barc.gov.in|barc
drdo-ceptam|DRDO CEPTAM|डीआरडीओ सेप्टम|R|G|DRDO|https://www.drdo.gov.in|drdo-ceptam
nielit|NIELIT Recruitment|नीलिट भर्ती|R|G|NIELIT|https://nielit.gov.in|recruitment-generic
ukssc|UKSSSC Group C|यूकेएसएसएससी ग्रुप सी|R|I|UKSSSC Uttarakhand|https://uksssc.gov.in|state-ssc
upsssc-pet|UPSSSC PET (Eligibility Test)|यूपीएसएसएससी पीईटी|R|I|UPSSSC Uttar Pradesh|https://upsssc.gov.in|state-ssc
rssb-patwari|RSSB Patwari / Rajasthan Staff Selection|आरएसएसबी पटवारी / राजस्थान कर्मचारी चयन|R|I|RSSB Rajasthan|https://rssb.rajasthan.gov.in|state-ssc
bssc-inter|BSSC Inter-Level (Bihar)|बीएसएससी इंटर-लेवल (बिहार)|R|I|BSSC Bihar|https://www.bssc.bihar.gov.in|state-ssc
hssc-cet|HSSC CET (Group C/D)|एचएसएससी सीईटी (ग्रुप सी/डी)|R|G|HSSC Haryana|https://hssc.gov.in|state-ssc
ossc-cgl|OSSC CGL (Odisha)|ओएसएससी सीजीएल (ओडिशा)|R|G|OSSC Odisha|https://ossc.gov.in|state-ssc
gsssb|GSSSB (Gujarat Staff Selection)|जीएसएसएसबी (गुजरात)|R|G|GSSSB Gujarat|https://gsssb.gujarat.gov.in|state-ssc
jkssb|JKSSB (Jammu & Kashmir)|जेकेएसएसबी (जम्मू-कश्मीर)|R|G|JKSSB|https://jkssb.nic.in|state-ssc
psssb|PSSSB (Punjab Subordinate Services)|पीएसएसएसबी (पंजाब अधीनस्थ सेवाएँ)|R|G|PSSSB Punjab|https://sssb.punjab.gov.in|state-ssc
wbssc-clerk|WBSSC / WBPSC Clerkship|डब्ल्यूबीएसएससी / डब्ल्यूबीपीएससी क्लर्कशिप|R|G|WBSSC / WBPSC|https://wbpsc.gov.in|state-ssc
mpesb-patwari|MPESB Patwari / Group 3|एमपीईएसबी पटवारी / ग्रुप 3|R|I|MPESB Madhya Pradesh|https://esb.mp.gov.in|state-ssc
tnpsc-g4|TNPSC Group IV|टीएनपीएससी ग्रुप IV|R|M|TNPSC Tamil Nadu|https://www.tnpsc.gov.in|tnpsc-g4
kerala-lp|Kerala PSC LD Clerk / Category Exams|केरल पीएससी एलडी क्लर्क|R|M|Kerala PSC|https://www.keralapsc.gov.in|kerala-psc
upsc-cse|UPSC Civil Services (IAS / IPS / IFS)|यूपीएससी सिविल सेवा (आईएएस / आईपीएस / आईएफएस)|P|G|Union Public Service Commission (UPSC)|https://upsc.gov.in|upsc-prelims
upsc-ifos|UPSC IFoS (Indian Forest Service)|यूपीएससी आईएफओएस (भारतीय वन सेवा)|P|G|Union Public Service Commission (UPSC)|https://upsc.gov.in|upsc-prelims
upsc-ies|UPSC IES / ISS|यूपीएससी आईईएस / आईएसएस|P|G|Union Public Service Commission (UPSC)|https://upsc.gov.in|upsc-ies-iss
upsc-epfo|UPSC EPFO (EO / AO)|यूपीएससी ईपीएफओ (ईओ / एओ)|P|G|Union Public Service Commission (UPSC)|https://upsc.gov.in|recruitment-generic
upsc-ese|UPSC ESE (Engineering Services)|यूपीएससी ईएसई (इंजीनियरिंग सेवाएँ)|P|G|Union Public Service Commission (UPSC)|https://upsc.gov.in|upsc-ese
uppsc-pcs|UPPSC PCS (Uttar Pradesh)|यूपीपीएससी पीसीएस (उत्तर प्रदेश)|P|G|UPPSC Uttar Pradesh|https://uppsc.up.nic.in|state-pcs
bpsc-cce|BPSC CCE (Bihar)|बीपीएससी सीसीई (बिहार)|P|G|BPSC Bihar|https://bpsc.bih.nic.in|state-pcs
mpsc-state|MPSC State Services (Maharashtra)|एमपीएससी राज्य सेवा (महाराष्ट्र)|P|G|MPSC Maharashtra|https://mpsc.gov.in|state-pcs
mppsc-state|MPPSC State Services (Madhya Pradesh)|एमपीपीएससी राज्य सेवा (मध्य प्रदेश)|P|G|MPPSC Madhya Pradesh|https://www.mppsc.mp.gov.in|state-pcs
cgpsc|CGPSC State Services (Chhattisgarh)|सीजीपीएससी (छत्तीसगढ़)|P|G|CGPSC Chhattisgarh|https://psc.cg.gov.in|state-pcs
rpsc-ras|RPSC RAS (Rajasthan)|आरपीएससी आरएएस (राजस्थान)|P|G|RPSC Rajasthan|https://rpsc.rajasthan.gov.in|state-pcs
ppsc-pcs|PPSC PCS (Punjab)|पीपीएससी पीसीएस (पंजाब)|P|G|PPSC Punjab|https://ppsc.gov.in|state-pcs
hpsc-hcs|HPSC HCS / HPAS (Haryana)|एचपीएससी एचसीएस (हरियाणा)|P|G|HPSC Haryana|https://hpsc.gov.in|state-pcs
jpsc|JPSC CCE (Jharkhand)|जेपीएससी सीसीई (झारखंड)|P|G|JPSC Jharkhand|https://jpsc.gov.in|state-pcs
ukpsc|UKPSC PCS (Uttarakhand)|यूकेपीएससी पीसीएस (उत्तराखंड)|P|G|UKPSC Uttarakhand|https://ukpsc.gov.in|state-pcs
gpsc|GPSC (Gujarat) Class I/II|जीपीएससी (गुजरात) वर्ग I/II|P|G|GPSC Gujarat|https://gpsc.gujarat.gov.in|state-pcs
kpsc-kas|KPSC KAS (Karnataka)|केपीएससी केएएस (कर्नाटक)|P|G|KPSC Karnataka|https://kpsc.kar.nic.in|state-pcs
tnpsc-g1|TNPSC Group I|टीएनपीएससी ग्रुप I|P|G|TNPSC Tamil Nadu|https://www.tnpsc.gov.in|tnpsc-g1
tnpsc-g2|TNPSC Group II / IIA|टीएनपीएससी ग्रुप II / IIA|P|G|TNPSC Tamil Nadu|https://www.tnpsc.gov.in|tnpsc-g2
appsc-g1|APPSC Group I (Andhra Pradesh)|एपीपीएससी ग्रुप I (आंध्र प्रदेश)|P|G|APPSC Andhra Pradesh|https://psc.ap.gov.in|state-pcs
tgpsc-g1|TGPSC Group I (Telangana)|टीजीपीएससी ग्रुप I (तेलंगाना)|P|G|TGPSC Telangana|https://www.tspsc.gov.in|state-pcs
opsc-ocs|OPSC OCS (Odisha)|ओपीएससी ओसीएस (ओडिशा)|P|G|OPSC Odisha|https://www.opsc.gov.in|state-pcs
wbcs|WBCS (West Bengal)|डब्ल्यूबीसीएस (पश्चिम बंगाल)|P|G|WBPSC West Bengal|https://wbpsc.gov.in|state-pcs
apsc-cce|APSC CCE (Assam)|एपीएससी सीसीई (असम)|P|G|APSC Assam|https://apsc.nic.in|state-pcs
jkpsc|JKPSC CCE (Jammu & Kashmir)|जेकेपीएससी (जम्मू-कश्मीर)|P|G|JKPSC|https://jkpsc.nic.in|state-pcs
goa-psc|Goa PSC Combined Competitive|गोवा पीएससी|P|G|Goa Public Service Commission|https://goapsc.goa.gov.in|state-pcs
tpsc-tripura|Tripura PSC|त्रिपुरा पीएससी|P|G|TPSC Tripura|https://tpsc.tripura.gov.in|state-pcs
npsc-nagaland|Nagaland PSC|नागालैंड पीएससी|P|G|NPSC Nagaland|https://npsc.nic.in|state-pcs
mpsc-manipur|Manipur PSC|मणिपुर पीएससी|P|G|MPSC Manipur|https://manipurpsc.gov.in|state-pcs
up-police|UP Police Constable|यूपी पुलिस कॉन्स्टेबल|PO|M|UP Police Recruitment & Promotion Board|https://uppbpb.gov.in|police-const
bihar-police|Bihar Police Constable (CSBC)|बिहार पुलिस कॉन्स्टेबल (सीएसबीसी)|PO|M|Central Selection Board of Constable Bihar|https://csbc.bihar.gov.in|police-const
rajasthan-police|Rajasthan Police Constable|राजस्थान पुलिस कॉन्स्टेबल|PO|M|RSSB Rajasthan|https://rssb.rajasthan.gov.in|police-const
mp-police|MP Police Constable|एमपी पुलिस कॉन्स्टेबल|PO|M|MPESB Madhya Pradesh|https://esb.mp.gov.in|police-const
mp-police-si|MP Police Sub-Inspector|एमपी पुलिस सब-इंस्पेक्टर|PO|G|MPESB Madhya Pradesh|https://esb.mp.gov.in|police-si
haryana-police|Haryana Police Constable (HSSC)|हरियाणा पुलिस कॉन्स्टेबल|PO|M|HSSC Haryana|https://hssc.gov.in|police-const
tn-police|TN Police Constable (TNUSRB)|टीएन पुलिस कॉन्स्टेबल (टीएनयूएसआरबी)|PO|M|TNUSRB Tamil Nadu|https://www.tnusrb.tn.gov.in|police-const
kerala-police|Kerala Police Constable|केरल पुलिस कॉन्स्टेबल|PO|M|Kerala PSC|https://www.keralapsc.gov.in|police-const
up-si|UP Police Sub-Inspector|यूपी पुलिस सब-इंस्पेक्टर|PO|G|UP Police Recruitment & Promotion Board|https://uppbpb.gov.in|police-si
wb-police|West Bengal Police Constable|पश्चिम बंगाल पुलिस कॉन्स्टेबल|PO|M|West Bengal Police Recruitment Board|https://wbpolice.gov.in|police-const
punjab-police|Punjab Police Constable|पंजाब पुलिस कॉन्स्टेबल|PO|M|PSSSB Punjab|https://sssb.punjab.gov.in|police-const
gujarat-lrd|Gujarat LRD (Lokrakshak)|गुजरात एलआरडी (लोकरक्षक)|PO|M|Gujarat Police Recruitment Board|https://lrd.gujarat.gov.in|police-const
odisha-si|Odisha Police SI|ओडिशा पुलिस एसआई|PO|G|Odisha Police|https://odishapolice.gov.in|police-si
assam-police|Assam Police Constable (SLPRB)|असम पुलिस कॉन्स्टेबल|PO|M|SLPRB Assam|https://slprbassam.in|police-const
delhi-police|Delhi Police Constable (SSC)|दिल्ली पुलिस कॉन्स्टेबल (एसएससी)|PO|M|Staff Selection Commission (SSC)|https://ssc.gov.in|police-const
capf-ac|UPSC CAPF – Assistant Commandant|यूपीएससी सीएपीएफ – असिस्टेंट कमांडेंट|PO|G|Union Public Service Commission (UPSC)|https://upsc.gov.in|upsc-capf
cisf-const|CISF Constable (Tradesman)|सीआईएसएफ कॉन्स्टेबल (ट्रेड्समैन)|PO|M|CISF / SSC|https://cisf.gov.in|police-const
up-judicial|UP Judicial Services (PCS-J)|यूपी न्यायिक सेवा (पीसीएस-जे)|J|G|UPPSC Uttar Pradesh|https://uppsc.up.nic.in|judicial
rj-judicial|Rajasthan Judicial Services (RJS)|राजस्थान न्यायिक सेवा (आरजेएस)|J|G|RPSC Rajasthan|https://rpsc.rajasthan.gov.in|judicial
mp-judicial|MP Judicial Services (MPJS)|एमपी न्यायिक सेवा|J|G|MPPSC Madhya Pradesh|https://www.mppsc.mp.gov.in|judicial
bihar-judicial|Bihar Judicial Services (BJS)|बिहार न्यायिक सेवा|J|G|BPSC Bihar|https://bpsc.bih.nic.in|judicial
delhi-judicial|Delhi Judicial Services (DJS)|दिल्ली न्यायिक सेवा|J|G|Delhi High Court|https://delhihighcourt.nic.in|judicial
aibe|All India Bar Exam (AIBE)|ऑल इंडिया बार परीक्षा (एआईबीई)|PR|P|Bar Council of India|https://www.barcouncilofindia.org|aibe
ctet|CTET (Central Teacher Eligibility Test)|सीटीईटी (केंद्रीय शिक्षक पात्रता परीक्षा)|T|G|Central Board of Secondary Education (CBSE)|https://ctet.nic.in|ctet
uptet|UPTET (Uttar Pradesh)|यूपीटीईटी (उत्तर प्रदेश)|T|G|UP Basic Education Board|https://updeled.gov.in|tet
htet|HTET (Haryana)|एचटीईटी (हरियाणा)|T|G|BSEH Haryana|https://bseh.org.in|tet
rtet|RTET (Rajasthan)|आरटेट (राजस्थान)|T|G|RBSE Rajasthan|https://rajeduboard.rajasthan.gov.in|tet
mp-tet|MP TET Varg I / II|एमपी टीईटी वर्ग I / II|T|G|MPESB Madhya Pradesh|https://esb.mp.gov.in|tet
bihar-tet|Bihar TET / STET|बिहार टीईटी / एसटीईटी|T|G|BSEB Bihar|https://bsebtet.bihar.gov.in|tet
wb-slst|WB SLST (School Service)|डब्ल्यूबी एसएलएसटी (स्कूल सेवा)|T|G|WBSSC West Bengal|https://wbssc.gov.in|tet
ap-dsc|AP DSC (Teacher Recruitment)|एपी डीएसई (शिक्षक भर्ती)|T|G|Government of Andhra Pradesh|https://apdsc.apcfss.in|dsc
tg-dsc|TG DSC (Teacher Recruitment)|टीजी डीएसई (शिक्षक भर्ती)|T|G|Government of Telangana|https://schooledu.telangana.gov.in|dsc
kvs-prt|KVS PRT / TGT / PGT|केवीएस पीआरटी / टीजीटी / पीजीटी|T|G|Kendriya Vidyalaya Sangathan (KVS)|https://kvsangathan.nic.in|kvs
nvs-teacher|NVS (Navodaya) Teacher|एनवीएस (नवोदय) शिक्षक|T|G|Navodaya Vidyalaya Samiti|https://navodaya.gov.in|kvs
dsssb-teacher|DSSSB Teacher (PRT / TGT / PGT)|डीएसएसएसबी शिक्षक|T|G|DSSSB Delhi|https://dsssb.delhi.gov.in|dsc
nda|NDA & NA (National Defence Academy)|एनडीए व एनए (राष्ट्रीय रक्षा अकादमी)|AF|I|Union Public Service Commission (UPSC)|https://upsc.gov.in|upsc-nda
cds|CDS (Combined Defence Services)|सीडीएस (संयुक्त रक्षा सेवाएँ)|AF|G|Union Public Service Commission (UPSC)|https://upsc.gov.in|upsc-cds
afcat|AFCAT (Air Force Common Admission)|एएफसीएटी (वायुसेना सामान्य प्रवेश)|AF|G|Indian Air Force|https://afcat.cdac.in|afcat
agniveer-army|Agniveer – Indian Army (CEE)|अग्निवीर – भारतीय थलसेना|AF|M|Indian Army|https://joinindianarmy.nic.in|agniveer
agniveer-navy|Agniveer – Indian Navy|अग्निवीर – भारतीय नौसेना|AF|M|Indian Navy|https://www.joinindiannavy.gov.in|agniveer
agniveer-iaf|Agniveer Vayu – Indian Air Force|अग्निवीर वायु – भारतीय वायुसेना|AF|M|Indian Air Force|https://agnipathvayu.cdac.in|agniveer
coast-guard|Indian Coast Guard Navik / Yantrik|भारतीय तटरक्षक नाविक / यांत्रिक|AF|M|Indian Coast Guard|https://joincoastguard.gov.in|agniveer
tes|Indian Army TES (Technical Entry Scheme)|भारतीय सेना टीईएस (तकनीकी प्रवेश योजना)|AF|I|Indian Army|https://joinindianarmy.nic.in|tes
ssb|SSB Interview (Service Selection Board)|एसएसबी इंटरव्यू (सेवा चयन बोर्ड)|AF|G|Ministry of Defence|https://joinindianarmy.nic.in|ssb
inet|INET (Indian Navy Entrance Test)|इनेट (भारतीय नौसेना प्रवेश परीक्षा)|AF|G|Indian Navy|https://www.joinindiannavy.gov.in|afcat
ca-foundation|CA Foundation (ICAI)|सीए फाउंडेशन (आईसीएआई)|PR|P|Institute of Chartered Accountants of India (ICAI)|https://www.icai.org|ca
ca-inter|CA Intermediate (ICAI)|सीए इंटरमीडिएट (आईसीएआई)|PR|P|Institute of Chartered Accountants of India (ICAI)|https://www.icai.org|ca
ca-final|CA Final (ICAI)|सीए फाइनल (आईसीएआई)|PR|P|Institute of Chartered Accountants of India (ICAI)|https://www.icai.org|ca
cs-foundation|CS Foundation (ICSI)|सीएस फाउंडेशन (आईसीएसआई)|PR|P|Institute of Company Secretaries of India (ICSI)|https://www.icsi.edu|cs
cs-executive|CS Executive (ICSI)|सीएस एग्जीक्यूटिव (आईसीएसआई)|PR|P|Institute of Company Secretaries of India (ICSI)|https://www.icsi.edu|cs
cs-professional|CS Professional (ICSI)|सीएस प्रोफेशनल (आईसीएसआई)|PR|P|Institute of Company Secretaries of India (ICSI)|https://www.icsi.edu|cs
cma-foundation|CMA Foundation (ICMAI)|सीएमए फाउंडेशन (आईसीएमएआई)|PR|P|Institute of Cost Accountants of India (ICMAI)|https://www.icmai.in|cma
cma-inter|CMA Intermediate (ICMAI)|सीएमए इंटरमीडिएट (आईसीएमएआई)|PR|P|Institute of Cost Accountants of India (ICMAI)|https://www.icmai.in|cma
cma-final|CMA Final (ICMAI)|सीएमए फाइनल (आईसीएमएआई)|PR|P|Institute of Cost Accountants of India (ICMAI)|https://www.icmai.in|cma
fmge|FMGE (Screening Test for Foreign Medical Graduates)|एफएमजीई (विदेशी चिकित्सा स्नातक स्क्रीनिंग)|PR|P|NBEMS|https://nbe.edu.in|fmge
cfa|CFA (Level I / II / III, India)|सीएफए (लेवल I / II / III, भारत)|PR|P|CFA Institute|https://www.cfainstitute.org|cfa
ielts|IELTS (Academic / General Training)|आईईएलटीएस (एकेडमिक / जनरल ट्रेनिंग)|IN|A|IDP / British Council|https://www.ielts.org|ielts
toefl|TOEFL iBT|टोफ़ेल आईबीटी|IN|A|ETS|https://www.ets.org/toefl|toefl
pte|PTE Academic|पीटीई एकेडमिक|IN|A|Pearson|https://www.pearsonpte.com|pte
gre|GRE General Test|जीआरई जनरल टेस्ट|IN|A|ETS|https://www.ets.org/gre|gre
gmat|GMAT Focus|जीमैट फ़ोकस|IN|A|GMAC|https://www.mba.com|gmat
sat|SAT (College Board)|एसएटी (कॉलेज बोर्ड)|IN|A|College Board|https://satsuite.collegeboard.org|sat
`;
