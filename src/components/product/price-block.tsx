import { money } from "@/lib/money";
import type { Product } from "@/lib/products";
import { useVip } from "@/lib/vip";
import { cn } from "@/lib/cn";

export function PriceBlock({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const isVip = useVip((s) => s.isVip);
  return (
    <div className={cn("flex flex-col gap-0.5", className)}>
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <span className={cn("text-base font-semibold", isVip ? "text-subtle line-through" : "text-plexus")}>
          {money(product.retail)}
        </span>
        <span className={cn("text-sm", isVip ? "font-semibold text-plexus" : "text-muted")}>
          {money(product.vip)} {isVip ? "VIP price" : "For VIP Customers"}
        </span>
      </div>
      {product.optionsNote ? (
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">{product.optionsNote}</p>
      ) : null}
    </div>
  );
}
