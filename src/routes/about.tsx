import { createFileRoute } from "@tanstack/react-router";
import { PlexusLink } from "@/components/ui/plexus-button";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plexus">About Plexus®</p>
            <h1 className="mt-2 text-4xl font-bold leading-tight text-ink">Igniting Hope, Health, & Happiness</h1>
            <p className="mt-4 text-lg text-muted">Founded in 2008 · Scottsdale, Arizona</p>
          </div>
          <img src="/plexus/about-us.png" alt="Plexus community" className="w-full rounded-xl object-cover" />
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold text-ink">Who We Are</h2>
        <p className="mt-4 text-muted leading-relaxed">
          Founded in 2008, Plexus Worldwide is a pioneer in the gut health space, providing products that support
          whole-body wellness from the inside out. Our network of Brand Ambassadors works to bring these products
          directly to people, families, and communities seeking sustainable transformation. It’s through this simple
          business model that we fulfill our mission: To ignite Hope, Health, and Happiness for those who want more
          out of life.
        </p>
        <h2 className="mt-10 text-2xl font-bold text-ink">Our Products</h2>
        <p className="mt-4 text-muted leading-relaxed">
          For nearly two decades, Plexus has provided patented gut health and microbiome products that are backed by
          scientific research and designed with quality ingredients you can trust. From digestive health and weight
          management to overall wellness, Plexus products support a healthy lifestyle for the whole family.
        </p>
        <h2 className="mt-10 text-2xl font-bold text-ink">Our Story</h2>
        <p className="mt-2 text-lg font-semibold text-ink">Transforming Health and Happiness since 2008.</p>
        <p className="mt-4 text-muted leading-relaxed">
          Plexus started with humble beginnings. When Plexus offered Slim in 2011 — also known as “the pink drink” — it
          immediately heard positive health testimonies, leading into a company-wide transition into gut health and the
          microbiome. Today Plexus empowers hundreds of thousands of independent Brand Ambassadors in the United
          States, Canada, Australia, New Zealand, and Mexico.
        </p>
        <p className="mt-4 text-muted leading-relaxed">
          Headquarters sit at 9145 E Pima Center Parkway in Scottsdale. We are a Blue Zones-approved employer, a
          member of the Council for Responsible Nutrition, and a Direct Selling Association company that abides by the
          DSA Code of Ethics.
        </p>
      </section>
      <section className="bg-fog">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2">
          <img
            src="/plexus/2511-PCC-Walk-7243-2_c_fill_w_500_h_300_g_auto_2tg2.webp"
            alt="Community involvement"
            className="w-full rounded-xl object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-ink">Community Involvement</h2>
            <p className="mt-4 text-muted leading-relaxed">
              By partnering with others who also strive to make a positive impact, we further support nonprofits that
              enhance well-being in our local communities — improving access to healthy food, educating consumers on
              nutrition, and preserving the environment. Team members receive paid volunteer time each year.
            </p>
            <div className="mt-6">
              <PlexusLink to="/join">Join our community</PlexusLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
