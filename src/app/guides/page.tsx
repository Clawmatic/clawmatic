'use client';

import Link from 'next/link';


const guides = [
  {
    id: 1,
    category: 'SETUP',
    categoryColor: '#5E6AD2',
    title: 'Getting Started with OpenClaw',
    slug: 'getting-started',
    description: 'Install OpenClaw, configure your first agent, and say hello to your AI assistant. This guide covers everything from zero to running in under 15 minutes.',
    readTime: '8 min',
    difficulty: 'Beginner',
    difficultyColor: '#4ECCA3',
    tags: ['setup', 'cli', 'install'],
    updated: '2026-03-20',
  },
  {
    id: 2,
    category: 'INTEGRATIONS',
    categoryColor: '#4ECCA3',
    title: 'Connecting OpenClaw to WhatsApp',
    slug: 'connect-whatsapp',
    description: 'Bridge OpenClaw with WhatsApp so you can send messages, commands, and receive updates directly in your chat. Step-by-step with screenshots.',
    readTime: '12 min',
    difficulty: 'Intermediate',
    difficultyColor: '#FEBC2E',
    tags: ['whatsapp', 'bridge', 'messaging'],
    updated: '2026-03-18',
  },
  {
    id: 3,
    category: 'SKILLS',
    categoryColor: '#FF6B6B',
    title: 'Building Your First Custom Skill',
    slug: 'first-skill',
    description: 'Learn how OpenClaw skills work, write a simple one from scratch, and deploy it to your agent. Includes the full skill schema and examples.',
    readTime: '15 min',
    difficulty: 'Intermediate',
    difficultyColor: '#FEBC2E',
    tags: ['skills', 'code', 'custom'],
    updated: '2026-03-15',
  },
  {
    id: 4,
    category: 'SETUP',
    categoryColor: '#5E6AD2',
    title: 'OpenClaw Config Deep Dive',
    slug: 'config-deep-dive',
    description: 'Explore every configuration option in openclaw.config.json. Memory settings, model selection, context windows, and secret management explained.',
    readTime: '20 min',
    difficulty: 'Advanced',
    difficultyColor: '#FF6B6B',
    tags: ['config', 'advanced', 'json'],
    updated: '2026-03-10',
  },
  {
    id: 5,
    category: 'AUTOMATION',
    categoryColor: '#4ECCA3',
    title: 'Automating Daily Standups with OpenClaw',
    slug: 'automate-standups',
    description: 'Use OpenClaw to pull your commits, Jira tickets, and calendar — then auto-generate your standup message and send it to Slack. Zero effort.',
    readTime: '10 min',
    difficulty: 'Intermediate',
    difficultyColor: '#FEBC2E',
    tags: ['automation', 'slack', 'jira', 'workflow'],
    updated: '2026-03-08',
  },
  {
    id: 6,
    category: 'INTEGRATIONS',
    categoryColor: '#4ECCA3',
    title: 'Connecting Google Calendar & Email',
    slug: 'google-calendar-email',
    description: 'Hook OpenClaw into your Google workspace. Let it read your calendar, draft emails, and manage your schedule without leaving your terminal.',
    readTime: '14 min',
    difficulty: 'Intermediate',
    difficultyColor: '#FEBC2E',
    tags: ['google', 'calendar', 'email', 'oauth'],
    updated: '2026-03-05',
  },
  {
    id: 7,
    category: 'SKILLS',
    categoryColor: '#FF6B6B',
    title: 'The OpenClaw Skill Pack Format',
    slug: 'skill-pack-format',
    description: 'Full reference guide to the .ocskill pack format. How to bundle, version, and distribute skill packs — including signing and publishing to Gumroad.',
    readTime: '18 min',
    difficulty: 'Advanced',
    difficultyColor: '#FF6B6B',
    tags: ['skills', 'packaging', 'format'],
    updated: '2026-02-28',
  },
  {
    id: 8,
    category: 'AUTOMATION',
    categoryColor: '#4ECCA3',
    title: 'OpenClaw as a Personal Finance Assistant',
    slug: 'finance-assistant',
    description: 'Connect your bank exports, track spending, get weekly summaries, and ask questions about your finances in plain language.',
    readTime: '11 min',
    difficulty: 'Beginner',
    difficultyColor: '#4ECCA3',
    tags: ['finance', 'csv', 'automation'],
    updated: '2026-02-20',
  },
  {
    id: 9,
    category: 'SETUP',
    categoryColor: '#5E6AD2',
    title: 'Running OpenClaw on a VPS (Always-On)',
    slug: 'vps-setup',
    description: 'Deploy OpenClaw on a cheap VPS so it runs 24/7. Includes systemd service setup, reverse proxy, and securing the agent API endpoint.',
    readTime: '25 min',
    difficulty: 'Advanced',
    difficultyColor: '#FF6B6B',
    tags: ['vps', 'server', 'deploy', 'systemd'],
    updated: '2026-02-15',
  },
];

