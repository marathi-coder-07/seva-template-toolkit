import type { Difficulty, Severity } from "@/types";

export const difficultyClass = (d: Difficulty) =>
  d === "Low" ? "sp-badge--low" : d === "Medium" ? "sp-badge--medium" : "sp-badge--high";

export const severityClass = (s: Severity) =>
  s === "Critical" ? "sp-severity--critical"
  : s === "High" ? "sp-severity--high"
  : s === "Medium" ? "sp-severity--medium" : "sp-severity--low";

export const initials = (name: string) =>
  name.replace(/\(.+\)/g, "").trim().split(/\s+/).slice(0, 2).map(s => s[0]).join("").toUpperCase();
