import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for ClawMatic.eu — how we handle your data.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1.5rem' }}>
      <h1 style={{ fontFamily: 'Courier New, monospace', color: '#4ECCA3', marginBottom: '0.5rem' }}>
        Privacy Policy
      </h1>
      <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.75rem', color: '#555', marginBottom: '2rem' }}>
        Last updated: March 2026
      </p>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'Courier New, monospace', color: '#E8E8E8', fontSize: '1rem' }}>Who we are</h2>
        <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.85rem', color: '#888', lineHeight: 1.8 }}>
          ClawMatic (clawmatic.eu) is an independent resource for OpenClaw AI guides and skill packs.
          We are not affiliated with OpenClaw Inc.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'Courier New, monospace', color: '#E8E8E8', fontSize: '1rem' }}>What data we collect</h2>
        <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.85rem', color: '#888', lineHeight: 1.8 }}>
          We use <strong style={{ color: '#E8E8E8' }}>Google Analytics 4</strong> to understand how visitors
          use the site (pages visited, time on site, country). This data is anonymous and aggregated.
          We do <strong style={{ color: '#E8E8E8' }}>not</strong> collect names, email addresses, or personal
          details unless you contact us directly.
        </p>
        <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.85rem', color: '#888', lineHeight: 1.8 }}>
          Analytics are only loaded <strong style={{ color: '#E8E8E8' }}>after you give consent</strong> via
          the cookie banner.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'Courier New, monospace', color: '#E8E8E8', fontSize: '1rem' }}>Third-party services</h2>
        <ul style={{ fontFamily: 'Courier New, monospace', fontSize: '0.85rem', color: '#888', lineHeight: 2 }}>
          <li><strong style={{ color: '#E8E8E8' }}>Gumroad</strong> — handles payments for skill packs. Their privacy policy applies at checkout.</li>
          <li><strong style={{ color: '#E8E8E8' }}>Calendly</strong> — used for booking meetings. Their privacy policy applies when you book.</li>
          <li><strong style={{ color: '#E8E8E8' }}>Vercel</strong> — hosts this website. May log IP addresses for security purposes.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'Courier New, monospace', color: '#E8E8E8', fontSize: '1rem' }}>Your rights (GDPR)</h2>
        <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.85rem', color: '#888', lineHeight: 1.8 }}>
          As an EU resident you have the right to access, correct, or delete any personal data we hold.
          Since we collect no personal data directly, there is nothing to delete. You can withdraw
          analytics consent at any time by clearing your browser cookies and declining the banner.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: 'Courier New, monospace', color: '#E8E8E8', fontSize: '1rem' }}>Contact</h2>
        <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.85rem', color: '#888', lineHeight: 1.8 }}>
          Questions? Reach us via the <a href="/contact" style={{ color: '#4ECCA3' }}>contact page</a>.
        </p>
      </section>
    </div>
  );
}
