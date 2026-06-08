import type { SolutionTemplate } from "@/types";

export const templates: SolutionTemplate[] = [
  {
    id: "T-001",
    problem: "Urban Tree Cover Loss + Heat Island",
    category: "Green Cover",
    summary:
      "Familial Forestry drive — each family adopts and names one tree, scaling to 3 Miyawaki forests across Ghatkopar.",
    shortTermAction:
      "Organize a Familial Forestry drive: each family adopts 1 tree by name. Use MCGM free saplings. Target Pantnagar & Tagore Nagar first.",
    longTermAction:
      "Establish 3 Miyawaki forests (min 100 sq.m each) in Ghatkopar by Dec 2026. Partner Vanashakti for training.",
    leadSolver: "Citizens + SevaPremi Volunteers",
    supportSolvers: ["BMC T-Ward (free saplings)", "Vanashakti", "Mission Green Mumbai"],
    techFeatures: ["Tree adoption QR system", "Growth tracker", "Monthly leaderboard"],
    expertVerifier: "Prof. Shyam Sunder Jyani (familialforestry.org); BNHS Mumbai",
    difficulty: "Low",
    difficultyNote: "Proven model",
    locality: "Pantnagar, Tagore Nagar",
    severity: "High",
    partnerOrgs: ["Mission Green Mumbai", "Vanashakti", "BMC T-Ward"],
    fundingSources: ["CAMPA Fund", "MCGM Green Budget"],
  },
  {
    id: "T-002",
    problem: "Air Pollution – Vehicle Exhaust (LBS Marg)",
    category: "Air Quality",
    summary:
      "Live CPCB AQI widget, Car-Free Sunday pilot, and a long-term push for cycle lanes + EV charging at Ghatkopar Metro.",
    shortTermAction:
      "Install CPCB AQI API widget on SevaPremi showing live Ghatkopar AQI. Run 'Car-Free Sunday' pilot on 1 lane.",
    longTermAction:
      "Petition MMRDA / BMC for dedicated cycle lane on LBS Marg. Facilitate EV charging station near Ghatkopar Metro.",
    leadSolver: "Citizens + Corporators",
    supportSolvers: ["MPCB", "Chakr Innovation", "MMRDA"],
    techFeatures: ["AQI live feed widget", "EV scheme guide", "Petition builder"],
    expertVerifier: "Dr. Anjal Prakash (ISB); MPCB air team; CSE India",
    difficulty: "Medium",
    difficultyNote: "Needs political will",
    locality: "LBS Marg Corridor",
    severity: "Critical",
    partnerOrgs: ["Chakr Innovation", "MPCB", "CSE India"],
    fundingSources: ["NCAP Funds", "CSR (Auto OEMs)"],
  },
  {
    id: "T-003",
    problem: "Plastic Waste – Nalla & Road Littering",
    category: "Waste",
    summary:
      "Monthly nalla cleanups, Recykal digital pickup pilot, and a 500m Zero Plastic Zone around Ghatkopar Station.",
    shortTermAction:
      "Monthly cleanup drives at Pantnagar nalla (post on SevaPremi events). Partner Recykal for digital collection points.",
    longTermAction:
      "Declare 500m radius around Ghatkopar Station as Zero Plastic Zone. Partner MCGM + local merchants.",
    leadSolver: "Citizens + MCGM",
    supportSolvers: ["Recykal", "Awaaz Foundation", "Local shop owners"],
    techFeatures: ["GPS complaint portal", "Recykal integration", "Ward cleanliness scorecard"],
    expertVerifier: "Sunita Narain (CSE); MCGM SWM Dept",
    difficulty: "Medium",
    difficultyNote: "Behaviour change required",
    locality: "Pantnagar Nalla, Ghatkopar Station",
    severity: "High",
    partnerOrgs: ["Recykal", "Awaaz Foundation", "MCGM SWM"],
    fundingSources: ["EPR Credits", "Plastic Waste Management Rules"],
  },
  {
    id: "T-004",
    problem: "Monsoon Flooding – Drain Blockage",
    category: "Flood & Water",
    summary:
      "Community drain audit, GIS-linked drain status map and BMC escalation tool before every monsoon.",
    shortTermAction:
      "June 2026: SevaPremi-organized community drain cleaning event. Map 10 blocked drains in T-Ward.",
    longTermAction:
      "GIS-linked drain status map. Regular pre-monsoon citizen audit. BMC escalation tool on platform.",
    leadSolver: "Citizens + BMC T-Ward",
    supportSolvers: ["NDMA", "Local corporator", "Hydraulics Dept"],
    techFeatures: ["Drain map (Google Maps embed)", "Flood complaint form", "Pre-monsoon checklist"],
    expertVerifier: "BMC Hydraulics; NDMA India",
    difficulty: "Low",
    difficultyNote: "Community action led",
    locality: "Pantnagar, low-lying East zones",
    severity: "Critical",
    partnerOrgs: ["NDMA", "BMC Hydraulics"],
    fundingSources: ["NDMA Heat & Flood Action Plan", "MCGM Disaster Cell"],
  },
  {
    id: "T-005",
    problem: "Low Solar Adoption in Societies",
    category: "Clean Energy",
    summary:
      "Solar ROI calculator on SevaPremi, PM Surya Ghar guide, and group purchase pilot for 5 societies in Ghatkopar West.",
    shortTermAction:
      "Solar savings calculator on SevaPremi: enter electricity bill → see solar ROI. Spread PM Surya Ghar scheme info.",
    longTermAction:
      "Facilitate group purchase of solar for 5 societies in Ghatkopar West. Negotiate bulk installer deal.",
    leadSolver: "Citizens + RWAs",
    supportSolvers: ["MNRE", "MEDA", "Tata Power Solar", "Waaree"],
    techFeatures: ["Solar calculator", "Scheme guide", "Society comparison tool", "Installer directory"],
    expertVerifier: "MNRE; MEDA Maharashtra; IIT Bombay Energy Science dept",
    difficulty: "Medium",
    difficultyNote: "Upfront cost barrier",
    locality: "Ghatkopar West societies",
    severity: "Medium",
    partnerOrgs: ["Tata Power Solar", "Waaree", "MEDA"],
    fundingSources: ["PM Surya Ghar (₹30k–₹78k subsidy)", "MEDA Net-Metering"],
  },
  {
    id: "T-006",
    problem: "Youth Climate Unawareness",
    category: "Education",
    summary:
      "JeevanShala 1-day school workshop pilot, scaling into youth-led school audits and an annual Youth Climate Award.",
    shortTermAction:
      "JeevanShala pilot: 1-day climate workshop in 2 Ghatkopar schools (July 2026). Use gamified learning.",
    longTermAction:
      "Quarterly school program. Youth-led audits of school energy + waste. Annual Ghatkopar Youth Climate Award.",
    leadSolver: "Youth + Schools",
    supportSolvers: ["Youth for Climate India", "Fridays for Future India", "TERRE Policy"],
    techFeatures: ["Workshop booking form", "Youth pledge wall", "School leaderboard"],
    expertVerifier: "Dr. Rajendra Shende (TERRE Policy Centre); school principals",
    difficulty: "Low",
    difficultyNote: "Easily replicable",
    locality: "Ghatkopar schools (T-Ward)",
    severity: "Medium",
    partnerOrgs: ["TERRE Policy", "Fridays for Future India"],
    fundingSources: ["CSR Education", "SDG 4 grants"],
  },
  {
    id: "T-007",
    problem: "Construction Site Dust (Metro expansion)",
    category: "Air Quality",
    summary:
      "GPS-evidence dust complaint form with batched MPCB escalation and a long-term push for dust netting regulation.",
    shortTermAction:
      "Deploy construction dust complaint form. Collect GPS evidence. Submit batch to MPCB + BMC via SevaPremi.",
    longTermAction:
      "Advocate for mandatory dust netting regulation + real-time air monitoring near construction sites.",
    leadSolver: "Citizens + MPCB",
    supportSolvers: ["BMC T-Ward", "Metro Rail Corp", "CSE India"],
    techFeatures: ["GPS complaint form", "MPCB escalation button", "Site compliance tracker"],
    expertVerifier: "MPCB; CSE India pollution team",
    difficulty: "Medium",
    difficultyNote: "Regulatory complexity",
    locality: "Ghatkopar East metro zones",
    severity: "High",
    partnerOrgs: ["MPCB", "Metro Rail Corp"],
    fundingSources: ["NGT Penalty Pool", "NCAP Funds"],
  },
  {
    id: "T-008",
    problem: "Heat Stress – No Shade Infrastructure",
    category: "Green Cover",
    summary:
      "Map shadeless bus stops & routes, petition BMC for shade, and run a cool-roofs + rooftop garden scheme.",
    shortTermAction:
      "Map top 10 bus stops + walking routes in Ghatkopar with no shade. Petition BMC for shade structures.",
    longTermAction:
      "Cool roofs program for housing societies. Rooftop garden incentive scheme. Urban forest corridor along Eastern Hwy.",
    leadSolver: "Citizens + BMC",
    supportSolvers: ["MCGM", "MEDA", "Urban planners", "RWAs"],
    techFeatures: ["Heat map (satellite data)", "Shade audit form", "Cool roof guide"],
    expertVerifier: "Dr. Anjal Prakash; Subhajit Mukherjee (Mission Green Mumbai)",
    difficulty: "Medium",
    difficultyNote: "Coordination heavy",
    locality: "Ghatkopar Station 1km radius",
    severity: "High",
    partnerOrgs: ["Mission Green Mumbai", "MCGM"],
    fundingSources: ["Heat Action Plan (NDMA)", "MEDA Cool Roof"],
  },
];

export const categories = Array.from(new Set(templates.map((t) => t.category)));
