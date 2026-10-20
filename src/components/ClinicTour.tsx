import React from 'react';
import { CLINIC_AMENITIES, CLINIC_INFO } from '../data/clinicData';
import { IMAGES } from '../assets/images';
import { Sparkles, MapPin, Coffee, Tv, Headphones, Wind, Scan, Clock } from 'lucide-react';

const amenityIcons = [Coffee, Tv, Headphones, Wind, Scan, Clock];

export const ClinicTour: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0b131f] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#d4bc9b] text-xs font-semibold uppercase tracking-wider mb-3 border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
            The Patient Sanctuary
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white tracking-tight">
            Designed for Serenity. <br />
            <span className="italic font-normal text-[#d4bc9b]">Curated for Comfort.</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 font-sans">
            Step away from sterile, intimidating dental environments. Our Fort Lauderdale studio combines boutique hospitality, tranquil tropical greenery, and comforting sensory amenities.
          </p>
        </div>

        {/* Dual High-Resolution Photo Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl relative group aspect-[16/10]">
            <img
              src={IMAGES.hero}
              alt="Floor-to-ceiling glass dental operatory overlooking Fort Lauderdale palm garden"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b131f] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#c5a880] block mb-1">
                Clinical Operatory Suite
              </span>
              <h3 className="text-xl font-serif font-medium text-white">
                Garden-View Treatment Rooms
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-md">
                Ergonomic memory-foam seating positioned alongside natural tropical flora to soothe the nervous system during care.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl relative group aspect-[4/3] lg:aspect-auto">
            <img
              src={IMAGES.clinicLounge}
              alt="My Dentist of Fort Lauderdale reception lounge with Italian travertine stone"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b131f] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#c5a880] block mb-1">
                Boutique Hospitality
              </span>
              <h3 className="text-xl font-serif font-medium text-white">
                Travertine Reception Lounge
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Natural wood fluting, artisanal refreshments, and zero waiting room backlog.
              </p>
            </div>
          </div>
        </div>

        {/* 6 High-Touch Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_AMENITIES.map((amenity, idx) => {
            const Icon = amenityIcons[idx % amenityIcons.length];
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#111A28] border border-slate-800 hover:border-[#c5a880]/50 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#c5a880]/15 text-[#c5a880] flex items-center justify-center shrink-0 border border-[#c5a880]/30">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {amenity.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {amenity.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
