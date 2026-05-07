"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

function isModifiedClick(event: MouseEvent) {
  return event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

function shouldAnimateNavigation(anchor: HTMLAnchorElement) {
  const rawHref = anchor.getAttribute("href");

  if (
    !rawHref ||
    rawHref.startsWith("#") ||
    rawHref.startsWith("mailto:") ||
    rawHref.startsWith("tel:") ||
    anchor.target === "_blank" ||
    anchor.hasAttribute("download")
  ) {
    return false;
  }

  const targetUrl = new URL(rawHref, window.location.href);

  if (targetUrl.origin !== window.location.origin) {
    return false;
  }

  return targetUrl.pathname !== window.location.pathname || targetUrl.search !== window.location.search;
}

export default function RouteTransitions({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [leaving, setLeaving] = useState(false);
  const leaveTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || isModifiedClick(event)) {
        return;
      }

      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest<HTMLAnchorElement>("a") ?? null;

      if (!anchor || !shouldAnimateNavigation(anchor)) {
        return;
      }

      setLeaving(true);

      if (leaveTimeoutRef.current) {
        window.clearTimeout(leaveTimeoutRef.current);
      }

      leaveTimeoutRef.current = window.setTimeout(() => {
        setLeaving(false);
      }, 900);
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);

      if (leaveTimeoutRef.current) {
        window.clearTimeout(leaveTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div key={pathname} className="route-transition-content">
        {children}
      </div>
      <div
        key={leaving ? "leaving" : `entering-${pathname}`}
        className={`route-transition-overlay ${leaving ? "is-leaving" : "is-entering"}`}
        aria-hidden="true"
      >
        <div className="route-transition-mark">
          <span>GBC</span> Huskies
        </div>
      </div>
    </>
  );
}
