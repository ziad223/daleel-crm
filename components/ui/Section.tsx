import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'default' | 'wide' | 'narrow';
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  containerSize = 'default',
  id 
}) => {
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};
