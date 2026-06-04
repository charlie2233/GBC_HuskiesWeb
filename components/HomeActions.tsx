import Link from "next/link";
import { CreditCard, HeartHandshake, MessageSquareHeart, ShoppingBag } from "lucide-react";

const actions = [
  {
    title: "Make a Payment",
    text: "Zelle payment info, cash option, and donation link in one place.",
    href: "/payments",
    event: "click_payment_page",
    icon: CreditCard,
  },
  {
    title: "Become a Sponsor",
    text: "Help support travel, tournaments, training, gear, and summer fundraising.",
    href: "/contact",
    event: "click_contact",
    icon: HeartHandshake,
  },
  {
    title: "Visit Team Store",
    text: "Preview team merch and gear. Ordering is paused until official payment links are ready.",
    href: "/store",
    event: "click_store_page",
    icon: ShoppingBag,
  },
  {
    title: "Leave a Review",
    text: "Parent and player review area with a form link ready when available.",
    href: "/reviews",
    event: "click_reviews_page",
    icon: MessageSquareHeart,
  },
];

export default function HomeActions() {
  return (
    <section className="bg-[#020b12] py-12 text-white">
      <div className="section-shell grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {actions.map(({ title, text, href, event, icon: Icon }) => (
          <Link
            key={title}
            href={href}
            data-analytics-event={event}
            data-analytics-label={`Homepage ${title}`}
            className="group rounded-lg border border-[#b8d8ea]/18 bg-white/[0.055] p-5 shadow-[0_18px_42px_rgba(0,0,0,0.2)] transition hover:-translate-y-1 hover:border-[#b8d8ea]/42 hover:bg-white/[0.08]"
          >
            <Icon className="h-8 w-8 text-[#b8d8ea] transition group-hover:text-[#d71920]" aria-hidden />
            <h2 className="mt-5 font-display text-4xl leading-none text-white">{title}</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-white/64">{text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
