'use client';

import React, { forwardRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { tv, VariantProps } from 'tailwind-variants';

const baseLink = tv({
  base: 'font-primary text-text-body hover:bg-surface-subtle-hover hover:text-text-headline my-1.5 flex h-9 items-center gap-2 rounded-md px-3.5 text-sm leading-5 font-medium hover:rounded-md relative z-10',
  variants: {
    active: {
      true: 'text-text-headline my-1.5 h-9 ',
    },
  },
  defaultVariants: {
    active: false,
  },
});

const baseLi = tv({
  base: 'relative',
  variants: {
    active: {
      true: '',
    },
  },
  defaultVariants: {
    active: false,
  },
});

type NavigationItemProps = VariantProps<typeof baseLink> & {
  children: React.ReactNode;
  href: string;
  active?: boolean;
};

const NavigationItem = forwardRef<HTMLLIElement, NavigationItemProps>(
  ({ children, href, active, ...rest }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <li ref={ref} className={baseLi({ active: isActive })}>
        <Link
          href={href}
          className={`${isActive ? baseLink({ active: true }) : baseLink({ active: false })}`}
          {...rest}
        >
          {children}
        </Link>
      </li>
    );
  },
);

NavigationItem.displayName = 'NavigationItem';

export default NavigationItem;
