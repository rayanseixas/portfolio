import {tv, VariantProps} from "tailwind-variants";

    const baseLink = tv({
    base: "flex h-8 justify-center items-center px-3.5 py-1 text-text-body font-semibold text-sm border border-border rounded-full hover:bg-surface-subtle-hover hover:cursor-pointer truncate ",
    variants: {
        active: {
            true: "bg-surface-active text-text-on-action hover:bg-surface-active",},
        },
    defaultVariants: {
        active: false,
    },
    });

type FilterbuttonProps = {
    children?: React.ReactNode;
    active?: boolean;
}

export default function Filterbutton({children, active}: FilterbuttonProps) {
    return (
          <div className={baseLink({active})}>{children}</div>
    );
}