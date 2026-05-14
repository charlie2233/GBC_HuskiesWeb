import Link from "next/link";
import {
  coachInstagramUrl,
  contactEmail,
  goFundMeUrl,
  instagramUrl,
  mainRoutes,
  programFullName,
} from "@/lib/siteConfig";
import BrandName from "./BrandName";
import SiteMark from "./SiteMark";

export default function Footer() {
  return (
    <footer className="bg-[#101820] py-12 text-white">
      <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <SiteMark compact className="h-12 w-12" />
            <div>
              <p className="font-display text-3xl leading-none">
                <BrandName suffix="Basketball" />
              </p>
              <p className="mt-1 text-sm text-white/62">{programFullName} • Orange County, CA</p>
            </div>
          </div>
        </div>
        <div className="grid gap-2 text-sm text-white/72 md:text-right">
          {mainRoutes.map((route) => (
            <Link key={route.path} href={route.path} className="text-[#ffffff]/72 hover:text-[#ffffff]">
              {route.label}
            </Link>
          ))}
          <a
            href={`mailto:${contactEmail}`}
            data-analytics-event="click_email"
            data-analytics-label="Footer email"
            className="text-[#ffffff]/72 hover:text-[#ffffff]"
          >
            {contactEmail}
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="click_instagram"
            data-analytics-label="Footer Instagram"
            className="text-[#ffffff]/72 hover:text-[#ffffff]"
          >
            @gbc_huskies
          </a>
          <a
            href={coachInstagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="click_instagram"
            data-analytics-label="Footer Coach Jay Instagram"
            className="text-[#ffffff]/72 hover:text-[#ffffff]"
          >
            Coach Jay: @coachjaygill
          </a>
          <a
            href={goFundMeUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="click_payment_donation"
            data-analytics-label="Footer GoFundMe"
            className="text-[#ffffff]/72 hover:text-[#ffffff]"
          >
            {goFundMeUrl}
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-[11px] text-white/35">
        created by{" "}
        <a href="https://atrak.dev" target="_blank" rel="noopener noreferrer" className="text-[#ffffff]/35 underline decoration-white/25 underline-offset-4 transition hover:text-[#ffffff]">
          atrak.dev
        </a>
      </p>
    </footer>
  );
}
