import type { Metadata } from 'next';
import QuizClient from './QuizClient';

export const metadata: Metadata = {
  title: 'OpenClaw Stack Quiz — Find Your Ideal AI Setup | ClawMatic Community',
  description:
    'Answer 5 quick questions and get a personalised OpenClaw stack recommendation based on your use case, budget, and privacy needs. Takes under 2 minutes.',
  openGraph: {
    title: 'OpenClaw Stack Quiz — Find Your Ideal AI Setup | ClawMatic Community',
    description:
      'Answer 5 quick questions and get a personalised OpenClaw stack recommendation. Takes under 2 minutes.',
    images: [{ url: '/og/quiz.png', width: 1200, height: 630, alt: 'OpenClaw Stack Quiz — ClawMatic Community' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenClaw Stack Quiz — Find Your Ideal AI Setup | ClawMatic Community',
    description:
      'Answer 5 quick questions and get a personalised OpenClaw stack recommendation. Takes under 2 minutes.',
    images: ['/og/quiz.png'],
  },
};
// TODO: Generate OG image at /public/og/quiz.png

export default function QuizPage() {
  return <QuizClient />;
}
