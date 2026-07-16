import React, { useState } from "react";
import { Link } from "react-router-dom";
import baliHero from "../../../assets/images/home/bali1.jpg";

// ────────────────────────────────────────────────────────────
// Bali destination landing page — /programs/bali
// Brand color: emerald (matches the Bali card on the home page)
// Signature accent: temple gold, used sparingly for ritual feel
// ────────────────────────────────────────────────────────────

const whyCards = [
  {
    icon: "🌾",
    title: "Sacred Rice Terraces",
    description: "Train steps away from Ubud's emerald terraces and jungle rivers.",
  },
  {
    icon: "🛕",
    title: "Temple Culture",
    description: "Daily life woven with Hindu-Balinese ritual, offerings & ceremony.",
  },
  {
    icon: "☀️",
    title: "Year-Round Warmth",
    description: "Tropical climate means outdoor practice every single day.",
  },
  {
    icon: "🧘",
    title: "Holistic Curriculum",
    description: "Ayurveda, sound healing & meditation alongside asana training.",
  },
];

// NOTE: id values match the ":category" keys in baliDataMap.js exactly
// (ytt, kundalini, short-courses, specialization)
// slug values match the keys inside each category in baliDataMap.js exactly
//
// Added fields: badge (top-right pill), location (pin line),
// features (checkmark list) — mirrors the Rishikesh-style card design.
const PROGRAM_CATEGORIES = [
  {
    id: "ytt",
    icon: "🧘",
    label: "Multi-Style YTTC",
    programs: [
      {
        name: "6 Days 50hr Multi-Style YTTC",
        duration: "6 Days",
        price: "$650",
        slug: "6-days-50hr-multi-style",
        badge: "UBUD STAY",
        location: "ubud",
        features: ["YACEP Certified", "Meals & accommodation", "All materials included"],
      },
      {
        name: "10 Days 100hr Multi-Style YTTC",
        duration: "10 Days",
        price: "$999",
        slug: "10-days-100hr-multi-style",
        badge: "ISLAND IMMERSION",
        location: "ubud",
        features: ["Yoga Alliance Certified", "Meals & accommodation", "All materials included"],
      },
      {
        name: "20 Days 200hr Multi-Style YTTC",
        duration: "20 Days",
        price: "$1,299",
        slug: "20-days-200hr-multi-style",
        badge: "BEST VALUE",
        location: "ubud",
        features: ["RYT-200 Certified", "Meals & accommodation", "All materials included"],
      },
      {
        name: "300hr Multi-Style YTTC",
        duration: "26 Days",
        price: "$2099",
        slug: "300hr-multi-style-bali",
        badge: "DEEP PRACTICE",
        location: "ubud",
        features: ["RYT-300 Certified", "Meals & accommodation", "All materials included"],
      },
      {
        name: "500hr Multi-Style YTTC",
        duration: "56Days",
        price: "$3,599",
        slug: "500hr-multi-style-bali",
        badge: "ULTIMATE MASTERY",
        location: "ubud",
        features: ["RYT-500 Certified", "Meals & accommodation", "All materials included"],
      },
    ],
  },
  {
    id: "kundalini",
    icon: "🔥",
    label: "Kundalini YTTC",
    programs: [
      {
        name: "6 Days 50hr Kundalini YTTC",
        duration: "6 Days",
        price: "$650",
        slug: "6-days-50hr-kundalini",
        badge: "UBUD STAY",
        location: "ubud",
        features: ["YACEP Certified", "Meals & accommodation", "All materials included"],
      },
      {
        name: "100hr Kundalini YTTC",
        duration: "10 Days",
        price: "$999",
        slug: "100hr-kundalini-bali",
        badge: "ISLAND IMMERSION",
        location: "ubud",
        features: ["Yoga Alliance Certified", "Meals & accommodation", "All materials included"],
      },
      {
        name: "200hr Kundalini YTTC",
        duration: "20 Days",
        price: "$1,299",
        slug: "200hr-kundalini-bali",
        badge: "BEST VALUE",
        location: "ubud",
        features: ["RYT-200 Certified", "Meals & accommodation", "All materials included"],
      },
      {
        name: "300hr Kundalini YTTC",
        duration: "30 Days",
        price: "$2,199",
        slug: "300hr-kundalini-bali",
        badge: "DEEP PRACTICE",
        location: "ubud",
        features: ["RYT-300 Certified", "Meals & accommodation", "All materials included"],
      },
      {
        name: "500hr Kundalini YTTC",
        duration: "45 Days",
        price: "$3,599",
        slug: "500hr-kundalini-bali",
        badge: "ULTIMATE MASTERY",
        location: "ubud",
        features: ["RYT-500 Certified", "Meals & accommodation", "All materials included"],
      },
    ],
  },
  {
    id: "short-courses",
    icon: "🌿",
    label: "Short Courses",
    programs: [
      {
        name: "Acro Yoga Course",
        duration: "Short Course",
        price: "$799",
        slug: "acro-yoga-course",
        badge: "PARTNER FLOW",
        location: "ubud",
        features: ["Certificate Included", "Meals & accommodation", "All materials included"],
      },
      {
        name: "Aerial Yoga Course",
        duration: "Short Course",
        price: "$550",
        slug: "aerial-yoga-course",
        badge: "SILK & SKY",
        location: "canggu",
        features: ["Certificate Included", "Meals & accommodation", "All materials included"],
      },
      {
        name: "50hr Yin Yoga",
        duration: "6 Days",
        price: "$650",
        slug: "50hr-yin-yoga",
        badge: "SLOW & DEEP",
        location: "ubud",
        features: ["YACEP Certified", "Meals & accommodation", "All materials included"],
      },
      {
        name: "85hr Prenatal Yoga",
        duration: "short course",
        price: "$650",
        slug: "85hr-prenatal-yoga",
        badge: "MOTHER & CHILD",
        location: "ubud",
        features: ["Certified Instructors", "Meals & accommodation", "All materials included"],
      },
    ],
  },
  {
    id: "specialization",
    icon: "🎵",
    label: "Specialization & Retreats",
    programs: [
      {
        name: "100hr Yoga Therapy & Ayurveda",
        duration: "10 Days",
        price: "$1299",
        slug: "100hr-yoga-therapy-ayurveda",
        badge: "HEALING FOCUS",
        location: "ubud",
        features: ["Yoga Alliance Certified", "Meals & accommodation", "All materials included"],
      },
      {
        name: "Ayurvedic Treatment TTC",
        duration: "12 Days",
        price: "$1450",
        slug: "ayurvedic-treatment-bali",
        badge: "AYURVEDA IMMERSION",
        location: "ubud",
        features: ["Certificate Included", "Meals & accommodation", "All materials included"],
      },
      {
        name: "Abhyangam Massage Training",
        duration: "5 hours",
        price: "$250",
        slug: "abhyangam-massage-training-bali",
        badge: "HANDS-ON SKILL",
        location: "ubud",
        features: ["Certificate Included", "All materials included"],
      },
      {
        name: "Vedic Sound Healing Level 1 & 2",
        duration: "7Days",
        price: "$400",
        slug: "vedic-sound-healing-level-1-2",
        badge: "SOUND JOURNEY",
        location: "ubud",
        features: ["Certificate Included", "All materials included"],
      },
    ],
  },
];

