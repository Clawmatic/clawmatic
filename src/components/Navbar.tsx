'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        borderBottom: '1px solid #1e1e1e',
        background: 'rgba(20,20,20,0.95)',
        backdropFilter: 'blur(12px)',
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
          height: '64px',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              letterSpacing: '-0.02em',
              color: '#F0F0F0',
            }}
          >
            <span style={{ color: '#5E6AD2' }}>&gt; </span>
            <span style={{ color: '#4ECCA3' }}>Claw</span>
            <span style={{ color: '#F0F0F0' }}>Matic</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: pathname === link.href ? '#F0F0F0' : '#888888',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (pathname !== link.href) {
                  (e.target as HTMLElement).style.color = '#cccccc';
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
            href="https://calendly.com/clawmatic/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '8px 18px',
              background: '#4ECCA3',
              color: '#0f0f0f',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 700,
              textDecoration: 'none',
              borderRadius: '6px',
              display: 'inline-block',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Book a Call
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
            gap: '5px',
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
                borderRadius: '2px',
                transition: 'all 0.2s ease',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                  : i === 1 ? 'scaleX(0)'
                  : 'rotate(-45deg) translate(5px, -5px)'
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
            borderTop: '1px solid #1e1e1e',
            padding: '1.25rem 1.5rem 1.5rem',
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
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: pathname === link.href ? '#F0F0F0' : '#888888',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/clawmatic/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              background: '#4ECCA3',
              color: '#0f0f0f',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              borderRadius: '6px',
              textAlign: 'center',
              marginTop: '0.25rem',
            }}
          >
            Book a Call
          </a>
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
