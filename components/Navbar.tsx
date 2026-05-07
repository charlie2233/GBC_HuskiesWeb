"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import BrandName from "./BrandName";
import SiteMark from "./SiteMark";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Teams", href: "/#teams" },
  { label: "Tournaments", href: "/#tournaments" },
  { label: "Media", href: "/#media" },
  { label: "Payments", href: "/payments" },
  { label: "Team Store", href: "/store" },
  { label: "Reviews", href: "/reviews" },
  { label: "Support", href: "/#support" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071827]/95 text-white shadow-[0_10px_36px_rgba(0,0,0,0.18)] backdrop-blur">
      <nav className="section-shell flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="GBC Huskies home">
          <SiteMark compact className="h-12 w-12" />
          <BrandName className="font-display text-3xl leading-none" />
        </Link>

        <div className="hidden items-center gap-4 text-sm font-semibold lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/82 transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-semibold text-white/88"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
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
