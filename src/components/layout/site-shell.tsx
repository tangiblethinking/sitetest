import { useEffect } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { CookieBar } from "./cookie-bar";
import { useCart } from "@/lib/cart";
import { useVip } from "@/lib/vip";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const hydrateCart = useCart((s) => s.hydrate);
  const hydrateVip = useVip((s) => s.hydrate);

  useEffect(() => {
    hydrateCart();
    hydrateVip();
  }, [hydrateCart, hydrateVip]);

  return (
    <div className="flex min-h-dvh flex-col bg-paper text-fg">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <CookieBar />
    </div>
  );
}
