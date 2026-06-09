import { experts, organizations } from "@/data/organizations";
import { templates } from "@/data/templates";
import { initials } from "@/utils/format";

export function ExpertSection() {
  const verifiedCount = templates.length;
  const orgCount = organizations.length;
  const expertCount = experts.length;
  const localityCount = new Set(templates.map(t => t.locality)).size;

  return (
    <section className="sp-trust" aria-label="Trust & social proof">
      <div className="sp-trust__head">
        <span style={{ color: "var(--sp-orange)", fontSize: 12, letterSpacing: "0.2em", fontWeight: 700 }}>
          VERIFIED · COMMUNITY · ACCOUNTABLE
        </span>
        <h2 className="sp-trust__title">Built on expert knowledge, owned by Ghatkopar</h2>
        <p className="sp-trust__sub">
          Every template is verified by named experts and backed by partner organisations
          already operating in T-Ward. No anonymous advice.
        </p>
      </div>

      <div className="sp-trust__stats">
        <div className="sp-stat"><div className="sp-stat__num">{verifiedCount}</div><div className="sp-stat__lbl">Verified templates</div></div>
        <div className="sp-stat"><div className="sp-stat__num">{expertCount}</div><div className="sp-stat__lbl">Expert verifiers</div></div>
        <div className="sp-stat"><div className="sp-stat__num">{orgCount}+</div><div className="sp-stat__lbl">Partner orgs & NGOs</div></div>
        <div className="sp-stat"><div className="sp-stat__num">{localityCount}</div><div className="sp-stat__lbl">Ghatkopar sub-localities</div></div>
      </div>

      <div className="sp-trust__cols">
        <div className="sp-trust__col">
          <h3>Expert verifiers</h3>
          {experts.map((e) => (
            <div className="sp-expert" key={e.name}>
              <div className="sp-avatar">{initials(e.name)}</div>
              <div>
                <div className="sp-expert__name">{e.name}</div>
                <div className="sp-expert__role">{e.role}</div>
                <div className="sp-expert__work">{e.keyWork}</div>
                <div className="sp-expert__verify">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m5 12 5 5L20 7"/></svg>
                  Verified · follow at {e.follow}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sp-trust__col">
          <h3>Partner organisations</h3>
          <div className="sp-org-grid">
            {organizations.map((o) => (
              <div className="sp-org" key={o.name}>
                <div className="sp-org__type">{o.type} · {o.focus}</div>
                <div className="sp-org__name">{o.name}</div>
                <div className="sp-org__desc">{o.description}</div>
                <div className="sp-org__caps" aria-label="Capabilities">
                  {o.capabilities.map((c) => <span key={c} className="sp-cap">{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
