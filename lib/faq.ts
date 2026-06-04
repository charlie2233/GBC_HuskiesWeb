import {
  coachPhoneDisplay,
  contactEmail,
  storeArrivalNotice,
  teamStoreStatus,
  zellePhoneDisplay,
} from "./siteConfig";

export type FaqLink = {
  label: string;
  href: string;
  event?: string;
};

export type FaqItem = {
  category: string;
  question: string;
  answer: string;
  links?: FaqLink[];
};

export const faqItems = [
  {
    category: "Joining",
    question: "How do I ask about joining a GBC Huskies team?",
    answer:
      "Start by contacting the program with the parent or guardian name, player name, grade, age, basketball experience, and what you are looking for. The coach can confirm current team needs, training options, and next steps.",
    links: [
      { label: "Contact GBC", href: "/contact", event: "click_contact" },
      { label: "Teams", href: "/teams" },
    ],
  },
  {
    category: "Training",
    question: "What should players expect from training?",
    answer:
      "Training is built around fundamentals, game-speed skill work, strength and conditioning habits, attention to detail, teamwork, work ethic, and sportsmanship. Players should arrive ready to listen, compete, and improve.",
    links: [{ label: "Training", href: "/training" }],
  },
  {
    category: "Payments",
    question: "How do parents make payments?",
    answer: `Payments can be made by Zelle to ${zellePhoneDisplay} or by cash after the amount is confirmed with the coach. Use a clear memo with the player name and what the payment is for. The website does not collect bank info, card info, tax info, SSNs, Zelle passwords, or payment account details.`,
    links: [{ label: "Payment Options", href: "/payments", event: "click_payment_page" }],
  },
  {
    category: "Team Store",
    question: "Can we order merch or uniforms right now?",
    answer: `${teamStoreStatus.description} The team store is preview-only for now. Once ordering opens, ${storeArrivalNotice.toLowerCase()} Products, prices, sizes, pickup, delivery, and timing should be confirmed before payment.`,
    links: [{ label: "Team Store", href: "/store", event: "click_store_page" }],
  },
  {
    category: "Reviews",
    question: "How are parent and player reviews handled?",
    answer:
      "Families can submit testimonials, but reviews are not auto-published. Only approved public review text is added to the website, and families can choose full name, first name only, or anonymous display. Parent email and player personal information should not be shown publicly.",
    links: [{ label: "Reviews", href: "/reviews", event: "click_reviews_page" }],
  },
  {
    category: "Privacy",
    question: "How does GBC handle player photos and private information?",
    answer:
      "The public website should only use approved photos and safe public program information. Do not submit sensitive private details through public forms. If a family has a concern about a player photo or detail, contact the coach so it can be reviewed.",
    links: [{ label: "Privacy", href: "/privacy" }],
  },
  {
    category: "Contact",
    question: "How fast should families expect a response?",
    answer: `Use the contact page, email ${contactEmail}, or call/text ${coachPhoneDisplay}. Response timing can vary around practices, school schedules, and tournament weekends, so include the important details in the first message.`,
    links: [{ label: "Contact", href: "/contact", event: "click_contact" }],
  },
] satisfies FaqItem[];

export const parentQuickAnswers = [
  {
    title: "Joining a Team",
    text: "Send player grade, age, experience, and the team or training interest.",
    href: "/contact",
    linkLabel: "Contact GBC",
    event: "click_contact",
  },
  {
    title: "Payments",
    text: `Use Zelle to ${zellePhoneDisplay} or cash after the amount is confirmed.`,
    href: "/payments",
    linkLabel: "Payment Options",
    event: "click_payment_page",
  },
  {
    title: "Team Store",
    text: "Store items are preview-only while ordering is paused. Items may take up to 3 weeks once orders open.",
    href: "/store",
    linkLabel: "View Store",
    event: "click_store_page",
  },
  {
    title: "Reviews",
    text: "Testimonials are manually approved before public display.",
    href: "/reviews",
    linkLabel: "Reviews",
    event: "click_reviews_page",
  },
] as const;
