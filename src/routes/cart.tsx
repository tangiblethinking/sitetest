import { createFileRoute, Link } from "@tanstack/react-router";
import { getProduct } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { useVip } from "@/lib/vip";
import { money } from "@/lib/money";
import { PlexusButton, PlexusLink } from "@/components/ui/plexus-button";

export const Route = createFileRoute("/cart")({ component: CartPage });

function CartPage() {
  const items = useCart((s) => s.items);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const clear = useCart((s) => s.clear);
  const isVip = useVip((s) => s.isVip);

  const lines = items
    .map((l) => {
      const product = getProduct(l.slug);
      if (!product) return null;
      const unit = isVip ? product.vip : product.retail;
      return { ...l, product, unit, line: unit * l.qty };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const subtotal = lines.reduce((n, l) => n + l.line, 0);
  const vipSubtotal = items.reduce((n, l) => {
    const p = getProduct(l.slug);
    return n + (p ? p.vip * l.qty : 0);
  }, 0);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-ink">Cart</h1>
      {lines.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-muted">Your bag is empty.</p>
          <PlexusLink to="/shop" className="mt-6">
            Shop Now
          </PlexusLink>
        </div>
      ) : (
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_280px]">
          <ul className="divide-y divide-line border-y border-line">
            {lines.map((l) => (
              <li key={l.slug} className="flex gap-4 py-5">
                <img src={l.product.image} alt="" className="size-24 rounded-md bg-fog object-contain" />
                <div className="min-w-0 flex-1">
                  <Link to="/product/$slug" params={{ slug: l.slug }} className="font-semibold text-ink hover:text-plexus">
                    {l.product.name}
                  </Link>
                  <p className="text-sm text-plexus">{money(l.unit)}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <select
                      className="h-10 rounded-md border border-line px-2"
                      value={l.qty}
                      onChange={(e) => setQty(l.slug, Number(e.target.value))}
                      aria-label={`Quantity for ${l.product.name}`}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                    <button type="button" className="text-sm text-muted hover:text-plexus" onClick={() => remove(l.slug)}>
                      Remove
                    </button>
                  </div>
                </div>
                <p className="font-semibold">{money(l.line)}</p>
              </li>
            ))}
          </ul>
          <aside className="h-fit rounded-xl border border-line p-6">
            <h2 className="font-semibold text-ink">Order summary</h2>
            <div className="mt-4 flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-semibold">{money(subtotal)}</span>
            </div>
            {!isVip ? (
              <p className="mt-2 text-xs text-muted">
                VIP price would be {money(vipSubtotal)}.{" "}
                <Link to="/login" className="font-semibold text-plexus">
                  Login to save
                </Link>
              </p>
            ) : (
              <p className="mt-2 text-xs text-sage">VIP savings applied.</p>
            )}
            <p className="mt-2 text-xs text-subtle">Shipping calculated at checkout. Preview shop — payment is simulated.</p>
            <PlexusButton
              className="mt-6 w-full max-w-none"
              onClick={() => {
                clear();
                alert("Thanks! This preview shop does not process real payments. Your bag has been cleared.");
              }}
            >
              Checkout
            </PlexusButton>
          </aside>
        </div>
      )}
    </div>
  );
}
