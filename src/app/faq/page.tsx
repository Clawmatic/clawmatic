import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about ClawMatic, OpenClaw skill packs, custom builds, and installations.',
};

const faqs = [
  {
    category: 'SKILL PACKS',
    color: '#4ECCA3',
    items: [
      {
        q: 'Do I need coding experience to use the skill packs?',
        a: 'No. Every pack comes with an install script and a step-by-step setup guide. If you can open a terminal and run a command, you\'re good to go.',
      },
      {
        q: 'What happens after I buy a pack on Gumroad?',
        a: 'You get an instant download link for a ZIP file. Inside is the skill pack folder, an install script, and a README. Run the script and restart OpenClaw — done.',
      },
      {
        q: 'Do packs work on Windows, macOS, and Linux?',
        a: 'Yes. The skills themselves are platform-independent. The install scripts are bash-based — on Windows, run them in Git Bash, WSL, or PowerShell with minor adjustments (the README covers this).',
      },
      {
        q: 'Do I get updates when new versions come out?',
        a: 'Yes. Gumroad gives you lifetime access to all future versions of the pack you bought. You\'ll get an email when updates are available.',
      },
      {
        q: 'Can I get a refund?',
        a: 'Yes. If a pack doesn\'t work on your setup and we can\'t fix it together, you get a full refund. Email info@clawmatic.eu with your Gumroad order details.',
      },
      {
        q: 'Can I use the packs on multiple machines?',
        a: 'Yes. Your purchase is for personal use across your own devices. One person, multiple installs — no problem.',
      },
    ],
  },
  {
    category: 'CUSTOM PACKS',
    color: '#5E6AD2',
    items: [
      {
        q: 'What is a custom skill pack?',
        a: 'A skill pack built specifically around your workflow. You tell me what you need — what apps, what automations, what integrations — and I build it for you. Delivered as a ready-to-install pack.',
      },
      {
        q: 'How much does a custom pack cost?',
        a: 'It depends on the scope. Simple packs (1–3 skills) start around €30–50. More complex builds with multiple integrations are priced on request. Email custom@clawmatic.eu with your requirements and I\'ll give you a quote.',
      },
      {
        q: 'How long does a custom pack take?',
        a: 'Usually 2–5 working days depending on complexity. I\'ll give you a timeline when we scope the project.',
      },
    ],
  },
  {
    category: 'OPENCLAW & SETUP',
    color: '#FF6B6B',
    items: [
      {
        q: 'What is OpenClaw?',
        a: 'OpenClaw is a personal AI assistant platform that runs on your own machine. It connects a language model (like Claude) to skills — modules that let your agent take actions in the real world. ClawMatic is an unofficial resource hub for it.',
      },
      {
        q: 'Do I need an Anthropic API key to use OpenClaw?',
        a: 'Yes. OpenClaw uses Claude as its default model, which requires an Anthropic API key. You can get one at console.anthropic.com. Usage costs a few cents per conversation for most people.',
      },
      {
        q: 'Can you install OpenClaw for me?',
        a: 'Yes. I offer hands-on setup via remote access or on-site. Email info@clawmatic.eu or plan a meeting via the contact page.',
      },
      {
        q: 'What are the system requirements?',
        a: 'Node.js 18+ and any modern OS (Windows, macOS, Linux). A basic laptop is fine. For always-on use, a cheap VPS (€4–6/month) is recommended.',
      },
    ],
  },
  {
    category: 'CLAWMATIC',
    color: '#FEBC2E',
    items: [
      {
        q: 'Is ClawMatic affiliated with OpenClaw?',
        a: 'No. ClawMatic is an independent, unofficial resource hub. It\'s not made by or endorsed by the OpenClaw team.',
      },
      {
        q: 'Are the guides really free?',
        a: 'Yes, always. Guides are free. Skill packs are paid. That\'s the model.',
      },
      {
        q: 'I found an error in a guide / something is broken.',
        a: 'Please tell me! Email info@clawmatic.eu with what you found and I\'ll fix it quickly.',
      },
    ],
  },
];

export default function FAQPage() {
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
            left: '0',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(78, 204, 163, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          <p style={{
            fontFamily: 'Courier New, monospace',
            fontSize: '0.7rem',
            color: '#4ECCA3',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            FAQ
          </p>
          <h1 style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            color: '#EFEFEF',
            lineHeight: 1.1,
            marginBottom: '1rem',
          }}>
            Common questions,
            <br />
            <span style={{ color: '#4ECCA3' }}>straight answers.</span>
          </h1>
          <p style={{
            fontFamily: 'Courier New, monospace',
            fontSize: '0.85rem',
            color: '#999999',
            maxWidth: '500px',
            lineHeight: '1.7',
          }}>
            Can&apos;t find what you&apos;re looking for?{' '}
            <Link href="/contact" style={{ color: '#4ECCA3', textDecoration: 'none' }}>
              Get in touch →
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ content */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {faqs.map((section) => (
            <div key={section.category}>
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.65rem',
                    color: section.color,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    background: `${section.color}12`,
                    border: `1px solid ${section.color}30`,
                    padding: '3px 10px',
                    borderRadius: '2px',
                  }}
                >
                  {section.category}
                </span>
                <div style={{ flex: 1, height: '1px', background: '#1e1e1e' }} />
              </div>

              {/* Questions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {section.items.map((item) => (
                  <div
                    key={item.q}
                    className="pixel-border"
                    style={{
                      padding: '1.25rem 1.5rem',
                      borderRadius: '4px',
                      background: '#1c1c1c',
                    }}
                  >
                    <p style={{
                      fontFamily: 'Courier New, monospace',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      color: '#EFEFEF',
                      marginBottom: '0.5rem',
                      lineHeight: '1.5',
                    }}>
                      {item.q}
                    </p>
                    <p style={{
                      fontFamily: 'Courier New, monospace',
                      fontSize: '0.78rem',
                      color: '#888888',
                      lineHeight: '1.75',
                    }}>
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
              borderRadius: '4px',
              background: 'rgba(94, 106, 210, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.7rem', color: '#5E6AD2', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Still have questions?
            </p>
            <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.9rem', fontWeight: '700', color: '#EFEFEF' }}>
              Didn&apos;t find your answer?
            </p>
            <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.78rem', color: '#666666', lineHeight: '1.7' }}>
              Email info@clawmatic.eu or plan a meeting and I&apos;ll help you out directly.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="mailto:info@clawmatic.eu"
                className="btn-green"
                style={{ display: 'inline-block', padding: '10px 24px', fontSize: '0.8rem', textDecoration: 'none', borderRadius: '2px' }}
              >
                email us →
              </a>
              <Link
                href="/contact"
                className="btn-primary"
                style={{ display: 'inline-block', padding: '10px 24px', fontSize: '0.8rem', textDecoration: 'none', borderRadius: '2px' }}
              >
                plan a meeting →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
