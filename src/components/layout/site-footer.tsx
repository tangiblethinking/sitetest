import { Link } from "@tanstack/react-router";

const COLS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Shop",
    links: [
      { label: "All Products", to: "/shop" },
      { label: "Gut Health", to: "/shop/gut-health" },
      { label: "Weight Management", to: "/shop/weight-management" },
      { label: "Skin Health", to: "/shop/skin-health" },
      { label: "Combos", to: "/shop/combos" },
      { label: "Plexus Reset™", to: "/reset" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Plexus", to: "/about" },
      { label: "Our Community", to: "/about" },
      { label: "Experience Plexus", to: "/experience" },
      { label: "Resources", to: "/resources" },
      { label: "Careers", to: "/about" },
    ],
  },
  {
    title: "Opportunity",
    links: [
      { label: "Join as VIP", to: "/join" },
      { label: "Become an Ambassador", to: "/join" },
      { label: "Compare options", to: "/join" },
      { label: "Income disclosure", to: "/resources" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", to: "/help" },
      { label: "Product Guarantee", to: "/guarantee" },
      { label: "Login / My Account", to: "/login" },
      { label: "Cart", to: "/cart" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-fog text-muted">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <Link to="/" className="mb-8 inline-block">
          <img src="/plexus/logo_2026__1__2tg2.svg" alt="plexus" className="h-9 w-auto" />
        </Link>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COLS.map((col) => (
            <div key={col.title}>
              <h2 className="mb-3 border-b border-line pb-2 text-sm font-semibold uppercase tracking-wider text-ink">
                {col.title}
              </h2>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to as "/"} className="text-sm text-muted hover:text-plexus">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-8">
          <img src="/plexus/60-day-guarantee-sage_2tg2.svg" alt="60-day money-back guarantee" className="h-16 w-auto" />
          <img src="/plexus/DSA_2tg2.svg" alt="Direct Selling Association" className="h-10 w-auto" />
          <img src="/plexus/CRN_Member_HZ-bw_2tg2.webp" alt="Council for Responsible Nutrition" className="h-8 w-auto" />
        </div>
        <div className="mt-10 space-y-3 border-t border-line pt-6 text-xs leading-relaxed">
          <p>© {new Date().getFullYear()} Plexus Worldwide® — Founded in gut health. Experts in microbiome.</p>
          <p>
            ¤ Plexus makes no income or profit guarantees. Personal earnings and profits will vary. Your success depends
            on the amount of sales, effort, commitment, leadership abilities, economic and market conditions, and
            expenses incurred in operating your business. In 2025, the average annual earnings for all Ambassadors were
            $771.
          </p>
          <p>
            *These statements have not been evaluated by the Food and Drug Administration. This product is not intended
            to diagnose, treat, cure, or prevent any disease.
          </p>
          <p>9145 E Pima Center Parkway, Scottsdale, AZ 85255</p>
        </div>
      </div>
    </footer>
  );
}
