import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { Projects } from './components/Projects.tsx';
import { Skills } from './components/Skills.tsx';
import { WhyChooseMe } from './components/WhyChooseMe.tsx';
import { Pricing } from './components/Pricing.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingCTABar } from './components/FloatingCTABar.tsx';
import { QuickEstimatorModal } from './components/QuickEstimatorModal.tsx';
import { AdminLeadsDrawer } from './components/AdminLeadsDrawer.tsx';

function PortfolioMain() {
  const [selectedService, setSelectedService] = useState<string>('Business Website Development');
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const [isAdminDrawerOpen, setIsAdminDrawerOpen] = useState<boolean>(false);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimateToForm = (service: string, summary: string) => {
    setSelectedService(service);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onOpenAdmin={() => setIsAdminDrawerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenEstimator={() => setIsEstimatorOpen(true)} />
        <About />
        <Services onSelectService={handleSelectService} />
        <Projects onSelectProjectForQuote={handleSelectService} />
        <Skills />
        <WhyChooseMe />
        <Pricing onSelectPlan={handleSelectPlan} />
        <Testimonials />
        <FAQ />
        <Contact
          selectedServicePreset={selectedService}
          selectedPlanPreset={selectedPlan}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Bars & Widgets */}
      <FloatingCTABar />

      {/* Interactive Modals */}
      <QuickEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onApplyEstimateToForm={handleApplyEstimateToForm}
      />

      <AdminLeadsDrawer
        isOpen={isAdminDrawerOpen}
        onClose={() => setIsAdminDrawerOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <PortfolioMain />
    </AuthProvider>
  );
}
