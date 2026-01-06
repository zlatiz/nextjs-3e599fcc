import React from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>© Copyright 2015 by <span>Garber Bros, Inc.</span>. All Rights Reserved.</div>
        <div style={{ textAlign: 'right' }}>
          <a href="/transparency-in-coverage" style={{ color: 'var(--muted)' }}>Transparency in Coverage</a>
        </div>
      </div>
    </footer>
  );
}
