import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Automation for Property Management Companies | ClawMatic',
  description:
    'ClawMatic helps property management companies automate tenant communication, maintenance intake, reminders, and repetitive admin with practical AI automation.',
  alternates: { canonical: 'https://clawmatic.eu/for-property-management' },
  openGraph: {
    title: 'ClawMatic — AI Automation for Property Management Companies',
    description:
      'Practical AI automation for property management companies. Reduce admin, improve tenant workflows, and streamline operations.',
    url: 'https://clawmatic.eu/for-property-management',
    type: 'website',
  },
};

export default function ForPropertyManagementPage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
      <section style={{ padding: '120px 24px 90px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="mono" style={{ color: 'var(--green)', fontSize: 13, letterSpacing: '0.15em', marginBottom: 28 }}>
          § CLAWMATIC PROPERTY · PRACTICAL AI AUTOMATION
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(44px, 7vw, 84px)', lineHeight: 0.98,
          letterSpacing: '-0.035em', maxWidth: 960, marginBottom: 32,
        }}>
          Practical AI automation <em style={{ color: 'var(--green)', fontStyle: 'italic' }}>for property management companies.</em>
        </h1>
        <p style={{ fontSize: 20, color: 'var(--text-dim)', maxWidth: 740, lineHeight: 1.55, marginBottom: 40 }}>
          We help property management teams reduce manual admin, improve tenant workflows, and streamline operations with practical automation.
        </p>
        <Link href="/contact" className="btn-primary"
          style={{ display: 'inline-block', padding: '14px 32px', borderRadius: 'var(--radius)', textDecoration: 'none' }}>
          Book a free automation audit →
        </Link>
        <p style={{ color: 'var(--text-dim)', marginTop: 18, fontSize: 14 }}>
          For property management companies and operational real estate teams.
        </p>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <div className="mono" style={{ color: 'var(--text-dim)', fontSize: 12, marginBottom: 16 }}>§01 — OVERVIEW</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px,4vw,48px)', letterSpacing: '-0.02em', marginBottom: 24, maxWidth: 840 }}>
          Smoother operations. <em style={{ color: 'var(--green)' }}>Less repetitive admin.</em>
        </h2>
        <p style={{ color: 'var(--text-dim)', maxWidth: 780, fontSize: 18, lineHeight: 1.7 }}>
          Property management involves a constant stream of messages, requests, reminders, updates, and internal coordination. Tenant communication, maintenance intake, renewals, and operational follow-up can quickly turn into repetitive admin. ClawMatic helps property management teams automate the operational work that slows them down.
        </p>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <div className="mono" style={{ color: 'var(--text-dim)', fontSize: 12, marginBottom: 16 }}>§02 — COMMON PROBLEMS</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          {[
            'Too much time spent handling repetitive tenant communication',
            'Maintenance requests being triaged manually',
            'Slow follow-up on routine operational tasks',
            'Internal handoffs between teams, contractors, or managers causing delays',
            'Work spread across inboxes, spreadsheets, and property systems',
            'Staff losing time to coordination instead of higher-value operational work',
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
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px,4vw,48px)', letterSpacing: '-0.02em', marginBottom: 20, maxWidth: 780 }}>
          The repetitive work around <em style={{ color: 'var(--purple-light)' }}>running properties well.</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24 }}>
          {[
            ['Tenant inquiry and communication workflows', 'Handle routine messages, confirmations, reminders, and next-step communication more consistently.'],
            ['Maintenance request intake and routing', 'Capture, organise, and route requests automatically based on urgency, type, or property.'],
            ['Reminder and follow-up sequences', 'Reduce missed steps with recurring reminders and structured follow-up workflows.'],
            ['Internal task routing and handoffs', 'Move work to the right team member, contractor, or manager when the next action is needed.'],
            ['Renewal and status update workflows', 'Automate operational notices, renewal prompts, and routine updates across the workflow.'],
            ['Routine operational communication', 'Streamline the day-to-day communication that keeps tenants, staff, and operations aligned.'],
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
            Built for operational clarity, <em style={{ color: 'var(--green)' }}>not generic automation talk.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 32 }}>
            {[
              ['Real operational friction', 'We focus on repetitive workflow problems that create delays for staff, contractors, and tenants.'],
              ['Fits your tools', 'We build automation around your current process and systems where possible.'],
              ['Human where it counts', 'The aim is not to remove people from operations. It is to reduce repetitive coordination work.'],
              ['Business-first implementation', 'We care about smoother operations, faster follow-up, and less admin — not complexity for its own sake.'],
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
            ['Tenant communication', 'Automation can handle routine messages, confirmations, reminders, and next-step communication so teams spend less time answering the same questions manually.'],
            ['Maintenance intake', 'Requests can be captured, routed, prioritised, and flagged automatically based on issue type, urgency, or property.'],
            ['Internal handoffs', 'When one task is completed, automation can notify the right team member, contractor, or manager and trigger the next step in the process.'],
            ['Renewal and reminder workflows', 'Recurring reminders, notices, and follow-ups can be automated to reduce missed actions and inconsistent communication.'],
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
          See where automation can save your <em style={{ color: 'var(--green)' }}>property team</em> time.
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
