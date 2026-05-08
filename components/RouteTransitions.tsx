"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

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
  const router = useRouter();
  const [transitionState, setTransitionState] = useState({ active: false, id: 0 });
  const navigationTimeoutRef = useRef<number | null>(null);
  const transitionTimeoutRef = useRef<number | null>(null);

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

      event.preventDefault();

      const targetUrl = new URL(anchor.getAttribute("href") ?? "", window.location.href);
      const targetHref = `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`;

      setTransitionState((current) => ({
        active: true,
        id: current.id + 1,
      }));

      if (navigationTimeoutRef.current) {
        window.clearTimeout(navigationTimeoutRef.current);
      }

      navigationTimeoutRef.current = window.setTimeout(() => {
        router.push(targetHref);
      }, 320);
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);

      if (navigationTimeoutRef.current) {
        window.clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, [router]);

  useEffect(() => {
    if (!transitionState.active) {
      return;
    }

    if (transitionTimeoutRef.current) {
      window.clearTimeout(transitionTimeoutRef.current);
    }

    transitionTimeoutRef.current = window.setTimeout(() => {
      setTransitionState((current) => ({
        ...current,
        active: false,
      }));
    }, 760);

    return () => {
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [transitionState.active, transitionState.id]);

  return (
    <>
      <div key={pathname} className="route-transition-content">
        {children}
      </div>
      {transitionState.active ? (
        <div key={transitionState.id} className="route-transition-overlay is-transitioning" aria-hidden="true">
          <div className="route-transition-mark">
            <span>GBC</span> Huskies
          </div>
        </div>
      ) : null}
    </>
  );
}
