import Image from "next/image";

type SiteMarkProps = {
  compact?: boolean;
  className?: string;
};

export default function SiteMark({ compact = false, className = "" }: SiteMarkProps) {
  return (
    <Image
      src="/brand/gbc-huskies-shield-logo.png?v=20260506-1725"
      alt="Gilliam Basketball Club Huskies shield logo"
      width={compact ? 182 : 364}
      height={compact ? 216 : 432}
      className={`object-contain ${className}`}
      draggable={false}
      priority={compact}
      unoptimized
    />
  );
}
