import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with ClawMatic. Questions about skill packs, custom builds, or just want to say hi.',
};

export default function ContactPage() {
  return (
    <div style={{ background: '#141414', minHeight: '100vh' }}>
      {/* Header */}
      <section
        className="grid-bg"
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) 1.5rem 2rem',
          borderBottom: '1px solid #303030',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-30%',
            right: '0',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(94, 106, 210, 0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <p style={{
            fontFamily: 'Courier New, monospace',
            fontSize: '0.7rem',
            color: '#5E6AD2',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            ./contact
          </p>
          <h1 style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            color: '#EFEFEF',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}>
            Let&apos;s talk.
            <br />
            <span style={{ color: '#5E6AD2' }}>I don&apos;t bite.</span>
          </h1>
          <p style={{
            fontFamily: 'Courier New, monospace',
            fontSize: '0.85rem',
            color: '#999999',
            maxWidth: '500px',
            lineHeight: '1.7',
          }}>
            Questions about skill packs, custom builds, broken guides, or just want to
            say hi — pick the option that works best for you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Left column — contact options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '0.7rem',
              color: '#5E6AD2',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.25rem',
            }}>
              // reach_me
            </p>

            {[
              {
                icon: '📧',
                label: 'General / anything',
                value: 'info@clawmatic.eu',
                href: 'mailto:info@clawmatic.eu',
                color: '#4ECCA3',
                desc: 'Questions, feedback, bug reports — all welcome.',
              },
              {
                icon: '🔧',
                label: 'Custom skill packs',
                value: 'custom@clawmatic.eu',
                href: 'mailto:custom@clawmatic.eu?subject=Custom%20Skill%20Pack%20Request',
                color: '#5E6AD2',
                desc: 'Describe what you need and I\'ll scope it out.',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="card-hover pixel-border"
                style={{
                  display: 'block',
                  padding: '1.5rem',
                  borderRadius: '4px',
                  textDecoration: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                  <span style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.7rem',
                    color: item.color,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}>
                    {item.label}
                  </span>
                </div>
                <p style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.85rem',
                  color: '#EFEFEF',
                  marginBottom: '0.35rem',
                }}>
                  {item.value}
                </p>
                <p style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.75rem',
                  color: '#777777',
                }}>
                  {item.desc}
                </p>
              </a>
            ))}

            {/* Hands-on install */}
            <div
              className="pixel-border"
              style={{
                padding: '1.5rem',
                borderRadius: '4px',
                background: 'rgba(94, 106, 210, 0.04)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.25rem' }}>🛠️</span>
                <span style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.7rem',
                  color: '#5E6AD2',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  Hands-on setup
                </span>
              </div>
              <p style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '0.82rem',
                color: '#EFEFEF',
                marginBottom: '0.5rem',
                lineHeight: '1.5',
              }}>
                Need help getting OpenClaw installed?
              </p>
              <p style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '0.75rem',
                color: '#777777',
                lineHeight: '1.7',
                marginBottom: '0.75rem',
              }}>
                I can set up OpenClaw for you directly — via remote access or on-site.
                Whether you&apos;re not technical or just don&apos;t want the hassle, I&apos;ll handle the whole installation and get your agent running.
              </p>
              <a
                href="mailto:info@clawmatic.eu?subject=Hands-on%20Setup%20Request"
                style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.75rem',
                  color: '#5E6AD2',
                  textDecoration: 'none',
                }}
              >
                get in touch →
              </a>
            </div>

            {/* Response time */}
            <div style={{
              padding: '1rem 1.25rem',
              background: 'rgba(78, 204, 163, 0.05)',
              border: '1px solid rgba(78, 204, 163, 0.15)',
              borderRadius: '4px',
            }}>
              <p style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '0.75rem',
                color: '#666666',
                lineHeight: '1.6',
              }}>
                <span style={{ color: '#4ECCA3' }}>⏱ Response time:</span> Usually within 24–48 hours on weekdays. I&apos;m a one-person operation so it might take a bit longer on weekends.
              </p>
            </div>
          </div>

          {/* Right column — meeting */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '0.7rem',
              color: '#5E6AD2',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.25rem',
            }}>
              // plan_a_meeting
            </p>

            {/* Meeting card */}
            <div
              className="pixel-border-purple"
              style={{
                padding: '2rem',
                borderRadius: '4px',
                background: 'rgba(94, 106, 210, 0.04)',
              }}
            >
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>📅</span>
              <h3 style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '1.1rem',
                fontWeight: '700',
                color: '#EFEFEF',
                marginBottom: '0.75rem',
              }}>
                Book a call
              </h3>
              <p style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '0.78rem',
                color: '#888888',
                lineHeight: '1.75',
                marginBottom: '1.5rem',
              }}>
                Prefer to talk it through? Book a free 30-minute call — we can discuss a custom pack, a hands-on setup, or just your OpenClaw questions. Zoom or Google Meet, your choice.
              </p>

              {[
                '30 min, free of charge',
                'Zoom or Google Meet',
                'Pick a slot that works for you',
              ].map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ color: '#4ECCA3', fontSize: '0.7rem' }}>✓</span>
                  <span style={{ fontFamily: 'Courier New, monospace', fontSize: '0.75rem', color: '#777777' }}>{f}</span>
                </div>
              ))}

              <div style={{ marginTop: '1.5rem' }}>
                {/* Replace YOUR_CALENDLY_URL with your actual Calendly link once set up */}
                <a
                  href="https://calendly.com/clawmatic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    display: 'inline-block',
                    padding: '12px 28px',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    borderRadius: '2px',
                    width: '100%',
                    textAlign: 'center',
                    boxSizing: 'border-box',
                  }}
                >
                  pick a time slot →
                </a>
                <p style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.65rem',
                  color: '#444444',
                  marginTop: '0.75rem',
                  textAlign: 'center',
                }}>
                  Powered by Calendly · No account needed to book
                </p>
              </div>
            </div>

            {/* FAQ link */}
            <div style={{
              padding: '1.25rem 1.5rem',
              background: '#1c1c1c',
              border: '1px solid #303030',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.82rem', color: '#EFEFEF', marginBottom: '0.25rem' }}>
                  Quick answers?
                </p>
                <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.72rem', color: '#666666' }}>
                  Check the FAQ first — might save you an email.
                </p>
              </div>
              <Link
                href="/faq"
                style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.75rem',
                  color: '#4ECCA3',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  marginLeft: '1rem',
                }}
              >
                view FAQ →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom */}
      <section style={{ borderTop: '1px solid #1e1e1e', padding: '3rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Courier New, monospace',
            fontSize: '0.7rem',
            color: '#555555',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            // made_in_belgium
          </p>
          <p style={{
            fontFamily: 'Courier New, monospace',
            fontSize: '0.8rem',
            color: '#666666',
            lineHeight: '1.7',
          }}>
            ClawMatic is a one-person project built with genuine love for OpenClaw. 🇧🇪
            <br />
            Every euro from skill pack sales goes back into building more content.
          </p>
        </div>
      </section>
    </div>
  );
}
