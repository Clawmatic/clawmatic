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
    description: 'Install OpenClaw AI in under 15 minutes on Windows, macOS, or Linux. Complete step-by-step guide with commands, troubleshooting, and first setup walkthrough.',
    tags: ['Getting started', 'Setup'],
    readTime: '10 min',
    updated: '2026-04-04',
    related: ['connect-openclaw-to-openrouter', 'which-ai-model-openclaw-2026', 'top-5-openclaw-skills-productivity'],
    sections: [
      {
        id: 'learn',
        heading: 'What you\'ll learn',
        body: `<ul>
  <li>What OpenClaw actually is and why it's worth setting up</li>
  <li>Exact install commands for macOS, Linux, and Windows</li>
  <li>How to complete the onboarding wizard and connect your first AI model</li>
  <li>How to verify everything is working</li>
  <li>The 3 most common install errors and how to fix them</li>
</ul>`,
      },
      {
        id: 'what-is-openclaw',
        heading: 'What is OpenClaw?',
        body: `<p>OpenClaw is an open-source AI agent that runs on your own machine. Think of it as a personal AI assistant that lives on your hardware — not in someone else's cloud — and connects to every major AI model through a single gateway.</p>
<p>Once it's running, you can control it from your terminal, a browser dashboard, or even WhatsApp and Telegram. You pick the AI model. You keep your data. You pay only for what you use.</p>
<p>It has over 199,000 GitHub stars for a reason. Let's get it installed.</p>`,
      },
      {
        id: 'before-you-start',
        heading: 'Before you start',
        body: `<p><strong>What you need:</strong></p>
<ul>
  <li>A computer running macOS, Linux, or Windows (Windows users: you'll need WSL2 — covered below)</li>
  <li>An API key from at least one AI provider — <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer">OpenRouter</a> is the easiest starting point (free to sign up, pay per use)</li>
  <li>About 15 minutes</li>
</ul>
<p><strong>Node.js:</strong> OpenClaw requires Node.js 22.16 or higher (Node 24 recommended). The installer handles this automatically for most setups.</p>`,
      },
      {
        id: 'install',
        heading: 'Step 1 — Install OpenClaw',
        body: `<h3>macOS or Linux</h3>
<p>Open your terminal and run this single command:</p>
<pre><code>curl -fsSL https://openclaw.ai/install.sh | bash</code></pre>
<p>That's it. The script detects your OS, installs Node.js if needed, installs OpenClaw globally, and launches the onboarding wizard automatically.</p>
<p>If you already have Node 22+ and prefer to manage things yourself:</p>
<pre><code>npm install -g openclaw@latest
openclaw onboard --install-daemon</code></pre>

<h3>Windows (WSL2) — Recommended</h3>
<p>WSL2 is the recommended way to run OpenClaw on Windows. If you don't have it yet:</p>
<ol>
  <li>Open PowerShell as Administrator</li>
  <li>Run: <code>wsl --install</code></li>
  <li>Restart your computer when prompted</li>
  <li>Open the new Ubuntu app and set your username and password</li>
</ol>
<p>Then inside WSL2, run the same command as macOS/Linux:</p>
<pre><code>curl -fsSL https://openclaw.ai/install.sh | bash</code></pre>

<h3>Windows (Native PowerShell)</h3>
<p>Prefer to skip WSL2? Run this in PowerShell:</p>
<pre><code>iwr -useb https://openclaw.ai/install.ps1 | iex</code></pre>`,
      },
      {
        id: 'onboarding',
        heading: 'Step 2 — Complete the onboarding wizard',
        body: `<p>After install, the onboarding wizard launches automatically. If it doesn't, run:</p>
<pre><code>openclaw onboard --install-daemon</code></pre>
<p>The wizard walks you through four things:</p>

<h3>1. Gateway setup</h3>
<p>The Gateway is OpenClaw's control plane — a background service that keeps everything running. It's installed as a system service (launchd on macOS, systemd on Linux) so it starts automatically with your computer. Just confirm when prompted.</p>

<h3>2. Connect an AI provider</h3>
<p>This is where you paste your API key. OpenRouter is the best starting point — one key unlocks Claude, GPT-4o, Gemini, Mistral, and dozens more.</p>
<p>To connect OpenRouter directly:</p>
<pre><code>openclaw onboard --provider openrouter --token YOUR_OPENROUTER_API_KEY</code></pre>
<p>Or just paste your key when the wizard asks. Anthropic and OpenAI direct connections are supported too.</p>

<h3>3. Workspace and channels</h3>
<p>Your workspace lives at <code>~/.openclaw/</code> — this is where skills, settings, and history are stored. Channels are how you talk to OpenClaw. Enable the default WebChat channel for now. WhatsApp, Telegram, Slack, and Discord can be added later.</p>

<h3>4. First conversation</h3>
<p>The wizard ends with a test message to confirm everything is connected. A response from your chosen model means the install is complete.</p>`,
      },
      {
        id: 'verify',
        heading: 'Step 3 — Verify the install',
        body: `<pre><code># Check OpenClaw version
openclaw --version

# Check the gateway is running
openclaw status

# Catch any config issues
openclaw doctor

# Open the browser dashboard
openclaw dashboard</code></pre>
<p>If <code>openclaw status</code> shows the gateway running and <code>openclaw doctor</code> comes back clean, you're set. The dashboard opens at <code>http://localhost:18789</code> and gives you a full visual interface for models, skills, and conversations.</p>`,
      },
      {
        id: 'first-message',
        heading: 'Step 4 — Send your first message',
        body: `<pre><code>openclaw message "What can you help me with?"</code></pre>
<p>If you get a response, the full install is working.</p>`,
      },
      {
        id: 'errors',
        heading: 'Common errors and fixes',
        body: `<h3>"openclaw: command not found"</h3>
<p>The npm bin directory isn't in your PATH. Add this to your <code>~/.zshrc</code> or <code>~/.bashrc</code>:</p>
<pre><code>export PATH="$(npm prefix -g)/bin:$PATH"</code></pre>
<p>Then reload your shell:</p>
<pre><code>source ~/.zshrc</code></pre>

<h3>"sharp: Please add node-gyp to your dependencies"</h3>
<p>Conflict with a globally installed libvips (common on macOS with Homebrew). Fix:</p>
<pre><code>SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm install -g openclaw@latest</code></pre>

<h3>"Permission denied" on Linux</h3>
<pre><code>sudo curl -fsSL https://openclaw.ai/install.sh | bash</code></pre>
<p>Or fix your npm permissions to avoid needing sudo for global installs.</p>

<h3>Gateway won't start</h3>
<p>Run <code>openclaw doctor</code> — it surfaces exactly what's misconfigured. Most often it's a missing or expired API key.</p>`,
      },
      {
        id: 'next-steps',
        heading: 'What to do next',
        body: `<ol>
  <li><strong>Connect OpenRouter</strong> — unlocks every major AI model from one place. See the <a href="/guides/connect-openclaw-to-openrouter">connecting OpenClaw to OpenRouter</a> guide.</li>
  <li><strong>Add your first skill</strong> — skills are what make OpenClaw genuinely powerful. Start with the <a href="/guides/top-5-openclaw-skills-productivity">top 5 skills for productivity</a> guide.</li>
  <li><strong>Pick the right model</strong> — the default might not be the best for your use case. The <a href="/guides/which-ai-model-openclaw-2026">which AI model should you use</a> guide tells you exactly which model fits.</li>
</ol>`,
      },
      {
        id: 'quick-reference',
        heading: 'Quick reference',
        body: `<pre><code># Install (macOS / Linux / WSL2)
curl -fsSL https://openclaw.ai/install.sh | bash

# Install (Windows PowerShell)
iwr -useb https://openclaw.ai/install.ps1 | iex

# Install via npm (Node 22+ already installed)
npm install -g openclaw@latest
openclaw onboard --install-daemon

# Status and health
openclaw status
openclaw doctor

# Open dashboard
openclaw dashboard

# Send a message
openclaw message "your message here"

# Update
openclaw update</code></pre>`,
      },
    ],
  },

  'which-ai-model-openclaw-2026': {
    title: 'Which AI model should you use on OpenClaw? (2026 guide)',
    description: 'OpenClaw supports dozens of AI models. This guide tells you exactly which one to use for writing, research, coding, and everyday tasks — and how to switch without getting a new API key.',
    tags: ['Models', 'Getting started'],
    readTime: '8 min',
    updated: '2026-04-04',
    related: ['connect-openclaw-to-openrouter', 'top-5-openclaw-skills-productivity'],
    sections: [
      {
        id: 'short-answer',
        heading: 'The short answer',
        body: `<p>OpenClaw supports dozens of AI models — Anthropic, OpenAI, Google, Mistral, DeepSeek, Groq and more. Picking the wrong one means overpaying or getting mediocre results. Here's the cheat sheet:</p>
<table>
  <thead>
    <tr><th>You want to…</th><th>Use this model</th></tr>
  </thead>
  <tbody>
    <tr><td>Best all-round for most tasks</td><td><code>anthropic/claude-sonnet-4-6</code></td></tr>
    <tr><td>Hardest tasks, best reasoning</td><td><code>anthropic/claude-opus-4-6</code></td></tr>
    <tr><td>Fast responses, simple tasks</td><td><code>openai/gpt-4o-mini</code></td></tr>
    <tr><td>Access every model with one key</td><td>OpenRouter (any of the above)</td></tr>
    <tr><td>Zero cost, fully offline</td><td>Ollama + local model</td></tr>
  </tbody>
</table>
<p>If you're not sure, start with <strong>Claude Sonnet 4.6</strong>. It's the best cost-to-capability ratio available right now and handles the vast majority of what people use OpenClaw for.</p>`,
      },
      {
        id: 'why-model-choice-matters',
        heading: 'Why model choice matters more in OpenClaw',
        body: `<p>When you use ChatGPT or Claude.ai directly, the model is fixed. You get whatever they give you.</p>
<p>In OpenClaw, the model is powering an <em>agent</em> — it's not just answering questions, it's deciding what to do, calling tools, reading files, executing multi-step workflows. A weaker model doesn't just give you worse answers — it fails to follow instructions, misses steps in automations, and makes mistakes that a better model wouldn't.</p>
<p>This is why model choice in OpenClaw is a bigger deal than people expect.</p>`,
      },
      {
        id: 'models-explained',
        heading: 'The main models explained',
        body: `<h3>Claude Sonnet 4.6 — the default recommendation</h3>
<p><strong>Provider:</strong> Anthropic &nbsp;|&nbsp; <strong>Model string:</strong> <code>anthropic/claude-sonnet-4-6</code><br/>
<strong>Best for:</strong> General use, writing, email, analysis, automation workflows</p>
<p>Claude Sonnet 4.6 is the best starting point for most OpenClaw users. It's fast, follows complex instructions reliably, handles long context windows well, and is significantly cheaper than Opus. For everyday tasks — drafting emails, summarising documents, managing workflows, answering questions — it performs at a level that's hard to fault.</p>
<p>It's also the model least likely to make agent errors. When your AI is running automations while you're asleep, you want a model that stays on track.</p>

<h3>Claude Opus 4.6 — when you need the best</h3>
<p><strong>Provider:</strong> Anthropic &nbsp;|&nbsp; <strong>Model string:</strong> <code>anthropic/claude-opus-4-6</code><br/>
<strong>Best for:</strong> Complex reasoning, difficult research, nuanced writing, legal/technical analysis</p>
<p>Opus is the most capable model available through OpenClaw right now. Use it when Sonnet isn't cutting it — deep research tasks, complex multi-step reasoning, situations where being wrong has real consequences. The tradeoff: it's noticeably more expensive per token and slightly slower.</p>

<h3>GPT-4o — solid alternative, great for coding</h3>
<p><strong>Provider:</strong> OpenAI &nbsp;|&nbsp; <strong>Model string:</strong> <code>openai/gpt-4o</code><br/>
<strong>Best for:</strong> Coding assistance, structured output, tasks where you already use OpenAI</p>
<p>GPT-4o is OpenAI's flagship and genuinely excellent. For coding tasks in particular it's highly competitive with Claude. If you already have an OpenAI API key and are used to GPT's style, there's no strong reason to switch.</p>

<h3>GPT-4o mini — fast and cheap for simple tasks</h3>
<p><strong>Provider:</strong> OpenAI &nbsp;|&nbsp; <strong>Model string:</strong> <code>openai/gpt-4o-mini</code><br/>
<strong>Best for:</strong> High-volume simple tasks, quick replies, anything where speed matters more than depth</p>
<p>When you're running lots of small automations — sorting emails, tagging messages, quick lookups — GPT-4o mini is dramatically cheaper than the full models and plenty capable for simple tasks. A good secondary model to set as failover.</p>

<h3>Gemini 2.0 Flash — Google's fast option</h3>
<p><strong>Provider:</strong> Google &nbsp;|&nbsp; <strong>Model string:</strong> <code>google/gemini-2.0-flash</code><br/>
<strong>Best for:</strong> Speed, multimodal tasks (images + text), Google Workspace integration</p>
<p>Gemini Flash is fast and cheap. If you're doing tasks involving images or are deeply in the Google ecosystem, it's worth trying.</p>

<h3>DeepSeek — the budget pick</h3>
<p><strong>Provider:</strong> DeepSeek &nbsp;|&nbsp; <strong>Model string:</strong> <code>deepseek/deepseek-chat</code><br/>
<strong>Best for:</strong> Cost-sensitive setups, coding tasks on a budget</p>
<p>DeepSeek delivers surprisingly good performance at a very low price point. The tradeoff is that it's hosted on Chinese infrastructure — a consideration for privacy-sensitive workloads.</p>

<h3>Ollama — fully local, fully free</h3>
<p><strong>Provider:</strong> Ollama (local) &nbsp;|&nbsp; <strong>Best for:</strong> Privacy-first setups, no API cost, offline use</p>
<p>Ollama lets you run models like Llama, Mistral, or Phi directly on your machine. No API key, no cost, no data leaving your device. The tradeoff is capability — local models aren't as powerful as frontier models — and you need decent hardware (16GB RAM minimum for a usable model).</p>`,
      },
      {
        id: 'how-to-switch',
        heading: 'How to switch models in OpenClaw',
        body: `<p>You don't need to reinstall or re-run onboarding to switch models. Edit your config file directly:</p>
<pre><code>openclaw config edit</code></pre>
<p>Find the <code>model.primary</code> line and update it:</p>
<pre><code>{
  "agents": {
    "defaults": {
      "model": {
        "primary": "anthropic/claude-sonnet-4-6"
      }
    }
  }
}</code></pre>
<p>Change the model string and save. The new model takes effect immediately.</p>`,
      },
      {
        id: 'failover',
        heading: 'Model failover — the feature most people don\'t know about',
        body: `<p>OpenClaw supports automatic model failover. If your primary model fails or hits a rate limit, it automatically switches to a backup. This is huge for automations running while you're not watching.</p>
<p>Set it up in your config:</p>
<pre><code>{
  "agents": {
    "defaults": {
      "model": {
        "primary": "anthropic/claude-sonnet-4-6",
        "fallback": "openai/gpt-4o-mini"
      }
    }
  }
}</code></pre>
<p>Now if Claude hits its limit at 2am while an automation is running, GPT-4o mini picks up the slack.</p>`,
      },
      {
        id: 'openrouter',
        heading: 'The case for OpenRouter',
        body: `<p>If you want access to every model above through a <strong>single API key</strong>, use OpenRouter.</p>
<p>Instead of managing separate Anthropic, OpenAI, and Google API keys, you get one OpenRouter key that routes to any model. It adds a small markup per token (~10–15% on most models) but the convenience is worth it if you like experimenting with different models.</p>
<p>We have a dedicated guide: <a href="/guides/connect-openclaw-to-openrouter">How to connect OpenClaw to OpenRouter →</a></p>`,
      },
      {
        id: 'recommended-setup',
        heading: 'Our recommended setup for most people',
        body: `<p><strong>Primary model:</strong> <code>anthropic/claude-sonnet-4-6</code><br/>
<strong>Fallback model:</strong> <code>openai/gpt-4o-mini</code><br/>
<strong>Provider approach:</strong> Direct API keys OR OpenRouter if you want flexibility</p>
<p>This setup covers 95% of what OpenClaw users do, keeps costs reasonable, and gives you automatic failover so automations don't break. Once you're comfortable and want to push into harder tasks, upgrade your primary to <code>anthropic/claude-opus-4-6</code> for the sessions where you need it.</p>
<ul>
  <li><a href="/guides/connect-openclaw-to-openrouter">How to connect OpenClaw to OpenRouter →</a></li>
  <li><a href="/guides/top-5-openclaw-skills-productivity">Top 5 OpenClaw skills for productivity →</a></li>
</ul>`,
      },
    ],
  },

  'top-5-openclaw-skills-productivity': {
    title: 'Top 5 OpenClaw skills for productivity',
    description: 'Most OpenClaw users only use 20% of what it can do. These are the 5 skills that power users install in week one — each one saves you real time every day.',
    tags: ['Skills', 'Productivity'],
    readTime: '6 min',
    updated: '2026-04-04',
    related: ['openclaw-for-beginners-first-automation', 'how-to-install-openclaw'],
    sections: [
      {
        id: 'what-are-skills',
        heading: 'What are skills?',
        body: `<p>Most OpenClaw users only use 20% of what it can do. They chat with it in the dashboard and leave it there. The real power is in skills — modular extensions that let your AI agent actually <em>do things</em> in the world.</p>
<p>Skills are small modules stored as Markdown files that teach OpenClaw how to do specific tasks. Think of them like apps for your AI — each one adds a new capability.</p>
<p>You install them from <strong>ClawHub</strong> (clawhub.ai), OpenClaw's official skill registry. There are 700+ skills available. Most are free.</p>
<pre><code>openclaw skills install &lt;skill-slug&gt;</code></pre>
<blockquote class="callout-warning">
  <p><strong>Security note:</strong> Only install skills from verified authors — look for the blue checkmark badge on ClawHub. After a coordinated attack in early 2026 (ClawHavoc), ClawHub now requires code signing and VirusTotal scanning for all new skills. Check the scan result on any skill's listing page before installing.</p>
</blockquote>`,
      },
      {
        id: 'skill-gmail',
        heading: 'Skill 1 — Gmail',
        body: `<p><strong>Slug:</strong> <code>gmail</code> &nbsp;|&nbsp; <strong>What it does:</strong> Lets OpenClaw read, search, draft, send, and organise your Gmail</p>
<p>This is the skill most people install first — and the one that saves the most time. Once connected, you can ask your AI things like:</p>
<ul>
  <li><em>"Summarise my unread emails from today"</em></li>
  <li><em>"Draft a reply to the email from Sarah about the invoice"</em></li>
  <li><em>"Find all emails about the project deadline this month"</em></li>
  <li><em>"Mark everything from this newsletter as read"</em></li>
</ul>
<pre><code>openclaw skills install gmail</code></pre>
<p>You'll need to authorise it with your Google account. The skill uses OAuth — it never stores your password.</p>
<p><strong>Why it's in the top 5:</strong> Email is where most people lose hours every week. Having an AI that can read, categorise, and draft responses on command is the single biggest productivity unlock most people experience.</p>`,
      },
      {
        id: 'skill-web-search',
        heading: 'Skill 2 — Web search',
        body: `<p><strong>Slug:</strong> <code>web-search</code> &nbsp;|&nbsp; <strong>What it does:</strong> Gives OpenClaw the ability to search the web in real time</p>
<p>By default, OpenClaw's AI is limited to what it was trained on. The web search skill removes that limit — your agent can look things up, verify information, and pull current data on demand.</p>
<ul>
  <li><em>"Search for the latest OpenRouter pricing and summarise it"</em></li>
  <li><em>"Find the top 5 competitors for [product] and give me a comparison"</em></li>
  <li><em>"What happened in AI this week?"</em></li>
</ul>
<pre><code>openclaw skills install web-search</code></pre>
<p>Most versions of this skill don't require an API key. Check the ClawHub listing — some use Perplexity or a search API that may need a free key.</p>
<p><strong>Why it's in the top 5:</strong> Without this skill your AI is working from outdated knowledge. With it, you have a research assistant that can pull live information on any topic in seconds.</p>`,
      },
      {
        id: 'skill-calendar',
        heading: 'Skill 3 — Google Calendar',
        body: `<p><strong>Slug:</strong> <code>google-calendar</code> &nbsp;|&nbsp; <strong>What it does:</strong> Reads and creates calendar events, checks availability, schedules meetings</p>
<p>Once this is connected, scheduling stops being a back-and-forth. Ask it:</p>
<ul>
  <li><em>"What do I have tomorrow?"</em></li>
  <li><em>"Block 2 hours on Thursday afternoon for deep work"</em></li>
  <li><em>"When am I free next week for a 1-hour call?"</em></li>
  <li><em>"Create an event: team standup, every Monday at 9am"</em></li>
</ul>
<pre><code>openclaw skills install google-calendar</code></pre>
<p>Authorise with Google OAuth the same way as Gmail.</p>
<p><strong>Why it's in the top 5:</strong> The combination of Gmail + Calendar is where OpenClaw starts feeling like a real assistant. It can see your emails and your schedule at the same time — so it can do things like <em>"find the meeting request in my emails and schedule it for a time I'm free."</em></p>`,
      },
      {
        id: 'skill-summarise',
        heading: 'Skill 4 — Summarise',
        body: `<p><strong>Slug:</strong> <code>summarise</code> &nbsp;|&nbsp; <strong>What it does:</strong> Summarises documents, PDFs, web pages, and long text on demand</p>
<p>Drop a URL, paste a document, or point it at a file and get a clean summary. Adjustable length and format — bullet points, executive summary, key takeaways.</p>
<ul>
  <li><em>"Summarise this article: [URL]"</em></li>
  <li><em>"Give me the 5 key points from this PDF"</em></li>
  <li><em>"Summarise this meeting transcript as bullet points with action items"</em></li>
</ul>
<pre><code>openclaw skills install summarise</code></pre>
<p>No API key needed.</p>
<p><strong>Why it's in the top 5:</strong> Most people spend too long reading things that could be digested in 30 seconds. This skill works on anything — research papers, contracts, blog posts, meeting notes, YouTube transcripts.</p>`,
      },
      {
        id: 'skill-reminders',
        heading: 'Skill 5 — Reminders',
        body: `<p><strong>Slug:</strong> <code>reminders</code> &nbsp;|&nbsp; <strong>What it does:</strong> Sets time-based reminders that message you through your connected channels</p>
<p>This is the skill that makes OpenClaw feel proactive rather than reactive. Set a reminder and it will message you on WhatsApp, Telegram, or whatever channel you've connected — even if you're not near your computer.</p>
<ul>
  <li><em>"Remind me to follow up with the client on Friday at 10am"</em></li>
  <li><em>"Set a daily reminder at 8am to check my emails"</em></li>
  <li><em>"Remind me in 2 hours to take a break"</em></li>
</ul>
<pre><code>openclaw skills install reminders</code></pre>
<p><strong>Why it's in the top 5:</strong> It's simple, but it's the skill that makes people feel like they have an assistant rather than a chatbot. The reminders reach you wherever you are through your phone.</p>`,
      },
      {
        id: 'install-all',
        heading: 'Installing all 5 at once',
        body: `<pre><code>openclaw skills install gmail web-search google-calendar summarise reminders</code></pre>
<p>Run this after install and confirm each one is active:</p>
<pre><code>openclaw skills list</code></pre>`,
      },
      {
        id: 'what-next',
        heading: 'After the top 5 — what to explore next',
        body: `<p>Once these are working well, the next skills worth looking at:</p>
<ul>
  <li><code>notion</code> — read and write Notion pages from chat</li>
  <li><code>github</code> — manage issues, PRs, and repos from your phone</li>
  <li><code>slack</code> — send and read Slack messages through OpenClaw</li>
  <li><code>weather</code> — simple but great for testing your skills setup</li>
  <li><code>file-manager</code> — read, write, and organise local files</li>
</ul>
<p>Search ClawHub for anything specific to your workflow:</p>
<pre><code>openclaw skills search "your topic here"</code></pre>
<ul>
  <li><a href="/guides/connect-openclaw-to-openrouter">How to connect OpenClaw to OpenRouter →</a></li>
  <li><a href="/guides/openclaw-for-beginners-first-automation">OpenClaw for beginners — your first automation →</a></li>
</ul>`,
      },
    ],
  },

  'connect-openclaw-to-openrouter': {
    title: 'How to connect OpenClaw to OpenRouter',
    description: 'OpenClaw connected to OpenRouter gives you access to every major AI model — Claude, GPT-4o, Gemini, DeepSeek and more — through a single API key. Set it up in under 5 minutes.',
    tags: ['Setup', 'Models'],
    readTime: '7 min',
    updated: '2026-04-04',
    related: ['which-ai-model-openclaw-2026', 'top-5-openclaw-skills-productivity'],
    sections: [
      {
        id: 'what-is-openrouter',
        heading: 'What is OpenRouter?',
        body: `<p>OpenClaw alone is powerful. OpenClaw connected to OpenRouter is a different tool entirely.</p>
<p>OpenRouter is a unified AI API that routes your requests to any model from any provider. You create one account, get one API key, and that key works for everything.</p>
<p>Instead of managing separate keys for Anthropic, OpenAI, Google, and DeepSeek — you manage one OpenRouter key and access all of them through it.</p>
<p>The cost: OpenRouter adds a small markup on most models (roughly 10–15%). For the convenience of a single key and unified billing, most people find this completely worth it. Some models on OpenRouter are actually cheaper than going direct.</p>`,
      },
      {
        id: 'step-1',
        heading: 'Step 1 — Create your OpenRouter account',
        body: `<p>Go to <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer">openrouter.ai</a> and sign up. It takes 2 minutes.</p>
<p>Once you're in, go to <strong>API Keys</strong> in your dashboard and create a new key. Name it something like <code>openclaw</code>.</p>
<p>Copy the key — it starts with <code>sk-or-</code>. You'll need it in the next step.</p>
<p><strong>Add credits:</strong> OpenRouter is pay-as-you-go. Add a small amount to start — $5 or $10 is plenty to test with. You won't be charged a subscription.</p>`,
      },
      {
        id: 'step-2',
        heading: 'Step 2 — Connect OpenRouter to OpenClaw',
        body: `<p>Run this command, replacing the key with yours:</p>
<pre><code>openclaw onboard --auth-choice apiKey --token-provider openrouter --token "sk-or-your-key-here"</code></pre>
<p>This registers your OpenRouter key with OpenClaw's gateway. You only need to do this once.</p>
<p>Verify it worked:</p>
<pre><code>openclaw doctor</code></pre>
<p>You should see OpenRouter listed as a configured provider with no errors.</p>`,
      },
      {
        id: 'step-3',
        heading: 'Step 3 — Set your default model',
        body: `<p>Now tell OpenClaw which model to use by default. Open your config:</p>
<pre><code>openclaw config edit</code></pre>
<p>Update the model section:</p>
<pre><code>{
  "env": {
    "OPENROUTER_API_KEY": "sk-or-your-key-here"
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "openrouter/anthropic/claude-sonnet-4-6"
      }
    }
  }
}</code></pre>
<blockquote class="callout-note">
  <p><strong>Note on model strings:</strong> OpenRouter model strings follow the format <code>openrouter/provider/model-name</code>. So Claude Sonnet becomes <code>openrouter/anthropic/claude-sonnet-4-6</code>, GPT-4o becomes <code>openrouter/openai/gpt-4o</code>, and so on.</p>
</blockquote>
<p>Save and close. Your changes take effect immediately.</p>`,
      },
      {
        id: 'switch-models',
        heading: 'How to switch models',
        body: `<p>This is where OpenRouter gets useful. You can switch to any model with a single config change — no new API keys, no new accounts. Here are the most useful model strings:</p>
<pre><code>openrouter/anthropic/claude-sonnet-4-6     # best all-rounder
openrouter/anthropic/claude-opus-4-6       # most capable
openrouter/openai/gpt-4o                   # great for coding
openrouter/openai/gpt-4o-mini              # fast and cheap
openrouter/google/gemini-2.0-flash         # Google's fast model
openrouter/deepseek/deepseek-chat          # budget option
openrouter/mistralai/mistral-large         # Mistral's flagship</code></pre>
<p>To switch, just change the <code>primary</code> value in your config and save. You can also switch for a single conversation without changing your config — just mention it in your message: <em>"Use GPT-4o for this task"</em> — OpenClaw understands model preferences in natural language.</p>`,
      },
      {
        id: 'failover',
        heading: 'Setting up model failover',
        body: `<p>Failover means: if your primary model fails, rate-limits, or is unavailable, OpenClaw automatically switches to your backup. For automations running overnight, this is essential.</p>
<pre><code>{
  "agents": {
    "defaults": {
      "model": {
        "primary": "openrouter/anthropic/claude-sonnet-4-6",
        "fallback": "openrouter/openai/gpt-4o-mini"
      }
    }
  }
}</code></pre>
<p>Now if Claude hits a hiccup at 3am while an automation is running, GPT-4o mini takes over automatically.</p>`,
      },
      {
        id: 'finding-models',
        heading: 'Finding models on OpenRouter',
        body: `<p>OpenRouter has hundreds of models. Browse them at <a href="https://openrouter.ai/models" target="_blank" rel="noopener noreferrer">openrouter.ai/models</a>.</p>
<p>Each listing shows:</p>
<ul>
  <li>Price per million input/output tokens</li>
  <li>Context window size</li>
  <li>Benchmark scores</li>
  <li>Whether it supports vision (images)</li>
</ul>
<p>For most OpenClaw use cases, price and context window are the two things that matter most. A larger context window means the model can handle longer documents and longer conversation histories without losing track.</p>`,
      },
      {
        id: 'usage-costs',
        heading: 'Checking your usage and costs',
        body: `<p>OpenRouter gives you a dashboard showing exactly what you've spent, by model, by day. Go to <strong>Activity</strong> in your OpenRouter account. You can also set a monthly spending limit so you never get a surprise bill.</p>
<p>For typical OpenClaw use — a few automations, daily email handling, some research tasks — most people spend $3–8/month on Claude Sonnet. Heavy users with lots of automations might hit $15–25/month.</p>`,
      },
      {
        id: 'troubleshooting',
        heading: 'Troubleshooting',
        body: `<h3>"Provider not found" when running commands</h3>
<p>Re-run the onboard command with your key:</p>
<pre><code>openclaw onboard --auth-choice apiKey --token-provider openrouter --token "sk-or-your-key-here"</code></pre>

<h3>Model isn't responding</h3>
<p>Check that your OpenRouter account has credits. Run:</p>
<pre><code>openclaw daemon logs</code></pre>
<p>The logs will show the exact error from the API.</p>

<h3>Wrong model string format</h3>
<p>OpenRouter strings must start with <code>openrouter/</code>. If you copy a model name directly from OpenRouter's docs, add <code>openrouter/</code> at the front.</p>`,
      },
      {
        id: 'why-openrouter',
        heading: 'Why we recommend OpenRouter for most ClawMatic users',
        body: `<p>If you're using one of our <a href="/packages">Stack Bundles</a>, they're all configured to work through OpenRouter. One key, the right model for your use case, and you can switch if your needs change.</p>
<p>It also means we can update our package recommendations as new models come out — you just change the model string, no new accounts or keys needed.</p>
<ul>
  <li><a href="/guides/which-ai-model-openclaw-2026">Which AI model should you use on OpenClaw? →</a></li>
  <li><a href="/guides/top-5-openclaw-skills-productivity">Top 5 OpenClaw skills for productivity →</a></li>
</ul>`,
      },
    ],
  },

  'openclaw-for-beginners-first-automation': {
    title: 'OpenClaw for beginners — your first automation',
    description: "The first automation is always the hardest. This guide walks you through building a real, useful workflow from scratch — no code required. By the end it runs on its own.",
    tags: ['Getting started', 'Automation'],
    readTime: '12 min',
    updated: '2026-04-04',
    related: ['top-5-openclaw-skills-productivity', 'which-ai-model-openclaw-2026'],
    sections: [
      {
        id: 'what-is-automation',
        heading: 'What is an automation in OpenClaw?',
        body: `<p>An automation is a task you'd normally do manually — that you set up once and let OpenClaw handle going forward.</p>
<p>Examples:</p>
<ul>
  <li>Every morning at 8am, summarise your unread emails and send the summary to your phone</li>
  <li>When a new lead fills in your contact form, add them to your CRM and send a follow-up email</li>
  <li>Every Friday, pull your week's calendar events and write a summary of what you accomplished</li>
</ul>
<p>The pattern is always the same: <strong>trigger → action → output</strong>. Something happens (trigger), OpenClaw does something (action), and the result goes somewhere (output).</p>`,
      },
      {
        id: 'before-you-start',
        heading: 'Before you start',
        body: `<p>Make sure you have:</p>
<ul>
  <li>OpenClaw installed and running (<a href="/guides/how-to-install-openclaw">install guide here</a>)</li>
  <li>At least one skill installed — we'll use <code>gmail</code> and <code>reminders</code> for this guide</li>
  <li>A connected channel — Telegram or WhatsApp recommended so you can receive the output on your phone</li>
</ul>
<p>If you're missing any of these, set them up first. This guide will still be here.</p>`,
      },
      {
        id: 'build-your-first',
        heading: 'Your first automation: morning email digest',
        body: `<p>We're going to build this: <strong>every morning at 8am, OpenClaw checks your Gmail, summarises your unread emails, and sends you the summary via Telegram.</strong></p>
<p>This is one of the most useful automations you can build. It takes 10 minutes to set up and saves you from context-switching to your inbox first thing every morning.</p>

<h3>Step 1 — Make sure the required skills are installed</h3>
<pre><code>openclaw skills install gmail
openclaw skills install reminders
openclaw skills list</code></pre>
<p>Confirm both appear in your list as active.</p>

<h3>Step 2 — Connect your Telegram channel</h3>
<p>If you want the digest sent to your phone, connect Telegram:</p>
<pre><code>openclaw channels add telegram</code></pre>
<p>Follow the prompts. You'll need to scan a QR code or enter a code in the Telegram app. It takes about 3 minutes. If you'd rather receive it in the OpenClaw web dashboard instead, skip this step.</p>

<h3>Step 3 — Test the manual version first</h3>
<p>Before automating anything, make sure it works manually. In your OpenClaw dashboard or through your Telegram channel, send this message:</p>
<blockquote>
  <p><em>"Check my Gmail for unread emails from today. Summarise them in bullet points — sender name, subject, and one sentence about what it's about. If there are no unread emails, just tell me the inbox is clear."</em></p>
</blockquote>
<p>OpenClaw should read your emails and return a clean summary. If it doesn't work, check:</p>
<pre><code>openclaw daemon logs</code></pre>

<h3>Step 4 — Set up the automation</h3>
<p>Now we automate it. Send this message to OpenClaw:</p>
<blockquote>
  <p><em>"Set up a daily automation: every morning at 8am, check my Gmail for unread emails, summarise them in bullet points (sender, subject, one sentence each), and send the summary to me on Telegram. If there are no unread emails, send a message saying the inbox is clear."</em></p>
</blockquote>
<p>OpenClaw will confirm the automation is set up. You can also set this up directly in your config:</p>
<pre><code>{
  "automations": [
    {
      "name": "morning-email-digest",
      "schedule": "0 8 * * *",
      "task": "Check Gmail for unread emails. Summarise each one as: sender name, subject line, one sentence summary. Send the summary to Telegram. If no unread emails, send: 'Inbox clear ✓'",
      "channel": "telegram"
    }
  ]
}</code></pre>
<p>The schedule uses cron format: <code>0 8 * * *</code> means 8:00am every day. Change it to <code>0 7 * * 1-5</code> for 7am on weekdays only.</p>

<h3>Step 5 — Test the automation</h3>
<p>Don't wait until 8am tomorrow to find out if it works. Trigger it manually:</p>
<pre><code>openclaw automations run morning-email-digest</code></pre>
<p>Check that you receive the summary on Telegram (or in your dashboard). If you do — it's working. You're done.</p>

<h3>Step 6 — Verify it's scheduled</h3>
<pre><code>openclaw automations list</code></pre>
<p>You should see <code>morning-email-digest</code> listed as active with the next scheduled run time. If it shows up, it will run automatically going forward.</p>`,
      },
      {
        id: 'how-it-works',
        heading: 'What you just built — and why it works',
        body: `<p>Your automation has three parts:</p>
<ul>
  <li><strong>Trigger:</strong> A cron schedule (<code>0 8 * * *</code>) that fires at 8am daily</li>
  <li><strong>Action:</strong> OpenClaw reads your Gmail using the gmail skill, processes the results with your AI model, and formats the output</li>
  <li><strong>Output:</strong> The result is sent to your Telegram channel</li>
</ul>
<p>OpenClaw's gateway runs in the background as a daemon (because you used <code>--install-daemon</code> during setup). This means it keeps running even when you close your laptop — the automation fires at 8am whether you're at your computer or not.</p>`,
      },
      {
        id: 'automation-pattern',
        heading: 'The automation pattern — how to build your next one',
        body: `<p>Every automation follows the same structure. Once you understand it, you can build almost anything.</p>
<p><strong>1. Define the trigger</strong></p>
<ul>
  <li>Time-based: <em>"every day at 8am"</em>, <em>"every Monday morning"</em>, <em>"every hour"</em></li>
  <li>Event-based: <em>"when I receive an email from..."</em>, <em>"when a new form is submitted..."</em></li>
</ul>
<p><strong>2. Define the action — be specific.</strong> The more specific your instruction, the more reliable the result.</p>
<ul>
  <li>Bad: <em>"check my emails"</em></li>
  <li>Good: <em>"check my Gmail for unread emails from the last 24 hours. For each one, extract the sender name, subject line, and the main ask or question."</em></li>
</ul>
<p><strong>3. Define the output</strong></p>
<ul>
  <li>Where should the result go? Telegram, WhatsApp, Gmail, Notion, a file, the dashboard?</li>
  <li>What format? Bullet points, a paragraph, a table, a JSON file?</li>
</ul>
<p>Write it out in plain English, send it to OpenClaw, and it will set it up. Refine it if the first version isn't quite right — just tell it what to change.</p>`,
      },
      {
        id: 'more-automations',
        heading: 'More automations to try next',
        body: `<p>Now that you understand the pattern, here are 4 more worth building:</p>
<blockquote>
  <p><strong>Weekly calendar summary</strong><br/><em>"Every Friday at 5pm, check my Google Calendar for this week's events. Write a short summary of what I worked on and send it to Telegram."</em></p>
</blockquote>
<blockquote>
  <p><strong>Daily focus reminder</strong><br/><em>"Every morning at 9am, ask me what my top 3 priorities are for today. Wait for my reply. Then send me a reminder at 3pm with those 3 priorities."</em></p>
</blockquote>
<blockquote>
  <p><strong>Email follow-up tracker</strong><br/><em>"Every weekday at 10am, check my Gmail for emails I sent more than 3 days ago that haven't received a reply. List them with the recipient name, subject, and date sent. Send the list to Telegram."</em></p>
</blockquote>
<blockquote>
  <p><strong>Newsletter digest</strong><br/><em>"Every Sunday at 9am, check my Gmail for newsletters received this week. Summarise the most interesting 3 articles or stories across all of them. Send to Telegram."</em></p>
</blockquote>`,
      },
      {
        id: 'troubleshooting',
        heading: 'Troubleshooting automations',
        body: `<h3>Automation ran but I didn't receive anything</h3>
<p>Check the channel connection:</p>
<pre><code>openclaw channels status</code></pre>
<p>Also check the logs for the automation run:</p>
<pre><code>openclaw daemon logs --filter morning-email-digest</code></pre>

<h3>Automation isn't triggering at the scheduled time</h3>
<p>Make sure the daemon is running:</p>
<pre><code>openclaw gateway status</code></pre>
<p>If it shows stopped, start it:</p>
<pre><code>openclaw gateway start</code></pre>

<h3>The summary isn't quite right</h3>
<p>You can refine the automation's instructions anytime. Tell OpenClaw: <em>"Update the morning email digest automation — instead of bullet points, format each email as a single line: [Sender] — [Subject] — [Summary]"</em></p>
<p>Or edit it directly in your config file.</p>
<ul>
  <li><a href="/guides/top-5-openclaw-skills-productivity">Top 5 OpenClaw skills for productivity →</a></li>
  <li><a href="/guides/which-ai-model-openclaw-2026">Which AI model should you use on OpenClaw? →</a></li>
  <li><a href="/guides/connect-openclaw-to-openrouter">How to connect OpenClaw to OpenRouter →</a></li>
</ul>`,
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
    title: `${guide.title} | ClawMatic Community`,
    description: guide.description,
    openGraph: {
      title: `${guide.title} | ClawMatic Community`,
      description: guide.description,
      url: `${BASE_URL}/guides/${slug}`,
      type: 'article',
      images: [{ url: `/og/guides/${slug}.png`, width: 1200, height: 630, alt: guide.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${guide.title} | ClawMatic Community`,
      description: guide.description,
      images: [`/og/guides/${slug}.png`],
    },
    alternates: { canonical: `${BASE_URL}/guides/${slug}` },
  };
  // TODO: Generate OG image at /public/og/guides/[slug].png
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
            <span className="text-primary font-medium">
              Last updated: {guide.updated}
            </span>
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

          {/* Discord support note */}
          <p className="text-sm text-muted-foreground/60 text-center mt-10 pt-8 border-t border-border/50">
            Something not working or have a question?{' '}
            <a
              href="https://discord.gg/7p3PVFq3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Ask in the ClawMatic Discord →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
