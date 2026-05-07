"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainRoutes } from "@/lib/siteConfig";
import BrandName from "./BrandName";
import SiteMark from "./SiteMark";

const navItems = mainRoutes.filter((route) => route.path !== "/privacy");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071827]/95 text-white shadow-[0_10px_36px_rgba(0,0,0,0.18)] backdrop-blur">
      <nav className="section-shell flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="GBC Huskies home">
          <SiteMark compact className="h-12 w-12" />
          <BrandName className="font-display text-3xl leading-none" />
        </Link>

        <div className="hidden items-center gap-4 text-sm font-semibold lg:flex">
          {navItems.map((item) => {
            const active = item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                href={item.path}
                aria-current={active ? "page" : undefined}
                className={`nav-link ${active ? "is-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            data-analytics-event="click_join_program"
            data-analytics-label="Desktop nav join the Huskies"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#d71920] px-5 text-sm font-extrabold text-white shadow-[0_14px_28px_rgba(215,25,32,0.28)] transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
          >
            Join the Huskies
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[#071827] lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navItems.map((item) => {
              const active = item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-3 py-3 text-base font-semibold transition ${
                    active ? "bg-white/10 text-white" : "text-white/88 hover:bg-white/[0.06]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              data-analytics-event="click_join_program"
              data-analytics-label="Mobile nav join the Huskies"
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#d71920] px-5 font-extrabold text-white"
              onClick={() => setOpen(false)}
            >
              Join the Huskies
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
