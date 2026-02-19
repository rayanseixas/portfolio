'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

import Button from '../button';
import IconButton from '../icon-button';
import { FileTextIcon } from '../icons/file-text';
import { MenuIcon } from '../icons/menu';
import { SparklesIcon } from '../icons/sparkles';
import NavigationItem from '../navigation-item';

interface HeaderProps {
  onToggleMenu: () => void;
}

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/cases', label: 'Cases' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
];

export default function Header({ onToggleMenu }: HeaderProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const updateIndicatorPosition = () => {
    const activeIndex = navItems.findIndex((item) => pathname === item.href);
    if (activeIndex >= 0 && itemRefs.current[activeIndex] && navRef.current) {
      const activeItem = itemRefs.current[activeIndex];
      const navRect = navRef.current.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      setIndicatorStyle({
        left: itemRect.left - navRect.left,
        width: itemRect.width,
      });
    }
  };

  useEffect(() => {
    updateIndicatorPosition();
    window.addEventListener('resize', updateIndicatorPosition);
    return () => window.removeEventListener('resize', updateIndicatorPosition);
  }, [pathname]);

  return (
    <div className="border-border md:px-inner-md flex h-12 items-center border-b px-4">
      <div className="text-text-headline flex-1">Saynex</div>
      <ul
        ref={navRef}
        className="text-text-headline relative hidden flex-1 items-center justify-center gap-3 lg:flex"
      >
        {navItems.map((item, index) => (
          <NavigationItem
            key={item.href}
            href={item.href}
            ref={(el: HTMLLIElement | null) => {
              itemRefs.current[index] = el;
            }}
          >
            {item.href === '/cases' && <SparklesIcon size={16} />}
            {item.label}
          </NavigationItem>
        ))}
        <motion.div
          layoutId="activeIndicator"
          className="border-border-active pointer-events-none absolute bottom-0 h-[1px] border-b"
          initial={false}
          animate={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            mass: 0.8,
          }}
        />
      </ul>
      <div className="flex flex-1 items-center justify-end gap-2">
        <Button variant="ghost" size="md" icon={<FileTextIcon className="text-text-headline" size={20} />} iconPosition="left">
          Curriculo
        </Button>
        <IconButton onToggleMenu={onToggleMenu}>
          <MenuIcon className="text-text-headline" size={20} />
        </IconButton>
      </div>
    </div>
  );
}
