"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { appendCurrentUtmParams } from "@/lib/analytics";

const QUICK_NAVIGATION_DELAY_MS = 240;
const QUICK_TRANSITION_DURATION_MS = 620;
const INTENTIONAL_LOAD_CHANCE = 0.16;
const INTENTIONAL_LOAD_MIN_DELAY_MS = 440;
const INTENTIONAL_LOAD_EXTRA_DELAY_MS = 140;
const INTENTIONAL_LOAD_DURATION_BUFFER_MS = 500;
const TRANSITION_EXIT_BUFFER_MS = 120;

type TransitionVariant = "quick" | "intentional";

type TransitionState = {
  active: boolean;
  id: number;
  durationMs: number;
  variant: TransitionVariant;
};

function isModifiedClick(event: MouseEvent) {
  return event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

function getTransitionTiming() {
  if (Math.random() >= INTENTIONAL_LOAD_CHANCE) {
    return {
      durationMs: QUICK_TRANSITION_DURATION_MS,
      navigationDelayMs: QUICK_NAVIGATION_DELAY_MS,
      variant: "quick" as const,
    };
  }

  const navigationDelayMs =
    INTENTIONAL_LOAD_MIN_DELAY_MS + Math.round(Math.random() * INTENTIONAL_LOAD_EXTRA_DELAY_MS);

  return {
    durationMs: navigationDelayMs + INTENTIONAL_LOAD_DURATION_BUFFER_MS,
    navigationDelayMs,
    variant: "intentional" as const,
  };
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
  const [transitionState, setTransitionState] = useState<TransitionState>({
    active: false,
    id: 0,
    durationMs: QUICK_TRANSITION_DURATION_MS,
    variant: "quick",
  });
  const activeNavigationRef = useRef<string | null>(null);
  const navigationTimeoutRef = useRef<number | null>(null);
  const transitionTimeoutRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);
  const prefetchedHrefsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => {
      reducedMotionRef.current = motionQuery.matches;
    };

    updateReducedMotion();
    motionQuery.addEventListener("change", updateReducedMotion);

    return () => {
      motionQuery.removeEventListener("change", updateReducedMotion);
    };
  }, []);

  useEffect(() => {
    function getInternalTarget(event: Event) {
      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest<HTMLAnchorElement>("a") ?? null;

      if (!anchor || !shouldAnimateNavigation(anchor)) {
        return null;
      }

      const targetUrl = appendCurrentUtmParams(new URL(anchor.getAttribute("href") ?? "", window.location.href));
      const targetHref = `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`;

      return { anchor, targetHref };
    }

    function prefetchTarget(event: Event) {
      if (reducedMotionRef.current) {
        return;
      }

      const target = getInternalTarget(event);

      if (!target || prefetchedHrefsRef.current.has(target.targetHref)) {
        return;
      }

      prefetchedHrefsRef.current.add(target.targetHref);
      router.prefetch(target.targetHref);
    }

    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || isModifiedClick(event)) {
        return;
      }

      if (reducedMotionRef.current) {
        return;
      }

      const target = getInternalTarget(event);

      if (!target) {
        return;
      }

      event.preventDefault();

      if (activeNavigationRef.current) {
        return;
      }

      const timing = getTransitionTiming();
      activeNavigationRef.current = target.targetHref;

      setTransitionState((current) => ({
        active: true,
        durationMs: timing.durationMs,
        id: current.id + 1,
        variant: timing.variant,
      }));

      if (navigationTimeoutRef.current) {
        window.clearTimeout(navigationTimeoutRef.current);
      }

      navigationTimeoutRef.current = window.setTimeout(() => {
        router.push(target.targetHref);
        navigationTimeoutRef.current = null;
      }, timing.navigationDelayMs);
    }

    document.addEventListener("pointerover", prefetchTarget, { capture: true, passive: true });
    document.addEventListener("focusin", prefetchTarget, true);
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("pointerover", prefetchTarget, true);
      document.removeEventListener("focusin", prefetchTarget, true);
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
      activeNavigationRef.current = null;
    }, transitionState.durationMs + TRANSITION_EXIT_BUFFER_MS);

    return () => {
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [transitionState.active, transitionState.durationMs, transitionState.id]);

  const transitionStyle = {
    "--route-transition-duration": `${transitionState.durationMs}ms`,
  } as CSSProperties;

  return (
    <>
      <div key={pathname} className="route-transition-content">
        {children}
      </div>
      {transitionState.active ? (
        <div
          key={transitionState.id}
          className={`route-transition-overlay is-transitioning${
            transitionState.variant === "intentional" ? " is-intentional" : ""
          }`}
          style={transitionStyle}
          aria-hidden="true"
        >
          <div className="route-transition-mark">
            <span>GBC</span> Huskies
            {transitionState.variant === "intentional" ? (
              <div className="route-transition-submark">Defense</div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
