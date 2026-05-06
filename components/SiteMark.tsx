type SiteMarkProps = {
  compact?: boolean;
  className?: string;
};

export default function SiteMark({ compact = false, className = "" }: SiteMarkProps) {
  const width = compact ? 116 : 260;
  const height = compact ? 116 : 260;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 260 260"
      role="img"
      aria-label="GBC Huskies Basketball mark"
    >
      <defs>
        <linearGradient id="shieldGradient" x1="32" x2="228" y1="12" y2="246">
          <stop stopColor="#0d2b45" />
          <stop offset="0.48" stopColor="#071827" />
          <stop offset="1" stopColor="#101820" />
        </linearGradient>
        <filter id="markGlow" x="-35%" y="-35%" width="170%" height="170%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M130 14 226 52v72c0 61-39 100-96 122-57-22-96-61-96-122V52l96-38Z"
        fill="url(#shieldGradient)"
        stroke="#b8d8ea"
        strokeWidth="7"
        filter="url(#markGlow)"
      />
      <path
        d="M57 73h146M51 121h158M80 193c13-17 30-25 50-25s37 8 50 25"
        fill="none"
        stroke="#d71920"
        strokeLinecap="round"
        strokeWidth="8"
      />
      <circle cx="130" cy="122" r="54" fill="none" stroke="#b8d8ea" strokeWidth="5" />
      <path
        d="M130 69c-18 19-27 37-27 54 0 17 9 35 27 54 18-19 27-37 27-54 0-17-9-35-27-54Z"
        fill="none"
        stroke="#b8d8ea"
        strokeWidth="5"
      />
      <text
        x="130"
        y="114"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Impact, Arial Black, sans-serif"
        fontSize="58"
      >
        GBC
      </text>
      <text
        x="130"
        y="154"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Impact, Arial Black, sans-serif"
        fontSize="38"
      >
        HUSKIES
      </text>
    </svg>
  );
}
