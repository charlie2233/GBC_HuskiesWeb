export type DisplayedReview = {
  id: string;
  name: string;
  detail: string;
  quote: string;
  rating: number;
  source?: "placeholder" | "submitted";
};

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
