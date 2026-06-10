import React from "react";
import {
  Dumbbell, Wind, BookOpen, Users, Heart, Brain,
  Sparkles, Leaf, Award, ChevronRight, CheckCircle,
  Sun, AlignEndHorizontal, BrainCircuit, BellRing,
} from "lucide-react";
import { Link } from "react-router-dom";

const iconMap = {
  dumbbell: <Dumbbell size={22} />,
  wind: <Wind size={22} />,
  book: <BookOpen size={22} />,
  users: <Users size={22} />,
  heart: <Heart size={22} />,
  brain: <Brain size={22} />,
  sparkles: <Sparkles size={22} />,
  leaf: <Leaf size={22} />,
  sun: <Sun size={22} />,
  align: <AlignEndHorizontal size={22} />,
  brainCircuit: <BrainCircuit size={22} />,
  bellRing: <BellRing size={22} />,
};

const courses = [
  { title: "Hatha Yoga Asana", icon: "dumbbell", items: ["Traditional postures", "Sun salutations", "Standing & seated poses", "Alignment basics"] },
  { title: "Ashtanga Yoga", icon: "wind", items: ["Fixed sequence postures", "Dynamic movements", "Strength & flexibility", "Focus & breath sync"] },
  { title: "Pranayama", icon: "brainCircuit", items: ["Nadi activation", "Shat Karma cleansing", "Bandhas & Mudras", "Energy balance"] },
  { title: "Yoga Philosophy", icon: "book", items: ["History of yoga", "Spiritual awareness", "Detachment principles", "Yogic lifestyle"] },
  { title: "Anatomy & Physiology", icon: "heart", items: ["Modern anatomy", "Traditional yogic science", "Spine & joint safety", "Injury prevention"] },
  { title: "Meditation", icon: "brain", items: ["Morning meditation", "Clarity & grounding", "Spiritual energy", "Inner awareness"] },
  { title: "Alignment & Adjustment", icon: "sparkles", items: ["Balance & flexibility", "Strength & stability", "Props usage", "Hands-on adjustments"] },
  { title: "Teaching Fundamentals", icon: "users", items: ["Class structure", "Cueing basics", "Confidence building", "Student guidance"] },
];

const phases = [
  { title: "Foundation", days: "Days 1–2", desc: "Meditation, Pranayama & intro to yoga styles", color: "#2E3A87" },
  { title: "Development", days: "Days 3–4", desc: "Hatha, Ashtanga, Anatomy & Philosophy", color: "#5B4FCF" },
  { title: "Integration", days: "Days 5–6", desc: "Alignment, Adjustment & teaching practice", color: "#7BAF8A" },
];

const CurriculumSection = () => {
  return (
    <section className="py-12 lg:py-16 px-2.5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-gray-500 mb-2">Curriculum</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A2456] mb-3">
            Your Complete <em className="text-[#C8A96A] not-italic">Multi Style Journey</em>
          </h2>
          <p className="max-w-xl mx-auto text-gray-600 text-sm md:text-base">
            A comprehensive introduction program designed to guide you from beginner to confident practitioner across multiple yoga styles.
          </p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {courses.map((c, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-white hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300"
            >
              <div className="w-[52px] h-[52px] rounded-xl bg-gradient-to-br from-[#1A2456] to-[#5B4FCF] text-white flex items-center justify-center mb-4">
                {iconMap[c.icon]}
              </div>
              <h4 className="font-semibold text-[#1A2456] mb-3">{c.title}</h4>
              {c.items.map((item, j) => (
                <div key={j} className="flex items-center gap-2 text-sm text-gray-600 mb-1.5">
                  <CheckCircle size={14} className="text-[#7BAF8A] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Journey phases */}
        <div className="mb-24">
          <h3 className="text-center text-2xl md:text-3xl font-semibold text-[#1A2456] mb-10">
            Training <em className="text-[#C8A96A] not-italic">Journey</em>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
            {phases.map((p, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-[#F7F3EF] text-center"
                style={{ borderTop: `4px solid ${p.color}` }}
              >
                <small className="font-semibold" style={{ color: p.color }}>{p.days}</small>
                <h4 className="font-semibold text-[#1A2456] mt-1 mb-2">{p.title}</h4>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#1A2456] to-[#2E3A87] rounded-3xl py-14 px-7 text-center text-white">
          <Award size={36} className="mx-auto mb-4 text-[#C8A96A]" />
          <h3 className="text-2xl font-semibold mb-3">Become a Confident Multi Style Yoga Practitioner</h3>
          <p className="text-white/80 mb-5 max-w-lg mx-auto text-sm md:text-base">
            Transform your body, mind, and lifestyle through structured multi style yoga training in Bali.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#1A2456] font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-white/90 transition-colors"
          >
            Start Your Journey <ChevronRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CurriculumSection;