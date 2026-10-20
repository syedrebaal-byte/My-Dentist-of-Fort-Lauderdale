import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, RotateCcw, Calendar, CheckCircle, ShieldCheck } from 'lucide-react';

interface AssessmentState {
  concerns: string[];
  aestheticGoal: string;
  timeframe: string;
  patientName: string;
  phone: string;
  email: string;
  notes: string;
}

export const VirtualSmileAssessment: React.FC<{ onBookWithData?: (data: any) => void }> = ({ onBookWithData }) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [data, setData] = useState<AssessmentState>({
    concerns: [],
    aestheticGoal: 'Natural & Subtle Harmony',
    timeframe: 'Within 1–3 Months',
    patientName: '',
    phone: '',
    email: '',
    notes: ''
  });

  const concernOptions = [
    { id: 'discoloration', label: 'Staining / Dull Yellow Shade', reco: 'Professional In-Office Whitening or Porcelain Veneers' },
    { id: 'spacing', label: 'Gaps & Spacing Between Teeth', reco: 'Clear Aligners or Minimal-Prep Veneers' },
    { id: 'crowding', label: 'Crooked or Crowded Teeth', reco: 'Clear Aligners' },
    { id: 'chips', label: 'Chipped, Shortened, or Worn Edges', reco: 'Handcrafted Porcelain Veneers & Incisal Recontouring' },
    { id: 'missing', label: 'Missing Tooth / Dental Bridge Needed', reco: 'Titanium Dental Implants & Ceramic Crowns' },
    { id: 'tmj', label: 'Jaw Clenching, Teeth Grinding or TMJ Pain', reco: 'Therapeutic Masseter Botox & Nightguards' },
    { id: 'gummy', label: 'Excessive Gum Display on Smiling', reco: 'Facial Aesthetics & Laser Gingival Contouring' }
  ];

  const aestheticGoals = [
    { id: 'natural', title: 'Natural & Undetectable', desc: 'Preserve individual character while perfecting balance and translucent vitality.' },
    { id: 'glamour', title: 'Luminous Hollywood Radiance', desc: 'Uniform, brilliant white aesthetic with symmetrical contouring.' },
    { id: 'restorative', title: 'Pain-Free Strength & Function', desc: 'Restore full chewing power, replace missing teeth, and stabilize occlusion.' }
  ];

  const timeframes = [
    'Immediate (Upcoming Wedding / Milestone Event)',
    'Within 1–3 Months',
    'Within 6 Months',
    'Exploring Options & Budgeting'
  ];

  const toggleConcern = (id: string) => {
    setData((prev) => {
      const exists = prev.concerns.includes(id);
      return {
        ...prev,
        concerns: exists ? prev.concerns.filter((c) => c !== id) : [...prev.concerns, id]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onBookWithData) {
      onBookWithData(data);
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-10 border border-[#e5dcd1] shadow-xl overflow-hidden relative">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4efea] text-[#9e8056] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#e8ded1]">
          <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
          Interactive Virtual Smile Preview
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#111A28] tracking-tight">
          Design Your Ideal Smile in 60 Seconds
        </h3>
        <p className="text-slate-600 text-sm mt-1 mb-6">
          Answer 3 brief questions to receive Dr. Z's personalized clinical recommendations and a customized treatment roadmap.
        </p>
      </div>

      {/* Step Indicators */}
      <div className="flex items-center gap-2 sm:gap-4 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex-1 flex items-center gap-2">
            <div
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step === i
                  ? 'bg-[#111A28] text-white shadow-md'
                  : step > i
                  ? 'bg-[#c5a880] text-white'
                  : 'bg-slate-100 text-slate-400'
              }`}
            >
              {step > i ? <Check className="w-4 h-4" /> : i}
            </div>
            <div className={`h-1 flex-1 rounded-full ${step > i ? 'bg-[#c5a880]' : 'bg-slate-100'}`} />
          </div>
        ))}
      </div>

      {!submitted ? (
        <div>
          {/* STEP 1: CONCERNS */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-[#111A28]">
                Step 1: What would you like to improve? <span className="text-xs text-slate-500 font-normal">(Select all that apply)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {concernOptions.map((c) => {
                  const isSelected = data.concerns.includes(c.id);
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => toggleConcern(c.id)}
                      className={`p-4 rounded-2xl text-left border transition-all text-xs flex flex-col justify-between gap-1.5 ${
                        isSelected
                          ? 'border-[#c5a880] bg-[#faf6f0] text-[#111A28] shadow-sm font-medium'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm">{c.label}</span>
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                            isSelected ? 'bg-[#c5a880] border-[#c5a880] text-white' : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </div>
                      <span className="text-[11px] text-[#9e8056] font-mono">Suggested: {c.reco}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  disabled={data.concerns.length === 0}
                  onClick={() => setStep(2)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                    data.concerns.length > 0
                      ? 'bg-[#111A28] text-white hover:bg-[#1f2e46] shadow-md'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  Continue to Aesthetic Goal <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: AESTHETIC GOAL */}
          {step === 2 && (
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-[#111A28]">
                Step 2: What is your preferred aesthetic tone?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {aestheticGoals.map((g) => {
                  const isSelected = data.aestheticGoal === g.title;
                  return (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setData({ ...data, aestheticGoal: g.title })}
                      className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#c5a880] bg-[#faf6f0] text-[#111A28] shadow-md'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold mb-1">{g.title}</div>
                        <div className="text-xs text-slate-600 leading-relaxed">{g.desc}</div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-[#9e8056] font-medium">{isSelected ? 'Selected' : 'Select'}</span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? 'bg-[#c5a880] border-[#c5a880] text-white' : 'border-slate-300'
                          }`}
                        >
                          {isSelected && <Check className="w-2.5 h-2.5" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-500 hover:text-slate-800 font-medium px-4 py-2"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111A28] text-white hover:bg-[#1f2e46] shadow-md transition-all"
                >
                  Continue to Timeframe <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: TIMEFRAME */}
          {step === 3 && (
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-[#111A28]">
                Step 3: What is your target timeframe?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {timeframes.map((t) => {
                  const isSelected = data.timeframe === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setData({ ...data, timeframe: t })}
                      className={`p-4 rounded-xl text-left border transition-all text-xs font-medium flex items-center justify-between ${
                        isSelected
                          ? 'border-[#c5a880] bg-[#faf6f0] text-[#111A28] shadow-sm font-semibold'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span>{t}</span>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? 'bg-[#c5a880] border-[#c5a880] text-white' : 'border-slate-300'
                        }`}
                      >
                        {isSelected && <Check className="w-2.5 h-2.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs text-slate-500 hover:text-slate-800 font-medium px-4 py-2"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111A28] text-white hover:bg-[#1f2e46] shadow-md transition-all"
                >
                  View Recommendations & Finalize <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT & REVIEW */}
          {step === 4 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="p-4 rounded-2xl bg-[#faf6f0] border border-[#e8ded1]">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#9e8056] mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
                  Your Preliminary Clinical Assessment
                </div>
                <div className="text-xs text-slate-700 space-y-1">
                  <div>
                    <strong>Focus Areas:</strong> {data.concerns.length} selected ({data.concerns.join(', ')})
                  </div>
                  <div>
                    <strong>Aesthetic Goal:</strong> {data.aestheticGoal}
                  </div>
                  <div>
                    <strong>Timeframe:</strong> {data.timeframe}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={data.patientName}
                    onChange={(e) => setData({ ...data, patientName: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#c5a880]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number (for SMS confirmation) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(954) 000-0000"
                    value={data.phone}
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#c5a880]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#c5a880]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Special Notes or Dental Questions for Dr. Z (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Any past dental anxiety, specific tooth sensitivity, or upcoming events..."
                    value={data.notes}
                    onChange={(e) => setData({ ...data, notes: e.target.value })}
                    className="w-full px-4 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#c5a880]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="text-xs text-slate-500 hover:text-slate-800 font-medium px-4 py-2"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111A28] text-white hover:bg-[#1f2e46] shadow-lg shadow-[#111A28]/20 transition-all"
                >
                  Submit for Dr. Z's Personalized Review <CheckCircle className="w-4 h-4 text-[#c5a880]" />
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        /* SUBMISSION CONFIRMATION STATE */
        <div className="p-8 rounded-2xl bg-[#faf6f0] border border-[#e8ded1] text-center max-w-lg mx-auto space-y-4">
          <div className="w-14 h-14 rounded-full bg-[#c5a880] text-white flex items-center justify-center mx-auto shadow-md">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-serif font-medium text-[#111A28]">
            Assessment Received, {data.patientName || 'Friend'}!
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Dr. Zelka Licina and our Fort Lauderdale clinical concierge will review your selections ({data.concerns.length} focus areas) and prepare your customized aesthetic protocol before your arrival.
          </p>
          <div className="p-4 rounded-xl bg-white border border-slate-200 text-left text-xs space-y-1">
            <div className="text-slate-500">Contact Confirmation:</div>
            <div className="font-semibold text-slate-800">{data.phone} • {data.email}</div>
            <div className="text-[11px] text-[#9e8056] font-mono mt-1">Status: Priority Concierge Queue</div>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Start New Assessment
            </button>
            <a
              href="tel:9544089282"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#111A28] text-white hover:bg-[#1f2e46] shadow-md"
            >
              Call Dr. Z: (954) 408-9282
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
