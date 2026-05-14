import type { Metadata } from "next";
import {
  Banknote,
  BadgeDollarSign,
  CalendarDays,
  HeartHandshake,
  Info,
  Landmark,
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

const icons = [BadgeDollarSign, CalendarDays, Repeat2, HeartHandshake, ShoppingBag, WalletCards];

const paymentSteps = [
  {
    title: "Confirm the amount",
    description: "Check the exact amount and purpose with Coach Jay before sending payment.",
  },
  {
    title: "Send through Zelle",
    description: `Use ${zellePhoneDisplay} as the Zelle recipient and include the player name plus payment purpose in the memo.`,
  },
  {
    title: "Cash is accepted",
    description: "Cash payments can be made directly to the coach when arranged in person.",
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
          description="Team fees, tournament fees, monthly payments, donations, uniforms, merch, and custom payments can use one simple payment method."
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
                    Use one Zelle number for GBC Huskies team payments. Add the player name and payment purpose in the
                    memo so the payment can be matched cleanly.
                  </p>

                  <div className="mt-6 rounded-lg border border-[#b8d8ea]/26 bg-white/[0.06] p-5">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-white/44">Zelle Recipient</p>
                    <p className="mt-3 font-display text-6xl leading-none text-[#b8d8ea] md:text-7xl">
                      {zellePhoneDisplay}
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
                    purpose before handing in cash.
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

            <div className="mt-8 grid gap-4 md:grid-cols-3">
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
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d71920]">Payment purposes</p>
                  <h2 className="mt-2 font-display text-5xl leading-none text-[#071827]">
                    One Method, Multiple Needs
                  </h2>
                </div>
                <p className="max-w-xl text-sm font-semibold leading-6 text-[#1f2933]/68">
                  Use Zelle or cash for any coach-approved payment. These cards are labels to help families choose the
                  right memo and purpose.
                </p>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {paymentItems.map((item, index) => {
                  const Icon = icons[index] ?? WalletCards;

                  return (
                    <article
                      key={item.title}
                      className="rounded-lg border border-[var(--line)] bg-white p-5 shadow-[0_16px_36px_rgba(7,24,39,0.08)]"
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
                      <p className="mt-4 flex items-start gap-2 rounded-lg border border-[#d71920]/14 bg-[#d71920]/6 p-3 text-xs font-bold leading-5 text-[#071827]/76">
                        <Info className="mt-0.5 h-4 w-4 flex-none text-[#d71920]" aria-hidden />
                        Memo idea: player name + {item.title.toLowerCase()}
                      </p>
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
