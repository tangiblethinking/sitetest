import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { searchProducts } from "@/lib/products";
import { money } from "@/lib/money";

export function SearchDialog({
  open,
  onClose,
  onGo,
}: {
  open: boolean;
  onClose: () => void;
  onGo: (path: string) => void;
}) {
  const [q, setQ] = useState("");
  const results = useMemo(() => (q.trim() ? searchProducts(q).slice(0, 8) : []), [q]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label="Search products">
      <button type="button" className="absolute inset-0 bg-ink/40" aria-label="Close search" onClick={onClose} />
      <div className="relative mx-auto mt-16 w-[min(640px,calc(100%-1.5rem))] overflow-hidden rounded-xl bg-paper shadow-2xl">
        <div className="flex items-center gap-2 border-b border-line px-4">
          <Search className="size-4 text-subtle" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search Gut Health, Slim, MegaX…"
            className="h-14 flex-1 bg-transparent text-base outline-none"
          />
          <button type="button" className="size-11" aria-label="Close" onClick={onClose}>
            <X className="size-4" />
          </button>
        </div>
        <ul className="max-h-[60vh] overflow-auto p-2">
          {results.map((p) => (
            <li key={p.slug}>
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left hover:bg-cream"
                onClick={() => onGo(`/product/${p.slug}`)}
              >
                <img src={p.image} alt="" className="size-12 rounded-md object-cover bg-fog" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{p.name}</p>
                  <p className="text-xs text-muted">{money(p.retail)}</p>
                </div>
              </button>
            </li>
          ))}
          {q.trim() && results.length === 0 ? (
            <li className="px-4 py-8 text-center text-sm text-muted">No products match “{q}”.</li>
          ) : null}
          {!q.trim() ? (
            <li className="px-4 py-8 text-center text-sm text-muted">Try Slim, MegaX, Armor, or Reset.</li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}
