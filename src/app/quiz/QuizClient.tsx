'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

// ─── Quiz data ────────────────────────────────────────────────────────────────

const steps = [
  {
    id: 'role',
    question: 'What best describes you?',
    options: [
      { label: 'I run a business', value: 'business' },
      { label: 'I\'m a freelancer or creator', value: 'creator' },
      { label: 'I\'m a student or researcher', value: 'researcher' },
      { label: 'Just exploring', value: 'exploring' },
    ],
  },
  {
    id: 'goal',
    question: 'What do you mostly want AI to help with?',
    options: [
      { label: 'Writing content', value: 'writing' },
      { label: 'Answering customer questions', value: 'support' },
      { label: 'Research and analysis', value: 'research' },
      { label: 'Automating repetitive tasks', value: 'automation' },
    ],
  },
  {
    id: 'technical',
    question: 'How technical are you?',
    options: [
      { label: 'Not technical at all', value: 'none' },
      { label: 'A little — I can follow a guide', value: 'some' },
      { label: 'Pretty comfortable with tech', value: 'comfortable' },
    ],
  },
  {
    id: 'budget',
    question: 'What\'s your budget?',
    options: [
      { label: 'Under €30', value: 'low' },
      { label: '€30–€40', value: 'mid' },
      { label: 'Happy to invest for the right fit', value: 'high' },
    ],
  },
  {
    id: 'timeline',
    question: 'How fast do you need this set up?',
    options: [
      { label: 'Today', value: 'today' },
      { label: 'This week', value: 'week' },
      { label: 'No rush', value: 'whenever' },
    ],
  },
];

// ─── Recommendation logic ─────────────────────────────────────────────────────

type Answers = Record<string, string>;
type PackageId = 'copywriter' | 'support-bot' | 'research';

function getRecommendation(answers: Answers): PackageId {
  const { role, goal } = answers;

  // Support-bot: business role or support goal
  if (role === 'business' || goal === 'support' || goal === 'automation') {
    return 'support-bot';
  }

  // Research: researcher role or research goal
  if (role === 'researcher' || goal === 'research') {
    return 'research';
  }

  // Default: copywriter (creator role or writing goal)
  return 'copywriter';
}

const packageDetails: Record<
  PackageId,
  { name: string; price: string; bestFor: string; description: string; includes: string[]; url: string }
> = {
  'copywriter': {
    name: 'The Copywriter Stack',
    price: '€29',
    bestFor: 'Marketers, content creators, freelance writers',
    description: 'The perfect AI setup for anyone who writes for a living. The right model, the right prompts, ready to use.',
    includes: [
      'Recommended model on OpenRouter',
      'Prompt templates for copywriting',
      'OpenClaw skill suggestions',
      'Setup guide PDF',
    ],
    url: '#',
  },
  'support-bot': {
    name: 'The Support Bot Stack',
    price: '€39',
    bestFor: 'Small businesses, e-commerce, service businesses',
    description: 'Build a support bot that actually helps. Includes the right model, conversation flows, and a 30-min onboarding call.',
    includes: [
      'Recommended model for Q&A + support',
      'Example conversation flows',
      'OpenClaw setup guide',
      '30-min onboarding call',
    ],
    url: '#',
  },
  'research': {
    name: 'The Research Stack',
    price: '€34',
    bestFor: 'Consultants, analysts, researchers, students',
    description: 'Deep research, faster. The best model for multi-step reasoning paired with workflows that actually work.',
    includes: [
      'Recommended model for deep reasoning',
      'Research workflow guide',
      'Prompt templates for analysis',
      'OpenClaw skill suggestions',
    ],
    url: '#',
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function QuizClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const currentStep = steps[step];
  const progress = ((step) / steps.length) * 100;

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  const handleNext = () => {
    if (!selected) return;
    const newAnswers = { ...answers, [currentStep.id]: selected };
    setAnswers(newAnswers);
    setSelected(null);

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  };

  if (done) {
    const rec = getRecommendation(answers);
    const pkg = packageDetails[rec];

    return (
      <div className="min-h-screen bg-background flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl py-16">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Your recommendation is ready
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              {pkg.name}
            </h1>
            <p className="text-muted-foreground">
              Based on your answers, this is the best fit for you.
            </p>
          </div>

          <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 mb-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">
                  <strong className="text-foreground/70">Best for:</strong> {pkg.bestFor}
                </p>
              </div>
              <span className="text-2xl font-bold text-primary flex-shrink-0">{pkg.price}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{pkg.description}</p>
            <div className="mb-6">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                What&apos;s included
              </p>
              <ul className="space-y-2">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Button variant="hero" asChild className="w-full">
              <a href={pkg.url} target="_blank" rel="noopener noreferrer">
                Get this stack
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Want to compare?{' '}
            <Link href="/packages" className="text-primary hover:underline">
              See all packages →
            </Link>
          </p>

          <div className="text-center mt-4">
            <button
              onClick={() => { setStep(0); setAnswers({}); setSelected(null); setDone(false); }}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Start over
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-xl py-16">
        {/* Progress */}
        <div className="mb-10">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>Step {step + 1} of {steps.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {currentStep.question}
          </h1>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {currentStep.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`w-full text-left rounded-xl border p-4 transition-all ${
                selected === option.value
                  ? 'border-primary bg-primary/10 text-foreground'
                  : 'border-border/50 bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
              }`}
            >
              <span className="flex items-center gap-3">
                <span className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-colors ${
                  selected === option.value ? 'border-primary bg-primary' : 'border-border'
                }`} />
                <span className="text-sm font-medium">{option.label}</span>
              </span>
            </button>
          ))}
        </div>

        <Button
          variant="hero"
          onClick={handleNext}
          disabled={!selected}
          className="w-full"
        >
          {step < steps.length - 1 ? 'Next' : 'See my recommendation'}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
