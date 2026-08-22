import React from "react";
import { MessageCircle, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export default function ContactMethods() {
  const contactOptions = [
    {
      icon: MessageCircle,
      title: "WhatsApp Us",
      subtitle: "Instant response for queries",
      detail: "+91 78299 97007",
      actionText: "Chat on WhatsApp",
      link: "https://wa.me/917829997007",
      isPrimary: true,
    },
    {
      icon: Phone,
      title: "Direct Phone Call",
      subtitle: "Speak directly with our team",
      detail: "+91 78299 97007",
      actionText: "Call Us Now",
      link: "tel:+917829997007",
      isPrimary: false,
    },
    {
      icon: Mail,
      title: "Email Support",
      subtitle: "Send detailed inquiries",
      detail: "info@baliyogakendra.com",
      actionText: "Send Email",
      link: "mailto:info@baliyogakendra.com",
      isPrimary: false,
    },
    {
      icon: Clock,
      title: "School Hours",
      subtitle: "Open 7 Days a week",
      detail: "Monday – Sunday: 8:00 AM – 7:00 PM (WIT)",
      actionText: "View Schedule",
      link: "#inquiry",
      isPrimary: false,
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-stone-50">
      <div className="max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#c38b5f]">
            Direct Communication
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#182222]">
            How Would You Like To Connect?
          </h2>
          <p className="text-stone-600 text-base font-serif italic">
            Choose your preferred channel below. Our admissions and student support team is always ready to assist.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {contactOptions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-stone-100 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#c38b5f]/10 text-[#c38b5f] flex items-center justify-center mb-6 group-hover:bg-[#c38b5f] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#182222] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 font-medium uppercase tracking-wider mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-stone-700 text-sm font-semibold mb-6 break-words">
                    {item.detail}
                  </p>
                </div>

                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-sm ${
                    item.isPrimary
                      ? "bg-[#c38b5f] text-white hover:bg-[#b0784c] shadow-[#c38b5f]/20 hover:shadow-md"
                      : "border border-[#c38b5f] text-[#c38b5f] hover:bg-[#c38b5f] hover:text-white"
                  }`}
                >
                  <span>{item.actionText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
