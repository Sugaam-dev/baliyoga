import React from "react";
import { Music, Wind, Compass, Waves, Heart, Sparkles, Calendar } from "lucide-react";
import SectionHeading from "../../components/shared/SectionHeading";

// Image imports matching the home activities component
import img1 from "../../assets/images/home/bali1.jpg";
import img2 from "../../assets/images/home/bali2.jpg";
import img3 from "../../assets/images/home/bali3.jpg";
import img4 from "../../assets/images/home/bali4.jpg";
import img5 from "../../assets/images/home/bali5.jpg";
import img6 from "../../assets/images/home/bali6.jpg";

const activities = [
  {
    title: "Sound Healing",
    desc: "Experience deep relaxation and energetic balance through healing vibrations and therapeutic sound baths at the Pyramids of Chi.",
    img: img1,
    icon: <Music className="w-5 h-5 text-[#c38b5f] flex-shrink-0" />,
  },
  {
    title: "Acro Yoga",
    desc: "Build trust, strength & connection through playful and supportive partner dynamics and balances under expert instruction.",
    img: img2,
    icon: <Heart className="w-5 h-5 text-[#c38b5f] flex-shrink-0" />,
  },
  {
    title: "Kirtan Session",
    desc: "Join soulful chanting and immerse yourself in the sacred vibrations of devotional music, mantra, and community connection.",
    img: img3,
    icon: <Wind className="w-5 h-5 text-[#c38b5f] flex-shrink-0" />,
  },
  {
    title: "Nature Walk",
    desc: "Reconnect with nature, practice walking meditation, and quiet your mind with mindful walks through Ubud's lush green rice fields.",
    img: img4,
    icon: <Compass className="w-5 h-5 text-[#c38b5f] flex-shrink-0" />,
  },
  {
    title: "Yin Yoga",
    desc: "Release deep-seated physical and emotional tension and find internal stillness in calming, long-held restorative postures.",
    img: img5,
    icon: <Sparkles className="w-5 h-5 text-[#c38b5f] flex-shrink-0" />,
  },
  {
    title: "Waterfall Visit",
    desc: "Refresh your spirit, purify your energetic field, and connect with water spirits under Bali's sacred and hidden jungle waterfalls.",
    img: img6,
    icon: <Waves className="w-5 h-5 text-[#c38b5f] flex-shrink-0" />,
  },
];

export default function BaliActivitiesPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen text-stone-850 pb-20">
      {/* Hero Banner Section */}
      <section className="relative bg-[#1A2456] text-white pt-32 pb-24 px-6 md:px-12 text-center overflow-hidden">
        {/* Subtle decorative overlays */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#c38b5f]/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#7BAF8A]/5 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="text-[#C8A96A] font-bold tracking-[0.2em] uppercase text-xs bg-white/10 border border-white/20 px-4.5 py-2 rounded-full">
            Spiritual & Cultural Excursions
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight">
            Sacred Bali Activities
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Enhance your teacher training or retreat with unforgettable spiritual ceremonies, nature explorations, and community healing arts in the heart of paradise.
          </p>
        </div>
      </section>

      {/* Main Grid Layout */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <SectionHeading 
            title="Included" 
            highlight="Experiences" 
            subtitle="These curated activities are integrated into our programs to provide a complete holistic immersion."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act, i) => (
            <div
              key={i}
              className="bg-white rounded-[24px] overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="h-[240px] w-full overflow-hidden relative">
                  <img
                    src={act.img}
                    alt={act.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-2xl shadow-sm text-stone-850 flex items-center justify-center">
                    {act.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6.5 space-y-3">
                  <h3 className="text-xl font-bold text-[#1A2456] font-serif">
                    {act.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {act.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Card Element */}
              <div className="px-6.5 pb-6 pt-2 flex items-center gap-2 text-xs font-semibold text-[#c38b5f]">
                <Calendar size={14} className="text-[#c38b5f]" />
                <span>Scheduled Weekly Excursion</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
