import Image from "next/image";

type SiteMarkProps = {
  compact?: boolean;
  className?: string;
};

export default function SiteMark({ compact = false, className = "" }: SiteMarkProps) {
  return (
    <Image
      src="/brand/gbc-huskies-circle-logo.png?v=20260506-road-season"
      alt="Gilliam Basketball Club Huskies circular logo"
      width={compact ? 204 : 408}
      height={compact ? 204 : 408}
      className={`object-contain ${className}`}
      draggable={false}
      priority={compact}
      unoptimized
    />
  );
}
