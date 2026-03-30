import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about ClawMatic AI automation services, our process, pricing, and what we build.',
};

const faqs = [
  {
    category: 'ABOUT CLAWMATIC',
    color: '#4ECCA3',
    items: [
      {
        q: 'What is ClawMatic?',
        a: 'ClawMatic is a Belgian AI automation agency. We build custom AI systems that eliminate repetitive work for businesses — from email automation to lead follow-up, reporting, scheduling, and more.',
      },
      {
        q: 'Where are you based?',
        a: 'We are based in Belgium and work with clients across Europe. Most of our work is done remotely, so location is rarely a barrier.',
      },
      {
        q: 'Who is this for?',
        a: 'Any business that has repetitive manual processes. Whether you run a local shop, an agency, an e-commerce store, or a SaaS product — if your team is doing the same tasks by hand every day, we can probably automate most of it.',
      },
    ],
  },
  {
    category: 'OUR SERVICES',
    color: '#5E6AD2',
    items: [
      {
        q: 'What exactly do you build?',
        a: 'Custom AI automation systems tailored to your business. Common examples include: automated email triage and responses, lead follow-up workflows, report generation, customer support automation, data entry and processing, and scheduling systems.',
      },
      {
        q: 'Do I need technical knowledge?',
        a: 'No. We handle everything from scoping to deployment. You just tell us what you want automated and we build it. No coding required on your end.',
      },
      {
        q: 'What tools and platforms do you work with?',
        a: 'We work with most common business tools — Gmail, Outlook, Slack, Notion, HubSpot, Airtable, WhatsApp, and many more. If you use it daily, we can probably connect to it.',
      },
    ],
  },
  {
    category: 'THE PROCESS',
    color: '#FF6B6B',
    items: [
      {
        q: 'How does it work?',
        a: 'It starts with a free 30-minute audit call. We learn about your business and identify where automation can save you the most time. Then we scope the project, build the system, and deliver it ready to use.',
      },
      {
        q: 'How long does a project take?',
        a: 'Most projects are delivered within 2-4 weeks. Simpler automations can be done faster. We give you a clear timeline after the audit.',
      },
      {
        q: 'What happens after delivery?',
        a: 'We make sure everything works correctly before handover. If something breaks or needs adjusting after launch, we are here to fix it.',
      },
    ],
  },
  {
    category: 'PRICING',
    color: '#FEBC2E',
    items: [
      {
        q: 'How much does it cost?',
        a: 'It depends on the scope. After the free audit we give you a clear, fixed-price quote — no surprises. We offer solutions for different budget levels.',
      },
      {
        q: 'Is the audit really free?',
        a: 'Yes, completely. The audit call is free with no obligation. We only move forward if it makes sense for your business.',
      },
      {
        q: 'Do you offer ongoing support?',
        a: 'Yes. We offer optional maintenance and support packages for clients who want ongoing help, updates, or new automations added over time.',
      },
    ],
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

export default function FAQPage() {
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
            left: '0',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(78, 204, 163, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <p style={labelStyle}>FAQ</p>
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
            Common questions,{' '}
            <span style={{ color: '#4ECCA3' }}>straight answers.</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '1rem',
              color: '#888',
              maxWidth: '500px',
              lineHeight: 1.7,
            }}
          >
            Can&apos;t find what you&apos;re looking for?{' '}
            <Link href="/contact" style={{ color: '#4ECCA3', textDecoration: 'none' }}>
              Get in touch →
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ content */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem', background: '#1e1e1e' }}>
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '3.5rem',
          }}
        >
          {faqs.map((section) => (
            <div key={section.category}>
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: section.color,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    background: `${section.color}12`,
                    border: `1px solid ${section.color}30`,
                    padding: '3px 10px',
                    borderRadius: '4px',
                  }}
                >
                  {section.category}
                </span>
                <div style={{ flex: 1, height: '1px', background: '#2a2a2a' }} />
              </div>

              {/* Questions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {section.items.map((item) => (
                  <div
                    key={item.q}
                    className="pixel-border"
                    style={{
                      padding: '1.5rem',
                      borderRadius: '10px',
                      background: '#181818',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: '#F0F0F0',
                        marginBottom: '0.5rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {item.q}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontSize: '0.875rem',
                        color: '#888',
                        lineHeight: 1.7,
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom CTA */}
          <div
            className="pixel-border-purple"
            style={{
              padding: '2rem',
              borderRadius: '10px',
              background: 'rgba(94, 106, 210, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <p style={labelStyle}>Still have questions?</p>
            <h3
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#F0F0F0',
                margin: 0,
              }}
            >
              Did not find your answer?
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '0.875rem',
                color: '#888',
                lineHeight: 1.7,
              }}
            >
              Send us an email or book a free call — we are happy to answer any questions before you
              commit to anything.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="mailto:info@clawmatic.eu"
                className="btn-green"
                style={{
                  display: 'inline-block',
                  padding: '10px 24px',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontWeight: 600,
                }}
              >
                Email us →
              </a>
              <Link
                href="/contact"
                className="btn-primary"
                style={{
                  display: 'inline-block',
                  padding: '10px 24px',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontWeight: 600,
                }}
              >
                Book a free call →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
