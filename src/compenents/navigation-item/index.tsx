'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode, use } from "react";

import {tv, VariantProps} from "tailwind-variants";

    const baseLink = tv({
    base: "h-9 px-3.5 my-1.5 flex gap-2 items-center rounded-md leading-5 font-secondary text-text-body  hover:bg-surface-subtle-hover hover:text-text-headline hover:rounded-md",
    variants: {
        active: {
            true: "h-9 my-1.5 text-text-headline",},
        },
    defaultVariants: {
        active: false,
    },
    });

    const baseLi = tv({
    base: "",
    variants: {
        active: {
            true: "border-b border-border-active border-box h-12",},
        },
    defaultVariants: {
        active: false,
    },
    });
    
    type NavigationItemProps = & VariantProps<typeof baseLink> & {
        children: React.ReactNode;
        href: string;
        active?: boolean;
    }
    

    export default function NavigationItem({children, href, active, ...rest}: NavigationItemProps){
        
    const pathname = usePathname();
    const isActive = pathname === href;
        
    return(
        <li className={`${isActive ? baseLi({active: true}) : baseLi({active: false})}`}><Link href={href} className={`${isActive ? baseLink({active: true}) : baseLink({active: false})}`} {...rest}>{children}</Link></li>
        // <li className={ baseLi({active})}><Link href={href}className={baseLink({active})}>{children}</Link></li>
    );
}

