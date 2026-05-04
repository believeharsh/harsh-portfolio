import React from 'react';

export default function Ocpi({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top-Left 'O' */}
      <circle cx="34" cy="34" r="30" fill="#205976" />
      <circle
        cx="34"
        cy="34"
        r="12"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="10"
      />

      {/* Top-Right 'C' */}
      <circle cx="94" cy="34" r="30" fill="#36A9E1" />
      <path
        d="M 102 26 A 12 12 0 1 0 102 42"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="butt"
      />

      {/* Bottom-Left 'P' */}
      <circle cx="34" cy="94" r="30" fill="#36A9E1" />
      <rect x="23" y="73" width="10" height="51" fill="#FFFFFF" />
      <circle
        cx="38"
        cy="88"
        r="10"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="10"
      />

      {/* Bottom-Right 'I' */}
      <circle cx="94" cy="94" r="30" fill="#205976" />
      <circle cx="94" cy="74" r="6.5" fill="#FFFFFF" />
      <rect x="89" y="86" width="10" height="38" fill="#FFFFFF" />
    </svg>
  );
}
