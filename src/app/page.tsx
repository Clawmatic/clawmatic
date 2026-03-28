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
        fontSize: 'clamp(1rem, 3vw, 1.5rem)',
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
          height: '1.2em',
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
        fontSize: 'clamp(2.5rem, 8vw, 6rem)',
        fontWeight: '900',
        fontFamily: 'Courier New, monospace',
        letterSpacing: '-0.02em',
        lineHeight: 1.05,
        marginBottom: '1.5rem',
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
          background: 'linear-gradient(135deg, #5E6AD2, #4ECCA3)',
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

const features = [
  {
    icon: '📖',
    title: 'Guides',
    tag: 'LEARN',
    tagColor: '#5E6AD2',
    description: 'Step-by-step tutorials to get OpenClaw running exactly how you want it. From setup to advanced workflows.',
    href: '/guides',
    cta: 'read_guides →',
    count: '12 guides',
  },
  {
    icon: '⚡',
    title: 'Skill Packs',
    tag: 'POWER UP',
    tagColor: '#4ECCA3',
    description: 'Pre-built skill bundles that supercharge OpenClaw. Connect apps, automate tasks, build faster.',
    href: '/skills',
    cta: 'browse_skills →',
    count: '8 packs',
  },
  {
    icon: '🛠️',
    title: 'Community',
    tag: 'SOON',
    tagColor: '#888888',
    description: 'Join the builders. Share skills, swap configs, and figure out what OpenClaw can actually do.',
    href: '#',
    cta: 'coming_soon',
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
  return (
    <div style={{ background: '#0F0F0F' }}>
      {/* Hero Section */}
      <section
        className="grid-bg"
        style={{
          position: 'relative',
          padding: 'clamp(4rem, 10vw, 8rem) 1.5rem clamp(3rem, 8vw, 6rem)',
          overflow: 'hidden',
        }}
      >
        {/* Background glow blobs */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(94, 106, 210, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-5%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(78, 204, 163, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Badge */}
          <div style={{ marginBottom: '1.5rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(94, 106, 210, 0.12)',
                border: '1px solid rgba(94, 106, 210, 0.3)',
                borderRadius: '2px',
                padding: '4px 12px',
                fontFamily: 'Courier New, monospace',
                fontSize: '0.7rem',
                color: '#5E6AD2',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#4ECCA3',
                  boxShadow: '0 0 8px #4ECCA3',
                  animation: 'pulse-glow 2s ease infinite',
                }}
              />
              OpenClaw AI — Unofficial Hub
            </span>
          </div>

          <GlitchTitle />

          <div style={{ marginBottom: '2.5rem' }}>
            <p
              style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '0.85rem',
                color: '#5E6AD2',
                marginBottom: '0.5rem',
              }}
            >
              $ ./clawmatic --run
            </p>
            <TerminalHero />
          </div>

          <p
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 'clamp(0.85rem, 2vw, 1rem)',
              color: '#888888',
              maxWidth: '600px',
              lineHeight: '1.8',
              marginBottom: '2.5rem',
            }}
          >
            ClawMatic is your go-to resource for{' '}
            <span style={{ color: '#E8E8E8' }}>OpenClaw AI</span> — the personal AI
            assistant that actually does stuff. Guides, skill packs, and a community
            of builders who push it to the limit.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="/guides"
              className="btn-primary"
              style={{
                padding: '14px 32px',
                fontSize: '0.9rem',
                textDecoration: 'none',
                borderRadius: '2px',
                display: 'inline-block',
              }}
            >
              Start here →
            </Link>
            <Link
              href="/skills"
              className="btn-green"
              style={{
                padding: '14px 32px',
                fontSize: '0.9rem',
                textDecoration: 'none',
                borderRadius: '2px',
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
          borderTop: '1px solid #2a2a2a',
          borderBottom: '1px solid #2a2a2a',
          background: '#0a0a0a',
          padding: '1.5rem',
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
                  fontFamily: 'Courier New, monospace',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 'bold',
                  color: '#4ECCA3',
                  marginBottom: '0.25rem',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.7rem',
                  color: '#555555',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What is OpenClaw section */}
      <section style={{ padding: 'clamp(4rem, 8vw, 6rem) 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Text */}
            <div>
              <p
                style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.7rem',
                  color: '#5E6AD2',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                What is OpenClaw?
              </p>
              <h2
                style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  fontWeight: '900',
                  color: '#E8E8E8',
                  lineHeight: 1.2,
                  marginBottom: '1.5rem',
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
                  gap: '1rem',
                }}
              >
                {[
                  { icon: '⚙️', text: 'Runs locally or in the cloud — you pick.' },
                  { icon: '🔌', text: 'Connects to your apps via skills and integrations.' },
                  { icon: '🧠', text: 'Learns your style. Gets smarter over time.' },
                  { icon: '💬', text: 'Talk to it on WhatsApp, CLI, or web — anywhere.' },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                    }}
                  >
                    <span style={{ fontSize: '1rem', lineHeight: '1.7' }}>{item.icon}</span>
                    <p
                      style={{
                        fontFamily: 'Courier New, monospace',
                        fontSize: '0.85rem',
                        color: '#888888',
                        lineHeight: '1.7',
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
                borderRadius: '4px',
                overflow: 'hidden',
                background: '#0a0a0a',
                maxWidth: '500px',
              }}
            >
              {/* Terminal header */}
              <div
                style={{
                  background: '#161616',
                  padding: '12px 16px',
                  borderBottom: '1px solid #2a2a2a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
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
                    }}
                  />
                ))}
                <span
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.7rem',
                    color: '#555555',
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
                      lineHeight: '1.8',
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
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
          background: '#0a0a0a',
          borderTop: '1px solid #1a1a1a',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p
              style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '0.7rem',
                color: '#5E6AD2',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              What you get
            </p>
            <h2
              style={{
                fontFamily: 'Courier New, monospace',
                fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                fontWeight: '900',
                color: '#E8E8E8',
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
              gap: '1.5rem',
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card-hover pixel-border"
                style={{
                  padding: '2rem',
                  borderRadius: '4px',
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
                  <span style={{ fontSize: '2rem' }}>{feature.icon}</span>
                  <span
                    className="tag"
                    style={{
                      background: `${feature.tagColor}18`,
                      color: feature.tagColor,
                      border: `1px solid ${feature.tagColor}40`,
                    }}
                  >
                    {feature.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: '#E8E8E8',
                    marginBottom: '0.75rem',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.8rem',
                    color: '#888888',
                    lineHeight: '1.7',
                    marginBottom: '1.5rem',
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
                      fontFamily: 'Courier New, monospace',
                      fontSize: '0.75rem',
                      color: feature.tagColor,
                      textDecoration: 'none',
                      letterSpacing: '0.05em',
                      transition: 'opacity 0.2s',
                    }}
                  >
                    {feature.cta}
                  </Link>
                  <span
                    style={{
                      fontFamily: 'Courier New, monospace',
                      fontSize: '0.7rem',
                      color: '#444444',
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
        style={{
          padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(94, 106, 210, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
          <p
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '0.7rem',
              color: '#5E6AD2',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Get started
          </p>
          <h2
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: '900',
              color: '#E8E8E8',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Ready to level up
            <br />
            <span style={{ color: '#4ECCA3' }}>your OpenClaw?</span>
          </h2>
          <p
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '0.85rem',
              color: '#888888',
              lineHeight: '1.7',
              marginBottom: '2rem',
            }}
          >
            Start with a guide, grab a skill pack, or just browse.
            <br />
            ClawMatic has what you need to build something wild.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/guides"
              className="btn-primary"
              style={{
                padding: '14px 32px',
                fontSize: '0.9rem',
                textDecoration: 'none',
                borderRadius: '2px',
                display: 'inline-block',
              }}
            >
              Read the guides →
            </Link>
            <Link
              href="/skills"
              className="btn-green"
              style={{
                padding: '14px 32px',
                fontSize: '0.9rem',
                textDecoration: 'none',
                borderRadius: '2px',
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
          [style*="gridTemplateColumns: 'repeat(4, 1fr)'"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
