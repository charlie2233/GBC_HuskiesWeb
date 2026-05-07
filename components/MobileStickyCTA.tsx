import Link from "next/link";
import BrandName from "./BrandName";

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/12 bg-[#071827]/96 p-3 shadow-[0_-12px_32px_rgba(0,0,0,0.28)] backdrop-blur md:hidden">
      <Link
        href="/#contact"
        className="mx-auto flex min-h-12 max-w-md items-center justify-center rounded-lg bg-white px-5 text-center font-extrabold text-[#071827] shadow-[0_14px_30px_rgba(215,25,32,0.24)]"
      >
        Contact <BrandName className="ml-1" />
      </Link>
    </div>
  );
}
