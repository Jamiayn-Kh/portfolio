import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import QuickProfileSection from './components/QuickProfileSection';
import AboutSection from './components/AboutSection';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import EngineeringApproachSection from './components/EngineeringApproachSection';
import ContactCTASection from './components/ContactCTASection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <QuickProfileSection />
        <AboutSection />
        <FeaturedProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <EngineeringApproachSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
