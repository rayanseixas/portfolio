import { tv, VariantProps } from 'tailwind-variants';

const baseLink = tv({
  base: 'text-text-body border-border hover:bg-surface-subtle-hover flex h-8 items-center justify-center truncate rounded-full border px-3.5 py-1 text-sm font-semibold hover:cursor-pointer',
  variants: {
    active: {
      true: 'bg-surface-active text-text-on-action hover:bg-surface-active',
    },
  },
  defaultVariants: {
    active: false,
  },
});

type FilterbuttonProps = {
  children?: React.ReactNode;
  active?: boolean;
};

export default function Filterbutton({ children, active }: FilterbuttonProps) {
  return <div className={baseLink({ active })}>{children}</div>;
}
