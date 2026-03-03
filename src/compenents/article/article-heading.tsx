import { tv, type VariantProps } from 'tailwind-variants';

type HeadingHierarchy =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

const heading = tv({
  base: 'text-text-headline font-secondary font-medium tracking-tight',
  variants: {
    size: {
      xl: 'text-[40px] leading-[1.1]',
      lg: 'text-[32px] leading-[1.15]',
      md: 'text-[24px] leading-[1.2] mt-12',
      sm: 'text-[20px] leading-[1.3]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type ArticleHeadingProps = {
  hierarchy?: HeadingHierarchy;
  children?: React.ReactNode;
  className?: string;
} & VariantProps<typeof heading>;

export function ArticleHeading({
  hierarchy = 'h2',
  size,
  children,
  className,
}: ArticleHeadingProps) {
  const Tag = hierarchy;

  return (
    <Tag className={heading({ size, className })}>
      {children}
    </Tag>
  );
}