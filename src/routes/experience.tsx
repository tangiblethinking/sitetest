import { createFileRoute } from "@tanstack/react-router";
import { PlexusLink } from "@/components/ui/plexus-button";

export const Route = createFileRoute("/experience")({ component: ExperiencePage });

function ExperiencePage() {
  return (
    <div>
      <section className="bg-tan">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">Experience Plexus</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold leading-tight text-ink">
            Founded in gut health. Experts in microbiome.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-fg">
            Whole-body feel good starts in the gut. Here’s how Plexus products work together — and why the microbiome
            is the through-line of every routine we build.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
        <img src="/plexus/gut-health.png" alt="Gut Health System" className="w-full rounded-xl bg-fog object-contain p-8" />
        <div>
          <h2 className="text-2xl font-bold text-ink">The 3-step method</h2>
          <ol className="mt-6 space-y-5">
            <li>
              <p className="font-semibold text-plexus">1. Cleanse</p>
              <p className="text-muted">Bio Cleanse® helps support digestive regularity so the rest of your routine can work.*</p>
            </li>
            <li>
              <p className="font-semibold text-plexus">2. Feed</p>
              <p className="text-muted">
                Slim Microbiome Activating uses a patented, clinically studied XOS prebiotic shown to increase
                beneficial microbes — including Akkermansia.*
              </p>
            </li>
            <li>
              <p className="font-semibold text-plexus">3. Seed</p>
              <p className="text-muted">ProBio 5® and VitalBiome™ replenish the gut with targeted probiotic strains.*</p>
            </li>
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <PlexusLink to="/shop/gut-health">Shop Gut Health</PlexusLink>
            <PlexusLink to="/reset" variant="outline">
              Discover Reset
            </PlexusLink>
          </div>
        </div>
      </section>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink">MegaX: Better for you.</h2>
            <p className="mt-3 text-muted">
              Plant-based, broad-spectrum omegas with only beneficial seed oils — heart, brain, eyes, and stress
              support without a fishy aftertaste.*
            </p>
            <PlexusLink to="/product/megax" className="mt-6">
              Shop MegaX
            </PlexusLink>
          </div>
          <img src="/plexus/megax-bottles.jpg" alt="MegaX" className="w-full rounded-xl object-cover" />
        </div>
      </section>
    </div>
  );
}
