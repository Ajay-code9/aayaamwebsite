import type { Metadata } from 'next';
import WebDevelopmentPage from '@/components/WebDevelopmentPage';

export const metadata: Metadata = {
  title: 'Custom Website & Web Application Development | AayaamX Technologies',
  description:
    'Full-spectrum web and mobile engineering across React, Next.js, Vue, Node.js, Python, Go, and .NET. Production-ready, 60fps performance, and enterprise security.',
};

export default function WebDevAliasPage() {
  return <WebDevelopmentPage />;
}
