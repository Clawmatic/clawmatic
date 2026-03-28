'use client';

import Link from 'next/link';
import React from 'react';


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
    updated: '2026-03-28',
  },
  {
    id: 2,
    category: 'INTEGRATIONS',
    categoryColor: '#4ECCA3',
    title: 'Connecting OpenClaw to WhatsApp',
    slug: 'connect-whatsapp',
    description: 'Bridge OpenClaw with WhatsApp so you can send messages, commands, and receive updates directly in your chat. Step-by-step with QR code setup.',
    readTime: '12 min',
    difficulty: 'Intermediate',
    difficultyColor: '#FEBC2E',
    tags: ['whatsapp', 'bridge', 'messaging'],
    updated: '2026-03-28',
  },
  {
    id: 3,
    category: 'SKILLS',
    categoryColor: '#FF6B6B',
    title: 'Building Your First Custom Skill',
    slug: 'first-skill',
    description: 'Learn how OpenClaw skills work, write a simple one from scratch, and deploy it to your agent. Includes the full skill schema and a working example.',
    readTime: '15 min',
    difficulty: 'Intermediate',
    difficultyColor: '#FEBC2E',
    tags: ['skills', 'code', 'custom'],
    updated: '2026-03-28',
  },
  {
    id: 4,
    category: 'SETUP',
    categoryColor: '#5E6AD2',
    title: 'OpenClaw Config Deep Dive',
    slug: 'config-deep-dive',
    description: 'Explore every configuration option in config.json. Providers, model selection, memory, gateway, plugins, and security settings — all explained with examples.',
    readTime: '20 min',
    difficulty: 'Advanced',
    difficultyColor: '#FF6B6B',
    tags: ['config', 'advanced', 'json'],
    updated: '2026-03-28',
  },
  {
    id: 5,
    category: 'AUTOMATION',
    categoryColor: '#4ECCA3',
    title: 'Automating Daily Standups with OpenClaw',
    slug: 'automate-standups',
    description: 'Use OpenClaw cron jobs to auto-generate your standup every morning from git commits, calendar, and tasks — then send it to Slack or WhatsApp.',
    readTime: '10 min',
    difficulty: 'Intermediate',
    difficultyColor: '#FEBC2E',
    tags: ['automation', 'slack', 'workflow', 'cron'],
    updated: '2026-03-28',
  },
  {
    id: 6,
    category: 'INTEGRATIONS',
    categoryColor: '#4ECCA3',
    title: 'Connecting Google Calendar & Gmail',
    slug: 'google-calendar-email',
    description: 'Hook OpenClaw into your Google workspace. Read your calendar, draft emails, and manage your schedule — all from natural language.',
    readTime: '14 min',
    difficulty: 'Intermediate',
    difficultyColor: '#FEBC2E',
    tags: ['google', 'calendar', 'email', 'oauth'],
    updated: '2026-03-28',
  },
  {
    id: 7,
    category: 'SKILLS',
    categoryColor: '#FF6B6B',
    title: 'The OpenClaw Skill Pack Format',
    slug: 'skill-pack-format',
    description: 'Full reference for the AgentSkills format. How to structure, bundle, version, and distribute skill packs — including publishing to clawhub.ai and Gumroad.',
    readTime: '18 min',
    difficulty: 'Advanced',
    difficultyColor: '#FF6B6B',
    tags: ['skills', 'packaging', 'format', 'clawhub'],
    updated: '2026-03-28',
  },
  {
    id: 8,
    category: 'AUTOMATION',
    categoryColor: '#4ECCA3',
    title: 'OpenClaw as a Personal Finance Assistant',
    slug: 'finance-assistant',
    description: 'Export your bank CSV, ask OpenClaw to categorise and summarise your spending. Weekly budget alerts, all local — no APIs, no cloud.',
    readTime: '11 min',
    difficulty: 'Beginner',
    difficultyColor: '#4ECCA3',
    tags: ['finance', 'csv', 'automation', 'budgeting'],
    updated: '2026-03-28',
  },
  {
    id: 9,
    category: 'SETUP',
    categoryColor: '#5E6AD2',
    title: 'Running OpenClaw on a VPS (Always-On)',
    slug: 'vps-setup',
    description: 'Deploy OpenClaw on a cheap VPS so it runs 24/7. Covers systemd, nginx reverse proxy, SSL with Let\'s Encrypt, and remote access.',
    readTime: '25 min',
    difficulty: 'Advanced',
    difficultyColor: '#FF6B6B',
    tags: ['vps', 'server', 'deploy', 'systemd'],
    updated: '2026-03-28',
  },
];

const categories = ['ALL', 'SETUP', 'INTEGRATIONS', 'SKILLS', 'AUTOMATION'];

export default function GuidesPage() {
  const [activeCategory, setActiveCategory] = React.useState('ALL');
  const filteredGuides = activeCategory === 'ALL'
    ? guides
    : guides.filter((g) => g.category === activeCategory);

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
            Guides
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
              { n: 'More', label: 'coming soon' },
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
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'Courier New, monospace',
                fontSize: '0.75rem',
                color: cat === activeCategory ? '#4ECCA3' : '#555555',
                background: 'none',
                border: 'none',
                borderBottom: cat === activeCategory ? '2px solid #4ECCA3' : '2px solid transparent',
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
            {filteredGuides.map((guide) => (
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
                    Read guide →
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
              Suggest a guide →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
