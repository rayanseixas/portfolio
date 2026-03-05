import { tv } from 'tailwind-variants';

const highlight = tv({
  base: 'transition-all duration-200',
  variants: {
    variant: {
      underline: 'underline underline-offset-4',
      soft: 'bg-text-body/10 rounded-sm px-1',
      strong: 'font-semibold underline decoration-2 underline-offset-4',
      gradient:
        'from-primary to-secondary bg-linear-to-r bg-clip-text text-transparent',
    },
  },
  defaultVariants: {
    variant: 'underline',
  },
});

type HighlightProps = {
  children: React.ReactNode;
  variant?: 'underline' | 'soft' | 'strong' | 'gradient';
};

export function Highlight({ children, variant }: HighlightProps) {
  return <span className={highlight({ variant })}>{children}</span>;
}
