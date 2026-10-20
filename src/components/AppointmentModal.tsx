import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Phone, ShieldCheck, CheckCircle2, User, Mail } from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [selectedService, setSelectedService] = useState<string>(preselectedService || SERVICES[0].id);
  const [patientType, setPatientType] = useState<'new' | 'returning'>('new');
  const [preferredDay, setPreferredDay] = useState<string>('Wednesday (Late Evening Available)');
  const [preferredTime, setPreferredTime] = useState<string>('Morning (8:00 AM – 12:00 PM)');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [insurance, setInsurance] = useState<string>('PPO Insurance');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-md transition-all">
      <div
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl border border-[#e5dcd1] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-[#111A28] px-6 sm:px-8 py-5 text-white flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold text-[#c5a880] uppercase tracking-wider">
              {CLINIC_INFO.name}
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-medium mt-0.5">
              Request Your Consultation with Dr. Z
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto no-scrollbar">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Patient Type Toggle */}
              <div className="flex rounded-xl bg-slate-200/80 p-1 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setPatientType('new')}
                  className={`flex-1 py-2 rounded-lg transition-all ${
                    patientType === 'new'
                      ? 'bg-white text-[#111A28] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  New Patient (Comprehensive Exam & Consult)
                </button>
                <button
                  type="button"
                  onClick={() => setPatientType('returning')}
                  className={`flex-1 py-2 rounded-lg transition-all ${
                    patientType === 'returning'
                      ? 'bg-white text-[#111A28] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Existing Patient
                </button>
              </div>

              {/* Treatment Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Select Primary Care or Cosmetic Focus *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#c5a880]"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                  <option value="routine-cleaning">Routine Hygiene & Digital Oral Scan</option>
                  <option value="emergency-today">Emergency / Toothache Pain Relief (Today)</option>
                  <option value="second-opinion">Second Opinion Consultation</option>
                </select>
              </div>

              {/* Preferred Day & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
                    Preferred Day of the Week
                  </label>
                  <select
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#c5a880]"
                  >
                    <option value="Monday">Monday (8:00 AM – 5:00 PM)</option>
                    <option value="Tuesday">Tuesday (8:00 AM – 5:00 PM)</option>
                    <option value="Wednesday (Late Evening Available)">Wednesday (10:00 AM – 7:00 PM Evening)</option>
                    <option value="Thursday">Thursday (8:00 AM – 5:00 PM)</option>
                    <option value="Friday">Friday (8:00 AM – 3:00 PM)</option>
                    <option value="Saturday (Weekend)">Saturday (8:00 AM – 3:00 PM Weekend)</option>
                    <option value="First Available">First Available Immediate Slot</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
                    Preferred Time Window
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#c5a880]"
                  >
                    <option value="Morning (8:00 AM – 11:30 AM)">Morning (8:00 AM – 11:30 AM)</option>
                    <option value="Mid-day (11:30 AM – 2:00 PM)">Mid-day Lunch Hour (11:30 AM – 2:00 PM)</option>
                    <option value="Afternoon (2:00 PM – 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 7:00 PM)">Evening (Wednesdays Only)</option>
                  </select>
                </div>
              </div>

              {/* Patient Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-500" />
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="First & Last Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5a880]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    Direct Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(954) 555-0123"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5a880]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-800 mb-1 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#c5a880]"
                  />
                </div>
              </div>

              {/* Payment / Insurance Method */}
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Payment / Insurance Plan
                </label>
                <select
                  value={insurance}
                  onChange={(e) => setInsurance(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#c5a880]"
                >
                  <option value="PPO Insurance">Dental PPO Insurance (Delta, MetLife, Cigna, Aetna, BCBS, Guardian, etc.)</option>
                  <option value="Medicare">Medicare Dental Plan (Carington, Solstice, Liberty)</option>
                  <option value="Self-Pay">Self-Pay / Private Consultation</option>
                  <option value="Membership Plan">Interested in 'My Dental Membership' In-House Plan</option>
                  <option value="CareCredit or Financing">Interested in 0% Deferred Financing (CareCredit / Cherry / Alphaeon)</option>
                </select>
              </div>

              {/* Privacy and Direct Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>HIPAA compliant. Zero pressure. Full transparency.</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#111A28] text-white hover:bg-[#1f2e46] shadow-lg shadow-[#111A28]/25 transition-all"
                >
                  Confirm Consultation Request
                </button>
              </div>
            </form>
          ) : (
            /* SUBMISSION CONFIRMATION */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#c5a880] text-white flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-serif font-medium text-[#111A28]">
                Request Confirmed for {fullName}!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for choosing Dr. Zelka Licina and My Dentist of Fort Lauderdale. Our clinical concierge will contact you via text or call at <strong>{phone}</strong> to confirm your specific room reservation.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>{CLINIC_INFO.contact.address}, {CLINIC_INFO.contact.city}, FL {CLINIC_INFO.contact.zip}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>Practice Line: {CLINIC_INFO.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Clock className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span>Requested Slot: {preferredDay} • {preferredTime}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#111A28] text-white hover:bg-[#1f2e46] transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
