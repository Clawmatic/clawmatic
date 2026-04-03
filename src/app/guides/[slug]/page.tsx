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

  'connect-whatsapp': {
    title: 'Connecting OpenClaw to WhatsApp',
    category: 'INTEGRATIONS',
    categoryColor: '#4ECCA3',
    difficulty: 'Intermediate',
    difficultyColor: '#FEBC2E',
    readTime: '12 min',
    updated: '2026-03-28',
    tags: ['whatsapp', 'bridge', 'messaging'],
    content: `## What you'll build

By the end of this guide, you'll be able to send messages to your OpenClaw agent from WhatsApp and receive replies — just like texting a contact. Your agent can also proactively message you with reminders, updates, or alerts.

This works via **wacli**, the WhatsApp CLI skill for OpenClaw. It uses the WhatsApp Web protocol (no official API key needed).

---

## Prerequisites

- OpenClaw installed and running (see the [Getting Started guide](/guides/getting-started))
- A WhatsApp account with the app installed on your phone
- Node.js 18+ on the machine running OpenClaw

---

## Step 1 — Install the wacli skill

\`\`\`bash
clawhub install wacli
\`\`\`

Restart OpenClaw after the install:

\`\`\`bash
openclaw restart
\`\`\`

---

## Step 2 — Authenticate with WhatsApp

Run the authentication command:

\`\`\`bash
openclaw skill wacli auth
\`\`\`

This will display a QR code in your terminal. Open WhatsApp on your phone:

- **Android:** Menu (⋮) → Linked Devices → Link a Device
- **iPhone:** Settings → Linked Devices → Link a Device

Scan the QR code. You'll see "Linked successfully" in the terminal.

> The session is saved locally in your workspace. You won't need to scan again unless you manually log out or the session expires.

---

## Step 3 — Configure the bridge

Open your OpenClaw config at \`~/.openclaw/config.json\` and add the WhatsApp plugin entry:

\`\`\`json
{
  "plugins": {
    "entries": {
      "whatsapp": {
        "enabled": true,
        "allowedNumbers": ["+32XXXXXXXXX"],
        "respondToAll": false
      }
    }
  }
}
\`\`\`

- **allowedNumbers** — only these numbers can interact with your agent. Replace \`+32XXXXXXXXX\` with your own WhatsApp number including country code (e.g. \`+1XXXXXXXXXX\` for the US). Always set this for security.
- **respondToAll** — if \`true\`, the agent responds to any WhatsApp message. Dangerous if your number leaks; keep it \`false\`.

Restart OpenClaw to apply:

\`\`\`bash
openclaw restart
\`\`\`

---

## Step 4 — Test it

Send a WhatsApp message from your phone (from a number in \`allowedNumbers\`) to the number you linked:

> Hey, what's the weather today?

You should get a reply from your OpenClaw agent within a few seconds.

---

## Step 5 — Send messages from your agent

Your agent can also reach out to you. In any prompt or cron job, use (replace \`+32XXXXXXXXX\` with your number):

\`\`\`
Send a WhatsApp message to +32XXXXXXXXX: "Your daily briefing is ready."
\`\`\`

Or via the wacli skill directly in a script:

\`\`\`bash
wacli send --to "+32XXXXXXXXX" --message "Reminder: standup in 10 minutes"
\`\`\`

---

## Keeping the session alive

WhatsApp Web sessions expire if inactive. To keep yours alive:

- Make sure OpenClaw is running 24/7 (see the [VPS guide](/guides/vps-setup) for always-on setup)
- Send at least one message every few days to keep the session warm
- If it expires, just run \`openclaw skill wacli auth\` again to re-scan

---

## Troubleshooting

**QR code not showing?**
Make sure wacli installed correctly: \`clawhub list\` should show it. Try reinstalling: \`clawhub install wacli --force\`.

**Messages not coming through?**
Check that your phone number is in \`allowedNumbers\` with the full international format including +.

**Agent not replying?**
Check OpenClaw logs: \`openclaw logs --tail 50\` — look for WhatsApp plugin errors.

**Session expired?**
Re-run \`openclaw skill wacli auth\` and scan the new QR code.`,
  },

  'first-skill': {
    title: 'Building Your First Custom Skill',
    category: 'SKILLS',
    categoryColor: '#FF6B6B',
    difficulty: 'Intermediate',
    difficultyColor: '#FEBC2E',
    readTime: '15 min',
    updated: '2026-03-28',
    tags: ['skills', 'code', 'custom'],
    content: `## How OpenClaw skills work

A skill is just a folder with a **SKILL.md** file at its root. That file tells OpenClaw what the skill does, how to invoke it, and where to find any supporting scripts or reference data.

When you ask OpenClaw something, it scans all installed skills, picks the most relevant one, reads its SKILL.md, and follows the instructions inside.

---

## Skill directory structure

\`\`\`
my-skill/
├── SKILL.md          ← required: instructions for the agent
├── scripts/          ← optional: shell/JS/Python scripts
│   └── fetch.sh
└── references/       ← optional: static data, templates, examples
    └── quotes.json
\`\`\`

The agent reads SKILL.md and can run scripts or reference files when needed. Keep it simple — the best skills are focused on one thing.

---

## The SKILL.md format

\`\`\`markdown
# My Skill Name

## Description
One sentence: what does this skill do?

## When to use
Describe the trigger — what user request should activate this skill?

## Instructions
Step-by-step instructions the agent follows. Be specific.
Reference scripts as: scripts/fetch.sh
Reference data as: references/data.json

## Examples
- "Give me a quote" → runs scripts/fetch.sh, returns a quote
\`\`\`

---

## Building a "Quote of the Day" skill

Let's build a real skill from scratch. It fetches a random inspirational quote and returns it.

**Create the skill folder:**

\`\`\`bash
mkdir -p ~/.openclaw/skills/quote-of-day/scripts
mkdir -p ~/.openclaw/skills/quote-of-day/references
\`\`\`

**Create the fetch script:**

\`\`\`bash
cat > ~/.openclaw/skills/quote-of-day/scripts/get-quote.sh << 'EOF'
#!/bin/bash
curl -s "https://zenquotes.io/api/random" | \
  python3 -c "import sys,json; d=json.load(sys.stdin)[0]; print(f'\"{d[\"q\"]}\" — {d[\"a\"]}')"
EOF
chmod +x ~/.openclaw/skills/quote-of-day/scripts/get-quote.sh
\`\`\`

**Create SKILL.md:**

\`\`\`markdown
# Quote of the Day

## Description
Fetches a random inspirational quote from ZenQuotes and presents it.

## When to use
When the user asks for a quote, an inspirational message, something motivating,
or says "quote of the day".

## Instructions
1. Run scripts/get-quote.sh to fetch a random quote
2. Present the quote in a clean format with the author name
3. Optionally add a brief reflection or follow-up if the user seems to want it

## Examples
- "Give me a quote" → fetch and display
- "I need some motivation" → fetch and display with a warm intro
- "Quote of the day" → fetch and display
\`\`\`

---

## Installing the skill

Skills live in your workspace's skills folder or the global skills directory:

\`\`\`bash
# Option 1: workspace skills folder (recommended)
mv ~/.openclaw/skills/quote-of-day ~/my-agent/skills/

# Option 2: global skills folder
# Already there at ~/.openclaw/skills/quote-of-day
\`\`\`

Restart OpenClaw:

\`\`\`bash
openclaw restart
\`\`\`

---

## Testing it

Ask your agent:

> Give me a quote of the day

You should get something like:

> "The only way to do great work is to love what you do." — Steve Jobs

---

## Debugging tips

**Skill not triggering?**
The agent picks skills based on description matching. Make the "When to use" section very explicit — list the exact phrases a user might say.

**Script not running?**
Check permissions: \`ls -la scripts/get-quote.sh\` — it needs to be executable (\`chmod +x\`).

**Script errors?**
Test it directly: \`bash scripts/get-quote.sh\` — fix any issues before testing through the agent.

**Multiple skills conflicting?**
If two skills could match the same request, make their descriptions more specific. The agent always picks the most specific match.

---

## Going further

Once your skill works, you can:

- Add offline fallback data in \`references/quotes.json\` for when the API is down
- Add more commands to the same skill (e.g., "quote from a specific author")
- Package it as a distributable skill pack (see the [Skill Pack Format guide](/guides/skill-pack-format))`,
  },

  'config-deep-dive': {
    title: 'OpenClaw Config Deep Dive',
    category: 'SETUP',
    categoryColor: '#5E6AD2',
    difficulty: 'Advanced',
    difficultyColor: '#FF6B6B',
    readTime: '20 min',
    updated: '2026-03-28',
    tags: ['config', 'advanced', 'json'],
    content: `## Config file location

OpenClaw reads its configuration from \`~/.openclaw/config.json\`. This is created automatically on first run with sensible defaults. You can edit it any time — changes take effect after \`openclaw restart\`.

---

## Full config structure

\`\`\`json
{
  "providers": { ... },
  "model": { ... },
  "memory": { ... },
  "workspace": { ... },
  "gateway": { ... },
  "plugins": { ... },
  "security": { ... }
}
\`\`\`

---

## providers

Configure your AI model API keys here.

\`\`\`json
{
  "providers": {
    "anthropic": {
      "apiKey": "sk-ant-...",
      "baseUrl": "https://api.anthropic.com"
    },
    "openai": {
      "apiKey": "sk-...",
      "baseUrl": "https://api.openai.com/v1"
    },
    "google": {
      "apiKey": "AIza...",
      "baseUrl": "https://generativelanguage.googleapis.com"
    }
  }
}
\`\`\`

- **baseUrl** is optional — only set it if you're using a proxy or self-hosted endpoint
- You can configure multiple providers and switch between them per-agent or per-task
- Environment variables take precedence: \`ANTHROPIC_API_KEY\`, \`OPENAI_API_KEY\`, \`GOOGLE_API_KEY\`

---

## model

Controls which model is used and how.

\`\`\`json
{
  "model": {
    "primary": "anthropic/claude-sonnet-4-6",
    "default": "anthropic/claude-haiku-3-5",
    "thinking": "disabled",
    "maxTokens": 8192,
    "temperature": 0.7
  }
}
\`\`\`

- **primary** — the main model for complex tasks
- **default** — fallback model for lightweight tasks (cheaper/faster)
- **thinking** — \`"disabled"\` | \`"adaptive"\` | \`"stream"\` — enables extended thinking for supported models
- **maxTokens** — cap per response; lower = cheaper, higher = longer answers
- **temperature** — 0.0 (deterministic) to 1.0 (creative); 0.7 is a good default

---

## memory

Controls how the agent stores and recalls context.

\`\`\`json
{
  "memory": {
    "enabled": true,
    "contextWindow": 50,
    "dailyNotesPath": "memory/",
    "longTermPath": "MEMORY.md",
    "autoSummarize": true,
    "summarizeAfter": 100
  }
}
\`\`\`

- **contextWindow** — how many recent messages to include in each prompt (higher = smarter but slower)
- **dailyNotesPath** — where daily memory files are written (relative to workspace)
- **longTermPath** — the curated long-term memory file
- **autoSummarize** — automatically compress old context into summaries
- **summarizeAfter** — trigger summarization after N messages in a session

---

## workspace

\`\`\`json
{
  "workspace": {
    "path": "~/my-agent",
    "skillsPath": "skills/",
    "autoCommit": true,
    "commitMessage": "auto: workspace update"
  }
}
\`\`\`

- **path** — absolute or \`~\`-relative path to your workspace folder
- **skillsPath** — where skills live inside the workspace
- **autoCommit** — commit workspace changes automatically (useful for tracking memory edits)

---

## gateway

The gateway is OpenClaw's background service that handles routing, messaging bridges, and cron jobs.

\`\`\`json
{
  "gateway": {
    "port": 3000,
    "bind": "127.0.0.1",
    "remote": {
      "enabled": false,
      "url": "https://your-domain.com"
    },
    "auth": {
      "token": "your-secret-token"
    }
  }
}
\`\`\`

- **port** — the web UI and API port (default 3000)
- **bind** — \`127.0.0.1\` for local only, \`0.0.0.0\` to expose on your network (use with caution)
- **remote.url** — set this when running behind a reverse proxy (needed for WhatsApp callbacks)
- **auth.token** — secures the API; always set a strong token if bind is not localhost

---

## plugins

Enable and configure individual plugin integrations.

\`\`\`json
{
  "plugins": {
    "entries": {
      "whatsapp": {
        "enabled": true,
        "allowedNumbers": ["+32XXXXXXXXX"]
      },
      "telegram": {
        "enabled": false,
        "botToken": "...",
        "allowedChatIds": []
      },
      "discord": {
        "enabled": false,
        "token": "...",
        "allowedGuildIds": []
      }
    }
  }
}
\`\`\`

Each plugin has its own options — check the relevant guide for details on each one.

---

## security

\`\`\`json
{
  "security": {
    "riskTolerance": "medium",
    "allowShellExec": true,
    "allowFileWrite": true,
    "allowNetworkRequests": true,
    "sandboxSkills": false,
    "trustedDomains": ["api.anthropic.com", "clawhub.ai"]
  }
}
\`\`\`

- **riskTolerance** — \`"low"\` (asks before most actions) | \`"medium"\` (balanced) | \`"high"\` (autonomous)
- **allowShellExec** — lets skills run shell commands; disable if untrusted skills are installed
- **allowFileWrite** — lets the agent write files outside the workspace
- **sandboxSkills** — runs each skill in an isolated process (slower but safer)
- **trustedDomains** — domains the agent can make network requests to without confirmation

---

## Environment variables

Any config value can be overridden with an env var using the pattern \`OPENCLAW_<SECTION>_<KEY>\`:

\`\`\`bash
OPENCLAW_MODEL_PRIMARY=anthropic/claude-opus-4-5
OPENCLAW_GATEWAY_PORT=8080
OPENCLAW_SECURITY_RISKTOLERANCE=low
\`\`\`

Environment variables always win over \`config.json\` values.`,
  },

  'automate-standups': {
    title: 'Automating Daily Standups with OpenClaw',
    category: 'AUTOMATION',
    categoryColor: '#4ECCA3',
    difficulty: 'Intermediate',
    difficultyColor: '#FEBC2E',
    readTime: '10 min',
    updated: '2026-03-28',
    tags: ['automation', 'slack', 'workflow', 'cron'],
    content: `## The idea

Every morning at 9 AM, OpenClaw wakes up, checks what you did yesterday (git commits, calendar events, open tasks), writes a standup message in plain English, and sends it to Slack or WhatsApp — without you touching anything.

This guide sets that up from scratch.

---

## Prerequisites

- OpenClaw installed and running
- A Slack workspace (or WhatsApp — we'll cover both)
- Your project git repo accessible from the machine running OpenClaw

---

## Step 1 — Create the standup script

Create a script that gathers context and asks OpenClaw to write the standup:

\`\`\`bash
mkdir -p ~/my-agent/scripts
cat > ~/my-agent/scripts/standup.sh << 'EOF'
#!/bin/bash

# Yesterday's git commits (across all repos you care about)
COMMITS=$(git -C ~/your-project log --since="yesterday 00:00" --until="today 00:00" \
  --pretty=format:"- %s" --author="$(git config user.email)" 2>/dev/null || echo "- No commits yesterday")

# Today's calendar events (requires gog skill)
CALENDAR=$(gog calendar list --today --format=text 2>/dev/null || echo "- No events found")

DATE=$(date +"%A %B %d")

echo "Generate a brief daily standup message for $DATE.

Yesterday's commits:
$COMMITS

Today's calendar:
$CALENDAR

Format:
- What I did yesterday (from commits)
- What I'm doing today (from calendar/plans)
- Any blockers (say 'None' if nothing obvious)

Keep it concise and professional. Max 5 bullet points total."
EOF
chmod +x ~/my-agent/scripts/standup.sh
\`\`\`

Test it works:

\`\`\`bash
bash ~/my-agent/scripts/standup.sh
\`\`\`

You should see a prompt that looks reasonable. Adjust the git path and format to match your setup.

---

## Step 2 — Set up the cron job in OpenClaw

OpenClaw has a built-in cron system. Add a job via the web UI or directly via config.

**Via the web UI:**
1. Go to \`http://localhost:3000\`
2. Open Settings → Cron Jobs → New Job
3. Schedule: \`0 9 * * 1-5\` (9 AM, Monday–Friday)
4. Payload: Agent Turn — message: \`run scripts/standup.sh and send the result to Slack channel #standup\`

**Via config.json:**

\`\`\`json
{
  "cron": {
    "jobs": [
      {
        "id": "daily-standup",
        "name": "Daily Standup",
        "enabled": true,
        "schedule": {
          "kind": "cron",
          "expr": "0 9 * * 1-5",
          "tz": "Europe/Brussels"
        },
        "payload": {
          "kind": "agentTurn",
          "message": "Run scripts/standup.sh to get context, then write and send my daily standup to Slack channel #standup",
          "timeoutSeconds": 120
        }
      }
    ]
  }
}
\`\`\`

---

## Step 3 — Connect Slack (optional)

If you want delivery to Slack, install the Slack skill:

\`\`\`bash
clawhub install slack
\`\`\`

Then authenticate:

\`\`\`bash
openclaw skill slack auth
\`\`\`

Follow the OAuth flow — it'll open a browser window. Once done, test it:

\`\`\`bash
openclaw skill slack send --channel "#standup" --message "Test from OpenClaw ✅"
\`\`\`

---

## Step 4 — Use WhatsApp instead (simpler)

If you'd rather get it on WhatsApp (already set up from the [WhatsApp guide](/guides/connect-whatsapp)), change the cron payload to:

\`\`\`json
"message": "Run scripts/standup.sh to get context, write my standup, then send it to me via WhatsApp at +32XXXXXXXXX"
\`\`\`

---

## Customising the standup

The script is just a bash file — you can add anything:

- **Jira tickets:** use the Jira CLI to pull your in-progress issues
- **GitHub PRs:** \`gh pr list --assignee @me --state open\`
- **Todo list:** read a plain text file with today's tasks
- **Weather:** pipe in wttr.in output if your commute depends on it

---

## Result

Every weekday at 9 AM you'll receive something like:

> **Daily Standup — Monday March 30**
> **Yesterday:** Finished auth middleware refactor, reviewed PR #42, fixed deploy pipeline bug
> **Today:** Code review for API changes, team sync at 11 AM, start on rate limiting feature
> **Blockers:** None`,
  },

  'google-calendar-email': {
    title: 'Connecting Google Calendar & Gmail',
    category: 'INTEGRATIONS',
    categoryColor: '#4ECCA3',
    difficulty: 'Intermediate',
    difficultyColor: '#FEBC2E',
    readTime: '14 min',
    updated: '2026-03-28',
    tags: ['google', 'calendar', 'email', 'oauth'],
    content: `## What the gog skill does

The **gog** skill (Google Workspace CLI) gives OpenClaw full access to your Google account: read and create calendar events, read and send Gmail, manage Drive files, access Contacts, and work with Sheets and Docs — all from natural language.

This guide covers setup and the most useful everyday commands.

---

## Prerequisites

- OpenClaw installed and running
- A Google account
- Node.js 18+ (for the OAuth flow)

---

## Step 1 — Install gog

\`\`\`bash
clawhub install gog
\`\`\`

Restart OpenClaw:

\`\`\`bash
openclaw restart
\`\`\`

---

## Step 2 — Create a Google OAuth app

Google requires you to create your own OAuth credentials (it's free, takes 5 minutes):

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or use an existing one)
3. Go to **APIs & Services → Library** and enable:
   - Google Calendar API
   - Gmail API
   - Google Drive API (optional)
4. Go to **APIs & Services → Credentials → Create Credentials → OAuth client ID**
5. Application type: **Desktop app**
6. Download the JSON file — save it as \`~/.openclaw/gog-credentials.json\`

---

## Step 3 — Configure gog

Add to your \`~/.openclaw/config.json\`:

\`\`\`json
{
  "plugins": {
    "entries": {
      "gog": {
        "enabled": true,
        "credentialsPath": "~/.openclaw/gog-credentials.json",
        "tokenPath": "~/.openclaw/gog-token.json",
        "scopes": [
          "https://www.googleapis.com/auth/calendar",
          "https://www.googleapis.com/auth/gmail.modify",
          "https://www.googleapis.com/auth/drive.file"
        ]
      }
    }
  }
}
\`\`\`

---

## Step 4 — Authenticate

\`\`\`bash
openclaw skill gog auth
\`\`\`

This opens your browser to the Google OAuth consent screen. Sign in, approve the permissions, and you're done. The token is saved locally — you won't need to do this again unless you revoke access.

---

## Step 5 — Test it

Ask your agent:

> What's on my calendar today?

> Do I have any meetings tomorrow afternoon?

> Send an email to john@example.com with subject "Quick question" and ask if he's free for a call Thursday

---

## Calendar commands

**Read events:**

> What do I have on Friday?
> Show me my calendar for next week
> Am I free at 3 PM tomorrow?

**Create events:**

> Schedule a meeting with Sarah tomorrow at 2 PM for 1 hour called "Project sync"
> Block 9–11 AM on Thursday as "Deep work — no interruptions"

**Update/delete:**

> Move my 3 PM call to 4 PM
> Cancel the meeting with the design team on Wednesday

---

## Gmail commands

**Read:**

> Check my inbox — anything urgent?
> Find the email from Amazon about my last order
> Show me unread emails from today

**Write and send:**

> Draft a reply to the last email from my manager saying I'll have the report ready by Friday
> Send a follow-up to the job application I sent last week

**Manage:**

> Archive all newsletters older than 7 days
> Mark everything from notifications@github.com as read

---

## Multiple Google accounts

To use a second account, set up a second credentials file:

\`\`\`json
{
  "plugins": {
    "entries": {
      "gog-work": {
        "enabled": true,
        "credentialsPath": "~/.openclaw/gog-work-credentials.json",
        "tokenPath": "~/.openclaw/gog-work-token.json",
        "alias": "work"
      },
      "gog-personal": {
        "enabled": true,
        "credentialsPath": "~/.openclaw/gog-personal-credentials.json",
        "tokenPath": "~/.openclaw/gog-personal-token.json",
        "alias": "personal"
      }
    }
  }
}
\`\`\`

Then specify in your prompt:

> Check my **work** calendar for tomorrow
> Send this from my **personal** Gmail

---

## Troubleshooting

**"Access blocked" during OAuth?**
Your app is in test mode — add your Google account as a test user in Cloud Console → OAuth consent screen → Test users.

**"Insufficient permissions" error?**
Make sure the API (Calendar, Gmail) is enabled in your Cloud project and the correct scopes are in your config.

**Token expired?**
Re-run \`openclaw skill gog auth\` — it will refresh automatically.`,
  },

  'skill-pack-format': {
    title: 'The OpenClaw Skill Pack Format',
    category: 'SKILLS',
    categoryColor: '#FF6B6B',
    difficulty: 'Advanced',
    difficultyColor: '#FF6B6B',
    readTime: '18 min',
    updated: '2026-03-28',
    tags: ['skills', 'packaging', 'format', 'clawhub'],
    content: `## What is a skill pack?

A skill pack is a collection of one or more OpenClaw skills bundled into a distributable ZIP file. You build them once, sell or share them, and users drop them into their OpenClaw workspace with a single command.

This guide covers the full format spec, how to bundle, version, and distribute your packs.

---

## Individual skill structure (recap)

Each skill is a folder:

\`\`\`
weather/
├── SKILL.md          ← required
├── scripts/
│   └── fetch.sh
└── references/
    └── units.json
\`\`\`

**SKILL.md minimum spec:**

\`\`\`markdown
# Skill Name

## Description
What does this skill do? (1-2 sentences, used for skill matching)

## When to use
What user requests should trigger this skill?

## Instructions
Step-by-step instructions the agent follows.
\`\`\`

**Optional SKILL.md fields:**

\`\`\`markdown
## Requirements
- External CLI: curl
- API key: WEATHER_API_KEY (set in config)

## Examples
- "What's the weather in Brussels?" → fetch and display
- "Will it rain tomorrow?" → forecast query

## Version
1.2.0

## Author
Your Name <you@example.com>
\`\`\`

---

## Skill pack structure

A pack bundles multiple skills under a single root folder:

\`\`\`
openclaw-starter-kit/
├── PACK.md           ← pack manifest (required)
├── install.sh        ← install script (recommended)
├── README.md         ← user-facing docs
└── skills/
    ├── weather/
    │   └── SKILL.md
    ├── wacli/
    │   └── SKILL.md
    └── calendar/
        └── SKILL.md
\`\`\`

---

## PACK.md format

\`\`\`markdown
# Pack Name

## Description
What does this pack do? What problem does it solve?

## Skills included
- weather — current conditions and forecasts
- wacli — WhatsApp messaging bridge  
- calendar — Google Calendar read/write

## Requirements
- OpenClaw v1.0.0 or higher
- Node.js 18+
- Internet connection for weather and calendar

## Install
Run install.sh or copy the skills/ folder to your workspace.

## Version
1.0.0

## License
Commercial — see LICENSE
\`\`\`

---

## Writing a good install.sh

\`\`\`bash
#!/bin/bash
set -e

WORKSPACE="\${OPENCLAW_WORKSPACE:-~/my-agent}"
SKILLS_DIR="$WORKSPACE/skills"

echo "Installing OpenClaw Starter Kit..."

mkdir -p "$SKILLS_DIR"

# Copy each skill
for skill in skills/*/; do
  skill_name=$(basename "$skill")
  if [ -d "$SKILLS_DIR/$skill_name" ]; then
    echo "  Updating $skill_name..."
  else
    echo "  Installing $skill_name..."
  fi
  cp -r "$skill" "$SKILLS_DIR/"
done

echo "Done! Restart OpenClaw to activate: openclaw restart"
\`\`\`

Make it executable before bundling: \`chmod +x install.sh\`

---

## Versioning

Follow [semver](https://semver.org):

- \`1.0.0\` — initial release
- \`1.0.1\` — bug fix (typo in SKILL.md, broken script)
- \`1.1.0\` — new feature (added a new skill or command)
- \`2.0.0\` — breaking change (renamed skills, changed interface)

Keep a \`CHANGELOG.md\` in the root — buyers appreciate it.

---

## Bundling into a ZIP

\`\`\`bash
# From the parent directory of your pack folder
zip -r openclaw-starter-kit-v1.0.0.zip openclaw-starter-kit/ \
  --exclude "*.DS_Store" \
  --exclude "*__pycache__*" \
  --exclude "*.git*"
\`\`\`

Test the ZIP before distributing:

\`\`\`bash
mkdir /tmp/test-install
cd /tmp/test-install
unzip ~/openclaw-starter-kit-v1.0.0.zip
cd openclaw-starter-kit
bash install.sh
\`\`\`

---

## Publishing to clawhub.ai

[ClawHub](https://clawhub.ai) is the official skill pack registry.

\`\`\`bash
# Install the clawhub CLI
npm install -g clawhub

# Login
clawhub login

# Publish (run from inside the pack folder)
clawhub publish
\`\`\`

Your PACK.md metadata is used for the listing. Choose a clear, searchable name.

For paid packs, link your Gumroad product URL in the ClawHub listing — users get redirected to purchase before the download link is revealed.

---

## Selling on Gumroad

1. Create a product at [gumroad.com](https://gumroad.com)
2. Upload the ZIP as the product file
3. Write a good description — what skills are included, what they do, what's required
4. Set a cover image (1280×960 recommended)
5. Price it (€5–€15 for most packs is the sweet spot)

**Gumroad tips:**
- Enable "Pay what you want" with a minimum for more conversions
- Offer a free sample skill to build trust
- Add a changelog as a Gumroad post when you ship updates — existing buyers get notified automatically`,
  },

  'finance-assistant': {
    title: 'OpenClaw as a Personal Finance Assistant',
    category: 'AUTOMATION',
    categoryColor: '#4ECCA3',
    difficulty: 'Beginner',
    difficultyColor: '#4ECCA3',
    readTime: '11 min',
    updated: '2026-03-28',
    tags: ['finance', 'csv', 'automation', 'budgeting'],
    content: `## Why local finance tracking?

Most finance apps send your data to the cloud. OpenClaw keeps everything on your machine — your bank data never leaves your device. You get the intelligence of an AI assistant with the privacy of a local tool.

No API keys, no subscriptions, no bank integrations needed. Just export a CSV and ask questions.

---

## Step 1 — Export your bank transactions

Every bank lets you export transactions as CSV. Find this in your bank's web interface:

- **KBC / BNP / ING Belgium:** Account → Download → CSV or Excel
- **Revolut:** Settings → Statements → CSV
- **N26:** Account → Export → CSV

Save the file somewhere like \`~/finances/transactions-march.csv\`

---

## Step 2 — Ask OpenClaw to analyse it

Just drop the file in your workspace and ask:

> Analyse the transactions in finances/transactions-march.csv and give me a summary by category

OpenClaw will read the CSV, figure out the columns, and start categorising automatically. No configuration needed.

**Example output:**

> Here's your March spending summary:
> - 🍔 Food & dining: €342 (34 transactions)
> - 🏠 Housing: €850 (rent + utilities)
> - 🚗 Transport: €87 (fuel, parking, De Lijn)
> - 🛍️ Shopping: €156 (Amazon, Zalando)
> - 💊 Health: €45 (pharmacy)
> - 📱 Subscriptions: €38 (Netflix, Spotify, Claude Pro)
> **Total spent: €1,518 | Largest single expense: rent €750**

---

## Step 3 — Ask follow-up questions

Once the file is loaded in context, you can drill down:

> Which subscriptions am I paying for? List them all with amounts.

> How much did I spend on food delivery vs groceries?

> Compare this month to last month — did I spend more or less?

> Find any unusual transactions — anything over €100 I might have forgotten about

> What day of the week do I spend the most?

---

## Step 4 — Set up a weekly summary

Create a simple script that prompts OpenClaw with your latest export:

\`\`\`bash
cat > ~/my-agent/scripts/finance-summary.sh << 'EOF'
#!/bin/bash
LATEST=$(ls -t ~/finances/*.csv | head -1)
echo "Read $LATEST and give me:
1. Total spent this period
2. Top 5 spending categories with amounts
3. Any recurring charges I should review
4. One suggestion to reduce spending

Keep it brief — bullet points only."
EOF
chmod +x ~/my-agent/scripts/finance-summary.sh
\`\`\`

Then add a weekly cron job (every Sunday evening):

\`\`\`json
{
  "id": "weekly-finance",
  "name": "Weekly Finance Review",
  "schedule": {
    "kind": "cron",
    "expr": "0 19 * * 0",
    "tz": "Europe/Brussels"
  },
  "payload": {
    "kind": "agentTurn",
    "message": "Run scripts/finance-summary.sh and send the result to me via WhatsApp"
  }
}
\`\`\`

---

## Step 5 — Budget alerts

Tell OpenClaw your budget limits in USER.md or SOUL.md:

\`\`\`
Monthly budgets:
- Food & dining: €300
- Entertainment: €50
- Shopping: €100
\`\`\`

Then ask:

> Check my transactions from this month against my budget limits and warn me about anything I'm close to exceeding

Or automate it mid-month:

> On the 15th, compare my spending to my monthly budgets and send me an alert if I'm on track to exceed anything

---

## Useful prompts cheatsheet

\`\`\`
"Categorise all transactions and show totals per category"
"List all subscriptions and recurring charges"
"How much did I spend at [merchant name]?"
"Find duplicate charges"
"What's my average daily spend this month?"
"Show me my 10 biggest expenses"
"Which category grew the most vs last month?"
"Am I on track for my €1500/month budget?"
\`\`\`

---

## Tips

- **Combine multiple months:** just upload several CSVs and ask OpenClaw to merge them
- **Different banks:** if you have accounts at multiple banks, export all of them and ask OpenClaw to analyse them together
- **Privacy:** your CSV data is only in your local session context — it's not stored anywhere permanently unless you explicitly ask OpenClaw to save it`,
  },

  'vps-setup': {
    title: 'Running OpenClaw on a VPS (Always-On)',
    category: 'SETUP',
    categoryColor: '#5E6AD2',
    difficulty: 'Advanced',
    difficultyColor: '#FF6B6B',
    readTime: '25 min',
    updated: '2026-03-28',
    tags: ['vps', 'server', 'deploy', 'systemd'],
    content: `## Why run on a VPS?

Running OpenClaw on your laptop means it stops working when the laptop sleeps, closes, or loses connection. A VPS gives you a server that runs 24/7 — so your agent is always available via WhatsApp, can run scheduled tasks at any hour, and doesn't depend on your home connection.

A basic VPS (1 vCPU, 1GB RAM) on Hetzner, DigitalOcean, or Vultr costs €4–6/month and is more than enough.

---

## Prerequisites

- A VPS running Ubuntu 22.04 or 24.04
- SSH access to the server
- Your domain (optional but recommended for HTTPS)
- Basic Linux command line comfort

---

## Step 1 — Initial server setup

SSH into your server:

\`\`\`bash
ssh root@your-server-ip
\`\`\`

Update packages and create a non-root user:

\`\`\`bash
apt update && apt upgrade -y
adduser openclaw
usermod -aG sudo openclaw
# Copy SSH keys to new user
rsync --archive --chown=openclaw:openclaw ~/.ssh /home/openclaw/
\`\`\`

Log out and back in as the new user:

\`\`\`bash
ssh openclaw@your-server-ip
\`\`\`

---

## Step 2 — Install Node.js

\`\`\`bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
node --version  # should show v22.x.x
\`\`\`

---

## Step 3 — Install OpenClaw

\`\`\`bash
sudo npm install -g openclaw
openclaw --version
\`\`\`

Create your workspace:

\`\`\`bash
mkdir ~/agent
cd ~/agent
openclaw init
\`\`\`

Add your API key:

\`\`\`bash
mkdir -p ~/.openclaw
cat > ~/.openclaw/config.json << 'EOF'
{
  "providers": {
    "anthropic": {
      "apiKey": "sk-ant-your-key-here"
    }
  },
  "workspace": {
    "path": "~/agent"
  },
  "gateway": {
    "port": 3000,
    "bind": "127.0.0.1"
  }
}
EOF
\`\`\`

Test it starts:

\`\`\`bash
openclaw start
# Press Ctrl+C once you've confirmed it works
\`\`\`

---

## Step 4 — Create a systemd service

This keeps OpenClaw running and restarts it automatically if it crashes:

\`\`\`bash
sudo nano /etc/systemd/system/openclaw.service
\`\`\`

Paste this (replace \`openclaw\` with your username if different):

\`\`\`ini
[Unit]
Description=OpenClaw AI Agent
After=network.target
Wants=network-online.target

[Service]
Type=simple
User=openclaw
WorkingDirectory=/home/openclaw/agent
ExecStart=/usr/bin/openclaw start
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal
Environment=NODE_ENV=production
Environment=ANTHROPIC_API_KEY=sk-ant-your-key-here

[Install]
WantedBy=multi-user.target
\`\`\`

Enable and start the service:

\`\`\`bash
sudo systemctl daemon-reload
sudo systemctl enable openclaw
sudo systemctl start openclaw
sudo systemctl status openclaw
\`\`\`

Check logs at any time:

\`\`\`bash
journalctl -u openclaw -f
\`\`\`

---

## Step 5 — Install and configure nginx

Nginx acts as a reverse proxy — it handles HTTPS and forwards traffic to OpenClaw.

\`\`\`bash
sudo apt install -y nginx
\`\`\`

Create the site config:

\`\`\`bash
sudo nano /etc/nginx/sites-available/openclaw
\`\`\`

\`\`\`nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 300;
        proxy_connect_timeout 300;
    }
}
\`\`\`

Enable it:

\`\`\`bash
sudo ln -s /etc/nginx/sites-available/openclaw /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
\`\`\`

---

## Step 6 — Add SSL with Let's Encrypt

\`\`\`bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
\`\`\`

Follow the prompts. Certbot automatically edits your nginx config to add HTTPS and sets up auto-renewal.

Test auto-renewal works:

\`\`\`bash
sudo certbot renew --dry-run
\`\`\`

---

## Step 7 — Update OpenClaw config for remote access

Tell OpenClaw it's running behind a public URL (needed for WhatsApp callbacks etc.):

\`\`\`json
{
  "gateway": {
    "port": 3000,
    "bind": "127.0.0.1",
    "remote": {
      "enabled": true,
      "url": "https://your-domain.com"
    }
  }
}
\`\`\`

Restart the service:

\`\`\`bash
sudo systemctl restart openclaw
\`\`\`

---

## Step 8 — Firewall

Allow only SSH, HTTP, and HTTPS:

\`\`\`bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
\`\`\`

Port 3000 stays closed to the outside — nginx handles everything.

---

## Accessing your agent

Open \`https://your-domain.com\` in any browser, from anywhere. Your agent is live.

For WhatsApp access, follow the [WhatsApp bridge guide](/guides/connect-whatsapp) — the session will now persist 24/7 since the server never sleeps.

---

## Useful management commands

\`\`\`bash
# View live logs
journalctl -u openclaw -f

# Restart after config changes
sudo systemctl restart openclaw

# Check if it's running
sudo systemctl status openclaw

# Update OpenClaw
sudo npm install -g openclaw
sudo systemctl restart openclaw

# Check nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
\`\`\``,
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
    title: `\${guide.title} — ClawMatic`,
    description: `\${guide.readTime} read · \${guide.difficulty} · \${guide.tags.join(', ')}`,
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
            <span className="tag" style={{ background: `\${guide.categoryColor}15`, color: guide.categoryColor, border: `1px solid \${guide.categoryColor}35` }}>
              {guide.category}
            </span>
            <span className="tag" style={{ background: `\${guide.difficultyColor}10`, color: guide.difficultyColor }}>
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
