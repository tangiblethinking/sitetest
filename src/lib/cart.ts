import { create } from "zustand";
import { getProduct } from "./products";

const KEY = "plexus-cart-v1";

export type CartLine = { slug: string; qty: number };

type CartState = {
  items: CartLine[];
  hydrated: boolean;
  hydrate: () => void;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

function read(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartLine[];
    return Array.isArray(parsed) ? parsed.filter((l) => l.slug && l.qty > 0) : [];
  } catch {
    return [];
  }
}

function write(items: CartLine[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(items));
}

export const useCart = create<CartState>((set, get) => ({
  items: [],
  hydrated: false,
  hydrate: () => set({ items: read(), hydrated: true }),
  add: (slug, qty = 1) => {
    if (!getProduct(slug)) return;
    const items = [...get().items];
    const i = items.findIndex((l) => l.slug === slug);
    if (i >= 0) items[i] = { slug, qty: items[i].qty + qty };
    else items.push({ slug, qty });
    write(items);
    set({ items });
  },
  setQty: (slug, qty) => {
    const items = qty <= 0 ? get().items.filter((l) => l.slug !== slug) : get().items.map((l) => (l.slug === slug ? { slug, qty } : l));
    write(items);
    set({ items });
  },
  remove: (slug) => {
    const items = get().items.filter((l) => l.slug !== slug);
    write(items);
    set({ items });
  },
  clear: () => {
    write([]);
    set({ items: [] });
  },
}));

export function cartCount(items: CartLine[]) {
  return items.reduce((n, l) => n + l.qty, 0);
}
