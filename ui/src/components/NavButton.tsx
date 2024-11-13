import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const navButton = cva('w-full rounded-md', {
  variants: {
    intent: {
      positive: 'bg-positive',
      negative: 'bg-negative',
      neutral: 'bg-neutral',
      disabled: 'cursor-not-allowed bg-neutral',
    },
    size: {
      medium: 'px-4 py-2 text-base',
    },
  },
  defaultVariants: {
    intent: 'positive',
    size: 'medium',
  },
});

export interface NavButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof navButton> {}

export const NavButton: React.FC<NavButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button type="button" className={navButton({ intent, size, className })} {...props} />;
