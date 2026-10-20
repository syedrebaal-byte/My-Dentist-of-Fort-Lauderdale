import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { ShieldCheck, CreditCard, HeartHandshake, CheckCircle2, Calculator, ArrowRight, Sparkles } from 'lucide-react';

interface InsuranceFinancingProps {
  onOpenBooking: () => void;
}

export const InsuranceFinancing: React.FC<InsuranceFinancingProps> = ({ onOpenBooking }) => {
  const [selectedPlanTab, setSelectedPlanTab] = useState<'insurance' | 'financing' | 'membership'>('insurance');
  const [estimateTreatment, setEstimateTreatment] = useState<'hygiene' | 'veneers' | 'implant'>('veneers');

  const treatmentEstimates = {
    hygiene: {
      name: 'Routine Preventative Care (Yearly)',
      standard: '$480 / yr',
      membership: '$349 / yr',
      savings: 'Save $131/yr + 15% off all future dental work'
    },
    veneers: {
      name: 'Cosmetic Porcelain Veneers (Case of 6–8)',
      financingMonthly: 'From $165 / mo with 0% APR via Cherry / CareCredit',
      membershipDiscount: 'Includes 15% Member Courtesy Discount ($1,200+ savings)'
    },
    implant: {
      name: 'Precision Dental Implant & Ceramic Crown',
      financingMonthly: 'From $119 / mo with flexible 24-month terms',
      membershipDiscount: 'Includes 20% Surgical Member Courtesy Discount'
    }
  };

  return (
    <section id="insurance" className="py-20 lg:py-28 bg-white text-[#111A28]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4efea] text-[#9e8056] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#e8ded1]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
            Transparent Financial Peace of Mind
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#111A28] tracking-tight">
            Seamless Coverage. <br />
            <span className="italic font-normal text-[#9e8056]">Zero Surprise Invoices.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            We believe world-class dentistry should be straightforward and accessible. We work closely with major PPO insurance carriers, provide 0% interest financing, and host an in-house wellness membership.
          </p>

          {/* Navigation Tabs */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => setSelectedPlanTab('insurance')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  selectedPlanTab === 'insurance'
                    ? 'bg-[#111A28] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
                Insurance Plans
              </button>
              <button
                onClick={() => setSelectedPlanTab('financing')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  selectedPlanTab === 'financing'
                    ? 'bg-[#111A28] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CreditCard className="w-4 h-4 text-[#c5a880]" />
                0% APR Financing
              </button>
              <button
                onClick={() => setSelectedPlanTab('membership')}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  selectedPlanTab === 'membership'
                    ? 'bg-[#111A28] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <HeartHandshake className="w-4 h-4 text-[#c5a880]" />
                My Dental Membership
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Dental Insurance Plans */}
        {selectedPlanTab === 'insurance' && (
          <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#e8ded1] shadow-lg max-w-5xl mx-auto">
            <div className="max-w-2xl mb-8">
              <h3 className="text-2xl font-serif font-medium text-[#111A28]">
                Accepted Dental Insurance & Medicare
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                We are in-network with most major PPO dental insurances and select Medicare plans. Our financial coordinators submit claims directly on your behalf to maximize your allowable benefits.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {CLINIC_INFO.insurances.map((ins, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-[#e2d8cb] text-center text-xs font-medium text-slate-800 shadow-sm flex items-center justify-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                  <span className="truncate">{ins}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-white border border-[#e8ded1] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600">
                <strong className="text-slate-900 block text-sm">Don't see your specific plan listed?</strong>
                Give us a quick call at {CLINIC_INFO.contact.phone}. We verify all insurance coverage for complimentary prior authorizations.
              </div>
              <a
                href={`tel:${CLINIC_INFO.contact.phoneClean}`}
                className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#111A28] text-white hover:bg-[#1f2e46] transition-all whitespace-nowrap"
              >
                Verify My Benefits
              </a>
            </div>
          </div>
        )}

        {/* Tab 2: 0% Financing */}
        {selectedPlanTab === 'financing' && (
          <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#e8ded1] shadow-lg max-w-5xl mx-auto">
            <div className="max-w-2xl mb-8">
              <h3 className="text-2xl font-serif font-medium text-[#111A28]">
                Flexible Healthcare Financing with 0% APR Options
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Don't compromise on your smile. We partner with top medical lenders to offer deferred interest plans for up to 24 months.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CLINIC_INFO.financing.map((f, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#e8ded1] shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#9e8056] mb-1">
                      Financing Partner
                    </div>
                    <h4 className="text-lg font-serif font-medium text-[#111A28] mb-2">{f.partner}</h4>
                    <div className="px-3 py-1.5 rounded-lg bg-[#faf6f0] border border-[#e8ded1] text-xs font-bold text-[#9e8056] mb-3">
                      {f.terms}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 mt-4 text-[11px] text-slate-400">
                    Instant approval • No impact to credit score during pre-qualification
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: My Dental Membership Plan */}
        {selectedPlanTab === 'membership' && (
          <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#e8ded1] shadow-lg max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a880]/15 text-[#9e8056] text-xs font-semibold uppercase tracking-wider">
                  No Insurance? No Problem.
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#111A28]">
                  The "My Dental Membership" Plan
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Enjoy all the benefits of private concierge dental wellness in Fort Lauderdale without the bureaucracy, waiting periods, annual maximums, or denied claims of traditional corporate insurance.
                </p>

                <div className="space-y-2 pt-2">
                  {CLINIC_INFO.membershipPlan.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#111A28] text-white hover:bg-[#1f2e46] shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Enroll in Membership Plan</span>
                    <ArrowRight className="w-4 h-4 text-[#c5a880]" />
                  </button>
                </div>
              </div>

              {/* Calculator Visualizer */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-[#e2d8cb] shadow-md">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9e8056] mb-3">
                  <Calculator className="w-4 h-4 text-[#c5a880]" />
                  Interactive Care Estimator
                </div>

                <div className="space-y-2 mb-4">
                  {(['hygiene', 'veneers', 'implant'] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => setEstimateTreatment(key)}
                      className={`w-full p-2.5 rounded-xl text-left text-xs transition-all ${
                        estimateTreatment === key
                          ? 'bg-[#111A28] text-white font-semibold'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {key === 'hygiene' ? 'Preventative Cleanings' : key === 'veneers' ? 'Porcelain Veneers' : 'Dental Implant'}
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#faf6f0] border border-[#e8ded1] text-xs space-y-2">
                  <div className="font-semibold text-slate-800">
                    {treatmentEstimates[estimateTreatment].name}
                  </div>
                  {'financingMonthly' in treatmentEstimates[estimateTreatment] ? (
                    <div className="text-slate-700">
                      <strong>Financing:</strong> {(treatmentEstimates[estimateTreatment] as any).financingMonthly}
                    </div>
                  ) : (
                    <div className="text-slate-700">
                      <strong>Standard Fee:</strong> {(treatmentEstimates[estimateTreatment] as any).standard} <br />
                      <strong className="text-[#9e8056]">Member Rate:</strong> {(treatmentEstimates[estimateTreatment] as any).membership}
                    </div>
                  )}
                  <div className="text-[11px] text-[#9e8056] font-medium pt-1 border-t border-slate-200">
                    {'savings' in treatmentEstimates[estimateTreatment]
                      ? (treatmentEstimates[estimateTreatment] as any).savings
                      : (treatmentEstimates[estimateTreatment] as any).membershipDiscount}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
