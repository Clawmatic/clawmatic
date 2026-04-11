import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Automation for Accounting Firms | ClawMatic',
  description:
    'ClawMatic helps accounting firms automate client onboarding, document collection, reminders, and repetitive admin with practical AI automation.',
  alternates: { canonical: 'https://clawmatic.eu/for-accounting-firms' },
  openGraph: {
    title: 'ClawMatic — AI Automation for Accounting Firms',
    description:
      'Practical AI automation for accounting firms, bookkeepers, and CPA practices. Reduce admin, improve client workflows, and streamline operations.',
    url: 'https://clawmatic.eu/for-accounting-firms',
    type: 'website',
  },
};

export default function ForAccountingFirmsPage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
      <section style={{ padding: '120px 24px 90px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="mono" style={{ color: 'var(--green)', fontSize: 13, letterSpacing: '0.15em', marginBottom: 28 }}>
          § CLAWMATIC ACCOUNTING · PRACTICAL AI AUTOMATION
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(44px, 7vw, 84px)', lineHeight: 0.98,
          letterSpacing: '-0.035em', maxWidth: 900, marginBottom: 32,
        }}>
          Practical AI automation <em style={{ color: 'var(--green)', fontStyle: 'italic' }}>for accounting firms.</em>
        </h1>
        <p style={{ fontSize: 20, color: 'var(--text-dim)', maxWidth: 720, lineHeight: 1.55, marginBottom: 40 }}>
          We help accounting firms reduce manual admin, improve client workflows, and streamline operations with practical automation.
        </p>
        <Link href="/contact" className="btn-primary"
          style={{ display: 'inline-block', padding: '14px 32px', borderRadius: 'var(--radius)', textDecoration: 'none' }}>
          Book a free automation audit →
        </Link>
        <p style={{ color: 'var(--text-dim)', marginTop: 18, fontSize: 14 }}>
          For accounting firms, bookkeepers, and CPA practices.
        </p>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <div className="mono" style={{ color: 'var(--text-dim)', fontSize: 12, marginBottom: 16 }}>§01 — OVERVIEW</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px,4vw,48px)', letterSpacing: '-0.02em', marginBottom: 24, maxWidth: 820 }}>
          Less manual coordination. <em style={{ color: 'var(--green)' }}>Fewer bottlenecks.</em>
        </h2>
        <p style={{ color: 'var(--text-dim)', maxWidth: 760, fontSize: 18, lineHeight: 1.7 }}>
          Accounting firms deal with a constant flow of onboarding, follow-ups, document requests, reminders, and internal handoffs. The work is important, but a lot of the coordination around it is repetitive. ClawMatic helps accounting firms automate the operational work that slows teams down.
        </p>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <div className="mono" style={{ color: 'var(--text-dim)', fontSize: 12, marginBottom: 16 }}>§02 — COMMON PROBLEMS</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          {[
            'Too much time spent chasing clients for documents and missing information',
            'Slow, inconsistent onboarding for new clients',
            'Manual handoffs between admin, bookkeeping, and accounting work',
            'Important reminders relying on memory or manual follow-up',
            'Work scattered across inboxes, spreadsheets, and portals',
            'Skilled staff spending time on coordination instead of higher-value work',
          ].map((item, i) => (
            <div key={i} className="pixel-border card-hover" style={{ padding: 28, borderRadius: 'var(--radius)' }}>
              <div className="mono" style={{ color: 'var(--green)', fontSize: 11, marginBottom: 10 }}>↳ 0{i + 1}</div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--text)' }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <div className="mono" style={{ color: 'var(--text-dim)', fontSize: 12, marginBottom: 16 }}>§03 — WHAT WE AUTOMATE</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px,4vw,48px)', letterSpacing: '-0.02em', marginBottom: 20, maxWidth: 760 }}>
          The repetitive work around <em style={{ color: 'var(--purple-light)' }}>real accounting work.</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24 }}>
          {[
            ['Client intake and qualification workflows', 'Capture the right information early and move clients into the right process without manual back-and-forth.'],
            ['Onboarding forms and follow-ups', 'Send forms, reminders, and next-step emails automatically when a new client comes in.'],
            ['Document request sequences', 'Reduce manual chasing with structured requests, reminders, and internal flags for missing items.'],
            ['Internal task routing and handoffs', 'Route work to the right person or team when a step is completed.'],
            ['Deadline and status reminders', 'Keep clients and internal teams on track with recurring reminders and workflow triggers.'],
            ['Routine communication workflows', 'Automate confirmations, updates, and basic next-step communication while keeping the human relationship where it matters.'],
          ].map(([title, body]) => (
            <div key={title} className="pixel-border-purple card-hover" style={{ padding: 28, borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, marginBottom: 12 }}>{title}</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: 15, lineHeight: 1.65 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '90px 24px', borderTop: '1px solid var(--border)', background: 'var(--bg-card)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="mono" style={{ color: 'var(--green)', fontSize: 12, marginBottom: 16 }}>§04 — WHY CLAWMATIC</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px,4vw,48px)', letterSpacing: '-0.02em', marginBottom: 20, maxWidth: 820 }}>
            Built for practical workflows, <em style={{ color: 'var(--green)' }}>not vague AI promises.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 32 }}>
            {[
              ['Real operational pain', 'We focus on repetitive workflow problems that actually slow accounting firms down.'],
              ['Fits your existing process', 'We design automation around the way your firm already works where possible.'],
              ['Understandable systems', 'Your team should be able to use the result without needing a computer science degree.'],
              ['Business-first implementation', 'The goal is to save time, reduce friction, and improve consistency — not to overengineer everything.'],
            ].map(([t, b]) => (
              <div key={t}>
                <div className="mono" style={{ color: 'var(--purple-light)', fontSize: 12, letterSpacing: '0.12em', marginBottom: 10 }}>↳ {t.toUpperCase()}</div>
                <p style={{ color: 'var(--text-dim)', fontSize: 15, lineHeight: 1.6 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <div className="mono" style={{ color: 'var(--text-dim)', fontSize: 12, marginBottom: 16 }}>§05 — EXAMPLE WORKFLOWS</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          {[
            ['New client onboarding', 'When a lead becomes a client, automation can send forms, request information, notify the right team members, and move the process forward automatically.'],
            ['Document collection', 'Automated reminders can request missing documents, follow up at the right time, and flag incomplete cases internally.'],
            ['Internal handoffs', 'When one step is complete, tasks can be routed to the right person based on service type, status, or next action required.'],
            ['Routine client communication', 'Confirmation emails, next-step updates, and status communication can be automated while keeping the human layer where it matters.'],
          ].map(([title, body]) => (
            <div key={title} className="pixel-border card-hover" style={{ padding: 28, borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, marginBottom: 12 }}>{title}</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: 15, lineHeight: 1.65 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '110px 24px', maxWidth: 820, margin: '0 auto', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(36px,5vw,56px)', letterSpacing: '-0.02em', marginBottom: 20 }}>
          See where automation can save your <em style={{ color: 'var(--green)' }}>accounting firm</em> time.
        </h2>
        <p style={{ color: 'var(--text-dim)', maxWidth: 560, margin: '0 auto 32px' }}>
          We offer a free automation audit to identify repetitive workflows, communication bottlenecks, and operational tasks that can be streamlined.
        </p>
        <Link href="/contact" className="btn-primary"
          style={{ display: 'inline-block', padding: '16px 36px', borderRadius: 'var(--radius)', textDecoration: 'none' }}>
          Book a free automation audit →
        </Link>
      </section>
    </div>
  );
}
