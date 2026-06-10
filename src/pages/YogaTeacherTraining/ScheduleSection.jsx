import React from "react";
import { Moon, Sun, Wind, Coffee, Brain, Users, Utensils, BookOpen, Feather, Leaf, Sunrise } from "lucide-react";

const iconMap = {
  moon: <Moon size={15} />,
  sun: <Sun size={15} />,
  wind: <Wind size={15} />,
  coffee: <Coffee size={15} />,
  brain: <Brain size={15} />,
  users: <Users size={15} />,
  utensils: <Utensils size={15} />,
  book: <BookOpen size={15} />,
  feather: <Feather size={15} />,
  leaf: <Leaf size={15} />,
  sparkles: <Sun size={15} />,
};

const morning = [
  { time: "06:00 AM", activity: "Meditation & Grounding", icon: "moon" },
  { time: "06:30 AM", activity: "Pranayama Practice", icon: "wind" },
  { time: "07:30 AM", activity: "Hatha Yoga Asana", icon: "sun" },
  { time: "09:00 AM", activity: "Breakfast", icon: "coffee" },
  { time: "10:30 AM", activity: "Anatomy & Physiology", icon: "brain" },
  { time: "11:45 AM", activity: "Yoga Philosophy", icon: "book" },
];

const afternoon = [
  { time: "01:00 PM", activity: "Lunch", icon: "utensils" },
  { time: "02:30 PM", activity: "Self Practice", icon: "feather" },
  { time: "03:30 PM", activity: "Ashtanga Yoga", icon: "wind" },
  { time: "04:45 PM", activity: "Alignment & Adjustment", icon: "sparkles" },
  { time: "06:30 PM", activity: "Dinner", icon: "utensils" },
  { time: "08:00 PM", activity: "Yoga Nidra / Rest", icon: "moon" },
];

const Row = ({ item }) => (
  <div className="flex items-center gap-3.5 py-3 border-b border-[#e8e2da]">
    <div className="w-10 h-10 rounded-[10px] bg-[#F7F3EF] flex items-center justify-center text-[#1A2456] flex-shrink-0">
      {iconMap[item.icon]}
    </div>
    <span className="font-semibold text-xs text-[#1A2456] w-20 flex-shrink-0">{item.time}</span>
    <span className="text-sm text-gray-700">{item.activity}</span>
  </div>
);

const ScheduleSection = () => {
  return (
    <section className="bg-[#F7F3EF] py-16 lg:py-24 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Header row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div>
            <p className="text-sm text-gray-500 mb-2">Daily Schedule</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1A2456] mb-3">
              Daily Flow of <em className="text-[#C8A96A] not-italic">Training</em>
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              A structured daily routine designed to balance multi style practice, theory, and relaxation for complete transformation.
            </p>
          </div>

          {/* Schedule image */}
          <div className="rounded-2xl overflow-hidden h-[250px] shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"
              alt="Schedule"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Schedule grid */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] grid grid-cols-1 md:grid-cols-2">
          {/* Morning */}
          <div className="p-6 border-b md:border-b-0 md:border-r border-[#e8e2da]">
            <div className="flex items-center gap-2.5 mb-5">
              <Sunrise size={20} className="text-[#C8A96A]" />
              <h3 className="font-semibold text-[#1A2456] text-lg">Morning</h3>
            </div>
            {morning.map((item, i) => <Row key={i} item={item} />)}
          </div>

          {/* Afternoon */}
          <div className="p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <Moon size={20} className="text-[#5B4FCF]" />
              <h3 className="font-semibold text-[#1A2456] text-lg">Afternoon & Evening</h3>
            </div>
            {afternoon.map((item, i) => <Row key={i} item={item} />)}
          </div>
        </div>

        {/* Note */}
        <div className="mt-6 p-5 bg-[rgba(91,79,207,0.08)] border-l-4 border-[#5B4FCF] rounded-xl">
          <p className="text-sm text-gray-600">
            Schedule may vary slightly based on season and teaching flow.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ScheduleSection;