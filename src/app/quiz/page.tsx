import type { Metadata } from 'next';
import QuizClient from './QuizClient';

export const metadata: Metadata = {
  title: 'Which AI Stack is Right for You? — ClawMatic',
  description:
    'Answer 5 quick questions and we\'ll recommend the perfect AI stack package for your use case. Takes under 2 minutes.',
};

export default function QuizPage() {
  return <QuizClient />;
}
