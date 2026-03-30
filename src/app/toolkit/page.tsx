'use client';

import Link from 'next/link';

const s = {
  fontFamily: 'var(--font-inter), Inter, sans-serif',
};

const toolkits = [
  {
    id: 1,
    name: 'Starter Kit',
    emoji: '🚀',
    badge: 'NEW',
    badgeColor: '#4ECCA3',
    price: '€9',
    originalPrice: null,
    description:
      'Everything you need to hit the ground running. 10 essential automations covering messaging, productivity, search, and task management — pre-configured and ready to use.',
    features: [
      '10 curated essential automations',
      'Step-by-step setup guide',
      'WhatsApp + Telegram basics',
      'Web search & summarization',
      'Task & calendar automation',
      'Lifetime updates included',
    ],
    skills: 10,
    version: '1.0.0',
    updated: '2026-03-28',
    category: 'Starter',
    categoryColor: '#4ECCA3',
    gumroadUrl: 'https://clawmatic.gumroad.com/l/starter-kit',
    gumroadId: 'starter-kit',
    downloads: '0+',
  },
  {
    id: 2,
    name: 'Productivity OS Pack',
    emoji: '🚀',
    badge: 'BESTSELLER',
    badgeColor: '#5E6AD2',
    price: '€10',
    originalPrice: '€15',
    description:
      'The ultimate productivity bundle. Google Calendar, Gmail, Notion, Todoist — all wired into your automation agent. Automate your whole workday.',
    features: [
      'Google Calendar read/write',
      'Gmail drafting & sending',
      'Notion page creation',
      'Todoist task management',
      'Daily briefing generator',
      'Standup auto-writer',
    ],
    skills: 15,
    version: '2.1.0',
    updated: '2026-03-10',
    category: 'Productivity',
    categoryColor: '#5E6AD2',
    gumroadUrl: 'https://clawmatic.gumroad.com',
    gumroadId: '',
    downloads: '520+',
  },
  {
    id: 3,
    name: 'Dev Toolkit',
    emoji: '🛠️',
    badge: 'COMING SOON',
    badgeColor: '#FF6B6B',
    price: '€8',
    originalPrice: null,
    description:
      'Automations for developers. Pull GitHub issues, write commit messages, explain code, generate PRs, search docs — everything a dev needs inside your AI assistant.',
    features: [
      'GitHub issues & PRs',
      'Code explanation & review',
      'Commit message writer',
      'Docs search (MDN, npm, etc)',
      'Shell command helper',
      'Bug report formatter',
    ],
    skills: 12,
    version: '1.0.1',
    updated: '2026-03-20',
    category: 'Development',
    categoryColor: '#FF6B6B',
    gumroadUrl: 'https://clawmatic.gumroad.com',
    gumroadId: '',
    downloads: '180+',
  },
  {
    id: 4,
    name: 'Finance Tracker Pack',
    emoji: '💰',
    badge: 'COMING SOON',
    badgeColor: '#4ECCA3',
    price: '€0',
    originalPrice: null,
    description:
      'Parse bank CSV exports, categorize transactions, track budgets, and ask questions about your money — all locally, all private.',
    features: [
      'CSV bank import',
      'Auto-categorization',
      'Monthly spend reports',
      'Budget alerts',
      'Natural language queries',
    ],
    skills: 6,
    version: '1.1.0',
    updated: '2026-02-28',
    category: 'Finance',
    categoryColor: '#FEBC2E',
    gumroadUrl: 'https://clawmatic.gumroad.com',
    gumroadId: '',
    downloads: '890+',
  },
  {
    id: 5,
    name: 'News & Research Digest',
    emoji: '📰',
    badge: 'COMING SOON',
    badgeColor: '#888888',
    price: '€5',
    originalPrice: null,
    description:
      'Get AI-curated news digests, research summaries, and topic briefings. Connect RSS feeds, HN, Reddit, and arXiv into one smart daily brief.',
    features: [
      'RSS feed aggregation',
      'Hacker News digest',
      'Reddit topic summaries',
      'arXiv paper briefs',
      'Custom keyword alerts',
    ],
    skills: 7,
    version: '1.2.0',
    updated: '2026-03-01',
    category: 'Information',
    categoryColor: '#888888',
    gumroadUrl: 'https://clawmatic.gumroad.com',
    gumroadId: '',
    downloads: '210+',
  },
  {
    id: 6,
    name: 'Smart Home Bridge',
    emoji: '🏠',
    badge: 'COMING SOON',
    badgeColor: '#FEBC2E',
    price: '€6',
    originalPrice: null,
    description:
      'Control Home Assistant, Philips Hue, and MQTT devices with natural language. "Set study lights to focus mode" just works.',
    features: [
      'Home Assistant integration',
      'Philips Hue scenes',
      'MQTT device control',
      'Automation triggers',
      'Device state queries',
    ],
    skills: 9,
    version: '0.9.5',
    updated: '2026-02-20',
    category: 'Smart Home',
    categoryColor: '#FEBC2E',
    gumroadUrl: 'https://clawmatic.gumroad.com',
    gumroadId: '',
    downloads: '95+',
  },
  {
    id: 7,
    name: 'Health & Fitness Log',
    emoji: '💪',
    badge: 'COMING SOON',
    badgeColor: '#FF6B6B',
    price: '€5',
    originalPrice: null,
    description:
      'Log workouts, track habits, analyze sleep data, and get personalized fitness summaries. Works with Apple Health CSV exports.',
    features: [
      'Workout logging',
      'Habit tracker',
      'Apple Health CSV import',
      'Weekly fitness reports',
      'Goal tracking',
    ],
    skills: 5,
    version: '1.0.0',
    updated: '2026-02-10',
    category: 'Health',
    categoryColor: '#FF6B6B',
    gumroadUrl: 'https://clawmatic.gumroad.com',
    gumroadId: '',
    downloads: '130+',
  },
  {
    id: 8,
    name: 'Belgian Starter Pack',
    emoji: '🇧🇪',
    badge: 'COMING SOON',
    badgeColor: '#5E6AD2',
    price: '€0',
    originalPrice: null,
    description:
      'A free starter pack built with Belgian taste. Includes VAT calculator, Belgian public transit lookup, and more local integrations.',
    features: [
      'Belgian VAT calculator',
      'SNCB train lookup',
      'De Lijn bus schedules',
      'Belgian holiday checker',
      'EUR/USD quick convert',
    ],
    skills: 5,
    version: '1.0.0',
    updated: '2026-03-25',
    category: 'Local',
    categoryColor: '#5E6AD2',
    gumroadUrl: 'https://clawmatic.gumroad.com',
    gumroadId: '',
    downloads: '75+',
  },
];

