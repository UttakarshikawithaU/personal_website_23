import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
}

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)} {...props}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export function SectionTitle({ className, children, ...props }: SectionTitleProps) {
  return (
    <h2
      className={cn('text-3xl md:text-4xl font-headline font-bold text-center mb-12', className)}
      {...props}
    >
      {children}
    </h2>
  );
}
