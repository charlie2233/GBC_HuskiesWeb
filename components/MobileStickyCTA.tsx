import Link from "next/link";
import { HeartHandshake, Landmark, MessageCircle } from "lucide-react";
import { goFundMeUrl } from "@/lib/siteConfig";

const mobileActions = [
  {
    label: "Contact GBC",
    href: "/contact",
    event: "click_contact",
    analyticsLabel: "Mobile sticky contact",
    icon: MessageCircle,
  },
  {
    label: "GoFundMe",
    href: goFundMeUrl,
    event: "click_payment_donation",
    analyticsLabel: "Mobile sticky GoFundMe",
    icon: HeartHandshake,
    external: true,
  },
  {
    label: "Zelle / Cash",
    href: "/payments",
    event: "click_payment_page",
    analyticsLabel: "Mobile sticky payments",
    icon: Landmark,
  },
];

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/12 bg-[#071827]/96 p-3 shadow-[0_-12px_32px_rgba(0,0,0,0.28)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        {mobileActions.map(({ label, href, event, analyticsLabel, icon: Icon, external }) => {
          const className =
            "flex min-h-12 min-w-0 flex-col items-center justify-center gap-1 rounded-lg px-2 text-center text-[11px] font-extrabold leading-tight shadow-[0_14px_30px_rgba(215,25,32,0.18)] transition active:scale-[0.98]";
          const content = (
            <>
              <Icon className="h-4 w-4 flex-none" aria-hidden />
              <span className="truncate">{label}</span>
            </>
          );

          return external ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event={event}
              data-analytics-label={analyticsLabel}
              className={`${className} bg-[#d71920] text-white`}
            >
              {content}
            </a>
          ) : (
            <Link
              key={label}
              href={href}
              data-analytics-event={event}
              data-analytics-label={analyticsLabel}
              className={`${className} bg-white text-[#071827]`}
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
