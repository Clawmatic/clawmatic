'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: '~/' },
  { href: '/guides', label: 'guides' },
  { href: '/skills', label: 'skill_packs' },
  { href: '/about', label: 'about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        borderBottom: '1px solid #2a2a2a',
        background: 'rgba(15,15,15,0.95)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '60px',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                fontFamily: 'Courier New, monospace',
                color: '#5E6AD2',
                letterSpacing: '-0.02em',
              }}
            >
              {'> '}
              <span style={{ color: '#4ECCA3' }}>Claw</span>
              <span style={{ color: '#E8E8E8' }}>Matic</span>
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '0.85rem',
                color: pathname === link.href ? '#4ECCA3' : '#888888',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                transition: 'color 0.2s ease',
                borderBottom: pathname === link.href ? '1px solid #4ECCA3' : '1px solid transparent',
                paddingBottom: '2px',
              }}
              onMouseEnter={(e) => {
                if (pathname !== link.href) {
                  (e.target as HTMLElement).style.color = '#E8E8E8';
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== link.href) {
                  (e.target as HTMLElement).style.color = '#888888';
                }
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://gumroad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              padding: '6px 16px',
              fontSize: '0.8rem',
              textDecoration: 'none',
              borderRadius: '2px',
              display: 'inline-block',
            }}
          >
            get_skills
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
            flexDirection: 'column',
            gap: '4px',
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: '#E8E8E8',
                transition: 'all 0.2s ease',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                  : i === 1 ? 'scaleX(0)'
                  : 'rotate(-45deg) translate(4px, -4px)'
                  : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            borderTop: '1px solid #2a2a2a',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '0.9rem',
                color: pathname === link.href ? '#4ECCA3' : '#888888',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
