import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Clock, MapPin, Menu, X, Shield, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Meet Dr. Z', href: '#about-doctor' },
    { name: '3D Anatomy', href: '#anatomy-3d' },
    { name: 'Smile Gallery', href: '#smile-gallery' },
    { name: 'Virtual Preview', href: '#virtual-assessment' },
    { name: 'Insurance & Plans', href: '#insurance' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Clinical Announcement Bar */}
      <div className="bg-[#0b131f] text-slate-300 text-[11px] sm:text-xs py-2 px-4 border-b border-slate-800 flex items-center justify-between">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#c5a880] font-semibold">
              <Sparkles className="w-3 h-3 text-[#c5a880]" />
              Now Welcoming New Patients in Fort Lauderdale
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-300">
              Wednesday Evenings (Open 'til 7 PM) & Saturdays (8 AM – 3 PM)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={`tel:${CLINIC_INFO.contact.phoneClean}`}
              className="flex items-center gap-1.5 text-white hover:text-[#c5a880] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{CLINIC_INFO.contact.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-slate-400" />
              2500 E Oakland Park Blvd
            </span>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b131f]/95 backdrop-blur-md shadow-xl py-3 border-b border-slate-800/80 text-white'
            : 'bg-[#0b131f]/85 backdrop-blur-sm py-4 border-b border-slate-800/40 text-white'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo & Identity */}
          <a href="#" className="flex flex-col group">
            <span className="text-lg sm:text-xl font-serif tracking-widest uppercase font-medium text-white group-hover:text-[#c5a880] transition-colors">
              MY DENTIST
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#c5a880] font-medium -mt-1">
              FORT LAUDERDALE • DR. ZELKA LICINA DDS
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#c5a880] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#c5a880] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.contact.phoneClean}`}
              className="px-3.5 py-2 rounded-full border border-slate-700 hover:border-[#c5a880] text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
              <span className="hidden xl:inline">Call Office</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#c5a880] text-[#0b131f] hover:bg-[#d4bc9b] shadow-md shadow-[#c5a880]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase bg-[#c5a880] text-[#0b131f]"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0e1726] border-b border-slate-800 px-6 py-6 space-y-4">
            <div className="flex flex-col gap-3 text-sm font-medium uppercase tracking-wider text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-800/80 hover:text-[#c5a880]"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`tel:${CLINIC_INFO.contact.phoneClean}`}
                className="w-full py-3 rounded-full border border-slate-700 text-xs font-semibold uppercase tracking-wider text-center text-white flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#c5a880]" />
                Call (954) 408-9282
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#c5a880] text-[#0b131f] text-center font-bold"
              >
                Request Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
