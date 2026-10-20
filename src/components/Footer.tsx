import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, Calendar, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const neighborhoods = [
    'Oakland Park',
    'Coral Ridge',
    'Las Olas',
    'Victoria Park',
    'Fort Lauderdale Beach',
    'Lauderdale-by-the-Sea',
    'Wilton Manors',
    'Pompano Beach',
    'Rio Vista',
    'Colee Hammock'
  ];

  return (
    <footer id="contact" className="bg-[#070c14] text-white pt-20 pb-16 border-t border-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          {/* Practice Identity */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex flex-col">
              <span className="text-xl font-serif tracking-widest uppercase font-medium text-white">
                MY DENTIST
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#c5a880] font-medium -mt-1">
                OF FORT LAUDERDALE • DR. ZELKA LICINA DDS
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing bespoke cosmetic dentistry, digital smile design, precision dental implants, clear aligners, and gentle preventative family care in a serene, private environment in Fort Lauderdale, Florida.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-300">
              <a
                href="https://maps.google.com/?q=2500+E+Oakland+Park+Blvd,+Fort+Lauderdale,+FL+33306"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#c5a880] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                <span>
                  {CLINIC_INFO.contact.address} <br />
                  {CLINIC_INFO.contact.city}, {CLINIC_INFO.contact.state} {CLINIC_INFO.contact.zip}
                </span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.contact.phoneClean}`}
                className="flex items-center gap-2.5 hover:text-[#c5a880] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>Practice Line: {CLINIC_INFO.contact.phone}</span>
              </a>

              <a
                href={`mailto:${CLINIC_INFO.contact.email}`}
                className="flex items-center gap-2.5 hover:text-[#c5a880] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#c5a880] shrink-0" />
                <span>{CLINIC_INFO.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Office Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#c5a880] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c5a880]" />
              Fort Lauderdale Office Hours
            </h4>

            <div className="space-y-2 text-xs">
              {CLINIC_INFO.hours.map((h, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between py-1.5 border-b border-slate-800/80 ${
                    h.highlight ? 'text-[#e5d4be] font-medium' : 'text-slate-400'
                  }`}
                >
                  <span className="text-slate-300">{h.day}</span>
                  <div className="text-right">
                    <span>{h.hours}</span>
                    {h.highlight && (
                      <span className="block text-[10px] text-[#c5a880] font-mono">
                        {h.highlight}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Service Areas */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#c5a880]">
              South Florida Neighborhoods Served
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Conveniently accessible off E Oakland Park Blvd with complimentary reserved patient parking. Welcoming residents across:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {neighborhoods.map((n, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-300"
                >
                  {n}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#c5a880] text-[#0b131f] hover:bg-[#d4bc9b] shadow-lg shadow-[#c5a880]/15 transition-all text-center font-bold"
              >
                Schedule Your Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Medical Disclaimers */}
        <div className="pt-8 text-xs text-slate-500 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-center sm:text-left">
              © {new Date().getFullYear()} My Dentist of Fort Lauderdale. Dr. Zelka Licina, DDS. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#c5a880]" />
            </button>
          </div>

          <p className="text-[10px] text-slate-600 leading-relaxed">
            Healthcare Disclaimer: The clinical information presented on this website is for educational and appointment inquiry purposes and does not constitute formal medical diagnosis. Individual treatment plans and dental outcomes are determined during a personal clinical examination by Dr. Zelka Licina, DDS.
          </p>
        </div>
      </div>

      {/* STICKY MOBILE CONVERSION BAR */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#0b131f]/95 backdrop-blur-md border-t border-slate-800 p-3 sm:hidden flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={`tel:${CLINIC_INFO.contact.phoneClean}`}
          className="flex-1 py-2.5 rounded-full border border-slate-700 text-xs font-bold text-center text-white flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
          <span>Call (954) 408-9282</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1 py-2.5 rounded-full bg-[#c5a880] text-[#0b131f] text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-md"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Consult</span>
        </button>
      </div>
    </footer>
  );
};
