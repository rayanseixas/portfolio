import { ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  iconSize?: number;
}

export default function Button({ children }: IconButtonProps) {
  return (
    <button className="text-text-headline hover:bg-surface-subtle-hover flex h-9 items-center gap-1.5 rounded-md px-3.5 py-1 hover:cursor-pointer">
      {children}
    </button>
  );
}
