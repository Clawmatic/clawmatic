'use client';

import Link from 'next/link';


// Only live guides are shown publicly. Add guides here once their content is ready.
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
              { n: guides.length, label: 'guide' },
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
