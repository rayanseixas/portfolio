import { tv, VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
  slots: {
    root: [
      'inline-flex items-center justify-center gap-2 font-medium transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-default)]',
      'disabled:pointer-events-none disabled:opacity-50',
      'rounded-md cursor-pointer select-none',
    ].join(' '),
    icon: 'shrink-0 [&_svg]:size-[1em] [&_svg]:pointer-events-none',
  },
  variants: {
    variant: {
      primary: {
        root: [
          'bg-[var(--color-surface-active)] text-[var(--color-text-on-action)]',
          'hover:bg-[var(--color-surface-active)]/90 hover:brightness-110',
          'active:brightness-95',
          'focus-visible:ring-[var(--color-surface-active)]',
        ],
      },
      secondary: {
        root: [
          'bg-[var(--color-surface-subtle-hover)] text-[var(--color-text-headline)]',
          'hover:bg-[var(--color-surface-subtle-active)]',
          'active:bg-[var(--color-gray-500)]',
          'focus-visible:ring-[var(--color-border)]',
        ],
      },
      outline: {
        root: [
          'border border-[var(--color-border)] bg-transparent text-[var(--color-text-headline)]',
          'hover:bg-[var(--color-surface-subtle-hover)] hover:border-[var(--color-gray-400)]',
          'active:bg-[var(--color-surface-subtle-active)]',
          'focus-visible:ring-[var(--color-border)]',
        ],
      },
      ghost: {
        root: [
          'text-[var(--color-text-headline)]',
          'hover:bg-[var(--color-surface-subtle-hover)]',
          'active:bg-[var(--color-surface-subtle-active)]',
          'focus-visible:ring-[var(--color-border)]',
        ],
      },
      destructive: {
        root: [
          'bg-red-600 text-white',
          'hover:bg-red-700 active:bg-red-800',
          'focus-visible:ring-red-500',
        ],
      },
    },
    size: {
      sm: {
        root: 'h-8 px-3 text-sm gap-1.5',
        icon: '[&_svg]:!size-3.5',
      },
      md: {
        root: 'h-9 px-3.5 py-1 text-sm',
        icon: '[&_svg]:!size-4',
      },
      lg: {
        root: 'h-10 px-4 text-base gap-2.5',
        icon: '[&_svg]:!size-5',
      },
      icon: {
        root: 'h-9 w-9 p-0',
        icon: '[&_svg]:!size-5',
      },
      'icon-sm': {
        root: 'h-8 w-8 p-0',
        icon: '[&_svg]:!size-4',
      },
      'icon-lg': {
        root: 'h-10 w-10 p-0',
        icon: '[&_svg]:!size-5',
      },
    },
    iconPosition: {
      left: {},
      right: { root: 'flex-row-reverse' },
      only: {},
    },
  },
  compoundVariants: [
    { iconPosition: 'only', size: 'md', class: { root: 'h-9 w-9 p-0' } },
    { iconPosition: 'only', size: 'sm', class: { root: 'h-8 w-8 p-0' } },
    { iconPosition: 'only', size: 'lg', class: { root: 'h-10 w-10 p-0' } },
  ],
  defaultVariants: {
    variant: 'ghost',
    size: 'md',
    iconPosition: 'left',
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
