import React from "react";

// ================= IMAGES =================
import heroImg from "../../assets/images/meditation/sunset-meditation.jpg";
import guidedImg from "../../assets/images/meditation/sunset-meditation.jpg";
import pranayamaImg from "../../assets/images/meditation/meditation.jpg";
import nidraImg from "../../assets/images/meditation/meditation.jpg";
import silentImg from "../../assets/images/meditation/hero.jpg";
import mindfulnessImg from "../../assets/images/meditation/hero.jpg";

export default function Facilities() {
  return (
    <div className="bg-[#f8f5f0] text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-8 md:py-10 md:py-10 md:py-12 text-white">

        {/* Background Image */}
        <img
          src={heroImg}
          alt="Meditation Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Heading */}
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-semibold text-center px-4">
          Meditation & Mindfulness
        </h1>

      </section>


      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-5xl mx-auto px-6 py-10 md:py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Discover Inner Stillness
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          At Bali Yoga Kendra, Meditation & Mindfulness are the heart of inner
          transformation. Through ancient yogic techniques and guided
          awareness practices, we help you cultivate clarity, emotional
          balance, and deep relaxation.
        </p>
      </section>


      {/* ================= GUIDED MEDITATION ================= */}
      <section className="max-w-6xl min-[1600px]:max-w-[1320px] min-[1920px]:max-w-[1520px] min-[2500px]:max-w-[2000px] mx-auto px-6 py-8 md:py-10 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="overflow-hidden rounded-2xl shadow-lg group bg-white p-3 aspect-[4/3] w-full flex-shrink-0">
          <img
            src={guidedImg}
            alt="Guided Meditation Classes"
            className="w-full h-full object-cover rounded-xl transform group-hover:scale-[1.03] transition duration-500"
          />
        </div>

        <div>
          <h3 className="text-2.5xl font-serif font-semibold mb-4 text-[#1c2e24]">
            Guided Meditation Classes
          </h3>
          <p className="text-stone-600 leading-relaxed max-w-xl">
            Experience structured meditation sessions led by experienced
            teachers. These classes help calm the mind, enhance focus, and
            deepen awareness through breath, visualization, and mantra-based
            practices.
          </p>
        </div>

      </section>


      {/* ================= PRANAYAMA ================= */}
      <section className="bg-white py-8 md:py-10">
        <div className="max-w-6xl min-[1600px]:max-w-[1320px] min-[1920px]:max-w-[1520px] min-[2500px]:max-w-[2000px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-2.5xl font-serif font-semibold mb-4 text-[#1c2e24]">
              Pranayama & Breathwork
            </h3>
            <p className="text-stone-600 leading-relaxed max-w-xl">
              Harness the power of breath to energize the body and calm the
              nervous system. Our pranayama sessions teach classical breathing
              techniques to improve lung capacity, mental clarity, and
              emotional stability.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg group bg-white p-3 aspect-[4/3] w-full flex-shrink-0">
            <img
              src={pranayamaImg}
              alt="Pranayama & Breathwork"
              className="w-full h-full object-cover rounded-xl transform group-hover:scale-[1.03] transition duration-500"
            />
          </div>

        </div>
      </section>


      {/* ================= YOGA NIDRA ================= */}
      <section className="max-w-6xl min-[1600px]:max-w-[1320px] min-[1920px]:max-w-[1520px] min-[2500px]:max-w-[2000px] mx-auto px-6 py-8 md:py-10 grid md:grid-cols-2 gap-12 items-center">

        <div className="overflow-hidden rounded-2xl shadow-lg group bg-white p-3 aspect-[4/3] w-full flex-shrink-0">
          <img
            src={nidraImg}
            alt="Yoga Nidra"
            className="w-full h-full object-cover rounded-xl transform group-hover:scale-[1.03] transition duration-500"
          />
        </div>

        <div>
          <h3 className="text-2.5xl font-serif font-semibold mb-4 text-[#1c2e24]">
            Yoga Nidra (Yogic Sleep)
          </h3>
          <p className="text-stone-600 leading-relaxed max-w-xl">
            Enter a state between wakefulness and sleep where profound healing
            happens. Yoga Nidra promotes deep relaxation, stress relief, and
            subconscious transformation.
          </p>
        </div>

      </section>


      {/* ================= SILENT RETREATS ================= */}
      <section className="bg-white py-8 md:py-10">
        <div className="max-w-6xl min-[1600px]:max-w-[1320px] min-[1920px]:max-w-[1520px] min-[2500px]:max-w-[2000px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-2.5xl font-serif font-semibold mb-4 text-[#1c2e24]">
              Silent Retreats
            </h3>
            <p className="text-stone-600 leading-relaxed max-w-xl">
              Immerse yourself in silence and reconnect with your inner self.
              Our silent retreats provide a peaceful sanctuary for deep
              reflection, meditation, and spiritual growth.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg group bg-white p-3 aspect-[4/3] w-full flex-shrink-0">
            <img
              src={silentImg}
              alt="Silent Retreats"
              className="w-full h-full object-cover rounded-xl transform group-hover:scale-[1.03] transition duration-500"
            />
          </div>

        </div>
      </section>


      {/* ================= MINDFULNESS PRACTICES ================= */}
      <section className="max-w-6xl min-[1600px]:max-w-[1320px] min-[1920px]:max-w-[1520px] min-[2500px]:max-w-[2000px] mx-auto px-6 py-8 md:py-10 grid md:grid-cols-2 gap-12 items-center">

        <div className="overflow-hidden rounded-2xl shadow-lg group bg-white p-3 aspect-[4/3] w-full flex-shrink-0">
          <img
            src={mindfulnessImg}
            alt="Mindfulness Practices"
            className="w-full h-full object-cover rounded-xl transform group-hover:scale-[1.03] transition duration-500"
          />
        </div>

        <div>
          <h3 className="text-2.5xl font-serif font-semibold mb-4 text-[#1c2e24]">
            Mindfulness Practices
          </h3>
          <p className="text-stone-600 leading-relaxed max-w-xl">
            Cultivate presence in daily life through mindful awareness
            techniques. These practices encourage conscious breathing,
            emotional regulation, and inner peace beyond the meditation mat.
          </p>
        </div>

      </section>


      {/* ================= CTA SECTION ================= */}
      <section className="bg-[#efe7dc] py-8 md:py-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Begin Your Meditation Journey
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          Join Bali Yoga Kendra and experience the transformative power of
          Meditation & Mindfulness in the serene energy of Bali.
        </p>
        <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Explore Programs
        </button>
      </section>

    </div>
  );
}
