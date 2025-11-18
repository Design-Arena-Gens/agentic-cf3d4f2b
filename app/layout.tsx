import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans_JP({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-cf3d4f2b.vercel.app'),
  title: '?????????',
  description: '?????????????????',
  openGraph: {
    title: '?????????',
    description: '?????????????????',
    url: 'https://agentic-cf3d4f2b.vercel.app',
    siteName: '?????????',
    locale: 'ja_JP',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '?????????',
    description: '?????????????????'
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="h-full bg-neutral-950">
      <body className={`${notoSans.className} h-full text-white antialiased`}>{children}</body>
    </html>
  );
}
