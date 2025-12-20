import { Variant } from "motion";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

import {tv, VariantProps} from "tailwind-variants";

    const baseLink = tv({
    base: "h-9 px-3.5 my-1.5 flex gap-2 items-center rounded-md leading-5 font-secondary text-text-body  hover:bg-surface-subtle-hover hover:text-text-headline hover:rounded-md",
    variants: {
        active: {
            true: "h-9 my-1.5 text-text-headline  ",},
        },
    defaultVariants: {
        active: false,
    },
    });

    const baseLi = tv({
    base: "",
    variants: {
        active: {
            true: "border-b border-border-active",},
        },
    defaultVariants: {
        active: false,
    },
    });
    
    type NavigationItemProps = & VariantProps<typeof baseLink> & {
        children: ReactNode;
        href: string;
    }
    
    export default function NavigationItem({children, href, active}: NavigationItemProps){
        

        
    return(
        <li className={ baseLi({active})}><Link href={href} className={baseLink({active})}>{children}</Link></li>
    );
}

