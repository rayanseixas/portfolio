import { tv, type VariantProps } from 'tailwind-variants';

type HeadingHierarchy = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const heading = tv({
  base: '',
  variants: {
    variant: {
      hero: 'text-text-headline tracking-tight',
      section: 'text-text-headline mt-10',
      eyebrow: 'text-text-body uppercase tracking-[0.2em]',
    },
    size: {
      md: '',
      sm: '',
    },
  },
  compoundVariants: [
    {
      variant: 'hero',
      size: 'md',
      class: 'text-4xl md:text-5xl',
    },
    {
      variant: 'hero',
      size: 'sm',
      class: 'text-3xl md:text-4xl',
    },
    {
      variant: 'section',
      size: 'md',
      class: 'text-xl md:text-xl',
    },
    {
      variant: 'section',
      size: 'sm',
      class: 'text-xl md:text-2xl',
    },
    {
      variant: 'eyebrow',
      size: 'md',
      class: 'text-sm md:text-base',
    },
    {
      variant: 'eyebrow',
      size: 'sm',
      class: 'text-xs md:text-sm',
    },
  ],
  defaultVariants: {
    variant: 'hero',
    size: 'md',
  },
});

type ArticleHeadingProps = {
  hierarchy?: HeadingHierarchy;
  children?: React.ReactNode;
  className?: string;
} & VariantProps<typeof heading>;

function getDefaultHierarchy(variant: NonNullable<ArticleHeadingProps['variant']>): HeadingHierarchy {
  if (variant === 'section') return 'h2';
  if (variant === 'eyebrow') return 'h3';
  return 'h1';
}

export function ArticleHeading({
  hierarchy,
  variant,
  size,
  children,
  className,
}: ArticleHeadingProps) {
  const Tag = hierarchy ?? getDefaultHierarchy(variant ?? 'hero');

  return (
    <Tag className={heading({ variant, size, className })}>
      {children}
    </Tag>
  );
}