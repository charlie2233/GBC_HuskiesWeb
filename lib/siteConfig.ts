export const siteUrl = "https://gbchuskies.com";

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

export const testimonials = [
  {
    name: "Huskies Parent",
    detail: "14U family",
    quote:
      "The program has helped our player grow in confidence, discipline, and understanding of the game.",
  },
  {
    name: "Player Review",
    detail: "Tournament team",
    quote:
      "Practices are competitive, the standards are clear, and every tournament feels like a chance to prove the work.",
  },
  {
    name: "Huskies Family",
    detail: "Skills development",
    quote:
      "The training environment is serious but supportive, with a real focus on habits that translate to games.",
  },
];

