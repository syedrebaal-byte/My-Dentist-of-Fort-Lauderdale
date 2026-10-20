import React, { useState, useRef, useCallback } from 'react';
import { BEFORE_AFTER_CASES } from '../data/clinicData';
import { Sparkles, ArrowLeftRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = BEFORE_AFTER_CASES[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full bg-[#111A28] rounded-3xl p-6 md:p-10 text-white shadow-2xl border border-slate-800">
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a880]/15 text-[#d4bc9b] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#c5a880]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
          Verified Clinical Transformations
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white tracking-tight">
          Subtle Artistry. Uncompromised Function.
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-2">
          Drag the center slider left and right to inspect the transition from natural worn enamel to Dr. Z's handcrafted feldspathic porcelain veneers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive Slider Viewport */}
        <div className="lg:col-span-8">
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-700/80 shadow-2xl bg-black"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
          >
            {/* "AFTER" Image (Full background) */}
            <img
              src={activeCase.afterImage}
              alt="Cosmetic Dentistry Smile Makeover After"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#0b131f]/85 backdrop-blur-md border border-[#c5a880]/40 text-[#d4bc9b] text-xs font-semibold tracking-wider uppercase">
              After: Bespoke Veneers
            </div>

            {/* "BEFORE" Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={activeCase.beforeImage}
                alt="Patient Smile Before Treatment"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: '100%'
                }}
              />
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-slate-600 text-slate-200 text-xs font-semibold tracking-wider uppercase">
                Before: Natural Wear
              </div>
            </div>

            {/* Divider Line & Interactive Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-0.5 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#c5a880] text-[#0b131f] flex items-center justify-center shadow-2xl border-2 border-white cursor-ew-resize pointer-events-auto hover:scale-110 active:scale-95 transition-transform">
                <ArrowLeftRight className="w-4 h-4 font-bold" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 mt-3 px-1">
            <span>← Slide left for After</span>
            <span className="font-mono text-[#c5a880]">Drag divider to compare</span>
            <span>Slide right for Before →</span>
          </div>
        </div>

        {/* Case Narrative Card */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          <div className="p-6 rounded-2xl bg-[#0e1624] border border-slate-700/80 shadow-inner">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#c5a880] mb-1">
              Case Study Profile
            </div>
            <h3 className="text-xl font-serif font-medium text-white mb-3">
              {activeCase.title}
            </h3>

            <div className="space-y-3.5 text-xs text-slate-300">
              <div>
                <span className="text-slate-400 font-medium block">Lead Clinician:</span>
                <span className="text-white font-semibold flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
                  {activeCase.doctor}
                </span>
              </div>

              <div>
                <span className="text-slate-400 font-medium block">Patient Concern:</span>
                <span className="text-slate-200 mt-0.5 block leading-relaxed">
                  {activeCase.chiefComplaint}
                </span>
              </div>

              <div>
                <span className="text-slate-400 font-medium block">Clinical Protocol:</span>
                <span className="text-[#e5d4be] mt-0.5 block leading-relaxed">
                  {activeCase.solution}
                </span>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">Treatment Duration:</span>
                <span className="font-mono text-[#c5a880] font-semibold">{activeCase.duration}</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
            <span>
              All photography represents authentic dental cases treated with ethical minimal-prep restoration protocols. No digital warping or deceptive retouching.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
