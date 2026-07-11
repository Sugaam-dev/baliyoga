import React, { useState } from "react";
import { Link } from "react-router-dom";
// TODO: replace with a real Rishikesh image once available.
// Run this to check what's in your assets folder:
//   find "src/assets/images" -iname "*rishikesh*" -o -iname "*ganges*" -o -iname "*himalaya*"
import rishikeshHero from "../../../assets/images/home/bali2.jpg";

// ────────────────────────────────────────────────────────────
// Rishikesh destination landing page — /programs/rishikesh
// Brand color: orange/saffron (matches the Rishikesh card on home page)
// Signature accent: Ganges-blue thread, used sparingly for river feel
// ────────────────────────────────────────────────────────────

const whyCards = [
  {
    icon: "🏔️",
    title: "Himalayan Foothills",
    description: "Train beneath snow-capped peaks along the sacred Ganges.",
  },
  {
    icon: "🕉️",
    title: "Birthplace of Yoga",
    description: "Study where yoga's ancient lineage began, taught by native gurus.",
  },
  {
    icon: "🌊",
    title: "Ganga Aarti",
    description: "Evening river ceremonies steps from your ashram.",
  },
  {
    icon: "🧘",
    title: "Authentic Ashram Life",
    description: "Simple living, satsangs & meditation woven into daily rhythm.",
  },
];

const PROGRAM_CATEGORIES = [
  {
    id: "multi-style-yttc",
    icon: "🧘",
    label: "Multi-Style YTTC",
    programs: [
      { name: "200hr Multi-Style YTTC", duration: "25 Days", price: "$1,290" },
      { name: "300hr Multi-Style YTTC", duration: "30 Days", price: "$1,690" },
      { name: "500hr Multi-Style YTTC", duration: "45 Days", price: "$2,390" },
    ],
  },
  {
    id: "kundalini-yttc",
    icon: "🔥",
    label: "Kundalini YTTC",
    programs: [
      { name: "100hr Kundalini YTTC", duration: "12 Days", price: "$790" },
      { name: "200hr Kundalini YTTC", duration: "25 Days", price: "$1,290" },
      { name: "300hr Kundalini YTTC", duration: "30 Days", price: "$1,590" },
    ],
  },
  {
    id: "short-courses",
    icon: "🌿",
    label: "Short Courses",
    programs: [
      { name: "7-Day Yoga Immersion", duration: "7 Days", price: "$420" },
      { name: "14-Day Foundation Course", duration: "14 Days", price: "$730" },
      { name: "Weekend Ganges Retreat", duration: "3 Days", price: "$190" },
    ],
  },
  {
    id: "specialization-retreats",
    icon: "🎵",
    label: "Specialization & Retreats",
    programs: [
      { name: "Ashtanga Specialization", duration: "10 Days", price: "$620" },
      { name: "Meditation & Pranayama Retreat", duration: "5 Days", price: "$350" },
      { name: "Ayurveda & Yoga Retreat", duration: "8 Days", price: "$510" },
    ],
  },
];

function RishikeshLandingPage() {
  const [activeCategory, setActiveCategory] = useState(PROGRAM_CATEGORIES[0].id);
  const activeCategoryData = PROGRAM_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="bg-white">
      {/* ───────── HERO ───────── */}
      <section className="relative h-screen min-h-[560px] w-full flex items-center overflow-hidden">
        <img
          src={rishikeshHero}
          alt="Rishikesh Ganges"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[4px] text-sky-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              Yoga Capital of the World
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.04] tracking-tight mb-3">
              Rise in Rishikesh
            </h1>
            <p className="font-serif italic text-base md:text-xl text-white/70 mb-8">
              Where the Ganges flows and yoga was born
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#programs"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
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

      {/* ───────── WHY RISHIKESH ───────── */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-sky-600">
              Why Rishikesh?
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-orange-800 mt-3 mb-5 leading-tight">
              Rise in Rishikesh
            </h2>
            <p className="text-stone-600 leading-relaxed text-[15px] md:text-base">
              Perched on the banks of the sacred Ganges, beneath the eternal
              Himalayas — Rishikesh is where yoga was born for the world.
              Every street hums with mantra, incense and the rush of the
              river below.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {whyCards.map((card, i) => (
              <div
                key={i}
                className="bg-stone-50 border border-stone-200/70 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-2xl">{card.icon}</span>
                <h3 className="font-serif text-lg font-semibold text-orange-800 mt-3 mb-1.5">
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

      {/* thin river-blue divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
      </div>

      {/* ───────── PROGRAMS ───────── */}
      <section id="programs" className="w-full bg-stone-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[11px] font-bold uppercase tracking-[3px] text-sky-600">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-orange-800 mt-3 mb-3">
            Rishikesh Programs
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
                    ? "bg-orange-600 text-white shadow-md"
                    : "bg-white text-stone-600 border border-stone-200 hover:border-orange-300"
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
                <h3 className="font-serif text-xl font-semibold text-orange-800 mb-2">
                  {p.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-6">
                  {p.duration}
                </p>
                <div className="mt-auto flex items-center justify-between pt-5 border-t border-stone-100">
                  <span className="font-serif text-2xl text-orange-700">{p.price}</span>
                  <Link
                    to="/contact"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
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
      <section className="relative w-full bg-orange-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.16),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-2">
              Ready to train in Rishikesh?
            </h2>
            <p className="text-orange-100/70 text-sm md:text-base">
              Cohorts are capped at 12 — secure your spot today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/contact"
              className="bg-white text-orange-900 px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
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

export default RishikeshLandingPage;
