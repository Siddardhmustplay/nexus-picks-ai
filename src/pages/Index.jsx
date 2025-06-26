
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
    <div className="lottonexus-bg" style={{ margin: 0, padding: 0 }}>
      <Navigation />
      <HeroSection />
      <LiveResults />
      <SmartPicks />
      <div className="stats-analytics-bg">
        <StatsAnalytics />
      </div>
      <div className="past-results-bg">
        <PastResults />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
