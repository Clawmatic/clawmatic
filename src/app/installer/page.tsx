import { ArrowRight, Download, ShieldCheck, Settings2, Sparkles, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const installerPlatforms = ["Windows", "macOS", "Linux"];

const benefits = [
  "OpenClaw installed for you",
  "Workspace created automatically",
  "Default model configured",
  "API key stored securely",
  "Web tools enabled",
  "Gateway started",
  "Default skills installed",
  "Channel setup opened at the end",
];

const steps = [
  "Download the installer for your operating system",
  "Run it once",
  "Let it finish the setup automatically",
  "Connect your channel",
  "Start using OpenClaw",
];

export default function InstallerPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              Installer landing page
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Install OpenClaw in <span className="gradient-text">one run</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8">
              One download. One click. One working setup.
              ClawMatic’s installer sets up OpenClaw automatically, installs the essentials,
              and opens the final channel setup step for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="text-base px-8 py-6" asChild>
                <a href="#download">
                  Download installer
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="text-base px-8 py-6" asChild>
                <a href="#how-it-works">
                  See what it does
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 mb-12">
              {installerPlatforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
                >
                  {platform}
                </span>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground/90">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-lg" id="download">
              <h2 className="text-2xl font-semibold mb-3">Download area</h2>
              <p className="text-muted-foreground mb-6">
                Add the real installer links here when the build is ready.
              </p>
              <div className="space-y-3">
                <button className="w-full rounded-xl bg-primary px-5 py-3 text-primary-foreground font-medium opacity-60 cursor-not-allowed text-left">
                  Windows download link goes here
                </button>
                <button className="w-full rounded-xl bg-primary px-5 py-3 text-primary-foreground font-medium opacity-60 cursor-not-allowed text-left">
                  macOS download link goes here
                </button>
                <button className="w-full rounded-xl bg-primary px-5 py-3 text-primary-foreground font-medium opacity-60 cursor-not-allowed text-left">
                  Linux download link goes here
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-lg" id="how-it-works">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Settings2 className="h-5 w-5" />
                <h2 className="text-2xl font-semibold">How it works</h2>
              </div>
              <ol className="space-y-4">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-sm text-muted-foreground pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Globe className="h-5 w-5" />
                <h2 className="text-2xl font-semibold">What’s left manual</h2>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Connecting your own messaging channel</li>
                <li>• Confirming any OS security prompt</li>
                <li>• Choosing a custom model if you want to override the default</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
