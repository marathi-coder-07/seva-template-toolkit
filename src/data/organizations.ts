import type { Organization, Expert, VulnerabilityZone } from "@/types";

export const organizations: Organization[] = [
  { name: "Mission Green Mumbai", type: "NGO", focus: "Urban pocket forests", description: "Pocket forests 100 sq.ft.+; replicable via WhatsApp.", website: "@MissionGreenMumbai", capabilities: ["Training", "Implementation"] },
  { name: "Vanashakti", type: "NGO", focus: "Mangroves & forests", description: "Mumbai mangrove and wetland protection; CRZ enforcement.", website: "vanashakti.in", capabilities: ["Training", "Implementation"] },
  { name: "Recykal", type: "Startup", focus: "Waste tech", description: "Digital marketplace connecting waste generators to recyclers.", website: "recykal.com", capabilities: ["Technology", "Implementation"] },
  { name: "Chakr Innovation", type: "Startup", focus: "Diesel soot capture", description: "Retrofits diesel generators to capture particulate matter.", website: "chakrinnovation.com", capabilities: ["Technology", "Implementation"] },
  { name: "Afforestt", type: "Startup", focus: "Miyawaki forests", description: "Designs Miyawaki forests for cities and companies.", website: "afforestt.com", capabilities: ["Training", "Implementation"] },
  { name: "Varaha", type: "Startup", focus: "Carbon farming", description: "Pays Indian farmers for carbon sequestration.", website: "varaha.earth", capabilities: ["Funding", "Technology"] },
];

export const experts: Expert[] = [
  { name: "Prof. Shyam Sunder Jyani", role: "Familial Forestry founder, Dungar College", keyWork: "1M+ trees, 200k families, UNCCD 2021 Award", follow: "familialforestry.org" },
  { name: "Sunita Narain", role: "DG, Centre for Science & Environment", keyWork: "Air pollution & waste policy — India's leading voice", follow: "cseindia.org" },
  { name: "Dr. Anjal Prakash", role: "Research Director, Bharti Institute ISB", keyWork: "IPCC AR6 author; South Asia urban climate risks", follow: "isb.edu" },
  { name: "Subhajit Mukherjee", role: "Founder, Mission Green Mumbai", keyWork: "3 lakh+ trees planted; pocket-forest training", follow: "@MissionGreenMumbai" },
  { name: "Arunabha Ghosh", role: "CEO, CEEW India", keyWork: "Climate finance, energy access, India NDC research", follow: "ceew.in" },
  { name: "Dr. Rajendra Shende", role: "Chairman, TERRE Policy Centre", keyWork: "Former UNEP Director; youth climate education", follow: "terrepolicycentre.com" },
];

export const vulnerabilityZones: VulnerabilityZone[] = [
  { subLocality: "Asalfa / Ghatkopar West hillslope", riskType: "Landslide", riskScore: 5, population: "~5,000", trend: "Worsening" },
  { subLocality: "LBS Marg Corridor", riskType: "Air + Heat", riskScore: 5, population: "~2 lakh daily", trend: "Critical" },
  { subLocality: "Pantnagar / Ghatkopar Nalla (East)", riskType: "Flood", riskScore: 4, population: "~80,000", trend: "Worsening" },
  { subLocality: "Vikhroli-Ghatkopar mangrove fringe", riskType: "Mangrove loss", riskScore: 4, population: "~20,000", trend: "High" },
  { subLocality: "Ghatkopar Station (1km)", riskType: "Heat island", riskScore: 4, population: "~5 lakh footfall", trend: "High" },
  { subLocality: "Tagore Nagar / Ramabai Colony", riskType: "Air + Heat", riskScore: 3, population: "~60,000", trend: "High" },
];
