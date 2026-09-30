import { createFileRoute, Link } from "@tanstack/react-router";
import { CATEGORIES, products } from "@/lib/products";
import { ProductCard } from "@/components/product/product-card";
import { RewardsBar } from "@/components/layout/rewards-bar";

export const Route = createFileRoute("/shop")({ component: ShopPage });

function ShopPage() {
  return (
    <div>
      <RewardsBar />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plexus">Shop</p>
        <h1 className="mt-1 text-3xl font-bold text-ink">Clean gut health and microbiome products</h1>
        <p className="mt-2 max-w-2xl text-muted">
          Shop by category or browse everything — retail and VIP pricing on every item.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to="/shop/$category"
              params={{ category: c.slug }}
              className="rounded-pill border border-line px-4 py-2 text-sm font-medium hover:border-plexus hover:text-plexus"
            >
              {c.label}
            </Link>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
