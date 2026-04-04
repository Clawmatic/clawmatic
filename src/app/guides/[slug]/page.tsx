import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import EmailCapture from '@/components/EmailCapture';

const BASE_URL = 'https://clawmatic.eu';

// ─── Guide data ───────────────────────────────────────────────────────────────

interface GuideSection {
  id: string;
  heading: string;
  body: string; // HTML allowed
}

interface Guide {
  title: string;
  description: string;
  tags: string[];
  readTime: string;
  updated: string;
  sections: GuideSection[];
  related: string[];
}

const guides: Record<string, Guide> = {
  'how-to-install-openclaw': {
    title: 'How to install OpenClaw AI — complete setup guide',
    description: 'A full walkthrough of installing OpenClaw on Windows, macOS, and Linux. From zero to a working AI assistant in under 15 minutes.',
    tags: ['Getting started', 'Setup'],
    readTime: '10 min',
    updated: '2026-04-01',
    related: ['connect-openclaw-to-openrouter', 'openclaw-for-beginners-first-automation'],
    sections: [
      {
        id: 'what-is-openclaw',
        heading: 'What is OpenClaw?',
        body: `<p>OpenClaw is a local AI assistant platform that runs on your own machine — or a server you control. Unlike cloud-based AI tools, everything stays under your control: your data, your setup, your rules.</p>
<p>It works by connecting a language model (via OpenRouter or a direct API key) to a set of <strong>skills</strong> — small modules that give your assistant new abilities like checking email, browsing the web, or managing your calendar.</p>`,
      },
      {
        id: 'prerequisites',
        heading: 'Prerequisites',
        body: `<p>Before you install OpenClaw, make sure you have:</p>
<ul>
  <li><strong>Node.js 18+</strong> — download from <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">nodejs.org</a></li>
  <li>A terminal / command prompt</li>
  <li>An <strong>API key</strong> — from Anthropic, OpenAI, or an OpenRouter account</li>
</ul>
<p>That's it. No Docker, no complex infrastructure needed.</p>`,
      },
      {
        id: 'installation',
        heading: 'Step 1 — Install OpenClaw',
        body: `<p>Open your terminal and run:</p>
<pre><code>npm install -g openclaw</code></pre>
<p>Once installed, verify it worked:</p>
<pre><code>openclaw --version</code></pre>`,
      },
      {
        id: 'configure',
        heading: 'Step 2 — Configure your API key',
        body: `<p>Run the setup wizard:</p>
<pre><code>openclaw setup</code></pre>
<p>You'll be asked for your API provider and key. OpenClaw stores this securely in your local config file.</p>`,
      },
      {
        id: 'start',
        heading: 'Step 3 — Start OpenClaw',
        body: `<p>Launch your assistant:</p>
<pre><code>openclaw start</code></pre>
<p>A local web interface will open at <code>http://localhost:3000</code>. From here you can chat with your AI, install skills, and manage your setup.</p>`,
      },
      {
        id: 'next-steps',
        heading: 'Next steps',
        body: `<p>Now that OpenClaw is running, here's what to do next:</p>
<ul>
  <li>Connect OpenClaw to OpenRouter for access to all major models</li>
  <li>Install your first skill pack from the toolkit</li>
  <li>Try your first automation using the beginner guide</li>
</ul>`,
      },
    ],
  },

  'which-ai-model-openclaw-2026': {
    title: 'Which AI model should you use on OpenClaw? (2026 guide)',
    description: "There are dozens of models on OpenRouter. This guide cuts through the noise and tells you exactly which model fits your use case — with benchmarks and real examples.",
    tags: ['Models', 'Getting started'],
    readTime: '8 min',
    updated: '2026-04-01',
    related: ['connect-openclaw-to-openrouter', 'top-5-openclaw-skills-productivity'],
    sections: [
      {
        id: 'overview',
        heading: 'The model problem',
        body: `<p>OpenRouter gives you access to 50+ AI models. Claude 3.7, GPT-4o, Gemini 2.0, Mistral, Llama — all available with a single API key. But choosing the wrong model wastes money and gets worse results.</p>
<p>This guide gives you a simple decision framework based on what you're actually trying to do.</p>`,
      },
      {
        id: 'writing',
        heading: 'For writing & copywriting',
        body: `<p><strong>Best pick:</strong> Claude Sonnet 4.6 or GPT-4o</p>
<p>Both excel at long-form content, tone matching, and creative writing. Claude tends to produce more nuanced prose; GPT-4o is faster for short-form content. Use Claude for anything requiring depth.</p>`,
      },
      {
        id: 'reasoning',
        heading: 'For research & analysis',
        body: `<p><strong>Best pick:</strong> Claude Opus 4.6 or o3</p>
<p>Complex reasoning, multi-step analysis, and research tasks benefit from the most powerful models. Cost is higher but worth it for tasks where accuracy matters.</p>`,
      },
      {
        id: 'support',
        heading: 'For customer support & Q&A',
        body: `<p><strong>Best pick:</strong> Claude Haiku 4.5 or Gemini Flash</p>
<p>For high-volume support bots, speed and cost matter more than raw intelligence. Haiku and Gemini Flash are fast, cheap, and surprisingly capable for structured Q&A.</p>`,
      },
      {
        id: 'everyday',
        heading: 'For everyday tasks',
        body: `<p><strong>Best pick:</strong> Claude Sonnet 4.6</p>
<p>The best all-rounder. Fast, capable, and reasonably priced. If you're not sure what to pick for a general assistant, start here.</p>`,
      },
      {
        id: 'recommendation',
        heading: 'Our recommendation',
        body: `<p>Don't know your use case yet? Check out our <a href="/quiz">AI Stack Recommender quiz</a> — it'll suggest the right package based on your answers in under 2 minutes.</p>`,
      },
    ],
  },

  'top-5-openclaw-skills-productivity': {
    title: 'Top 5 OpenClaw skills for productivity',
    description: "The five skills that will save you the most time, ranked. Each one explained with setup instructions and example prompts.",
    tags: ['Skills', 'Productivity'],
    readTime: '6 min',
    updated: '2026-04-01',
    related: ['openclaw-for-beginners-first-automation', 'how-to-install-openclaw'],
    sections: [
      {
        id: 'intro',
        heading: 'Why skills matter',
        body: `<p>Skills are what make OpenClaw actually useful. Without skills, you just have a chatbot. With the right skills installed, you have an AI that can <em>do things</em> — schedule meetings, draft emails, research topics, and more.</p>
<p>Here are the five that will make the biggest difference to your productivity.</p>`,
      },
      {
        id: 'email',
        heading: '1. Email management skill',
        body: `<p>Connect your Gmail or Outlook inbox. Your AI can read, draft, and send emails — and summarise your inbox each morning. The time savings here are enormous for most people.</p>
<p><strong>Example prompt:</strong> "Summarise any unread emails from the last 24 hours and draft replies to anything urgent."</p>`,
      },
      {
        id: 'calendar',
        heading: '2. Calendar & scheduling skill',
        body: `<p>Read and write to your Google Calendar. Ask your AI to find free slots, schedule meetings, or give you a daily briefing at 8am.</p>
<p><strong>Example prompt:</strong> "What's on my calendar today? Block 2 hours of deep work time tomorrow morning."</p>`,
      },
      {
        id: 'web-search',
        heading: '3. Web search & research skill',
        body: `<p>Give your assistant the ability to search the web and summarise results. Useful for research, competitive analysis, or just staying informed.</p>
<p><strong>Example prompt:</strong> "What are the latest developments in AI agents this week? Give me a 3-bullet summary."</p>`,
      },
      {
        id: 'notes',
        heading: '4. Notes & knowledge base skill',
        body: `<p>Connect to Notion, Obsidian, or a local folder. Your AI can search your notes, create new pages, and surface relevant information when you need it.</p>
<p><strong>Example prompt:</strong> "Find my notes on the Q1 product launch and create a summary document."</p>`,
      },
      {
        id: 'tasks',
        heading: '5. Task management skill',
        body: `<p>Integrate with Todoist, Linear, or a simple local task list. Capture tasks from conversation, prioritise them, and mark them complete — all without leaving your AI chat.</p>
<p><strong>Example prompt:</strong> "Add 'review the analytics report' to my task list, priority high."</p>`,
      },
      {
        id: 'packs',
        heading: 'Get all five in one pack',
        body: `<p>All of these skills are included in our <a href="/toolkit">Productivity Pack</a> — pre-configured and documented, ready to drop into OpenClaw.</p>`,
      },
    ],
  },

  'connect-openclaw-to-openrouter': {
    title: 'How to connect OpenClaw to OpenRouter',
    description: 'OpenRouter gives you access to every major AI model in one place. This guide shows you how to link it to OpenClaw so you can swap models instantly.',
    tags: ['Setup', 'Models'],
    readTime: '7 min',
    updated: '2026-04-01',
    related: ['how-to-install-openclaw', 'which-ai-model-openclaw-2026'],
    sections: [
      {
        id: 'what-is-openrouter',
        heading: 'What is OpenRouter?',
        body: `<p>OpenRouter is a unified API that gives you access to 50+ AI models — Claude, GPT-4o, Gemini, Mistral, Llama, and more — all with a single API key and a single credit balance.</p>
<p>Instead of paying separately for Claude and GPT-4o and Gemini, you top up one account and use whichever model you want, whenever you want.</p>`,
      },
      {
        id: 'create-account',
        heading: 'Step 1 — Create an OpenRouter account',
        body: `<p>Go to <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer">openrouter.ai</a> and sign up for a free account. Add some credit — even $5 will last a long time for personal use.</p>
<p>Then generate an API key from your dashboard.</p>`,
      },
      {
        id: 'configure-openclaw',
        heading: 'Step 2 — Add OpenRouter to OpenClaw',
        body: `<p>Open your OpenClaw config file (usually at <code>~/.openclaw/config.json</code>) and add the OpenRouter provider:</p>
<pre><code>{
  "providers": {
    "openrouter": {
      "apiKey": "sk-or-your-key-here",
      "baseUrl": "https://openrouter.ai/api/v1"
    }
  },
  "defaultProvider": "openrouter",
  "defaultModel": "anthropic/claude-sonnet-4-6"
}</code></pre>`,
      },
      {
        id: 'test',
        heading: 'Step 3 — Test it',
        body: `<p>Restart OpenClaw and send a test message. You should see the model name displayed in the interface.</p>
<p>To switch models on the fly, use the model selector in the UI or update the <code>defaultModel</code> in your config.</p>`,
      },
      {
        id: 'model-ids',
        heading: 'Useful model IDs',
        body: `<ul>
  <li><code>anthropic/claude-sonnet-4-6</code> — best all-rounder</li>
  <li><code>anthropic/claude-opus-4-6</code> — most powerful, higher cost</li>
  <li><code>openai/gpt-4o</code> — fast, capable</li>
  <li><code>google/gemini-flash-2.0</code> — fastest, cheapest</li>
  <li><code>anthropic/claude-haiku-4-5</code> — lightweight, great for automation</li>
</ul>`,
      },
    ],
  },

  'openclaw-for-beginners-first-automation': {
    title: 'OpenClaw for beginners — your first automation',
    description: "Never built an automation before? Start here. We'll walk you through your first real workflow from scratch — no code required.",
    tags: ['Getting started', 'Automation'],
    readTime: '12 min',
    updated: '2026-04-01',
    related: ['how-to-install-openclaw', 'top-5-openclaw-skills-productivity'],
    sections: [
      {
        id: 'what-is-automation',
        heading: 'What is an automation (in plain English)?',
        body: `<p>An automation is just: <em>when X happens, do Y.</em></p>
<p>For example: "Every morning at 8am, check my emails, summarise anything important, and send me a digest." That's it. No code. Just a task your AI runs on a schedule.</p>`,
      },
      {
        id: 'choose-task',
        heading: 'Step 1 — Choose a task to automate',
        body: `<p>Start small. A good first automation is something you do manually every day and takes 5–10 minutes. Good examples:</p>
<ul>
  <li>Morning email summary</li>
  <li>Daily calendar briefing</li>
  <li>Weekly report generation</li>
  <li>Research digest on a topic</li>
</ul>
<p>For this guide, we'll automate a morning email summary.</p>`,
      },
      {
        id: 'install-skill',
        heading: 'Step 2 — Install the email skill',
        body: `<p>In your OpenClaw interface, go to <strong>Skills → Browse</strong> and search for "email". Install the Gmail or Outlook skill, then follow the authorisation steps to connect your account.</p>`,
      },
      {
        id: 'create-automation',
        heading: 'Step 3 — Create a scheduled task',
        body: `<p>Go to <strong>Automations → New</strong> and fill in:</p>
<ul>
  <li><strong>Schedule:</strong> Every day at 08:00</li>
  <li><strong>Prompt:</strong> "Summarise any unread emails from the last 12 hours. Highlight anything urgent or that needs a reply."</li>
  <li><strong>Output:</strong> Send to my notification channel</li>
</ul>
<p>Save and enable the automation.</p>`,
      },
      {
        id: 'test',
        heading: 'Step 4 — Test it',
        body: `<p>Click <strong>Run now</strong> to test immediately. Your AI will check your inbox and return a summary.</p>
<p>If it looks good, leave it running. Tomorrow morning it'll just work — automatically.</p>`,
      },
      {
        id: 'next',
        heading: 'What next?',
        body: `<p>Once you're comfortable with scheduled tasks, you can build more complex workflows: multi-step automations, conditional logic, and cross-app integrations.</p>
<p>Check out the <a href="/toolkit">skill packs</a> for pre-built automations you can install in minutes.</p>`,
      },
    ],
  },
};

