import Image from "next/image";

type SiteMarkProps = {
  compact?: boolean;
  className?: string;
  priority?: boolean;
};

export default function SiteMark({ compact = false, className = "", priority = false }: SiteMarkProps) {
  return (
    <Image
      src="/brand/gbc-huskies-circle-logo.png"
      alt="GBC Huskies basketball program logo"
      width={compact ? 204 : 408}
      height={compact ? 204 : 408}
      sizes={compact ? "48px" : "(min-width: 1024px) 288px, 42vw"}
      className={`object-contain ${className}`}
      draggable={false}
      priority={priority}
    />
  );
}
