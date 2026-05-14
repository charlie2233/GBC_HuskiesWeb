import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarClock, Ruler, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import PaymentLinkButton from "@/components/PaymentLinkButton";
import BrandName from "@/components/BrandName";
import { buildMetadata } from "@/lib/metadata";
import { getSeoTopicsForPath } from "@/lib/seoTopics";
import { storeArrivalNotice, storeItems } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "GBC Huskies Team Store | Basketball Merch & Team Gear",
  description:
    "Shop GBC Huskies team gear, basketball merchandise, uniforms, hoodies, shirts, shorts, and player apparel.",
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
          description="Order team merch, uniforms, and gear through payment links. Items are placeholders until the coach confirms products, prices, inventory, and Stripe links."
          note={
            <>
              <BrandName /> team store orders use Stripe-hosted checkout when payment links are enabled.
            </>
          }
          topics={getSeoTopicsForPath("/store")}
        />

        <section className="bg-white py-16 md:py-24">
          <div className="section-shell">
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
                        <CalendarClock className="mt-0.5 h-4 w-4 flex-none text-[#d71920]" aria-hidden />
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
                      <PaymentLinkButton
                        href={item.url}
                        className="w-full"
                        analyticsEvent="click_store_item"
                        analyticsLabel={item.name}
                      >
                        Order / Pay
                      </PaymentLinkButton>
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
                  This is intentionally not a full shopping cart. Each item can point
                  to a Stripe Payment Link once products, pricing, sizing, and pickup
                  or delivery details are confirmed.
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
