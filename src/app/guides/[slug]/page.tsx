import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

// ─── Guide content ────────────────────────────────────────────────────────────

const guides: Record<string, {
  title: string;
  category: string;
  categoryColor: string;
  difficulty: string;
  difficultyColor: string;
  readTime: string;
  updated: string;
  tags: string[];
  content: string;
}> = {
  'getting-started': {
    title: 'Getting Started with OpenClaw',
    category: 'SETUP',
    categoryColor: '#5E6AD2',
    difficulty: 'Beginner',
    difficultyColor: '#4ECCA3',
    readTime: '8 min',
    updated: '2026-03-28',
    tags: ['setup', 'cli', 'install'],
    content: `## What is OpenClaw?

OpenClaw is a personal AI assistant platform that runs on your own machine — or a server you control. Unlike cloud-based assistants, OpenClaw is yours: your data, your setup, your rules.

It works by connecting a language model (like Claude) to a set of **skills** — small modules that give your agent new abilities. Skills can check your email, control your lights, send WhatsApp messages, browse the web, manage your calendar, and much more.

This guide gets you from zero to a running agent in under 15 minutes.

---

## Prerequisites

Before you start, make sure you have:

- **Node.js 18+** installed ([nodejs.org](https://nodejs.org))
- A terminal (macOS Terminal, Windows Terminal, or any Linux shell)
- An **Anthropic API key** — get one at [console.anthropic.com](https://console.anthropic.com)

That's it. No Docker, no complex infra.

---

## Step 1 — Install OpenClaw

Open your terminal and run:

\`\`\`bash
npm install -g openclaw
\`\`\`

Verify the install:

\`\`\`bash
openclaw --version
\`\`\`

You should see something like \`openclaw v1.x.x\`.

---

## Step 2 — Create your workspace

A workspace is just a folder where OpenClaw stores your config, memory, and skills.

\`\`\`bash
mkdir ~/my-agent
cd ~/my-agent
openclaw init
\`\`\`

This creates a few files:

\`\`\`
my-agent/
├── SOUL.md       ← your agent's personality
├── MEMORY.md     ← long-term memory
├── USER.md       ← info about you
└── TOOLS.md      ← local notes & device config
\`\`\`

---

## Step 3 — Add your API key

Open \`~/.openclaw/config.json\` (created on first run) and add your Anthropic key:

\`\`\`json
{
  "providers": {
    "anthropic": {
      "apiKey": "sk-ant-your-key-here"
    }
  }
}
\`\`\`

Or set it as an environment variable:

\`\`\`bash
export ANTHROPIC_API_KEY=sk-ant-your-key-here
\`\`\`

---

## Step 4 — Start your agent

\`\`\`bash
openclaw start
\`\`\`

Your agent is now running. Open your browser and go to:

\`\`\`
http://localhost:3000
\`\`\`

You'll see the OpenClaw web chat interface. Try saying:

> Hey, who are you?

Your agent should introduce itself. If it does — you're done.

---

## Step 5 — Install your first skill

Skills are what make OpenClaw useful. Let's install the weather skill as a quick test:

\`\`\`bash
clawhub install weather
\`\`\`

Restart your agent, then ask:

> What's the weather in Brussels today?

It should pull live weather data and answer in plain language.

---

## What's next?

Now that your agent is running, here's what to explore:

- **Add more skills** — browse [clawhub.ai](https://clawhub.ai) for the full catalogue
- **Customize your agent** — edit \`SOUL.md\` to change its personality and behaviour
- **Connect messaging** — link WhatsApp or Telegram so you can chat from your phone
- **Grab the Starter Kit** — 10 essential skills pre-configured and ready to drop in

---

## Troubleshooting

**Agent won't start?**
Check your Node.js version: \`node --version\` — needs to be 18 or above.

**API key error?**
Make sure there are no spaces or quotes around the key in your config file.

**Skill not working after install?**
Always restart the agent after installing new skills: \`openclaw restart\`

---

Still stuck? The [OpenClaw docs](https://docs.openclaw.ai) have detailed troubleshooting, or join the [community Discord](https://discord.com/invite/clawd).`,
  },
};

// ─── Inline text formatter ────────────────────────────────────────────────────

