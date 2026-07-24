import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getIcon } from "./icons";

// Room Images
import privateRoomImg from "../../../assets/rooms/privateRoom.jpg";
import twoSharedRoomImg from "../../../assets/rooms/twoSharedRoom.jpg";
import fourSharedRoomImg from "../../../assets/rooms/fourSharedRoom.jpg";
import sixSharedRoomImg from "../../../assets/rooms/sixSharedRoom.jpg";

const getRoomImage = (type, fallbackImg) => {
  if (!type) return fallbackImg;
  const lower = type.toLowerCase();
  
  if (lower.includes("private")) {
    return privateRoomImg;
  }
  if (
    lower.includes("2 sharing") || 
    lower.includes("two shared") || 
    lower.includes("twoshared") || 
    lower.includes("twin") || 
    lower.includes("double") ||
    lower.includes("2 shared") ||
    lower.includes("2-shared")
  ) {
    return twoSharedRoomImg;
  }
  if (
    lower.includes("4 sharing") || 
    lower.includes("four shared") || 
    lower.includes("fourshared") || 
    lower.includes("quad") ||
    lower.includes("4 shared") ||
    lower.includes("4-shared")
  ) {
    return fourSharedRoomImg;
  }
  if (
    lower.includes("6 sharing") || 
    lower.includes("six shared") || 
    lower.includes("sixshared") || 
    lower.includes("6 shared") ||
    lower.includes("6-shared")
  ) {
    return sixSharedRoomImg;
  }
  if (lower.includes("4/6")) {
    return fourSharedRoomImg;
  }
  
  return fallbackImg;
};

/**
 * Expects: data = courseData.accommodationSection.content
 */
const AccommodationSection = ({ data, onBookClick }) => {
  const [activeRoom, setActiveRoom] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  const scrollRef = useRef(null);

  // Check whether scroll container can scroll further right
  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowArrow(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [data]);

  if (!data) return null;
  const { title, highlight, subtitle, rooms = [], amenities = [], buttonText, url } = data;
  const room = rooms[activeRoom];
  if (!room) return null;

  const handleRoomClick = (idx) => {
    setActiveRoom(idx);
    const el = scrollRef.current;
    if (!el) return;
    const buttons = el.querySelectorAll("button");
    if (buttons[idx]) {
      el.scrollTo({ left: Math.max(0, buttons[idx].offsetLeft - 40), behavior: "smooth" });
    }
    setTimeout(checkScroll, 400);
  };

  return (
    <section className="bg-[#1A2456] text-white py-14 lg:py-24 px-4">
      <style>{`
        .room-scroll::-webkit-scrollbar { display: none; }
        @keyframes roomArrowPulse {
          0%, 100% { opacity: 1; transform: translateX(0); }
          50%       { opacity: 0.35; transform: translateX(4px); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2">
            {title} <em className="text-[#C8A96A] not-italic">{highlight}</em>
          </h2>
          <p className="text-white/70 text-sm md:text-base mx-auto max-w-lg">{subtitle}</p>
        </div>

        {/* Blinking arrow hint — shown ABOVE tab row on mobile when rooms overflow */}
        {showArrow && (
          <div className="flex justify-end mb-2 lg:hidden">
            <span
              className="flex items-center gap-1 text-xs font-semibold text-[#C8A96A]"
              style={{ animation: "roomArrowPulse 1s ease-in-out infinite" }}
            >
              swipe for more <ChevronRight size={15} strokeWidth={2.5} />
            </span>
          </div>
        )}

        {/* Room tabs — horizontal scroll on mobile, centered on desktop */}
        <div
          ref={scrollRef}
          className="room-scroll flex gap-2.5 overflow-x-auto pb-1.5 mb-7 md:justify-center"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {rooms.map((r, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleRoomClick(i)}
              style={{ minWidth: "min(155px, 42vw)" }}
              className={[
                "flex-shrink-0 px-5 py-2.5 rounded-full border text-sm font-semibold",
                "cursor-pointer transition-colors duration-200 whitespace-nowrap",
                activeRoom === i
                  ? "bg-white text-[#1A2456] border-white"
                  : "bg-transparent text-white border-white/40 hover:border-white/70"
              ].join(" ")}
            >
              {r.type}
            </button>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">

          {/* Room image */}
          <div className="rounded-2xl overflow-hidden min-h-[250px] h-[clamp(250px,40vw,420px)] shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <img src={getRoomImage(room.type, room.img)} alt={room.type} loading="lazy" className="w-full h-full object-cover" />
          </div>

          {/* Content card */}
          <div className="bg-white text-[#1A2456] rounded-2xl p-6 md:p-9 shadow-[0_8px_24px_rgba(0,0,0,0.15)] flex flex-col justify-between">
            <div>
              <span
                className="text-white px-3.5 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: room.tagBg }}
              >
                {room.tag}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold mt-3 mb-2">{room.type}</h3>
              <p className="text-gray-500 text-sm mb-5">{room.desc}</p>
              <div className="grid grid-cols-2 gap-2.5">
                {(room.features || []).map((f, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-[#7BAF8A] flex-shrink-0" /> {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="text-2xl font-bold text-[#1A2456] mb-4">{room.price}</div>
              {onBookClick ? (
                <button
                  onClick={() => onBookClick(room.type)}
                  className="inline-flex items-center gap-2 bg-[#1A2456] text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-all duration-200 cursor-pointer border-0"
                >
                  {buttonText || "Book Now"} <ArrowRight size={16} />
                </button>
              ) : (
                <Link
                  to={url || "/contact"}
                  className="inline-flex items-center gap-2 bg-[#1A2456] text-white font-semibold text-sm px-6 py-3.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-all duration-200 no-underline"
                >
                  {buttonText || "Book Now"} <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Amenities */}
        {amenities.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Amenities</h3>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3.5">
              {amenities.map((a, i) => (
                <div key={i} className="bg-white/10 text-white p-3.5 rounded-xl text-center">
                  <div className="flex justify-center mb-1.5">{getIcon(a.icon, 18)}</div>
                  <div className="text-xs">{a.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default AccommodationSection;