import React, { useState } from "react";
import { Link } from "react-router-dom";
// TODO: replace with a real Mysore image once available.
// Run this to check what's in your assets folder:
//   find "src/assets/images" -iname "*mysore*" -o -iname "*ashtanga*" -o -iname "*palace*"
import mysoreHero from "../../../assets/images/home/bali3.jpg";

// ────────────────────────────────────────────────────────────
// Mysore destination landing page — /programs/mysore
// Brand color: purple (matches the Mysore card on home page)
// Signature accent: royal-gold thread, nodding to Mysore's palace heritage
// ────────────────────────────────────────────────────────────

const whyCards = [
  {
    icon: "🕉️",
    title: "Ashtanga Lineage",
    description: "Train in the tradition of Sri K. Pattabhi Jois, direct from Mysore.",
  },
  {
    icon: "🏰",
    title: "Royal Heritage",
    description: "A city of palaces, silk & sandalwood, steeped in South Indian culture.",
  },
  {
    icon: "🧘",
    title: "Disciplined Practice",
    description: "Structured Mysore-style self-practice under close teacher guidance.",
  },
  {
    icon: "🌸",
    title: "Peaceful Setting",
    description: "Quiet residential neighborhoods ideal for focused daily training.",
  },
];

const PROGRAM_CATEGORIES = [
  {
    id: "multi-style-yttc",
    icon: "🧘",
    label: "Multi-Style YTTC",
    programs: [
      { name: "200hr Multi-Style YTTC", duration: "25 Days", price: "$1,190" },
      { name: "300hr Multi-Style YTTC", duration: "30 Days", price: "$1,590" },
      { name: "500hr Multi-Style YTTC", duration: "45 Days", price: "$2,290" },
    ],
  },
  {
    id: "kundalini-yttc",
    icon: "🔥",
    label: "Kundalini YTTC",
    programs: [
      { name: "100hr Kundalini YTTC", duration: "12 Days", price: "$750" },
      { name: "200hr Kundalini YTTC", duration: "25 Days", price: "$1,190" },
      { name: "300hr Kundalini YTTC", duration: "30 Days", price: "$1,490" },
    ],
  },
  {
    id: "short-courses",
    icon: "🌿",
    label: "Short Courses",
    programs: [
      { name: "7-Day Ashtanga Immersion", duration: "7 Days", price: "$390" },
      { name: "14-Day Foundation Course", duration: "14 Days", price: "$680" },
      { name: "Weekend Intensive", duration: "3 Days", price: "$180" },
    ],
  },
  {
    id: "specialization-retreats",
    icon: "🎵",
    label: "Specialization & Retreats",
    programs: [
      { name: "Ashtanga Specialization", duration: "10 Days", price: "$590" },
      { name: "Pranayama & Philosophy Retreat", duration: "5 Days", price: "$330" },
      { name: "Yoga & Ayurveda Retreat", duration: "8 Days", price: "$480" },
    ],
  },
];

function MysoreLandingPage() {
  const [activeCategory, setActiveCategory] = useState(PROGRAM_CATEGORIES[0].id);
  const activeCategoryData = PROGRAM_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <div className="bg-white">
      {/* ───────── HERO ───────── */}
      <section className="relative h-screen min-h-[560px] w-full flex items-center overflow-hidden">
        <img
          src={mysoreHero}
          alt="Mysore"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/75" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[4px] text-amber-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Ashtanga Yoga Capital
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.04] tracking-tight mb-3">
              Root in Mysore
            </h1>
            <p className="font-serif italic text-base md:text-xl text-white/70 mb-8">
              Where discipline meets devotion
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#programs"
                className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
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

      {/* ───────── WHY MYSORE ───────── */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-amber-600">
              Why Mysore?
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-purple-800 mt-3 mb-5 leading-tight">
              Root in Mysore
            </h2>
            <p className="text-stone-600 leading-relaxed text-[15px] md:text-base">
              Home of Ashtanga Vinyasa, Mysore blends royal heritage with
              disciplined practice — where generations of teachers have
              trained under the lineage of Sri K. Pattabhi Jois. Quiet
              streets, jasmine air, and centuries of tradition shape every
              session here.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {whyCards.map((card, i) => (
              <div
                key={i}
                className="bg-stone-50 border border-stone-200/70 rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-2xl">{card.icon}</span>
                <h3 className="font-serif text-lg font-semibold text-purple-800 mt-3 mb-1.5">
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

      {/* thin gold divider — royal-heritage motif */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
      </div>

      {/* ───────── PROGRAMS ───────── */}
      <section id="programs" className="w-full bg-stone-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[11px] font-bold uppercase tracking-[3px] text-amber-600">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-purple-800 mt-3 mb-3">
            Mysore Programs
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
                    ? "bg-purple-700 text-white shadow-md"
                    : "bg-white text-stone-600 border border-stone-200 hover:border-purple-300"
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
                <h3 className="font-serif text-xl font-semibold text-purple-800 mb-2">
                  {p.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-6">
                  {p.duration}
                </p>
                <div className="mt-auto flex items-center justify-between pt-5 border-t border-stone-100">
                  <span className="font-serif text-2xl text-purple-700">{p.price}</span>
                  <Link
                    to="/contact"
                    className="bg-purple-700 hover:bg-purple-800 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300"
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
      <section className="relative w-full bg-purple-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(217,180,90,0.16),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-2">
              Ready to train in Mysore?
            </h2>
            <p className="text-purple-100/70 text-sm md:text-base">
              Cohorts are capped at 12 — secure your spot today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
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

export default MysoreLandingPage;
