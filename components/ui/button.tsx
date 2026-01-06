import React from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function Button({ href, children }: ButtonProps): JSX.Element {
  return (
    <a href={href} className="cta-yellow" role="button">
      {children}
    </a>
  );
}
