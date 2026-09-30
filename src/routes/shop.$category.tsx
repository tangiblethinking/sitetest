import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CATEGORIES, categoryCopy, productsIn, type CategorySlug } from "@/lib/products";
import { ProductCard } from "@/components/product/product-card";
import { RewardsBar } from "@/components/layout/rewards-bar";

export const Route = createFileRoute("/shop/$category")({
  component: CategoryPage,
});

function isCategory(s: string): s is CategorySlug {
  return CATEGORIES.some((c) => c.slug === s);
}

function CategoryPage() {
  const { category } = Route.useParams();
  if (!isCategory(category)) throw notFound();
  const copy = categoryCopy[category];
  const list = productsIn(category);

  return (
    <div>
      <RewardsBar />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <p className="text-sm text-muted">
          <Link to="/shop" className="hover:text-plexus">
            Shop
          </Link>{" "}
          / {copy.title}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-ink">{copy.title}</h1>
        <p className="mt-2 max-w-2xl text-muted">{copy.lede}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to="/shop/$category"
              params={{ category: c.slug }}
              className={`rounded-pill border px-4 py-2 text-sm font-medium ${
                c.slug === category ? "border-plexus bg-plexus text-paper" : "border-line hover:border-plexus hover:text-plexus"
              }`}
            >
              {c.label}
            </Link>
          ))}
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        {list.length === 0 ? <p className="py-16 text-center text-muted">No products in this category yet.</p> : null}
      </div>
    </div>
  );
}
