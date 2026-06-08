export function Header() {
  return (
    <header className="sp-header">
      <div className="sp-header__inner">
        <div className="sp-logo">
          <div className="sp-logo__main">Seva<span>Premi</span></div>
          <div className="sp-logo__sub">सेवाप्रेमी</div>
        </div>
        <button className="sp-loc-pill" aria-label="Change locality">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 22s-7-7.58-7-12a7 7 0 1 1 14 0c0 4.42-7 12-7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>
          Ghatkopar
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <nav className="sp-nav" aria-label="Primary">
          <a href="#">SevaMilan</a>
          <a href="#">JeevanShala</a>
          <a href="#">Problems</a>
          <a href="#" className="active">Solution Templates</a>
          <a href="#">Solvers</a>
          <a href="#">Missions</a>
          <a href="#">Stories</a>
        </nav>
        <div className="sp-header__right">
          <button className="sp-link-btn">Log in</button>
          <button className="sp-join-btn">Join</button>
        </div>
      </div>
    </header>
  );
}
