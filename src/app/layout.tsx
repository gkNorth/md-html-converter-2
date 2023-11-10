import type { Metadata } from 'next';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import './globals.css';

export const metadata: Metadata = {
  title: 'Markdown HTML Converter',
  description: 'Tools to convert between markdown and HTML',
  keywords: [
    'Markdown',
    'HTML',
    'Converter',
    'Markdown to HTML',
    'HTML to Markdown',
  ],
  robots: {
    index: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <GoogleAnalytics />
      </head>
      <body>{children}</body>
    </html>
  );
}
