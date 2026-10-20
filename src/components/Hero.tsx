import React from 'react';
import { Calendar, Phone, Star, ShieldCheck, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section className="relative pt-32 sm:pt-36 pb-20 lg:pb-28 overflow-hidden bg-[#0b131f] text-white">
      {/* Background Hero Image with editorial gradient mask */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="My Dentist of Fort Lauderdale State-of-the-Art Clinic Interior"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b131f] via-[#0b131f]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b131f] via-transparent to-[#0b131f]/60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 max-w-2xl">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#e5d4be] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Fort Lauderdale's Premier Boutique Dental Practice</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-[1.12] tracking-tight text-white">
              Bespoke Smile Artistry. <br />
              <span className="italic font-normal text-[#d4bc9b]">
                Rooted in Gentle Precision.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Welcome to <strong>My Dentist of Fort Lauderdale</strong>. Led by <strong>Dr. Zelka Licina, DDS ("Dr. Z")</strong> — trained at New York University and Columbia University — we harmonize surgical excellence with natural cosmetic design in a soothing, private sanctuary.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#c5a880] text-[#0b131f] hover:bg-[#d4bc9b] shadow-xl shadow-[#c5a880]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-bold"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Your Visit</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.contact.phoneClean}`}
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#c5a880]" />
                <span>Call (954) 408-9282</span>
              </a>

              <a
                href="#virtual-assessment"
                className="text-xs text-slate-300 hover:text-white underline underline-offset-4 flex items-center justify-center gap-1 py-2 sm:py-0"
              >
                Virtual Smile Preview <ArrowUpRight className="w-3 h-3 text-[#c5a880]" />
              </a>
            </div>

            {/* Quick Practice Highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <div>
                  <span className="font-bold text-white">4.9 / 5.0</span>
                  <span className="text-slate-400 block text-[10px]">148+ Google Reviews</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#c5a880] shrink-0" />
                <div>
                  <span className="font-semibold text-white">ADA & FDA</span>
                  <span className="text-slate-400 block text-[10px]">Accredited Member</span>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#c5a880] shrink-0" />
                <div>
                  <span className="font-semibold text-white">2500 E Oakland Park</span>
                  <span className="text-slate-400 block text-[10px]">Coral Ridge • Free Parking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Doctor & Feature Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Doctor Card Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#111A28] group">
                <img
                  src={IMAGES.drZelka}
                  alt="Dr. Zelka Licina, DDS Lead Dentist at My Dentist of Fort Lauderdale"
                  className="w-full aspect-[4/4] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Bottom Card Over Image */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#0b131f] via-[#0b131f]/90 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-serif font-medium text-white">
                        Dr. Zelka Licina, DDS
                      </div>
                      <div className="text-xs text-[#c5a880] font-medium">
                        Columbia & NYU Trained • "Dr. Z"
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#c5a880]/20 border border-[#c5a880]/40 text-[#d4bc9b] text-[10px] font-semibold uppercase tracking-wider">
                      Concierge Care
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-2 font-sans line-clamp-2">
                    "I believe dental visits should feel like a calming restoration for both your smile and your peace of mind."
                  </p>
                </div>
              </div>

              {/* Floating Floating Accent Badges */}
              <div className="absolute -top-4 -right-4 bg-[#142032] border border-[#c5a880]/50 p-3 rounded-2xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#c5a880]/20 text-[#c5a880] flex items-center justify-center font-serif text-lg font-bold">
                  Z
                </div>
                <div className="text-left text-xs">
                  <div className="font-semibold text-white">Wednesday Evenings</div>
                  <div className="text-[11px] text-[#c5a880]">Open Until 7:00 PM</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-[#142032] border border-slate-700 p-3 rounded-2xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="text-xs text-left">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">Accepted</div>
                  <div className="font-semibold text-white">Major PPO & 0% APR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
