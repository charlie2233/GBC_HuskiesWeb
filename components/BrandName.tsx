type BrandNameProps = {
  suffix?: string;
  className?: string;
  gbcClassName?: string;
  huskiesClassName?: string;
};

export default function BrandName({
  suffix,
  className,
  gbcClassName = "text-[#d71920]",
  huskiesClassName,
}: BrandNameProps) {
  return (
    <span className={className}>
      <span className={gbcClassName}>GBC</span>{" "}
      <span className={huskiesClassName}>Huskies</span>
      {suffix ? <> {suffix}</> : null}
    </span>
  );
}
