type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}

export function appendCurrentUtmParams(url: URL) {
  if (typeof window === "undefined") {
    return url;
  }

  const currentParams = new URLSearchParams(window.location.search);
  currentParams.forEach((value, key) => {
    if (key.startsWith("utm_") && !url.searchParams.has(key)) {
      url.searchParams.set(key, value);
    }
  });

  return url;
}
