import React, { useState } from "react";
import { Sun, Coffee, Moon, Leaf, Feather, Sparkles, Shield, Heart, Globe, CheckCircle } from "lucide-react";

const iconMap = {
  sun: <Sun size={16} />,
  coffee: <Coffee size={16} />,
  moon: <Moon size={16} />,
  leaf: <Leaf size={18} />,
  feather: <Feather size={18} />,
  sparkles: <Sparkles size={18} />,
  shield: <Shield size={18} />,
  heart: <Heart size={18} />,
  globe: <Globe size={18} />,
};

const meals = [
  {
    key: "breakfast", title: "Breakfast", icon: "sun",
    time: "07:30 – 09:00",
    img: "https://static.vecteezy.com/system/resources/thumbnails/065/445/650/small/isolated-traditional-indian-thali-meal-free-photo.jpg",
    desc: "Start your day with vibrant, nourishing sattvic foods.",
    items: ["Fresh tropical fruits", "Avocado toast", "Green juices", "Herbal teas"],
  },
  {
    key: "lunch", title: "Lunch", icon: "coffee",
    time: "01:00 – 02:00",
    img: "https://static.vecteezy.com/system/resources/thumbnails/065/445/650/small/isolated-traditional-indian-thali-meal-free-photo.jpg",
    desc: "Balanced sattvic meals to fuel your practice.",
    items: ["Rice bowls", "Fresh salads", "Vegetable curries", "Coconut soups"],
  },
  {
    key: "dinner", title: "Dinner", icon: "moon",
    time: "06:30 – 08:00",
    img: "https://t4.ftcdn.net/jpg/02/75/39/23/360_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg",
    desc: "Light and calming evening sattvic meals.",
    items: ["Lentil dishes", "Grilled tofu", "Vegetable stir-fry", "Healthy desserts"],
  },
];

const dietary = [
  { icon: "leaf", label: "Vegetarian" },
  { icon: "feather", label: "Gluten-Free" },
  { icon: "sparkles", label: "Dairy-Free" },
  { icon: "sun", label: "Sattvic Diet" },
  { icon: "shield", label: "No Alcohol" },
  { icon: "heart", label: "No Non-Veg" },
];

const philosophy = [
  { icon: "leaf", title: "Sattvic", desc: "Pure yogic food" },
  { icon: "globe", title: "Fresh", desc: "Freshly cooked daily" },
  { icon: "heart", title: "Mindful", desc: "Prepared with love" },
  { icon: "feather", title: "Balanced", desc: "Nourishing nutrition" },
];

const FoodSection = () => {
  const [activeTab, setActiveTab] = useState("breakfast");
  const activeMeal = meals.find((m) => m.key === activeTab);

  return (
    <section className="bg-[#F7F3EF] py-12 lg:py-16 px-2.5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-sm text-gray-500 mb-2">Food Experience</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1A2456] mb-3">
            Nourish your <em className="text-[#C8A96A] not-italic">body & soul</em>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-lg">
            Freshly cooked sattvic vegetarian meals 3 times a day to energize your yoga journey.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 flex-wrap mb-10">
          {meals.map((m) => (
            <button
              key={m.key}
              onClick={() => setActiveTab(m.key)}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full border-none cursor-pointer text-sm font-medium transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.08)] ${activeTab === m.key ? "bg-[#1A2456] text-white" : "bg-white text-[#1A2456]"}`}
            >
              {iconMap[m.icon]} {m.title}
            </button>
          ))}
        </div>

        {/* Meal card */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.15)] mb-14">
          <div className="min-h-[260px]">
            <img src={activeMeal.img} alt={activeMeal.title} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="p-7 md:p-10">
            <h3 className="text-xl font-semibold text-[#1A2456] mb-1">{activeMeal.title}</h3>
            <p className="text-xs text-gray-400 mb-3">🕐 {activeMeal.time}</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{activeMeal.desc}</p>
            {activeMeal.items.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-700 mb-1.5">
                <CheckCircle size={14} className="text-[#7BAF8A] flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Dietary */}
        <h3 className="text-xl font-semibold text-[#1A2456] mb-5">Dietary Options</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-14">
          {dietary.map((d, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl text-center shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
              <div className="flex justify-center mb-2 text-[#1A2456]">{iconMap[d.icon]}</div>
              <div className="text-xs text-gray-700 font-medium">{d.label}</div>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <h3 className="text-xl font-semibold text-[#1A2456] mb-5">Food Philosophy</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {philosophy.map((p, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
              <div className="text-[#1A2456] mb-2">{iconMap[p.icon]}</div>
              <h4 className="font-semibold text-[#1A2456] mb-1">{p.title}</h4>
              <p className="text-gray-500 text-xs">{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FoodSection;