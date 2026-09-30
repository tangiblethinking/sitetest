import { createFileRoute } from "@tanstack/react-router";
import { PlexusLink } from "@/components/ui/plexus-button";

export const Route = createFileRoute("/guarantee")({ component: GuaranteePage });

function GuaranteePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6">
      <img src="/plexus/60-day-guarantee-sage_2tg2.svg" alt="" className="mx-auto h-28 w-auto" />
      <h1 className="mt-6 text-3xl font-bold text-ink">The Plexus Guarantee</h1>
      <p className="mt-4 text-lg text-muted">
        Your satisfaction is our first priority. We stand behind the quality of our products to help you achieve the
        healthy lifestyle you desire.
      </p>
      <p className="mt-4 text-muted">
        We offer a full 60-day money back guarantee, less shipping, if you are not pleased with your product results.
      </p>
      <PlexusLink to="/shop" className="mt-8">
        Shop with confidence
      </PlexusLink>
    </div>
  );
}
