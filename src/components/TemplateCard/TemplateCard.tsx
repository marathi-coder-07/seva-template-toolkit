import type { SolutionTemplate } from "@/types";
import { difficultyClass, severityClass } from "@/utils/format";

interface Props {
  template: SolutionTemplate;
  onOpen: () => void;
  onHover: () => void;
}

export function TemplateCard({ template: t, onOpen, onHover }: Props) {
  return (
    <article
      className="sp-card"
      onMouseEnter={onHover}
      onFocus={onHover}
      tabIndex={0}
      aria-labelledby={`title-${t.id}`}
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
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s-7-7.58-7-12a7 7 0 1 1 14 0c0 4.42-7 12-7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>
          {t.locality}
        </div>
        <div><strong>Verified by:</strong>&nbsp;<span style={{color: "var(--sp-ink-soft)"}}>{t.expertVerifier.split(";")[0]}</span></div>
      </div>
      <div className="sp-card__footer">
        <span className="sp-card__sev"><span className={`sp-severity-dot ${severityClass(t.severity)}`} />{t.severity} severity</span>
        <button className="sp-card__cta" onClick={onOpen} aria-label={`View details for ${t.problem}`}>
          View details
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
        </button>
      </div>
    </article>
  );
}
