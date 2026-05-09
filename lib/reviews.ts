export type DisplayedReview = {
  id: string;
  name: string;
  detail: string;
  quote: string;
  rating: number;
  source?: "placeholder" | "submitted";
};

const reviewStorageKey = "gbc-huskies-public-reviews-v1";
const reviewSubmittedEvent = "gbc-review-submitted";
const maxStoredReviews = 24;

function cleanText(value: string, maxLength: number) {
  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function firstNameOnly(value: string) {
  return cleanText(value, 80).split(" ")[0] || "GBC";
}

export function buildPublicReview(formData: FormData): DisplayedReview | null {
  const permission = formData.get("displayPermission") === "yes";
  const quote = cleanText(String(formData.get("message") || ""), 420);
  const guardianName = cleanText(String(formData.get("guardianName") || ""), 80);
  const displayPreference = String(formData.get("displayPreference") || "Anonymous");
  const gradeTeam = cleanText(String(formData.get("playerGradeTeam") || ""), 60);
  const ratingValue = Number(formData.get("rating") || 5);
  const rating = Number.isFinite(ratingValue) ? Math.min(5, Math.max(1, Math.round(ratingValue))) : 5;

  if (!permission || quote.length < 8) {
    return null;
  }

  let name = "GBC Family";

  if (displayPreference === "Full name" && guardianName) {
    name = guardianName;
  }

  if (displayPreference === "First name only" && guardianName) {
    name = `${firstNameOnly(guardianName)} Family`;
  }

  return {
    id: `submitted-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    detail: gradeTeam ? `${gradeTeam} family review` : "Family review",
    quote,
    rating,
    source: "submitted",
  };
}

export function getStoredReviews() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const parsed = JSON.parse(window.localStorage.getItem(reviewStorageKey) || "[]");

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter((review): review is DisplayedReview => {
      return (
        typeof review?.id === "string" &&
        typeof review.name === "string" &&
        typeof review.detail === "string" &&
        typeof review.quote === "string" &&
        typeof review.rating === "number"
      );
    });
  } catch {
    return [];
  }
}

export function saveDisplayedReview(review: DisplayedReview) {
  if (typeof window === "undefined") {
    return;
  }

  const reviews = [review, ...getStoredReviews().filter((item) => item.id !== review.id)].slice(0, maxStoredReviews);
  window.localStorage.setItem(reviewStorageKey, JSON.stringify(reviews));
  window.dispatchEvent(new CustomEvent(reviewSubmittedEvent, { detail: review }));
}

export function subscribeToDisplayedReviews(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  function handleStorage(event: StorageEvent) {
    if (event.key === reviewStorageKey) {
      callback();
    }
  }

  window.addEventListener(reviewSubmittedEvent, callback);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener(reviewSubmittedEvent, callback);
    window.removeEventListener("storage", handleStorage);
  };
}
