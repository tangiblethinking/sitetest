import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { getProduct, relatedProducts } from "@/lib/products";
import { PriceBlock } from "@/components/product/price-block";
import { ProductCard } from "@/components/product/product-card";
import { PlexusButton } from "@/components/ui/plexus-button";
import { useCart } from "@/lib/cart";
import { RewardsBar } from "@/components/layout/rewards-bar";

export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);
  if (!product) throw notFound();
  const add = useCart((s) => s.add);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const related = relatedProducts(product);

  return (
    <div>
      <RewardsBar />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <p className="text-sm text-muted">
          <Link to="/shop" className="hover:text-plexus">
            Shop
          </Link>{" "}
          /{" "}
          <Link to="/shop/$category" params={{ category: product.category }} className="hover:text-plexus">
            {product.category.replaceAll("-", " ")}
          </Link>
        </p>
        <div className="mt-6 grid items-start gap-10 lg:grid-cols-2">
          <div className="rounded-xl bg-fog p-6">
            <img src={product.image} alt={product.name} className="mx-auto max-h-[480px] w-full object-contain" />
          </div>
          <div>
            {product.badge ? (
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-plexus">{product.badge}</p>
            ) : null}
            <h1 className="text-3xl font-bold text-ink">{product.name}</h1>
            <p className="mt-1 text-sm text-subtle">SKU {product.sku}</p>
            <p className="mt-4 text-muted">{product.blurb}</p>
            <div className="mt-5">
              <PriceBlock product={product} />
            </div>
            <p className="mt-1 text-xs text-subtle">
              {product.pv} PV retail · {product.vipPv} PV VIP
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
              {product.glutenFree ? <span className="rounded-sm bg-cream px-2 py-1">Gluten Free</span> : null}
              {product.vegetarian ? <span className="rounded-sm bg-cream px-2 py-1">Vegetarian</span> : null}
              {product.nonGmo ? <span className="rounded-sm bg-cream px-2 py-1">non-GMO</span> : null}
              <span className="rounded-sm bg-cream px-2 py-1">{product.form}</span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <label className="text-sm font-medium">
                Qty
                <select
                  className="ml-2 h-11 rounded-md border border-line bg-paper px-3"
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </label>
              <PlexusButton
                onClick={() => {
                  add(product.slug, qty);
                  setAdded(true);
                }}
              >
                Add to Cart
              </PlexusButton>
              {added ? (
                <span className="inline-flex items-center gap-1 text-sm font-medium text-sage">
                  <Check className="size-4" /> Added —{" "}
                  <Link to="/cart" className="underline">
                    View cart
                  </Link>
                </span>
              ) : null}
            </div>
            {product.included ? (
              <div className="mt-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-ink">What’s Included</h2>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                  {product.included.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink">Benefits</h2>
              <ul className="mt-2 space-y-2">
                {product.benefits.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-fg">
                    <Check className="mt-0.5 size-4 shrink-0 text-plexus" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-xs text-subtle">
              *These statements have not been evaluated by the Food and Drug Administration. This product is not
              intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <Link to="/guarantee" className="mt-3 inline-block text-sm font-semibold text-plexus">
              Product Guarantee and Returns
            </Link>
          </div>
        </div>
        {related.length ? (
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-ink">You may also like</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
