import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PlexusLink } from "@/components/ui/plexus-button";

export const Route = createFileRoute("/join")({ component: JoinPage });

function JoinPage() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <h1 className="text-4xl font-bold text-ink">Join our community</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            Good things begin within. Start as a VIP Customer or build a business as a Brand Ambassador.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-2">
        <div className="rounded-xl border border-line p-8">
          <h2 className="text-2xl font-bold text-ink">VIP Customer</h2>
          <p className="mt-3 text-muted">
            Get the VIP experience with up to 25% off purchases, the opportunity to earn free products and referral
            savings, plus the convenience to subscribe.
          </p>
          <p className="mt-4 text-sm text-subtle">Sign up $9.95 (was $19.95) · Renewal $19.95 / year</p>
          <PlexusLink to="/login" className="mt-6">
            Join as VIP Customer
          </PlexusLink>
        </div>
        <div className="rounded-xl border border-line bg-ink p-8 text-paper">
          <h2 className="text-2xl font-bold">Brand Ambassador</h2>
          <p className="mt-3 text-paper/80">
            Build your life the way you want it with the opportunity to earn supplemental income — all while enjoying
            exclusive benefits and special savings.
          </p>
          <p className="mt-4 text-sm text-paper/60">Sign up $39.95 · Renewal $39.95 / year</p>
          <Link
            to="/login"
            className="mt-6 inline-flex rounded-pill border border-paper bg-paper px-8 py-2.5 text-sm font-semibold text-ink hover:bg-cream"
          >
            Join as Brand Ambassador
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <h2 className="mb-6 text-2xl font-bold text-ink">Compare Options</h2>
        <div className="overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="bg-fog text-ink">
              <tr>
                <th className="px-4 py-3 font-semibold">Features</th>
                <th className="px-4 py-3 font-semibold">VIP Customer</th>
                <th className="px-4 py-3 font-semibold">Brand Ambassador</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Quality Products", vip: true, amb: true },
                { label: "Discounts up to 25%", vip: true, amb: true },
                { label: "Referral Link", vip: true, amb: true },
                { label: "Earn Commissions¤", vip: false, amb: true },
                { label: "Business Tools", vip: false, amb: true },
                { label: "Plexus Favorites Variety Pack (3)", vip: false, amb: true },
                { label: "Opportunity Guide (1)", vip: false, amb: true },
              ].map((row) => (
                <tr key={row.label} className="border-t border-line">
                  <td className="px-4 py-3">{row.label}</td>
                  <td className="px-4 py-3">{row.vip ? <Check className="size-4 text-plexus" /> : "—"}</td>
                  <td className="px-4 py-3">{row.amb ? <Check className="size-4 text-plexus" /> : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <img src="/plexus/ambassador.jpg" alt="Ambassadors" className="mt-10 w-full rounded-xl object-cover" />
        <p className="mt-6 text-xs text-subtle">
          ¤ Plexus makes no income or profit guarantees. In 2025, the average annual earnings for all Ambassadors were
          $771.
        </p>
      </section>
    </div>
  );
}
