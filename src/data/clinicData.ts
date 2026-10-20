import { IMAGES } from '../assets/images';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  tagline: string;
  fullDesc: string;
  image: string;
  benefits: string[];
  duration: string;
  idealFor: string;
  steps: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  text: string;
  source: 'Google Review' | 'Verified Patient';
}

export const CLINIC_INFO = {
  name: "My Dentist of Fort Lauderdale",
  shortName: "My Dentist FTL",
  leadDoctor: {
    fullName: "Dr. Zelka Licina, DDS",
    nickname: "Dr. Z",
    title: "Lead Cosmetic & General Dentist",
    bio: "Dr. Zelka Licina ('Dr. Z') blends surgical precision with bespoke cosmetic artistry. She earned her Doctorate of Dental Surgery from the prestigious New York University College of Dentistry in 2012, followed by an intensive General Practice Residency at Columbia University College of Dental Medicine in 2013, with oral surgery training at New York Presbyterian Hospital. Dr. Z believes dental visits in South Florida should feel relaxing, transparent, and restorative.",
    education: [
      "New York University College of Dentistry — DDS (2012)",
      "Columbia University College of Dental Medicine — GPR Residency (2013)",
      "New York Presbyterian Hospital — Oral Surgery Internship"
    ],
    memberships: [
      "American Dental Association (ADA)",
      "Florida Dental Association (FDA)",
      "Atlantic Coast District Dental Association (ACDDA)",
      "Academy of General Dentistry (AGD)"
    ],
    image: IMAGES.drZelka
  },
  contact: {
    address: "2500 E Oakland Park Blvd",
    city: "Fort Lauderdale",
    state: "FL",
    zip: "33306",
    neighborhood: "Oakland Park / Coral Ridge",
    phone: "(954) 408-9282",
    phoneClean: "+19544089282",
    email: "appointments@mydentistftl.com",
    googleRating: 4.9,
    googleReviewCount: 148
  },
  hours: [
    { day: "Monday", hours: "8:00 AM – 5:00 PM" },
    { day: "Tuesday", hours: "8:00 AM – 5:00 PM" },
    { day: "Wednesday", hours: "10:00 AM – 7:00 PM", highlight: "Late Evening Appointments" },
    { day: "Thursday", hours: "8:00 AM – 5:00 PM" },
    { day: "Friday", hours: "8:00 AM – 3:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 3:00 PM", highlight: "Weekend Availability" },
    { day: "Sunday", hours: "Closed" }
  ],
  insurances: [
    "Aetna PPO",
    "Delta Dental",
    "MetLife",
    "Cigna",
    "Guardian",
    "Blue Cross Blue Shield",
    "Humana",
    "Ameritas",
    "United Healthcare",
    "United Concordia",
    "GEHA",
    "Aflac",
    "Carington Medicare",
    "Solstice",
    "Liberty Dental"
  ],
  financing: [
    {
      partner: "CareCredit®",
      terms: "Up to 24 Months 0% Deferred Interest",
      desc: "Flexible monthly installments tailored to cosmetic, restorative, and surgical care."
    },
    {
      partner: "Cherry Payment Plans",
      terms: "Fast 60-Second Approval, No Hard Credit Check",
      desc: "Instant pre-qualification with 0% APR options directly from your smartphone."
    },
    {
      partner: "Alphaeon® Credit",
      terms: "Dedicated Healthcare Financing",
      desc: "Generous credit lines with promotional financing options for comprehensive smile transformations."
    }
  ],
  membershipPlan: {
    name: "My Dental Membership Plan",
    tagline: "High-end concierge dental wellness without insurance headaches",
    benefits: [
      "2 Comprehensive preventative hygiene visits per year",
      "All routine digital 3D intraoral & panoramic X-rays",
      "Emergency exam & diagnostic X-ray included",
      "15% to 20% savings on all cosmetic, restorative, and surgical treatments",
      "No waiting periods, no deductibles, no annual maximums"
    ]
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "cosmetic-veneers",
    title: "Handcrafted Porcelain Veneers & Smile Makeovers",
    shortDesc: "Custom-sculpted ultra-thin ceramic veneers designed to mirror natural tooth translucency, proportion, and luminosity.",
    tagline: "The Art of Natural Smile Harmony",
    fullDesc: "Dr. Z treats smile aesthetics as bespoke facial architecture. Rather than sterile 'chicklet' smiles, our veneers are individually shaded, textured, and bonded to celebrate your unique facial contours and lip line. Perfect for worn enamel, deep tetracycline staining, uneven spacing, or chip corrections.",
    image: IMAGES.smileMakeover,
    benefits: [
      "Stain-resistant laboratory-grade feldspathic and lithium disilicate porcelain",
      "Conservative minimal-prep techniques that preserve healthy natural enamel",
      "Custom trial smile mock-up before permanent bonding",
      "Engineered for 15–20+ years of luminous resilience"
    ],
    duration: "2–3 visits over 2–3 weeks",
    idealFor: "Patients seeking corrected proportions, closed gaps, whiter smiles, or renewed confidence.",
    steps: [
      { step: "1. Digital Aesthetic Analysis", detail: "High-resolution 3D facial imaging and digital smile mapping." },
      { step: "2. Precision Prep & Trial Smile", detail: "Minimal preparation and wear of aesthetic temporaries to test phonetics." },
      { step: "3. Master Ceramist Handcrafting", detail: "Custom multi-layered ceramic shade blending by artisanal laboratory." },
      { step: "4. Permanent Adhesive Bonding", detail: "Micro-mechanical bonding for permanent, breathtaking integration." }
    ],
    faqs: [
      { q: "Do porcelain veneers look natural?", a: "Yes. Dr. Z uses layered translucent ceramics that recreate natural light transmission, incisal translucency, and natural surface texture." },
      { q: "Does the procedure hurt?", a: "We prioritize gentle dentistry. We use local anesthesia, digital numbing, and soothing amenities. Most patients report zero discomfort." }
    ]
  },
  {
    id: "dental-implants",
    title: "Precision Dental Implants & Tooth Replacement",
    shortDesc: "State-of-the-art biocompatible titanium and zirconia implants restoring full chewing force and natural bone vitality.",
    tagline: "Permanent Strength. Indistinguishable Aesthetics.",
    fullDesc: "A missing tooth compromises bone density and neighboring teeth alignment. Dr. Z completed surgical training at New York Presbyterian Hospital and Columbia University, ensuring precise computer-guided implant placement that seamlessly fuses with your jawbone.",
    image: IMAGES.dentalImplants,
    benefits: [
      "Prevents ongoing facial bone loss and hollowed cheek contours",
      "Restores 100% natural chewing strength without dietary restrictions",
      "No anchoring or grinding down adjacent healthy teeth",
      "Lifetime potential with simple routine dental hygiene"
    ],
    duration: "3–6 months for osseointegration, single-visit placement",
    idealFor: "Single missing teeth, failing root canals, or full-arch replacement.",
    steps: [
      { step: "1. 3D CBCT Scan & Surgical Guide", detail: "Sub-millimeter mapping of nerves, bone depth, and angulation." },
      { step: "2. Guided Implant Placement", detail: "Gentle surgical insertion of the biocompatible titanium root fixture." },
      { step: "3. Healing & Osseointegration", detail: "Natural bone fusion creating an unyielding structural anchor." },
      { step: "4. Custom Zirconia Crown Delivery", detail: "Precision-milled crown color-matched to perfection." }
    ],
    faqs: [
      { q: "Am I a candidate for dental implants?", a: "Most adults in good health with adequate bone density are ideal candidates. If bone volume is low, we offer gentle bone grafting." },
      { q: "How long do implants last?", a: "With regular cleanings and good oral hygiene, dental implants have a clinical success rate above 98% and can last a lifetime." }
    ]
  },
  {
    id: "clear-aligners",
    title: "Clear Aligners & Invisible Orthodontics",
    shortDesc: "Discreet, removable clear aligners that gently straighten crowded, gapped, or misaligned smiles without metal brackets.",
    tagline: "Seamless Alignment Built for Modern Lifestyles",
    fullDesc: "Straighten your smile discreetly without disruptive metal wires. Clear aligners utilize custom medical-grade SmartTrack polymers to systematically guide your teeth into optimal occlusion, enhancing both your aesthetic line and periodontal health.",
    image: IMAGES.clearAligners,
    benefits: [
      "Virtually imperceptible transparent trays",
      "Removable for dining, brushing, flossing, and special events",
      "No irritating metal wires, brackets, or emergency poky wires",
      "Digital progress monitoring with fewer in-office visits"
    ],
    duration: "6–18 months depending on case complexity",
    idealFor: "Adults and professionals with crowded incisors, crossbites, spacing, or relapse from teenage braces.",
    steps: [
      { step: "1. Digital Optical Impression", detail: "Mess-free 3D digital intraoral scan replacing gooey impression trays." },
      { step: "2. 3D Smile Trajectory Simulation", detail: "Preview your exact final tooth positions before starting." },
      { step: "3. Custom Aligners Fabrication", detail: "Series of tailored trays calibrated for gentle incremental tooth movement." },
      { step: "4. Periodic Check-ins & Retainers", detail: "Brief progress milestones followed by clear nighttime retainers." }
    ],
    faqs: [
      { q: "How many hours a day must I wear them?", a: "We recommend 20 to 22 hours daily, removing them only to eat, drink warm liquids, and brush." },
      { q: "Is treatment covered by insurance?", a: "Many PPO plans include orthodontic benefits that cover a significant portion of clear aligner treatment." }
    ]
  },
  {
    id: "facial-aesthetics-tmj",
    title: "Facial Aesthetics, Botox & TMJ Relief",
    shortDesc: "Therapeutic and aesthetic neuromodulators to soften facial tension, alleviate jaw pain, and reduce gummy smile exposure.",
    tagline: "Dentist-Level Facial Anatomy Mastery",
    fullDesc: "Because dentists perform thousands of precise facial injections each year, Dr. Z has unparalleled anatomical mastery of facial musculature. We utilize Botox and therapeutic neuromodulators for both radiant aesthetic rejuvenation and profound relief from chronic jaw clenching, TMJ migraine pressure, and teeth grinding (bruxism).",
    image: IMAGES.botoxWellness,
    benefits: [
      "Relieves chronic jaw clenching (masseter hypertrophy) and tension headaches",
      "Protects teeth from subconscious nocturnal grinding and enamel fractures",
      "Softens dynamic forehead wrinkles, crow's feet, and glabella lines",
      "Gentle correction for excessive gummy smile display without surgery"
    ],
    duration: "15–30 minute appointment; results in 5–14 days",
    idealFor: "Patients experiencing jaw tightness, clicking joints, or seeking natural facial smoothing.",
    steps: [
      { step: "1. Musculoskeletal Evaluation", detail: "Palpation of masseter and temporalis muscle tone and bite mechanics." },
      { step: "2. Pinpoint Aesthetic Mapping", detail: "Micro-dosing planned specifically to preserve natural expressive movement." },
      { step: "3. Ultra-Fine Injections", detail: "Virtually painless administration using micro-needles." },
      { step: "4. Maintenance Schedule", detail: "Therapeutic relief lasts 3–4 months with cumulative muscle relaxation." }
    ],
    faqs: [
      { q: "Will Botox make my face feel frozen?", a: "No. Dr. Z's philosophy is 'untouched natural elegance'. Your face retains full natural emotion while eliminating painful muscular hyper-tension." },
      { q: "Can Botox help my teeth grinding?", a: "Yes. Injecting small doses into the masseter muscle weakens the involuntary grinding reflex without impairing normal chewing or speaking." }
    ]
  },
  {
    id: "preventative-wellness",
    title: "Comprehensive Wellness & Gentle Hygiene",
    shortDesc: "Thorough digital health assessments, ultrasonic biofilm cleanings, and low-radiation 3D imaging in a tranquil setting.",
    tagline: "Proactive Healthcare Rooted in Patient Comfort",
    fullDesc: "Oral health is intimately linked to cardiovascular wellness and systemic health. Our preventative protocol combines gentle ultrasonic scaling, oral cancer screenings, digital diagnostic imaging, and personalized remineralization therapies to protect your teeth before problems arise.",
    image: IMAGES.clinicLounge,
    benefits: [
      "Ultra-low radiation HD digital diagnostic imaging",
      "Gentle ultrasonic calculus removal that is easy on sensitive gums",
      "Comprehensive periodontal pocket screening and oral cancer screening",
      "Spa-like amenities: streaming entertainment, warm blankets, and noise-canceling headphones"
    ],
    duration: "50–60 minutes",
    idealFor: "All adults and families desiring meticulous, anxiety-free routine dental maintenance.",
    steps: [
      { step: "1. Digital Diagnostic Imaging", detail: "Low-radiation bite-wing and panoramic digital scans." },
      { step: "2. Periodontal & Oral Cancer Exam", detail: "Detailed examination of soft tissues, tongue, and gum depths." },
      { step: "3. Gentle Ultrasonic Cleansing", detail: "Cavitation technology removes tartar and bacterial biofilm effortlessly." },
      { step: "4. Polishing & Protective Fluoride", detail: "Enamel smoothing and customized preventative home-care guidance." }
    ],
    faqs: [
      { q: "I have severe dental anxiety. How can you help?", a: "We designed our Fort Lauderdale clinic specifically for anxious patients. We take breaks whenever requested, offer calming headphones, and maintain an unhurried, gentle environment." }
    ]
  },
  {
    id: "emergency-dentistry",
    title: "Same-Day Emergency Dental Care",
    shortDesc: "Rapid-response relief for severe toothaches, broken teeth, knocked-out teeth, lost crowns, or acute oral trauma.",
    tagline: "Immediate Relief When You Need It Most",
    fullDesc: "Dental emergencies never happen on schedule. Dr. Z and our clinical team reserve dedicated emergency slots daily to diagnose the source of your pain, stop infection, and restore your comfort immediately.",
    image: IMAGES.hero,
    benefits: [
      "Priority same-day emergency appointment reservations",
      "Immediate pain management and infection control",
      "In-house digital diagnostic capabilities to identify root causes instantly",
      "Emergency hours on Wednesday evenings (until 7 PM) and Saturdays (until 3 PM)"
    ],
    duration: "Immediate triage; 45–90 minutes",
    idealFor: "Sudden severe toothache, chipped/cracked tooth, facial swelling, or dislodged crown.",
    steps: [
      { step: "1. Urgent Phone Triage", detail: "Call (954) 408-9282 for instant triage guidance and immediate booking." },
      { step: "2. Focused Diagnostic Scans", detail: "Targeted digital X-rays to pinpoint nerve inflammation or fracture lines." },
      { step: "3. Direct Pain Relief", detail: "Immediate anesthetic alleviation and therapeutic stabilization." },
      { step: "4. Definitive Treatment Plan", detail: "Clear explanation of long-term restorative solutions with transparent pricing." }
    ],
    faqs: [
      { q: "What should I do if my tooth is knocked out?", a: "Gently rinse it without touching the root, place it in a cup of cold milk or your own saliva, and call us immediately at (954) 408-9282. Timing is critical within the first 60 minutes." }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    author: "Jessica M.",
    location: "Coral Ridge, Fort Lauderdale",
    treatment: "Porcelain Veneers & Smile Makeover",
    rating: 5,
    date: "1 month ago",
    source: "Google Review",
    text: "Dr. Z is an absolute master artist. I had always been insecure about my front teeth after an accident in college. She listened to every detail of what I wanted, walked me through the 3D mock-up, and the final porcelain veneers look so completely natural that no one guesses I have veneers — they just compliment my smile constantly. The Fort Lauderdale office feels like a luxury resort!"
  },
  {
    id: "test-2",
    author: "David R.",
    location: "Las Olas, Fort Lauderdale",
    treatment: "Dental Implant & Crown",
    rating: 5,
    date: "3 months ago",
    source: "Google Review",
    text: "I avoided the dentist for years because of past trauma. Finding Dr. Zelka Licina was life changing. She placed a dental implant for a fractured molar and the entire process was shockingly painless. Her team explains everything beforehand, there are no surprise bills, and her gentle demeanor immediately puts you at ease."
  },
  {
    id: "test-3",
    author: "Elena S.",
    location: "Victoria Park, Fort Lauderdale",
    treatment: "Clear Aligners & TMJ Relief",
    rating: 5,
    date: "2 months ago",
    source: "Google Review",
    text: "The Wednesday evening hours are a blessing for working professionals! Dr. Z treated my TMJ jaw clenching with Botox and set me up with clear aligners. My morning tension headaches vanished in a week, and my smile is straighter than it's ever been. Outstanding practice."
  },
  {
    id: "test-4",
    author: "Michael K.",
    location: "Pompano Beach / FTL",
    treatment: "Emergency Dental & Routine Care",
    rating: 5,
    date: "4 months ago",
    source: "Google Review",
    text: "Broke a crown on a Friday afternoon right before an anniversary trip. Dr. Z took me in same-day, stabilized the tooth with a beautiful temporary, and relieved all pain. She has earned my patient loyalty for life. The best dentist in Fort Lauderdale by far."
  }
];

export const BEFORE_AFTER_CASES = [
  {
    id: "case-1",
    title: "Handcrafted Porcelain Veneers",
    doctor: "Dr. Zelka Licina, DDS",
    patientAge: "34-year-old marketing director",
    chiefComplaint: "Enamel wear, chipped incisal edges, and uneven shade discoloration",
    solution: "8 Custom minimal-prep feldspathic porcelain veneers in shade BL2 with natural incisal translucency",
    duration: "2 weeks",
    beforeImage: IMAGES.smileBefore,
    afterImage: IMAGES.smileAfter
  }
];

export const CLINIC_AMENITIES = [
  { title: "Boutique Reception Lounge", desc: "Italian travertine, organic wood fluting, and artisanal beverage bar." },
  { title: "Ceiling Entertainment Screens", desc: "Enjoy your favorite Netflix shows or tranquil nature streams while seated." },
  { title: "Active Noise-Canceling Audio", desc: "Bose headphones delivering soothing acoustics to eliminate clinical sounds." },
  { title: "Aromatherapy & Warm Towels", desc: "Calming essential oils and warm herbal face towels post-treatment." },
  { title: "Sub-Millimeter 3D Digital Scans", desc: "No messy goop trays — fast, comfortable optical impressions in 60 seconds." },
  { title: "Zero-Wait Concierge Protocol", desc: "We respect your schedule; we run on time and honor personal privacy." }
];