function BaliLandingPage() {
  const [activeCategory, setActiveCategory] = useState(PROGRAM_CATEGORIES[0].id);
  const activeCategoryData = PROGRAM_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="bg-white">
      {/* ───────── HERO ───────── */}
      <section className="relative h-screen min-h-[560px] w-full flex items-center overflow-hidden">
        <img
          src={baliHero}
          alt="Bali temple"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[4px] text-amber-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Island of the Gods
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.04] tracking-tight mb-3">
              Awaken in Bali
            </h1>
            <p className="font-serif italic text-base md:text-xl text-white/70 mb-8">
              Where ancient ritual meets ocean breeze
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#programs"
                className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Browse Programs
              </a>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/40 text-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── WHY BALI ───────── */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-amber-600">
              Why Bali?
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-emerald-900 mt-3 mb-5 leading-tight">
              Awaken in Bali
            </h2>
            <p className="text-stone-600 leading-relaxed text-[15px] md:text-base">
              Nestled between volcanic hills and turquoise coastline, Bali has
              drawn seekers for generations. Yoga here feels woven into daily
              life — temple bells, incense, and warm ocean air setting the
              rhythm for practice.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {whyCards.map((card, i) => (
              <div
                key={i}
                className="bg-stone-50 border border-stone-200/70 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-2xl">{card.icon}</span>
                <h3 className="font-serif text-lg font-semibold text-emerald-900 mt-3 mb-1.5">
                  {card.title}
                </h3>
                <p className="text-[13px] text-stone-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* thin gold divider — temple-thread motif */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
      </div>

      {/* ───────── PROGRAMS ───────── */}
      <section id="programs" className="w-full bg-stone-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[11px] font-bold uppercase tracking-[3px] text-amber-600">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-emerald-900 mt-3 mb-3">
            Bali Programs
          </h2>
          <p className="text-stone-500 text-sm md:text-base mb-10">
            Yoga Alliance certified · Meals & stay included · Max 12 students per batch
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {PROGRAM_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-emerald-700 text-white shadow-md"
                    : "bg-white text-stone-600 border border-stone-200 hover:border-emerald-300"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeCategoryData.programs.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-stone-200/70 overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* ── Header band: hour badge + label pill (top-right) ── */}
                <div className="relative bg-emerald-700 px-6 pt-5 pb-6">
                  {p.badge && (
                    <span className="absolute top-3 right-3 bg-white/15 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {p.badge}
                    </span>
                  )}
                  <h3 className="font-serif text-2xl font-semibold text-white leading-tight">
                    {p.name}
                  </h3>
                </div>

                {/* ── Body: duration, location, features ── */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-stone-400 mb-4">
                    <span className="flex items-center gap-1">
                      🕐 {p.duration}
                    </span>
                    {p.location && (
                      <span className="flex items-center gap-1">
                        📍 {p.location}
                      </span>
                    )}
                  </div>

                  {p.features && p.features.length > 0 && (
                    <ul className="space-y-1.5 mb-6">
                      {p.features.map((f, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-[13px] text-stone-600"
                        >
                          <span className="text-emerald-600 font-bold">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto flex items-center justify-between pt-5 border-t border-stone-100">
                    <span className="font-serif text-2xl text-emerald-800">{p.price}</span>
                    {/* This is the ONLY Enroll link that should use activeCategory/p.slug —
                        it is inside the .map(), so both variables are in scope here. */}
                    <Link
                      to={`/${activeCategory}/${p.slug}`}
                      className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
                    >
                      Enroll
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA FOOTER ───────── */}
      <section className="relative w-full bg-emerald-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(217,180,90,0.18),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-2">
              Ready to train in Bali?
            </h2>
            <p className="text-emerald-100/70 text-sm md:text-base">
              Cohorts are capped at 12 — secure your spot today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            {/* This button is OUTSIDE the .map(), so it must NOT reference p.slug.
                It just sends people to the contact/enquiry page. */}
            <Link
              to="/contact"
              className="bg-white text-emerald-900 px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Book Appointment
            </Link>
            <a
              href="#programs"
              className="border border-white/40 text-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white/10"
            >
              View Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BaliLandingPage;