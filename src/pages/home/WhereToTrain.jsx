import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../../components/shared/ScrollReveal";
import SectionHeading from "../../components/shared/SectionHeading";
import baliImg from "../../assets/images/home/bali1.jpg";
import rishikeshImg from "../../assets/images/home/bali2.jpg";
import mysoreImg from "../../assets/images/home/bali3.jpg"; // TODO: replace with a real Mysore image
import { LANDING_LOCATION_DATA } from "../programsCard/LandingPageData";

const getProgramCount = (locationKey) => {
  const locData = LANDING_LOCATION_DATA[locationKey.toLowerCase()];
  if (!locData || !locData.programsByCategoryId) return 0;
  return Object.values(locData.programsByCategoryId).reduce((sum, list) => sum + (list?.length || 0), 0);
};

const destinations = [
  {
    tag: "Island of the Gods",
    name: "Bali",
    titleColor: "text-emerald-800",
    buttonColor: "bg-emerald-700 hover:bg-emerald-800",
    image: baliImg,
    description:
      "Nestled among sacred rice terraces and whispering temples, our Bali programs offer the most immersive yoga teacher training experience in Southeast Asia.",
    badges: ["Multi-Style YTTC", "Kundalini YTTC", "Short Courses", "Specialization & Retreats"],
    programCount: getProgramCount("bali"),
    link: "/programs/bali",
  },
  {
    tag: "Yoga Capital of the World",
    name: "Rishikesh",
    titleColor: "text-orange-600",
    buttonColor: "bg-orange-600 hover:bg-orange-700",
    image: rishikeshImg,
    description:
      "Perched on the banks of the sacred Ganges, beneath the eternal Himalayas — Rishikesh is where yoga was born for the world.",
    badges: ["Multi-Style YTTC", "Kundalini YTTC", "Short Courses", "Specialization & Retreats"],
    programCount: getProgramCount("rishikesh"),
    link: "/programs/rishikesh",
  },
  {
    tag: "Ashtanga Yoga Capital",
    name: "Mysore",
    titleColor: "text-purple-700",
    buttonColor: "bg-purple-700 hover:bg-purple-800",
    image: mysoreImg,
    description:
      "Home of Ashtanga Vinyasa, Mysore blends royal heritage with disciplined practice — where generations of teachers have trained under the lineage of Sri K. Pattabhi Jois.",
    badges: ["Multi-Style YTTC", "Kundalini YTTC", "Short Courses", "Specialization & Retreats"],
    programCount: getProgramCount("mysuru"),
    link: "/programs/mysuru",
  },
];

const WhereToTrain = () => {
  return (
    <section className="w-full bg-white py-10 sm:py-8 md:py-10 md:py-10 md:py-12">
      <div className="max-w-7xl min-[1600px]:max-w-[1440px] min-[1920px]:max-w-[1720px] min-[2500px]:max-w-[2200px] mx-auto px-4 sm:px-6 md:px-12">
        <ScrollReveal>
          <SectionHeading
            title="Where Would You Like To"
            highlight="Train?"
            subtitle="Choose from sacred destinations across Asia. Every location offers the full curriculum — from 50-hour foundations to 500-hour master programs."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mt-12">
          {destinations.map((dest, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)}>
              <div className="rounded-3xl overflow-hidden border border-stone-200/50 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col h-full">
                <div className="h-56 sm:h-60 md:h-64 w-full overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    {dest.tag}
                  </span>
                  <h3 className={`font-serif text-2xl font-semibold mt-1 mb-3 ${dest.titleColor}`}>
                    {dest.name}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-4">
                    {dest.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {dest.badges.map((badge, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium text-stone-600 bg-stone-100 border border-stone-200 rounded-full px-3 py-1"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Bottom row: program count + button */}
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                      {dest.programCount} Programs
                    </span>
                    <Link
                      to={dest.link}
                      className={`inline-flex items-center gap-1 ${dest.buttonColor} text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 no-underline`}
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereToTrain;
  