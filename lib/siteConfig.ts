import type { DisplayedReview } from "./reviews";

export const siteUrl = "https://gbchuskies.com";
export const siteName = "GBC Huskies Basketball";
export const programFullName = "Gilliam Basketball Club";
export const organizationName = "Gilliam Basketball Club";
export const siteDescription =
  "Gilliam Basketball Club, home of GBC Huskies, is a youth basketball program focused on fundamentals, player development, teamwork, discipline, sportsmanship, work ethic, and helping athletes grow on and off the court.";
export const logoPath = "/brand/gbc-huskies-circle-logo.png";
export const logoUrl = `${siteUrl}${logoPath}`;
export const ogImageUrl = logoUrl;
export const contactEmail = "gbchuskiesoc@gmail.com";
export const coachPhoneDisplay = "657-253-0078";
export const coachPhoneHref = "tel:+16572530078";
export const zellePhoneDisplay = coachPhoneDisplay;
export const zellePhoneValue = "6572530078";
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
    "Coach Jay leads Gilliam Basketball Club with a development-first standard built around fundamentals, structure, attention to detail, work ethic, teamwork, and sportsmanship.",
  instagramHandle: "@coachjaygill",
};

export const coachInfluence = {
  title: "Coach Jay's College Hoops Influence",
  label: "UConn basketball fan, GBC standards",
  text:
    "Coach Jay loves UConn basketball, and that influence shows up as a clean college-hoops standard: disciplined defense, spacing, toughness, ball movement, and team-first habits.",
  note: "GBC is not affiliated with UConn. This is a coaching influence note only.",
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
    description: "Season, roster, or team participation payments for confirmed players.",
    purpose: "Use this for approved season dues, roster fees, or team participation costs.",
    examples: ["Season fee", "Roster spot", "Team participation balance"],
    memo: "Player Name - Team Fee",
    confirm: "Confirm the amount, due date, and whether it is one payment or part of a payment plan.",
    type: "team",
  },
  {
    title: "Tournament Fees",
    description: "Event payments for tournament weekends, road events, and team competition costs.",
    purpose: "Use this when Coach Jay gives a specific event or tournament amount.",
    examples: ["SoCal event fee", "Vegas tournament fee", "Weekend tournament balance"],
    memo: "Player Name - Tournament Name",
    confirm: "Confirm the event name, player amount, and deadline before sending.",
    type: "events",
  },
  {
    title: "Monthly Payments",
    description: "Recurring or split payments when a monthly arrangement has been approved.",
    purpose: "Use this only after a monthly payment schedule is arranged with the coach.",
    examples: ["Monthly team payment", "Split season payment", "Payment plan installment"],
    memo: "Player Name - Month - Monthly",
    confirm: "Confirm the monthly amount, the covered month, and how many payments remain.",
    type: "monthly",
  },
  {
    title: "Donations",
    description: "Program support for travel, tournament access, training, equipment, and team needs.",
    purpose: "Use this for supporter contributions that are not tied to one player's required fee.",
    examples: ["General donation", "Travel support", "Team support contribution"],
    memo: "Donation - Supporter Name",
    confirm: "Confirm whether the donation should be general support or for a specific team need.",
    type: "donation",
  },
  {
    title: "Uniforms & Merch",
    description: "Team gear, uniforms, shooting shirts, hoodies, shirts, shorts, and store items.",
    purpose: "Store payments are paused until official order/payment links are ready.",
    examples: ["Store paused", "Wait for coach confirmation", "Do not send merch payment yet"],
    memo: "Player Name - Item - Size",
    confirm: "Do not send merch or uniform payments until the coach confirms the store has reopened.",
    type: "gear",
  },
  {
    title: "Custom Payments",
    description: "Any coach-approved payment that does not fit the standard categories.",
    purpose: "Use this only when Coach Jay gives a custom amount or specific payment reason.",
    examples: ["Adjusted balance", "Family arrangement", "Coach-approved custom amount"],
    memo: "Player Name - Custom Purpose",
    confirm: "Confirm the exact purpose and amount in writing before paying.",
    type: "custom",
  },
];

export const storeArrivalNotice = "Please allow up to 3 weeks for team store items to arrive.";
export const teamStoreStatus = {
  locked: true,
  label: "Store paused",
  title: "Team Store Locked For Now",
  description:
    "Ordering is paused while official Stripe/order links are being set up. Please do not send merch or uniform payments until the coach confirms the store is open.",
  note:
    "Items are shown as a preview only. Products, prices, sizes, inventory, pickup, delivery, and arrival timing may change before ordering opens.",
  cta: "Ordering Paused",
};

export const storeItems = [
  {
    slug: "gbc-hoodie",
    name: "GBC Hoodie",
    description: "Heavyweight team hoodie for players, parents, and supporters.",
    detail:
      "A cold-weather team layer for road weekends, gym arrivals, and parents supporting from the stands.",
    price: "$55",
    sizes: "Youth S-XL, Adult S-XXL",
    image: "/media/store/gbc-hoodie.jpg",
    imageAlt: "GBC Huskies navy team hoodie with the circular husky basketball logo on the chest",
    features: ["Heavyweight pullover feel", "Team logo chest graphic", "Player and parent sizing"],
  },
  {
    slug: "gbc-t-shirt",
    name: "GBC T-Shirt",
    description: "Soft everyday team tee with GBC Huskies branding.",
    detail:
      "A clean everyday shirt for practices, school days, tournament travel, and family supporters.",
    price: "$25",
    sizes: "Youth S-XL, Adult S-XXL",
    image: "/media/store/gbc-tshirt.jpg",
    imageAlt: "GBC Huskies white team T-shirt with the circular husky basketball logo on the chest",
    features: ["Soft daily-wear fit", "Team logo chest graphic", "Youth and adult sizing"],
  },
  {
    slug: "gbc-shorts",
    name: "GBC Shorts",
    description: "Basketball shorts for training, travel days, and team events.",
    detail:
      "Team basketball shorts built for training sessions, warmups, travel days, and casual team wear.",
    price: "$35",
    sizes: "Youth S-XL, Adult S-XXL",
    image: "/media/store/gbc-shorts.jpg",
    imageAlt: "GBC Huskies navy basketball shorts with the circular husky basketball logo on the leg",
    features: ["Basketball-ready length", "Logo detail on leg", "Training and travel use"],
  },
  {
    slug: "gbc-shooting-shirt",
    name: "GBC Shooting Shirt",
    description: "Lightweight warmup shirt for practices and tournament weekends.",
    detail:
      "A long-sleeve shooting shirt for warmups, practice days, and road-season tournament weekends.",
    price: "$40",
    sizes: "Youth S-XL, Adult S-XXL",
    image: "/media/store/gbc-shooting-shirt.jpg",
    imageAlt: "GBC Huskies navy long sleeve shooting shirt with red sleeves and the circular husky basketball logo on the chest",
    features: ["Lightweight warmup layer", "Red sleeve accent", "Tournament-weekend look"],
  },
  {
    slug: "gbc-backpack",
    name: "GBC Backpack",
    description: "Team backpack for shoes, gear, water bottles, and road-season essentials.",
    detail:
      "A team backpack for keeping shoes, uniforms, bottles, and tournament-day essentials organized.",
    price: "$60",
    sizes: "One size",
    image: "/media/store/gbc-backpack.jpg",
    imageAlt: "GBC Huskies navy athletic backpack with the circular husky basketball logo on the front pocket",
    features: ["Team travel gear", "Logo front pocket", "Room for basketball essentials"],
  },
];

export function getStoreItemBySlug(slug: string) {
  return storeItems.find((item) => item.slug === slug);
}

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
