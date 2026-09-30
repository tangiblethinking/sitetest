import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { useVip } from "@/lib/vip";
import { PlexusButton } from "@/components/ui/plexus-button";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
  const isVip = useVip((s) => s.isVip);
  const name = useVip((s) => s.name);
  const login = useVip((s) => s.login);
  const logout = useVip((s) => s.logout);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [display, setDisplay] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    login(display.trim() || email.split("@")[0] || "VIP");
    navigate({ to: "/shop" });
  }

  if (isVip) {
    return (
      <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-bold text-ink">My Account</h1>
        <p className="mt-3 text-muted">
          You’re shopping with VIP savings, {name}. Retail prices stay visible; the VIP price is what you’ll pay.
        </p>
        <PlexusButton className="mt-6" variant="outline" onClick={logout}>
          Sign out
        </PlexusButton>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-ink">Login</h1>
      <p className="mt-2 text-sm text-muted">
        Preview VIP pricing in this shop. This demo signs you in locally — no password is sent anywhere.
      </p>
      <form className="mt-8 space-y-4" onSubmit={onSubmit}>
        <label className="block text-sm font-medium">
          Name
          <input
            className="mt-1 h-11 w-full rounded-md border border-line px-3"
            value={display}
            onChange={(e) => setDisplay(e.target.value)}
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input
            type="email"
            required
            className="mt-1 h-11 w-full rounded-md border border-line px-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
          />
        </label>
        <label className="block text-sm font-medium">
          Password
          <input type="password" required className="mt-1 h-11 w-full rounded-md border border-line px-3" defaultValue="" />
        </label>
        <PlexusButton type="submit" className="w-full max-w-none">
          Sign in as VIP
        </PlexusButton>
      </form>
    </div>
  );
}
