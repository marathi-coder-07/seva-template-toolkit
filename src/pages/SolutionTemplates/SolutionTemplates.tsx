import { useMemo, useState } from "react";
import { templates, categories } from "@/data/templates";
import type { Difficulty, Severity, SolutionTemplate } from "@/types";
import { Header } from "@/components/Header/Header";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { FilterBar } from "@/components/FilterBar/FilterBar";
import { TemplateCard } from "@/components/TemplateCard/TemplateCard";
import { ImpactPanel } from "@/components/ImpactPanel/ImpactPanel";
import { TemplateModal } from "@/components/TemplateModal/TemplateModal";
import { ExpertSection } from "@/components/ExpertSection/ExpertSection";
import { Footer } from "@/components/Footer/Footer";
import "@/styles/solution-templates.css";

export function SolutionTemplatesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [severity, setSeverity] = useState<Severity | null>(null);
  const [hovered, setHovered] = useState<SolutionTemplate | null>(templates[0]);
  const [open, setOpen] = useState<SolutionTemplate | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return templates.filter((t) => {
      if (category && t.category !== category) return false;
      if (difficulty && t.difficulty !== difficulty) return false;
      if (severity && t.severity !== severity) return false;
      if (q && !(t.problem.toLowerCase().includes(q) || t.summary.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [query, category, difficulty, severity]);

  return (
    <div className="sp-page">
      <Header />

      <section className="sp-hero">
        <div className="sp-hero__eyebrow">Solution Templates · Ghatkopar</div>
        <div className="sp-hero__rule" />
        <h1 className="sp-hero__title">
          Verified playbooks for <em>real local problems.</em>
        </h1>
        <p className="sp-hero__sub">
          Eight expert-verified solution templates — built on Ghatkopar T-Ward data, ready for citizens,
          RWAs, NGOs and ward officials to adopt and replicate.
        </p>
        <div className="sp-hero__meta">
          <span>📍 <strong>T-Ward Ghatkopar</strong></span>
          <span>👥 ~7.4 lakh residents</span>
          <span>🌳 2.92 lakh trees (rank #1 Mumbai)</span>
          <span>🌡️ AQI 65–80 µg/m³ PM2.5</span>
        </div>
      </section>

      <div className="sp-controls">
        <SearchBar value={query} onChange={setQuery} count={filtered.length} />
        <FilterBar
          categories={categories}
          category={category} setCategory={setCategory}
          difficulty={difficulty} setDifficulty={setDifficulty}
          severity={severity} setSeverity={setSeverity}
        />
      </div>

      <div className="sp-layout">
        <div className="sp-grid">
          {filtered.length === 0 ? (
            <div className="sp-empty">No templates match these filters yet. Try clearing one.</div>
          ) : (
            filtered.map((t) => (
              <TemplateCard
                key={t.id}
                template={t}
                onOpen={() => setOpen(t)}
                onHover={() => setHovered(t)}
              />
            ))
          )}
        </div>
        <ImpactPanel template={hovered} />
      </div>

      <ExpertSection />
      <Footer />
      <TemplateModal template={open} onClose={() => setOpen(null)} />
    </div>
  );
}
