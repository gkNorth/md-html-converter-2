import type { Metadata } from 'next';
import Favicon from '/public/favicon.ico';
import './globals.css';

export const metadata: Metadata = {
  title: 'Markdown HTML Converter',
  description: 'Tools to convert between markdown and HTML',
  icons: [{ rel: 'icon', url: Favicon.src }],
  keywords: [
    'Markdown',
    'HTML',
    'Converter',
    'Markdown to HTML',
    'HTML to Markdown',
  ],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
