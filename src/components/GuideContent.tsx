'use client';

import { useState } from 'react';
import Link from 'next/link';

type OS = 'mac' | 'windows' | 'linux';

// ─── Inline formatter ─────────────────────────────────────────────────────────

function formatInline(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong style="color:#E8E8E8;">$1</strong>')
    .replace(/`([^`]+)`/g, '<code style="background:#1a1a1a;color:#4ECCA3;padding:2px 6px;border-radius:2px;font-size:0.78rem;font-family:Courier New,monospace;">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#5E6AD2;text-decoration:none;" target="_blank" rel="noopener noreferrer">$1</a>');
}

// ─── OS block filter ──────────────────────────────────────────────────────────

function filterOSContent(text: string, selectedOS: OS): string {
  const markers: Record<OS, string> = { mac: 'MAC', windows: 'WINDOWS', linux: 'LINUX' };
  let result = text;
  for (const [os, marker] of Object.entries(markers)) {
    const regex = new RegExp(`\\[${marker}\\]([\\s\\S]*?)\\[\\/${marker}\\]`, 'g');
    if (os === selectedOS) {
      result = result.replace(regex, '$1');
    } else {
      result = result.replace(regex, '');
    }
  }
  return result;
}

// ─── Content renderer ─────────────────────────────────────────────────────────

function renderContent(content: string): React.ReactNode[] {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith('```')) {
      const lang = line.replace('```', '').trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && lines[i] !== '```') {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <div key={`code-${i}`} style={{ margin: '1.25rem 0' }}>
          {lang && (
            <div style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '0.65rem',
              color: '#555555',
              background: '#111111',
              padding: '4px 12px',
              borderBottom: '1px solid #1e1e1e',
              borderRadius: '4px 4px 0 0',
            }}>
              {lang}
            </div>
          )}
          <pre style={{
            background: '#111111',
            border: '1px solid #1e1e1e',
            borderRadius: lang ? '0 0 4px 4px' : '4px',
            padding: '1rem 1.25rem',
            overflowX: 'auto',
            fontFamily: 'Courier New, monospace',
            fontSize: '0.78rem',
            color: '#4ECCA3',
            lineHeight: '1.7',
            margin: 0,
          }}>
            {codeLines.join('\n')}
          </pre>
        </div>
      );
      i++;
      continue;
    }

    // H2
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={`h2-${i}`} style={{
          fontFamily: 'Courier New, monospace',
          fontSize: '1.1rem',
          fontWeight: '700',
          color: '#5E6AD2',
          marginTop: '2.5rem',
          marginBottom: '1rem',
          paddingBottom: '0.5rem',
          borderBottom: '1px solid #1e1e1e',
        }}>
          {line.replace('## ', '')}
        </h2>
      );
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={`bq-${i}`} style={{ borderLeft: '3px solid #4ECCA3', paddingLeft: '1rem', margin: '1rem 0' }}>
          <span
            style={{ fontFamily: 'Courier New, monospace', fontSize: '0.85rem', color: '#888888', fontStyle: 'italic' }}
            dangerouslySetInnerHTML={{ __html: formatInline(line.replace('> ', '')) }}
          />
        </blockquote>
      );
      i++;
      continue;
    }

    // List item
    if (line.startsWith('- ')) {
      elements.push(
        <div key={`li-${i}`} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
          <span style={{ color: '#4ECCA3', fontSize: '0.7rem', marginTop: '4px', flexShrink: 0 }}>✓</span>
          <span
            style={{ fontFamily: 'Courier New, monospace', fontSize: '0.82rem', color: '#888888', lineHeight: '1.7' }}
            dangerouslySetInnerHTML={{ __html: formatInline(line.replace('- ', '')) }}
          />
        </div>
      );
      i++;
      continue;
    }

    // HR
    if (line === '---') {
      elements.push(<hr key={`hr-${i}`} style={{ border: 'none', borderTop: '1px solid #1e1e1e', margin: '2rem 0' }} />);
      i++;
      continue;
    }

    // Bold standalone line
    if (line.startsWith('**') && line.endsWith('**') && !line.slice(2, -2).includes('**')) {
      elements.push(
        <p key={`bold-${i}`} style={{ fontFamily: 'Courier New, monospace', fontSize: '0.82rem', fontWeight: '700', color: '#E8E8E8', marginTop: '1rem', marginBottom: '0.25rem' }}>
          {line.slice(2, -2)}
        </p>
      );
      i++;
      continue;
    }

    // Empty line
    if (line.trim() === '') {
      elements.push(<div key={`gap-${i}`} style={{ height: '0.4rem' }} />);
      i++;
      continue;
    }

    // Default paragraph
    elements.push(
      <p key={`p-${i}`}
        style={{ fontFamily: 'Courier New, monospace', fontSize: '0.82rem', color: '#888888', lineHeight: '1.8', marginBottom: '0.5rem' }}
        dangerouslySetInnerHTML={{ __html: formatInline(line) }}
      />
    );
    i++;
  }

  return elements;
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function GuideContent({ content, skillsHref }: { content: string; skillsHref: string }) {
  const hasOSTabs = content.includes('[WINDOWS]') || content.includes('[MAC]') || content.includes('[LINUX]');
  const [os, setOs] = useState<OS>('mac');

  const filteredContent = hasOSTabs ? filterOSContent(content, os) : content;

  const osOptions: { id: OS; label: string }[] = [
    { id: 'mac', label: '🍎 macOS' },
    { id: 'windows', label: '🪟 Windows' },
    { id: 'linux', label: '🐧 Linux' },
  ];

  return (
    <>
      {hasOSTabs && (
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.7rem', color: '#555555', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
            {'// select_your_os'}
          </p>
          <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid #1e1e1e' }}>
            {osOptions.map((o) => (
              <button
                key={o.id}
                onClick={() => setOs(o.id)}
                style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.75rem',
                  color: os === o.id ? '#4ECCA3' : '#555555',
                  background: os === o.id ? 'rgba(78, 204, 163, 0.05)' : 'none',
                  border: 'none',
                  borderBottom: os === o.id ? '2px solid #4ECCA3' : '2px solid transparent',
                  padding: '0.75rem 1.25rem',
                  cursor: 'pointer',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s, background 0.2s',
                  marginBottom: '-1px',
                }}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {renderContent(filteredContent)}

      {/* CTA */}
      <div
        className="pixel-border-purple"
        style={{ marginTop: '3rem', padding: '2rem', borderRadius: '4px', background: 'rgba(78, 204, 163, 0.04)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
      >
        <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.7rem', color: '#4ECCA3', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          {'// skip_the_grind'}
        </p>
        <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.9rem', fontWeight: '700', color: '#E8E8E8' }}>
          You just set up OpenClaw. Now make it actually useful.
        </p>
        <p style={{ fontFamily: 'Courier New, monospace', fontSize: '0.78rem', color: '#666666', lineHeight: '1.7' }}>
          The <span style={{ color: '#E8E8E8' }}>OpenClaw Starter Kit</span> skips the part where you spend hours hunting down,
          configuring, and debugging 10 different skills. It&apos;s all done — WhatsApp, web search,
          calendar, task automation, and more. Drop it in, run one command, and your agent
          is actually doing things.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', margin: '0.25rem 0' }}>
          {['10 skills ready to go', 'one install command', '€9 one-time'].map((f) => (
            <span key={f} style={{ fontFamily: 'Courier New, monospace', fontSize: '0.7rem', color: '#4ECCA3' }}>
              ✓ {f}
            </span>
          ))}
        </div>
        <Link href={skillsHref} className="btn-green" style={{ display: 'inline-block', padding: '10px 24px', fontSize: '0.8rem', textDecoration: 'none', borderRadius: '2px', alignSelf: 'flex-start' }}>
          get_starter_kit →
        </Link>
      </div>
    </>
  );
}
