import { create } from "zustand";

const KEY = "plexus-vip-v1";

type VipState = {
  isVip: boolean;
  name: string;
  hydrated: boolean;
  hydrate: () => void;
  login: (name: string) => void;
  logout: () => void;
};

function read(): { isVip: boolean; name: string } {
  if (typeof window === "undefined") return { isVip: false, name: "" };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { isVip: false, name: "" };
    const parsed = JSON.parse(raw) as { isVip?: boolean; name?: string };
    return { isVip: Boolean(parsed.isVip), name: parsed.name ?? "" };
  } catch {
    return { isVip: false, name: "" };
  }
}

export const useVip = create<VipState>((set) => ({
  isVip: false,
  name: "",
  hydrated: false,
  hydrate: () => set({ ...read(), hydrated: true }),
  login: (name) => {
    const next = { isVip: true, name };
    if (typeof window !== "undefined") localStorage.setItem(KEY, JSON.stringify(next));
    set({ ...next });
  },
  logout: () => {
    if (typeof window !== "undefined") localStorage.removeItem(KEY);
    set({ isVip: false, name: "" });
  },
}));
