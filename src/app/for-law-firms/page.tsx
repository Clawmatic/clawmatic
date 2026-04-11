import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI for Law Firms — EU-Sovereign Legal Research',
  description:
    'ClawMatic builds private, GDPR-native AI assistants for European law firms. Case-law research, document review, and knowledge retrieval — hosted in the EU, never trained on your data.',
  alternates: { canonical: 'https://clawmatic.eu/for-law-firms' },
  openGraph: {
    title: 'ClawMatic — AI for European Law Firms',
    description:
      'Private, GDPR-native AI for case-law research, document review, and knowledge retrieval. EU-hosted. On-premise option. Built for UK, Dutch, and German firms.',
    url: 'https://clawmatic.eu/for-law-firms',
    type: 'website',
  },
};

export default function ForLawFirmsPage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
      {/* HERO */}
      <section style={{ padding: '120px 24px 90px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="mono" style={{ color: 'var(--green)', fontSize: 13, letterSpacing: '0.15em', marginBottom: 28 }}>
          § CLAWMATIC LEGAL · EU-SOVEREIGN AI
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(44px, 7vw, 84px)', lineHeight: 0.98,
          letterSpacing: '-0.035em', maxWidth: 900, marginBottom: 32,
        }}>
          The research is <em style={{ color: 'var(--green)', fontStyle: 'italic' }}>automated.</em><br />
          The judgment stays <em style={{ color: 'var(--purple-light)', fontStyle: 'italic' }}>yours.</em>
        </h1>
        <p style={{ fontSize: 20, color: 'var(--text-dim)', maxWidth: 680, lineHeight: 1.55, marginBottom: 40 }}>
          ClawMatic Legal gives European law firms a private, GDPR-native AI assistant for
          case-law research, document review, and knowledge retrieval — hosted in the EU,
          auditable end-to-end, and built so client data never trains anyone else&apos;s model.
        </p>
        <Link href="/contact" className="btn-primary"
          style={{ display: 'inline-block', padding: '14px 32px', borderRadius: 'var(--radius)', textDecoration: 'none' }}>
          Request a confidential pilot →
        </Link>
      </section>

      {/* PRINCIPLE */}
      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <div className="mono" style={{ color: 'var(--text-dim)', fontSize: 12, marginBottom: 16 }}>§01 — PRINCIPLE</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px,4vw,48px)', letterSpacing: '-0.02em', marginBottom: 48, maxWidth: 780 }}>
          AI does the reading. <em style={{ color: 'var(--green)' }}>Lawyers do the lawyering.</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24 }}>
          {[
            { title: 'BUILT FOR AI', accent: 'var(--green)', cls: 'pixel-border-green', items: ['Case-law and doctrine search', 'First-pass contract review', 'Clause comparison across precedents', 'Document intake and classification', 'Internal knowledge retrieval', 'Anonymisation pipelines'] },
            { title: 'RESERVED FOR HUMANS', accent: 'var(--purple-light)', cls: 'pixel-border-purple', items: ['Pleadings and oral argument', 'Strategic case judgment', 'Client counsel and negotiation', 'Ethical decisions', 'Final review of every output', 'Anything touching the courtroom'] },
          ].map((c) => (
            <div key={c.title} className={`${c.cls} card-hover`} style={{ padding: 32, borderRadius: 'var(--radius)' }}>
              <div className="mono" style={{ color: c.accent, fontSize: 12, letterSpacing: '0.12em', marginBottom: 20 }}>{c.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {c.items.map((i) => (
                  <li key={i} style={{ padding: '12px 0', borderBottom: '1px solid var(--border)', fontSize: 16, color: 'var(--text)' }}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* MARKETS */}
      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <div className="mono" style={{ color: 'var(--text-dim)', fontSize: 12, marginBottom: 16 }}>§02 — MARKETS</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px,4vw,48px)', letterSpacing: '-0.02em', marginBottom: 20, maxWidth: 780 }}>
          Built for European firms, <em style={{ color: 'var(--purple-light)' }}>starting with three.</em>
        </h2>
        <p style={{ color: 'var(--text-dim)', maxWidth: 640, marginBottom: 40 }}>
          Our first cohort focuses on jurisdictions where data sovereignty is taken seriously
          and small-to-mid firms can move fast.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          {[
            { n: '01', name: 'United Kingdom', body: 'Largest legal market in Europe. UK GDPR alignment, English-native workflows, and firms actively evaluating alternatives to US legal-AI incumbents.' },
            { n: '02', name: 'Netherlands', body: 'Pragmatic, English-fluent, fast adopters. Strong Schrems II awareness and a mature appetite for EU-hosted SaaS from independent vendors.' },
            { n: '03', name: 'Germany', body: 'The most demanding GDPR market in Europe — and therefore the best validation. On-premise ClawMatic deployments for firms that can\u2019t send data anywhere.' },
          ].map((m) => (
            <div key={m.n} className="pixel-border card-hover" style={{ padding: 28, borderRadius: 'var(--radius)' }}>
              <div className="mono" style={{ color: 'var(--green)', fontSize: 11, marginBottom: 8 }}>↳ {m.n}</div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, marginBottom: 12 }}>{m.name}</h4>
              <p style={{ fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.6 }}>{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOVEREIGNTY */}
      <section style={{ padding: '90px 24px', borderTop: '1px solid var(--border)', background: 'var(--bg-card)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="mono" style={{ color: 'var(--green)', fontSize: 12, marginBottom: 16 }}>§03 — SOVEREIGNTY</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'clamp(32px,4vw,48px)', letterSpacing: '-0.02em', marginBottom: 20, maxWidth: 820 }}>
            GDPR isn&apos;t a checkbox. <em style={{ color: 'var(--green)' }}>It&apos;s the architecture.</em>
          </h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: 700, marginBottom: 48, fontSize: 18 }}>
            Most legal-AI tools route client data through US infrastructure and reserve the right
            to train on it. ClawMatic was built the other way around.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 32 }}>
            {[
              ['EU-only hosting', 'All inference and storage on European infrastructure. No US sub-processors. Schrems II-compliant by design.'],
              ['Zero training on your data', 'Client matter data is never used to improve models. Contractually guaranteed in every DPA we sign.'],
              ['On-premise option', 'For firms with the strictest secrecy obligations, ClawMatic runs entirely inside your own infrastructure. Nothing leaves the building.'],
              ['Full audit trail', 'Every query, every output, every document touched — logged, exportable, and defensible if a regulator or bar association ever asks.'],
            ].map(([t, b]) => (
              <div key={t}>
                <div className="mono" style={{ color: 'var(--purple-light)', fontSize: 12, letterSpacing: '0.12em', marginBottom: 10 }}>↳ {t?.toUpperCase()}</div>
                <p style={{ color: 'var(--text-dim)', fontSize: 15, lineHeight: 1.6 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '110px 24px', maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(36px,5vw,56px)', letterSpacing: '-0.02em', marginBottom: 20 }}>
          Want to see it running on a <em style={{ color: 'var(--green)' }}>real matter?</em>
        </h2>
        <p style={{ color: 'var(--text-dim)', maxWidth: 560, margin: '0 auto 32px' }}>
          We&apos;re taking on a small first cohort of pilot firms across the UK, Netherlands,
          and Germany. Pilots are scoped, time-boxed, and run under a full DPA.
        </p>
        <Link href="/contact" className="btn-primary"
          style={{ display: 'inline-block', padding: '16px 36px', borderRadius: 'var(--radius)', textDecoration: 'none' }}>
          Start the conversation →
        </Link>
      </section>
    </div>
  );
}
