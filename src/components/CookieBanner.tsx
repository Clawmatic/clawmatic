'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const id = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(id);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
    // Fire GA now that consent is given
    type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };
    if (typeof window !== 'undefined' && (window as GtagWindow).gtag) {
      (window as GtagWindow).gtag!('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#111111',
      borderTop: '1px solid #2a2a2a',
      padding: '1rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem',
      zIndex: 9999,
    }}>
      <p style={{
        fontFamily: 'Courier New, monospace',
        fontSize: '0.8rem',
        color: '#888888',
        margin: 0,
        maxWidth: '700px',
        lineHeight: 1.6,
      }}>
        🍪 We use cookies for analytics (Google Analytics) to understand how visitors use ClawMatic.
        No personal data is sold. See our{' '}
        <a href="/privacy" style={{ color: '#4ECCA3', textDecoration: 'underline' }}>privacy policy</a>.
      </p>
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <button
          onClick={decline}
          style={{
            fontFamily: 'Courier New, monospace',
            fontSize: '0.75rem',
            padding: '6px 16px',
            background: 'transparent',
            border: '1px solid #333',
            color: '#888',
            cursor: 'pointer',
            borderRadius: '2px',
          }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          style={{
            fontFamily: 'Courier New, monospace',
            fontSize: '0.75rem',
            padding: '6px 16px',
            background: '#4ECCA3',
            border: 'none',
            color: '#0a0a0a',
            cursor: 'pointer',
            borderRadius: '2px',
            fontWeight: 'bold',
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
