"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const transitionStorageKey = "gbc-route-transition-pathname";

function shouldAnimatePathname(pathname: string) {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const previousPathname = window.sessionStorage.getItem(transitionStorageKey);
    window.sessionStorage.setItem(transitionStorageKey, pathname);
    return Boolean(previousPathname && previousPathname !== pathname);
  } catch {
    return false;
  }
}

export default function RouteTransitions({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [transitionState, setTransitionState] = useState({ active: false, id: 0 });
  const transitionTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (shouldAnimatePathname(pathname)) {
      window.setTimeout(() => {
        setTransitionState((current) => ({
          active: true,
          id: current.id + 1,
        }));
      }, 0);
    }
  }, [pathname]);

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
