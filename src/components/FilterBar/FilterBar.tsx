import type { Difficulty, Severity } from "@/types";

interface Props {
  categories: string[];
  category: string | null;
  setCategory: (v: string | null) => void;
  difficulty: Difficulty | null;
  setDifficulty: (v: Difficulty | null) => void;
  severity: Severity | null;
  setSeverity: (v: Severity | null) => void;
}

const difficulties: Difficulty[] = ["Low", "Medium", "High"];
const severities: Severity[] = ["Critical", "High", "Medium", "Low"];

export function FilterBar({
  categories, category, setCategory, difficulty, setDifficulty, severity, setSeverity,
}: Props) {
  const chip = (active: boolean, label: string, onClick: () => void) => (
    <button key={label} className={`sp-chip ${active ? "active" : ""}`} onClick={onClick}>{label}</button>
  );
  return (
    <div className="sp-filters" role="region" aria-label="Filters">
      <div className="sp-filter-group">
        <span className="sp-filter-group__label">Category</span>
        {chip(category === null, "All", () => setCategory(null))}
        {categories.map((c) => chip(category === c, c, () => setCategory(category === c ? null : c)))}
      </div>
      <div className="sp-filter-group">
        <span className="sp-filter-group__label">Difficulty</span>
        {difficulties.map((d) => chip(difficulty === d, d, () => setDifficulty(difficulty === d ? null : d)))}
      </div>
      <div className="sp-filter-group">
        <span className="sp-filter-group__label">Severity</span>
        {severities.map((s) => chip(severity === s, s, () => setSeverity(severity === s ? null : s)))}
      </div>
    </div>
  );
}
