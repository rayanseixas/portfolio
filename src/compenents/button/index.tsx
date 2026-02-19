'use client';

import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

import {
  buttonVariants,
  type ButtonVariants,
} from './button-variants';

export { buttonVariants, type ButtonVariants };

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  /** Conteúdo do botão (texto ou outro elemento) */
  children?: React.ReactNode;
  /** Ícone dinâmico: use ícones do projeto (ex: FileTextIcon, ArrowRightIcon) ou de lucide-react. Suporta ícones animados (motion). */
  icon?: React.ReactNode;
  /** Posição do ícone em relação ao texto. "only" = botão só com ícone (icon-only). */
  iconPosition?: 'left' | 'right' | 'only';
  /** Tamanho do botão. Use "icon" / "icon-sm" / "icon-lg" quando iconPosition="only" para tamanhos específicos. */
  size?: 'sm' | 'md' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      icon,
      iconPosition = 'left',
      variant = 'ghost',
      size = 'md',
      disabled,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const isIconOnly = iconPosition === 'only' || (icon && !children);
    const resolvedSize = isIconOnly && size === 'md' ? 'icon' : size;
    const resolvedIconPosition = isIconOnly ? 'only' : iconPosition;

    const slots = buttonVariants({
      variant,
      size: resolvedSize,
      iconPosition: resolvedIconPosition,
    });

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(slots.root(), className)}
        {...props}
      >
        {icon ? (
          <span className={cn(slots.icon(), 'inline-flex')}>{icon}</span>
        ) : null}
        {children != null && children !== '' ? (
          <span className="truncate">{children}</span>
        ) : null}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
