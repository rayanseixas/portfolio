import { ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    iconSize?: number
}

export default function Button({children, ...props}: IconButtonProps) {
    return(<button className="flex gap-1.5 items-center h-9 rounded-md text-text-headline px-3.5 py-1 hover:bg-surface-subtle-hover hover:cursor-pointer">{children}</button>)
}