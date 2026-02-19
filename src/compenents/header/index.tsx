'use client';

import Button from '../button';
import IconButton from '../icon-button';
import { FileTextIcon } from '../icons/file-text';
import { MenuIcon } from '../icons/menu';
import { SparklesIcon } from '../icons/sparkles';
import NavigationItem from '../navigation-item';

interface HeaderProps {
  onToggleMenu: () => void;
}

export default function Header({ onToggleMenu }: HeaderProps) {
  return (
    <div className="border-border md:px-inner-md flex h-12 items-center border-b px-4">
      <div className="text-text-headline flex-1">Saynex</div>
      <ul className="text-text-headline hidden flex-1 items-center justify-center gap-3 lg:flex">
        <NavigationItem href="/">Home</NavigationItem>
        <NavigationItem href="/craft">
          <SparklesIcon size={16} />
          Craft
        </NavigationItem>
        <NavigationItem href="3">Sobre</NavigationItem>
        <NavigationItem href="/contato">Contato</NavigationItem>
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
