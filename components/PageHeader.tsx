import Link from "next/link";
import BrandName from "./BrandName";
import SiteMark from "./SiteMark";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  const hasGbcPrefix = title.toLowerCase().startsWith("gbc ");

  return (
    <section className="home-arena relative isolate overflow-hidden py-16 text-white md:py-24">
      <div className="court-lines" aria-hidden />
      <div className="road-map-lines" aria-hidden />
      <div className="section-shell relative z-10 grid gap-8 lg:grid-cols-[0.8fr_0.2fr] lg:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b8d8ea]">{eyebrow}</p>
          <h1 className="mt-4 font-display text-6xl leading-none md:text-8xl">
            {hasGbcPrefix ? (
              <>
                <span className="text-[#d71920]">GBC</span>
                {title.slice(3)}
              </>
            ) : (
              title
            )}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/74">{description}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/payments"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#d71920] px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
            >
              Make a Payment
            </Link>
            <Link
              href="/store"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#b8d8ea]/35 bg-white/8 px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/14"
            >
              Team Store
            </Link>
            <Link
              href="/reviews"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#b8d8ea]/35 bg-white/8 px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/14"
            >
              Reviews
            </Link>
          </div>
        </div>
        <div className="hidden justify-end lg:flex">
          <div className="rounded-lg border border-[#b8d8ea]/16 bg-white/8 p-5 shadow-[0_28px_70px_rgba(0,0,0,0.28)]">
            <SiteMark compact className="h-28 w-28" />
          </div>
        </div>
      </div>
      {children}
      <p className="section-shell relative z-10 mt-10 text-xs font-semibold uppercase tracking-[0.16em] text-white/42">
        <BrandName /> secure payment links use Stripe-hosted checkout when enabled.
      </p>
    </section>
  );
}
