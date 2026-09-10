"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainRoutes } from "@/lib/siteConfig";
import BrandName from "./BrandName";
import SiteMark from "./SiteMark";

const navItems = mainRoutes.filter((route) => route.path !== "/privacy" && route.path !== "/faq");
const mobileNavItems = mainRoutes.filter((route) => route.path !== "/privacy");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071827]/95 text-white shadow-[0_10px_36px_rgba(0,0,0,0.18)] backdrop-blur">
      <nav aria-label="Main navigation" className="section-shell flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="GBC Huskies home">
          <SiteMark compact eager className="h-12 w-12" />
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
          aria-controls="mobile-navigation"
          aria-haspopup="dialog"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </nav>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-labelledby="mobile-navigation-title"
        className="mobile-navigation"
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
        onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }}
      >
        <div className="flex min-h-full flex-col p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/15 pb-4">
            <h2 id="mobile-navigation-title"><BrandName className="font-display text-3xl" /></h2>
            <button type="button" aria-label="Close navigation" title="Close navigation" onClick={() => setOpen(false)} className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/20">
              <X size={24} aria-hidden />
            </button>
          </div>
          <nav aria-label="Mobile navigation" className="grid gap-1">
            {mobileNavItems.map((item) => {
              const active = item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-12 items-center border-l-2 px-3 py-3 text-base font-semibold transition ${
                    active ? "border-[#d71920] bg-white/10 text-white" : "border-transparent text-white/88 hover:bg-white/[0.06]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto pt-6">
            <Link
              href="/contact"
              data-analytics-event="click_join_program"
              data-analytics-label="Mobile nav join the Huskies"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#d71920] px-5 font-extrabold text-white"
              onClick={() => setOpen(false)}
            >
              Join the Huskies
            </Link>
          </div>
        </div>
      </dialog>
    </header>
  );
}
