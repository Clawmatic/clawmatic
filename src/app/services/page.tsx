import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'ClawMatic builds custom AI automation systems — workflow automation, AI chatbots, and system integrations for growing businesses.',
};

const font = 'var(--font-inter), Inter, sans-serif';

const labelStyle = {
  fontFamily: font,
  fontSize: '0.75rem',
  fontWeight: 600,
  color: '#5E6AD2',
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  marginBottom: '0.75rem',
};

const pillStyle = {
  display: 'inline-block',
  background: 'rgba(94,106,210,0.1)',
  border: '1px solid rgba(94,106,210,0.2)',
  borderRadius: '4px',
  padding: '2px 8px',
  fontSize: '0.72rem',
  color: '#aaa',
  marginRight: '4px',
  marginBottom: '4px',
};

const services = [
  {
    icon: '🔄',
    badge: 'Most popular',
    title: 'AI Workflow Automation',
    desc: 'We map your most time-consuming manual processes and replace them with AI-powered workflows. The result: tasks that took hours now happen automatically.',
    tools: ['Gmail', 'Slack', 'Google Sheets', 'Notion', 'Airtable'],
    examples: [
      'Email triage & auto-responses',
      'Lead follow-up sequences',
      'Automated reporting',
      'Data entry & processing',
    ],
    topBorder: '3px solid #5E6AD2',
  },
  {
    icon: '💬',
    badge: null,
    title: 'AI Chat & Support Automation',
    desc: 'Deploy AI assistants that handle customer questions, qualify leads, and respond instantly — 24/7, without adding headcount.',
    tools: ['WhatsApp', 'Gmail', 'HubSpot', 'Slack'],
    examples: [
      'Customer support bot',
      'Lead qualification',
      'Appointment scheduling',
      'FAQ automation',
    ],
    topBorder: '3px solid #4ECCA3',
  },
  {
    icon: '🔌',
    badge: null,
    title: 'System Integrations',
    desc: 'Your tools should talk to each other. We connect your apps so data flows automatically — no copy-pasting between systems, no manual syncing.',
    tools: ['HubSpot', 'Notion', 'Google Sheets', 'Airtable', 'Slack'],
    examples: [
      'CRM auto-updates',
      'Cross-platform data sync',
      'Automated notifications',
      'Multi-tool pipelines',
    ],
    topBorder: '1px solid #2a2a2a',
  },
];

const steps = [
  {
    num: '01',
    numColor: '#5E6AD2',
    title: 'Free Audit Call',
    desc: '30 minutes. We learn about your business, understand your biggest time sinks, and identify the highest-impact automations.',
  },
  {
    num: '02',
    numColor: '#5E6AD2',
    title: 'Scope & Quote',
    desc: 'We map out exactly what we will build and give you a fixed-price quote. No surprises, no hourly billing.',
  },
  {
    num: '03',
    numColor: '#5E6AD2',
    title: 'We Build It',
    desc: 'Our team builds and tests the automation system. Most projects are delivered within 2-4 weeks.',
  },
  {
    num: '04',
    numColor: '#4ECCA3',
    title: 'You Save Time',
    desc: 'We hand over a working system and make sure everything runs smoothly. You start saving hours immediately.',
  },
];

const whyItems = [
  {
    icon: '🎯',
    title: 'Fixed-price quotes',
    desc: 'You know the cost upfront. No hourly surprises or scope creep invoices.',
  },
  {
    icon: '⚡',
    title: 'Fast delivery',
    desc: 'Most systems are live within 2-4 weeks. We move quickly without cutting corners.',
  },
  {
    icon: '🔧',
    title: 'Built for you',
    desc: 'No off-the-shelf tools. Every system is designed around your specific workflow and stack.',
  },
];

