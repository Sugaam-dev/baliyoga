import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
import { X, Plus } from "lucide-react";

const links = [
  {
    href: "https://wa.me/917829997007",
    icon: <FaWhatsapp size={20} />,
    color: "text-green-500",
    bg: "hover:bg-green-50",
    label: "WhatsApp",
  },
  {
    href: "https://instagram.com/your-id",
    icon: <FaInstagram size={20} />,
    color: "text-pink-500",
    bg: "hover:bg-pink-50",
    label: "Instagram",
  },
  {
    href: "https://youtube.com/your-channel",
    icon: <FaYoutube size={20} />,
    color: "text-red-500",
    bg: "hover:bg-red-50",
    label: "YouTube",
  },
  {
    href: "mailto:info@baliyogakendra.com",
    icon: <FaEnvelope size={19} />,
    color: "text-gray-600",
    bg: "hover:bg-gray-50",
    label: "Email",
  },
];

const FloatingSocialBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── DESKTOP: fixed vertical strip on right ── */}
      <div className="hidden md:flex fixed right-3 top-1/2 -translate-y-1/2 z-[999] flex-col items-center gap-2.5 bg-[#f5f2eb] shadow-[0_4px_20px_rgba(0,0,0,0.12)] rounded-2xl px-2.5 py-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            title={l.label}
            aria-label={`Open ${l.label}`}
            className={`${l.color} ${l.bg} w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-150 hover:scale-110`}
          >
            {l.icon}
          </a>
        ))}
      </div>

      {/* ── MOBILE: collapsible FAB in bottom-right corner ── */}
      <div className="md:hidden fixed bottom-20 right-3 z-[999] flex flex-col items-end gap-2">

        {/* Expanded icons — slide up when open */}
        <div
          className={`flex flex-col items-center gap-2 transition-all duration-300 ${
            open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              title={l.label}
              aria-label={`Open ${l.label}`}
              className={`${l.color} w-11 h-11 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] flex items-center justify-center transition-transform duration-150 hover:scale-105`}
            >
              {l.icon}
            </a>
          ))}
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close social links" : "Open social links"}
          className="w-10 h-10 rounded-full bg-[#1A2456] text-white shadow-[0_4px_18px_rgba(26,36,86,0.45)] flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer border-0"
        >
          {open ? <X size={16} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
        </button>

      </div>
    </>
  );
};

export default FloatingSocialBar;