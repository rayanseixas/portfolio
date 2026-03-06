import { tv, type VariantProps } from 'tailwind-variants';

type HeadingHierarchy = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const heading = tv({
  base: 'text-text-headline font-primary text-justify font-medium tracking-tight',
  variants: {
    size: {
      xl: 'text-3xl leading-[1.1]',
      lg: 'text-3xl leading-[1.15]',
      md: 'mt-12 text-2xl leading-[1.2]',
      sm: 'mt-12 text-xl leading-8',
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

  return <Tag className={heading({ size, className })}>{children}</Tag>;
}
