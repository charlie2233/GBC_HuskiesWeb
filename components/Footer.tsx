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
              <p className="mt-1 text-sm text-white/62">AAU Basketball Program • Orange County, CA</p>
            </div>
          </div>
        </div>
        <div className="grid gap-2 text-sm text-white/72 md:text-right">
          <a href="mailto:gbchuskiesoc@gmail.com" className="text-[#ffffff]/72 hover:text-[#ffffff]">
            gbchuskiesoc@gmail.com
          </a>
          <a href="https://www.instagram.com/gbc_huskies/" target="_blank" rel="noopener noreferrer" className="text-[#ffffff]/72 hover:text-[#ffffff]">
            @gbc_huskies
          </a>
          <a href="https://www.instagram.com/coachjaygill/" target="_blank" rel="noopener noreferrer" className="text-[#ffffff]/72 hover:text-[#ffffff]">
            Coach Jay: @coachjaygill
          </a>
          <a href="https://gofund.me/192839eaa" target="_blank" rel="noopener noreferrer" className="text-[#ffffff]/72 hover:text-[#ffffff]">
            https://gofund.me/192839eaa
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
