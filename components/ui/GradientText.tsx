import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => {
  return (
    <span className={`bg-gradient-to-r from-[var(--primary)] via-[var(--primary-dark)] to-[var(--accent)] bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};
