export type Difficulty = "Low" | "Medium" | "High";
export type Severity = "Critical" | "High" | "Medium" | "Low";

export interface SolutionTemplate {
  id: string;
  problem: string;
  category: string;
  summary: string;
  shortTermAction: string;
  longTermAction: string;
  leadSolver: string;
  supportSolvers: string[];
  techFeatures: string[];
  expertVerifier: string;
  difficulty: Difficulty;
  difficultyNote: string;
  locality: string;
  severity: Severity;
  partnerOrgs: string[];
  fundingSources: string[];
}

export interface KpiMetric {
  templateId: string;
  metric: string;
  baseline: string;
  yearOneTarget: string;
  yearThreeTarget: string;
  source: string;
  sdg: string;
}

export interface Organization {
  name: string;
  type: string;
  focus: string;
  description: string;
  website: string;
}

export interface Expert {
  name: string;
  role: string;
  keyWork: string;
  follow: string;
}

export interface VulnerabilityZone {
  subLocality: string;
  riskType: string;
  riskScore: number;
  population: string;
  trend: string;
}
