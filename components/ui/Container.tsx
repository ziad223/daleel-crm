import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'wide' | 'narrow';
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  size = 'default' 
}) => {
  const sizes = {
    default: 'max-w-7xl',
    wide: 'max-w-screen-2xl',
    narrow: 'max-w-4xl',
  };

  return (
    <div className={`${sizes[size]} mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
};
