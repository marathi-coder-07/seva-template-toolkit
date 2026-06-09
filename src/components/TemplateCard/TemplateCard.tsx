import type { SolutionTemplate } from "@/types";
import { difficultyClass, severityClass } from "@/utils/format";

interface Props {
  template: SolutionTemplate;
  onOpen: () => void;
  onHover: () => void;
  isActive?: boolean;
}

export function TemplateCard({ template: t, onOpen, onHover, isActive }: Props) {
  return (
    <article
      className={`sp-card ${isActive ? "is-active" : ""}`}
      onMouseEnter={onHover}
      onFocus={onHover}
      onClick={onHover}
      tabIndex={0}
      role="button"
      aria-pressed={isActive}
      aria-labelledby={`title-${t.id}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <div className="sp-card__top">
        <span className="sp-card__id">{t.id}</span>
        <div className="sp-card__badges">
          <span className={`sp-badge ${difficultyClass(t.difficulty)}`}>{t.difficulty} difficulty</span>
        </div>
      </div>
      <h3 className="sp-card__title" id={`title-${t.id}`}>{t.problem}</h3>
      <p className="sp-card__summary">{t.summary}</p>

      <div className="sp-card__meta">
        <div className="sp-card__locality">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M12 22s-7-7.58-7-12a7 7 0 1 1 14 0c0 4.42-7 12-7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>
          {t.locality}
        </div>
      </div>

      <div className="sp-proof-row" aria-label="Social proof">
        <span className="sp-proof">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="m5 12 5 5L20 7"/></svg>
          Verified by 6 experts
        </span>
        <span className="sp-proof">📍 Recommended for Ghatkopar</span>
        <span className="sp-proof">👥 Used by local communities</span>
      </div>

      <div className="sp-card__impact" aria-label="Expected impact">
        <span>{t.quickImpact}</span>
      </div>

      <div className="sp-card__footer">
        <span className="sp-card__sev"><span className={`sp-severity-dot ${severityClass(t.severity)}`} />{t.severity} severity</span>
        <button
          className="sp-card__cta"
          onClick={(e) => { e.stopPropagation(); onOpen(); }}
          aria-label={`View details for ${t.problem}`}
        >
          View details
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
        </button>
      </div>
    </article>
  );
}
