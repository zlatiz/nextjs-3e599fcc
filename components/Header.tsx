import Image from 'next/image';
import React from 'react';

export default function Header(): JSX.Element {
  return (
    <header className="header-root">
      <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '14px 0' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          {(() => {
            const safeSrc = encodeURI('https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png');
            return <Image src={safeSrc} alt="Logo" width={180} height={60} unoptimized />;
          })()}
          <span className="brand" style={{ marginLeft: 6 }}>Garber Bros</span>
        </a>

        <nav style={{ marginLeft: 'auto' }} aria-label="Primary">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/lock-status">Lock Status</a>
          <a href="/vessels">Vessels</a>
          <a href="/barges">Barges</a>
          <a href="/websites/garberbrosinc/images/application.pdf" target="_blank">Employment</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}
