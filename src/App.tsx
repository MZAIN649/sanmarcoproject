import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectOverview from './components/ProjectOverview';
import Location from './components/Location';
import CottageDetails from './components/CottageDetails';
import Pricing from './components/Pricing';
import SiteProgress from './components/SiteProgress';
import WhyInvest from './components/WhyInvest';
import Gallery from './components/Gallery';
import InvestorServices from './components/InvestorServices';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProjectOverview />
        <Location />
        <CottageDetails />
        <Pricing />
        <SiteProgress />
        <WhyInvest />
        <Gallery />
        <InvestorServices />
        <Contact />
        <FAQ />
        <Blog />
      </main>
      <WhatsAppButton />
      <FloatingCTA />
      <Footer />
    </div>
  );
}

export default App;