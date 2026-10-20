import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/clinicData';
import { Sparkles, ArrowRight, CheckCircle2, Clock, ChevronRight, X, ShieldCheck, HeartHandshake } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<'all' | 'cosmetic' | 'restorative' | 'wellness'>('all');

  const filteredServices = SERVICES.filter((s) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'cosmetic') return s.id.includes('veneers') || s.id.includes('aligners') || s.id.includes('facial');
    if (filterCategory === 'restorative') return s.id.includes('implants') || s.id.includes('emergency');
    if (filterCategory === 'wellness') return s.id.includes('preventative') || s.id.includes('facial');
    return true;
  });

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF8F5] text-[#111A28]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4efea] text-[#9e8056] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#e8ded1]">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
              Comprehensive Dental Disciplines
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#111A28] tracking-tight">
              Clinical Mastery Meets <br />
              <span className="italic font-normal text-[#9e8056]">Architectural Aesthetics.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Every procedure is customized to your unique bite dynamics, facial aesthetics, and long-term vitality by Dr. Zelka Licina in Fort Lauderdale.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Disciplines' },
              { id: 'cosmetic', label: 'Cosmetic & Smile Design' },
              { id: 'restorative', label: 'Implants & Restorative' },
              { id: 'wellness', label: 'Wellness & TMJ' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  filterCategory === tab.id
                    ? 'bg-[#111A28] text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#e8ded1] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Service Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#111A28]/85 backdrop-blur-md text-[#d4bc9b] text-[10px] font-semibold uppercase tracking-wider border border-[#c5a880]/30">
                    {service.tagline}
                  </span>
                </div>
              </div>

              {/* Service Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-medium text-[#111A28] group-hover:text-[#9e8056] transition-colors leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-semibold text-[#111A28] hover:text-[#9e8056] flex items-center gap-1 group/btn"
                  >
                    <span>Treatment Details</span>
                    <ChevronRight className="w-4 h-4 text-[#c5a880] group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => onSelectService(service.id)}
                    className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#faf6f0] text-[#9e8056] border border-[#e8ded1] hover:bg-[#111A28] hover:text-white hover:border-[#111A28] transition-all"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILED TREATMENT MODAL / DRAWER */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-md">
          <div
            className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-3xl border border-[#e5dcd1] shadow-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative aspect-[21/9] sm:aspect-[24/9] overflow-hidden bg-slate-900">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                className="w-full h-full object-cover object-center opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111A28] via-[#111A28]/60 to-transparent" />
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#c5a880] block mb-1">
                  {activeModalService.tagline}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-medium leading-tight">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto no-scrollbar">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Clinical Overview
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-sans">
                  {activeModalService.fullDesc}
                </p>
              </div>

              {/* Protocol Steps */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                  What to Expect: Treatment Sequence
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalService.steps.map((step, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-[#e8ded1]">
                      <div className="text-xs font-bold text-[#111A28] mb-1">{step.step}</div>
                      <div className="text-xs text-slate-600 leading-relaxed">{step.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Proven Clinical Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalService.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs for Service */}
              {activeModalService.faqs.length > 0 && (
                <div className="pt-2 border-t border-slate-200">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                    Frequently Asked Patient Questions
                  </h4>
                  <div className="space-y-3">
                    {activeModalService.faqs.map((faq, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-[#faf6f0] border border-[#e8ded1] text-xs">
                        <div className="font-semibold text-slate-900 mb-1">{faq.q}</div>
                        <div className="text-slate-600 leading-relaxed">{faq.a}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-4 h-4 text-[#c5a880]" />
                  <span>Timeline: {activeModalService.duration}</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveModalService(null)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const id = activeModalService.id;
                      setActiveModalService(null);
                      onSelectService(id);
                    }}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#111A28] text-white hover:bg-[#1f2e46] shadow-md transition-all"
                  >
                    Book This Treatment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
