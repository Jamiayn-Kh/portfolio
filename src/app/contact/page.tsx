import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactPageContent from './components/ContactPageContent';

export const metadata = {
  title: 'Contact — Jaimka Kh | Software Engineer',
  description:
    'Get in touch with Jaimka Kh — Software Engineer open to web, backend and system development opportunities.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ContactPageContent />
      </main>
      <Footer />
    </>
  );
}
