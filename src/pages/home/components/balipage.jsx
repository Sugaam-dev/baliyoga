import React, { useState } from "react";
import { Link } from "react-router-dom";
import baliHero from "../../../assets/images/home/balitemple.JPEG";

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

const PROGRAM_CATEGORIES = [
  {
    id: "multi-style-yttc",
    icon: "🧘",
    label: "Multi-Style YTTC",
    programs: [
      { name: "200hr Multi-Style YTTC", duration: "25 Days", price: "$1,450" },
      { name: "300hr Multi-Style YTTC", duration: "30 Days", price: "$1,890" },
      { name: "500hr Multi-Style YTTC", duration: "45 Days", price: "$2,650" },
    ],
  },
  {
    id: "kundalini-yttc",
    icon: "🔥",
    label: "Kundalini YTTC",
    programs: [
      { name: "100hr Kundalini YTTC", duration: "12 Days", price: "$890" },
      { name: "200hr Kundalini YTTC", duration: "25 Days", price: "$1,450" },
      { name: "300hr Kundalini YTTC", duration: "30 Days", price: "$1,790" },
    ],
  },
  {
    id: "short-courses",
    icon: "🌿",
    label: "Short Courses",
    programs: [
      { name: "7-Day Yoga Immersion", duration: "7 Days", price: "$490" },
      { name: "14-Day Foundation Course", duration: "14 Days", price: "$820" },
      { name: "Weekend Retreat", duration: "3 Days", price: "$220" },
    ],
  },
  {
    id: "specialization-retreats",
    icon: "🎵",
    label: "Specialization & Retreats",
    programs: [
      { name: "Yin & Restorative Specialization", duration: "10 Days", price: "$680" },
      { name: "Sound Healing Retreat", duration: "5 Days", price: "$390" },
      { name: "Ayurveda & Yoga Retreat", duration: "8 Days", price: "$560" },
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
                className="bg-white rounded-2xl border border-stone-200/70 p-7 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-serif text-xl font-semibold text-emerald-900 mb-2">
                  {p.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-6">
                  {p.duration}
                </p>
                <div className="mt-auto flex items-center justify-between pt-5 border-t border-stone-100">
                  <span className="font-serif text-2xl text-emerald-800">{p.price}</span>
                  <Link
                    to="/contact"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
                  >
                    Enroll
                  </Link>
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
