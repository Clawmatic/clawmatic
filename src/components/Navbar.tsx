'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/guides', label: 'Guides' },
  { href: '/skills', label: 'Skill Packs' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        borderBottom: '1px solid #242424',
        background: 'rgba(14,14,14,0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
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
        {/* Logo — intentionally monospace as brand mark */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              fontFamily: 'Courier New, monospace',
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ color: '#5E6AD2' }}>{'> '}</span>
            <span style={{ color: '#4ECCA3' }}>Claw</span>
            <span style={{ color: '#E8E8E8' }}>Matic</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '450',
                  color: isActive ? '#E8E8E8' : '#777777',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  paddingBottom: '2px',
                }}
                className={isActive ? 'nav-link-active' : 'nav-link'}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '1px',
                      background: '#4ECCA3',
                      borderRadius: '1px',
                    }}
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/skills"
            className="btn-primary"
            style={{
              padding: '7px 16px',
              fontSize: '0.85rem',
              textDecoration: 'none',
              borderRadius: '6px',
              display: 'inline-block',
            }}
          >
            Shop →
          </Link>
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
                width: '20px',
                height: '1.5px',
                background: '#E8E8E8',
                transition: 'all 0.2s ease',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(4px, 4.5px)'
                  : i === 1 ? 'scaleX(0)'
                  : 'rotate(-45deg) translate(4px, -4.5px)'
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
            borderTop: '1px solid #242424',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.875rem',
            background: 'rgba(14,14,14,0.98)',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '0.9rem',
                fontWeight: '450',
                color: pathname === link.href ? '#4ECCA3' : '#888888',
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        .nav-link:hover { color: #CCCCCC !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
