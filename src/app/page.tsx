'use client';

import Link from 'next/link';
import { useState } from 'react';

const s = {
  fontFamily: 'var(--font-inter), Inter, sans-serif',
};

const benefits = [
  { icon: '⏱', title: 'Save 10-30+ hours/week', desc: 'Automate the tasks that eat your day so your team can focus on work that matters.' },
  { icon: '💸', title: 'Reduce operational costs', desc: 'Do more with less. Cut overhead by replacing manual processes with AI workflows.' },
  { icon: '🔁', title: 'Eliminate repetitive tasks', desc: 'Email triage, data entry, reporting -- all handled automatically.' },
  { icon: '⚡', title: 'Faster response times', desc: 'AI systems that respond instantly, 24/7, without manual intervention.' },
  { icon: '📈', title: 'More time for growth', desc: 'When the busywork disappears, you can focus on strategy, clients, and scaling.' },
];

const faqs = [
  {
    q: 'Do I need technical knowledge?',
    a: 'No. We handle everything -- from design to deployment. You just tell us what you need automated, and we build it.',
  },
  {
    q: 'How long does it take?',
    a: "Typically 2-4 weeks depending on the scope of your project. We'll give you a clear timeline after the audit.",
  },
  {
    q: 'Is this expensive?',
    a: "We offer scalable solutions for different budgets. Start with a free audit and we'll recommend what actually makes sense for your situation.",
  },
  {
    q: 'What kind of businesses do you work with?',
    a: 'Any business with repetitive processes -- from local shops and agencies to SaaS teams and e-commerce stores.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: '1px solid #2a2a2a',
        padding: '1.25rem 0',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          padding: 0,
        }}
      >
        <span
          style={{
            ...s,
            fontSize: '1rem',
            fontWeight: 600,
            color: '#E8E8E8',
          }}
        >
          {q}
        </span>
        <span
          style={{
            color: '#5E6AD2',
            fontSize: '1.25rem',
            lineHeight: 1,
            flexShrink: 0,
            transition: 'transform 0.2s',
            transform: open ? 'rotate(45deg)' : 'none',
          }}
        >
          +
        </span>
      </button>
      {open && (
        <p
          style={{
            ...s,
            marginTop: '0.75rem',
            fontSize: '0.9rem',
            color: '#888888',
            lineHeight: 1.7,
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div style={{ background: '#1e1e1e', ...s }}>

      {/* ── HERO ── */}
      <section
        style={{
          position: 'relative',
          padding: 'clamp(5rem, 12vw, 9rem) 1.5rem clamp(4rem, 10vw, 7rem)',
          overflow: 'hidden',
          background: '#1e1e1e',
        }}
      >
        {/* Glow blobs */}
        <div style={{
          position: 'absolute', top: '-15%', left: '-10%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(94,106,210,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', right: '-5%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(78,204,163,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(78,204,163,0.1)', border: '1px solid rgba(78,204,163,0.25)',
              borderRadius: '100px', padding: '5px 14px',
              fontSize: '0.75rem', fontWeight: 600, color: '#4ECCA3',
              letterSpacing: '0.04em', textTransform: 'uppercase',
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: '#4ECCA3', boxShadow: '0 0 8px #4ECCA3',
              }} />
              AI Automation Agency
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#F0F0F0',
            marginBottom: '1.5rem',
          }}>
            Automate Your Business{' '}
            <span style={{
              background: 'linear-gradient(135deg, #5E6AD2, #4ECCA3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              with AI
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: '#999999',
            lineHeight: 1.7,
            maxWidth: '580px',
            margin: '0 auto 2.5rem',
          }}>
            We build custom AI systems that eliminate repetitive work so you can focus on growth.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://calendly.com/clawmatic/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '14px 28px',
                background: '#5E6AD2',
                color: '#fff',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Book Your Free Audit
            </a>
            <a
              href="#how-it-works"
              style={{
                display: 'inline-block',
                padding: '14px 28px',
                background: 'transparent',
                color: '#999999',
                fontWeight: 500,
                fontSize: '0.95rem',
                textDecoration: 'none',
                borderRadius: '8px',
                border: '1px solid #333333',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#555555';
                e.currentTarget.style.color = '#E8E8E8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#333333';
                e.currentTarget.style.color = '#999999';
              }}
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* ── TARGETING ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 1.5rem', background: '#181818', borderTop: '1px solid #1e1e1e' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#5E6AD2', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' }}>
            Is this for you?
          </p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, color: '#F0F0F0', textAlign: 'center', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
            This is for you if...
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {[
              'You run a small or mid-sized business',
              'You spend hours on repetitive tasks every week',
              'You want to scale without hiring more people',
              'You\'re tired of manual processes slowing you down',
            ].map((item) => (
              <div key={item} style={{
                display: 'flex', alignItems: 'flex-start', gap: '12px',
                padding: '1.25rem 1.5rem',
                background: '#1e1e1e',
                border: '1px solid #222222',
                borderRadius: '10px',
              }}>
                <span style={{ color: '#4ECCA3', fontSize: '1.1rem', marginTop: '1px', flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: '0.95rem', color: '#cccccc', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 1.5rem', background: '#1e1e1e', borderTop: '1px solid #1e1e1e' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#5E6AD2', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              The problem
            </p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, color: '#F0F0F0', letterSpacing: '-0.02em' }}>
              Your business is leaking time and money
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {[
              { icon: '🐌', title: 'Manual tasks slow growth', desc: 'Every hour spent on manual work is an hour not spent on strategy or customers.' },
              { icon: '🔄', title: 'Repetitive work eats your day', desc: 'The same tasks, every day, done by hand -- draining focus and energy.' },
              { icon: '👥', title: 'Hiring more just to keep up', desc: 'Scaling means more headcount, more overhead, more complexity.' },
              { icon: '🚧', title: 'Missed opportunities', desc: 'When you\'re buried in busywork, growth opportunities pass you by.' },
            ].map((card) => (
              <div key={card.title} style={{
                padding: '1.75rem',
                background: '#181818',
                border: '1px solid #222222',
                borderRadius: '12px',
              }}>
                <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '1rem' }}>{card.icon}</span>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#E8E8E8', marginBottom: '0.5rem' }}>{card.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#777777', lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 600, color: '#4ECCA3' }}>
              That is exactly what we fix.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" style={{ padding: 'clamp(4rem, 8vw, 6rem) 1.5rem', background: '#181818', borderTop: '1px solid #1e1e1e' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#5E6AD2', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              The process
            </p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, color: '#F0F0F0', letterSpacing: '-0.02em' }}>
              How it works
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { step: '01', title: 'Analyze', color: '#5E6AD2', desc: 'We dig into your business and identify exactly where time and money are being wasted on manual processes.' },
              { step: '02', title: 'Automate', color: '#4ECCA3', desc: 'We build custom AI workflows tailored to your specific operations -- no off-the-shelf templates.' },
              { step: '03', title: 'Scale', color: '#5E6AD2', desc: 'With the busywork handled, you save time, reduce costs, and have the bandwidth to grow faster.' },
            ].map((item) => (
              <div key={item.step} style={{
                padding: '2rem',
                background: '#1e1e1e',
                border: '1px solid #222222',
                borderRadius: '12px',
                position: 'relative',
              }}>
                <div style={{
                  fontSize: '0.7rem', fontWeight: 800, color: item.color,
                  letterSpacing: '0.1em', marginBottom: '1rem',
                  opacity: 0.7,
                }}>
                  STEP {item.step}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#F0F0F0', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#888888', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 1.5rem', background: '#1e1e1e', borderTop: '1px solid #1e1e1e' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#5E6AD2', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              What you get
            </p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, color: '#F0F0F0', letterSpacing: '-0.02em' }}>
              Real results, every time
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {benefits.map((b) => (
              <div key={b.title} style={{
                padding: '1.75rem',
                background: '#181818',
                border: '1px solid #222222',
                borderRadius: '12px',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
              }}>
                <span style={{
                  fontSize: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  background: 'rgba(94,106,210,0.12)',
                  borderRadius: '10px',
                  flexShrink: 0,
                }}>
                  {b.icon}
                </span>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#E8E8E8', marginBottom: '0.4rem' }}>{b.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: '#777777', lineHeight: 1.6 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 1.5rem', background: '#181818', borderTop: '1px solid #1e1e1e' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#5E6AD2', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Results
            </p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, color: '#F0F0F0', letterSpacing: '-0.02em' }}>
              Results from real businesses
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                stat: '80%',
                label: 'faster response time',
                desc: 'Automated lead handling reduced response time by 80% -- prospects got answers instantly, around the clock.',
                color: '#4ECCA3',
              },
              {
                stat: '15+',
                label: 'hours saved per week',
                desc: 'Custom AI workflow replaced a manual reporting process, saving 15+ hours per week across the team.',
                color: '#5E6AD2',
              },
            ].map((r) => (
              <div key={r.label} style={{
                padding: '2.25rem',
                background: '#1e1e1e',
                border: '1px solid #252525',
                borderRadius: '14px',
              }}>
                <div style={{
                  fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                  fontWeight: 800,
                  color: r.color,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  marginBottom: '0.25rem',
                }}>
                  {r.stat}
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                  {r.label}
                </div>
                <p style={{ fontSize: '0.875rem', color: '#888888', lineHeight: 1.7 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFER ── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
        background: '#1e1e1e',
        borderTop: '1px solid #1e1e1e',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(94,106,210,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#5E6AD2', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Free offer
          </p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, color: '#F0F0F0', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            Start with a free AI audit
          </h2>
          <p style={{ fontSize: '1rem', color: '#888888', lineHeight: 1.75, marginBottom: '2.25rem' }}>
            We will analyze your business and show you exactly where AI can save you time and money -- no obligation, no cost.
          </p>
          <a
            href="https://calendly.com/clawmatic/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '16px 36px',
              background: '#5E6AD2',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              borderRadius: '8px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Get Your Free Audit
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 1.5rem', background: '#181818', borderTop: '1px solid #1e1e1e' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#5E6AD2', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              FAQ
            </p>
            <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 700, color: '#F0F0F0', letterSpacing: '-0.02em' }}>
              Common questions
            </h2>
          </div>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 8rem) 1.5rem',
        background: '#1e1e1e',
        borderTop: '1px solid #1e1e1e',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center bottom, rgba(78,204,163,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '640px', margin: '0 auto', position: 'relative' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 800, color: '#F0F0F0', letterSpacing: '-0.03em', marginBottom: '1rem', lineHeight: 1.15 }}>
            Stop wasting time on manual work
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#888888', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Every week you wait is another week of lost hours.
          </p>
          <a
            href="https://calendly.com/clawmatic/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '16px 36px',
              background: '#5E6AD2',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.05rem',
              textDecoration: 'none',
              borderRadius: '8px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Book Your Free Call
          </a>
        </div>
      </section>

    </div>
  );
}
