import { createFileRoute, Link } from "@tanstack/react-router";
import { featuredProducts, products } from "@/lib/products";
import { ProductCard } from "@/components/product/product-card";
import { PlexusLink } from "@/components/ui/plexus-button";

export const Route = createFileRoute("/")({ component: Home });

const CATS = [
  { category: "gut-health", label: "Gut Health" },
  { category: "weight-management", label: "Weight Management" },
  { category: "skin-health", label: "Skin Health" },
  { category: "active-lifestyle", label: "Active Lifestyle" },
  { category: "general-nutrition", label: "General Nutrition" },
  { category: "womens-health", label: "Women's Health" },
] as const;

function Home() {
  const featured = featuredProducts();
  const extra = products.filter((p) => p.slug === "favorites-variety-pack")[0];

  return (
    <div>
      <section className="bg-tan">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-14">
          <div className="grid max-w-xl grid-cols-[1.1fr_0.9fr] grid-rows-[1fr_auto] gap-3.5">
            <div className="row-start-1 min-h-52 overflow-hidden rounded-xl bg-tan-deep sm:min-h-72">
              <img
                src="/plexus/hero-sale.webp"
                alt="Fall favorites products"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-h-52 overflow-hidden rounded-xl bg-tan-deep sm:min-h-72">
              <img src="/plexus/gut-health.png" alt="Gut Health System" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-2 grid min-h-32 grid-cols-[80px_1fr] overflow-hidden rounded-xl bg-cream">
              <div className="flex items-center justify-center bg-sand px-0 py-3 text-[13px] font-bold tracking-[0.2em] text-ink [writing-mode:vertical-rl] rotate-180">
                FAVORITES
              </div>
              <img src="/plexus/slim-pink.jpg" alt="Plexus Slim and favorites" className="h-32 w-full object-cover" />
            </div>
          </div>
          <div className="py-2 lg:pl-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">Limited time · Sept. 28–30</p>
            <h1 className="mb-4 text-[clamp(1.75rem,3.2vw,2.65rem)] font-bold leading-tight text-ink">
              Fall Favorites: Get 10% off sitewide!**
            </h1>
            <p className="mb-7 text-lg text-fg">
              Brand Ambassadors, VIPs & Retail Customers: from Sept. 28 – 30
            </p>
            <PlexusLink to="/shop">Shop Now</PlexusLink>
            <p className="mt-4 text-xs text-muted">**Exclusions apply. Discount shown in cart.</p>
          </div>
        </div>
      </section>

      <nav className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 border-b border-line px-4 py-4 text-sm" aria-label="Categories">
        {CATS.map((c, i) => (
          <span key={c.category} className="inline-flex items-center">
            {i > 0 ? <span className="mx-2 text-line">|</span> : null}
            <Link to="/shop/$category" params={{ category: c.category }} className="px-2 py-1 text-fg hover:text-plexus">
              {c.label}
            </Link>
          </span>
        ))}
      </nav>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 md:grid-cols-2">
        <Promo
          img="/plexus/megax-bottles.jpg"
          alt="MegaX plant-based omegas"
          title="MegaX: Better for you."
          body="Now with only beneficial seed oils."
          to="/product/megax"
        />
        <Promo
          img="/plexus/skin-health.png"
          alt="Skin Health System"
          title="Your skin’s favorite sale."
          body="20% off all Skin Health."
          to="/shop/skin-health"
        />
      </section>

      <section className="bg-paper py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-plexus">The microbiome method</p>
            <h2 className="mb-3 text-3xl font-bold text-ink">Say Hello to Full-Body Feel Good.</h2>
            <p className="text-lg text-muted">3 steps to balance your microbiome & thrive from the inside out.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Cleanse", d: "Bio Cleanse® supports digestive regularity so nutrients and microbes have room to thrive.*" },
              { n: "02", t: "Feed", d: "Slim’s clinically studied XOS prebiotic feeds beneficial bacteria — including Akkermansia.*" },
              { n: "03", t: "Seed", d: "ProBio 5® and VitalBiome™ replenish the gut with targeted, clinically studied strains.*" },
            ].map((s) => (
              <div key={s.n} className="rounded-xl border border-line bg-fog p-6">
                <p className="mb-2 text-sm font-bold tracking-widest text-plexus">{s.n}</p>
                <h3 className="mb-2 text-xl font-semibold text-ink">{s.t}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <PlexusLink to="/experience">Learn the method</PlexusLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <h2 className="mb-6 text-[26px] font-bold text-ink">Featured Products</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
          {extra ? <ProductCard product={extra} /> : null}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-plexus">Get More with Plexus®</p>
            <h2 className="mb-4 text-3xl font-bold text-ink">Explore more opportunities for Hope, Health, and Happiness!</h2>
            <p className="mb-6 text-muted">
              Enjoy your wellness products as a Retail Customer, save up to 25% as a VIP Customer, or turn your healthy
              lifestyle into a rewarding income opportunity as a Plexus Brand Ambassador.
            </p>
            <PlexusLink to="/join">Your Opportunities</PlexusLink>
          </div>
          <Link to="/join" className="block overflow-hidden rounded-xl">
            <img
              src="/plexus/ambassador.jpg"
              alt="Become a Brand Ambassador"
              className="w-full object-cover"
            />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-plexus">Who is Plexus</p>
        <h2 className="mb-8 max-w-3xl text-3xl font-bold text-ink">
          We are dedicated to helping people find true Hope, Health, and Happiness
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <Link to="/about" className="group overflow-hidden rounded-xl border border-line">
            <img src="/plexus/about-us.png" alt="About us" className="aspect-[5/3] w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold group-hover:text-plexus">Our Story</h3>
              <p className="mt-1 text-sm text-muted">
                We’re a family with a shared belief in Health and Happiness. Your dreams, drive, and commitment combined
                with our mission is an unstoppable combination.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-plexus">Learn More</span>
            </div>
          </Link>
          <Link to="/about" className="group overflow-hidden rounded-xl border border-line">
            <img
              src="/plexus/2511-PCC-Walk-7243-2_c_fill_w_500_h_300_g_auto_2tg2.webp"
              alt="Our community"
              className="aspect-[5/3] w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold group-hover:text-plexus">Our Community</h3>
              <p className="mt-1 text-sm text-muted">
                By partnering with others who also strive to make a positive impact, we support nonprofits that enhance
                well-being in our local communities.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-plexus">Learn More</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-fog">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center sm:flex-row sm:text-left">
          <img src="/plexus/60-day-guarantee-sage_2tg2.svg" alt="" className="h-24 w-auto" />
          <div>
            <h2 className="text-xl font-bold text-ink">Product Guarantee</h2>
            <p className="mt-1 text-muted">
              We are so confident you’ll love your results our products are backed by a 60-Day Money-Back Guarantee!
            </p>
            <Link to="/guarantee" className="mt-2 inline-block font-semibold text-plexus hover:text-link">
              Our Guarantee
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Promo({
  img,
  alt,
  title,
  body,
  to,
}: {
  img: string;
  alt: string;
  title: string;
  body: string;
  to: string;
}) {
  return (
    <div className="grid items-center gap-5 rounded-xl bg-cream p-7 md:grid-cols-[140px_1fr]">
      <img src={img} alt={alt} className="mx-auto size-36 rounded-lg bg-paper object-contain" />
      <div>
        <h2 className="mb-2 text-[22px] font-bold text-ink">{title}</h2>
        <p className="mb-4 text-[15px] text-muted">{body}</p>
        <PlexusLink to={to} className="px-8">
          Shop Now
        </PlexusLink>
      </div>
    </div>
  );
}
