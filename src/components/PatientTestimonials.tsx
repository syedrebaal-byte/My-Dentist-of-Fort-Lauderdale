import React from 'react';
import { TESTIMONIALS, CLINIC_INFO } from '../data/clinicData';
import { Star, Sparkles, CheckCircle2, ShieldCheck, Quote } from 'lucide-react';

export const PatientTestimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] text-[#111A28]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4efea] text-[#9e8056] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#e8ded1]">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
              Authentic Patient Voices
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#111A28] tracking-tight">
              Trusted by Hundreds Across <br />
              <span className="italic font-normal text-[#9e8056]">Fort Lauderdale & South Florida.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Read how Dr. Zelka Licina's gentle touch, architectural cosmetic eye, and honest communication have transformed lives.
            </p>
          </div>

          {/* Google Rating Overview Badge */}
          <div className="p-5 rounded-2xl bg-white border border-[#e8ded1] shadow-md flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#c5a880]/15 text-[#9e8056] flex items-center justify-center font-bold text-xl font-serif">
              4.9
            </div>
            <div>
              <div className="flex text-amber-500 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs font-semibold text-slate-800">
                148+ Verified Google Reviews
              </div>
              <div className="text-[11px] text-slate-400">
                Top Rated Dentist in Fort Lauderdale
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-7 rounded-3xl bg-white border border-[#e8ded1] shadow-lg flex flex-col justify-between hover:border-[#c5a880] transition-colors relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
                    {review.source}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#c5a880]/30 mb-2" />

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">{review.author}</div>
                  <div className="text-[11px] text-slate-500">{review.location}</div>
                </div>
                <div className="text-[11px] text-[#9e8056] font-mono">
                  {review.treatment}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Review Assurance Note */}
        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
          <span>Real, attributable patient experiences from verified Google Business reviews for My Dentist of Fort Lauderdale.</span>
        </div>
      </div>
    </section>
  );
};
