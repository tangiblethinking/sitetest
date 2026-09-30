import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { PriceBlock } from "./price-block";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <Link to="/product/$slug" params={{ slug: product.slug }} className="relative block bg-fog">
        {product.badge ? (
          <span className="absolute left-3 top-3 z-10 rounded-sm bg-plexus px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-paper">
            {product.badge}
          </span>
        ) : product.topSeller ? (
          <span className="absolute left-3 top-3 z-10 rounded-sm bg-ink px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-paper">
            Top Seller
          </span>
        ) : null}
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2 px-4 pb-5 pt-3">
        <h3 className="text-[15px] font-semibold leading-snug text-ink">
          <Link to="/product/$slug" params={{ slug: product.slug }} className="hover:text-plexus">
            {product.name}
          </Link>
        </h3>
        <PriceBlock product={product} />
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="mt-auto pt-2 text-sm font-semibold text-plexus hover:text-link"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
