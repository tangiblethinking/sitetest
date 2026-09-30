import { useEffect, useState } from "react";
import { PlexusButton } from "@/components/ui/plexus-button";

const KEY = "plexus-cookies-ok";

export function CookieBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[70] mx-auto flex max-w-xl items-center gap-4 rounded-xl border border-line bg-paper p-4 shadow-xl">
      <img src="/plexus/cookies_2tg2.webp" alt="" className="size-10 object-contain" />
      <p className="flex-1 text-sm text-fg">
        We use cookies to keep your cart, remember VIP savings, and improve your visit.
      </p>
      <PlexusButton
        className="shrink-0 px-5"
        onClick={() => {
          localStorage.setItem(KEY, "1");
          setShow(false);
        }}
      >
        OK
      </PlexusButton>
    </div>
  );
}
