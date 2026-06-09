import Link from "next/link";
import { ArrowRight, CreditCard, HeartHandshake, UserPlus } from "lucide-react";
import { goFundMeUrl, registrationFormUrl } from "@/lib/siteConfig";

const actions = [
  {
    title: "Join a Team",
    text: "Register interest for current team openings, training, and tournament updates.",
    href: registrationFormUrl,
    event: "click_join_program",
    icon: UserPlus,
    button: "Register",
    external: true,
  },
  {
    title: "Make a Payment",
    text: "Find the official Zelle number, cash note, and payment memo format.",
    href: "/payments",
    event: "click_payment_page",
    icon: CreditCard,
    button: "Payment Info",
  },
  {
    title: "Support GBC",
    text: "Help with travel, tournaments, training, gear, and the summer fundraiser.",
    href: goFundMeUrl,
    event: "click_payment_donation",
    icon: HeartHandshake,
    button: "GoFundMe",
    external: true,
  },
];

export default function HomeActions() {
  return (
    <section className="bg-[#020b12] py-12 text-white">
      <div className="section-shell grid gap-4 md:grid-cols-3">
        {actions.map(({ title, text, href, event, icon: Icon, button, external }) => {
          const className =
            "group rounded-lg border border-[#b8d8ea]/18 bg-white/[0.055] p-5 shadow-[0_18px_42px_rgba(0,0,0,0.2)] transition hover:-translate-y-1 hover:border-[#b8d8ea]/42 hover:bg-white/[0.08]";
          const content = (
            <>
              <div className="flex items-center justify-between gap-4">
                <Icon className="h-8 w-8 text-[#b8d8ea] transition group-hover:text-[#d71920]" aria-hidden />
                <span className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/12 px-3 text-xs font-black uppercase tracking-wide text-white/78">
                  {button}
                  <ArrowRight size={14} aria-hidden />
                </span>
              </div>
              <h2 className="mt-5 font-display text-4xl leading-none text-white">{title}</h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-white/64">{text}</p>
            </>
          );

          return external ? (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event={event}
              data-analytics-label={`Homepage ${title}`}
              className={className}
            >
              {content}
            </a>
          ) : (
            <Link
              key={title}
              href={href}
              data-analytics-event={event}
              data-analytics-label={`Homepage ${title}`}
              className={className}
            >
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
