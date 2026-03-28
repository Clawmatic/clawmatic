import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skill Packs',
  description:
    'Ready-to-install OpenClaw skill packs. Extend your AI agent with WhatsApp, Google Calendar, GitHub, smart home, and more. From €5, one-time payment.',
  openGraph: {
    title: 'OpenClaw Skill Packs — ClawMatic',
    description: 'Pre-built skill bundles for OpenClaw AI. Drop in and instantly unlock new superpowers for your agent.',
  },
};

const skillPacks = [
  {
    id: 1,
    name: 'OpenClaw Starter Kit',
    slug: 'openclaw-starter-kit',
    emoji: '🚀',
    badge: 'NEW',
    badgeColor: '#4ECCA3',
    price: '€9',
    originalPrice: null,
    description: 'Everything you need to hit the ground running with OpenClaw. 10 essential skills covering messaging, productivity, search, and automation — pre-configured and ready to drop in.',
    features: [
      '10 curated essential skills',
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
    slug: 'productivity-os',
    emoji: '🚀',
    badge: 'BESTSELLER',
    badgeColor: '#5E6AD2',
    price: '€10',
    originalPrice: '€15',
    description: 'The ultimate productivity bundle. Google Calendar, Gmail, Notion, Todoist — all wired into OpenClaw. Automate your whole workday.',
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
    slug: 'dev-toolkit',
    emoji: '🛠️',
    badge: 'COMING SOON',
    badgeColor: '#FF6B6B',
    price: '€8',
    originalPrice: null,
    description: 'Skills for developers. Pull GitHub issues, write commit messages, explain code, generate PRs, search docs — everything a dev needs inside OpenClaw.',
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
    slug: 'finance-tracker',
    emoji: '💰',
    badge: 'COMING SOON',
    badgeColor: '#4ECCA3',
    price: '€0',
    originalPrice: null,
    description: 'Parse bank CSV exports, categorize transactions, track budgets, and ask questions about your money — all locally, all private.',
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
    slug: 'news-research',
    emoji: '📰',
    badge: 'COMING SOON',
    badgeColor: '#888888',
    price: '€5',
    originalPrice: null,
    description: 'Get AI-curated news digests, research summaries, and topic briefings. Connect RSS feeds, HN, Reddit, and arXiv into one smart daily brief.',
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
    slug: 'smart-home',
    emoji: '🏠',
    badge: 'COMING SOON',
    badgeColor: '#FEBC2E',
    price: '€6',
    originalPrice: null,
    description: 'Control Home Assistant, Philips Hue, and MQTT devices with natural language. "Set study lights to focus mode" just works.',
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
    slug: 'health-fitness',
    emoji: '💪',
    badge: 'COMING SOON',
    badgeColor: '#FF6B6B',
    price: '€5',
    originalPrice: null,
    description: 'Log workouts, track habits, analyze sleep data, and get personalized fitness summaries. Works with Apple Health CSV exports.',
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
    slug: 'belgian-starter',
    emoji: '🇧🇪',
    badge: 'COMING SOON',
    badgeColor: '#5E6AD2',
    price: '€0',
    originalPrice: null,
    description: 'A free starter pack built with Belgian taste. Includes VAT calculator, Belgian public transit lookup, and more local integrations.',
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

export default function SkillsPage() {
  const freeCount = skillPacks.filter((s) => s.price === '€0').length;
  const totalSkills = skillPacks.reduce((acc, s) => acc + s.skills, 0);

  return (
    <div style={{ background: '#0F0F0F', minHeight: '100vh' }}>
      {/* Header */}
      <section
        className="grid-bg"
        style={{
          padding: 'clamp(3rem, 6vw, 5rem) 1.5rem 2rem',
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
            background: 'radial-gradient(circle, rgba(78, 204, 163, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <p
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '0.7rem',
              color: '#4ECCA3',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            ./skill_packs
          </p>
          <h1
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '900',
              color: '#E8E8E8',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            Power up your
            <br />
            <span style={{ color: '#4ECCA3' }}>OpenClaw agent.</span>
          </h1>
          <p
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '0.85rem',
              color: '#888888',
              maxWidth: '550px',
              lineHeight: '1.7',
              marginBottom: '2rem',
            }}
          >
            Skill packs are ready-to-install bundles that extend what OpenClaw can do.
            Drop them in, restart your agent, and instantly unlock new superpowers.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { n: skillPacks.length, label: 'packs' },
              { n: totalSkills, label: 'total skills' },
              { n: freeCount, label: 'free packs' },
              { n: '€0–€10', label: 'price range' },
            ].map((s) => (
              <div key={s.label}>
                <span
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#4ECCA3',
                  }}
                >
                  {s.n}
                </span>
                <span
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.75rem',
                    color: '#555555',
                    marginLeft: '6px',
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section
        style={{
          background: 'rgba(78, 204, 163, 0.06)',
          borderBottom: '1px solid rgba(78, 204, 163, 0.15)',
          padding: '12px 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span style={{ color: '#4ECCA3', fontSize: '0.85rem' }}>ℹ️</span>
          <p
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '0.75rem',
              color: '#888888',
            }}
          >
            Skill packs are sold via{' '}
            <span style={{ color: '#4ECCA3' }}>Gumroad</span>. After purchase, you
            get a .ocskill bundle to drop into your OpenClaw config folder. One-time
            payment, lifetime updates.
          </p>
        </div>
      </section>

      {/* Skills grid */}
      <section style={{ padding: 'clamp(2rem, 4vw, 3rem) 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {skillPacks.map((pack) => (
              <div
                key={pack.id}
                className="card-hover pixel-border"
                style={{
                  borderRadius: '4px',
                  padding: '1.75rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Header */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span
                      style={{
                        fontSize: '2rem',
                        lineHeight: 1,
                        background: '#1a1a1a',
                        padding: '8px',
                        borderRadius: '4px',
                        display: 'block',
                      }}
                    >
                      {pack.emoji}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                    {pack.badge && (
                      <span
                        className="tag"
                        style={{
                          background: `${pack.badgeColor}15`,
                          color: pack.badgeColor,
                          border: `1px solid ${pack.badgeColor}35`,
                          fontWeight: 'bold',
                        }}
                      >
                        {pack.badge}
                      </span>
                    )}
                    <span
                      className="tag"
                      style={{
                        background: `${pack.categoryColor}10`,
                        color: pack.categoryColor,
                        border: `1px solid ${pack.categoryColor}25`,
                      }}
                    >
                      {pack.category}
                    </span>
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#E8E8E8',
                    marginBottom: '0.75rem',
                  }}
                >
                  {pack.name}
                </h3>

                <p
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.78rem',
                    color: '#666666',
                    lineHeight: '1.7',
                    marginBottom: '1.25rem',
                    flex: 1,
                  }}
                >
                  {pack.description}
                </p>

                {/* Feature list */}
                <div style={{ marginBottom: '1.25rem' }}>
                  {pack.features.slice(0, 4).map((f) => (
                    <div
                      key={f}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginBottom: '4px',
                      }}
                    >
                      <span style={{ color: '#4ECCA3', fontSize: '0.65rem' }}>✓</span>
                      <span
                        style={{
                          fontFamily: 'Courier New, monospace',
                          fontSize: '0.72rem',
                          color: '#666666',
                        }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                  {pack.features.length > 4 && (
                    <div
                      style={{
                        fontFamily: 'Courier New, monospace',
                        fontSize: '0.68rem',
                        color: '#444444',
                        marginTop: '4px',
                      }}
                    >
                      +{pack.features.length - 4} more skills
                    </div>
                  )}
                </div>

                {/* Meta row */}
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    marginBottom: '1.25rem',
                    borderTop: '1px solid #1e1e1e',
                    paddingTop: '1rem',
                  }}
                >
                  {[
                    { label: pack.skills + ' skills', icon: '⚡' },
                    { label: 'v' + pack.version, icon: '🔖' },
                    { label: pack.downloads, icon: '⬇️' },
                  ].map((m) => (
                    <span
                      key={m.label}
                      style={{
                        fontFamily: 'Courier New, monospace',
                        fontSize: '0.65rem',
                        color: '#555555',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <span>{m.icon}</span> {m.label}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: 'Courier New, monospace',
                        fontSize: '1.4rem',
                        fontWeight: '900',
                        color: pack.price === '€0' ? '#4ECCA3' : '#E8E8E8',
                      }}
                    >
                      {pack.price}
                    </span>
                    {pack.originalPrice && (
                      <span
                        style={{
                          fontFamily: 'Courier New, monospace',
                          fontSize: '0.8rem',
                          color: '#444444',
                          textDecoration: 'line-through',
                          marginLeft: '8px',
                        }}
                      >
                        {pack.originalPrice}
                      </span>
                    )}
                  </div>
                  {pack.gumroadId ? (
                    <a
                      href={pack.gumroadUrl}
                      data-gumroad-product-id={pack.gumroadId}
                      data-gumroad-overlay="true"
                      className={pack.price === '€0' ? 'btn-green' : 'btn-primary'}
                      style={{
                        padding: '8px 20px',
                        fontSize: '0.78rem',
                        textDecoration: 'none',
                        borderRadius: '2px',
                        display: 'inline-block',
                        cursor: 'pointer',
                      }}
                    >
                      {pack.price === '€0' ? 'get_free →' : 'buy_now →'}
                    </a>
                  ) : (
                    <span
                      className="btn-primary"
                      style={{
                        padding: '8px 20px',
                        fontSize: '0.78rem',
                        borderRadius: '2px',
                        display: 'inline-block',
                        opacity: 0.4,
                        cursor: 'not-allowed',
                      }}
                    >
                      coming_soon →
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Custom Pack CTA */}
          <div
            className="pixel-border"
            style={{
              marginTop: '2rem',
              padding: '2.5rem',
              borderRadius: '4px',
              background: 'rgba(78, 204, 163, 0.03)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div>
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
                // custom_build
              </p>
              <h3
                style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: '1.5rem',
                  fontWeight: '900',
                  color: '#E8E8E8',
                  marginBottom: '0.75rem',
                }}
              >
                Need something{' '}
                <span style={{ color: '#4ECCA3' }}>tailor-made?</span>
              </h3>
              <p
                style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.8rem',
                  color: '#888888',
                  lineHeight: '1.7',
                }}
              >
                Got a specific workflow, tool, or integration in mind? I build fully custom
                skill packs based on your exact requirements. Tell me what you need and
                I&apos;ll put it together for you — no one-size-fits-all compromises.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                '⚡ Built around your exact workflow',
                '🔧 Any integration you need',
                '📦 Delivered as a ready-to-install pack',
                '💬 Priced based on scope',
              ].map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'Courier New, monospace',
                      fontSize: '0.75rem',
                      color: '#888888',
                    }}
                  >
                    {f}
                  </span>
                </div>
              ))}
              <a
                href="mailto:hello@clawmatic.eu"
                className="btn-green"
                style={{
                  padding: '12px 28px',
                  fontSize: '0.85rem',
                  borderRadius: '2px',
                  display: 'inline-block',
                  textAlign: 'center',
                  textDecoration: 'none',
                  marginTop: '0.5rem',
                }}
              >
                request_custom_pack →
              </a>
              <p
                style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.65rem',
                  color: '#444444',
                }}
              >
                Drop me an email and describe what you need.
              </p>
            </div>
          </div>

          {/* Bundle CTA */}
          <div
            className="pixel-border-purple"
            style={{
              marginTop: '3rem',
              padding: '2.5rem',
              borderRadius: '4px',
              background: 'rgba(94, 106, 210, 0.05)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.7rem',
                  color: '#5E6AD2',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}
              >
                // bundle_deal
              </p>
              <h3
                style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: '1.5rem',
                  fontWeight: '900',
                  color: '#E8E8E8',
                  marginBottom: '0.75rem',
                }}
              >
                ClawMatic{' '}
                <span style={{ color: '#5E6AD2' }}>All-Access</span>
              </h3>
              <p
                style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.8rem',
                  color: '#888888',
                  lineHeight: '1.7',
                }}
              >
                Get all premium skill packs in one bundle.
                Save 40% vs buying individually. Includes
                all future updates and new packs.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <span
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '2.5rem',
                    fontWeight: '900',
                    color: '#5E6AD2',
                  }}
                >
                  €25
                </span>
                <span
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '1rem',
                    color: '#444444',
                    textDecoration: 'line-through',
                    marginLeft: '10px',
                  }}
                >
                  €41
                </span>
              </div>
              <span
                className="btn-primary"
                style={{
                  padding: '12px 28px',
                  fontSize: '0.85rem',
                  borderRadius: '2px',
                  display: 'inline-block',
                  textAlign: 'center',
                  opacity: 0.4,
                  cursor: 'not-allowed',
                }}
              >
                coming_soon →
              </span>
              <p
                style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.65rem',
                  color: '#444444',
                }}
              >
                One-time payment · Lifetime updates · Instant download
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
