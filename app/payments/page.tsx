import type { Metadata } from "next";
import {
  Banknote,
  BadgeDollarSign,
  CalendarDays,
  CheckCircle2,
  HeartHandshake,
  Info,
  Landmark,
  MessageCircle,
  Repeat2,
  ShieldCheck,
  ShoppingBag,
  WalletCards,
} from "lucide-react";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import BrandName from "@/components/BrandName";
import ZellePaymentActions from "@/components/ZellePaymentActions";
import { buildMetadata } from "@/lib/metadata";
import { getSeoTopicsForPath } from "@/lib/seoTopics";
import {
  coachPhoneHref,
  paymentItems,
  zellePhoneDisplay,
  zellePhoneValue,
} from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "GBC Huskies Payments | Zelle, Cash, Team Fees & Donations",
  description:
    "Make GBC Huskies payments for team fees, tournament fees, donations, merchandise, and monthly payments by Zelle to 657-253-0078 or by cash.",
  path: "/payments",
});

const icons = {
  team: BadgeDollarSign,
  events: CalendarDays,
  monthly: Repeat2,
  donation: HeartHandshake,
  gear: ShoppingBag,
  custom: WalletCards,
};

const paymentSteps = [
  {
    title: "Pick the purpose",
    description: "Choose the card that matches what the payment is for.",
  },
  {
    title: "Confirm the amount",
    description: "Check the exact amount, deadline, and details with Coach Jay before sending.",
  },
  {
    title: "Use a clear memo",
    description: "Include player name plus the payment purpose so it can be matched cleanly.",
  },
  {
    title: "Pay by Zelle or cash",
    description: `Use ${zellePhoneDisplay} for Zelle, or arrange cash directly with the coach.`,
  },
];

