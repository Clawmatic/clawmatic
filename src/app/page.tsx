'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const taglines = [
  'automate everything_',
  'your AI does the clawing_',
  'skills > limits_',
  'hack your workflow_',
];

function TerminalHero() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const target = taglines[currentTagline];
    if (charIndex < target.length) {
      const timeout = setTimeout(() => {
        setDisplayed(target.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayed('');
        setCharIndex(0);
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentTagline]);

  return (
    <span
      style={{
        color: '#4ECCA3',
        fontSize: 'clamp(1rem, 3vw, 1.4rem)',
        fontFamily: 'Courier New, monospace',
        display: 'inline-block',
        minHeight: '2rem',
      }}
    >
      {displayed}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1.1em',
          background: '#4ECCA3',
          marginLeft: '2px',
          verticalAlign: 'middle',
          animation: 'blink 1s step-end infinite',
        }}
      />
    </span>
  );
}

function GlitchTitle() {
  return (
    <h1
      style={{
        fontSize: 'clamp(2.8rem, 9vw, 6.5rem)',
        fontWeight: '900',
        fontFamily: 'Courier New, monospace',
        letterSpacing: '-0.03em',
        lineHeight: 1.0,
        marginBottom: '1.75rem',
        position: 'relative',
      }}
    >
      <span
        className="glitch-text"
        data-text="OpenClaw"
        style={{ color: '#E8E8E8' }}
      >
        OpenClaw
      </span>
      <br />
      <span
        style={{
          background: 'linear-gradient(135deg, #5E6AD2 0%, #4ECCA3 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Unleashed.
      </span>
    </h1>
  );
}

// SVG Icons
const BookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

const ZapIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const GearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const PlugIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z"/>
  </svg>
);

const MessageIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const features = [
  {
    icon: <BookIcon />,
    title: 'Guides',
    tag: 'LEARN',
    tagColor: '#5E6AD2',
    description: 'Step-by-step tutorials to get OpenClaw running exactly how you want it. From setup to advanced workflows.',
    href: '/guides',
    cta: 'Read guides →',
    count: '12 guides',
  },
  {
    icon: <ZapIcon />,
    title: 'Skill Packs',
    tag: 'POWER UP',
    tagColor: '#4ECCA3',
    description: 'Pre-built skill bundles that supercharge OpenClaw. Connect apps, automate tasks, build faster.',
    href: '/skills',
    cta: 'Browse skills →',
    count: '8 packs',
  },
  {
    icon: <UsersIcon />,
    title: 'Community',
    tag: 'SOON',
    tagColor: '#888888',
    description: 'Join the builders. Share skills, swap configs, and figure out what OpenClaw can actually do.',
    href: '#',
    cta: 'Coming soon',
    count: 'join waitlist',
  },
];

const stats = [
  { value: '12+', label: 'Guides' },
  { value: '8', label: 'Skill Packs' },
  { value: '100%', label: 'Open Claw' },
  { value: '🇧🇪', label: 'Belgian Made' },
];

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('in-view');
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: '#0F0F0F' }}>
      {/* Hero Section */}
      <section
        className="grid-bg mesh-bg"
        style={{
          position: 'relative',
          padding: 'clamp(5rem, 12vw, 10rem) 1.5rem clamp(4rem, 10vw, 8rem)',
          overflow: 'hidden',
        }}
      >
        {/* Background glow blobs */}
        <div
          style={{
            position: 'absolute',
            top: '-15%',
            left: '-5%',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(94, 106, 210, 0.07) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-5%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(78, 204, 163, 0.05) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Badge */}
          <div style={{ marginBottom: '2rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(94, 106, 210, 0.1)',
                border: '1px solid rgba(94, 106, 210, 0.25)',
                borderRadius: '20px',
                padding: '5px 14px',
                fontSize: '0.72rem',
                fontWeight: '500',
                color: '#7B85E0',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#4ECCA3',
                  boxShadow: '0 0 8px rgba(78, 204, 163, 0.8)',
                  animation: 'pulse-glow 2s ease infinite',
                  flexShrink: 0,
                }}
              />
              OpenClaw AI — Unofficial Hub
            </span>
          </div>

          <GlitchTitle />

          <div style={{ marginBottom: '2rem' }}>
            <p
              style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '0.82rem',
                color: '#5E6AD2',
                marginBottom: '0.5rem',
                opacity: 0.8,
              }}
            >
              $ ./clawmatic --run
            </p>
            <TerminalHero />
          </div>

          <p
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
              color: '#888888',
              maxWidth: '580px',
              lineHeight: '1.75',
              marginBottom: '2.75rem',
              fontWeight: '400',
            }}
          >
            ClawMatic is your go-to resource for{' '}
            <span style={{ color: '#CCCCCC', fontWeight: '500' }}>OpenClaw AI</span> — the personal AI
            assistant that actually does stuff. Guides, skill packs, and a community
            of builders who push it to the limit.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
            <Link
              href="/guides"
              className="btn-primary"
              style={{
                padding: '13px 28px',
                fontSize: '0.95rem',
                textDecoration: 'none',
                borderRadius: '8px',
                display: 'inline-block',
              }}
            >
              Start here →
            </Link>
            <Link
              href="/skills"
              className="btn-green"
              style={{
                padding: '13px 28px',
                fontSize: '0.95rem',
                textDecoration: 'none',
                borderRadius: '8px',
                display: 'inline-block',
              }}
            >
              Browse skills
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        style={{
          borderTop: '1px solid #1f1f1f',
          borderBottom: '1px solid #1f1f1f',
          background: '#0a0a0a',
          padding: '1.75rem',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{ textAlign: 'center', padding: '0.5rem' }}
            >
              <div
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: '700',
                  color: '#4ECCA3',
                  marginBottom: '0.3rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: '500',
                  color: '#555555',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What is OpenClaw section */}
      <section className="reveal" style={{ padding: 'clamp(5rem, 10vw, 7rem) 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Text */}
            <div>
              <p
                style={{
                  fontSize: '0.72rem',
                  fontWeight: '600',
                  color: '#5E6AD2',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                }}
              >
                What is OpenClaw?
              </p>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  fontWeight: '700',
                  color: '#E8E8E8',
                  lineHeight: 1.2,
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.02em',
                }}
              >
                The AI assistant
                <br />
                <span style={{ color: '#4ECCA3' }}>that actually claws</span>
                <br />
                through your day.
              </h2>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.1rem',
                }}
              >
                {[
                  { icon: <GearIcon />, text: 'Runs locally or in the cloud — you pick.' },
                  { icon: <PlugIcon />, text: 'Connects to your apps via skills and integrations.' },
                  { icon: <SparkleIcon />, text: 'Learns your style. Gets smarter over time.' },
                  { icon: <MessageIcon />, text: 'Talk to it on WhatsApp, CLI, or web — anywhere.' },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                    }}
                  >
                    <span
                      style={{
                        color: '#4ECCA3',
                        marginTop: '2px',
                        flexShrink: 0,
                        opacity: 0.85,
                      }}
                    >
                      {item.icon}
                    </span>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: '#888888',
                        lineHeight: '1.7',
                        fontWeight: '400',
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal mockup */}
            <div
              className="pixel-border"
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                background: '#0a0a0a',
                maxWidth: '480px',
              }}
            >
              {/* Terminal header */}
              <div
                style={{
                  background: '#141414',
                  padding: '12px 16px',
                  borderBottom: '1px solid #222222',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                }}
              >
                {['#FF5F57', '#FEBC2E', '#28C840'].map((color) => (
                  <span
                    key={color}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: color,
                      display: 'block',
                      opacity: 0.8,
                    }}
                  />
                ))}
                <span
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.72rem',
                    color: '#444444',
                    marginLeft: '8px',
                  }}
                >
                  openclaw — terminal
                </span>
              </div>
              {/* Terminal body */}
              <div style={{ padding: '1.5rem' }}>
                {[
                  { prompt: '$', cmd: ' openclaw --start', color: '#E8E8E8' },
                  { prompt: '>', cmd: ' Initializing OpenClaw v2.1...', color: '#555555' },
                  { prompt: '>', cmd: ' Loading skill packs... ✓', color: '#4ECCA3' },
                  { prompt: '>', cmd: ' WhatsApp bridge connected ✓', color: '#4ECCA3' },
                  { prompt: '>', cmd: ' Calendar sync active ✓', color: '#4ECCA3' },
                  { prompt: '>', cmd: ' Ready. What do you need?', color: '#5E6AD2' },
                  { prompt: '$', cmd: ' _', color: '#4ECCA3' },
                ].map((line, i) => (
                  <div
                    key={i}
                    style={{
                      fontFamily: 'Courier New, monospace',
                      fontSize: '0.8rem',
                      lineHeight: '1.85',
                      display: 'flex',
                      gap: '8px',
                    }}
                  >
                    <span style={{ color: '#5E6AD2', userSelect: 'none' }}>
                      {line.prompt}
                    </span>
                    <span style={{ color: line.color }}>{line.cmd}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section
        className="reveal"
        style={{
          padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
          background: '#0a0a0a',
          borderTop: '1px solid #1a1a1a',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: '600',
                color: '#5E6AD2',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '0.875rem',
              }}
            >
              What you get
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: '#E8E8E8',
                letterSpacing: '-0.02em',
              }}
            >
              Everything you need to{' '}
              <span style={{ color: '#4ECCA3' }}>go deeper.</span>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card-hover pixel-border"
                style={{
                  padding: '2rem',
                  borderRadius: '10px',
                  position: 'relative',
                }}
              >
                {/* Top row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1.5rem',
                  }}
                >
                  <span
                    style={{
                      color: feature.tagColor,
                      display: 'flex',
                      alignItems: 'center',
                      padding: '8px',
                      background: `${feature.tagColor}12`,
                      borderRadius: '8px',
                    }}
                  >
                    {feature.icon}
                  </span>
                  <span
                    className="tag"
                    style={{
                      background: `${feature.tagColor}10`,
                      color: feature.tagColor,
                      border: `1px solid ${feature.tagColor}30`,
                    }}
                  >
                    {feature.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#E8E8E8',
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#777777',
                    lineHeight: '1.7',
                    marginBottom: '1.75rem',
                    fontWeight: '400',
                  }}
                >
                  {feature.description}
                </p>

                {/* Bottom row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Link
                    href={feature.href}
                    style={{
                      fontSize: '0.825rem',
                      fontWeight: '500',
                      color: feature.tagColor,
                      textDecoration: 'none',
                      letterSpacing: '0.01em',
                      transition: 'opacity 0.2s',
                    }}
                  >
                    {feature.cta}
                  </Link>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: '#3f3f3f',
                      fontWeight: '500',
                    }}
                  >
                    {feature.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="reveal"
        style={{
          padding: 'clamp(5rem, 10vw, 8rem) 1.5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(94, 106, 210, 0.07) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '640px', margin: '0 auto', position: 'relative' }}>
          <p
            style={{
              fontSize: '0.72rem',
              fontWeight: '600',
              color: '#5E6AD2',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            Get started
          </p>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)',
              fontWeight: '700',
              color: '#E8E8E8',
              lineHeight: 1.2,
              marginBottom: '1.1rem',
              letterSpacing: '-0.02em',
            }}
          >
            Ready to level up
            <br />
            <span style={{ color: '#4ECCA3' }}>your OpenClaw?</span>
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#777777',
              lineHeight: '1.7',
              marginBottom: '2.25rem',
              fontWeight: '400',
            }}
          >
            Start with a guide, grab a skill pack, or just browse.
            <br />
            ClawMatic has what you need to build something wild.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '0.875rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/guides"
              className="btn-primary"
              style={{
                padding: '13px 28px',
                fontSize: '0.95rem',
                textDecoration: 'none',
                borderRadius: '8px',
                display: 'inline-block',
              }}
            >
              Read the guides →
            </Link>
            <Link
              href="/skills"
              className="btn-green"
              style={{
                padding: '13px 28px',
                fontSize: '0.95rem',
                textDecoration: 'none',
                borderRadius: '8px',
                display: 'inline-block',
              }}
            >
              Shop skill packs
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 480px) {
          [style*="repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
