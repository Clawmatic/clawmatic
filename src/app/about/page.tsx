import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'ClawMatic is a Belgian AI automation agency. We build custom AI systems that eliminate repetitive work for growing businesses.',
};

const values = [
  {
    icon: '🎯',
    title: 'Results first',
    description: 'We measure success by time saved and costs reduced. Not by features shipped.',
  },
  {
    icon: '🔧',
    title: 'Built for your business',
    description: 'No templates. Every automation is designed around how you actually work.',
  },
  {
    icon: '🇧🇪',
    title: 'Belgian-made',
    description: 'Built in Belgium, with European values around privacy, quality, and honest pricing.',
  },
  {
    icon: '🤝',
    title: 'We handle everything',
    description: 'From scoping to deployment. You do not need any technical knowledge.',
  },
];

const labelStyle = {
  fontFamily: 'var(--font-inter), Inter, sans-serif',
  fontSize: '0.75rem',
  fontWeight: 600,
  color: '#5E6AD2',
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  marginBottom: '1rem',
};

export default function AboutPage() {
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
            inset: 0,
            background: 'radial-gradient(ellipse at 60% 50%, rgba(94, 106, 210, 0.08) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <p style={labelStyle}>About us</p>
          <h1
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#F0F0F0',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
            }}
          >
            We help businesses stop wasting time on manual work
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '1.05rem',
              color: '#888',
              maxWidth: '660px',
              lineHeight: 1.7,
            }}
          >
            ClawMatic is a Belgian AI automation agency. We build custom AI systems that eliminate
            repetitive work so you and your team can focus on what actually matters.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#1e1e1e' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            {/* Left: text */}
            <div>
              <p style={labelStyle}>Our story</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  'We started ClawMatic because we kept seeing the same problem: smart, capable businesses drowning in manual work. Emails that needed sorting, leads that needed following up, reports that needed generating — all done by hand, every single day.',
                  'AI can handle most of that. Not the generic ChatGPT kind — custom-built systems tailored to exactly how your business works. That is what we build.',
                  'We are based in Belgium and work with businesses across Europe. Every project starts with a free audit so we understand your workflow before we build anything.',
                ].map((text, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: '0.95rem',
                      color: '#888',
                      lineHeight: 1.7,
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                className="pixel-border"
                style={{
                  background: '#181818',
                  borderRadius: '10px',
                  padding: '2rem',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1 }}>🇧🇪</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#F0F0F0',
                    marginBottom: '0.5rem',
                  }}
                >
                  Based in Belgium
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: '#888',
                    lineHeight: 1.7,
                  }}
                >
                  Built in Belgium, serving clients across Europe. Belgian-made means built carefully,
                  delivered honestly, and priced fairly.
                </p>
              </div>

              <div
                className="pixel-border-green"
                style={{
                  background: 'rgba(78, 204, 163, 0.03)',
                  borderRadius: '10px',
                  padding: '1.5rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#4ECCA3',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                  }}
                >
                  Our approach
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: '#888',
                    lineHeight: 1.7,
                  }}
                >
                  We do not sell off-the-shelf software. Every system we build is custom — designed
                  around your specific processes and tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#181818' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={labelStyle}>What we stand for</p>
          <h2
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: '#F0F0F0',
              marginBottom: '2.5rem',
            }}
          >
            How we work
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {values.map((v) => (
              <div
                key={v.title}
                className="card-hover pixel-border"
                style={{
                  padding: '1.75rem',
                  borderRadius: '10px',
                  background: '#1e1e1e',
                  transition: 'border-color 0.2s',
                }}
              >
                <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '1rem' }}>
                  {v.icon}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#F0F0F0',
                    marginBottom: '0.5rem',
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.875rem',
                    color: '#888',
                    lineHeight: 1.7,
                  }}
                >
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
          background: '#1e1e1e',
          borderTop: '1px solid #2a2a2a',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ ...labelStyle, textAlign: 'center' }}>Get started</p>
          <h2
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 700,
              color: '#F0F0F0',
              marginBottom: '1rem',
            }}
          >
            Ready to stop doing things manually?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '0.95rem',
              color: '#888',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            Book a free 30-minute call. We will analyze your business and show you exactly where AI
            can save you time.
          </p>
          <a
            href="https://calendly.com/clawmatic/30min"
            className="btn-primary"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              fontSize: '0.9rem',
              textDecoration: 'none',
              borderRadius: '8px',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontWeight: 600,
            }}
          >
            Book Your Free Audit
          </a>
        </div>
      </section>
    </div>
  );
}
