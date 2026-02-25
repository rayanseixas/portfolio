import { tv } from "tailwind-variants";

const highlight = tv({
  base: "transition-all duration-200",
  variants: {
    variant: {
      underline: "underline underline-offset-4",
      soft: "bg-text-body/10 px-1 rounded-sm",
      strong: "font-semibold underline decoration-2 underline-offset-4",
      gradient:
        "bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent",
    },
  },
  defaultVariants: {
    variant: "underline",
  },
});

type HighlightProps = {
  children: React.ReactNode;
  variant?: "underline" | "soft" | "strong" | "gradient";
};

export function Highlight({ children, variant }: HighlightProps) {
  return <span className={highlight({ variant })}>{children}</span>;
}