import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LockKeyhole, Ruler, ShieldCheck, Truck } from "lucide-react";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import BrandName from "@/components/BrandName";
import { buildMetadata } from "@/lib/metadata";
import { getSeoTopicsForPath } from "@/lib/seoTopics";
import { storeArrivalNotice, storeItems, teamStoreStatus } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "GBC Huskies Team Store | Store Paused",
  description:
    "Preview GBC Huskies team gear while the team store is paused until official Stripe or order payment links are ready.",
  path: "/store",
});

export default function StorePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <PageHeader
          eyebrow="Team gear"
          title="Team Store"
          description={teamStoreStatus.description}
          note={
            <>
              <BrandName /> team store items are preview-only until ordering reopens.
            </>
          }
          topics={getSeoTopicsForPath("/store")}
        />

        <section className="bg-white py-16 md:py-24">
          <div className="section-shell">
            <div className="mb-8 grid gap-4 rounded-lg border border-[#d71920]/24 bg-[#071827] p-5 text-white shadow-[0_20px_48px_rgba(7,24,39,0.18)] md:grid-cols-[auto_1fr_auto] md:items-center md:p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#d71920]">
                <LockKeyhole size={27} aria-hidden />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#b8d8ea]">
                  {teamStoreStatus.label}
                </p>
                <h2 className="mt-2 font-display text-5xl leading-none">{teamStoreStatus.title}</h2>
                <p className="mt-3 text-sm font-semibold leading-6 text-white/68">
                  {teamStoreStatus.note}
                </p>
              </div>
              <Link
                href="/contact"
                data-analytics-event="click_contact"
                data-analytics-label="Store locked contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#b8d8ea]/28 px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:border-[#b8d8ea]/60"
              >
                Ask Coach
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {storeItems.map((item) => (
                <article
                  key={item.name}
                  className="group flex min-h-80 flex-col justify-between overflow-hidden rounded-lg border border-[var(--line)] bg-[#f4f6f8] shadow-[0_16px_36px_rgba(7,24,39,0.08)]"
                >
                  <div className="relative overflow-hidden border-b border-[#071827]/10 bg-[#071827]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={1200}
                      height={1200}
                      sizes="(min-width: 1280px) 28vw, (min-width: 768px) 46vw, 92vw"
                      className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                    />
                    <p className="absolute bottom-4 right-5 rounded-lg bg-[#071827]/82 px-3 py-2 font-display text-3xl leading-none text-white shadow-[0_14px_28px_rgba(0,0,0,0.2)]">
                      GBC
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="font-display text-4xl leading-none text-[#071827]">{item.name}</h2>
                        <p className="rounded-lg bg-[#d71920] px-3 py-2 text-sm font-black text-white">
                          {item.price}
                        </p>
                      </div>
                      <p className="mt-3 text-sm font-semibold leading-6 text-[#1f2933]/72">{item.description}</p>
                      <p className="mt-4 flex items-start gap-2 rounded-lg border border-[#071827]/10 bg-white p-3 text-xs font-bold leading-5 text-[#1f2933]/72">
                        <Ruler className="mt-0.5 h-4 w-4 flex-none text-[#d71920]" aria-hidden />
                        Sizes: {item.sizes}
                      </p>
                      <p className="mt-3 flex items-start gap-2 rounded-lg border border-[#b8d8ea]/70 bg-[#eaf4fa] p-3 text-xs font-bold leading-5 text-[#071827]/78">
                        <Truck className="mt-0.5 h-4 w-4 flex-none text-[#d71920]" aria-hidden />
                        {storeArrivalNotice}
                      </p>
                    </div>
                    <div className="mt-5 grid gap-3">
                      <Link
                        href={`/store/${item.slug}`}
                        data-analytics-event="click_store_product_detail"
                        data-analytics-label={item.name}
                        className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#071827]/14 bg-white px-5 font-extrabold text-[#071827] transition hover:-translate-y-0.5 hover:border-[#d71920]/40 hover:text-[#d71920]"
                      >
                        View Details
                      </Link>
                      <span
                        aria-disabled="true"
                        className="inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-[#071827]/12 bg-[#071827]/8 px-5 font-extrabold text-[#071827]/46"
                      >
                        <LockKeyhole size={18} aria-hidden />
                        {teamStoreStatus.cta}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-4 rounded-lg border border-[#071827]/12 bg-[#f4f6f8] p-5 md:grid-cols-[auto_1fr] md:items-start md:p-6">
              <ShieldCheck className="h-9 w-9 text-[#d71920]" aria-hidden />
              <div>
                <h2 className="text-xl font-black text-[#071827]">MVP store model</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#1f2933]/72">
                  This is intentionally not a full shopping cart. Families can preview product details, but ordering is
                  locked until the official payment/order links are ready and the coach confirms the store has reopened.
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
