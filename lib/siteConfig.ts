import type { DisplayedReview } from "./reviews";

export const siteUrl = "https://gbchuskies.com";
export const siteName = "GBC Huskies Basketball";
export const organizationName = "GBC Huskies";
export const siteDescription =
  "GBC Huskies is a youth basketball program focused on fundamentals, player development, teamwork, discipline, sportsmanship, work ethic, and helping athletes grow on and off the court.";
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

export const coachProfile = {
  name: "Jayson Gilliam",
  displayName: "Coach Jay",
  title: "Head Coach",
  image: "/media/instagram/aau-club-team.jpg",
  imageAlt:
    "GBC Huskies Instagram program graphic with Coach J contact information and Orange County club team details",
  bio:
    "Coach Jay leads GBC Huskies with a development-first standard built around fundamentals, structure, attention to detail, work ethic, teamwork, and sportsmanship.",
  instagramHandle: "@coachjaygill",
};

export const programStatements = {
  mission:
    "The goal of the program is to teach the fundamentals of basketball so each player can become efficient in all areas of the game. With structure and attention to detail, our focus is to maximize each player's potential while instilling work ethic, teamwork, and sportsmanship. Through basketball, we aspire to have a positive impact on youth by teaching life skills and the importance of serving the community.",
  vision:
    "To be recognized as a top youth basketball program by placing our athletes and their parents' experience at the forefront of our program goals. By combining a high-quality basketball experience with structure and organization, we want our athletes to grow as both players and people, inspiring them to do great things both on and off the basketball court.",
  about:
    "Our program is designed to emphasize fundamental basketball skills through gameplay and training tailored to each individual's needs and skill level. We take pride in studying the trends of today's game and implementing them into our training. Through attention to detail, our goal is to improve basketball skills for athletes who possess a passion for the game and a willingness to learn.",
  values:
    "We emphasize fundamental skill and work to ensure each player is given the best opportunity to grow their game. Through structure, we highlight each player's strengths and challenge them to excel in many different areas while teaching the importance of teamwork, discipline, work ethic, and sportsmanship.",
  slogan: "DEFENSE",
  sloganMeaning: "Demanding Excellence From Everyone No Selfish Exceptions",
};

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
    image: "/media/store/gbc-hoodie.jpg",
    imageAlt: "GBC Huskies navy team hoodie with the circular husky basketball logo on the chest",
    url: process.env.NEXT_PUBLIC_STRIPE_GBC_HOODIE_URL || process.env.NEXT_PUBLIC_STRIPE_MERCH_URL || "",
  },
  {
    name: "GBC T-Shirt",
    description: "Soft everyday team tee with GBC Huskies branding.",
    price: "$25",
    sizes: "Youth S-XL, Adult S-XXL",
    image: "/media/store/gbc-tshirt.jpg",
    imageAlt: "GBC Huskies white team T-shirt with the circular husky basketball logo on the chest",
    url: process.env.NEXT_PUBLIC_STRIPE_GBC_TSHIRT_URL || process.env.NEXT_PUBLIC_STRIPE_MERCH_URL || "",
  },
  {
    name: "GBC Shorts",
    description: "Basketball shorts for training, travel days, and team events.",
    price: "$35",
    sizes: "Youth S-XL, Adult S-XXL",
    image: "/media/store/gbc-shorts.jpg",
    imageAlt: "GBC Huskies navy basketball shorts with the circular husky basketball logo on the leg",
    url: process.env.NEXT_PUBLIC_STRIPE_GBC_SHORTS_URL || process.env.NEXT_PUBLIC_STRIPE_MERCH_URL || "",
  },
  {
    name: "GBC Shooting Shirt",
    description: "Lightweight warmup shirt for practices and tournament weekends.",
    price: "$40",
    sizes: "Youth S-XL, Adult S-XXL",
    image: "/media/store/gbc-shooting-shirt.jpg",
    imageAlt: "GBC Huskies navy long sleeve shooting shirt with red sleeves and the circular husky basketball logo on the chest",
    url: process.env.NEXT_PUBLIC_STRIPE_GBC_SHOOTING_SHIRT_URL || process.env.NEXT_PUBLIC_STRIPE_MERCH_URL || "",
  },
  {
    name: "GBC Backpack",
    description: "Team backpack for shoes, gear, water bottles, and road-season essentials.",
    price: "$60",
    sizes: "One size",
    image: "/media/store/gbc-backpack.jpg",
    imageAlt: "GBC Huskies navy athletic backpack with the circular husky basketball logo on the front pocket",
    url: process.env.NEXT_PUBLIC_STRIPE_GBC_BACKPACK_URL || process.env.NEXT_PUBLIC_STRIPE_MERCH_URL || "",
  },
];

export const reviewFormUrl = process.env.NEXT_PUBLIC_REVIEW_FORM_URL || "";
export const reviewFormEndpoint =
  process.env.NEXT_PUBLIC_REVIEW_FORMSPREE_ENDPOINT ||
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
  "";
export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export const testimonials = [
  {
    id: "placeholder-gbc-parent",
    name: "GBC Parent",
    detail: "Anonymous placeholder",
    quote:
      "GBC has helped my son grow in confidence, discipline, and understanding of the game.",
    rating: 5,
    source: "placeholder",
  },
  {
    id: "placeholder-player-parent",
    name: "Player Parent",
    detail: "Anonymous placeholder",
    quote:
      "The program focuses on fundamentals, teamwork, and accountability.",
    rating: 5,
    source: "placeholder",
  },
  {
    id: "placeholder-gbc-family",
    name: "GBC Family",
    detail: "Anonymous placeholder",
    quote:
      "The coaches care about player development on and off the court.",
    rating: 5,
    source: "placeholder",
  },
] satisfies DisplayedReview[];
