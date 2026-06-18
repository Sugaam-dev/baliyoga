import React, { useEffect, useState } from "react";
import { Sun, Wind, Feather, Heart, Shield, Sparkles } from "lucide-react";

const iconMap = {
  sun: <Sun size={20} />,
  wind: <Wind size={20} />,
  feather: <Feather size={20} />,
  heart: <Heart size={18} />,
  shield: <Shield size={18} />,
  sparkles: <Sparkles size={18} />,
};

const practices = [
  {
    label: "Hatha Yoga",
    desc: "Traditional postures as described in the Hatha Yoga Pradipika by Yogi Swatmarama",
    icon: "sun",
    img: "https://wallpapers.com/images/hd/yoga-background-2rmnmb16t7q2lj98.jpg",
  },
  {
    label: "Ashtanga Yoga",
    desc: "Dynamic fixed sequence postures enhancing strength, flexibility & focus by Sri K. Pattabhi Jois",
    icon: "wind",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  },
  {
    label: "Pranayama & Meditation",
    desc: "Breathing techniques with Nadis, bandhas, mudras for calmness & spiritual clarity",
    icon: "feather",
    img: "https://a-static.besthdwallpaper.com/morning-yoga-wallpaper-2160x1440-78799_40.jpg",
  },
];

const specials = [
  { title: "Beginner-Friendly", desc: "Suitable for any age group above 18 with no prior experience", icon: "heart" },
  { title: "Multi Style Foundation", desc: "Covers Hatha, Ashtanga, Pranayama, Philosophy & Anatomy", icon: "shield" },
  { title: "Pathway to Advanced", desc: "Extend seamlessly to 100, 200 or 500-hour TTC", icon: "sparkles" },
];

const PracticeSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="py-12 lg:py-16 px-2.5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm text-gray-500 mb-2">Core Practices</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A2456] mb-3">
            Foundation of <em className="text-[#C8A96A] not-italic">Multi Style Yoga & Breath</em>
          </h2>
          <p className="max-w-xl mx-auto text-gray-600 text-sm md:text-base">
            Build strength, flexibility, and inner balance with foundational Hatha and Ashtanga yoga practices.
          </p>
        </div>

        {/* Practice cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {practices.map((p, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Image */}
              <div className="h-[220px] relative">
                <img src={p.img} alt={p.label} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Content */}
              <div className="p-6 bg-white">
                <div className="w-11 h-11 rounded-xl bg-[#1A2456] text-white flex items-center justify-center mb-3">
                  {iconMap[p.icon]}
                </div>
                <h3 className="font-semibold text-lg text-[#1A2456] mb-2">{p.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Special features */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
          <h3 className="text-center text-2xl md:text-3xl font-semibold text-[#1A2456] mb-10">
            Why Choose <em className="text-[#C8A96A] not-italic">This Training</em>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {specials.map((s, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#F7F3EF] hover:-translate-y-1.5 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-[10px] bg-[#1A2456] text-white flex items-center justify-center mb-3">
                  {iconMap[s.icon]}
                </div>
                <h4 className="font-semibold text-[#1A2456] mb-1.5">{s.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PracticeSection;