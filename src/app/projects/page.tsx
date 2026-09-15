import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsPageContent from './components/ProjectsPageContent';

export const metadata = {
  title: 'Projects — Jaimka Kh | Software Engineer',
  description:
    'Detailed case studies of web applications, backend systems and software projects built by Jaimka Kh.',
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ProjectsPageContent />
      </main>
      <Footer />
    </>
  );
}