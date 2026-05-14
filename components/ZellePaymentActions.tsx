"use client";

import { Check, Copy, Phone } from "lucide-react";
import { useState } from "react";

type ZellePaymentActionsProps = {
  phoneDisplay: string;
  phoneValue: string;
  phoneHref: string;
};

export default function ZellePaymentActions({
  phoneDisplay,
  phoneValue,
  phoneHref,
}: ZellePaymentActionsProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(phoneValue);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <button
        type="button"
        onClick={handleCopy}
        data-analytics-event="click_payment_zelle_copy"
        data-analytics-label="Copy Zelle number"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#d71920] px-5 font-extrabold text-white shadow-[0_16px_28px_rgba(215,25,32,0.24)] transition hover:-translate-y-0.5 hover:bg-[#f02a31]"
      >
        {copied ? <Check size={18} aria-hidden /> : <Copy size={18} aria-hidden />}
        {copied ? "Copied" : "Copy Zelle Number"}
      </button>

      <a
        href={phoneHref}
        data-analytics-event="click_payment_zelle_phone"
        data-analytics-label={`Zelle phone ${phoneDisplay}`}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/18 px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:border-[#b8d8ea]/56 hover:text-[#b8d8ea]"
      >
        <Phone size={18} aria-hidden />
        {phoneDisplay}
      </a>
    </div>
  );
}
