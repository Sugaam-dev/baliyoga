import React from "react";
import { FaUserTie, FaWhatsapp, FaPassport, FaCreditCard } from "react-icons/fa";
import bgImg from "../../assets/guide.jpg";

const HelpContactCTA = () => {
  return (
    <div
      className="relative bg-cover bg-center overflow-hidden border-b border-stone-200/20"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Premium Dark Forest Green overlay with blur */}
      <div className="absolute inset-0 bg-[#0f241a]/85 backdrop-blur-[4px] z-0" />

      {/* Decorative colored glow spheres inside layout */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] bg-[#c38b5f]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-[#1c2e24]/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 py-10 md:py-14 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
          
          {/* LEFT CONTENT BLOCK */}
          <div className="text-white text-center lg:text-left max-w-xl flex-shrink-0">
            <span className="uppercase tracking-[0.25em] text-[10px] sm:text-xs text-[#c38b5f] font-bold mb-4 inline-block">
              Need Assistance? ✦
            </span>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-tight text-white">
              Have Questions?
              <span className="block font-normal text-[#c38b5f] mt-1">
                We’re Here to Guide You.
              </span>
            </h3>

            <p className="text-sm sm:text-base text-stone-300 mt-5 leading-relaxed font-sans max-w-lg">
              Connect with our admissions team anytime for guidance on yoga teacher trainings, 
              syllabus details, travel planning, visa assistance, or luxury stay options.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <a
                href="https://wa.me/917483987568"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c38b5f] hover:bg-[#a6734c] text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer no-underline"
              >
                Chat on WhatsApp
                <span className="text-base">→</span>
              </a>
              <span className="text-xs text-stone-400 font-medium">
                Replies usually in a few minutes
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: FEATURES GRID */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full lg:max-w-xl">
            {[
              {
                icon: <FaUserTie size={22} />,
                title: "Personal Guidance",
                desc: "Talk to expert yogis",
              },
              {
                icon: <FaWhatsapp size={22} />,
                title: "24/7 Support",
                desc: "Quick messaging access",
              },
              {
                icon: <FaPassport size={22} />,
                title: "Travel Support",
                desc: "Visa & arrival assistance",
              },
              {
                icon: <FaCreditCard size={22} />,
                title: "Flexible Payments",
                desc: "Deposit options available",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/[0.03] backdrop-blur-md border border-white/[0.08] hover:border-[#c38b5f]/50 rounded-[24px] p-5 sm:p-6 text-center text-white hover:-translate-y-1 transition-all duration-500 group flex flex-col items-center shadow-sm"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] group-hover:bg-[#c38b5f]/25 text-[#c38b5f] group-hover:text-white flex items-center justify-center mb-4 transition-all duration-500 border border-white/[0.05]">
                  {item.icon}
                </div>

                {/* Title */}
                <h4 className="text-sm font-bold tracking-wide mb-1 text-white">
                  {item.title}
                </h4>

                {/* Desc */}
                <p className="text-[11px] sm:text-xs text-stone-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HelpContactCTA;
