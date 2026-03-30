import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with ClawMatic. Book a free AI audit call or send us an email to discuss your automation project.',
};

const labelStyle = {
  fontFamily: 'var(--font-inter), Inter, sans-serif',
  fontSize: '0.75rem',
  fontWeight: 600,
  color: '#5E6AD2',
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  marginBottom: '1rem',
};

export default function ContactPage() {
  return (
    <div style={{ background: '#181818', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        className="grid-bg"
        style={{
          padding: 'clamp(4rem, 8vw, 6rem) 1.5rem 3rem',
          borderBottom: '1px solid #2a2a2a',
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
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <p style={labelStyle}>Contact</p>
          <h1
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#F0F0F0',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            Let us talk about your business
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '1rem',
              color: '#888',
              maxWidth: '560px',
              lineHeight: 1.7,
            }}
          >
            Book a free audit call, send us an email, or use the calendar below. No obligation — just
            a conversation about what we can automate for you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#1e1e1e' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={labelStyle}>Get in touch</p>

            {/* Email card */}
            <a
              href="mailto:info@clawmatic.eu"
              className="card-hover pixel-border"
              style={{
                display: 'block',
                padding: '1.5rem',
                borderRadius: '10px',
                background: '#181818',
                textDecoration: 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '1.25rem' }}>📧</span>
                <span
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: '#4ECCA3',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  Email us
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#F0F0F0',
                  marginBottom: '0.35rem',
                }}
              >
                info@clawmatic.eu
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.8rem',
                  color: '#888',
                  lineHeight: 1.6,
                }}
              >
                Questions, project enquiries, or just want to chat about automation.
              </p>
            </a>

            {/* Free audit card */}
            <div
              className="pixel-border-purple"
              style={{
                padding: '1.5rem',
                borderRadius: '10px',
                background: 'rgba(94, 106, 210, 0.04)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.25rem' }}>🎯</span>
                <h3
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#F0F0F0',
                    margin: 0,
                  }}
                >
                  Free AI Audit
                </h3>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.85rem',
                  color: '#888',
                  lineHeight: 1.7,
                  marginBottom: '0.75rem',
                }}
              >
                Not sure where to start? We will analyze your business processes and show you exactly
                where AI can save you time and money — completely free, no obligation.
              </p>
              <a
                href="https://calendly.com/clawmatic/30min"
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#5E6AD2',
                  textDecoration: 'none',
                }}
              >
                Book your free audit →
              </a>
            </div>

            {/* Response time */}
            <div
              style={{
                padding: '1rem 1.25rem',
                background: 'rgba(78, 204, 163, 0.05)',
                border: '1px solid rgba(78, 204, 163, 0.15)',
                borderRadius: '8px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '0.82rem',
                  color: '#888',
                  lineHeight: 1.6,
                }}
              >
                ⏱ We typically respond within 24 hours on weekdays.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={labelStyle}>Book a call</p>

            <div
              className="pixel-border"
              style={{
                padding: '2rem',
                borderRadius: '10px',
                background: '#181818',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#F0F0F0',
                  marginBottom: '1rem',
                }}
              >
                30-minute free audit call
              </h3>

              {['Free of charge', 'We analyze your workflow', 'No obligation'].map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ color: '#4ECCA3', fontSize: '0.75rem' }}>✓</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: '0.82rem',
                      color: '#888',
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}

              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/clawmatic/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=1e1e1e&text_color=f0f0f0&primary_color=5e6ad2"
                style={{
                  minWidth: '280px',
                  height: '500px',
                  marginTop: '1.5rem',
                }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
