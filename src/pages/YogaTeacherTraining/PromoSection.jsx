import React, { useEffect, useState } from "react";
import { Award, Bed, Utensils, Heart, Compass, Sparkles } from "lucide-react";

const iconMap = {
  award: <Award size={18} />,
  bed: <Bed size={18} />,
  utensils: <Utensils size={18} />,
  heart: <Heart size={18} />,
  compass: <Compass size={18} />,
};

const features = [
  { icon: "award", title: "YACEP Certificate", sub: "Registerable foundation certification" },
  { icon: "bed", title: "Comfortable Accommodation", sub: "Shared & private room options" },
  { icon: "utensils", title: "Sattvic Meals", sub: "Freshly cooked vegetarian food 3x daily" },
  { icon: "heart", title: "Multi Style Training", sub: "Hatha, Ashtanga, Pranayama & more" },
  { icon: "compass", title: "Bali Cultural Experience", sub: "Temples, nature & spiritual atmosphere" },
];

const PromoSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">

          {/* Left */}
          <div>
            <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-3">
              <Sparkles size={14} /> Bali Yoga Experience
            </div>
            <h2 className="text-3xl md:text-4xl font-medium leading-snug mb-6 text-[#1A2456]">
              Join our <em className="text-[#C8A96A] not-italic">immersive</em> 6-day journey in{" "}
              <strong>Ubud</strong>
            </h2>

            <div className="flex flex-col gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`flex gap-3.5 p-3.5 rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:translate-x-1.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="min-w-[42px] h-[42px] rounded-xl bg-[#1A2456] text-white flex items-center justify-center flex-shrink-0">
                    {iconMap[f.icon]}
                  </div>
                  <div>
                    <p className="font-semibold text-base text-gray-900 mb-0.5">{f.title}</p>
                    <p className="text-sm text-gray-500 leading-snug">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="rounded-2xl overflow-hidden h-[clamp(220px,30vw,360px)] relative">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"
                alt="Yoga"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Small images */}
            <div className="grid grid-cols-2 gap-3.5">
              <img
                src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80"
                alt="Food"
                loading="lazy"
                className="w-full h-[150px] object-cover rounded-2xl"
              />
              <img
                src="https://t4.ftcdn.net/jpg/02/75/39/23/360_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg"
                alt="Stay"
                loading="lazy"
                className="w-full h-[150px] object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoSection;