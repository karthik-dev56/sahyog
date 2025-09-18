import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LiveMap from '@/components/LiveMap';
import DataVisualizations from '@/components/DataVisualizations';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import Partners from '@/components/Partners';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';

const Index = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar 
        currentLanguage={currentLanguage} 
        onLanguageChange={setLanguage} 
      />
      <Hero />
      <LiveMap />
      <DataVisualizations />
      <HowItWorks />
      <Testimonials />
      <StatsSection />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
