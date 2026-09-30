import { createFileRoute } from "@tanstack/react-router";
import { getProduct } from "@/lib/products";
import { ProductCard } from "@/components/product/product-card";
import { PlexusLink } from "@/components/ui/plexus-button";

export const Route = createFileRoute("/reset")({ component: ResetPage });

function ResetPage() {
  const reset = getProduct("reset");
  return (
    <div>
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plexus-soft">Plexus Reset™</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold leading-tight">
            Reset your metabolism, cravings, and gut.
          </h1>
          <p className="mt-3 text-xl text-paper/80">And lose up to 6 lbs. in 3 days!^</p>
          <PlexusLink to="/product/reset" className="mt-8">
            Shop Plexus Reset™
          </PlexusLink>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">Discover the difference</h2>
        <p className="mt-3 max-w-3xl text-muted">
          The components in Reset work together to maximize the benefits of fasting while minimizing the drawbacks of
          complete calorie restriction with 8 nutrient-dense products per day.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Hydration support", d: "Hydrate — Lemon Lime. Stay refreshed and replenished." },
            { t: "Hunger support", d: "Slim Hunger Control — Blood Orange, Lemon, Lime. Feel full longer.*" },
            { t: "Energy support", d: "Active — Starfruit Guava. Clean, focused energy as natural energy dips.*" },
            { t: "Nutrition support", d: "Lean Whey — Chocolate. Maintain lean muscle with a nourishing meal." },
            { t: "Smart Snack", d: "Blueberry Almond Crumble bar with 7 g of protein and prebiotic fiber." },
            { t: "Detox & digestion", d: "Restore — Lemon Berry. Detox, digestion, and appetite support." },
          ].map((s) => (
            <div key={s.t} className="rounded-xl border border-line p-6">
              <h3 className="font-semibold text-ink">{s.t}</h3>
              <p className="mt-2 text-sm text-muted">{s.d}</p>
            </div>
          ))}
        </div>
        {reset ? (
          <div className="mx-auto mt-12 max-w-sm">
            <ProductCard product={reset} />
          </div>
        ) : null}
        <p className="mt-8 text-xs text-subtle">
          ^Participants in the Plexus Reset clinical trial lost up to 6 pounds over 3 days and had a 1% reduction in
          body fat, primarily from fat rather than water weight.
        </p>
      </section>
    </div>
  );
}
