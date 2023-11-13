import type { Metadata } from 'next';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import './globals.css';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Markdown HTML Converter',
  description:
    '手軽にMarkdownとHTMLを相互変換できる無料Webサービス。コーディング不要で簡単に使えます。MarkdownをHTMLに変換、HTMLをMarkdownに変換も可能。Tools to convert between markdown and HTML - Free Online Tool',
  keywords: [
    'Markdown',
    'HTML',
    'Converter',
    'Markdown to HTML',
    'HTML to Markdown',
    '変換',
    '変換ツール',
    '変換サイト',
    '無料',
    'HTMLからMarkdown',
    'HTMLをMarkdownに変換',
    'MarkdownからHTML',
    'MarkdownをHTMLに変換',
    'コンバータ',
    'webサービス',
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4888648541099645"
          crossOrigin="anonymous"
        ></script>
        <Suspense fallback={<></>}>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body>{children}</body>
    </html>
  );
}