export default function PaymentsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageHeader
          eyebrow="Parent payment hub"
          title="GBC Huskies Payments"
          description="Choose what the payment is for, confirm the amount with Coach Jay, then pay through Zelle or cash with a clear memo."
          note={
            <>
              Payments can be made via Zelle ({zellePhoneDisplay}) or cash.
            </>
          }
          topics={getSeoTopicsForPath("/payments")}
        />

        <section className="bg-[#f4f6f8] py-16 md:py-24">
          <div className="section-shell">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-stretch">
              <div className="relative overflow-hidden rounded-lg bg-[#071827] p-6 text-white shadow-[0_22px_60px_rgba(7,24,39,0.26)] md:p-8">
                <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#b8d8ea]/16" />
                <div className="absolute -bottom-28 left-8 h-72 w-72 rounded-full border border-[#d71920]/24" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/[0.07] px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#b8d8ea]">
                    <Landmark size={16} aria-hidden />
                    Primary Method
                  </div>
                  <h2 className="mt-6 font-display text-6xl leading-none text-white md:text-8xl">
                    Pay With Zelle
                  </h2>
                  <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/72 md:text-lg md:leading-8">
                    One Zelle number is used for all approved GBC Huskies payments. The important part is the memo:
                    write who it is for and what it covers.
                  </p>

                  <div className="mt-6 rounded-lg border border-[#b8d8ea]/26 bg-white/[0.06] p-5">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-white/44">Zelle Recipient</p>
                    <p className="mt-3 font-display text-6xl leading-none text-[#b8d8ea] md:text-7xl">
                      {zellePhoneDisplay}
                    </p>
                  </div>

                  <div className="mt-5 rounded-lg border border-[#d71920]/28 bg-[#d71920]/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b8d8ea]">
                      Recommended memo format
                    </p>
                    <p className="mt-2 text-lg font-black leading-7 text-white">
                      Player Name - Payment Purpose
                    </p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white/60">
                      Example: Player Name - Vegas Tournament Fee
                    </p>
                  </div>

                  <div className="mt-5">
                    <ZellePaymentActions
                      phoneDisplay={zellePhoneDisplay}
                      phoneValue={zellePhoneValue}
                      phoneHref={coachPhoneHref}
                    />
                  </div>
                </div>
              </div>

              <aside className="grid gap-4">
                <div className="rounded-lg border border-[#071827]/12 bg-white p-6 shadow-[0_16px_36px_rgba(7,24,39,0.08)]">
                  <Banknote className="h-9 w-9 text-[#d71920]" aria-hidden />
                  <h2 className="mt-4 font-display text-5xl leading-none text-[#071827]">Cash Option</h2>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#1f2933]/72">
                    Cash payments can be made directly to the coach. Confirm the amount, player name, and payment
                    purpose before handing in cash, then keep your own receipt or note.
                  </p>
                </div>

                <div className="rounded-lg border border-[#071827]/12 bg-[#071827] p-6 text-white">
                  <ShieldCheck className="h-9 w-9 text-[#b8d8ea]" aria-hidden />
                  <h2 className="mt-4 text-xl font-black">Payment safety note</h2>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/68">
                    This website does not collect or store card numbers, bank information, tax information, SSNs, Zelle
                    login details, or passwords. Payments happen through your own Zelle app or by cash.
                  </p>
                </div>
              </aside>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {paymentSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-lg border border-[#071827]/12 bg-white p-5 shadow-[0_14px_30px_rgba(7,24,39,0.07)]"
                >
                  <p className="font-display text-5xl leading-none text-[#d71920]">0{index + 1}</p>
                  <h2 className="mt-3 text-xl font-black text-[#071827]">{step.title}</h2>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#1f2933]/72">{step.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d71920]">Choose payment purpose</p>
                  <h2 className="mt-2 font-display text-5xl leading-none text-[#071827]">
                    What Is This Payment For?
                  </h2>
                </div>
                <p className="max-w-xl text-sm font-semibold leading-6 text-[#1f2933]/68">
                  Each option uses the same Zelle/cash payment flow. Pick the purpose first so the payment is easy to
                  track for the team and for your family.
                </p>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {paymentItems.map((item) => {
                  const Icon = icons[item.type as keyof typeof icons] ?? WalletCards;

                  return (
                    <article
                      key={item.title}
                      className="flex flex-col rounded-lg border border-[var(--line)] bg-white p-5 shadow-[0_16px_36px_rgba(7,24,39,0.08)]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#071827] text-[#b8d8ea]">
                          <Icon size={24} aria-hidden />
                        </div>
                        <span className="rounded-lg bg-[#b8d8ea]/32 px-3 py-2 text-xs font-black uppercase text-[#071827]">
                          {item.type}
                        </span>
                      </div>
                      <h3 className="mt-5 font-display text-4xl leading-none text-[#071827]">{item.title}</h3>
                      <p className="mt-3 text-sm font-semibold leading-6 text-[#1f2933]/72">{item.description}</p>

                      <div className="mt-4 rounded-lg border border-[#071827]/10 bg-[#f4f6f8] p-4">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d71920]">
                          What it covers
                        </p>
                        <p className="mt-2 text-sm font-bold leading-6 text-[#071827]/78">{item.purpose}</p>
                      </div>

                      <div className="mt-4">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#071827]/46">
                          Common uses
                        </p>
                        <ul className="mt-3 grid gap-2">
                          {item.examples.map((example) => (
                            <li key={example} className="flex items-start gap-2 text-sm font-semibold leading-6 text-[#1f2933]/72">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#d71920]" aria-hidden />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 grid gap-3">
                        <p className="flex items-start gap-2 rounded-lg border border-[#d71920]/14 bg-[#d71920]/6 p-3 text-xs font-bold leading-5 text-[#071827]/76">
                          <Info className="mt-0.5 h-4 w-4 flex-none text-[#d71920]" aria-hidden />
                          Zelle memo: {item.memo}
                        </p>
                        <p className="flex items-start gap-2 rounded-lg border border-[#b8d8ea]/70 bg-[#eaf4fa] p-3 text-xs font-bold leading-5 text-[#071827]/76">
                          <MessageCircle className="mt-0.5 h-4 w-4 flex-none text-[#d71920]" aria-hidden />
                          Confirm first: {item.confirm}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-[#071827]/12 bg-white p-5 md:p-6">
              <h2 className="text-xl font-black text-[#071827]">Before sending payment</h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#1f2933]/72">
                Confirm the correct amount with <BrandName /> before sending funds. Keep your Zelle or cash receipt for
                your own records.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
