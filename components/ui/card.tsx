import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps): JSX.Element {
  return (
    <div className={className ? className : ''} style={{ display: 'block' }}>
      {children}
    </div>
  );
}
