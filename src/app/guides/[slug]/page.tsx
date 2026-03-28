import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { GuideContent } from '@/components/GuideContent';

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

[MAC]
- **Node.js 18+** installed — run \`brew install node\` or download from [nodejs.org](https://nodejs.org)
- macOS Terminal (built-in) or any terminal app
- An **Anthropic API key** — get one at [console.anthropic.com](https://console.anthropic.com)
[/MAC]
[WINDOWS]
- **Node.js 18+** installed — download from [nodejs.org](https://nodejs.org) (LTS recommended)
- **Windows Terminal** or PowerShell (run as Administrator for install)
- An **Anthropic API key** — get one at [console.anthropic.com](https://console.anthropic.com)
[/WINDOWS]
[LINUX]
- **Node.js 18+** installed — use your distro's package manager or [nodejs.org](https://nodejs.org)
- Any terminal emulator
- An **Anthropic API key** — get one at [console.anthropic.com](https://console.anthropic.com)
[/LINUX]

That's it. No Docker, no complex infra.

---

## Step 1 — Install OpenClaw

[MAC]
Open Terminal and run:

\`\`\`bash
npm install -g openclaw
\`\`\`
[/MAC]
[WINDOWS]
Open PowerShell (as Administrator) and run:

\`\`\`powershell
npm install -g openclaw
\`\`\`
[/WINDOWS]
[LINUX]
Open your terminal and run:

\`\`\`bash
npm install -g openclaw
\`\`\`

> If you get a permissions error, prefix with \`sudo\` or [configure npm for global installs without sudo](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).
[/LINUX]

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

[MAC]
Open \`~/.openclaw/config.json\` in any text editor and add your Anthropic key:

\`\`\`json
{
  "providers": {
    "anthropic": {
      "apiKey": "sk-ant-your-key-here"
    }
  }
}
\`\`\`

Or set it in your shell profile (\`~/.zshrc\` or \`~/.bash_profile\`):

\`\`\`bash
export ANTHROPIC_API_KEY=sk-ant-your-key-here
\`\`\`
[/MAC]
[WINDOWS]
Open \`%USERPROFILE%\\.openclaw\\config.json\` in Notepad and add your Anthropic key:

\`\`\`json
{
  "providers": {
    "anthropic": {
      "apiKey": "sk-ant-your-key-here"
    }
  }
}
\`\`\`

Or set it as a system environment variable via Settings → System → Environment Variables:

\`\`\`
ANTHROPIC_API_KEY = sk-ant-your-key-here
\`\`\`
[/WINDOWS]
[LINUX]
Open \`~/.openclaw/config.json\` in any text editor and add your Anthropic key:

\`\`\`json
{
  "providers": {
    "anthropic": {
      "apiKey": "sk-ant-your-key-here"
    }
  }
}
\`\`\`

Or export it in your shell config (\`~/.bashrc\` or \`~/.zshrc\`):

\`\`\`bash
export ANTHROPIC_API_KEY=sk-ant-your-key-here
\`\`\`
[/LINUX]

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

It should pull live weather data and answer in plain language. Browse [clawhub.ai](https://clawhub.ai) for the full skill catalogue.

---

## What's next?

Now that your agent is running, here's what to explore:

- **Add more skills** — browse [clawhub.ai](https://clawhub.ai) for the full catalogue
- **Customize your agent** — edit \`SOUL.md\` to change its personality and behaviour
- **Connect messaging** — link WhatsApp or Telegram so you can chat from your phone
- **Grab the Starter Kit** — 10 essential skills pre-configured and ready to drop in

---

## Troubleshooting

[MAC]
**Agent won't start?**
Check your Node.js version: \`node --version\` — needs to be 18 or above.

**API key error?**
Make sure there are no spaces or quotes around the key in your config or \`.zshrc\`.

**Permission denied on npm install?**
Use \`sudo npm install -g openclaw\` or configure npm's global prefix.
[/MAC]
[WINDOWS]
**Agent won't start?**
Check your Node.js version: \`node --version\` in PowerShell — needs to be 18 or above.

**API key not found?**
Make sure you opened a new terminal after setting the environment variable.

**npm not recognised?**
Ensure Node.js was added to PATH during install. Re-run the Node.js installer and check "Add to PATH".
[/WINDOWS]
[LINUX]
**Agent won't start?**
Check your Node.js version: \`node --version\` — needs to be 18 or above.

**API key error?**
Run \`source ~/.bashrc\` (or \`~/.zshrc\`) after exporting the key, or open a fresh terminal.

**Permission error on npm install?**
Configure a user-level npm prefix instead of using sudo — see [npm docs](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).
[/LINUX]

---

Still stuck? The [OpenClaw docs](https://docs.openclaw.ai) have detailed troubleshooting, or join the [community Discord](https://discord.com/invite/clawd).`,
  },
};

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
          <GuideContent content={guide.content} skillsHref="/skills" />
        </div>
      </section>
    </div>
  );
}
