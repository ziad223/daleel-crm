import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'outline-dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}) => {
  const base = 'inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all active:scale-[0.985] disabled:opacity-60';

  const variants = {
    primary: 'bg-[var(--primary)] text-white shadow-lg shadow-blue-900/20 hover:bg-[var(--primary-dark)]',
    accent: 'bg-[var(--accent)] text-white shadow-lg shadow-emerald-600/20 hover:bg-[var(--accent-dark)]',
    outline: 'border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300',
    'outline-dark': 'border-2 border-slate-800 bg-slate-900/40 text-slate-200 hover:bg-slate-900 hover:border-slate-700 hover:text-white',
    ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  };

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-8 py-3.5 text-sm',
    lg: 'px-10 py-4 text-base',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
