/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { DoctorSpotlight } from './components/DoctorSpotlight';
import { InteractiveTooth3D } from './components/InteractiveTooth3D';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { VirtualSmileAssessment } from './components/VirtualSmileAssessment';
import { InsuranceFinancing } from './components/InsuranceFinancing';
import { ClinicTour } from './components/ClinicTour';
import { EmergencyCare } from './components/EmergencyCare';
import { PatientTestimonials } from './components/PatientTestimonials';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { CLINIC_INFO } from './data/clinicData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState('hero');

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceForBooking(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceForBooking(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#111A28] flex flex-col font-sans selection:bg-[#c5a880] selection:text-white pb-16 sm:pb-0">
      {/* Fixed Luxury Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Doctor Spotlight: Dr. Zelka Licina, DDS ("Dr. Z") */}
        <DoctorSpotlight
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 3. Comprehensive Services & Treatment Protocols */}
        <ServicesSection
          onSelectService={(serviceId) => handleOpenBooking(serviceId)}
        />

        {/* 4. Interactive 3D WebGL Dental Innovation Section */}
        <section id="anatomy-3d" className="py-20 lg:py-28 bg-[#0b131f] text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <InteractiveTooth3D />
          </div>
        </section>

        {/* 5. Smile Gallery: Draggable Before & After Split Slider */}
        <section id="smile-gallery" className="py-20 lg:py-28 bg-[#111A28] text-white">
          <div className="container mx-auto px-4 sm:px-6">
            <BeforeAfterSlider />
          </div>
        </section>

        {/* 6. Virtual Smile Self-Assessment & Custom Roadmap */}
        <section id="virtual-assessment" className="py-20 lg:py-28 bg-[#FAF8F5]">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <VirtualSmileAssessment
              onBookWithData={(assessmentData) => {
                // If user submits assessment, open booking modal populated with their preferred concerns
                console.log('Virtual Assessment Data:', assessmentData);
              }}
            />
          </div>
        </section>

        {/* 7. Insurance, Financing & In-House Membership */}
        <InsuranceFinancing
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 8. Clinic Sanctuary & Spa Amenities Tour */}
        <ClinicTour />

        {/* 9. Emergency Dental Care Callout */}
        <EmergencyCare
          onOpenBooking={() => handleOpenBooking('emergency-dentistry')}
        />

        {/* 10. Patient Testimonials & Google Social Proof */}
        <PatientTestimonials />

        {/* 11. Final High-Converting Consultation Invitation Banner */}
        <section className="py-20 bg-gradient-to-b from-[#FAF8F5] to-[#f4efea] border-t border-[#e8ded1] text-center">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#9e8056] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#e8ded1] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
              Your New Smile Awaits
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#111A28] tracking-tight">
              Begin Your Journey with Dr. Z Today.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              Experience the distinction of bespoke cosmetic and comprehensive dental care at 2500 E Oakland Park Blvd in Fort Lauderdale.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-[#111A28] text-white hover:bg-[#1f2e46] shadow-xl shadow-[#111A28]/20 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#c5a880]" />
                <span>Reserve Your Appointment</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.contact.phoneClean}`}
                className="w-full sm:w-auto px-7 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-slate-300 hover:border-slate-400 text-slate-800 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#c5a880]" />
                <span>Call (954) 408-9282</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
                Zero Obligation Consultation
              </span>
              <span>•</span>
              <span>Wednesday Evenings Available</span>
              <span>•</span>
              <span>Saturday Hours</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Appointment & Consultation Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedServiceForBooking}
      />
    </div>
  );
}
