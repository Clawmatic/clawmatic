import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Automation for Recruitment Agencies | ClawMatic',
  description:
    'ClawMatic helps recruitment and staffing agencies automate outreach, scheduling, follow-ups, and repetitive admin with practical AI automation.',
  alternates: { canonical: 'https://clawmatic.eu/for-recruitment-agencies' },
  openGraph: {
    title: 'ClawMatic — AI Automation for Recruitment Agencies',
    description:
      'Practical AI automation for recruitment and staffing agencies. Reduce admin, speed up candidate workflows, and streamline operations.',
    url: 'https://clawmatic.eu/for-recruitment-agencies',
    type: 'website',
  },
};

export default function ForRecruitmentAgenciesPage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
      <section style={{ padding: '120px 24px 90px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="mono" style={{ color: 'var(--green)', fontSize: 13, letterSpacing: '0.15em', marginBottom: 28 }}>
          § CLAWMATIC RECRUITMENT · PRACTICAL AI AUTOMATION
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(44px, 7vw, 84px)', lineHeight: 0.98,
          letterSpacing: '-0.035em', maxWidth: 920, marginBottom: 32,
        }}>
          Practical AI automation <em style={{ color: 'var(--green)', fontStyle: 'italic' }}>for recruitment agencies.</em>
        </h1>
        <p style={{ fontSize: 20, color: 'var(--text-dim)', maxWidth: 720, lineHeight: 1.55, marginBottom: 40 }}>
          We help recruitment and staffing agencies reduce manual admin, speed up candidate workflows, and streamline operations with practical automation.
        </p>
        <Link href="/contact" className="btn-primary"
          style={{ display: 'inline-block', padding: '14px 32px', borderRadius: 'var(--radius)', textDecoration: 'none' }}>
          Book a free automation audit →
        </Link>
        <p style={{ color: 'var(--text-dim)', marginTop: 18, fontSize: 14 }}>
          For recruitment agencies, staffing firms, and talent businesses.
        </p>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <div className="mono" style={{ color: 'var(--text-dim)', fontSize: 12, marginBottom: 16 }}>§01 — OVERVIEW</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px,4vw,48px)', letterSpacing: '-0.02em', marginBottom: 24, maxWidth: 840 }}>
          Faster candidate workflows. <em style={{ color: 'var(--green)' }}>Less recruiter admin.</em>
        </h2>
        <p style={{ color: 'var(--text-dim)', maxWidth: 760, fontSize: 18, lineHeight: 1.7 }}>
          Recruitment agencies move quickly, but a lot of the work around placements is repetitive. Candidate follow-ups, interview scheduling, status updates, internal handoffs, and CRM admin can eat up hours every week. ClawMatic helps agencies automate the operational work that slows teams down.
        </p>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <div className="mono" style={{ color: 'var(--text-dim)', fontSize: 12, marginBottom: 16 }}>§02 — COMMON PROBLEMS</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          {[
            'Recruiters spending too much time on repetitive outreach and follow-up',
            'Interview scheduling creating unnecessary back-and-forth',
            'Candidate and client updates being handled manually',
            'CRM records becoming inconsistent or outdated',
            'Internal handoffs slowing down the recruitment process',
            'Strong recruiters losing time to admin instead of placements',
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
          The repetitive work around <em style={{ color: 'var(--purple-light)' }}>actual placements.</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24 }}>
          {[
            ['Candidate intake and screening workflows', 'Capture and organise candidate information consistently so the right people can act quickly.'],
            ['Outreach and follow-up sequences', 'Reduce manual messaging with structured follow-up flows based on stage or status.'],
            ['Interview scheduling workflows', 'Cut down back-and-forth and keep interviews moving with automated scheduling logic and confirmations.'],
            ['Candidate and client status updates', 'Send routine progress updates without requiring recruiters to rewrite the same messages every time.'],
            ['CRM and pipeline updates', 'Keep records cleaner with automated stage changes, internal alerts, and operational triggers.'],
            ['Internal handoffs and routing', 'Move work to the right recruiter, account manager, or support role when the next action is needed.'],
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
            Built for recruiter workflows, <em style={{ color: 'var(--green)' }}>not generic AI hype.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 32 }}>
            {[
              ['Operational speed', 'We focus on the repetitive workflow friction that slows agencies down between first contact and placement.'],
              ['Fits your process', 'We build around your agency’s workflow, tools, and team structure where possible.'],
              ['Human where it matters', 'The goal is not to make recruitment robotic. It is to remove repetitive coordination work.'],
              ['Business-first implementation', 'We care about faster movement, cleaner process, and less admin — not unnecessary complexity.'],
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
            ['Candidate follow-up', 'Automation can send reminders, next-step communication, and stage-based follow-up without manual outreach every time.'],
            ['Interview scheduling', 'Scheduling workflows can reduce friction, confirm appointments, and trigger internal updates automatically.'],
            ['Pipeline movement', 'When a candidate or client moves to a new stage, automation can update records, notify the right people, and trigger the next task.'],
            ['Client updates', 'Routine status and progress communication can be streamlined so recruiters spend less time repeating the same admin tasks.'],
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
          See where automation can save your <em style={{ color: 'var(--green)' }}>recruitment agency</em> time.
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
