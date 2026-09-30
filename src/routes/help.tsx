import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/help")({ component: HelpPage });

const FAQS = [
  {
    q: "Where do I find suggested use and labels?",
    a: "Open any product, then review Benefits, What’s Included, and the Product Guarantee link. Full supplement facts live on each physical label.",
  },
  {
    q: "How does VIP pricing work?",
    a: "VIP Customers save up to 25% versus retail. Log in to see VIP prices applied in the cart. Annual membership is $19.95 after a promotional $9.95 sign-up.",
  },
  {
    q: "What is Stay Well Rewards?",
    a: "Start a 100 PV+ subscription to earn free product credits. PV (point value) is listed on every product page.",
  },
  {
    q: "Can I share a cart?",
    a: "Brand Ambassadors and VIP Customers can build a cart and share a pre-loaded link with retail or new VIP customers.",
  },
];

function HelpPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-ink">Help Center</h1>
      <p className="mt-2 text-muted">
        Common questions about products, VIP savings, and your orders. Need more? Start at the{" "}
        <Link to="/shop" className="font-semibold text-plexus">
          shop
        </Link>{" "}
        or{" "}
        <Link to="/login" className="font-semibold text-plexus">
          sign in
        </Link>
        .
      </p>
      <dl className="mt-10 space-y-6">
        {FAQS.map((f) => (
          <div key={f.q} className="border-b border-line pb-6">
            <dt className="font-semibold text-ink">{f.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{f.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