const allGuides = [
  { slug: 'how-to-install-openclaw', title: 'How to install OpenClaw AI' },
  { slug: 'which-ai-model-openclaw-2026', title: 'Which AI model should you use?' },
  { slug: 'top-5-openclaw-skills-productivity', title: 'Top 5 skills for productivity' },
  { slug: 'connect-openclaw-to-openrouter', title: 'Connect OpenClaw to OpenRouter' },
  { slug: 'openclaw-for-beginners-first-automation', title: 'Your first automation' },
];

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides[slug];
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `${BASE_URL}/guides/${slug}`,
      type: 'article',
    },
    alternates: { canonical: `${BASE_URL}/guides/${slug}` },
  };
}

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides[slug];
  if (!guide) notFound();

  const relatedGuides = guide.related
    .map((s) => allGuides.find((g) => g.slug === s))
    .filter(Boolean) as { slug: string; title: string }[];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-28 pb-10 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All guides
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            {guide.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-snug mb-4">
            {guide.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-6">{guide.description}</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {guide.readTime} read
            </span>
            <span>Updated {guide.updated}</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Table of Contents */}
          <nav className="rounded-xl border border-border/50 bg-card p-6 mb-10">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              In this guide
            </p>
            <ol className="space-y-2">
              {guide.sections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs text-primary/60 font-mono w-4">{i + 1}.</span>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Article body */}
          <article className="prose-guide">
            {guide.sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-10 scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">
                  {section.heading}
                </h2>
                <div
                  className="guide-body"
                  dangerouslySetInnerHTML={{ __html: section.body }}
                />
              </section>
            ))}
          </article>

          {/* Email capture */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 mt-16 mb-12">
            <EmailCapture
              heading="Enjoyed this? Get more guides in your inbox."
              subheading="Weekly OpenClaw tips, new guides, and skill pack updates."
              finePrint="No spam. Unsubscribe anytime."
            />
          </div>

          {/* Related guides */}
          {relatedGuides.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-5">
                Related guides
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedGuides.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/guides/${related.slug}`}
                    className="group rounded-xl border border-border/50 bg-card p-5 flex items-center justify-between card-hover"
                  >
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">
                      {related.title}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-3" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
