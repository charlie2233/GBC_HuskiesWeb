import { ArrowRight, LockKeyhole } from "lucide-react";

type PaymentLinkButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function PaymentLinkButton({ href, children, className = "" }: PaymentLinkButtonProps) {
  if (!href) {
    return (
      <button
        type="button"
        disabled
        className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#071827]/12 bg-[#071827]/8 px-5 font-extrabold text-[#071827]/46 ${className}`}
      >
        <LockKeyhole size={18} aria-hidden />
        Coming Soon
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 font-extrabold text-white shadow-[0_14px_28px_rgba(215,25,32,0.2)] transition hover:-translate-y-0.5 hover:bg-[#f02a31] ${className}`}
    >
      {children}
      <ArrowRight size={18} aria-hidden />
    </a>
  );
}
