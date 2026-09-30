import { useEffect, useState } from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { ChevronDown, Menu, Search, ShoppingBag, X } from "lucide-react";
import { CATEGORIES } from "@/lib/products";
import { cartCount, useCart } from "@/lib/cart";
import { useVip } from "@/lib/vip";
import { SearchDialog } from "./search-dialog";

const NAV = [
  { label: "Shop", to: "/shop", mega: true },
  { label: "Experience Plexus", to: "/experience" },
  { label: "About", to: "/about" },
  { label: "Resources", to: "/resources" },
  { label: "Join", to: "/join" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const items = useCart((s) => s.items);
  const count = cartCount(items);
  const isVip = useVip((s) => s.isVip);
  const name = useVip((s) => s.name);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="bg-ink px-4 py-2.5 text-center text-[13px] tracking-wide text-paper">
        Feel good. Give back.{" "}
        <Link to="/about" className="underline underline-offset-2 hover:text-cream">
          Learn more.
        </Link>
      </div>
      <header className="sticky top-0 z-50 border-b border-line bg-paper">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-md md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
            <Link to="/" className="inline-flex items-center" aria-label="Plexus Worldwide home">
              <img src="/plexus/logo_2026__1__2tg2.svg" alt="plexus" className="h-10 w-auto" />
            </Link>
            <nav className="ml-4 hidden md:block" aria-label="Primary">
              <ul className="flex items-center gap-6">
                {NAV.map((item) => (
                  <li
                    key={item.to}
                    className="relative"
                    onMouseEnter={() => item.mega && setShopOpen(true)}
                    onMouseLeave={() => item.mega && setShopOpen(false)}
                  >
                    <Link
                      to={item.to as "/"}
                      className="inline-flex items-center gap-1 py-5 text-sm font-medium text-ink hover:text-plexus"
                    >
                      {item.label}
                      {item.mega ? <ChevronDown className="size-3.5" /> : null}
                    </Link>
                    {item.mega && shopOpen ? (
                      <div className="absolute left-0 top-full z-50 w-[520px] rounded-b-xl border border-t-0 border-line bg-paper p-6 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-subtle">Shop by category</p>
                        <div className="grid grid-cols-2 gap-1">
                          {CATEGORIES.map((c) => (
                            <Link
                              key={c.slug}
                              to="/shop/$category"
                              params={{ category: c.slug }}
                              className="rounded-md px-3 py-2 text-sm text-ink hover:bg-cream hover:text-plexus"
                              onClick={() => setShopOpen(false)}
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/shop"
                          className="mt-3 inline-block px-3 text-sm font-semibold text-plexus hover:text-link"
                          onClick={() => setShopOpen(false)}
                        >
                          Shop all products →
                        </Link>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-1 sm:gap-3">
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="size-[18px]" />
            </button>
            <Link
              to="/login"
              className="hidden items-center gap-1.5 text-[13px] text-fg sm:inline-flex hover:text-plexus"
            >
              <img src="/plexus/myaccount__1__2tg2.svg" alt="" className="size-[18px]" />
              {isVip ? name || "My Account" : "Login"}
            </Link>
            <Link to="/help" className="hidden items-center gap-1.5 text-[13px] text-fg sm:inline-flex hover:text-plexus">
              <img src="/plexus/help__1__2tg2.svg" alt="" className="size-[18px]" />
              Help
            </Link>
            <Link to="/cart" className="relative inline-flex items-center gap-1.5 px-1 text-[13px] text-fg hover:text-plexus">
              <ShoppingBag className="size-[18px]" />
              <span className="hidden sm:inline">Cart</span>
              {count > 0 ? (
                <span className="absolute -right-1 -top-0.5 flex size-4 items-center justify-center rounded-full bg-plexus text-[10px] font-bold text-paper">
                  {count}
                </span>
              ) : null}
            </Link>
            <span className="hidden items-center gap-1.5 text-[13px] text-fg lg:inline-flex">
              <img src="/plexus/usa_2tg2.svg" alt="" className="h-3.5 w-5 rounded-[1px] object-cover" />
              US (EN)
            </span>
          </div>
        </div>
        {open ? (
          <div className="border-t border-line bg-paper md:hidden">
            <nav className="flex flex-col px-4 py-2">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to as "/"}
                  className="flex min-h-11 items-center border-b border-fog text-[15px] font-medium"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <p className="pt-3 text-xs font-semibold uppercase tracking-widest text-subtle">Categories</p>
              {CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  to="/shop/$category"
                  params={{ category: c.slug }}
                  className="flex min-h-11 items-center text-sm"
                  onClick={() => setOpen(false)}
                >
                  {c.label}
                </Link>
              ))}
              <Link to="/login" className="flex min-h-11 items-center text-sm" onClick={() => setOpen(false)}>
                {isVip ? "My Account" : "Login"}
              </Link>
              <Link to="/help" className="flex min-h-11 items-center text-sm" onClick={() => setOpen(false)}>
                Help
              </Link>
            </nav>
          </div>
        ) : null}
      </header>
      <SearchDialog
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        onGo={(path) => {
          setSearchOpen(false);
          router.history.push(path);
        }}
      />
    </>
  );
}
