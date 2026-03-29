'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #242424',
        background: '#0a0a0a',
        padding: '3rem 1.5rem 2rem',
        marginTop: 'auto',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontSize: '1.15rem',
                fontWeight: 'bold',
                fontFamily: 'Courier New, monospace',
                marginBottom: '0.875rem',
                letterSpacing: '-0.01em',
              }}
            >
              <span style={{ color: '#5E6AD2' }}>{'> '}</span>
              <span style={{ color: '#4ECCA3' }}>Claw</span>
              <span style={{ color: '#E8E8E8' }}>Matic</span>
            </div>
            <p
              style={{
                fontSize: '0.8rem',
                color: '#555555',
                lineHeight: '1.7',
              }}
            >
              The unofficial hub for OpenClaw AI.
              <br />
              Guides, skills, and community.
              <br />
              Made in Belgium 🇧🇪
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: '600',
                color: '#5E6AD2',
                letterSpacing: '0.1em',
                marginBottom: '0.875rem',
                textTransform: 'uppercase',
              }}
            >
              Navigation
            </p>
            {[
              { href: '/', label: 'Home' },
              { href: '/guides', label: 'Guides' },
              { href: '/skills', label: 'Skill Packs' },
              { href: '/about', label: 'About' },
            ].map((link) => (
              <div key={link.href} style={{ marginBottom: '0.5rem' }}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: '0.85rem',
                    color: '#666666',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#CCCCCC')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#666666')}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Status */}
          <div>
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: '600',
                color: '#5E6AD2',
                letterSpacing: '0.1em',
                marginBottom: '0.875rem',
                textTransform: 'uppercase',
              }}
            >
              System Status
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'API', status: 'online' },
                { label: 'Skills CDN', status: 'online' },
                { label: 'Community', status: 'online' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.82rem',
                    color: '#666666',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#4ECCA3',
                      boxShadow: '0 0 6px rgba(78, 204, 163, 0.6)',
                      display: 'inline-block',
                      flexShrink: 0,
                    }}
                  />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid #1a1a1a',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <p style={{ fontSize: '0.75rem', color: '#3f3f3f' }}>
            © 2026 ClawMatic — Not affiliated with OpenClaw Inc.
          </p>
          <p style={{ fontSize: '0.75rem', color: '#3f3f3f' }}>
            v0.1.0{' '}
            <span style={{ color: '#5E6AD2', fontWeight: '500' }}>BETA</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
