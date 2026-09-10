"use client";

import { useEffect, useTransition, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { appendCurrentUtmParams } from "@/lib/analytics";

export default function RouteTransitions({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
      ) return;

      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest<HTMLAnchorElement>("a");
      const href = anchor?.getAttribute("href");

      if (
        !anchor || !href || href.startsWith("#") ||
        (anchor.target && anchor.target !== "_self") || anchor.hasAttribute("download")
      ) return;

      const url = new URL(href, window.location.href);
      if (
        url.origin !== window.location.origin ||
        (url.pathname === window.location.pathname && url.search === window.location.search)
      ) return;

      const destination = appendCurrentUtmParams(url);
      event.preventDefault();
      startTransition(() => {
        router.push(`${destination.pathname}${destination.search}${destination.hash}`);
      });
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [router]);

  return (
    <>
      {children}
      {isPending ? <div className="navigation-progress" aria-hidden="true" /> : null}
    </>
  );
}
