import { ArrowRight, BadgeDollarSign, HeartHandshake, Landmark } from "lucide-react";
import {
  goFundMeUrl,
  zellePhoneDisplay,
} from "@/lib/siteConfig";

const fundraiser = {
  title: "Help Fund the Vegas Trip",
  raised: "$350",
  goal: "$4,500",
  progress: 8,
};

export default function FundraiserStrip() {
  return (
    <section className="border-y border-[#b8d8ea]/14 bg-[#071827] py-5 text-white">
      <div className="section-shell grid gap-4 lg:grid-cols-[1fr_auto_auto] lg:items-center">
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-[#d71920]">
            <HeartHandshake size={25} aria-hidden />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b8d8ea]">
              Summer fundraiser
            </p>
            <h2 className="mt-1 font-display text-4xl leading-none text-white md:text-5xl">
              {fundraiser.title}
            </h2>
          </div>
        </div>

        <div className="rounded-lg border border-white/12 bg-white/[0.055] p-4 lg:min-w-72">
          <div className="flex items-center justify-between gap-4 text-sm font-black">
            <span className="text-[#b8d8ea]">{fundraiser.raised} raised</span>
            <span className="text-white/72">Goal {fundraiser.goal}</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/14">
            <div className="h-full rounded-full bg-[#d71920]" style={{ width: `${fundraiser.progress}%` }} />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[25rem]">
          <a
            href={goFundMeUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="click_payment_donation"
            data-analytics-label="Homepage fundraiser strip GoFundMe"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
          >
            GoFundMe
            <ArrowRight size={17} aria-hidden />
          </a>
          <a
            href="/payments"
            data-analytics-event="click_payment_page"
            data-analytics-label="Homepage fundraiser strip Zelle cash"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#b8d8ea]/28 px-5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            <Landmark size={17} aria-hidden />
            Zelle / Cash
          </a>
        </div>

        <p className="flex items-center gap-2 text-sm font-semibold leading-6 text-white/64 lg:col-span-3">
          <BadgeDollarSign className="h-5 w-5 flex-none text-[#b8d8ea]" aria-hidden />
          Zelle payments can be sent to {zellePhoneDisplay}. Cash is accepted through Coach Jay.
        </p>
      </div>
    </section>
  );
}
