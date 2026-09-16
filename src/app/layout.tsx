import React from 'react';
import type { Metadata, Viewport } from 'next';
import { siteUrl } from '@/data/site';
import { Geist, Geist_Mono } from 'next/font/google';
import '../styles/tailwind.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: 'Jaimka Kh — Software Engineer | Full-stack & Backend Development',
  description:
    'Software Engineer building practical web applications, backend systems, REST APIs, database-driven solutions and software integrations.',
  keywords: [
    'Software Engineer',
    'Full-stack Developer',
    'Backend Developer',
    'Next.js',
    'NestJS',
    'Node.js',
    'Java',
    'PostgreSQL',
    'Ulaanbaatar',
    'Mongolia',
  ],
  authors: [{ name: 'Jaimka Kh' }],
  openGraph: {
    title: 'Jaimka Kh — Software Engineer',
    description:
      'Software Engineer building practical web applications, backend systems, REST APIs, database-driven solutions and software integrations.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Jaimka Kh — Software Engineer',
    description:
      'Software Engineer building practical web applications, backend systems, REST APIs, database-driven solutions and software integrations.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans">
        {children}

        <script
          type="module"
          async
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fjaimkakh4900back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20"
        />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.3" />
      </body>
    </html>
  );
}
