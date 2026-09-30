import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";
import type { ComponentProps, ReactNode } from "react";

const styles = {
  primary:
    "bg-plexus text-paper hover:bg-plexus-hover border-plexus hover:border-plexus-hover",
  dark: "bg-ink text-paper hover:bg-fg border-ink",
  outline:
    "bg-transparent text-ink border-ink hover:bg-ink hover:text-paper",
  ghost: "bg-transparent text-ink border-transparent hover:text-plexus",
};

type Variant = keyof typeof styles;

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill border px-8 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200 disabled:cursor-default disabled:bg-plexus-soft disabled:border-plexus-soft";

export function PlexusButton({
  variant = "primary",
  className,
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return <button className={cn(base, styles[variant], className)} {...props} />;
}

export function PlexusLink({
  variant = "primary",
  className,
  to,
  children,
}: {
  variant?: Variant;
  className?: string;
  to: string;
  children: ReactNode;
}) {
  return (
    <Link to={to as "/"} className={cn(base, styles[variant], className)}>
      {children}
    </Link>
  );
}