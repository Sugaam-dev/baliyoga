import React from "react";
import { Instagram, Facebook, Youtube, MessageCircle, Globe } from "lucide-react";

export default function SocialLinksSection() {
  const socials = [
    {
      name: "Instagram",
      handle: "@baliyogakendra",
      icon: Instagram,
      link: "https://instagram.com",
      color: "hover:bg-gradient-to-tr hover:from-amber-500 hover:to-purple-600 hover:text-white",
    },
    {
      name: "Facebook",
      handle: "Bali Yoga Kendra Official",
      icon: Facebook,
      link: "https://facebook.com",
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "YouTube",
      handle: "Bali Yoga Kendra Media",
      icon: Youtube,
      link: "https://youtube.com",
      color: "hover:bg-red-600 hover:text-white",
    },
    {
      name: "Community",
      handle: "Yogis Circle",
      icon: MessageCircle,
      link: "https://wa.me/6281234567890",
      color: "hover:bg-emerald-600 hover:text-white",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-white border-t border-stone-100">
      <div className="max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-10 text-center space-y-10">
        
        <div className="space-y-3 max-w-lg mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c38b5f]">
            Stay Inspired
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#182222]">
            Follow Our Sacred Journey
          </h2>
          <p className="text-stone-600 text-sm font-serif italic">
            Join our global community of yogis. Discover daily inspiration, campus moments, and student stories.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {socials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-stone-50 border border-stone-200/70 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 group shadow-sm hover:shadow-lg ${item.color}`}
              >
                <div className="w-12 h-12 rounded-full bg-white text-[#c38b5f] flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#182222] group-hover:text-white transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-stone-500 font-medium group-hover:text-white/80 transition-colors">
                    {item.handle}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
