'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #2a2a2a',
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
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '0.75rem',
              }}
            >
              <span style={{ color: '#5E6AD2' }}>{'> '}</span>
              <span style={{ color: '#4ECCA3' }}>Claw</span>
              <span style={{ color: '#E8E8E8' }}>Matic</span>
            </div>
            <p
              style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '0.75rem',
                color: '#555555',
                lineHeight: '1.6',
              }}
            >
              The unofficial hub for OpenClaw AI.
              <br />
              Guides, skills, and community.
              <br />
              Made in Belgium 🇧🇪
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '0.7rem',
                color: '#5E6AD2',
                letterSpacing: '0.1em',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
              }}
            >
              navigation
            </p>
            {[
              { href: '/', label: 'Home' },
              { href: '/guides', label: 'Guides' },
              { href: '/skills', label: 'Skill Packs' },
              { href: '/about', label: 'About' },
            ].map((link) => (
              <div key={link.href} style={{ marginBottom: '0.4rem' }}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.8rem',
                    color: '#888888',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#4ECCA3')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#888888')}
                >
                  ./{link.label.toLowerCase().replace(' ', '-')}
                </Link>
              </div>
            ))}
          </div>

          {/* Status */}
          <div>
            <p
              style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '0.7rem',
                color: '#5E6AD2',
                letterSpacing: '0.1em',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
              }}
            >
              system_status
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
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
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.75rem',
                    color: '#888888',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#4ECCA3',
                      boxShadow: '0 0 6px #4ECCA3',
                      display: 'inline-block',
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
          <p
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '0.7rem',
              color: '#444444',
            }}
          >
            © 2026 ClawMatic — Not affiliated with OpenClaw Inc.
          </p>
          <p
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '0.7rem',
              color: '#444444',
            }}
          >
            v0.1.0 [<span style={{ color: '#5E6AD2' }}>BETA</span>]
          </p>
        </div>
      </div>
    </footer>
  );
}
