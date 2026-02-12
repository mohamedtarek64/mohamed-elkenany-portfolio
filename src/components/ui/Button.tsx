import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50',
        'disabled:pointer-events-none disabled:opacity-50',
        'active:scale-[0.97]',
        {
          'bg-primary-600 text-white hover:bg-primary-500 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40': variant === 'primary',
          'bg-secondary-600 text-white hover:bg-secondary-500 shadow-lg shadow-secondary-500/20 hover:shadow-secondary-500/40': variant === 'secondary',
          'border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white': variant === 'outline',
          'text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800': variant === 'ghost',
        },
        {
          'h-9 px-4 text-xs': size === 'sm',
          'h-11 px-6 text-sm': size === 'md',
          'h-14 px-8 text-base': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};


export default Button;
