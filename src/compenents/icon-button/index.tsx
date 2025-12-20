import { ButtonHTMLAttributes } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    iconSize?: number
}

export default function IconButton({children}: IconButtonProps) {
    return(<button className="flex lg:hidden gap-1.5 items-center w-10 h-10 justify-center rounded-full text-text-headline px-3.5 py-1 hover:bg-surface-subtle-hover hover:cursor-pointer">{children}</button>)
}