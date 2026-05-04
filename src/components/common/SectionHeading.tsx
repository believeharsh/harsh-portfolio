import React from 'react';

interface SectionHeadingProps {
  subHeading: string;
  heading: string;
}

export default function SectionHeading({
  subHeading,
  heading,
}: SectionHeadingProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-foreground py-2 tracking-tight">
        {heading}
      </h2>
      {/* <p className="text-foreground text-lg">{subHeading}</p>   */}
    </div>
  );
}
