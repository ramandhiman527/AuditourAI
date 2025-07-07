
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MeetTheFounders from '@/components/MeetTheFounders';
import AgentShowcaseRedesigned from '@/components/AgentShowcaseRedesigned';
import WorkflowTheater from '@/components/WorkflowTheater';
import FeatureDeepDive from '@/components/FeatureDeepDive';
import TechnicalArchitectureRedesigned from '@/components/TechnicalArchitectureRedesigned';
import ComparisonSection from '@/components/ComparisonSection';
import WaitlistSignup from '@/components/WaitlistSignup';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AgentShowcaseRedesigned />
      <WorkflowTheater />
      <FeatureDeepDive />
      <TechnicalArchitectureRedesigned />
      <ComparisonSection />
      <MeetTheFounders />
      <WaitlistSignup />
      <Footer />
    </div>
  );
};

export default Index;
