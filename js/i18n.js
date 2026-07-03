// ============================================================
// LANGUAGE DICTIONARY — English / Telugu / Hindi
// To fix a translation: find the key, edit the text, commit.
// {name} {since} {doSince} {team} {city} {years} are filled
// automatically from config.js.
// NOTE: Telugu/Hindi drafted by AI — please have a native
// speaker (your father!) review before launch.
// ============================================================

const TRANSLATIONS = {
  en: {
    nav_home: "Home", nav_plans: "LIC Plans", nav_about: "About &amp; Awards",
    nav_knowledge: "Knowledge Centre", nav_agent: "Become an Agent", nav_contact: "Contact",
    footer_quicklinks: "Quick links", footer_wa: "WhatsApp us",
    btn_wa_chat: "💬 Chat on WhatsApp", btn_wa_chat_now: "💬 Chat on WhatsApp now",
    btn_enquiry: "Send an enquiry", btn_see_all: "See all LIC plans →",
    btn_join: "Join our team →", btn_story: "Our story &amp; awards →",

    hero_eyebrow: "Serving families since {since} · {city}",
    hero_title: "Life insurance shouldn't be confusing.<br />Let's find the right LIC plan for your family.",
    hero_lede: "No jargon. No pressure. Just honest guidance from a team that has served thousands of families for over {years} years.",

    need_h2: "What do you want to protect?",
    need_sub: "Choose your goal — we'll show you only the plans that fit.",
    need_family: "My Family", need_family_sub: "Term &amp; life cover",
    need_child: "My Child's Future", need_child_sub: "Education &amp; marriage",
    need_retire: "My Retirement", need_retire_sub: "Pension &amp; income",
    need_savings: "My Savings", need_savings_sub: "Guaranteed growth",
    need_health: "My Health", need_health_sub: "Cancer &amp; health cover",

    cred_years: "Years with LIC", cred_agents: "Agents in our team",
    cred_families: "Families served", cred_families_num: "1000s",
    cred_awards: "Awards &amp; recognitions",

    feat_title: "Most trusted LIC plans, explained simply",
    feat_sub: "These are the plans our families choose most often. Each one explained in plain language — who it's for, and what it actually gives you.",

    why_title: "Why families trust us",
    why_p1: "Buying insurance online gets you a policy. Buying through us gets you a <strong>relationship</strong> — someone your family can call at claim time, for premium reminders, revivals, loans against policy, and every service need for the next 30 years.",
    why_p2: "Led by <strong>{name}</strong>, an LIC Development Officer since {doSince} and an agent since {since}, our team of {team}+ agents serves families across {city}.",
    career_title: "Want a career with LIC?",
    career_p: "Become an LIC agent under an experienced Development Officer. Flexible hours, unlimited earning through commissions, full training and mentoring — <strong>your income grows with every policy you service, year after year.</strong>",

    cta_title: "Not sure where to start?",
    cta_sub: "Tell us your age and your goal. We'll suggest the right plan and a premium estimate within a few hours — free, no obligation.",

    plans_title: "LIC plans, organised by what you need",
    plans_sub: "Not forty plans in a list — just what fits your goal. Pick a category, read in plain language, and ask us for an exact premium for your age.",
    filter_all: "All plans",
    disc_title: "Recently discontinued plans",
    disc_sub: "LIC periodically withdraws and revises plans. If you hold any of these policies, <strong>your benefits continue exactly as per your policy bond</strong> — contact us for servicing, revival, loans, or to know the current equivalent plan.",
    test_title: "What our clients say",
    test_sub: "Real families we've served over the years.",
    btn_watch_video: "Watch video",

    label_protection: "Family Protection", label_child: "Child's Future",
    label_retirement: "Retirement &amp; Pension", label_savings: "Savings &amp; Growth",
    label_health: "Health Cover", label_discontinued: "Discontinued",
    plan_for_whom: "Who is this for?", plan_no: "Plan No.",
    btn_ask_wa: "Ask on WhatsApp", btn_quote: "Get a quote",

    contact_title: "Tell us what you need",
    contact_p: "A premium quote for your age, help choosing between plans, servicing an old policy, or a claim question — send it here and we'll respond <strong>within 24 hours</strong>. Prefer to talk? WhatsApp is fastest.",
    contact_phone: "Phone:", contact_email: "Email:", contact_office: "Office:",
    form_enquiry_title: "Send an enquiry",
    form_enquiry_sub: "Free, no obligation. We never share your details with anyone.",
    f_name: "Full name", f_phone: "Phone number", f_email_opt: "Email (optional)",
    f_email: "Email", f_need: "What are you looking for?", f_msg: "Your message",
    f_send: "Send enquiry", f_about: "Tell us briefly about yourself",
    f_submit_app: "Submit application",
    opt_1: "Protecting my family (term insurance)", opt_2: "My child's education / marriage",
    opt_3: "Retirement / pension plan", opt_4: "Savings &amp; guaranteed returns",
    opt_5: "Health / cancer cover", opt_6: "Help with an existing policy", opt_7: "Something else",
    ph_contact_msg: "e.g. I'm 34, married with one child, looking for a plan around ₹3,000/month…",
    ph_agent_msg: "e.g. I'm 28, working in retail, looking for additional income…",

    agent_title: "Build a career that pays you for years, not just once",
    agent_p1: "An LIC agency is one of the few careers where <strong>income compounds</strong>: you earn commission not only when a policy is sold, but every year the customer renews it. Agents who build a book of clients steadily create a growing, semi-passive income stream.",
    agent_p2: "It suits students, homemakers, retirees, and working professionals looking for a second income — flexible hours, no investment, and no income ceiling.",
    agent_why_title: "Why join our team?",
    agent_why_p: "You won't be figuring it out alone. Under <strong>{name}</strong> — Development Officer since {doSince}, LIC agent since {since} — you get structured training for the IRDAI licensing exam, joint customer calls in your first months, ready product knowledge, and the backing of a {team}-agent team that shares leads and learning.",
    agent_form_title: "Apply to join",
    agent_form_sub: "Fill this in and we'll call you to explain the process — no obligation.",
    agent_note: "Basic eligibility: 18+, passed Class 10 (12 in some areas), and willingness to clear the IRDAI agent exam — we train you for it.",
    how_title: "How it works",
    s1_y: "Step 1", s2_y: "Step 2", s3_y: "Step 3", s4_y: "Ongoing",
    s1_t: "Meet us", s1_d: "A frank conversation about whether this career suits you. We'll tell you honestly.",
    s2_t: "Training &amp; IRDAI exam", s2_d: "Mandatory training followed by the licensing exam. We prepare you thoroughly — most of our team cleared it on the first attempt.",
    s3_t: "Licence &amp; first policies", s3_d: "You receive your agency licence. We do joint calls with you until you're confident on your own.",
    s4_t: "Grow with the team", s4_d: "Monthly reviews, product updates, and mentoring toward LIC's club memberships and awards.",

    about_title: "A journey built on trust, one family at a time",
    milestones_title: "Milestones",
    tl1_t: "Joined LIC as an agent",
    tl3_t: "Promoted to Development Officer",
    tl3_d: "Began recruiting and mentoring a new generation of LIC agents.",
    tl4_y: "Today", tl4_t: "A team of {team}+ agents",
    tl4_d: "Serving families across {city} with the full range of LIC plans.",
    awards_title: "Awards &amp; recognitions",
    awards_sub: "Two decades of consistent performance, recognised by LIC year after year.",
    exp_title: "Experience you can call on",
    exp_sub: "Whether it's a new policy, a claim, or reviving an old one — talk to someone who has handled it thousands of times.",

    kn_title: "Common questions, honest answers",
    kn_sub: "The questions families actually ask us — answered without jargon. Can't find yours? Ask us on WhatsApp, and we might add it here.",
    guides_title: "Guides &amp; articles",

    form_sending: "Sending…",
    form_ok: "Thank you! We will contact you within 24 hours.",
    form_err: "Could not send right now. Please reach us on WhatsApp instead.",
    form_not_setup: "Form is being set up. Please contact us on WhatsApp or phone for now.",
  },

  te: {
    nav_home: "హోమ్", nav_plans: "LIC ప్లాన్‌లు", nav_about: "మా గురించి &amp; అవార్డులు",
    nav_knowledge: "నాలెడ్జ్ సెంటర్", nav_agent: "ఏజెంట్ అవ్వండి", nav_contact: "సంప్రదించండి",
    footer_quicklinks: "త్వరిత లింకులు", footer_wa: "వాట్సాప్ చేయండి",
    btn_wa_chat: "💬 వాట్సాప్‌లో చాట్ చేయండి", btn_wa_chat_now: "💬 ఇప్పుడే వాట్సాప్‌లో చాట్ చేయండి",
    btn_enquiry: "సంప్రదింపు పంపండి", btn_see_all: "అన్ని LIC ప్లాన్‌లు చూడండి →",
    btn_join: "మా బృందంలో చేరండి →", btn_story: "మా కథ &amp; అవార్డులు →",

    hero_eyebrow: "{since} నుండి కుటుంబాలకు సేవలో · {city}",
    hero_title: "జీవిత బీమా గందరగోళంగా ఉండకూడదు.<br />మీ కుటుంబానికి సరైన LIC ప్లాన్ కనుక్కుందాం.",
    hero_lede: "పరిభాష లేదు. ఒత్తిడి లేదు. {years}+ సంవత్సరాలుగా వేలాది కుటుంబాలకు సేవ చేస్తున్న బృందం నుండి నిజాయితీ మార్గదర్శకత్వం.",

    need_h2: "మీరు దేనిని కాపాడుకోవాలనుకుంటున్నారు?",
    need_sub: "మీ లక్ష్యాన్ని ఎంచుకోండి — సరిపోయే ప్లాన్‌లే చూపిస్తాం.",
    need_family: "నా కుటుంబం", need_family_sub: "టర్మ్ &amp; జీవిత బీమా",
    need_child: "నా పిల్లల భవిష్యత్తు", need_child_sub: "చదువు &amp; పెళ్లి",
    need_retire: "నా పదవీ విరమణ", need_retire_sub: "పెన్షన్ &amp; ఆదాయం",
    need_savings: "నా పొదుపు", need_savings_sub: "హామీ వృద్ధి",
    need_health: "నా ఆరోగ్యం", need_health_sub: "క్యాన్సర్ &amp; ఆరోగ్య బీమా",

    cred_years: "LIC తో సంవత్సరాలు", cred_agents: "మా బృందంలో ఏజెంట్లు",
    cred_families: "సేవలందిన కుటుంబాలు", cred_families_num: "వేలాది",
    cred_awards: "అవార్డులు &amp; గుర్తింపులు",

    feat_title: "అత్యంత విశ్వసనీయ LIC ప్లాన్‌లు, సరళంగా వివరించాం",
    feat_sub: "మా కుటుంబాలు ఎక్కువగా ఎంచుకునే ప్లాన్‌లు ఇవే. ప్రతి ఒక్కటీ సులభ భాషలో — ఎవరికోసం, నిజంగా ఏమి ఇస్తుందో.",

    why_title: "కుటుంబాలు మమ్మల్ని ఎందుకు నమ్ముతాయి",
    why_p1: "ఆన్‌లైన్‌లో బీమా కొంటే పాలసీ వస్తుంది. మా ద్వారా కొంటే <strong>బంధం</strong> వస్తుంది — క్లెయిమ్ సమయంలో, ప్రీమియం గుర్తుచేతలకు, రివైవల్‌కు, పాలసీపై రుణాలకు — రాబోయే 30 ఏళ్లపాటు మీ కుటుంబం పిలవగల వ్యక్తి.",
    why_p2: "<strong>{name}</strong> నేతృత్వంలో — {doSince} నుండి LIC డెవలప్‌మెంట్ ఆఫీసర్, {since} నుండి ఏజెంట్ — మా {team}+ ఏజెంట్ల బృందం {city} అంతటా కుటుంబాలకు సేవలు అందిస్తోంది.",
    career_title: "LIC లో కెరీర్ కావాలా?",
    career_p: "అనుభవజ్ఞుడైన డెవలప్‌మెంట్ ఆఫీసర్ వద్ద LIC ఏజెంట్ అవ్వండి. సౌకర్యవంతమైన సమయాలు, కమీషన్ ద్వారా అపరిమిత ఆదాయం, పూర్తి శిక్షణ &amp; మార్గదర్శకత్వం — <strong>మీరు సేవ చేసే ప్రతి పాలసీతో మీ ఆదాయం ఏటేటా పెరుగుతుంది.</strong>",

    cta_title: "ఎక్కడ మొదలుపెట్టాలో తెలియడం లేదా?",
    cta_sub: "మీ వయసు, లక్ష్యం చెప్పండి. కొన్ని గంటల్లో సరైన ప్లాన్, ప్రీమియం అంచనా సూచిస్తాం — ఉచితం, ఎలాంటి నిబంధన లేదు.",

    plans_title: "మీ అవసరం ప్రకారం LIC ప్లాన్‌లు",
    plans_sub: "నలభై ప్లాన్‌ల జాబితా కాదు — మీ లక్ష్యానికి సరిపోయేవి మాత్రమే. వర్గం ఎంచుకోండి, సులభ భాషలో చదవండి, మీ వయసుకు కచ్చితమైన ప్రీమియం అడగండి.",
    filter_all: "అన్ని ప్లాన్‌లు",
    disc_title: "ఇటీవల నిలిపివేసిన ప్లాన్‌లు",
    disc_sub: "LIC ఎప్పటికప్పుడు ప్లాన్‌లను ఉపసంహరించి సవరిస్తుంది. ఈ పాలసీలు మీ వద్ద ఉంటే, <strong>మీ ప్రయోజనాలు పాలసీ బాండ్ ప్రకారం యథావిధిగా కొనసాగుతాయి</strong> — సేవలు, రివైవల్, రుణాలు లేదా ప్రస్తుత సమాన ప్లాన్ కోసం మమ్మల్ని సంప్రదించండి.",
    test_title: "మా క్లయింట్లు ఏమి చెప్తున్నారు",
    test_sub: "సంవత్సరాలుగా మేము సేవ చేసిన నిజమైన కుటుంబాలు.",
    btn_watch_video: "వీడియో చూడండి",

    label_protection: "కుటుంబ రక్షణ", label_child: "పిల్లల భవిష్యత్తు",
    label_retirement: "పదవీ విరమణ &amp; పెన్షన్", label_savings: "పొదుపు &amp; వృద్ధి",
    label_health: "ఆరోగ్య బీమా", label_discontinued: "నిలిపివేయబడింది",
    plan_for_whom: "ఇది ఎవరికోసం?", plan_no: "ప్లాన్ నం.",
    btn_ask_wa: "వాట్సాప్‌లో అడగండి", btn_quote: "కొటేషన్ పొందండి",

    contact_title: "మీకు ఏమి కావాలో చెప్పండి",
    contact_p: "మీ వయసుకు ప్రీమియం కొటేషన్, ప్లాన్ ఎంపికలో సహాయం, పాత పాలసీ సేవలు, క్లెయిమ్ ప్రశ్న — ఇక్కడ పంపండి, <strong>24 గంటల్లో</strong> స్పందిస్తాం. మాట్లాడాలనుకుంటే వాట్సాప్ అత్యంత వేగవంతం.",
    contact_phone: "ఫోన్:", contact_email: "ఇమెయిల్:", contact_office: "కార్యాలయం:",
    form_enquiry_title: "సంప్రదింపు పంపండి",
    form_enquiry_sub: "ఉచితం, నిబంధన లేదు. మీ వివరాలు ఎవరితోనూ పంచుకోము.",
    f_name: "పూర్తి పేరు", f_phone: "ఫోన్ నంబర్", f_email_opt: "ఇమెయిల్ (ఐచ్ఛికం)",
    f_email: "ఇమెయిల్", f_need: "మీకు ఏమి కావాలి?", f_msg: "మీ సందేశం",
    f_send: "పంపండి", f_about: "మీ గురించి క్లుప్తంగా చెప్పండి",
    f_submit_app: "దరఖాస్తు పంపండి",
    opt_1: "నా కుటుంబ రక్షణ (టర్మ్ బీమా)", opt_2: "పిల్లల చదువు / పెళ్లి",
    opt_3: "పదవీ విరమణ / పెన్షన్ ప్లాన్", opt_4: "పొదుపు &amp; హామీ రాబడులు",
    opt_5: "ఆరోగ్య / క్యాన్సర్ కవర్", opt_6: "ఉన్న పాలసీకి సహాయం", opt_7: "మరేదైనా",
    ph_contact_msg: "ఉదా: నా వయసు 34, ఒక బిడ్డ, నెలకు సుమారు ₹3,000 ప్లాన్ కావాలి…",
    ph_agent_msg: "ఉదా: నా వయసు 28, రిటైల్‌లో పని చేస్తున్నాను, అదనపు ఆదాయం కోసం…",

    agent_title: "ఒక్కసారి కాదు — ఏళ్ల తరబడి ఆదాయమిచ్చే కెరీర్ నిర్మించండి",
    agent_p1: "LIC ఏజెన్సీ అనేది <strong>ఆదాయం సమ్మిళితమయ్యే</strong> అరుదైన కెరీర్: పాలసీ అమ్మినప్పుడే కాదు, కస్టమర్ ప్రతి సంవత్సరం రెన్యూ చేసినప్పుడూ కమీషన్ వస్తుంది. క్లయింట్లను క్రమంగా పెంచుకునే ఏజెంట్లకు పెరుగుతూ ఉండే, పాక్షిక-నిష్క్రియ ఆదాయం ఏర్పడుతుంది.",
    agent_p2: "విద్యార్థులు, గృహిణులు, రిటైర్ అయినవారు, రెండో ఆదాయం కోరుకునే ఉద్యోగులకు ఇది సరిపోతుంది — సౌకర్యవంతమైన సమయాలు, పెట్టుబడి అవసరం లేదు, ఆదాయ పరిమితి లేదు.",
    agent_why_title: "మా బృందంలో ఎందుకు చేరాలి?",
    agent_why_p: "మీరు ఒంటరిగా నేర్చుకోవాల్సిన అవసరం లేదు. <strong>{name}</strong> వద్ద — {doSince} నుండి డెవలప్‌మెంట్ ఆఫీసర్, {since} నుండి LIC ఏజెంట్ — IRDAI లైసెన్సింగ్ పరీక్షకు క్రమబద్ధ శిక్షణ, తొలి నెలల్లో జాయింట్ కస్టమర్ కాల్స్, సిద్ధమైన ప్రోడక్ట్ పరిజ్ఞానం, లీడ్స్ &amp; అనుభవం పంచుకునే {team} మంది ఏజెంట్ల బృందం మద్దతు లభిస్తాయి.",
    agent_form_title: "చేరడానికి దరఖాస్తు చేయండి",
    agent_form_sub: "ఇది నింపండి — ప్రక్రియ వివరించడానికి మేమే కాల్ చేస్తాం. ఎలాంటి నిబంధన లేదు.",
    agent_note: "ప్రాథమిక అర్హత: 18+, 10వ తరగతి ఉత్తీర్ణత (కొన్ని ప్రాంతాల్లో 12వ), IRDAI ఏజెంట్ పరీక్ష రాయడానికి సంసిద్ధత — శిక్షణ మేమిస్తాం.",
    how_title: "ఇది ఎలా జరుగుతుంది",
    s1_y: "దశ 1", s2_y: "దశ 2", s3_y: "దశ 3", s4_y: "నిరంతరం",
    s1_t: "మమ్మల్ని కలవండి", s1_d: "ఈ కెరీర్ మీకు సరిపోతుందో లేదో నిజాయితీగా చెప్పే సంభాషణ.",
    s2_t: "శిక్షణ &amp; IRDAI పరీక్ష", s2_d: "తప్పనిసరి శిక్షణ తర్వాత లైసెన్సింగ్ పరీక్ష. మేము పూర్తిగా సిద్ధం చేస్తాం — మా బృందంలో చాలామంది మొదటి ప్రయత్నంలోనే ఉత్తీర్ణులయ్యారు.",
    s3_t: "లైసెన్స్ &amp; తొలి పాలసీలు", s3_d: "మీకు ఏజెన్సీ లైసెన్స్ వస్తుంది. మీకు ఆత్మవిశ్వాసం వచ్చేవరకు మేము మీతో కలిసి కస్టమర్లను కలుస్తాం.",
    s4_t: "బృందంతో ఎదగండి", s4_d: "నెలవారీ సమీక్షలు, ప్రోడక్ట్ అప్‌డేట్‌లు, LIC క్లబ్ సభ్యత్వాలు &amp; అవార్డుల దిశగా మార్గదర్శకత్వం.",

    about_title: "నమ్మకంతో నిర్మించిన ప్రయాణం — ఒక్కో కుటుంబంతో",
    milestones_title: "మైలురాళ్లు",
    tl1_t: "LIC ఏజెంట్‌గా ప్రారంభం",
    tl3_t: "డెవలప్‌మెంట్ ఆఫీసర్‌గా పదోన్నతి",
    tl3_d: "కొత్త తరం LIC ఏజెంట్ల నియామకం, శిక్షణ ప్రారంభం.",
    tl4_y: "నేడు", tl4_t: "{team}+ ఏజెంట్ల బృందం",
    tl4_d: "{city} అంతటా కుటుంబాలకు LIC ప్లాన్‌ల పూర్తి శ్రేణితో సేవలు.",
    awards_title: "అవార్డులు &amp; గుర్తింపులు",
    awards_sub: "రెండు దశాబ్దాల నిలకడైన పనితీరు — ఏటేటా LIC గుర్తింపు.",
    exp_title: "అవసరమైనప్పుడు పిలవగల అనుభవం",
    exp_sub: "కొత్త పాలసీ, క్లెయిమ్, లేదా పాత పాలసీ రివైవల్ — వేల సార్లు ఇవి చేసిన వారితో మాట్లాడండి.",

    kn_title: "సాధారణ ప్రశ్నలు, నిజాయితీ సమాధానాలు",
    kn_sub: "కుటుంబాలు నిజంగా అడిగే ప్రశ్నలు — పరిభాష లేకుండా సమాధానాలు. మీ ప్రశ్న లేకపోతే వాట్సాప్‌లో అడగండి — ఇక్కడ చేర్చవచ్చు. (సమాధానాలు ప్రస్తుతం ఇంగ్లిష్‌లో ఉన్నాయి.)",
    guides_title: "గైడ్‌లు &amp; వ్యాసాలు",

    form_sending: "పంపుతున్నాం…",
    form_ok: "ధన్యవాదాలు! 24 గంటల్లో మిమ్మల్ని సంప్రదిస్తాం.",
    form_err: "ప్రస్తుతం పంపలేకపోయాం. దయచేసి వాట్సాప్‌లో సంప్రదించండి.",
    form_not_setup: "ఫారం సిద్ధమవుతోంది. ప్రస్తుతానికి వాట్సాప్ లేదా ఫోన్ ద్వారా సంప్రదించండి.",
  },

  hi: {
    nav_home: "होम", nav_plans: "LIC प्लान", nav_about: "हमारे बारे में और पुरस्कार",
    nav_knowledge: "नॉलेज सेंटर", nav_agent: "एजेंट बनें", nav_contact: "संपर्क करें",
    footer_quicklinks: "त्वरित लिंक", footer_wa: "व्हाट्सएप करें",
    btn_wa_chat: "💬 व्हाट्सएप पर चैट करें", btn_wa_chat_now: "💬 अभी व्हाट्सएप पर चैट करें",
    btn_enquiry: "पूछताछ भेजें", btn_see_all: "सभी LIC प्लान देखें →",
    btn_join: "हमारी टीम से जुड़ें →", btn_story: "हमारी कहानी और पुरस्कार →",

    hero_eyebrow: "{since} से परिवारों की सेवा में · {city}",
    hero_title: "जीवन बीमा उलझन भरा नहीं होना चाहिए।<br />आइए आपके परिवार के लिए सही LIC प्लान चुनें।",
    hero_lede: "कोई जटिल शब्द नहीं। कोई दबाव नहीं। {years}+ वर्षों से हज़ारों परिवारों की सेवा कर रही टीम से ईमानदार सलाह।",

    need_h2: "आप क्या सुरक्षित करना चाहते हैं?",
    need_sub: "अपना लक्ष्य चुनें — हम केवल उपयुक्त प्लान दिखाएँगे।",
    need_family: "मेरा परिवार", need_family_sub: "टर्म और जीवन बीमा",
    need_child: "मेरे बच्चे का भविष्य", need_child_sub: "शिक्षा और विवाह",
    need_retire: "मेरी रिटायरमेंट", need_retire_sub: "पेंशन और आय",
    need_savings: "मेरी बचत", need_savings_sub: "गारंटीड वृद्धि",
    need_health: "मेरा स्वास्थ्य", need_health_sub: "कैंसर और स्वास्थ्य कवर",

    cred_years: "LIC के साथ वर्ष", cred_agents: "हमारी टीम में एजेंट",
    cred_families: "सेवा किए परिवार", cred_families_num: "हज़ारों",
    cred_awards: "पुरस्कार और सम्मान",

    feat_title: "सबसे भरोसेमंद LIC प्लान, सरल भाषा में",
    feat_sub: "ये वे प्लान हैं जो हमारे परिवार सबसे अधिक चुनते हैं। हर एक सरल भाषा में — किसके लिए है और वास्तव में क्या देता है।",

    why_title: "परिवार हम पर भरोसा क्यों करते हैं",
    why_p1: "ऑनलाइन बीमा खरीदने से पॉलिसी मिलती है। हमसे खरीदने पर <strong>रिश्ता</strong> मिलता है — क्लेम के समय, प्रीमियम रिमाइंडर, रिवाइवल, पॉलिसी पर लोन — अगले 30 वर्षों तक हर सेवा के लिए आपके परिवार का साथी।",
    why_p2: "<strong>{name}</strong> के नेतृत्व में — {doSince} से LIC डेवलपमेंट ऑफिसर, {since} से एजेंट — हमारी {team}+ एजेंटों की टीम {city} भर के परिवारों की सेवा करती है।",
    career_title: "LIC में करियर चाहते हैं?",
    career_p: "अनुभवी डेवलपमेंट ऑफिसर के अधीन LIC एजेंट बनें। लचीले घंटे, कमीशन से असीमित कमाई, पूरी ट्रेनिंग और मार्गदर्शन — <strong>हर पॉलिसी के साथ आपकी आय साल-दर-साल बढ़ती है।</strong>",

    cta_title: "समझ नहीं आ रहा कहाँ से शुरू करें?",
    cta_sub: "अपनी उम्र और लक्ष्य बताएं। कुछ घंटों में सही प्लान और प्रीमियम अनुमान देंगे — मुफ़्त, बिना किसी बाध्यता के।",

    plans_title: "आपकी ज़रूरत के अनुसार LIC प्लान",
    plans_sub: "चालीस प्लान की सूची नहीं — केवल वे जो आपके लक्ष्य के अनुरूप हैं। श्रेणी चुनें, सरल भाषा में पढ़ें, अपनी उम्र का सटीक प्रीमियम पूछें।",
    filter_all: "सभी प्लान",
    disc_title: "हाल में बंद हुए प्लान",
    disc_sub: "LIC समय-समय पर प्लान वापस लेकर संशोधित करता है। यदि आपके पास ये पॉलिसियाँ हैं, तो <strong>आपके लाभ पॉलिसी बॉन्ड के अनुसार जारी रहेंगे</strong> — सेवा, रिवाइवल, लोन या वर्तमान समकक्ष प्लान जानने के लिए संपर्क करें।",
    test_title: "हमारे ग्राहक क्या कहते हैं",
    test_sub: "वे परिवार जिनकी हमने वर्षों से सेवा की है।",
    btn_watch_video: "वीडियो देखें",

    label_protection: "परिवार सुरक्षा", label_child: "बच्चे का भविष्य",
    label_retirement: "रिटायरमेंट और पेंशन", label_savings: "बचत और वृद्धि",
    label_health: "स्वास्थ्य कवर", label_discontinued: "बंद हो चुका",
    plan_for_whom: "यह किसके लिए है?", plan_no: "प्लान नं.",
    btn_ask_wa: "व्हाट्सएप पर पूछें", btn_quote: "कोटेशन पाएं",

    contact_title: "बताएं आपको क्या चाहिए",
    contact_p: "अपनी उम्र का प्रीमियम कोटेशन, प्लान चुनने में मदद, पुरानी पॉलिसी की सेवा, या क्लेम का सवाल — यहाँ भेजें, <strong>24 घंटे में</strong> जवाब देंगे। बात करनी हो तो व्हाट्सएप सबसे तेज़ है।",
    contact_phone: "फ़ोन:", contact_email: "ईमेल:", contact_office: "कार्यालय:",
    form_enquiry_title: "पूछताछ भेजें",
    form_enquiry_sub: "मुफ़्त, बिना बाध्यता। आपकी जानकारी किसी से साझा नहीं करते।",
    f_name: "पूरा नाम", f_phone: "फ़ोन नंबर", f_email_opt: "ईमेल (वैकल्पिक)",
    f_email: "ईमेल", f_need: "आप क्या ढूंढ रहे हैं?", f_msg: "आपका संदेश",
    f_send: "भेजें", f_about: "अपने बारे में संक्षेप में बताएं",
    f_submit_app: "आवेदन भेजें",
    opt_1: "परिवार की सुरक्षा (टर्म बीमा)", opt_2: "बच्चे की शिक्षा / विवाह",
    opt_3: "रिटायरमेंट / पेंशन प्लान", opt_4: "बचत और गारंटीड रिटर्न",
    opt_5: "स्वास्थ्य / कैंसर कवर", opt_6: "मौजूदा पॉलिसी में मदद", opt_7: "कुछ और",
    ph_contact_msg: "जैसे: मेरी उम्र 34 है, एक बच्चा, लगभग ₹3,000/माह का प्लान चाहिए…",
    ph_agent_msg: "जैसे: मैं 28 का हूँ, रिटेल में काम करता हूँ, अतिरिक्त आय चाहता हूँ…",

    agent_title: "ऐसा करियर बनाएं जो सालों तक कमाई दे, एक बार नहीं",
    agent_p1: "LIC एजेंसी उन गिने-चुने करियर में है जहाँ <strong>आय कंपाउंड होती है</strong>: कमीशन सिर्फ पॉलिसी बेचने पर नहीं, बल्कि हर साल रिन्यूअल पर भी मिलता है। ग्राहक बढ़ाते रहने वाले एजेंट की आय बढ़ती हुई, अर्ध-निष्क्रिय धारा बन जाती है।",
    agent_p2: "यह छात्रों, गृहिणियों, सेवानिवृत्त लोगों और दूसरी आय चाहने वाले कामकाजी लोगों के लिए उपयुक्त है — लचीले घंटे, कोई निवेश नहीं, कोई आय सीमा नहीं।",
    agent_why_title: "हमारी टीम में क्यों जुड़ें?",
    agent_why_p: "आपको अकेले सीखना नहीं पड़ेगा। <strong>{name}</strong> के अधीन — {doSince} से डेवलपमेंट ऑफिसर, {since} से LIC एजेंट — आपको IRDAI लाइसेंस परीक्षा की व्यवस्थित ट्रेनिंग, शुरुआती महीनों में जॉइंट कस्टमर कॉल, तैयार प्रोडक्ट ज्ञान, और लीड व अनुभव साझा करने वाली {team} एजेंटों की टीम का सहारा मिलता है।",
    agent_form_title: "जुड़ने के लिए आवेदन करें",
    agent_form_sub: "इसे भरें — प्रक्रिया समझाने के लिए हम कॉल करेंगे। कोई बाध्यता नहीं।",
    agent_note: "मूल पात्रता: 18+, कक्षा 10 उत्तीर्ण (कुछ क्षेत्रों में 12), और IRDAI एजेंट परीक्षा की तैयारी — ट्रेनिंग हम देते हैं।",
    how_title: "यह कैसे होता है",
    s1_y: "चरण 1", s2_y: "चरण 2", s3_y: "चरण 3", s4_y: "निरंतर",
    s1_t: "हमसे मिलें", s1_d: "एक स्पष्ट बातचीत — यह करियर आपके लिए है या नहीं, हम ईमानदारी से बताएंगे।",
    s2_t: "ट्रेनिंग और IRDAI परीक्षा", s2_d: "अनिवार्य ट्रेनिंग के बाद लाइसेंस परीक्षा। हम पूरी तैयारी कराते हैं — हमारी टीम के अधिकांश पहले प्रयास में पास हुए।",
    s3_t: "लाइसेंस और पहली पॉलिसियाँ", s3_d: "आपको एजेंसी लाइसेंस मिलता है। आत्मविश्वास आने तक हम आपके साथ जॉइंट कॉल करते हैं।",
    s4_t: "टीम के साथ बढ़ें", s4_d: "मासिक समीक्षा, प्रोडक्ट अपडेट, और LIC क्लब सदस्यता व पुरस्कारों की ओर मार्गदर्शन।",

    about_title: "भरोसे पर बनी यात्रा — एक-एक परिवार के साथ",
    milestones_title: "मील के पत्थर",
    tl1_t: "LIC एजेंट के रूप में शुरुआत",
    tl3_t: "डेवलपमेंट ऑफिसर के रूप में पदोन्नति",
    tl3_d: "नई पीढ़ी के LIC एजेंटों की भर्ती और मार्गदर्शन शुरू।",
    tl4_y: "आज", tl4_t: "{team}+ एजेंटों की टीम",
    tl4_d: "{city} भर के परिवारों को LIC प्लान की पूरी श्रृंखला से सेवा।",
    awards_title: "पुरस्कार और सम्मान",
    awards_sub: "दो दशकों का लगातार प्रदर्शन — हर वर्ष LIC द्वारा सम्मानित।",
    exp_title: "अनुभव, जो आपके काम आए",
    exp_sub: "नई पॉलिसी हो, क्लेम हो, या पुरानी पॉलिसी का रिवाइवल — उनसे बात करें जिन्होंने यह हज़ारों बार किया है।",

    kn_title: "आम सवाल, ईमानदार जवाब",
    kn_sub: "वे सवाल जो परिवार वाकई पूछते हैं — बिना जटिल शब्दों के जवाब। आपका सवाल न मिले तो व्हाट्सएप पर पूछें — हम यहाँ जोड़ सकते हैं। (उत्तर अभी अंग्रेज़ी में हैं।)",
    guides_title: "गाइड और लेख",

    form_sending: "भेज रहे हैं…",
    form_ok: "धन्यवाद! हम 24 घंटे में संपर्क करेंगे।",
    form_err: "अभी नहीं भेज सके। कृपया व्हाट्सएप पर संपर्क करें।",
    form_not_setup: "फ़ॉर्म तैयार हो रहा है। अभी व्हाट्सएप या फ़ोन से संपर्क करें।",
  },
};

