import { useId } from "react";

type SiteMarkProps = {
  compact?: boolean;
  className?: string;
};

export default function SiteMark({ compact = false, className = "" }: SiteMarkProps) {
  const width = compact ? 116 : 300;
  const height = compact ? 116 : 300;
  const rawId = useId().replace(/:/g, "");
  const topArcId = `${rawId}-gbc-top-arc`;
  const ballClipId = `${rawId}-gbc-ball-clip`;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 300 300"
      role="img"
      aria-label="Gilliam Basketball Club Huskies logo"
    >
      <defs>
        <path id={topArcId} d="M64 139a86 86 0 0 1 172 0" />
        <clipPath id={ballClipId}>
          <circle cx="150" cy="151" r="77" />
        </clipPath>
      </defs>

      <circle cx="150" cy="150" r="145" fill="#ffffff" stroke="#d9dee4" strokeWidth="8" />
      <circle cx="150" cy="150" r="130" fill="#ffffff" stroke="#eef1f4" strokeWidth="5" />
      <circle cx="150" cy="150" r="110" fill="#ffffff" stroke="#d7dce2" strokeWidth="3" />

      <text
        fill="#101820"
        fontFamily="Arial Black, Impact, sans-serif"
        fontSize="14"
        fontWeight="900"
        letterSpacing="1.4"
      >
        <textPath href={`#${topArcId}`} startOffset="50%" textAnchor="middle">
          GILLIAM BASKETBALL CLUB
        </textPath>
      </text>

      <g clipPath={`url(#${ballClipId})`}>
        <circle cx="150" cy="151" r="77" fill="#d71920" />
        <path d="M73 151h154" stroke="#101820" strokeWidth="5" />
        <path d="M150 74v154" stroke="#101820" strokeWidth="5" />
        <path d="M99 89c26 31 36 70 30 124" stroke="#101820" strokeWidth="5" />
        <path d="M201 89c-26 31-36 70-30 124" stroke="#101820" strokeWidth="5" />
        <path d="M78 121c45 13 99 13 144 0" stroke="#101820" strokeWidth="5" />
      </g>
      <circle cx="150" cy="151" r="77" fill="none" stroke="#101820" strokeWidth="4" />

      <g>
        <path
          d="M98 124 108 65l37 48-18 28-29-17Z"
          fill="#101820"
          stroke="#101820"
          strokeLinejoin="round"
          strokeWidth="5"
        />
        <path
          d="m202 124-10-59-37 48 18 28 29-17Z"
          fill="#101820"
          stroke="#101820"
          strokeLinejoin="round"
          strokeWidth="5"
        />
        <path d="m113 92 20 28-24-8 4-20Z" fill="#ffffff" opacity="0.9" />
        <path d="m187 92-20 28 24-8-4-20Z" fill="#ffffff" opacity="0.9" />

        <path
          d="M150 84c-34 0-61 26-63 62-3 46 29 82 63 92 34-10 66-46 63-92-2-36-29-62-63-62Z"
          fill="#101820"
          stroke="#ffffff"
          strokeWidth="4"
        />
        <path
          d="M107 144c2 40 22 67 43 81-33-6-54-33-58-67-1-12 4-19 15-14Z"
          fill="#ffffff"
        />
        <path
          d="M193 144c-2 40-22 67-43 81 33-6 54-33 58-67 1-12-4-19-15-14Z"
          fill="#ffffff"
        />
        <path
          d="M150 94c-20 19-31 46-31 74 0 29 14 49 31 59 17-10 31-30 31-59 0-28-11-55-31-74Z"
          fill="#f8fafc"
        />
        <path
          d="M132 115c3 21 9 34 18 48 9-14 15-27 18-48-12 9-24 9-36 0Z"
          fill="#101820"
          opacity="0.92"
        />
        <path d="M123 154c-10 0-18 6-23 15 12-4 25-3 35 3l-12-18Z" fill="#101820" />
        <path d="M177 154c10 0 18 6 23 15-12-4-25-3-35 3l12-18Z" fill="#101820" />
        <path d="M132 147c-10-9-22-8-31 2 13-2 22 1 31 9v-11Z" fill="#ffffff" opacity="0.88" />
        <path d="M168 147c10-9 22-8 31 2-13-2-22 1-31 9v-11Z" fill="#ffffff" opacity="0.88" />
        <ellipse cx="126" cy="147" rx="6" ry="5" fill="#b8d8ea" />
        <ellipse cx="174" cy="147" rx="6" ry="5" fill="#b8d8ea" />
        <ellipse cx="126" cy="147" rx="3" ry="3.5" fill="#101820" />
        <ellipse cx="174" cy="147" rx="3" ry="3.5" fill="#101820" />
        <path d="M139 181c6-6 16-6 22 0l-5 9h-12l-5-9Z" fill="#101820" />
        <path d="M144 197c4 3 8 3 12 0" stroke="#101820" strokeLinecap="round" strokeWidth="3" />
        <path d="M132 203c9 10 27 10 36 0" stroke="#101820" strokeLinecap="round" strokeWidth="3" />
      </g>

      <text
        x="150"
        y="259"
        textAnchor="middle"
        fill="#101820"
        fontFamily="Arial Black, Impact, sans-serif"
        fontSize="24"
        fontWeight="900"
        letterSpacing="2.4"
      >
        HUSKIES
      </text>
    </svg>
  );
}
