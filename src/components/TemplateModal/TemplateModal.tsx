import { useEffect } from "react";
import type { SolutionTemplate } from "@/types";
import { metricByTemplate } from "@/data/metrics";
import { templates } from "@/data/templates";
import { difficultyClass } from "@/utils/format";

interface Props {
  template: SolutionTemplate | null;
  onClose: () => void;
  onOpenTemplate: (t: SolutionTemplate) => void;
}

const JOURNEY = [
  { title: "Assess Local Problem" },
  { title: "Contact Partners" },
  { title: "Secure Funding" },
  { title: "Execute Solution" },
  { title: "Measure Impact" },
];

export function TemplateModal({ template, onClose, onOpenTemplate }: Props) {
  useEffect(() => {
    if (!template) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [template, onClose]);

  if (!template) return null;
  const metric = metricByTemplate(template.id);
  const related = templates.filter(t => t.category === template.category && t.id !== template.id).slice(0, 3);

  return (
    <div className="sp-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="sp-modal" onClick={(e) => e.stopPropagation()}>
        <div className="sp-modal__head">
          <div>
            <span className="sp-modal__id">{template.id} · {template.category}</span>
            <h2 className="sp-modal__title" id="modal-title">{template.problem}</h2>
            <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className={`sp-badge ${difficultyClass(template.difficulty)}`}>
                {template.difficulty} · {template.difficultyNote}
              </span>
              <span className="sp-badge" style={{ background: "var(--sp-cream)", color: "var(--sp-ink-soft)" }}>
                📍 {template.locality}
              </span>
            </div>
          </div>
          <button className="sp-modal__close" onClick={onClose} aria-label="Close dialog">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
          </button>
        </div>

        <div className="sp-modal__body">
          <div className="sp-section">
            <span className="sp-section__label">Problem context</span>
            <p className="sp-section__body" style={{ margin: 0 }}>{template.summary}</p>
          </div>

          <div className="sp-action-grid">
            <div className="sp-action-card">
              <div className="sp-action-card__h">Short-term · 0–3 months</div>
              <div className="sp-action-card__b">{template.shortTermAction}</div>
            </div>
            <div className="sp-action-card sp-action-card--long">
              <div className="sp-action-card__h">Long-term · 6m–2yr</div>
              <div className="sp-action-card__b">{template.longTermAction}</div>
            </div>
          </div>

          <div className="sp-section">
            <span className="sp-section__label">Lead solver</span>
            <div className="sp-section__body">{template.leadSolver}</div>
          </div>

          <div className="sp-section">
            <span className="sp-section__label">Support solvers</span>
            <div className="sp-tag-row">
              {template.supportSolvers.map((s) => <span key={s} className="sp-tag">{s}</span>)}
            </div>
          </div>

          <div className="sp-section">
            <span className="sp-section__label">Partner organisations</span>
            <div className="sp-tag-row">
              {template.partnerOrgs.map((s) => <span key={s} className="sp-tag">🤝 {s}</span>)}
            </div>
          </div>

          <div className="sp-section">
            <span className="sp-section__label">Funding sources</span>
            <div className="sp-tag-row">
              {template.fundingSources.map((s) => <span key={s} className="sp-tag">💰 {s}</span>)}
            </div>
          </div>

          <div className="sp-section">
            <span className="sp-section__label">SevaPremi tech features</span>
            <div className="sp-tag-row">
              {template.techFeatures.map((s) => <span key={s} className="sp-tag">⚙️ {s}</span>)}
            </div>
          </div>

          {metric && (
            <div className="sp-section">
              <span className="sp-section__label">KPI targets · {metric.metric}</span>
              <div className="sp-kpi-row">
                <div><div className="sp-kpi-item__l">Baseline 2026</div><div className="sp-kpi-item__v">{metric.baseline}</div></div>
                <div><div className="sp-kpi-item__l">Year 1 · 2027</div><div className="sp-kpi-item__v">{metric.yearOneTarget}</div></div>
                <div><div className="sp-kpi-item__l">Year 3 · 2029</div><div className="sp-kpi-item__v">{metric.yearThreeTarget}</div></div>
              </div>
            </div>
          )}

          <div className="sp-section">
            <span className="sp-section__label">Expert verifier</span>
            <div className="sp-section__body">✅ {template.expertVerifier}</div>
          </div>

          <div className="sp-section">
            <span className="sp-section__label">How to implement · Adoption journey</span>
            <ol className="sp-journey" aria-label="Adoption journey">
              {JOURNEY.map((step, i) => (
                <li className="sp-step" key={step.title}>
                  <div className="sp-step__num">{i + 1}</div>
                  <div className="sp-step__title">{step.title}</div>
                  {i < JOURNEY.length - 1 && <span className="sp-step__line" aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </div>

          {related.length > 0 && (
            <div className="sp-section">
              <span className="sp-section__label">Related solutions · {template.category}</span>
              <div className="sp-related">
                {related.map((r) => (
                  <button
                    key={r.id}
                    className="sp-related__card"
                    onClick={() => onOpenTemplate(r)}
                    aria-label={`Open related template ${r.id}: ${r.problem}`}
                  >
                    <span className="sp-related__id">{r.id}</span>
                    <span className="sp-related__name">{r.problem}</span>
                    <span className="sp-related__impact">{r.quickImpact}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="sp-modal__footer">
          <button className="sp-btn-ghost" onClick={onClose}>Close</button>
          <button className="sp-btn-primary">Adopt this template →</button>
        </div>
      </div>
    </div>
  );
}
