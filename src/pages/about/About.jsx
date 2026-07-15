import React from "react";

import AboutHero from "./components/AboutHero";
import OurStory from "./components/OurStory";
import Teachers from "./components/Teachers";
import Philosophy from "./components/Philosophy";
import WhyChoose from "./components/WhyChoose";
import SacredDestinations from "./components/SacredDestinations";
import Lifestyle from "./components/Lifestyle";
import Testimonials from "./components/Testimonials";

import storyImg from "../../assets/images/about/home-hero.jpg";
import lifestyleImg from "../../assets/images/about/jbz00ii9peh5jqjjyna2.jpg";
import ourImg from "../../assets/images/about/about.jpg";

import teacher1 from "../../assets/images/about/SrinathSir.jpeg";
import teacher2 from "../../assets/images/about/Sahana.jpeg";
import teacher3 from "../../assets/images/about/RaviSir.jpeg";
import teacher4 from "../../assets/images/about/Minu.jpeg";
import teacher5 from "../../assets/images/about/Hrishanth.jpeg";
import teacher6 from "../../assets/images/about/Charanya.jpeg";
import teacher7 from "../../assets/images/about/vinayaksir.jpeg";
import teacher8 from "../../assets/images/about/Anulasha.png";

export default function About() {
  const teachers = [
    {
      name: "SRINATHA SIR",
      title: "Senior Hatha, Iyengar & Ashtanga Yoga Teacher",
      image: teacher1,
      description: "Dr. Srinatha is the Founder and Director of Yoga With Srinatha, with 30+ years of experience in yoga education and practice.",
    },
    {
      name: "SAHANA P R",
      title: "Yin Yoga, Prenatal & Postnatal Yoga, and Anatomy Teacher",
      image: teacher2,
      description: "Sahana P R is a dedicated yoga teacher and educator specializing in Yin Yoga, Prenatal and Postnatal Yoga, and Applied Yoga Anatomy.",
    },
    {
      name: "RAVI PRABHAKAR",
      title: "Methodology, Anatomy & Physiology Teacher",
      image: teacher3,
      description: "Ravi Prabhakar is an experienced Methodology, Anatomy, and Physiology teacher with 15+ years of experience.",
    },
    {
      name: "MINU SAJJI",
      title: "Pranayama & Assistant Yoga Teacher",
      image: teacher4,
      description: "Minu Sajji is a dedicated Pranayama teacher and Assistant Teacher committed to authentic yogic practices.",
    },
    {
      name: "HRISHANTH",
      title: "Yoga Therapy & Ashtanga Yoga Teacher",
      image: teacher5,
      description: "Hrishanth is a skilled Yoga Therapy teacher and experienced instructor in Ashtanga Yoga.",
    },
    {
      name: "CHARANYA",
      title: "Ayurveda, Philosophy & Pranayama Teacher",
      image: teacher6,
      description: "Charanya is a dedicated teacher of Ayurveda, Yoga Philosophy, and Pranayama.",
    },
    {
      name: "VINAYAKA HONNAVAR",
      title: "Yoga Philosophy, Meditation & Sound Healing Teacher",
      image: teacher7,
      description: "Vinayaka Honnavar is a dedicated teacher of Yoga Philosophy, Meditation, and Sound Healing.",
    },
    {
      name: "ANULASHA RAM",
      title: "Social Media & Marketing Team Head | Graphic Designer",
      image: teacher8,
      description: "Anulasha Ram is the Social Media and Marketing Team Head at Bali Yoga Kendra.",
    },
  ];

  return (
    <div className="bg-[#FAF8F5] text-gray-800 overflow-x-hidden scroll-smooth">
      {/* 1. Hero */}
      <AboutHero storyImg={storyImg} />

      {/* 2. Welcome + Founder vision */}
      <OurStory ourImg={ourImg} />

      {/* 3. Teachers with Swiper */}
      <Teachers teachers={teachers} />

      {/* 4. Programs with Swiper */}
      <Philosophy />

      {/* 5. Why Choose BYK */}
      <WhyChoose />

      {/* 6. Across Sacred Destinations */}
      <SacredDestinations />

      {/* 7. More Than a Yoga School */}
      <Lifestyle lifestyleImg={lifestyleImg} />

      {/* 8. Begin Your Journey CTA */}
      <Testimonials />
    </div>
  );
}