const categories = ['ALL', 'SETUP', 'INTEGRATIONS', 'SKILLS', 'AUTOMATION'];

export default function GuidesPage() {
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
            top: '-50%',
            left: '-5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(94, 106, 210, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
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
            ./guides
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
            Learn OpenClaw.
            <br />
            <span style={{ color: '#5E6AD2' }}>Actually master it.</span>
          </h1>
          <p
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '0.85rem',
              color: '#888888',
              maxWidth: '550px',
              lineHeight: '1.7',
            }}
          >
            No fluff, no filler. Just step-by-step guides written by people who
            actually use OpenClaw daily. From first install to advanced automation.
          </p>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              marginTop: '2rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              { n: guides.length, label: 'guides' },
              { n: '4', label: 'categories' },
              { n: 'Free', label: 'always' },
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

      {/* Category filter bar */}
      <section
        style={{
          borderBottom: '1px solid #1a1a1a',
          background: '#0a0a0a',
          padding: '0 1.5rem',
          overflowX: 'auto',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            gap: '0',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '0.75rem',
                color: cat === 'ALL' ? '#4ECCA3' : '#555555',
                background: 'none',
                border: 'none',
                borderBottom: cat === 'ALL' ? '2px solid #4ECCA3' : '2px solid transparent',
                padding: '1rem 1.25rem',
                cursor: 'pointer',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Guides grid */}
      <section style={{ padding: 'clamp(2rem, 4vw, 3rem) 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {guides.map((guide) => (
              <article
                key={guide.id}
                className="card-hover pixel-border"
                style={{
                  borderRadius: '4px',
                  padding: '1.75rem',
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
                {/* Category + difficulty */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    className="tag"
                    style={{
                      background: `${guide.categoryColor}15`,
                      color: guide.categoryColor,
                      border: `1px solid ${guide.categoryColor}35`,
                    }}
                  >
                    {guide.category}
                  </span>
                  <span
                    className="tag"
                    style={{
                      background: `${guide.difficultyColor}10`,
                      color: guide.difficultyColor,
                    }}
                  >
                    {guide.difficulty}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#E8E8E8',
                    lineHeight: 1.4,
                    marginBottom: '0.75rem',
                  }}
                >
                  {guide.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: '0.78rem',
                    color: '#666666',
                    lineHeight: '1.7',
                    marginBottom: '1.25rem',
                  }}
                >
                  {guide.description}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px',
                    marginBottom: '1.25rem',
                  }}
                >
                  {guide.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'Courier New, monospace',
                        fontSize: '0.65rem',
                        color: '#444444',
                        background: '#1a1a1a',
                        padding: '2px 6px',
                        borderRadius: '1px',
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid #1e1e1e',
                    paddingTop: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Courier New, monospace',
                      fontSize: '0.7rem',
                      color: '#444444',
                    }}
                  >
                    {guide.readTime} read
                  </span>
                  <Link
                    href={`/guides/${guide.slug}`}
                    style={{
                      fontFamily: 'Courier New, monospace',
                      fontSize: '0.75rem',
                      color: '#5E6AD2',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#7B85E0')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#5E6AD2')}
                  >
                    read_guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load more hint */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '3rem',
              padding: '2rem',
              border: '1px dashed #2a2a2a',
              borderRadius: '4px',
            }}
          >
            <p
              style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '0.8rem',
                color: '#555555',
                marginBottom: '0.5rem',
              }}
            >
              More guides coming soon. Got a topic?
            </p>
            <a
              href="mailto:hello@clawmatic.dev"
              style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '0.75rem',
                color: '#4ECCA3',
                textDecoration: 'none',
              }}
            >
              suggest_a_guide →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
