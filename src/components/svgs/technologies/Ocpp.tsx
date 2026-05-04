import React from 'react';

export default function Ocpp({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="64"
        cy="64"
        rx="60"
        ry="44"
        transform="rotate(-10 64 64)"
        fill="#2882A8"
      />
      <defs>
        <clipPath id="crescentClip">
          <path d="M 38 28 A 38 38 0 0 0 38 100 A 50 50 0 0 1 38 28 Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#crescentClip)">
        <rect x="0" y="28" width="60" height="16" fill="#FFFFFF" />
        <rect x="0" y="46" width="60" height="16" fill="#DCEEF9" />
        <rect x="0" y="64" width="60" height="16" fill="#A9DBF1" />
        <rect x="0" y="82" width="60" height="20" fill="#6AC3EA" />
      </g>
      <text
        x="76"
        y="66"
        fill="#FFFFFF"
        fontSize="30"
        fontWeight="900"
        fontFamily="system-ui, -apple-system, sans-serif"
        textAnchor="middle"
        dominantBaseline="central"
      >
        OCPP
      </text>
    </svg>
  );
}
