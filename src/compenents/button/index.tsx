// components/ui/Button.tsx

import { ButtonHTMLAttributes } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { tv } from 'tailwind-variants';

const buttonVariants = tv({
  base: `inline-flex h-8 items-center justify-center gap-2 rounded-xl px-2.5 py-1 text-sm font-medium transition-all duration-200 outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`,
  variants: {
    variant: {
      solid: `bg-surface-active text-surface-default hover:bg-[#cfcfcf] focus-visible:ring-neutral-400`,
      subtle: `text-text-headline hover:bg-surface-subtle-hover focus-visible:ring-neutral-400`,
      ghost: `text-text-body hover:text-text-headline bg-transparent focus-visible:ring-neutral-300`,
    },
  },
  defaultVariants: {
    variant: 'solid',
  },
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'subtle' | 'ghost';
  asChild?: boolean;
};

export function Button({
  children,
  variant,
  className,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className={buttonVariants({ variant, className })} {...props}>
      {children}
    </Comp>
  );
}
