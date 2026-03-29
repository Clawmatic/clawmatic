'use client';

import Link from 'next/link';

const timeline = [
  {
    date: 'Early 2025',
    title: 'Discovered OpenClaw',
    description: 'Started experimenting with OpenClaw AI for personal automation. Immediately broke my calendar sync. Loved it.',
  },
  {
    date: 'Mid 2025',
    title: 'Built first skill pack',
    description: 'Wrote the WhatsApp bridge skill out of frustration. Spent three weekends on it. Still use it every day.',
  },
  {
    date: 'Late 2025',
    title: 'Realized others were stuck too',
    description: 'People in Discord kept asking the same questions. The official docs were... sparse. A site felt necessary.',
  },
  {
    date: 'Jan 2026',
    title: 'ClawMatic goes live',
    description: 'Launched with a handful of guides and the first skill packs. Belgium noticed. Then the internet did.',
  },
];

const values = [
  {
    icon: '🔓',
    title: 'Honest & independent',
    description: 'ClawMatic is not affiliated with OpenClaw Inc. We call things as they are — bugs, limitations, and all.',
  },
  {
    icon: '🧪',
    title: 'Actually tested',
    description: 'Every guide is written after running the steps ourselves. If it broke during testing, we document that too.',
  },
  {
    icon: '🇧🇪',
    title: 'Made in Belgium',
    description: 'Built in Ghent, with good coffee and a healthy skepticism of hype. Europees, maar global minded.',
  },
  {
    icon: '⚡',
    title: 'Community first',
    description: 'Free guides will always be free. Premium skill packs fund the time it takes to keep everything updated.',
  },
];

export default function AboutPage() {
  return (
    <div style={{ background: '#0F0F0F', minHeight: '100vh' }}>
      {/* Header */}
      <section
        className="grid-bg"
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) 1.5rem 3rem',
          borderBottom: '1px solid #2a2a2a',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 70% 50%, rgba(94, 106, 210, 0.07) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
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
            About
          </p>
          <h1
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '900',
              color: '#E8E8E8',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            ClawMatic is for people
            <br />
            who <span style={{ color: '#4ECCA3' }}>actually use</span> OpenClaw.
          </h1>
          <p
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '0.95rem',
              color: '#888888',
              maxWidth: '650px',
              lineHeight: '1.8',
            }}
          >
            Not a marketing site. Not a product launch. Just a Belgian builder who got
            deep into OpenClaw AI, built some useful stuff, and decided the community
            deserved better resources than a sparse readme and a Discord with no search.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
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
                The Story
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                {[
                  "OpenClaw is genuinely powerful. It can automate your entire digital life if you know how to wire it together. The problem is — figuring that out takes forever.",
                  "The official documentation covers the basics. The Discord is full of people asking questions that nobody answers. Stack Overflow doesn't know what OpenClaw is yet.",
                  "ClawMatic exists to close that gap. It's the resource I wish I had when I started: guides that explain the why, skill packs that work out of the box, and eventually a community that actually helps.",
                  "It's funded by premium skill packs. If you find the free guides useful, buying a skill pack is how you say thanks — and it keeps the lights on.",
                ].map((text, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: 'Courier New, monospace',
                      fontSize: '0.85rem',
                      color: '#888888',
                      lineHeight: '1.8',
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>

            {/* Belgium card */}
            <div>
              <div
                className="pixel-border"
                style={{
                  background: '#0a0a0a',
                  borderRadius: '4px',
                  padding: '2rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    lineHeight: 1,
                  }}
                >
                  🇧🇪
                </div>
                <h3
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#E8E8E8',
                    marginBottom: '0.5rem',
                  }}
                >
                  Made in Belgium
                </h3>
                <p
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.8rem',
                    color: '#666666',
                    lineHeight: '1.7',
                  }}
                >
                  ClawMatic is built and maintained in Ghent. Belgian-made means built
                  carefully, priced fairly, and with no VC money telling us what to do.
                </p>
              </div>

              <div
                className="pixel-border-green"
                style={{
                  background: 'rgba(78, 204, 163, 0.03)',
                  borderRadius: '4px',
                  padding: '1.5rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.7rem',
                    color: '#4ECCA3',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  Not Affiliated
                </p>
                <p
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.78rem',
                    color: '#666666',
                    lineHeight: '1.7',
                  }}
                >
                  ClawMatic is an independent community project. We are not affiliated
                  with, endorsed by, or in any way connected to OpenClaw Inc. or its
                  parent companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
          background: '#0a0a0a',
          borderTop: '1px solid #1a1a1a',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '0.7rem',
              color: '#5E6AD2',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}
          >
            Timeline
          </p>

          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            {/* Vertical line */}
            <div
              style={{
                position: 'absolute',
                left: '0',
                top: '8px',
                bottom: '8px',
                width: '1px',
                background: 'linear-gradient(to bottom, #2a2a2a, #5E6AD2, #4ECCA3, #2a2a2a)',
              }}
            />

            {timeline.map((item, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  marginBottom: i < timeline.length - 1 ? '2.5rem' : '0',
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-2rem',
                    top: '6px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: i === timeline.length - 1 ? '#4ECCA3' : '#5E6AD2',
                    boxShadow: `0 0 8px ${i === timeline.length - 1 ? '#4ECCA3' : '#5E6AD2'}`,
                    transform: 'translateX(-3.5px)',
                  }}
                />

                <p
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.7rem',
                    color: '#5E6AD2',
                    marginBottom: '4px',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.date}
                </p>
                <h4
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    color: '#E8E8E8',
                    marginBottom: '6px',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.8rem',
                    color: '#666666',
                    lineHeight: '1.7',
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            What we stand for
          </p>
          <h2
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '900',
              color: '#E8E8E8',
              marginBottom: '2.5rem',
            }}
          >
            How we roll.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {values.map((v) => (
              <div
                key={v.title}
                className="card-hover pixel-border"
                style={{
                  padding: '1.75rem',
                  borderRadius: '4px',
                }}
              >
                <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '1rem' }}>
                  {v.icon}
                </span>
                <h3
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    color: '#E8E8E8',
                    marginBottom: '0.5rem',
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.78rem',
                    color: '#666666',
                    lineHeight: '1.7',
                  }}
                >
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
          background: '#0a0a0a',
          borderTop: '1px solid #1a1a1a',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
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
            Say hello
          </p>
          <h2
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '900',
              color: '#E8E8E8',
              marginBottom: '1rem',
            }}
          >
            Got questions? Ideas?
            <br />
            <span style={{ color: '#4ECCA3' }}>A bug report?</span>
          </h2>
          <p
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '0.82rem',
              color: '#888888',
              lineHeight: '1.7',
              marginBottom: '2rem',
            }}
          >
            We read everything. If you have a guide idea, a skill pack request,
            or just want to say what&apos;s working for you — reach out.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:info@clawmatic.eu"
              className="btn-primary"
              style={{
                padding: '12px 28px',
                fontSize: '0.85rem',
                textDecoration: 'none',
                borderRadius: '2px',
                display: 'inline-block',
              }}
            >
              Email us →
            </a>
            <Link
              href="/guides"
              className="btn-green"
              style={{
                padding: '12px 28px',
                fontSize: '0.85rem',
                textDecoration: 'none',
                borderRadius: '2px',
                display: 'inline-block',
              }}
            >
              Explore guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
