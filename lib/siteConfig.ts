export const siteUrl = "https://gbchuskies.com";
export const siteName = "GBC Huskies Basketball";
export const organizationName = "GBC Huskies";
export const siteDescription =
  "GBC Huskies is a youth basketball program focused on fundamentals, player development, teamwork, discipline, sportsmanship, and helping athletes grow on and off the court.";
export const logoPath = "/brand/gbc-huskies-circle-logo.png";
export const logoUrl = `${siteUrl}${logoPath}`;
export const ogImageUrl = logoUrl;
export const contactEmail = "gbchuskiesoc@gmail.com";
export const coachPhoneDisplay = "657-253-0078";
export const coachPhoneHref = "tel:+16572530078";
export const areaServed = "Orange County, CA";
export const instagramUrl = "https://www.instagram.com/gbc_huskies/";
export const coachInstagramUrl = "https://www.instagram.com/coachjaygill/";
export const goFundMeUrl = "https://gofund.me/192839eaa";
export const registrationFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfRVsKkKjcZXcZESTNTXjga9qLWYElRvhPUtd4KXsAjYVYm7A/viewform?usp=publish-editor";

export const mainRoutes = [
  { path: "/", label: "Home", priority: 1 },
  { path: "/about", label: "About", priority: 0.88 },
  { path: "/training", label: "Training", priority: 0.86 },
  { path: "/teams", label: "Teams", priority: 0.84 },
  { path: "/payments", label: "Payments", priority: 0.78 },
  { path: "/store", label: "Team Store", priority: 0.72 },
  { path: "/reviews", label: "Reviews", priority: 0.72 },
  { path: "/contact", label: "Contact", priority: 0.82 },
  { path: "/privacy", label: "Privacy", priority: 0.42 },
];

export const paymentItems = [
  {
    title: "Team Fees",
    description: "Pay team or season fees securely online.",
    buttonText: "Pay Team Fee",
    url: process.env.NEXT_PUBLIC_STRIPE_TEAM_FEE_URL || "",
    type: "one-time",
  },
  {
    title: "Tournament Fees",
    description: "Pay tournament or event fees.",
    buttonText: "Pay Tournament Fee",
    url: process.env.NEXT_PUBLIC_STRIPE_TOURNAMENT_FEE_URL || "",
    type: "one-time",
  },
  {
    title: "Monthly Payments",
    description: "Set up recurring monthly team payments.",
    buttonText: "Set Up Monthly Payment",
    url: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_PAYMENT_URL || "",
    type: "recurring",
  },
  {
    title: "Donations",
    description: "Support the GBC Huskies program.",
    buttonText: "Donate",
    url: process.env.NEXT_PUBLIC_STRIPE_DONATION_URL || "",
    type: "donation",
  },
  {
    title: "Uniform / Merch Payments",
    description: "Pay for team gear, uniforms, and merchandise.",
    buttonText: "Pay for Merch",
    url: process.env.NEXT_PUBLIC_STRIPE_MERCH_URL || "",
    type: "store",
  },
  {
    title: "Custom Payments",
    description: "Use this option when the coach gives you a custom amount or payment purpose.",
    buttonText: "Make Custom Payment",
    url: process.env.NEXT_PUBLIC_STRIPE_CUSTOM_PAYMENT_URL || "",
    type: "custom",
  },
];

export const storeItems = [
  {
    name: "GBC Hoodie",
    description: "Heavyweight team hoodie for players, parents, and supporters.",
    price: "$55",
    sizes: "Youth S-XL, Adult S-XXL",
    url: process.env.NEXT_PUBLIC_STRIPE_GBC_HOODIE_URL || process.env.NEXT_PUBLIC_STRIPE_MERCH_URL || "",
  },
  {
    name: "GBC T-Shirt",
    description: "Soft everyday team tee with GBC Huskies branding.",
    price: "$25",
    sizes: "Youth S-XL, Adult S-XXL",
    url: process.env.NEXT_PUBLIC_STRIPE_GBC_TSHIRT_URL || process.env.NEXT_PUBLIC_STRIPE_MERCH_URL || "",
  },
  {
    name: "GBC Shorts",
    description: "Basketball shorts for training, travel days, and team events.",
    price: "$35",
    sizes: "Youth S-XL, Adult S-XXL",
    url: process.env.NEXT_PUBLIC_STRIPE_GBC_SHORTS_URL || process.env.NEXT_PUBLIC_STRIPE_MERCH_URL || "",
  },
  {
    name: "GBC Shooting Shirt",
    description: "Lightweight warmup shirt for practices and tournament weekends.",
    price: "$40",
    sizes: "Youth S-XL, Adult S-XXL",
    url: process.env.NEXT_PUBLIC_STRIPE_GBC_SHOOTING_SHIRT_URL || process.env.NEXT_PUBLIC_STRIPE_MERCH_URL || "",
  },
  {
    name: "GBC Backpack",
    description: "Team backpack for shoes, gear, water bottles, and road-season essentials.",
    price: "$60",
    sizes: "One size",
    url: process.env.NEXT_PUBLIC_STRIPE_GBC_BACKPACK_URL || process.env.NEXT_PUBLIC_STRIPE_MERCH_URL || "",
  },
];

export const reviewFormUrl = process.env.NEXT_PUBLIC_REVIEW_FORM_URL || "";
export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

// Editable placeholder testimonials. Replace only after a parent/player submits
// a review, grants display permission, and the coach manually approves it.
export const testimonials = [
  {
    name: "GBC Parent",
    detail: "Anonymous placeholder",
    quote:
      "GBC has helped my son grow in confidence, discipline, and understanding of the game.",
  },
  {
    name: "Player Parent",
    detail: "Anonymous placeholder",
    quote:
      "The program focuses on fundamentals, teamwork, and accountability.",
  },
  {
    name: "GBC Family",
    detail: "Anonymous placeholder",
    quote:
      "The coaches care about player development on and off the court.",
  },
];
