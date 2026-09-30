import { Link } from "@tanstack/react-router";

export function RewardsBar() {
  return (
    <div className="border-b border-line bg-cream px-4 py-2.5 text-center text-sm text-fg">
      <span className="font-semibold">Plexus Stay Well Rewards Program.</span> Start your 100 PV+ subscription, earn
      free product.{" "}
      <Link to="/join" className="font-semibold text-plexus underline underline-offset-2 hover:text-link">
        Learn More
      </Link>
    </div>
  );
}
