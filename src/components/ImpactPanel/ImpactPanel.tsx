import { metricByTemplate } from "@/data/metrics";
import type { SolutionTemplate } from "@/types";

interface Props { template: SolutionTemplate | null; }

export function ImpactPanel({ template }: Props) {
  const metric = template ? metricByTemplate(template.id) : null;

  if (!template || !metric) {
    return (
      <aside className="sp-impact" aria-label="Impact projection">
        <span className="sp-impact__eyebrow">Impact Projection</span>
        <h3 className="sp-impact__title">Hover any template to preview its measurable impact</h3>
        <p className="sp-impact__empty">
          Each SevaPremi template ships with baseline numbers and Year 1 / Year 3 targets sourced from
          CPCB, BMC, MEDA and our expert verifiers.
        </p>
      </aside>
    );
  }

  return (
    <aside className="sp-impact" aria-live="polite">
      <span className="sp-impact__eyebrow">Impact Projection · {template.id}</span>
      <h3 className="sp-impact__title">{template.problem}</h3>
      <div className="sp-impact__metric">📐 {metric.metric}</div>

      <div className="sp-impact__row">
        <span className="sp-impact__row-label">Baseline · 2026</span>
        <span className="sp-impact__row-value">{metric.baseline}</span>
      </div>
      <div className="sp-impact__row sp-impact__row--year1">
        <span className="sp-impact__row-label">Year 1 target · 2027</span>
        <span className="sp-impact__row-value">{metric.yearOneTarget}</span>
      </div>
      <div className="sp-impact__row sp-impact__row--year3">
        <span className="sp-impact__row-label">Year 3 target · 2029</span>
        <span className="sp-impact__row-value">{metric.yearThreeTarget}</span>
      </div>

      <div className="sp-impact__source">
        <strong>KPI source:</strong> {metric.source}<br />
        <strong>Aligned to:</strong> {metric.sdg}
      </div>
    </aside>
  );
}
