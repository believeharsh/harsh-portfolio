'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export function Section({
  children,
  id,
  className,
  delay = 0,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('px-6 py-[90px] md:px-[5%]', className)}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-full max-w-[1200px]"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  tag,
  lightTheme = false,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  tag?: string;
  lightTheme?: boolean;
}) {
  return (
    <div className="mb-16 flex flex-col items-start gap-6 md:mb-20 md:flex-row md:items-center">
      {tag && (
        <span className="bg-orange shrink-0 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.25em] text-white uppercase">
          {tag}
        </span>
      )}
      <h2
        className={cn(
          'font-heading text-3xl leading-tight font-black md:text-5xl',
          lightTheme ? 'text-text' : 'text-white',
        )}
      >
        {title} {subtitle && <span className="text-orange">{subtitle}</span>}
      </h2>
    </div>
  );
}
