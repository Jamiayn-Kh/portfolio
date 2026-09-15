import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Jaimka Kh — Software Engineer | Full-stack & Backend Developer',
  description:
    'Software Engineer specializing in web applications, backend systems, REST APIs, databases and practical software solutions. Based in Ulaanbaatar, Mongolia.',
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
      'Software Engineer specializing in web applications, backend systems, REST APIs and databases.',
    type: 'website',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaimka Kh — Software Engineer',
    description:
      'Software Engineer specializing in web applications, backend systems, REST APIs and databases.',
    images: ['/assets/images/app_logo.png'],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className={plusJakartaSans.className}>
        {children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fjaimkakh4900back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.3" /></body>
    </html>
  );
}