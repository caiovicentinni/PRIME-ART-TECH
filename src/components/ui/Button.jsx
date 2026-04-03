import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Button = React.forwardRef(({ className, variant = 'primary', href, ...props }, ref) => {
  const styles = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide",
    variant === 'primary' && "bg-accent text-white px-8 py-4 text-base hover:bg-opacity-90 rounded-[2px]",
    variant === 'secondary' && "bg-surface text-accent border-2 border-surface rounded-[53px] px-8 py-4 hover:shadow-xl hover:bg-gray-50",
    variant === 'gold' && "bg-gold text-white px-8 py-4 text-base hover:bg-amber-600 rounded-[2px]",
    variant === 'outline' && "bg-transparent border border-accent text-accent px-8 py-4 hover:bg-accent hover:text-white rounded-[2px]",
    className
  );

  if (href) {
    return (
      <a ref={ref} href={href} className={styles} {...props} />
    );
  }

  return (
    <button ref={ref} className={styles} {...props} />
  );
});

Button.displayName = "Button";
