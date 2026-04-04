import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Custom AI automation services for small and mid-sized businesses. Email, CRM, reporting, scheduling, customer support, and data processing — all built and managed for you.',
};

const CALENDLY_URL = 'https://calendly.com/clawmatic/30min';

const services = [
  {
    id: '01',
    title: 'Email automation',
    intro:
      'We build AI systems that read, sort, draft, and respond to emails — automatically. Your inbox becomes manageable. Your response times drop to minutes.',
    examples: [
      'Auto-triage inbound emails by urgency and category',
      'Draft personalised replies for approval',
      'Automated follow-up sequences for leads',
      'Flag emails that need human attention immediately',
    ],
  },
  {
    id: '02',
    title: 'Lead follow-up & CRM',
    intro:
      'Never let a lead go cold again. We build automated outreach systems that follow up at the right time with the right message — and update your CRM without anyone touching it.',
    examples: [
      'Automated follow-up after first contact',
      'CRM data entry from email and form submissions',
      'Lead scoring and priority flagging',
      'Personalised outreach sequences',
    ],
  },
  {
    id: '03',
    title: 'Reporting & dashboards',
    intro:
      'We eliminate the hours spent pulling data and building reports manually. Your dashboards update themselves. Reports land in your inbox on schedule.',
    examples: [
      'Automated weekly/monthly performance reports',
      'Data pulled from multiple sources, formatted automatically',
      'Scheduled delivery to your team by email',
      'Custom KPI dashboards that update in real time',
    ],
  },
  {
    id: '04',
    title: 'Scheduling & calendar management',
    intro:
      'Meeting coordination, reminders, and calendar management — handled by AI so your team stops losing time to back-and-forth.',
    examples: [
      'Automated meeting scheduling from inbound requests',
      'Reminder sequences for appointments and deadlines',
      'Calendar blocking for focused work',
      'Follow-up after meetings',
    ],
  },
  {
    id: '05',
    title: 'Customer support automation',
    intro:
      'Your customers get instant answers 24/7. Your team handles only the complex cases that actually need a human.',
    examples: [
      'AI that answers common questions via email, chat, or WhatsApp',
      'Instant triage — simple questions answered, complex ones escalated',
      'After-hours support that never sleeps',
      'Consistent, on-brand responses every time',
    ],
  },
  {
    id: '06',
    title: 'Data entry & processing',
    intro:
      'We eliminate manual data work entirely. Extract, transform, and move data between your systems — automatically, accurately, without anyone touching a spreadsheet.',
    examples: [
      'Extract data from invoices, forms, and documents',
      'Sync data between systems without manual export/import',
      'Automated data validation and cleaning',
      'Structured outputs from unstructured inputs',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 relative border-b border-border/40">
        <div className="absolute inset-0 hero-grid opacity-15" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 60%, rgba(78,204,163,0.07) 0%, transparent 60%)',
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-5">
            What we build
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-5 max-w-3xl">
            Custom AI automation
            <br />
            for every part of your business.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Every system is built specifically for your operations. Nothing off-the-shelf.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-0 max-w-3xl">
            {services.map((s) => (
              <div
                key={s.id}
                className="grid sm:grid-cols-[72px_1fr] gap-6 py-12 border-b border-border/40 first:pt-0"
              >
                <div className="text-4xl font-bold text-primary/20 leading-none pt-1 select-none">
                  {s.id}
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{s.intro}</p>
                  <ul className="space-y-2">
                    {s.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Not sure which automation your business needs first?
          </h2>
          <p className="text-muted-foreground mb-8">That is exactly what the free audit is for.</p>
          <Button variant="hero" size="lg" asChild className="text-base px-8 py-6">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book a free 30-minute audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