// ============================================================
// LANGUAGE ENGINE — no editing needed below this line
// ============================================================

const LANG_NAMES = { en: "EN", te: "తెలుగు", hi: "हिंदी" };
let currentLang = localStorage.getItem("siteLang") || "en";

function getLang() { return currentLang; }

function interpolateCfg(s) {
  const map = {
    name: SITE_CONFIG.agentName,
    since: SITE_CONFIG.agencySince,
    doSince: SITE_CONFIG.developmentOfficerSince,
    team: SITE_CONFIG.teamSize,
    city: SITE_CONFIG.city,
    years: new Date().getFullYear() - SITE_CONFIG.agencySince,
  };
  return s.replace(/\{(\w+)\}/g, (_, k) => (map[k] !== undefined ? map[k] : `{${k}}`));
}

function t(key) {
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const s = dict[key] !== undefined ? dict[key] : TRANSLATIONS.en[key];
  return interpolateCfg(s || "");
}

function applyLang(lang) {
  currentLang = TRANSLATIONS[lang] ? lang : "en";
  try { localStorage.setItem("siteLang", currentLang); } catch (e) {}
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    el.placeholder = t(el.getAttribute("data-i18n-ph"));
  });
  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === currentLang);
  });
  document.dispatchEvent(new CustomEvent("langchange"));
}

/* Build the EN | తెలుగు | हिंदी switcher in the header */
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header-inner");
  if (header) {
    const box = document.createElement("div");
    box.className = "lang-switch";
    ["en", "te", "hi"].forEach((code) => {
      const b = document.createElement("button");
      b.className = "lang-btn";
      b.dataset.lang = code;
      b.textContent = LANG_NAMES[code];
      b.setAttribute("aria-label", "Switch language to " + LANG_NAMES[code]);
      b.addEventListener("click", () => applyLang(code));
      box.appendChild(b);
    });
    const toggle = header.querySelector(".nav-toggle");
    header.insertBefore(box, toggle || null);
  }
  applyLang(currentLang);
});
