export type SeoTopic = {
  label: string;
  href: string;
};

export const baseSeoTopics = [
  { label: "GBC Huskies basketball", href: "/" },
  { label: "Orange County youth basketball", href: "/about" },
  { label: "AAU basketball program", href: "/teams" },
  { label: "basketball player development", href: "/training" },
  { label: "basketball skills training", href: "/training" },
  { label: "team basketball training", href: "/training" },
  { label: "strength and conditioning", href: "/training" },
  { label: "boys basketball program", href: "/teams" },
  { label: "youth basketball teams", href: "/teams" },
  { label: "basketball tournaments", href: "/teams" },
  { label: "MADE Hoops basketball", href: "/teams" },
  { label: "Coca Cola Nationals 14U Champions", href: "/teams" },
  { label: "GBC Huskies payments", href: "/payments" },
  { label: "basketball team store", href: "/store" },
  { label: "GBC Huskies reviews", href: "/reviews" },
  { label: "parent testimonials", href: "/reviews" },
] satisfies SeoTopic[];

const pageSeoTopics: Record<string, SeoTopic[]> = {
  "/": baseSeoTopics,
  "/about": [
    { label: "GBC Huskies mission", href: "/about" },
    { label: "youth basketball values", href: "/about" },
    { label: "teamwork and discipline", href: "/about" },
    { label: "sportsmanship", href: "/about" },
    { label: "work ethic", href: "/about" },
    { label: "Orange County AAU basketball", href: "/about" },
  ],
  "/training": [
    { label: "basketball training", href: "/training" },
    { label: "basketball fundamentals", href: "/training" },
    { label: "basketball skills training", href: "/training" },
    { label: "ball handling training", href: "/training" },
    { label: "shooting development", href: "/training" },
    { label: "defensive habits", href: "/training" },
    { label: "athlete development", href: "/training" },
    { label: "strength and conditioning basketball", href: "/training" },
  ],
  "/teams": [
    { label: "GBC Huskies teams", href: "/teams" },
    { label: "youth basketball team", href: "/teams" },
    { label: "AAU basketball teams", href: "/teams" },
    { label: "boys basketball program", href: "/teams" },
    { label: "14U basketball", href: "/teams" },
    { label: "16U basketball", href: "/teams" },
    { label: "local and national tournaments", href: "/teams" },
    { label: "MADE Hoops events", href: "/teams" },
  ],
  "/payments": [
    { label: "GBC Huskies payments", href: "/payments" },
    { label: "team fees", href: "/payments" },
    { label: "tournament fees", href: "/payments" },
    { label: "monthly basketball payments", href: "/payments" },
    { label: "basketball donations", href: "/payments" },
    { label: "secure payment links", href: "/payments" },
  ],
  "/store": [
    { label: "GBC Huskies team store", href: "/store" },
    { label: "basketball merch", href: "/store" },
    { label: "team gear", href: "/store" },
    { label: "basketball uniforms", href: "/store" },
    { label: "GBC hoodie", href: "/store" },
    { label: "GBC shooting shirt", href: "/store" },
  ],
  "/reviews": [
    { label: "GBC Huskies reviews", href: "/reviews" },
    { label: "parent reviews", href: "/reviews" },
    { label: "player testimonials", href: "/reviews" },
    { label: "basketball program testimonials", href: "/reviews" },
    { label: "player development feedback", href: "/reviews" },
  ],
  "/contact": [
    { label: "contact GBC Huskies", href: "/contact" },
    { label: "join GBC Huskies", href: "/contact" },
    { label: "basketball training inquiry", href: "/contact" },
    { label: "team opportunities", href: "/contact" },
    { label: "sponsorship inquiry", href: "/contact" },
  ],
};

export function getSeoTopicsForPath(path: string) {
  return pageSeoTopics[path] ?? baseSeoTopics;
}

export function getSeoKeywordsForPath(path: string) {
  const labels = [...baseSeoTopics, ...getSeoTopicsForPath(path)].map((topic) => topic.label);
  return Array.from(new Set(labels));
}
