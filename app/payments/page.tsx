import type { Metadata } from "next";
import { BadgeDollarSign, CalendarDays, CreditCard, HeartHandshake, Repeat2, ShieldCheck, ShoppingBag } from "lucide-react";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import PaymentLinkButton from "@/components/PaymentLinkButton";
import { paymentItems, siteUrl } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "GBC Huskies Payments | Secure Team Payments",
  description:
    "Pay GBC Huskies team fees, tournament fees, monthly payments, donations, merch, and custom payments through secure public payment links.",
  alternates: {
    canonical: "/payments",
  },
  openGraph: {
    title: "GBC Huskies Payments",
    description: "Secure public payment links for GBC Huskies families and supporters.",
    url: `${siteUrl}/payments`,
  },
};

const icons = [BadgeDollarSign, CalendarDays, Repeat2, HeartHandshake, ShoppingBag, CreditCard];

export default function PaymentsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageHeader
          eyebrow="Secure parent payments"
          title="GBC Huskies Payments"
          description="Parents and supporters can pay team fees, tournament fees, donations, merch, or monthly payments through secure payment links once the coach provides them."
        />

        <section className="bg-[#f4f6f8] py-16 md:py-24">
          <div className="section-shell">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {paymentItems.map((item, index) => {
                const Icon = icons[index] ?? CreditCard;

                return (
                  <article
                    key={item.title}
                    className="flex min-h-72 flex-col justify-between rounded-lg border border-[var(--line)] bg-white p-5 shadow-[0_16px_36px_rgba(7,24,39,0.08)]"
                  >
                    <div>
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#071827] text-[#b8d8ea]">
                          <Icon size={25} aria-hidden />
                        </div>
                        <span className="rounded-lg bg-[#b8d8ea]/32 px-3 py-2 text-xs font-black uppercase text-[#071827]">
                          {item.type}
                        </span>
                      </div>
                      <h2 className="font-display text-4xl leading-none text-[#071827]">{item.title}</h2>
                      <p className="mt-3 text-sm font-semibold leading-6 text-[#1f2933]/72">{item.description}</p>
                    </div>
                    <PaymentLinkButton href={item.url} className="mt-6 w-full">
                      {item.buttonText}
                    </PaymentLinkButton>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 grid gap-4 rounded-lg border border-[#071827]/12 bg-[#071827] p-5 text-white md:grid-cols-[auto_1fr] md:items-start md:p-6">
              <ShieldCheck className="h-9 w-9 text-[#b8d8ea]" aria-hidden />
              <div>
                <h2 className="text-xl font-black">Payment safety note</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/68">
                  This website does not collect or store card numbers, bank information,
                  tax information, SSNs, or Stripe passwords. When payment links are
                  added, checkout happens on Stripe-hosted pages owned by the team&apos;s
                  Stripe account.
                </p>
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
