import type { Metadata } from "next";
import {
  ArrowRight,
  Banknote,
  HeartHandshake,
  Info,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ZellePaymentActions from "@/components/ZellePaymentActions";
import { buildMetadata } from "@/lib/metadata";
import { getSeoTopicsForPath } from "@/lib/seoTopics";
import {
  coachPhoneHref,
  goFundMeUrl,
  zellePhoneDisplay,
  zellePhoneValue,
} from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "GBC Huskies Payments | Zelle, Cash & Donations",
  description:
    "GBC Huskies payment information for Zelle, cash, and donations. Confirm amounts with Coach Jay before sending payment.",
  path: "/payments",
});

export default function PaymentsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageHeader
          eyebrow="Parent payment hub"
          title="GBC Huskies Payments"
          description="Use this page for the official Zelle number, cash payment note, and donation link. Confirm the amount with Coach Jay before sending payment."
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
                    One Zelle number is used for approved GBC Huskies payments.
                    Confirm the amount first, then use a clear memo so the
                    payment can be matched cleanly.
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
                      Player Name - What The Payment Is For
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
                    Cash payments can be made directly to the coach. Confirm the
                    amount, player name, and payment purpose before handing in
                    cash, then keep your own receipt or note.
                  </p>
                </div>

                <div className="rounded-lg border border-[#071827]/12 bg-white p-6 shadow-[0_16px_36px_rgba(7,24,39,0.08)]">
                  <HeartHandshake className="h-9 w-9 text-[#d71920]" aria-hidden />
                  <h2 className="mt-4 font-display text-5xl leading-none text-[#071827]">Donations</h2>
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#1f2933]/72">
                    Supporters can help the Huskies with travel, tournaments,
                    training access, uniforms, equipment, and summer fundraising.
                  </p>
                  <a
                    href={goFundMeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-analytics-event="click_payment_donation"
                    data-analytics-label="Payments page GoFundMe"
                    className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
                  >
                    Donate Through GoFundMe
                    <ArrowRight size={18} aria-hidden />
                  </a>
                </div>

                <div className="rounded-lg border border-[#071827]/12 bg-[#071827] p-6 text-white">
                  <ShieldCheck className="h-9 w-9 text-[#b8d8ea]" aria-hidden />
                  <h2 className="mt-4 text-xl font-black">Payment safety note</h2>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white/68">
                    This website does not collect or store card numbers, bank
                    information, tax information, SSNs, Zelle login details, or
                    passwords. Payments happen through your own Zelle app or by
                    cash.
                  </p>
                </div>
              </aside>
            </div>

            <div className="mt-8 rounded-lg border border-[#071827]/12 bg-white p-5 md:p-6">
              <div className="flex items-start gap-3">
                <Info className="mt-1 h-5 w-5 flex-none text-[#d71920]" aria-hidden />
                <div>
                  <h2 className="text-xl font-black text-[#071827]">Before sending payment</h2>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#1f2933]/72">
                    Confirm the correct amount and purpose with Coach Jay before
                    sending funds. Keep your Zelle or cash receipt for your own
                    records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
