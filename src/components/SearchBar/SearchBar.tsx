import { useDebounced } from "@/hooks/useDebounced";
import { useEffect, useState } from "react";

interface Props {
  value: string;
  onChange: (v: string) => void;
  count: number;
}

export function SearchBar({ value, onChange, count }: Props) {
  const [local, setLocal] = useState(value);
  const debounced = useDebounced(local, 180);
  useEffect(() => { onChange(debounced); }, [debounced, onChange]);

  return (
    <div className="sp-search" role="search">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
      <input
        type="text"
        placeholder="Search templates — try 'air', 'flood', 'solar'…"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        aria-label="Search solution templates"
      />
      <span className="sp-search__count">{count} {count === 1 ? "template" : "templates"}</span>
    </div>
  );
}