export default function ServicesPage() {
  return (
    <div style={{ background: '#181818', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section
        className="grid-bg"
        style={{
          background: '#181818',
          padding: 'clamp(5rem,10vw,8rem) 1.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Purple glow blob top-right */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-5%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(94,106,210,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <p style={labelStyle}>Our services</p>
          <h1
            style={{
              fontFamily: font,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#F0F0F0',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
            }}
          >
            Custom AI systems built around your business
          </h1>
          <p
            style={{
              fontFamily: font,
              fontSize: '1.05rem',
              color: '#888',
              lineHeight: 1.7,
              maxWidth: '580px',
              marginBottom: '2.5rem',
            }}
          >
            We do not sell software. We build automation systems tailored to exactly how your
            business works — so the repetitive stuff disappears and you can focus on growth.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <a
              href="https://calendly.com/clawmatic/30min"
              className="btn-primary"
              style={{
                padding: '14px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-block',
                fontFamily: font,
              }}
            >
              Book a Free Audit
            </a>
            <a
              href="#process"
              style={{
                display: 'inline-block',
                padding: '14px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontFamily: font,
                fontWeight: 500,
                fontSize: '0.9rem',
                background: 'transparent',
                border: '1px solid #4ECCA3',
                color: '#4ECCA3',
                transition: 'background 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* ── CORE SERVICES ── */}
      <section
        style={{
          background: '#1e1e1e',
          padding: 'clamp(4rem,8vw,6rem) 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={labelStyle}>What we build</p>
          <h2
            style={{
              fontFamily: font,
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 700,
              color: '#F0F0F0',
              marginBottom: '2.5rem',
            }}
          >
            Three ways we automate your business
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {services.map((svc) => (
              <div
                key={svc.title}
                className="card-hover pixel-border"
                style={{
                  background: '#181818',
                  borderRadius: '10px',
                  padding: '1.75rem',
                  borderTop: svc.topBorder,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'border-color 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{svc.icon}</span>
                  {svc.badge && (
                    <span
                      style={{
                        fontFamily: font,
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        background: 'rgba(94,106,210,0.15)',
                        color: '#5E6AD2',
                        border: '1px solid rgba(94,106,210,0.3)',
                        borderRadius: '4px',
                        padding: '2px 8px',
                      }}
                    >
                      {svc.badge}
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontFamily: font,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#F0F0F0',
                    margin: 0,
                  }}
                >
                  {svc.title}
                </h3>

                <p
                  style={{
                    fontFamily: font,
                    fontSize: '0.9rem',
                    color: '#888',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {svc.desc}
                </p>

                <div>
                  <p
                    style={{
                      fontFamily: font,
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: '#666',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Works with:
                  </p>
                  <div>
                    {svc.tools.map((tool) => (
                      <span key={tool} style={pillStyle}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <ul
                  style={{
                    margin: 0,
                    paddingLeft: '1.1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.3rem',
                  }}
                >
                  {svc.examples.map((ex) => (
                    <li
                      key={ex}
                      style={{
                        fontFamily: font,
                        fontSize: '0.82rem',
                        color: '#888',
                        lineHeight: 1.5,
                      }}
                    >
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        id="process"
        style={{
          background: '#181818',
          padding: 'clamp(4rem,8vw,6rem) 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={labelStyle}>How it works</p>
          <h2
            style={{
              fontFamily: font,
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 700,
              color: '#F0F0F0',
              marginBottom: '2.5rem',
            }}
          >
            From first call to live system — in weeks, not months
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
            }}
          >
            {steps.map((step) => (
              <div key={step.num}>
                <div
                  style={{
                    fontFamily: font,
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: step.numColor,
                    lineHeight: 1,
                    marginBottom: '1rem',
                  }}
                >
                  {step.num}
                </div>
                <h3
                  style={{
                    fontFamily: font,
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#F0F0F0',
                    marginBottom: '0.5rem',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: font,
                    fontSize: '0.875rem',
                    color: '#888',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CLAWMATIC ── */}
      <section
        style={{
          background: '#1e1e1e',
          padding: 'clamp(4rem,8vw,6rem) 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={labelStyle}>Why us</p>
          <h2
            style={{
              fontFamily: font,
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 700,
              color: '#F0F0F0',
              marginBottom: '2.5rem',
            }}
          >
            Built custom. Delivered fast. Priced fairly.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="card-hover pixel-border"
                style={{
                  background: '#181818',
                  borderRadius: '10px',
                  padding: '1.75rem',
                  transition: 'border-color 0.2s',
                }}
              >
                <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '1rem' }}>
                  {item.icon}
                </span>
                <h3
                  style={{
                    fontFamily: font,
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#F0F0F0',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: font,
                    fontSize: '0.875rem',
                    color: '#888',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        style={{
          background: '#181818',
          padding: 'clamp(4rem,8vw,6rem) 1.5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Purple glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(94,106,210,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
          <p style={{ ...labelStyle, textAlign: 'center' }}>Get started</p>
          <h2
            style={{
              fontFamily: font,
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 700,
              color: '#F0F0F0',
              marginBottom: '1rem',
            }}
          >
            Ready to automate your business?
          </h2>
          <p
            style={{
              fontFamily: font,
              fontSize: '0.95rem',
              color: '#888',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            Start with a free 30-minute audit call. We will show you exactly what we can automate
            and what it would cost — no obligation.
          </p>
          <a
            href="https://calendly.com/clawmatic/30min"
            className="btn-primary"
            style={{
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-block',
              fontFamily: font,
              fontSize: '1rem',
            }}
          >
            Book Your Free Audit
          </a>
          <p
            style={{
              fontFamily: font,
              fontSize: '0.8rem',
              color: '#555',
              marginTop: '1rem',
            }}
          >
            Free call · No obligation · Fixed-price quotes
          </p>
        </div>
      </section>

    </div>
  );
}
