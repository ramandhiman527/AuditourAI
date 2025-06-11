
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AgentShowcase from '@/components/AgentShowcase';
import WorkflowTheater from '@/components/WorkflowTheater';
import FeatureDeepDive from '@/components/FeatureDeepDive';
import TechnicalArchitecture from '@/components/TechnicalArchitecture';
import ComparisonSection from '@/components/ComparisonSection';
import WaitlistSignup from '@/components/WaitlistSignup';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AgentShowcase />
      <WorkflowTheater />
      <FeatureDeepDive />
      <TechnicalArchitecture />
      <ComparisonSection />
      <WaitlistSignup />
      <Footer />
    </div>
  );
};

export default Index;
