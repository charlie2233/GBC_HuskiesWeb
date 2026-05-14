import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarClock, PackageCheck, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import Navbar from "@/components/Navbar";
import BrandName from "@/components/BrandName";
import { buildMetadata } from "@/lib/metadata";
import { getStoreItemBySlug, siteUrl, storeArrivalNotice, storeItems } from "@/lib/siteConfig";

type StoreProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return storeItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: StoreProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getStoreItemBySlug(slug);

  if (!item) {
    notFound();
  }

  return buildMetadata({
    title: `${item.name} | GBC Huskies Team Store`,
    description: `${item.description} ${storeArrivalNotice}`,
    path: `/store/${item.slug}`,
    image: `${siteUrl}${item.image}`,
  });
}

export default async function StoreProductPage({ params }: StoreProductPageProps) {
  const { slug } = await params;
  const item = getStoreItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const relatedItems = storeItems.filter((storeItem) => storeItem.slug !== item.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="overflow-hidden pb-24 md:pb-0">
        <section className="court-texture bg-[#071827] py-10 text-white md:py-16">
          <div className="section-shell">
            <Link
              href="/store"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/14 px-4 text-sm font-extrabold text-white/82 transition hover:-translate-y-0.5 hover:border-[#b8d8ea]/50 hover:text-white"
            >
              <ArrowLeft size={18} aria-hidden />
              Back to Team Store
            </Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
              <div className="overflow-hidden rounded-lg border border-white/12 bg-white/8 shadow-[0_22px_60px_rgba(0,0,0,0.26)]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={1200}
                  height={1200}
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  priority
                  className="aspect-square w-full object-cover"
                />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#b8d8ea]">
                  GBC Huskies Team Store
                </p>
                <h1 className="mt-4 font-display text-7xl leading-none text-white md:text-8xl">
                  {item.name}
                </h1>
                <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/78">
                  {item.detail}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-white/12 bg-white/[0.07] p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-white/46">Price</p>
                    <p className="mt-2 font-display text-5xl leading-none text-[#b8d8ea]">{item.price}</p>
                  </div>
                  <div className="rounded-lg border border-white/12 bg-white/[0.07] p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-white/46">Sizes</p>
                    <p className="mt-3 text-sm font-extrabold leading-6 text-white">{item.sizes}</p>
                  </div>
                </div>

                <p className="mt-5 flex items-start gap-3 rounded-lg border border-[#b8d8ea]/30 bg-[#b8d8ea]/12 p-4 text-sm font-bold leading-6 text-white">
                  <CalendarClock className="mt-0.5 h-5 w-5 flex-none text-[#b8d8ea]" aria-hidden />
                  {storeArrivalNotice}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                  <Link
                    href={`/payments?item=${item.slug}`}
                    data-analytics-event="click_store_item"
                    data-analytics-label={`${item.name} product page payment`}
                    className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#d71920] px-5 font-extrabold text-white shadow-[0_16px_28px_rgba(215,25,32,0.22)] transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
                  >
                    Pay With Zelle / Cash
                  </Link>
                  <Link
                    href="/payments"
                    className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/16 px-5 font-extrabold text-white/82 transition hover:-translate-y-0.5 hover:border-white/36 hover:text-white"
                  >
                    Payment Options
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="section-shell grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.42fr)]">
            <div className="rounded-lg border border-[var(--line)] bg-[#f4f6f8] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <PackageCheck className="h-7 w-7 text-[#d71920]" aria-hidden />
                <h2 className="font-display text-5xl leading-none text-[#071827]">Product Details</h2>
              </div>
              <p className="mt-4 max-w-3xl text-sm font-semibold leading-6 text-[#1f2933]/72">
                {item.description} Confirm sizing and order details with the coach before submitting payment.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {item.features.map((feature) => (
                  <div key={feature} className="rounded-lg border border-[#071827]/10 bg-white p-4">
                    <p className="text-sm font-extrabold leading-6 text-[#071827]">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-lg border border-[#071827]/12 bg-[#071827] p-6 text-white">
              <ShieldCheck className="h-8 w-8 text-[#b8d8ea]" aria-hidden />
              <h2 className="mt-4 text-2xl font-black">Order Notes</h2>
              <div className="mt-4 grid gap-3 text-sm font-semibold leading-6 text-white/72">
                <p>Team store payments can be made through Zelle or cash once the item, size, and amount are confirmed.</p>
                <p>Products, prices, inventory, pickup, and delivery details should be confirmed by the coach.</p>
                <p>
                  <BrandName /> does not collect or store card numbers, bank details, tax info, Zelle login details, or
                  passwords on this website.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-[#f4f6f8] py-16">
          <div className="section-shell">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d71920]">More gear</p>
                <h2 className="mt-2 font-display text-5xl leading-none text-[#071827]">Keep Browsing</h2>
              </div>
              <Link href="/store" className="text-sm font-black text-[#d71920] hover:text-[#071827]">
                View all store items
              </Link>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {relatedItems.map((relatedItem) => (
                <Link
                  key={relatedItem.slug}
                  href={`/store/${relatedItem.slug}`}
                  className="group overflow-hidden rounded-lg border border-[#071827]/12 bg-white shadow-[0_14px_30px_rgba(7,24,39,0.08)] transition hover:-translate-y-1"
                >
                  <Image
                    src={relatedItem.image}
                    alt={relatedItem.imageAlt}
                    width={1200}
                    height={1200}
                    sizes="(min-width: 768px) 30vw, 92vw"
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="p-4">
                    <p className="font-display text-4xl leading-none text-[#071827]">{relatedItem.name}</p>
                    <p className="mt-2 text-sm font-extrabold text-[#d71920]">{relatedItem.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
