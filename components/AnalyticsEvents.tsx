"use client";

import { useEffect } from "react";
import { appendCurrentUtmParams, trackEvent } from "@/lib/analytics";

function updateInternalHref(anchor: HTMLAnchorElement) {
  const rawHref = anchor.getAttribute("href");

  if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) {
    return false;
  }

  const targetUrl = new URL(rawHref, window.location.href);

  if (targetUrl.origin !== window.location.origin) {
    return false;
  }

  const updatedUrl = appendCurrentUtmParams(targetUrl);
  const updatedHref = `${updatedUrl.pathname}${updatedUrl.search}${updatedUrl.hash}`;
  const didChange = updatedHref !== rawHref;

  anchor.href = updatedHref;

  return didChange;
}

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest<HTMLAnchorElement>("a") ?? null;
      const shouldPreserveUtm = anchor ? updateInternalHref(anchor) : false;

      if (
        anchor &&
        shouldPreserveUtm &&
        event.button === 0 &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.shiftKey &&
        !event.altKey &&
        anchor.target !== "_blank"
      ) {
        event.preventDefault();
        window.location.assign(anchor.href);
      }

      const trackedElement = target?.closest<HTMLElement>("[data-analytics-event]");

      if (!trackedElement) {
        return;
      }

      const eventNames = [
        trackedElement.dataset.analyticsEvent,
        ...(trackedElement.dataset.analyticsEvents?.split(/[,\s]+/) ?? []),
      ].filter((eventName): eventName is string => Boolean(eventName));

      if (!eventNames.length) {
        return;
      }

      const params = {
        event_category: trackedElement.dataset.analyticsCategory || "cta",
        event_label:
          trackedElement.dataset.analyticsLabel ||
          trackedElement.textContent?.trim().replace(/\s+/g, " ").slice(0, 120),
        link_url: anchor?.href || trackedElement.dataset.analyticsHref,
      };

      Array.from(new Set(eventNames)).forEach((eventName) => {
        trackEvent(eventName, params);
      });
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}
