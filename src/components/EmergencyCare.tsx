import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, Clock, AlertCircle, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

interface EmergencyCareProps {
  onOpenBooking: () => void;
}

export const EmergencyCare: React.FC<EmergencyCareProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#111A28] via-[#1a2638] to-[#111A28] text-white border-y border-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0b131f]/90 border border-[#c5a880]/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#c5a880]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-semibold uppercase tracking-wider">
                <AlertCircle className="w-3.5 h-3.5 text-red-400" />
                Same-Day Emergency Dental Care
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white tracking-tight">
                In Severe Pain or Broke a Tooth?
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                We prioritize urgent dental appointments in Fort Lauderdale. Whether you are suffering from an acute toothache, a dislodged crown, or dental trauma, Dr. Z and our clinical team are here to relieve your pain today.
              </p>

              <div className="flex flex-wrap gap-4 pt-1 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                  Wednesday Open Late ('til 7 PM)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                  Saturday Appointments Available
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
              <a
                href={`tel:${CLINIC_INFO.contact.phoneClean}`}
                className="px-7 py-4 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c5a880] text-[#0b131f] hover:bg-[#d4bc9b] shadow-xl shadow-[#c5a880]/20 text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (954) 408-9282</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/15 border border-white/20 text-white text-center flex items-center justify-center gap-2"
              >
                <span>Request Urgent Visit</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#c5a880]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