export default function ToolkitPage() {
  return (
    <div style={{ background: '#181818', minHeight: '100vh', ...s }}>

      {/* ── HERO ── */}
      <section
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) 1.5rem 2.5rem',
          borderBottom: '1px solid #2a2a2a',
          position: 'relative',
          overflow: 'hidden',
          background: '#1e1e1e',
        }}
      >
        <div style={{
          position: 'absolute', top: '-30%', right: '0',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(78,204,163,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <p style={{
            ...s,
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#5E6AD2',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Toolkit
          </p>
          <h1 style={{
            ...s,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: '#F0F0F0',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
          }}>
            Automate your work —{' '}
            <span style={{ color: '#4ECCA3' }}>yourself</span>
          </h1>
          <p style={{
            ...s,
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: '#888888',
            maxWidth: '560px',
            lineHeight: 1.7,
            marginBottom: '0.75rem',
          }}>
            Ready-made automation toolkits for individuals. No agency needed, no technical knowledge required. Download, install, and start saving time today.
          </p>
          <p style={{
            ...s,
            fontSize: '0.85rem',
            color: '#888',
          }}>
            Looking for a custom build for your business?{' '}
            <Link href="/services" style={{ color: '#4ECCA3', textDecoration: 'none' }}>
              → /services
            </Link>
          </p>
        </div>
      </section>

      {/* ── INFO BAR ── */}
      <section style={{
        background: 'rgba(78,204,163,0.06)',
        borderBottom: '1px solid rgba(78,204,163,0.15)',
        padding: '12px 1.5rem',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <span style={{ color: '#4ECCA3', fontSize: '0.85rem' }}>ℹ️</span>
          <p style={{
            ...s,
            fontSize: '0.8rem',
            color: '#888888',
          }}>
            All toolkits are delivered as instant downloads via{' '}
            <span style={{ color: '#4ECCA3' }}>Gumroad</span>. One-time payment, lifetime updates.
          </p>
        </div>
      </section>

      {/* ── PRODUCTS GRID ── */}
      <section style={{ padding: 'clamp(2rem, 4vw, 3rem) 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.25rem',
          }}>
            {toolkits.map((toolkit) => (
              <div
                key={toolkit.id}
                className="card-hover"
                style={{
                  background: '#181818',
                  border: '1px solid #2a2a2a',
                  borderRadius: '10px',
                  padding: '1.75rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Card header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1.25rem',
                }}>
                  <span style={{
                    fontSize: '2rem',
                    lineHeight: 1,
                    background: '#1e1e1e',
                    padding: '8px',
                    borderRadius: '8px',
                    display: 'block',
                  }}>
                    {toolkit.emoji}
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    {toolkit.badge && (
                      <span style={{
                        ...s,
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: `${toolkit.badgeColor}15`,
                        color: toolkit.badgeColor,
                        border: `1px solid ${toolkit.badgeColor}35`,
                      }}>
                        {toolkit.badge}
                      </span>
                    )}
                    <span style={{
                      ...s,
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      background: `${toolkit.categoryColor}10`,
                      color: toolkit.categoryColor,
                      border: `1px solid ${toolkit.categoryColor}25`,
                    }}>
                      {toolkit.category}
                    </span>
                  </div>
                </div>

                <h3 style={{
                  ...s,
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#E8E8E8',
                  marginBottom: '0.75rem',
                }}>
                  {toolkit.name}
                </h3>

                <p style={{
                  ...s,
                  fontSize: '0.82rem',
                  color: '#666666',
                  lineHeight: 1.7,
                  marginBottom: '1.25rem',
                  flex: 1,
                }}>
                  {toolkit.description}
                </p>

                {/* Feature list */}
                <div style={{ marginBottom: '1.25rem' }}>
                  {toolkit.features.slice(0, 4).map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ color: '#4ECCA3', fontSize: '0.65rem' }}>✓</span>
                      <span style={{ ...s, fontSize: '0.78rem', color: '#666666' }}>{f}</span>
                    </div>
                  ))}
                  {toolkit.features.length > 4 && (
                    <div style={{ ...s, fontSize: '0.72rem', color: '#444444', marginTop: '4px' }}>
                      +{toolkit.features.length - 4} more
                    </div>
                  )}
                </div>

                {/* Meta row */}
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  marginBottom: '1.25rem',
                  borderTop: '1px solid #2a2a2a',
                  paddingTop: '1rem',
                }}>
                  {[
                    { label: toolkit.skills + ' automations', icon: '⚡' },
                    { label: 'v' + toolkit.version, icon: '🔖' },
                    { label: toolkit.downloads, icon: '⬇️' },
                  ].map((m) => (
                    <span key={m.label} style={{
                      ...s,
                      fontSize: '0.68rem',
                      color: '#555555',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}>
                      <span>{m.icon}</span> {m.label}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{
                      ...s,
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: toolkit.price === '€0' ? '#4ECCA3' : '#E8E8E8',
                    }}>
                      {toolkit.price}
                    </span>
                    {toolkit.originalPrice && (
                      <span style={{
                        ...s,
                        fontSize: '0.85rem',
                        color: '#444444',
                        textDecoration: 'line-through',
                        marginLeft: '8px',
                      }}>
                        {toolkit.originalPrice}
                      </span>
                    )}
                  </div>
                  {toolkit.gumroadId ? (
                    <a
                      href={toolkit.gumroadUrl}
                      data-gumroad-product-id={toolkit.gumroadId}
                      data-gumroad-overlay="true"
                      style={{
                        ...s,
                        padding: '8px 20px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        borderRadius: '6px',
                        display: 'inline-block',
                        cursor: 'pointer',
                        background: toolkit.price === '€0' ? '#4ECCA3' : '#5E6AD2',
                        color: toolkit.price === '€0' ? '#0f0f0f' : '#fff',
                        transition: 'opacity 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                    >
                      {toolkit.price === '€0' ? 'Get free →' : 'Buy now →'}
                    </a>
                  ) : (
                    <span style={{
                      ...s,
                      padding: '8px 20px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      borderRadius: '6px',
                      display: 'inline-block',
                      opacity: 0.35,
                      cursor: 'not-allowed',
                      background: '#5E6AD2',
                      color: '#fff',
                    }}>
                      Coming soon →
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── BOTTOM CTA ── */}
          <div style={{
            marginTop: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}>
            {/* Card 1 — Custom build */}
            <div style={{
              background: '#181818',
              border: '1px solid rgba(78,204,163,0.3)',
              borderRadius: '10px',
              padding: '2rem',
            }}>
              <p style={{
                ...s,
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#4ECCA3',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}>
                Need something custom?
              </p>
              <h3 style={{
                ...s,
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#F0F0F0',
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em',
              }}>
                Built for your exact workflow
              </h3>
              <p style={{
                ...s,
                fontSize: '0.875rem',
                color: '#888888',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}>
                Want an automation tailored to exactly how you work? We build custom systems for individuals and businesses alike.
              </p>
              <a
                href="mailto:info@clawmatic.eu"
                style={{
                  ...s,
                  display: 'inline-block',
                  padding: '10px 22px',
                  background: '#4ECCA3',
                  color: '#0f0f0f',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Get in touch →
              </a>
            </div>

            {/* Card 2 — Business CTA */}
            <div style={{
              background: '#181818',
              border: '1px solid rgba(94,106,210,0.3)',
              borderRadius: '10px',
              padding: '2rem',
            }}>
              <p style={{
                ...s,
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#5E6AD2',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}>
                Running a business?
              </p>
              <h3 style={{
                ...s,
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#F0F0F0',
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em',
              }}>
                We build it for you
              </h3>
              <p style={{
                ...s,
                fontSize: '0.875rem',
                color: '#888888',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}>
                Our agency service handles everything — scoping, building, and deploying custom AI automation for your team.
              </p>
              <Link
                href="/services"
                style={{
                  ...s,
                  display: 'inline-block',
                  padding: '10px 22px',
                  background: '#4ECCA3',
                  color: '#0f0f0f',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                See our services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
