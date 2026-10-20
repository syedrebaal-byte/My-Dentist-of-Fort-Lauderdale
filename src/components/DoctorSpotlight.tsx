import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Award, GraduationCap, ShieldCheck, Heart, Sparkles, CheckCircle2, Calendar } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface DoctorSpotlightProps {
  onOpenBooking: () => void;
}

export const DoctorSpotlight: React.FC<DoctorSpotlightProps> = ({ onOpenBooking }) => {
  const doc = CLINIC_INFO.leadDoctor;

  return (
    <section id="about-doctor" className="py-20 lg:py-28 bg-[#111A28] text-white relative overflow-hidden">
      {/* Subtle background ambient accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Doctor Portrait Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#0b131f]">
                <SafeImage
                  src={doc.image}
                  imageKey="dr-zelka"
                  fallbackSrc="/assert/images/dr-zelka.jpg"
                  alt={`${doc.fullName} - Lead Cosmetic & Restorative Dentist in Fort Lauderdale`}
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b131f] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xl font-serif font-medium text-white">{doc.fullName}</div>
                  <div className="text-xs text-[#c5a880] font-medium">{doc.title}</div>
                  <div className="mt-2 flex items-center gap-2 text-[11px] text-slate-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Practicing Excellence in South Florida</span>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute -top-4 -left-4 bg-[#142032] border border-[#c5a880]/50 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-[#c5a880]" />
                <div className="text-left text-[11px]">
                  <div className="font-bold text-white">Columbia & NYU Alum</div>
                  <div className="text-slate-400">Class of 2012 & 2013</div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Biography & Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#d4bc9b] text-xs font-semibold uppercase tracking-wider border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
              Meet Your Fort Lauderdale Dentist
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white tracking-tight leading-tight">
              A Gentle Touch Backed by <br />
              <span className="italic font-normal text-[#d4bc9b]">Ivy-League Surgical Training.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              Patients affectionately know her as <strong>"Dr. Z"</strong>. Combining clinical precision from New York's premier medical institutions with a warm, empathetic bedside manner, Dr. Zelka Licina has spent over a decade redefining what private dental care should feel like in Fort Lauderdale.
            </p>

            <blockquote className="p-5 rounded-2xl bg-[#142032] border-l-4 border-[#c5a880] text-sm italic text-slate-200 leading-relaxed font-serif">
              "Too many patients postpone dentistry out of fear or past negative experiences. My goal is to make your visit so gentle, transparent, and restorative that you look forward to walking through our doors."
              <span className="block not-italic font-sans text-xs font-semibold text-[#c5a880] mt-2">
                — Dr. Zelka Licina, DDS
              </span>
            </blockquote>

            {/* Academic & Hospital Credentials */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <Award className="w-4 h-4 text-[#c5a880]" />
                Formal Education & Residency
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {doc.education.map((edu, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                    <span>{edu}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Memberships */}
            <div className="space-y-2 pt-1">
              <div className="text-xs text-slate-400 font-medium">
                Accredited Professional Affiliations:
              </div>
              <div className="flex flex-wrap gap-2">
                {doc.memberships.map((m, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-[11px] font-medium"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Consultation CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#c5a880] text-[#0b131f] hover:bg-[#d4bc9b] shadow-lg shadow-[#c5a880]/20 transition-all flex items-center justify-center gap-2 font-bold"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Consultation with Dr. Z</span>
              </button>

              <span className="text-xs text-slate-400 text-center sm:text-left">
                No judgment • Complimentary cosmetic smile preview
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