function formatInline(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong style="color:#E8E8E8;">$1</strong>')
    .replace(/`([^`]+)`/g, '<code style="background:#1a1a1a;color:#4ECCA3;padding:2px 6px;border-radius:2px;font-size:0.78rem;font-family:Courier New,monospace;">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#5E6AD2;text-decoration:none;" target="_blank" rel="noopener noreferrer">$1</a>');
}

// ─── Content renderer ─────────────────────────────────────────────────────────

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith('```')) {
      const lang = line.replace('```', '').trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && lines[i] !== '```') {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <div key={i} style={{ margin: '1.25rem 0' }}>
          {lang && (
            <div style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '0.65rem',
              color: '#555555',
              background: '#111111',
              padding: '4px 12px',
              borderBottom: '1px solid #1e1e1e',
              borderRadius: '4px 4px 0 0',
            }}>
              {lang}
            </div>
          )}
          <pre style={{
            background: '#111111',
            border: '1px solid #1e1e1e',
            borderRadius: lang ? '0 0 4px 4px' : '4px',
            padding: '1rem 1.25rem',
            overflowX: 'auto',
            fontFamily: 'Courier New, monospace',
            fontSize: '0.78rem',
            color: '#4ECCA3',
            lineHeight: '1.7',
            margin: 0,
          }}>
            {codeLines.join('\n')}
          </pre>
        </div>
      );
      i++;
      continue;
    }

    // H2
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} style={{
          fontFamily: 'Courier New, monospace',
          fontSize: '1.1rem',
          fontWeight: '700',
          color: '#5E6AD2',
          marginTop: '2.5rem',
          marginBottom: '1rem',
          paddingBottom: '0.5rem',
          borderBottom: '1px solid #1e1e1e',
        }}>
          {line.replace('## ', '')}
        </h2>
      );
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} style={{
          borderLeft: '3px solid #4ECCA3',
          paddingLeft: '1rem',
          margin: '1rem 0',
        }}>
          <span
            style={{ fontFamily: 'Courier New, monospace', fontSize: '0.85rem', color: '#888888', fontStyle: 'italic' }}
            dangerouslySetInnerHTML={{ __html: formatInline(line.replace('> ', '')) }}
          />
        </blockquote>
      );
      i++;
      continue;
    }

    // List item
    if (line.startsWith('- ')) {
      elements.push(
        <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
          <span style={{ color: '#4ECCA3', fontSize: '0.7rem', marginTop: '4px', flexShrink: 0 }}>✓</span>
          <span
            style={{ fontFamily: 'Courier New, monospace', fontSize: '0.82rem', color: '#888888', lineHeight: '1.7' }}
            dangerouslySetInnerHTML={{ __html: formatInline(line.replace('- ', '')) }}
          />
        </div>
      );
      i++;
      continue;
    }

    // HR
    if (line === '---') {
      elements.push(<hr key={i} style={{ border: 'none', borderTop: '1px solid #1e1e1e', margin: '2rem 0' }} />);
      i++;
      continue;
    }

    // Bold standalone line (e.g. "**Agent won't start?**")
    if (line.startsWith('**') && line.endsWith('**') && !line.slice(2, -2).includes('**')) {
      elements.push(
        <p key={i} style={{ fontFamily: 'Courier New, monospace', fontSize: '0.82rem', fontWeight: '700', color: '#E8E8E8', marginTop: '1rem', marginBottom: '0.25rem' }}>
          {line.slice(2, -2)}
        </p>
      );
      i++;
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      elements.push(<div key={i} style={{ height: '0.4rem' }} />);
      i++;
      continue;
    }

    // Default paragraph
    elements.push(
      <p key={i}
        style={{ fontFamily: 'Courier New, monospace', fontSize: '0.82rem', color: '#888888', lineHeight: '1.8', marginBottom: '0.5rem' }}
        dangerouslySetInnerHTML={{ __html: formatInline(line) }}
      />
    );
    i++;
  }

  return elements;
}

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides[slug];
  if (!guide) return { title: 'Guide not found' };
  return {
    title: `${guide.title} — ClawMatic`,
    description: `${guide.readTime} read · ${guide.difficulty} · ${guide.tags.join(', ')}`,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides[slug];
  if (!guide) notFound();

  return (
    <div style={{ background: '#0F0F0F', minHeight: '100vh' }}>
      {/* Header */}
      <section
        className="grid-bg"
        style={{
          padding: 'clamp(3rem, 6vw, 4rem) 1.5rem 2.5rem',
          borderBottom: '1px solid #1e1e1e',
        }}
      >
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <Link
            href="/guides"
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '0.7rem',
              color: '#555555',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              display: 'inline-block',
              marginBottom: '1.5rem',
            }}
          >
            ← back_to_guides
          </Link>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span className="tag" style={{ background: `${guide.categoryColor}15`, color: guide.categoryColor, border: `1px solid ${guide.categoryColor}35` }}>
              {guide.category}
            </span>
            <span className="tag" style={{ background: `${guide.difficultyColor}10`, color: guide.difficultyColor }}>
              {guide.difficulty}
            </span>
            {guide.tags.map((t) => (
              <span key={t} style={{ fontFamily: 'Courier New, monospace', fontSize: '0.65rem', color: '#444444', background: '#1a1a1a', padding: '2px 6px', borderRadius: '1px' }}>
                #{t}
              </span>
            ))}
          </div>

          <h1 style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: '900',
            color: '#E8E8E8',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            {guide.title}
          </h1>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'Courier New, monospace', fontSize: '0.7rem', color: '#555555' }}>⏱ {guide.readTime} read</span>
            <span style={{ fontFamily: 'Courier New, monospace', fontSize: '0.7rem', color: '#555555' }}>📅 Updated {guide.updated}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: 'clamp(2rem, 4vw, 3rem) 1.5rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {renderContent(guide.content)}

          {/* CTA */}
          <div
            className="pixel-border-purple"
            style={{ marginTop: '3rem', padding: '2rem', borderRadius: '4px', background: 'rgba(78, 204, 163, 0.04)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
          >
            <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.7rem', color: '#4ECCA3', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              // skip_the_setup
            </p>
            <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.9rem', fontWeight: '700', color: '#E8E8E8' }}>
              Want 10 skills pre-configured and ready to go?
            </p>
            <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.78rem', color: '#666666', lineHeight: '1.7' }}>
              The OpenClaw Starter Kit includes everything from this guide plus 10 essential skills,
              example prompts, and an install script. One command and you&apos;re done.
            </p>
            <Link href="/skills" className="btn-green" style={{ display: 'inline-block', padding: '10px 24px', fontSize: '0.8rem', textDecoration: 'none', borderRadius: '2px', alignSelf: 'flex-start' }}>
              get_starter_kit →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
