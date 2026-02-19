import { ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  iconSize?: number;
  onToggleMenu: () => void;
}

export default function IconButton({
  children,
  onToggleMenu,
}: IconButtonProps) {
  return (
    <button
      onClick={onToggleMenu}
      className="text-text-headline hover:bg-surface-subtle-hover flex h-10 w-10 items-center justify-center gap-1.5 rounded-full px-3.5 py-1 hover:cursor-pointer lg:hidden"
    >
      {children}
    </button>
  );
}
