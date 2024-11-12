import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const button = cva('w-full rounded-full', {
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button type="button" className={button({ intent, size, className })} {...props} />;
