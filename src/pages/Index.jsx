
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import LiveResults from '../components/LiveResults';
import SmartPicks from '../components/SmartPicks';
import StatsAnalytics from '../components/StatsAnalytics';
import PastResults from '../components/PastResults';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="lottonexus-bg">
      <Navigation />
      <HeroSection />
      <LiveResults />
      <SmartPicks />
      <StatsAnalytics />
      <PastResults />
      <Footer />
    </div>
  );
};

export default Index;
