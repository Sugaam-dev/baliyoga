import React from "react";

// Import images
import storyImg from "./images/YogaBali.jpg";
import philosophyImg from "./images/jbz00ii9peh5jqjjyna2.jpg";
import teacherImg from "./images/FPO_BAL_980.jpg";
import lifestyleImg from "./images/about.jpg";
import testimonialImg from "./images/Radiantly-scaled.jpg";
// import HeroSection from "../../Components/Hero";

export default function About() {
  return (
    <div className="bg-[#f8f5f0] text-gray-800">

      {/* HERO SECTION */}
      {/* <HeroSection/> */}
      <section className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${storyImg})` }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-white text-4xl md:text-6xl font-semibold tracking-wide">
          About Bali Yoga Kendra
        </h1>
      </section>

      {/* OUR STORY */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <img src={storyImg} alt="Our Story" className="rounded-2xl shadow-lg" />
        <div>
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="leading-relaxed text-lg">
            Bali Yoga Kendra was created as a sacred space where ancient yogic
            wisdom meets the serene spiritual energy of Bali. What began as a
            small community of dedicated seekers has evolved into a global
            sanctuary for transformation, self-discovery, and authentic yoga
            education.
          </p>
          <p className="mt-4 leading-relaxed">
            Here, yoga is not just a physical practice — it is a way of life.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">The Philosophy</h2>
            <p className="leading-relaxed text-lg">
              Our teachings are rooted in traditional Hatha Yoga,
              breath awareness (Pranayama), meditation, and yogic lifestyle.
              We believe in harmonizing body, mind, and soul through discipline,
              devotion, and self-awareness.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Classical Hatha Yoga</li>
              <li>• Pranayama & Meditation</li>
              <li>• Yogic Ethics (Yamas & Niyamas)</li>
              <li>• Holistic Lifestyle Living</li>
            </ul>
          </div>
          <img src={philosophyImg} alt="Philosophy" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* MEET OUR TEACHERS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Meet Our Teachers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <img
              src={teacherImg}
              alt="Teacher"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Master Anand</h3>
            <p className="text-gray-600 mt-2">
              15+ years of experience in Hatha & Meditation.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <img
              src={teacherImg}
              alt="Teacher"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Guru Meera</h3>
            <p className="text-gray-600 mt-2">
              Specialist in Pranayama & Yogic Philosophy.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <img
              src={teacherImg}
              alt="Teacher"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Yogi Arjun</h3>
            <p className="text-gray-600 mt-2">
              Ashtanga practitioner & spiritual mentor.
            </p>
          </div>
        </div>
      </section>

      {/* BALI YOGA LIFESTYLE */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img src={lifestyleImg} alt="Lifestyle" className="rounded-2xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Bali Yoga Lifestyle
            </h2>
            <p className="leading-relaxed text-lg">
              Life at Bali Yoga Kendra blends discipline with tranquility.
              From sunrise meditation to nourishing vegetarian meals,
              students immerse themselves in conscious living.
            </p>
            <p className="mt-4 leading-relaxed">
              Yoga extends beyond the mat into daily habits, food,
              thoughts, and relationships.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#f3eee7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">
            Student Testimonials
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <img
              src={testimonialImg}
              alt="Students"
              className="rounded-xl mb-6"
            />
            <p className="italic text-lg">
              "Bali Yoga Kendra transformed not just my practice, but my life.
              The teachers are deeply authentic and supportive."
            </p>
            <p className="mt-4 font-semibold">– Anna, Germany</p>
          </div>
        </div>
      </section>

    </div>
  );
}