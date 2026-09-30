import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/resources")({ component: ResourcesPage });

const CARDS = [
  {
    title: "Product education",
    body: "Labels, suggested use, allergens, and pairing recommendations for every formula.",
    to: "/shop",
  },
  {
    title: "Income disclosure",
    body: "In 2025, the average annual earnings for all Ambassadors were $771. No income is guaranteed.",
    to: "/join",
  },
  {
    title: "60-day guarantee",
    body: "Full money-back guarantee, less shipping, if you are not pleased with your product results.",
    to: "/guarantee",
  },
  {
    title: "Stay Well Rewards",
    body: "Start a 100 PV+ subscription and earn free product through the Plexus Perks program.",
    to: "/join",
  },
  {
    title: "Help Center",
    body: "Shipping, subscriptions, Share a Cart, Plexus GO, and product FAQs.",
    to: "/help",
  },
  {
    title: "Science & microbiome",
    body: "Why we start in the gut — and how Slim, Bio Cleanse, and probiotics work as a system.",
    to: "/experience",
  },
];

function ResourcesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold text-ink">Resources</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Education, policies, and tools for Retail Customers, VIP Customers, and Brand Ambassadors.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((c) => (
          <Link key={c.title} to={c.to} className="rounded-xl border border-line p-6 hover:border-plexus">
            <h2 className="text-lg font-semibold text-ink">{c.title}</h2>
            <p className="mt-2 text-sm text-muted">{c.body}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-plexus">Open</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
